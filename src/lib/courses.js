// Registry of built-in + user-made courses, and progress statistics.
import { buildCourse, annotate, cardNodes, leafPaths, serializeTree, START_FEN } from './tree.js';
import { newNode } from './pgn.js';
import { store, save } from './store.js';
import { isDue, stage } from './srs.js';

const modules = import.meta.glob('../data/courses/*.js', { eager: true });

export const CATEGORIES = {
  e4: '1.e4 openings',
  d4: '1.d4 openings',
  flank: 'Flank openings',
  'vs-e4': 'Defenses vs 1.e4',
  'vs-d4': 'Defenses vs 1.d4',
  'vs-flank': 'Defenses vs 1.c4 / 1.Nf3',
  custom: 'My repertoires',
};
const CATEGORY_ORDER = Object.keys(CATEGORIES);

let builtIns = null;
const customCache = new Map();

function loadBuiltIns() {
  if (builtIns) return builtIns;
  const defs = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .flatMap(([, m]) => m.default || []);
  builtIns = [];
  for (const def of defs) {
    try {
      builtIns.push(finish(buildCourse(def)));
    } catch (e) {
      console.error('Skipping broken course', def.id, e);
    }
  }
  builtIns.sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category) || a.name.localeCompare(b.name),
  );
  return builtIns;
}

function finish(course) {
  course.userColor = course.side === 'white' ? 'w' : 'b';
  course.cards = cardNodes(course);
  course.lines = leafPaths(course.root).map((nodes, i) => {
    const leaf = nodes[nodes.length - 1];
    return { index: i, nodes, leaf, name: leaf.name || autoName(nodes), cards: nodes.filter((n) => n.color === course.userColor) };
  });
  let t = course.root;
  while (t.children.length === 1 && t.children[0].children.length) t = t.children[0];
  course.tabiya = t;
  return course;
}

function autoName(nodes) {
  const tail = nodes.slice(-4);
  return tail
    .map((n) => (n.color === 'w' || n === tail[0] ? `${Math.ceil(n.ply / 2)}${n.color === 'w' ? '.' : '…'}` : '') + n.san)
    .join(' ');
}

function buildCustom(entry) {
  const cached = customCache.get(entry.id);
  if (cached && cached._src === entry) return cached;
  const root = JSON.parse(JSON.stringify(entry.tree || newNode()));
  root.san = null;
  try {
    annotate(root, entry.name);
  } catch (e) {
    console.error('Broken custom course', entry.id, e);
    root.children = [];
    annotate(root);
  }
  root.fen = START_FEN;
  const course = finish({ ...entry, category: 'custom', level: entry.level || 'custom', custom: true, root });
  course._src = entry;
  customCache.set(entry.id, course);
  return course;
}

export function getCourses() {
  return [...loadBuiltIns(), ...store.custom.map(buildCustom)];
}

export function getCourse(id) {
  return getCourses().find((c) => c.id === id) || null;
}

export function cardId(course, node) {
  return `${course.id}|${node.path}`;
}

export function getCard(course, node) {
  return store.cards[cardId(course, node)];
}

export function setCard(course, node, card) {
  store.cards[cardId(course, node)] = card;
  save();
}

export function courseStats(course, now = Date.now()) {
  const s = { total: course.cards.length, learned: 0, due: 0, mature: 0, learning: 0, young: 0 };
  for (const n of course.cards) {
    const c = store.cards[cardId(course, n)];
    if (!c) continue;
    s.learned++;
    if (isDue(c, now)) s.due++;
    const st = stage(c);
    if (st === 'mature') s.mature++;
    if (st === 'learning') s.learning++;
    if (st === 'young') s.young++;
  }
  s.newCount = s.total - s.learned;
  s.pct = s.total ? Math.round((s.learned / s.total) * 100) : 0;
  return s;
}

export function lineStats(course, line, now = Date.now()) {
  let learned = 0;
  let due = 0;
  for (const n of line.cards) {
    const c = store.cards[cardId(course, n)];
    if (c) {
      learned++;
      if (isDue(c, now)) due++;
    }
  }
  return { total: line.cards.length, learned, due };
}

export function globalStats(now = Date.now()) {
  const out = { learned: 0, due: 0, mature: 0, courses: 0 };
  for (const c of getCourses()) {
    const s = courseStats(c, now);
    if (s.learned) out.courses++;
    out.learned += s.learned;
    out.due += s.due;
    out.mature += s.mature;
  }
  return out;
}

/** How many cards fall due on each of the next `days` days. */
export function forecast(days = 7, now = Date.now()) {
  const known = new Set();
  for (const c of getCourses()) for (const n of c.cards) known.add(cardId(c, n));
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const buckets = Array(days).fill(0);
  for (const [id, card] of Object.entries(store.cards)) {
    if (!known.has(id)) continue;
    const idx = Math.max(0, Math.floor((card.d - start.getTime()) / 86400000));
    if (idx < days) buckets[idx]++;
  }
  return buckets;
}

/**
 * Group a course's lines into chapters by the opponent's first branching move after the tabiya.
 * Returns [{ title, node, lines }].
 */
export function chapters(course) {
  const t = course.tabiya;
  if (t.children.length < 2) return [{ title: course.name, node: null, lines: course.lines }];
  return t.children.map((child) => {
    const lines = course.lines.filter((l) => l.nodes[child.ply - 1] === child);
    const prefixes = lines.map((l) => (l.name.includes(':') ? l.name.split(':')[0].trim() : null));
    const shared = prefixes[0] && prefixes.every((p) => p === prefixes[0]) ? prefixes[0] : null;
    return { title: shared, node: child, lines };
  });
}

/** Learned moves you keep getting wrong, most troublesome first. */
export function weakMoves(courses = getCourses(), limit = 50) {
  const out = [];
  for (const course of courses) {
    for (const n of course.cards) {
      const c = store.cards[cardId(course, n)];
      if (c && (c.l > 0 || c.e < 2.3)) out.push({ course, node: n, card: c, score: c.l * 2 + (2.5 - c.e) * 4 + (c.i < 1 ? 2 : 0) });
    }
  }
  return out.sort((a, b) => b.score - a.score).slice(0, limit);
}

export function todayCount() {
  const d = new Date();
  const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return store.activity[k] || 0;
}

// ---------- custom courses ----------

export function saveCustomCourse(course) {
  const i = store.custom.findIndex((c) => c.id === course.id);
  const entry = {
    id: course.id,
    name: course.name,
    side: course.side,
    description: course.description || '',
    created: course.created || Date.now(),
    updated: Date.now(),
    tree: serializeTree(course.root),
  };
  if (i >= 0) store.custom[i] = entry;
  else store.custom.push(entry);
  save();
  return buildCustom(entry);
}

export function deleteCustomCourse(id) {
  store.custom = store.custom.filter((c) => c.id !== id);
  customCache.delete(id);
  const prefix = `${id}|`;
  for (const k of Object.keys(store.cards)) if (k.startsWith(prefix)) delete store.cards[k];
  save();
}

export function newCustomId() {
  return `my-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

/** Recompute derived info after editing a course tree in place. */
export function refreshCourse(course) {
  annotate(course.root, course.name);
  return finish(course);
}
