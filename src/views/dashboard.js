import { h, moveLabel, put } from '../lib/dom.js';
import { getCourses, getCourse, courseStats, globalStats, forecast, weakMoves, todayCount } from '../lib/courses.js';
import { miniBoard } from '../lib/board.js';
import { store, streak, today } from '../lib/store.js';
import { courseCard, lazyBoards, masteryBar } from './common.js';

export function dashboardView(root) {
  const courses = getCourses();
  const started = courses.filter((c) => courseStats(c).learned > 0);
  const obs = lazyBoards();
  const cleanups = [() => obs.disconnect()];
  if (!started.length) welcome(root, courses, obs, cleanups);
  else home(root, started, obs);
  return () => cleanups.forEach((f) => f());
}

// ---------- first visit ----------
function welcome(root, courses, obs, cleanups) {
  const picks = ['italian-game', 'london-system', 'caro-kann', 'queens-gambit', 'sicilian-najdorf', 'kings-indian-defense', 'french-defense', 'english-opening']
    .map((id) => courses.find((c) => c.id === id))
    .filter(Boolean);
  const builtIn = courses.filter((c) => !c.custom);
  const total = builtIn.length;
  const lineCount = builtIn.reduce((a, c) => a + c.lines.length, 0);
  const moveCount = builtIn.reduce((a, c) => a + c.cards.length, 0);

  const diagram = h('div.diagram');
  const chip = h('span.mv-chip');
  const noteText = h('p');
  const steps = h('div.demo-steps');
  const demoName = h('span.faint');

  put(
    root,
    h(
      'section.hero',
      h(
        'div',
        h('h1', 'Opening theory you will actually remember.'),
        h('p.lead', 'Learn openings line by line, with a note on every key move. Then review each move right before you would forget it.'),
        h('div.actions', h('a.btn.btn-primary.btn-lg', { href: '#/library' }, 'Choose an opening'), h('a.btn.btn-lg', { href: '#/my' }, 'Import a PGN')),
        h(
          'div.hero-meta',
          h('span', h('b', String(total)), ' openings'),
          h('span', h('b', String(lineCount)), ' lines'),
          h('span', h('b', moveCount.toLocaleString()), ' moves to learn'),
          h('span', 'Free and open source'),
        ),
      ),
      h('div.demo', { 'aria-hidden': 'true' }, h('div.board-frame', diagram), h('div.demo-note', h('div.demo-head', chip, demoName), noteText, steps)),
    ),
    h(
      'ol.method',
      h('li', h('span.step-no', '1'), h('b', 'Follow the line'), h('span', 'Each new move is shown with an arrow and a short note on the idea behind it.')),
      h('li', h('span.step-no', '2'), h('b', 'Play it back'), h('span', 'Replay the whole line from memory. A move only counts as learned once you can.')),
      h('li', h('span.step-no', '3'), h('b', 'Review on schedule'), h('span', 'Every move gets its own timer: tomorrow, in 3 days, in a week, then longer. Misses come back sooner.')),
    ),
    h('div.section-head', h('h2', 'Start with one of these'), h('a', { href: '#/library' }, `See all ${total} openings`)),
    h('div.course-grid', picks.map((c) => courseCard(c, obs))),
  );

  // the demo teaches a line the way the trainer does: arrow first, then the move, then its note
  const demo = picks[0];
  if (!demo) return;
  const line = demo.lines[0].nodes;
  const start = line[0].parent.fen;
  const cg = miniBoard(diagram, start, demo.side);
  cg.set({ animation: { enabled: true, duration: 380 }, drawable: { enabled: false, visible: true } });
  steps.replaceChildren(...line.map(() => h('span')));
  demoName.textContent = demo.name;
  const show = (n, idx) => {
    chip.textContent = moveLabel(n);
    chip.classList.toggle('mine', n.color === demo.userColor);
    noteText.textContent = n.comment || (n.color === demo.userColor ? 'Your move in this line.' : 'A typical reply from your opponent.');
    steps.querySelectorAll('span').forEach((s, k) => s.classList.toggle('on', k <= idx));
  };
  chip.textContent = 'Start';
  noteText.textContent = demo.description;

  let i = 0;
  let timer;
  const tick = () => {
    if (i >= line.length) {
      timer = setTimeout(() => {
        i = 0;
        cg.set({ fen: start, lastMove: undefined });
        cg.setAutoShapes([]);
        chip.textContent = 'Start';
        chip.classList.remove('mine');
        noteText.textContent = demo.description;
        steps.querySelectorAll('span').forEach((s) => s.classList.remove('on'));
        timer = setTimeout(tick, 1200);
      }, 3200);
      return;
    }
    const n = line[i];
    const idx = i++;
    cg.setAutoShapes([{ orig: n.from, dest: n.to, brush: n.color === demo.userColor ? 'green' : 'blue' }]);
    timer = setTimeout(() => {
      cg.setAutoShapes([]);
      cg.set({ fen: n.fen, lastMove: [n.from, n.to] });
      show(n, idx);
      timer = setTimeout(tick, n.comment ? 2600 : 1000);
    }, 650);
  };
  timer = setTimeout(tick, 900);
  cleanups.push(() => {
    clearTimeout(timer);
    cg.destroy();
  });
}

