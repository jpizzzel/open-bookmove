// Browse a course's move tree; for your own repertoires, also add/delete moves and write notes.
import { h, clear, fan, moveLabel, confirmDialog, toast, put } from '../lib/dom.js';
import { createBoard } from '../lib/board.js';
import { getCourse, getCard, saveCustomCourse, refreshCourse, cardId } from '../lib/courses.js';
import { newNode } from '../lib/pgn.js';
import { stage, formatInterval } from '../lib/srs.js';
import { store } from '../lib/store.js';

const STAGE_LABEL = { new: 'not learned', learning: 'shaky', young: 'learned', mature: 'mastered' };

export function explorerView(root, { id, path }) {
  let course = getCourse(id);
  if (!course) {
    put(root, h('div.empty', h('h2', 'Course not found'), h('a.btn', { href: '#/library' }, 'Back to the library')));
    return;
  }
  const editable = !!course.custom;
  let node = findByPath(course.root, path || '') || course.root;

  const boardEl = h('div.board');
  const frame = h('div.board-frame', boardEl);
  const statusEl = h('div.status');
  const panel = h('aside.book-panel');
  put(root, h('div.trainer', h('div.stage', frame, statusEl), panel));

  const board = createBoard(boardEl, { orientation: course.side, onMove: onBoardMove });

  function findByPath(r, p) {
    if (!p) return r;
    let n = r;
    for (const san of p.split(' ')) {
      n = n.children.find((c) => c.san === san);
      if (!n) return null;
    }
    return n;
  }

  function go(n) {
    node = n;
    board.setFen(n.fen, n.from ? [n.from, n.to] : undefined);
    board.setInteractive('both');
    board.glyph(null);
    board.shapes(n.children.map((c, i) => ({ orig: c.from, dest: c.to, brush: c.color === course.userColor ? 'green' : i === 0 ? 'blue' : 'paleBlue' })));
    render();
    history.replaceState(null, '', `#/explore/${course.id}${n.path ? `?path=${encodeURIComponent(n.path)}` : ''}`);
  }

  async function onBoardMove(san) {
    const existing = node.children.find((c) => c.san === san);
    if (existing) return go(existing);
    if (!editable) {
      toast(`${fan(san)} is not part of this course`, 'warn');
      return go(node);
    }
    const learnerTurn = node.fen.split(' ')[1] === course.userColor;
    if (learnerTurn && node.children.length) {
      const ok = await confirmDialog(
        'Replace your move?',
        `You already play ${fan(node.children[0].san)} here, and a repertoire has one move for you in each position. Replace it, and every move after it, with ${fan(san)}?`,
        'Replace move',
        true,
      );
      if (!ok) return go(node);
      node.children = [];
    }
    node.children.push(newNode(san));
    commit();
    go(findByPath(course.root, node.path ? `${node.path} ${san}` : san) || node);
    toast(`${fan(san)} added`);
  }

  function commit() {
    const p = node.path;
    refreshCourse(course);
    course = saveCustomCourse(course);
    node = findByPath(course.root, p) || course.root;
  }

  async function deleteNode() {
    if (!node.parent) return;
    const count = countBelow(node);
    const ok = await confirmDialog('Delete this move?', `${moveLabel(node)}${count ? ` and the ${count} move${count === 1 ? '' : 's'} after it` : ''} will be removed from the repertoire.`, 'Delete move', true);
    if (!ok) return;
    const parentPath = node.parent.path;
    node.parent.children = node.parent.children.filter((c) => c !== node);
    node = node.parent;
    commit();
    go(findByPath(course.root, parentPath) || course.root);
  }

  function promote(child) {
    const p = child.parent;
    p.children = [child, ...p.children.filter((c) => c !== child)];
    commit();
    go(findByPath(course.root, node.path) || course.root);
  }

  const countBelow = (n) => n.children.reduce((a, c) => a + 1 + countBelow(c), 0);
  const linesThrough = (n) => (n.children.length ? n.children.reduce((a, c) => a + linesThrough(c), 0) : 1);

  function lineNameBelow(n) {
    const names = new Set();
    const walk = (y) => {
      if (y.name) names.add(y.name.includes(':') ? y.name.split(':')[0].trim() : y.name);
      y.children.forEach(walk);
    };
    walk(n);
    const all = [...names];
    if (!all.length) return '';
    return all.length > 1 ? `${all[0]} and ${all.length - 1} more` : all[0];
  }

  function setStatus() {
    const toMove = node.fen.split(' ')[1];
    const mine = toMove === course.userColor;
    let title;
    let text;
    if (!node.children.length) {
      title = 'End of the line';
      text = editable ? (mine ? 'Play your move on the board to extend it.' : 'Play the replies you want to prepare for.') : 'Step back to explore other branches.';
    } else if (mine) {
      title = `You play ${fan(node.children[0].san)}`;
      text = 'Green arrow. Click the move or play it on the board.';
    } else {
      title = `${node.children.length} repl${node.children.length === 1 ? 'y' : 'ies'} prepared`;
      text = 'Blue arrows. The darkest one is the main line.';
    }
    statusEl.className = `status status-${mine && node.children.length ? 'good' : 'info'}`;
    statusEl.replaceChildren(h('div.status-icon', mine ? '!' : '♘'), h('div', h('strong', title), h('span', text)));
  }

  function render() {
    setStatus();
    clear(panel);
    const path = [];
    for (let n = node; n && n.san; n = n.parent) path.unshift(n);

    put(panel, 
      h(
        'div.bp-head',
        h('div.bp-mode', editable ? 'Editing your repertoire' : 'Browsing the moves'),
        h('div.bp-title', h('a', { href: `#/course/${course.id}` }, course.name)),
        h('div.bp-line', node.san ? lineNameBelow(node) || ' ' : `${course.lines.length} lines`),
      ),
    );

    // note on the current move
    if (editable && node.san) {
      const ta = h('textarea', { rows: 3, placeholder: `Why play ${fan(node.san)}? A short note helps you remember.`, value: node.comment || '' });
      ta.addEventListener('change', () => {
        node.comment = ta.value.trim();
        commit();
        toast('Note saved');
      });
      const box = h('div.edit-box', h('label.field', h('span', `Note on ${moveLabel(node)}`), ta));
      if (!node.children.length) {
        const nameIn = h('input', { value: node.name || '', placeholder: 'e.g. Main line with 5…♘f6' });
        nameIn.addEventListener('change', () => {
          node.name = nameIn.value.trim();
          commit();
          toast('Line name saved');
        });
        put(box, h('label.field', h('span', 'Line name'), nameIn));
      }
      put(panel, box);
    } else {
      const annot = h('div.annot');
      if (node.san && node.comment) put(annot, h('div.annot-move', moveLabel(node)), h('p', node.comment));
      else put(annot, h('div.annot-empty', node.san ? `No note on ${moveLabel(node)}.` : 'Pick a move below or play one on the board.'));
      if (node.san && node.color === course.userColor) {
        const c = getCard(course, node);
        const st = stage(c);
        put(annot, 
          h(
            'div.alts',
            h(`span.stage-tag.st-${st}`, STAGE_LABEL[st]),
            c ? ` Next review in ${formatInterval(Math.max(0, Math.round((c.d - Date.now()) / 86400000)))}.` : '',
          ),
        );
      }
      put(panel, annot);
    }

    // next moves
    const learnerTurn = node.fen.split(' ')[1] === course.userColor;
    if (node.children.length) {
      put(panel, h('div.bp-section', h('h4', learnerTurn ? 'Your move' : 'Opponent replies')));
      put(panel, 
        h(
          'div.next-moves',
          node.children.map((c, i) => {
            const mine = c.color === course.userColor;
            const card = mine ? store.cards[cardId(course, c)] : null;
            const lt = linesThrough(c);
            return h(
              `button.next-move${mine ? '.mine' : ''}`,
              { onclick: () => go(c) },
              h('span.nm-san', moveLabel(c)),
              h('span.nm-name', lineNameBelow(c) || `${lt} line${lt === 1 ? '' : 's'}`),
              editable && i > 0
                ? h('span.link.small', { onclick: (e) => { e.stopPropagation(); promote(c); }, title: 'Make this the main line' }, 'Make main')
                : mine
                  ? h(`span.stage-tag.st-${stage(card)}`, STAGE_LABEL[stage(card)])
                  : h('span.faint.small', `${lt} line${lt === 1 ? '' : 's'}`),
            );
          }),
        ),
      );
    }

    // scoresheet of the path so far
    const sheet = h('div.scoresheet');
    let row = null;
    if (!path.length) put(sheet, h('div.ss-empty', 'Starting position.'));
    for (const n of path) {
      if (n.color === 'w' || !row) {
        row = h('div.ss-row', h('span.ss-no', String(Math.ceil(n.ply / 2))));
        if (n.color === 'b') put(row, h('span.mv.blank', '…'));
        put(sheet, row);
      }
      put(row, h(`button.mv${n === node ? '.current' : ''}${n.color === course.userColor ? '.mine' : ''}`, { onclick: () => go(n) }, fan(n.san)));
    }
    put(panel, h('div.bp-section', h('h4', 'Moves so far')), sheet);

    put(panel, 
      h(
        'div.bp-controls',
        h('button.btn.btn-sm', { onclick: () => go(course.root), title: 'Start position (Home)' }, 'Start'),
        h('button.btn.btn-sm', { onclick: () => node.parent && go(node.parent), title: 'Back (Left arrow)' }, 'Back ', h('kbd', '←')),
        h('button.btn.btn-sm', { onclick: () => node.children[0] && go(node.children[0]), title: 'Forward (Right arrow)' }, 'Next ', h('kbd', '→')),
        h('button.btn.btn-sm', { onclick: flip, title: 'Flip board (F)' }, 'Flip ', h('kbd', 'F')),
        editable && node.san ? h('button.btn.btn-sm.btn-danger', { onclick: deleteNode }, 'Delete move') : null,
      ),
    );
  }

  function flip() {
    board.setOrientation(board.cg.state.orientation === 'white' ? 'black' : 'white');
  }

  function onKey(e) {
    if (e.target.matches('input, textarea, select')) return;
    if (e.key === 'ArrowLeft' && node.parent) go(node.parent);
    else if (e.key === 'ArrowRight' && node.children[0]) go(node.children[0]);
    else if (e.key === 'Home') go(course.root);
    else if (e.key === 'f' || e.key === 'F') flip();
    else return;
    e.preventDefault();
  }
  document.addEventListener('keydown', onKey);
  go(node);

  return () => {
    document.removeEventListener('keydown', onKey);
    board.destroy();
  };
}
