import { h, put } from '../lib/dom.js';
import { getCourses, CATEGORIES } from '../lib/courses.js';
import { courseCard, lazyBoards } from './common.js';

const saved = { side: 'all', level: 'all', q: '' };

const SHELF_COPY = {
  e4: 'Openings that start with 1.e4',
  d4: 'Openings that start with 1.d4',
  flank: 'Flank openings for White',
  'vs-e4': 'Defenses against 1.e4',
  'vs-d4': 'Defenses against 1.d4',
  'vs-flank': 'Defenses against 1.c4 and 1.Nf3',
};

export function libraryView(root) {
  const courses = getCourses().filter((c) => !c.custom);
  const obs = lazyBoards();
  const shelves = h('div');
  const count = h('span.faint');

  const seg = h(
    'div.segmented',
    [
      ['all', 'Both sides'],
      ['white', 'I play White'],
      ['black', 'I play Black'],
    ].map(([v, label]) =>
      h(
        `button${saved.side === v ? '.active' : ''}`,
        {
          onclick: (e) => {
            saved.side = v;
            seg.querySelectorAll('button').forEach((b) => b.classList.toggle('active', b === e.currentTarget));
            update();
          },
        },
        label,
      ),
    ),
  );
  const level = h(
    'select',
    { 'aria-label': 'Level', onchange: (e) => { saved.level = e.target.value; update(); } },
    [['all', 'Any level'], ['beginner', 'Beginner'], ['intermediate', 'Intermediate'], ['advanced', 'Advanced']].map(([v, l]) => h('option', { value: v, selected: saved.level === v }, l)),
  );
  const search = h('input.search', {
    type: 'search',
    placeholder: 'Search: Sicilian, gambit, Bb5…',
    'aria-label': 'Search openings',
    value: saved.q,
    oninput: (e) => { saved.q = e.target.value; update(); },
  });

  put(root, 
    h('div.lib-head', h('div', h('h1', 'The opening library'), h('p.muted', 'Every course is free. Pick the side you play, then an opening.')), count),
    h('div.lib-tools', seg, search, level),
    shelves,
  );

  function update() {
    const q = saved.q.trim().toLowerCase();
    const list = courses.filter(
      (c) =>
        (saved.side === 'all' || c.side === saved.side) &&
        (saved.level === 'all' || c.level === saved.level) &&
        (!q || `${c.name} ${c.eco || ''} ${c.description} ${c.lines.map((l) => l.name).join(' ')}`.toLowerCase().includes(q)),
    );
    shelves.querySelectorAll('.diagram').forEach((b) => {
      obs.unobserve(b);
      b._cg?.destroy();
    });
    shelves.replaceChildren();
    for (const cat of Object.keys(CATEGORIES)) {
      const items = list.filter((c) => c.category === cat);
      if (!items.length) continue;
      put(shelves, 
        h('section.shelf', h('div.shelf-head', h('h2', SHELF_COPY[cat] || CATEGORIES[cat]), h('span', String(items.length))), h('div.course-grid', items.map((c) => courseCard(c, obs)))),
      );
    }
    if (!list.length) put(shelves, h('div.empty', { style: { marginTop: '32px' } }, h('p', 'No openings match. Try a different search or clear the filters.')));
    count.textContent = `${list.length} of ${courses.length} openings`;
  }
  update();
  return () => obs.disconnect();
}
