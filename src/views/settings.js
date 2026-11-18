import { h, download, pickFile, toast, confirmDialog, put } from '../lib/dom.js';
import { store, save, exportData, importData, resetProgress, today } from '../lib/store.js';
import { miniBoard } from '../lib/board.js';
import { navigate } from '../router.js';

const THEMES = [
  ['sage', 'Sage'],
  ['brown', 'Wood'],
  ['blue', 'Ocean'],
  ['green', 'Tournament'],
  ['purple', 'Lavender'],
  ['grey', 'Slate'],
];

export function settingsView(root) {
  const s = store.settings;
  const set = (k, v) => {
    s[k] = v;
    save();
  };
  const toggle = (k, label, hint) =>
    h('label.toggle', h('input', { type: 'checkbox', checked: !!s[k], onchange: (e) => set(k, e.target.checked) }), h('span', h('b', label), hint ? h('small', hint) : null));

  const themes = h(
    'div.theme-picker',
    THEMES.map(([id, label]) => {
      const b = h('div.theme-board');
      const btn = h(
        `button.theme-opt${s.boardTheme === id ? '.active' : ''}`,
        {
          onclick: () => {
            set('boardTheme', id);
            themes.querySelectorAll('.theme-opt').forEach((x) => x.classList.toggle('active', x === btn));
          },
        },
        b,
        h('span', label),
      );
      queueMicrotask(() => {
        miniBoard(b, 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2');
        b.classList.remove(...[...b.classList].filter((c) => c.startsWith('theme-')));
        b.classList.add(`theme-${id}`);
      });
      return btn;
    }),
  );

  put(root, 
    h('div.page-head', h('h1', 'Settings')),
    h(
      'div.settings',
      h('section.sheet', h('h3', 'Board'), themes, toggle('coordinates', 'Show coordinates'), toggle('animation', 'Animate pieces')),
      h(
        'section.sheet',
        h('h3', 'Training'),
        toggle('sound', 'Sound effects'),
        toggle('showComments', 'Show notes on moves'),
        toggle('reviewFromStart', 'Replay lines from move 1 in reviews', 'Off: reviews skip ahead to a few moves before the move being tested.'),
        h('label.field', h('span', 'Daily goal'), h('select', { onchange: (e) => set('dailyGoal', Number(e.target.value)) }, [10, 20, 40, 80].map((n) => h('option', { value: n, selected: s.dailyGoal === n }, `${n} moves a day`)))),
        h(
          'label.field',
          h('span', 'New moves per learning session'),
          h('select', { onchange: (e) => set('newPerSession', Number(e.target.value)) }, [8, 20, 40, 100].map((n) => h('option', { value: n, selected: s.newPerSession === n }, String(n)))),
        ),
        h(
          'label.field',
          h('span', 'Opponent move speed'),
          h(
            'select',
            { onchange: (e) => set('opponentDelay', Number(e.target.value)) },
            [
              [150, 'Fast'],
              [450, 'Normal'],
              [900, 'Slow'],
            ].map(([v, l]) => h('option', { value: v, selected: s.opponentDelay === v }, l)),
          ),
        ),
      ),
      h(
        'section.sheet',
        h('h3', 'Your data'),
        h('p.muted', 'Progress is saved in this browser only. Nothing is uploaded. Export a backup to move it to another device.'),
        h(
          'div.actions',
          h('button.btn', { onclick: () => download(`openbook-backup-${today()}.json`, exportData()) }, 'Export backup'),
          h(
            'button.btn',
            {
              onclick: async () => {
                const text = await pickFile('.json');
                if (!text) return;
                try {
                  importData(text);
                  toast('Backup restored');
                  navigate('#/');
                } catch (e) {
                  toast(e.message, 'warn');
                }
              },
            },
            'Import backup',
          ),
          h(
            'button.btn.btn-danger',
            {
              onclick: async () => {
                if (await confirmDialog('Reset all progress?', 'All learned moves and activity history will be erased. Your own repertoires are kept.', 'Erase progress', true)) {
                  resetProgress();
                  toast('Progress reset');
                }
              },
            },
            'Reset all progress',
          ),
        ),
      ),
      h(
        'section.sheet',
        h('h3', 'About'),
        h(
          'p',
          'OpenBook is a free, open-source opening trainer. Board by ',
          h('a', { href: 'https://github.com/lichess-org/chessground', target: '_blank', rel: 'noopener' }, 'chessground'),
          ', move rules by ',
          h('a', { href: 'https://github.com/jhlywa/chess.js', target: '_blank', rel: 'noopener' }, 'chess.js'),
          '. Licensed GPL-3.0. Contributions to the opening library are welcome.',
        ),
        h('h4', { style: { marginTop: '16px' } }, 'Keyboard shortcuts'),
        h('div.kbd-list', h('kbd', 'H'), h('span', 'Hint, press twice for the answer'), h('kbd', 'R'), h('span', 'Restart the line'), h('kbd', 'Enter'), h('span', 'Continue to the next line'), h('kbd', '← →'), h('span', 'Step through moves when browsing'), h('kbd', 'F'), h('span', 'Flip the board when browsing')),
      ),
    ),
  );
}
