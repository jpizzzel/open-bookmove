import { h, clear, fan, moveLabel, put } from '../lib/dom.js';
import { createBoard } from '../lib/board.js';
import { START_FEN } from '../lib/tree.js';
import { getCourse, getCourses, getCard, setCard, courseStats, weakMoves } from '../lib/courses.js';
import { nextLearnRun, nextReviewRun, dueTargets, countTargets, practiceRun, weakTargets } from '../lib/session.js';
import { learned, review, formatInterval } from '../lib/srs.js';
import { store, logActivity } from '../lib/store.js';
import { sound } from '../lib/sound.js';
import { navigate } from '../router.js';

const MODE_LABEL = { learn: 'Learning new moves', review: 'Review', practice: 'Practice', drill: 'Drilling your mistakes' };
const ICON = { info: '♘', good: '!', bad: '?', new: '+', hint: '…' };

export function trainerView(root, params) {
  const mode = MODE_LABEL[params.mode] ? params.mode : 'review';
  const courseId = params.course || null;
  const lineIndex = params.line !== undefined ? Number(params.line) : null;
  const course = courseId ? getCourse(courseId) : null;
  if (courseId && !course) {
    put(root, h('div.empty', h('h2', 'Course not found'), h('a.btn', { href: '#/library' }, 'Browse openings')));
    return;
  }
  if ((mode === 'learn' || mode === 'practice') && !course) {
    navigate('#/library');
    return;
  }

  // ---------- layout ----------
  const boardEl = h('div.board');
  const frame = h('div.board-frame', boardEl);
  const statusIcon = h('div.status-icon', ICON.info);
  const statusText = h('div');
  const statusEl = h('div.status', statusIcon, statusText);
  const modeEl = h('div.bp-mode', MODE_LABEL[mode]);
  const titleEl = h('div.bp-title');
  const lineEl = h('div.bp-line');
  const progressEl = h('div.bp-progress');
  const annotEl = h('div.annot');
  const sheetEl = h('div.scoresheet');
  const controlsEl = h('div.bp-controls');
  const panel = h('aside.book-panel', h('div.bp-head', modeEl, titleEl, lineEl, progressEl), annotEl, sheetEl, controlsEl);

  put(root, h('div.trainer', h('div.stage', frame, statusEl), panel));
  const board = createBoard(boardEl, { orientation: course ? course.side : 'white', onMove: onUserMove });

  // ---------- session state ----------
  const session = {
    correct: 0,
    graded: 0,
    wrong: 0,
    learnedCount: 0,
    reviewedCount: 0,
    runsDone: 0,
    missed: [], // { course, node }
    retry: new Map(),
    targets: null,
    retryPass: false,
    startTotal: 0,
  };
  let run = null;
  let st = null;
  let timer = null;
  let destroyed = false;

  if (mode === 'review') session.targets = dueTargets(course ? [course] : getCourses());
  if (mode === 'drill') session.targets = weakTargets(weakMoves(course ? [course] : getCourses(), 30));
  if (session.targets) session.startTotal = countTargets(session.targets);

  function later(fn, ms) {
    clearTimeout(timer);
    timer = setTimeout(() => !destroyed && fn(), ms);
  }
  const userColor = () => run.course.userColor;

  // ---------- run lifecycle ----------
  function nextRun() {
    if (mode === 'learn') return nextLearnRun(course, { lineIndex });
    if (mode === 'practice') return practiceRun(course, lineIndex);
    let r = nextReviewRun(session.targets, mode);
    if (!r && mode === 'review' && session.retry.size) {
      session.targets = session.retry;
      session.retry = new Map();
      session.retryPass = true;
      r = nextReviewRun(session.targets, mode);
    }
    return r;
  }

  function startNext() {
    if (mode === 'learn' && lineIndex === null && session.learnedCount >= store.settings.newPerSession) return summary('limit');
    const r = nextRun();
    if (!r) return summary('done');
    startRun(r);
  }

  function startRun(r, fromStart = false) {
    run = r;
    st = {
      idx: 0,
      startAt: fromStart ? 0 : r.startAt || 0,
      phase: r.mode === 'learn' ? 'teach' : 'quiz',
      mistakes: new Map(),
      hints: new Map(),
      finished: false,
      ff: true,
    };
    board.setOrientation(r.course.side);
    board.setFen(START_FEN);
    board.shapes([]);
    board.glyph(null);
    board.setInteractive(null);
    titleEl.replaceChildren(h('a', { href: `#/course/${r.course.id}` }, r.course.name));
    lineEl.textContent = r.line ? r.line.name : 'Due moves from this opening';
    annotate(null);
    renderSheet();
    renderControls();
    renderProgress();
    if (st.startAt > 0) {
      setStatus('info', 'Skipping ahead', `Jumping to move ${Math.ceil(r.nodes[st.startAt].ply / 2)}, where your moves are.`);
      fastForward();
    } else {
      st.ff = false;
      later(step, 300);
    }
  }

  // replay the moves you don't need to be tested on, quickly
  function fastForward() {
    if (st.idx >= st.startAt) {
      st.ff = false;
      renderSheet();
      return later(step, 250);
    }
    const node = run.nodes[st.idx];
    board.play(node.san, st.idx === st.startAt - 1);
    st.idx++;
    renderSheet();
    later(fastForward, 70);
  }

  function step() {
    if (!run) return;
    if (st.idx >= run.nodes.length) return endPhase();
    const node = run.nodes[st.idx];
    if (node.color !== userColor()) {
      board.setInteractive(null);
      later(() => {
        board.play(node.san);
        board.glyph(null);
        annotate(node, true);
        st.idx++;
        renderSheet();
        step();
      }, st.idx === 0 ? 350 : store.settings.opponentDelay);
      return;
    }
    const isNew = run.mode === 'learn' && run.fresh.has(node.path);
    if (st.phase === 'teach' && isNew) {
      board.arrow(node.from, node.to, 'green');
      board.glyph(node.to, 'new', '+');
      setStatus('new', 'New move', `Play ${moveLabel(node)}`);
      if (node.comment) annotatePreview(node);
    } else if (st.phase === 'quiz' && run.mode === 'learn') {
      setStatus('info', 'From memory', 'What do you play here?');
    } else {
      const graded = run.targets?.has(node.path);
      setStatus('info', 'Your move', graded || run.mode !== 'review' ? 'What do you play here?' : 'Warm-up move');
    }
    board.setInteractive(userColor());
    renderControls();
  }

  function onUserMove(san, mv) {
    if (!run || st.ff || st.idx >= run.nodes.length) return;
    const node = run.nodes[st.idx];
    if (node.color !== userColor()) return;
    board.setInteractive(null);
    if (san === node.san) {
      board.shapes([]);
      const firstTry = !st.mistakes.get(node.path) && !st.hints.get(node.path);
      board.glyph(node.to, 'good', '!');
      if (firstTry) sound.correct();
      grade(node, firstTry);
      annotate(node, true);
      st.idx++;
      renderSheet();
      if (firstTry && !(st.phase === 'teach' && run.fresh?.has(node.path))) setStatus('good', 'Correct', `${moveLabel(node)} is right.`);
      later(step, 260);
      return;
    }
    board.flash('bad');
    board.glyph(mv.to, 'bad', '?');
    sound.wrong();
    const m = (st.mistakes.get(node.path) || 0) + 1;
    st.mistakes.set(node.path, m);
    if (!(st.phase === 'teach' && run.fresh?.has(node.path))) session.wrong++;
    setStatus('bad', `${fan(san)} is not your move`, m >= 2 ? `The answer is ${moveLabel(node)}. Follow the arrow.` : 'Have another try.');
    later(() => {
      board.undo();
      board.glyph(null);
      if (m >= 2 || (st.phase === 'teach' && run.fresh?.has(node.path))) {
        board.arrow(node.from, node.to, m >= 2 ? 'red' : 'green');
        if (node.comment) annotatePreview(node);
      }
      board.setInteractive(userColor());
    }, 650);
  }

  function grade(node, firstTry) {
    const c = run.course;
    const existing = getCard(c, node);
    const now = Date.now();
    // restarting a line must not grade the same move twice
    if (!run.graded) run.graded = new Set();
    const key = `${st.phase}|${node.path}`;
    if (run.graded.has(key)) return;
    run.graded.add(key);
    const miss = () => {
      if (!session.missed.some((x) => x.node === node)) session.missed.push({ course: c, node });
    };
    if (run.mode === 'learn') {
      if (run.fresh.has(node.path)) {
        if (st.phase === 'quiz') {
          setCard(c, node, learned(now, !firstTry));
          session.learnedCount++;
          session.graded++;
          if (firstTry) session.correct++;
          else miss();
          logActivity();
        }
      } else if (existing && !firstTry) {
        setCard(c, node, review(existing, false, now));
        miss();
      }
      return;
    }
    if (run.mode === 'review') {
      if (run.targets.has(node.path) && existing) {
        setCard(c, node, review(existing, firstTry, now));
        session.reviewedCount++;
        session.graded++;
        if (firstTry) session.correct++;
        logActivity();
      } else if (existing && !firstTry) {
        setCard(c, node, review(existing, false, now));
      }
      if (!firstTry && existing) {
        miss();
        if (!session.retry.has(c)) session.retry.set(c, new Set());
        session.retry.get(c).add(node);
      }
      renderProgress();
      return;
    }
    // practice & drill: only mistakes change the schedule
    if (run.targets.has(node.path)) {
      session.graded++;
      if (firstTry) session.correct++;
      else {
        miss();
        if (existing) setCard(c, node, review(existing, false, now));
      }
    }
    renderProgress();
  }

  function endPhase() {
    board.setInteractive(null);
    if (run.mode === 'learn' && st.phase === 'teach') {
      st.phase = 'quiz';
      st.mistakes.clear();
      st.hints.clear();
      setStatus('info', 'Now from memory', 'Play the line again. No arrows this time.');
      later(() => {
        st.idx = 0;
        st.ff = true;
        board.setFen(START_FEN);
        board.shapes([]);
        board.glyph(null);
        annotate(null);
        renderSheet();
        fastForward();
      }, 1200);
      return;
    }
    st.finished = true;
    session.runsDone++;
    sound.done();
    renderProgress();
    if (run.mode === 'review' || run.mode === 'drill') {
      setStatus('good', 'Line complete', 'Next one coming up.');
      renderControls();
      later(startNext, 1000);
      return;
    }
    if (run.mode === 'learn') {
      const n = run.fresh.size;
      setStatus('good', 'Line learned', `${n} new move${n === 1 ? '' : 's'} added to your reviews. First review tomorrow.`);
    } else setStatus('good', 'Line complete', run.line?.name || '');
    renderControls();
  }

  function skipLearn() {
    const now = Date.now();
    for (const n of run.nodes) {
      if (run.fresh.has(n.path) && !getCard(run.course, n)) {
        setCard(run.course, n, learned(now));
        session.learnedCount++;
      }
    }
    logActivity(run.fresh.size);
    clearTimeout(timer);
    startNext();
  }

  function hint() {
    if (!run || st.ff || st.idx >= run.nodes.length) return;
    const node = run.nodes[st.idx];
    if (node.color !== userColor()) return;
    const n = (st.hints.get(node.path) || 0) + 1;
    st.hints.set(node.path, n);
    if (n === 1) {
      board.shapes([{ orig: node.from, brush: 'yellow' }]);
      setStatus('hint', 'Hint', 'Move the circled piece.');
    } else {
      board.arrow(node.from, node.to, 'yellow');
      setStatus('hint', 'Answer', `${moveLabel(node)}`);
      if (node.comment) annotatePreview(node);
    }
  }

  // ---------- rendering ----------
  function setStatus(kind, title, text) {
    statusEl.className = `status status-${kind}`;
    statusIcon.textContent = ICON[kind] || ICON.info;
    statusText.replaceChildren(h('strong', title), text ? h('span', text) : null);
  }

  function alternatives(node) {
    const sibs = node.parent ? node.parent.children.filter((c) => c !== node) : [];
    if (!sibs.length || node.color === userColor()) return null;
    const side = node.color === 'w' ? 'White' : 'Black';
    return h(
      'div.alts',
      `${side} can also play `,
      sibs.slice(0, 4).map((c, i) => [i ? ', ' : '', h('b', moveLabel(c)), lineHint(c)]),
      sibs.length > 4 ? ` and ${sibs.length - 4} more` : '',
      '. Each is covered in its own line.',
    );
  }

  function lineHint(node) {
    let x = node;
    while (x.children.length) x = x.children[0];
    if (!x.name) return '';
    const name = x.name.includes(':') ? x.name.split(':')[0] : x.name;
    return ` (${name.trim()})`;
  }

  function annotate(node, flash = false) {
    clear(annotEl);
    annotEl.classList.remove('flash');
    if (!node) {
      put(annotEl, h('div.annot-empty', run?.mode === 'learn' ? 'Explanations appear here as the moves are played.' : 'Notes on the moves appear here.'));
      return;
    }
    const showNote = store.settings.showComments && node.comment && (run.mode === 'learn' || run.mode === 'practice' || st.mistakes.get(node.path) || st.hints.get(node.path) || node.color !== userColor());
    const alts = st.phase === 'teach' || run.mode === 'practice' ? alternatives(node) : null;
    if (!showNote && !alts) {
      put(annotEl, h('div.annot-empty', run.mode === 'review' ? 'Notes come up when you miss a move or ask for a hint.' : 'No note on this move.'));
      return;
    }
    put(annotEl, h('div.annot-move', moveLabel(node)), showNote ? h('p', node.comment) : null, alts);
    if (flash) {
      void annotEl.offsetWidth;
      annotEl.classList.add('flash');
    }
  }

  function annotatePreview(node) {
    clear(annotEl);
    put(annotEl, h('div.annot-move', `Why ${moveLabel(node)}?`), h('p', node.comment));
  }

  function renderSheet() {
    clear(sheetEl);
    if (!run) return;
    const played = run.nodes.slice(0, st.idx);
    if (!played.length) {
      put(sheetEl, h('div.ss-empty', 'The moves of this line will be written here.'));
      return;
    }
    let row = null;
    played.forEach((n, i) => {
      if (n.color === 'w' || !row) {
        row = h('div.ss-row', h('span.ss-no', String(Math.ceil(n.ply / 2))));
        if (n.color === 'b') put(row, h('span.mv.blank', '…'));
        put(sheetEl, row);
      }
      const mine = n.color === userColor();
      const missed = st.mistakes.get(n.path) || st.hints.get(n.path);
      const ff = i < st.startAt;
      put(row, h(`span.mv${mine && !ff ? '.mine' : ''}${missed ? '.missed' : ''}${ff ? '.ff' : ''}`, fan(n.san)));
    });
    sheetEl.scrollTop = sheetEl.scrollHeight;
  }

  function renderProgress() {
    clear(progressEl);
    if (mode === 'review' || mode === 'drill') {
      const pending = run && !st?.finished ? [...run.targets].filter((p) => !run.nodes.slice(0, st.idx).some((n) => n.path === p)).length : 0;
      const left = countTargets(session.targets || new Map()) + pending;
      const total = Math.max(session.startTotal, 1);
      const pct = session.retryPass ? 100 : Math.round(((total - Math.min(left, total)) / total) * 100);
      put(progressEl, 
        h('div.bar', h('div.bar-fill', { style: { width: `${pct}%` } })),
        h('span', session.retryPass ? 'Second pass on mistakes' : `${left} left`),
      );
    } else if (mode === 'learn') {
      const s = courseStats(course);
      put(progressEl, h('div.bar', h('div.bar-fill', { style: { width: `${s.pct}%` } })), h('span', `${s.learned} of ${s.total} moves learned`));
    } else {
      put(progressEl, h('span', `${session.runsDone} line${session.runsDone === 1 ? '' : 's'} played, ${session.wrong} mistake${session.wrong === 1 ? '' : 's'}`));
    }
  }

  function renderControls() {
    clear(controlsEl);
    if (!run) return;
    if (st.finished) {
      if (mode === 'learn') {
        const more = nextLearnRun(course, { lineIndex });
        if (more && session.learnedCount < store.settings.newPerSession) put(controlsEl, h('button.btn.btn-primary', { onclick: startNext }, 'Learn the next line ', h('kbd', 'Enter')));
        else put(controlsEl, h('button.btn.btn-primary', { onclick: () => summary(more ? 'limit' : 'done') }, 'See session summary'));
      } else if (mode === 'practice') {
        put(controlsEl, h('button.btn.btn-primary', { onclick: startNext }, lineIndex === null ? 'Play another line ' : 'Play it again ', h('kbd', 'Enter')));
      }
      put(controlsEl, h('a.btn.btn-quiet', { href: `#/course/${run.course.id}` }, 'Back to course'));
      return;
    }
    put(controlsEl, 
      h('button.btn.btn-sm', { onclick: hint }, 'Hint ', h('kbd', 'H')),
      h('button.btn.btn-sm', { onclick: () => startRun(run, true) }, 'Restart line ', h('kbd', 'R')),
    );
    if (run.mode === 'learn' && st.phase === 'teach') put(controlsEl, h('button.btn.btn-sm.btn-quiet', { onclick: skipLearn, title: 'Mark these moves as learned without practising them' }, 'I already know this'));
  }

  function summary(reason) {
    clearTimeout(timer);
    const lastCourse = run?.course || course;
    run = null;
    board.setInteractive(null);
    board.shapes([]);
    board.glyph(null);
    let title = 'Nothing is due';
    let text = 'Every move is scheduled for later. Learn something new, or come back when reviews are due.';
    if (mode === 'review' && session.reviewedCount) {
      title = 'Review complete';
      text = `You reviewed ${session.reviewedCount} move${session.reviewedCount === 1 ? '' : 's'}.`;
    } else if (mode === 'drill') {
      title = session.graded ? 'Drill complete' : 'No weak moves';
      text = session.graded ? 'Moves you missed again will come back sooner.' : 'You have not missed any moves recently.';
    } else if (mode === 'learn') {
      if (reason === 'limit') {
        title = 'Good session';
        text = `You learned ${session.learnedCount} new moves. They stick better in small batches, so this is a good place to pause.`;
      } else if (session.learnedCount) {
        title = 'Course complete';
        text = `You have learned every move in ${course.name}. Reviews will keep it fresh.`;
      } else {
        title = 'Nothing new here';
        text = lineIndex !== null ? 'You already know every move in this line.' : 'You have learned every move in this course.';
      }
    }
    setStatus('good', title, text);
    modeEl.textContent = 'Session summary';
    titleEl.replaceChildren(lastCourse ? h('a', { href: `#/course/${lastCourse.id}` }, lastCourse.name) : 'All openings');
    lineEl.textContent = '';
    clear(progressEl);
    clear(annotEl);
    clear(sheetEl);
    const box = h('div.summary');
    if (session.graded) {
      const acc = Math.round((session.correct / session.graded) * 100);
      put(box, 
        h(
          'div.summary-stats',
          h('div', h('b', String(session.graded)), h('span', 'moves tested')),
          h('div', h('b', `${acc}%`), h('span', 'right first time')),
          h('div', h('b', String(session.missed.length)), h('span', 'to work on')),
        ),
      );
    }
    if (session.missed.length) {
      put(box, 
        h('h4', 'Moves you missed'),
        h(
          'ul.missed-list',
          session.missed.slice(0, 8).map(({ course: c, node }) => h('li', h('span.mv-fig', moveLabel(node)), h('span.faint', c.name))),
        ),
      );
    }
    const nd = nextDueText(lastCourse);
    if (nd) put(box, h('p.faint.small', nd));
    annotEl.replaceWith(box);
    clear(controlsEl);
    if (mode === 'learn' && reason === 'limit')
      put(controlsEl, h('button.btn.btn-primary', { onclick: () => { box.replaceWith(annotEl); session.learnedCount = 0; modeEl.textContent = MODE_LABEL[mode]; startNext(); } }, 'Keep learning'));
    put(controlsEl, h(`a.btn${mode === 'learn' && reason === 'limit' ? '' : '.btn-primary'}`, { href: lastCourse ? `#/course/${lastCourse.id}` : '#/' }, lastCourse ? 'Back to course' : 'Back home'));
    if (session.graded) sound.done();
  }

  function nextDueText(c) {
    const cards = c ? c.cards.map((n) => getCard(c, n)).filter(Boolean) : Object.values(store.cards);
    const future = cards.filter((x) => x.d > Date.now()).map((x) => x.d);
    if (!future.length) return '';
    const mins = Math.round((Math.min(...future) - Date.now()) / 60000);
    if (mins < 60) return `Next review is due in ${mins} minutes.`;
    const hrs = Math.round(mins / 60);
    if (hrs < 36) return `Next review is due in ${hrs} hour${hrs === 1 ? '' : 's'}.`;
    return `Next review is due in ${formatInterval(Math.round(hrs / 24))}.`;
  }

  // ---------- keyboard ----------
  function onKey(e) {
    if (e.target.matches('input, textarea, select')) return;
    if (e.key === 'h' || e.key === 'H') hint();
    else if ((e.key === 'r' || e.key === 'R') && run && !st.ff) startRun(run, true);
    else if (e.key === 'Enter' || e.key === ' ') {
      // a focused button or link already handles Enter/Space itself
      if (e.target.closest('button, a')) return;
      const btn = controlsEl.querySelector('.btn-primary');
      if (btn) {
        e.preventDefault();
        btn.click();
      }
    }
  }
  document.addEventListener('keydown', onKey);

  startNext();

  return () => {
    destroyed = true;
    clearTimeout(timer);
    document.removeEventListener('keydown', onKey);
    board.destroy();
  };
}
