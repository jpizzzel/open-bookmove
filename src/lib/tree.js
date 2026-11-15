// Builds validated opening trees from PGN-ish line strings.
import { Chess } from 'chess.js';
import { parsePgn, newNode } from './pgn.js';

export const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

/** Merge tree `src` into tree `dst` by SAN path. Comments: keep existing, else take incoming. */
export function mergeInto(dst, src) {
  if (!dst.comment && src.comment) dst.comment = src.comment;
  if (!dst.name && src.name) dst.name = src.name;
  for (const sc of src.children) {
    let dc = dst.children.find((c) => c.san === sc.san);
    if (!dc) {
      dc = newNode(sc.san);
      dst.children.push(dc);
    }
    mergeInto(dc, sc);
  }
}

/**
 * Walk the tree with chess.js, normalising SAN and attaching fen/from/to/ply/path to each node.
 * Throws a descriptive Error on an illegal move.
 */
export function annotate(root, label = 'tree') {
  const chess = new Chess();
  root.fen = chess.fen();
  root.ply = 0;
  root.path = '';
  const walk = (node, sans) => {
    for (const child of node.children) {
      let mv;
      try {
        mv = chess.move(child.san);
      } catch {
        mv = null;
      }
      if (!mv) {
        const legal = chess.moves().join(' ');
        throw new Error(
          `${label}: illegal move "${child.san}" after "${sans.join(' ') || '(start)'}". Legal: ${legal}`,
        );
      }
      child.san = mv.san;
      child.from = mv.from;
      child.to = mv.to;
      child.color = mv.color; // 'w' | 'b' — the side that played this move
      child.fen = chess.fen();
      child.check = chess.inCheck();
      child.ply = node.ply + 1;
      const next = [...sans, mv.san];
      child.path = next.join(' ');
      Object.defineProperty(child, 'parent', { value: node, enumerable: false, writable: true, configurable: true });
      walk(child, next);
      chess.undo();
    }
  };
  walk(root, []);
  // re-merge siblings that normalised to the same SAN (e.g. "Nf3" vs "Ngf3")
  dedupe(root);
  return root;
}

function dedupe(node) {
  const seen = new Map();
  const kept = [];
  for (const c of node.children) {
    const prev = seen.get(c.san);
    if (prev) mergeInto(prev, c);
    else {
      seen.set(c.san, c);
      kept.push(c);
    }
  }
  node.children = kept;
  for (const c of kept) dedupe(c);
}

/** Parse one line string (may include {comments} and (variations)) into a tree. */
export function parseLine(moves) {
  const games = parsePgn(moves);
  const root = newNode();
  for (const g of games) mergeInto(root, g.root);
  return root;
}

function markLeafName(root, name) {
  // follow mainline (first child) to the end and tag it with the line name
  let n = root;
  while (n.children.length) n = n.children[0];
  if (n !== root && name && !n.name) n.name = name;
}

/**
 * Turn a course definition { id, name, side, lines:[{name, moves}] } into
 * { ...meta, root } with a validated, annotated tree.
 */
export function buildCourse(def) {
  const root = newNode();
  root.fen = START_FEN;
  def.lines.forEach((line, i) => {
    const t = parseLine(line.moves);
    markLeafName(t, line.name || `Line ${i + 1}`);
    mergeInto(root, t);
  });
  annotate(root, def.name || def.id);
  return { ...def, root };
}

/** Return problems with a repertoire: positions where the learner has more than one move. */
export function findConflicts(course) {
  const userColor = course.side === 'white' ? 'w' : 'b';
  const problems = [];
  const walk = (node) => {
    const toMove = node.fen.split(' ')[1];
    if (toMove === userColor && node.children.length > 1) {
      problems.push(
        `${course.id}: after "${node.path || '(start)'}" learner has ${node.children.length} moves: ${node.children
          .map((c) => c.san)
          .join(', ')}`,
      );
    }
    node.children.forEach(walk);
  };
  walk(course.root);
  return problems;
}

/** Every node (excluding root), depth-first. */
export function allNodes(root) {
  const out = [];
  const walk = (n) => {
    for (const c of n.children) {
      out.push(c);
      walk(c);
    }
  };
  walk(root);
  return out;
}

/** Nodes that are learner moves ("cards"). */
export function cardNodes(course) {
  const userColor = course.side === 'white' ? 'w' : 'b';
  return allNodes(course.root).filter((n) => n.color === userColor);
}

/** All root->leaf paths as arrays of nodes (each path is one "line"). */
export function leafPaths(root) {
  const out = [];
  const walk = (n, acc) => {
    if (!n.children.length) {
      if (acc.length) out.push(acc);
      return;
    }
    for (const c of n.children) walk(c, [...acc, c]);
  };
  walk(root, []);
  return out;
}

/** Convert a tree back to PGN movetext with variations and comments. */
export function toPgn(root, headers = {}) {
  const esc = (t) => t.replace(/[{}]/g, '');
  const moveText = (n, force) => {
    const no = Math.ceil(n.ply / 2);
    const num = n.color === 'w' ? `${no}. ` : force ? `${no}... ` : '';
    return num + n.san + ' ' + (n.comment ? `{${esc(n.comment)}} ` : '');
  };
  const emitLine = (node, forceNum) => {
    let s = '';
    let cur = node;
    let force = forceNum;
    while (cur.children.length) {
      const [main, ...alts] = cur.children;
      s += moveText(main, force);
      force = !!main.comment;
      for (const alt of alts) {
        s += '(' + moveText(alt, true) + emitLine(alt, !!alt.comment).trim() + ') ';
        force = true;
      }
      cur = main;
    }
    return s;
  };
  let out = '';
  const NL = String.fromCharCode(10);
  for (const [k, v] of Object.entries(headers)) out += `[${k} "${String(v).replace(/"/g, "'")}"]` + NL;
  if (out) out += NL;
  if (root.comment) out += `{${esc(root.comment)}} `;
  out += emitLine(root, true);
  return out.trim() + ' *' + NL;
}

/** Strip derived fields so a tree can be stored as JSON. */
export function serializeTree(node) {
  const o = { san: node.san, children: node.children.map(serializeTree) };
  if (node.comment) o.comment = node.comment;
  if (node.name) o.name = node.name;
  return o;
}

export function cloneTree(node) {
  return JSON.parse(JSON.stringify(serializeTree(node)));
}

/** Keep only the first learner move wherever the learner has several. Returns number of positions pruned. */
export function pruneConflicts(root, side) {
  const userColor = side === 'white' ? 'w' : 'b';
  let pruned = 0;
  const walk = (n) => {
    const toMove = n.fen.split(' ')[1];
    if (toMove === userColor && n.children.length > 1) {
      n.children = [n.children[0]];
      pruned++;
    }
    n.children.forEach(walk);
  };
  walk(root);
  return pruned;
}
