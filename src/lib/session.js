// Plans training "runs": a run is one path from the start position that the learner plays through.
import { store } from './store.js';
import { cardId } from './courses.js';
import { isDue } from './srs.js';

/** Index to fast-forward to: a couple of moves of context before the first important move. */
function jumpTo(idx) {
  if (store.settings.reviewFromStart || idx < 0) return 0;
  const at = Math.max(0, idx - 4);
  return at < 4 ? 0 : at;
}

/** Next line in `course` that still contains unlearned moves (optionally a specific line). */
export function nextLearnRun(course, { lineIndex = null, skip = new Set() } = {}) {
  const lines = lineIndex === null ? course.lines : [course.lines[lineIndex]].filter(Boolean);
  for (const line of lines) {
    if (skip.has(line.index)) continue;
    const fresh = line.cards.filter((n) => !store.cards[cardId(course, n)]);
    if (!fresh.length) continue;
    // stop the run just after the opponent's reply to the last new move (keeps runs short)
    const lastNew = line.nodes.indexOf(fresh[fresh.length - 1]);
    const firstNew = line.nodes.indexOf(fresh[0]);
    const end = Math.min(line.nodes.length, lastNew + 2);
    return {
      mode: 'learn',
      startAt: jumpTo(firstNew),
      course,
      line,
      nodes: line.nodes.slice(0, end),
      fresh: new Set(fresh.map((n) => n.path)),
    };
  }
  return null;
}

function bestContinuation(node, targets) {
  // DFS for the descending path that covers the most target nodes
  let best = { count: 0, path: [] };
  const walk = (n, acc, count) => {
    const c = count + (targets.has(n) ? 1 : 0);
    if (!n.children.length) {
      if (c > best.count || (c === best.count && acc.length < best.path.length && c > 0)) best = { count: c, path: acc };
      return;
    }
    for (const ch of n.children) walk(ch, [...acc, ch], c);
  };
  for (const ch of node.children) walk(ch, [ch], 0);
  return best.path;
}

function ancestors(node) {
  const out = [];
  let n = node;
  while (n && n.san) {
    out.unshift(n);
    n = n.parent;
  }
  return out;
}

/** Build a run covering `node` plus as many other `targets` as possible. */
function runThrough(course, node, targets, mode) {
  const nodes = [...ancestors(node), ...bestContinuation(node, targets)];
  let last = 0;
  nodes.forEach((n, i) => {
    if (targets.has(n)) last = i;
  });
  // include the opponent's reply after the final target move, for context
  const trimmed = nodes.slice(0, Math.min(nodes.length, last + 2));
  const first = trimmed.findIndex((n) => targets.has(n));
  return { mode, course, nodes: trimmed, startAt: jumpTo(first), targets: new Set(trimmed.filter((n) => targets.has(n)).map((n) => n.path)) };
}

/** Due cards across `courses`, as a Map(course -> Set(node)). */
export function dueTargets(courses, now = Date.now()) {
  const out = new Map();
  for (const course of courses) {
    const set = new Set();
    for (const n of course.cards) if (isDue(store.cards[cardId(course, n)], now)) set.add(n);
    if (set.size) out.set(course, set);
  }
  return out;
}

export function countTargets(map) {
  let n = 0;
  for (const s of map.values()) n += s.size;
  return n;
}

/** Take the next review run from a Map(course -> Set(node)), removing covered nodes. */
export function nextReviewRun(targetMap, mode = 'review') {
  for (const [course, set] of targetMap) {
    if (!set.size) {
      targetMap.delete(course);
      continue;
    }
    // earliest node in tree order first, so reviews follow the natural move order
    const first = course.cards.find((n) => set.has(n));
    const run = runThrough(course, first, set, mode);
    for (const n of run.nodes) set.delete(n);
    if (!set.size) targetMap.delete(course);
    return run;
  }
  return null;
}

/** A practice run through a random (or chosen) line, testing every learner move. */
export function practiceRun(course, lineIndex = null, onlyLearned = true) {
  let pool = course.lines;
  if (lineIndex !== null) pool = [course.lines[lineIndex]];
  else if (onlyLearned) {
    const learned = pool.filter((l) => l.cards.some((n) => store.cards[cardId(course, n)]));
    if (learned.length) pool = learned;
  }
  const line = pool[Math.floor(Math.random() * pool.length)];
  if (!line) return null;
  return { mode: 'practice', course, line, nodes: line.nodes, startAt: 0, targets: new Set(line.cards.map((n) => n.path)) };
}

/** Map(course -> Set(node)) of moves you have been getting wrong. */
export function weakTargets(list) {
  const out = new Map();
  for (const { course, node } of list) {
    if (!out.has(course)) out.set(course, new Set());
    out.get(course).add(node);
  }
  return out;
}
