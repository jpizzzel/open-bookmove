import { h } from '../lib/dom.js';
import { miniBoard } from '../lib/board.js';
import { courseStats } from '../lib/courses.js';

export function sideMark(side) {
  return h(`span.side-mark.side-${side}`, { title: side === 'white' ? 'You play White' : 'You play Black', 'aria-label': side === 'white' ? 'White' : 'Black' });
}

export function levelPill(level) {
  if (!level || level === 'custom') return null;
  return h(`span.pill.lvl-${level}`, level[0].toUpperCase() + level.slice(1));
}

export function progressBar(pct) {
  return h('div.bar', h('div.bar-fill', { style: { width: `${pct}%` } }));
}

/** Learning / young / mature split of a course, as one bar. */
export function masteryBar(s) {
  const w = (n) => `${s.total ? (n / s.total) * 100 : 0}%`;
  return h(
    'div.mastery',
    { role: 'img', 'aria-label': `${s.learned} of ${s.total} moves learned` },
    h('span.m-mature', { style: { width: w(s.mature) } }),
    h('span.m-young', { style: { width: w(s.young) } }),
    h('span.m-learning', { style: { width: w(s.learning) } }),
  );
}

export function masteryLegend(s) {
  return h(
    'div.legend',
    h('span', h('i', { style: { background: 'var(--lime)' } }), h('b', String(s.mature)), ' mastered'),
    h('span', h('i', { style: { background: 'var(--sky)' } }), h('b', String(s.young)), ' learned'),
    h('span', h('i', { style: { background: 'var(--coral)' } }), h('b', String(s.learning)), ' still shaky'),
    h('span', h('i', { style: { background: 'var(--bg-4)' } }), h('b', String(s.newCount)), ' not started'),
  );
}

/** A course shown like an opening book: diagram, title, facts, progress. */
export function courseCard(course, observer) {
  const s = courseStats(course);
  const diagram = h('div.diagram.diagram-framed');
  diagram._fen = course.tabiya.fen;
  diagram._side = course.side;
  diagram._last = course.tabiya.from ? [course.tabiya.from, course.tabiya.to] : null;
  if (observer) observer.observe(diagram);
  else mount(diagram);
  const progress = s.learned
    ? [progressBar(s.pct), h('span', s.due ? `${s.due} due` : `${s.pct}%`)]
    : [h('span', `${course.lines.length} lines, ${s.total} moves`)];
  return h(
    'a.book',
    { href: `#/course/${course.id}` },
    diagram,
    h('div.book-title', sideMark(course.side), h('span', course.name)),
    h('div.book-meta', levelPill(course.level), course.eco ? h('span.pill', course.eco) : null),
    course.description ? h('p.book-desc', course.description) : null,
    h(`div.book-progress${s.learned ? '.started' : ''}`, progress),
  );
}

function mount(el) {
  const cg = miniBoard(el, el._fen, el._side);
  if (el._last) cg.set({ lastMove: el._last });
  el._cg = cg;
}

export function lazyBoards() {
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        obs.unobserve(e.target);
        mount(e.target);
      }
    },
    { rootMargin: '300px' },
  );
  return obs;
}
