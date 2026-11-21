import { h, confirmDialog, download, toast, moveLabel, moveSeq, put } from '../lib/dom.js';
import { getCourse, courseStats, lineStats, CATEGORIES, saveCustomCourse, newCustomId, chapters, weakMoves } from '../lib/courses.js';
import { miniBoard } from '../lib/board.js';
import { toPgn, cloneTree } from '../lib/tree.js';
import { store, save, resetProgress } from '../lib/store.js';
import { navigate } from '../router.js';
import { sideMark, levelPill, progressBar, masteryBar, masteryLegend } from './common.js';

export function courseView(root, { id }) {
  const course = getCourse(id);
  if (!course) {
    put(root, h('div.empty', h('h2', 'Course not found'), h('a.btn', { href: '#/library' }, 'Back to the library')));
    return;
  }
  store.meta.lastCourse = course.id;
  save();

  const s = courseStats(course);
  const weak = weakMoves([course], 50).length;
  const diagram = h('div.diagram.diagram-framed');
  const tabiyaMoves = [];
  for (let n = course.tabiya; n && n.san; n = n.parent) tabiyaMoves.unshift(n);

  const primary = s.newCount
    ? h('a.btn.btn-primary.btn-lg', { href: `#/train?mode=learn&course=${course.id}` }, s.learned ? `Learn new moves (${s.newCount})` : 'Start learning')
    : null;
  const reviewBtn = s.due ? h(`a.btn.btn-lg${primary ? '' : '.btn-primary'}`, { href: `#/train?mode=review&course=${course.id}` }, `Review ${s.due} due`) : null;

  put(root, 
    h(
      'div.course',
      h(
        'aside.course-aside',
        diagram,
        tabiyaMoves.length ? h('p.tabiya-note', 'Every line starts from ', h('span', moveSeq(tabiyaMoves)), '.') : null,
      ),
      h(
        'div',
        h('div.crumbs', h('a', { href: course.custom ? '#/my' : '#/library' }, course.custom ? 'My repertoires' : 'Library'), ` / ${CATEGORIES[course.category] || ''}`),
        h('h1.course-title', course.name),
        h('div.course-sub', h('span.pill', sideMark(course.side), `You play ${course.side}`), levelPill(course.level), course.eco ? h('span.pill', `ECO ${course.eco}`) : null, h('span.pill', `${course.lines.length} lines`), h('span.pill', `${s.total} moves to learn`)),
        course.description ? h('p.course-desc', course.description) : null,
        h('div.course-mastery', masteryBar(s), masteryLegend(s)),
        h(
          'div.actions',
          primary,
          reviewBtn,
          !primary && !reviewBtn ? h('span.muted', 'Everything here is learned and nothing is due. ') : null,
          s.learned ? h('a.btn.btn-lg', { href: `#/train?mode=practice&course=${course.id}`, title: 'Play a random line. Mistakes still count.' }, 'Practice a random line') : null,
          weak ? h('a.btn.btn-lg', { href: `#/train?mode=drill&course=${course.id}` }, `Drill ${weak} weak move${weak === 1 ? '' : 's'}`) : null,
          h('a.btn.btn-lg.btn-quiet', { href: `#/explore/${course.id}` }, course.custom ? 'Edit moves' : 'Browse the moves'),
        ),
        h(
          'div.course-tools',
          h('button.link', { onclick: exportPgn }, 'Download as PGN'),
          !course.custom ? h('button.link', { onclick: copyToMine }, 'Make an editable copy') : null,
          s.learned ? h('button.link.danger', { onclick: reset }, 'Reset progress') : null,
        ),
        course.lines.length
          ? chapters(course).map((ch) =>
              h(
                'section.chapter',
                h(
                  'div.chapter-head',
                  ch.node ? h('span.chapter-move', `${moveLabel(ch.node)}`) : null,
                  h('h3', ch.title || (ch.node ? `${ch.node.color === course.userColor ? 'With' : 'Against'} ${moveLabel(ch.node)}` : 'Lines')),
                  h('span.faint', `${ch.lines.length} line${ch.lines.length === 1 ? '' : 's'}`),
                ),
                ch.lines.map((line) => lineRow(course, line, ch.title)),
              ),
            )
          : h('div.empty', { style: { marginTop: '32px' } }, h('p', 'This repertoire has no moves yet.'), h('a.btn.btn-primary', { href: `#/explore/${course.id}` }, 'Add moves')),
      ),
    ),
  );
  const cg = miniBoard(diagram, course.tabiya.fen, course.side);
  if (course.tabiya.from) cg.set({ lastMove: [course.tabiya.from, course.tabiya.to] });

  function exportPgn() {
    download(`${course.id}.pgn`, toPgn(course.root, { Event: course.name, Site: 'Open BookMove', Orientation: course.side }), 'application/x-chess-pgn');
    toast('PGN downloaded');
  }

  function copyToMine() {
    const copy = saveCustomCourse({ id: newCustomId(), name: `${course.name} (my copy)`, side: course.side, description: course.description, root: cloneTree(course.root) });
    toast('Editable copy created');
    navigate(`#/course/${copy.id}`);
  }

  async function reset() {
    if (await confirmDialog('Reset progress?', `This forgets everything you have learned in ${course.name}. It cannot be undone.`, 'Reset progress', true)) {
      resetProgress(course.id);
      toast('Progress reset');
      navigate(`#/course/${course.id}`);
    }
  }
}

function lineRow(course, line, chapterTitle) {
  const ls = lineStats(course, line);
  const start = course.tabiya.ply;
  const shown = line.nodes.slice(start);
  const pct = ls.total ? Math.round((ls.learned / ls.total) * 100) : 0;
  const done = ls.total && ls.learned === ls.total;
  let name = line.name;
  if (chapterTitle && name.startsWith(`${chapterTitle}:`)) name = name.slice(chapterTitle.length + 1).trim();
  return h(
    'div.line-row',
    h('div.line-main', h('div.line-name', name, done ? h('span.line-done', { title: 'All moves learned' }, '✓') : null), h('div.line-moves', moveSeq(shown))),
    h('div.line-prog', progressBar(pct), h('span', ls.due ? `${ls.due} due` : `${ls.learned} of ${ls.total}`)),
    h(
      'div.line-actions',
      !done && ls.total ? h('a.btn.btn-sm.btn-primary', { href: `#/train?mode=learn&course=${course.id}&line=${line.index}` }, 'Learn') : null,
      h('a.btn.btn-sm', { href: `#/train?mode=practice&course=${course.id}&line=${line.index}` }, 'Practice'),
      h('a.btn.btn-sm.btn-quiet', { href: `#/explore/${course.id}?path=${encodeURIComponent(line.leaf.path)}` }, 'View'),
    ),
  );
}
