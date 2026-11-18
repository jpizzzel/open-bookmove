import 'chessground/assets/chessground.base.css';
import 'chessground/assets/chessground.brown.css';
import 'chessground/assets/chessground.cburnett.css';
import './styles.css';

import { h } from './lib/dom.js';
import { route, startRouter } from './router.js';
import { globalStats, getCourse } from './lib/courses.js';
import { onChange, store, save } from './lib/store.js';
import { dashboardView } from './views/dashboard.js';
import { libraryView } from './views/library.js';
import { courseView } from './views/course.js';
import { trainerView } from './views/trainer.js';
import { explorerView } from './views/explorer.js';
import { myView } from './views/my.js';
import { settingsView } from './views/settings.js';

route('', dashboardView);
route('library', libraryView);
route('course', courseView);
route('train', trainerView);
route('explore', explorerView);
route('my', myView);
route('settings', settingsView);

// Set this to your repository URL after publishing (e.g. https://github.com/you/openbook)
const REPO_URL = 'https://github.com/jpizzzel/openbook';

const dueBadge = h('span.nav-badge');
const links = [
  ['', 'Home'],
  ['library', 'Openings'],
  ['my', 'My repertoires'],
  ['settings', 'Settings'],
];
const navLinks = links.map(([r, label]) => h('a.nav-link', { href: `#/${r}`, dataset: { route: r } }, label));
navLinks[0].append(dueBadge);

const header = h(
  'header.topbar',
  h(
    'a.brand',
    { href: '#/' },
    h('span.brand-knight', { 'aria-hidden': 'true' }, '♞︎'),
    h('span', 'openbook'),
  ),
  h('nav.nav', navLinks),
  h('a.btn.btn-primary.btn-sm.review-cta', { href: '#/train?mode=review' }, 'Start review'),
);
const main = h('main.main');
const footer = h(
  'footer.footer',
  h('span', 'Free and open-source opening trainer. Your progress stays in your browser.'),
  REPO_URL ? h('a', { href: REPO_URL, target: '_blank', rel: 'noopener' }, 'Source code') : h('span', 'Licensed GPL-3.0'),
);
document.getElementById('app').replaceWith(h('div.app', header, main, footer));

function updateBadge() {
  const { due } = globalStats();
  dueBadge.textContent = due ? String(due) : '';
  dueBadge.hidden = !due;
}
let badgeTimer;
onChange(() => {
  clearTimeout(badgeTimer);
  badgeTimer = setTimeout(updateBadge, 300);
});
setInterval(updateBadge, 60000);

startRouter(main, (name) => {
  navLinks.forEach((a) => a.classList.toggle('active', a.dataset.route === (name === 'course' || name === 'explore' || name === 'train' ? '__' : name)));
  document.body.dataset.route = name || 'home';
  updateBadge();
});

window.addEventListener('resize', () => document.body.dispatchEvent(new Event('chessground.resize')));


// dev-only hook used by automated UI tests
if (import.meta.env.DEV) window.__ob = { store, save, getCourse };
