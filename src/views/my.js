// User-made repertoires: create, import PGN, delete.
import { h, modal, toast, pickFile, confirmDialog, put } from '../lib/dom.js';
import { getCourses, saveCustomCourse, deleteCustomCourse, newCustomId } from '../lib/courses.js';
import { parsePgn, newNode } from '../lib/pgn.js';
import { mergeInto, annotate, pruneConflicts, START_FEN } from '../lib/tree.js';
import { navigate } from '../router.js';
import { courseCard, lazyBoards } from './common.js';

export function myView(root) {
  const mine = getCourses().filter((c) => c.custom);
  const obs = lazyBoards();
  put(root, 
    h(
      'div.page-head',
      h('h1', 'My repertoires'),
      h('p.muted', 'Build your own lines, or import a PGN, for example a Lichess study chapter or an export from another app. Your repertoires train exactly like the built-in courses.'),
      h('div.actions', h('button.btn.btn-primary', { onclick: () => createDialog() }, 'New repertoire'), h('button.btn', { onclick: () => createDialog(true) }, 'Import PGN')),
    ),
    mine.length
      ? h(
          'div.course-grid',
          mine.map((c) => {
            const card = courseCard(c, obs);
            put(card, 
              h(
                'button.book-delete',
                {
                  title: 'Delete repertoire',
                  onclick: async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (await confirmDialog('Delete repertoire?', `"${c.name}" and its progress will be permanently deleted.`, 'Delete', true)) {
                      deleteCustomCourse(c.id);
                      navigate('#/my');
                    }
                  },
                },
                '×',
              ),
            );
            return card;
          }),
        )
      : h('div.empty', h('p', 'You have not made any repertoires yet.'), h('p.faint', 'You can also open any course in the library and choose "Make an editable copy".')),
  );
  return () => obs.disconnect();
}

export async function createDialog(withPgn = false) {
  const name = h('input', { placeholder: 'e.g. My Caro-Kann', required: true });
  const side = h('select', h('option', { value: 'white' }, 'White'), h('option', { value: 'black' }, 'Black'));
  const desc = h('input', { placeholder: 'Optional' });
  const pgn = h('textarea', { rows: 8, placeholder: '1. e4 c6 2. d4 d5 (2... g6) 3. e5 Bf5 *\n\nPaste one or more games or chapters. Variations and {comments} are kept.' });
  const fileBtn = h(
    'button.btn.btn-sm',
    {
      type: 'button',
      onclick: async () => {
        const text = await pickFile('.pgn,.txt');
        if (text) {
          pgn.value = text;
          const ev = text.match(/\[StudyName\s+"([^"]+)"/) || text.match(/\[Event\s+"([^"]+)"/);
          if (ev && !name.value) name.value = ev[1].split(':')[0].trim();
          const orient = text.match(/\[Orientation\s+"(white|black)"/i);
          if (orient) side.value = orient[1].toLowerCase();
        }
      },
    },
    'Load .pgn file',
  );
  const body = h(
    'div.form',
    h('label.field', h('span', 'Name'), name),
    h('label.field', h('span', 'I play as'), side),
    h('label.field', h('span', 'Description'), desc),
    h('label.field', h('span', withPgn ? 'PGN' : 'PGN (optional, or add moves on the board later)'), pgn, h('div', fileBtn)),
  );
  const ok = await modal(withPgn ? 'Import PGN' : 'New repertoire', body, [
    { label: 'Cancel', value: false },
    { label: 'Create', value: true, primary: true },
  ]);
  if (!ok) return;
  const root = newNode();
  let pruned = 0;
  let skipped = 0;
  if (pgn.value.trim()) {
    try {
      const games = parsePgn(pgn.value);
      // repertoires start from the normal starting position, so chapters set up from a custom FEN can't be used
      const fromStart = (g) => !g.headers.FEN || g.headers.FEN.split(' ').slice(0, 4).join(' ') === START_FEN.split(' ').slice(0, 4).join(' ');
      const usable = games.filter(fromStart);
      skipped = games.length - usable.length;
      if (!usable.length && skipped) {
        await modal('Could not import that PGN', h('p', 'Every game in it starts from a custom position (it has a FEN header). Repertoires need to start from the normal starting position.'));
        return;
      }
      for (const g of usable) {
        // name the main line after its Lichess chapter, if it has one
        const chapter = g.headers.ChapterName || (g.headers.Event && g.headers.Event.includes(':') ? g.headers.Event.split(':').slice(1).join(':').trim() : '');
        if (chapter) {
          let leaf = g.root;
          while (leaf.children.length) leaf = leaf.children[0];
          if (leaf !== g.root && !leaf.name) leaf.name = chapter;
        }
        mergeInto(root, g.root);
      }
      annotate(root, 'PGN');
      pruned = pruneConflicts(root, side.value);
    } catch (e) {
      await modal('Could not read that PGN', h('p', e.message));
      return;
    }
  }
  const course = saveCustomCourse({
    id: newCustomId(),
    name: name.value.trim() || 'Untitled repertoire',
    side: side.value,
    description: desc.value.trim(),
    root,
  });
  if (skipped) toast(`Skipped ${skipped} chapter${skipped === 1 ? '' : 's'} that start from a custom position.`, 'warn');
  else if (pruned) toast(`${pruned} position${pruned === 1 ? '' : 's'} had several moves for you. Kept the main one.`, 'warn');
  else toast('Repertoire created');
  navigate(course.lines.length ? `#/course/${course.id}` : `#/explore/${course.id}`);
}