// ---------- returning learner ----------
function home(root, started, obs) {
  const g = globalStats();
  const last = (store.meta.lastCourse && getCourse(store.meta.lastCourse)) || started[0];
  const ls = courseStats(last);
  const done = todayCount();
  const goal = store.settings.dailyGoal || 20;
  const weak = weakMoves(started, 6);

  const headline = g.due
    ? `${g.due} move${g.due === 1 ? ' is' : 's are'} waiting for review.`
    : ls.newCount
      ? `Nothing is due. Time to learn something new.`
      : 'You are fully up to date.';

  const contBoard = h('div.diagram');
  put(root, 
    h(
      'section.today',
      h(
        'div.today-main',
        h('h1', headline),
        h('p.muted', g.due ? 'Reviews take a few minutes and keep every line you have learned sharp.' : 'Reviews will appear here when moves are due.'),
        h(
          'div.actions',
          g.due ? h('a.btn.btn-primary.btn-lg', { href: '#/train?mode=review' }, `Review ${g.due} move${g.due === 1 ? '' : 's'}`) : null,
          ls.newCount ? h(`a.btn.btn-lg${g.due ? '' : '.btn-primary'}`, { href: `#/train?mode=learn&course=${last.id}` }, `Learn more ${last.name}`) : h('a.btn.btn-lg', { href: '#/library' }, 'Find a new opening'),
          weak.length ? h('a.btn.btn-lg.btn-quiet', { href: '#/train?mode=drill' }, 'Drill my mistakes') : null,
        ),
      ),
      h(
        'div.today-side',
        h('div.goal', ring(done, goal), h('div', h('b', done >= goal ? 'Daily goal reached' : `${goal - done} moves to your daily goal`), h('span.muted.small', `${streak()} day streak`))),
        h('a.continue', { href: `#/course/${last.id}` }, contBoard, h('div', h('span.faint.small', 'Continue'), h('b', last.name), masteryBar(ls), h('span.faint.small', `${ls.learned} of ${ls.total} moves learned`))),
      ),
    ),
    h(
      'div.stats-row',
      stat(g.learned, 'moves learned'),
      stat(g.mature, 'mastered', 'Moves with a review interval of 3 weeks or more'),
      stat(streak(), 'day streak'),
      stat(g.courses, g.courses === 1 ? 'opening in progress' : 'openings in progress'),
    ),
    h(
      'div.two-col',
      h('section.sheet', h('h3', 'Due this week'), forecastChart()),
      weak.length
        ? h(
            'section.sheet',
            h('h3', 'Moves you keep missing'),
            h('div.weak-list', weak.map((w) => h('div.weak', h('span', h('b', moveLabel(w.node)), h('span.faint', ` in ${w.course.name}`)), h('span.faint', `${w.card.l} miss${w.card.l === 1 ? '' : 'es'}`)))),
            h('a.btn.btn-sm', { href: '#/train?mode=drill', style: { marginTop: '12px' } }, 'Drill these'),
          )
        : h('section.sheet', h('h3', 'Activity'), heatmap()),
    ),
    weak.length ? h('section.sheet', { style: { marginTop: '24px' } }, h('h3', 'Activity'), heatmap()) : null,
    h('div.section-head', h('h2', 'Your openings'), h('a', { href: '#/library' }, 'Browse all openings')),
    h('div.course-grid', started.map((c) => courseCard(c, obs))),
  );
  const cg = miniBoard(contBoard, last.tabiya.fen, last.side);
  if (last.tabiya.from) cg.set({ lastMove: [last.tabiya.from, last.tabiya.to] });
}

function ring(value, goal) {
  const r = 30;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, value / goal);
  const svg = `<svg class="ring" viewBox="0 0 76 76" aria-label="${value} of ${goal}"><circle class="track" cx="38" cy="38" r="${r}"/><circle class="val" cx="38" cy="38" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}"/><text x="38" y="38">${value}</text></svg>`;
  return h('div', { html: svg });
}

function stat(value, label, title) {
  return h('div', { title }, h('b', String(value)), h('span', label));
}

function forecastChart() {
  const f = forecast(7);
  const max = Math.max(1, ...f);
  const d = new Date();
  const days = ['Today', 'Tomorrow'];
  for (let i = 2; i < 7; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    days.push(x.toLocaleDateString(undefined, { weekday: 'short' }));
  }
  return h(
    'div.forecast',
    f.map((n, i) => h('div.fc-col', { title: `${n} due` }, h('span.fc-n', n ? String(n) : ''), h('div.fc-bar', { style: { height: `${(n / max) * 100}%` } }), h('span.fc-day', days[i]))),
  );
}

function heatmap() {
  const weeks = 20;
  const end = new Date();
  const start = new Date(end);
  start.setDate(end.getDate() - weeks * 7 - end.getDay());
  const max = Math.max(4, ...Object.values(store.activity));
  const cols = [];
  const cur = new Date(start);
  for (let w = 0; w <= weeks; w++) {
    const col = h('div.hm-col');
    for (let d = 0; d < 7; d++) {
      const k = today(cur);
      const n = store.activity[k] || 0;
      const lvl = n === 0 ? 0 : Math.min(4, Math.ceil((n / max) * 4));
      put(col, h(`div.hm-cell.l${lvl}${cur > end ? '.future' : ''}`, { title: `${k}: ${n} move${n === 1 ? '' : 's'}` }));
      cur.setDate(cur.getDate() + 1);
    }
    cols.push(col);
  }
  return h('div.heatmap', cols);
}
