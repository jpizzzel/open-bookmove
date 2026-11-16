// Hash router: "#/course/italian-game?x=1" -> { name: 'course', args: ['italian-game'], params: { x: '1' } }
const routes = new Map();
let cleanup = null;
let outlet = null;
let onRoute = null;

export function route(name, view) {
  routes.set(name, view);
}

export function navigate(hash) {
  if (location.hash === hash) render();
  else location.hash = hash;
}

export function parseHash(hash = location.hash) {
  const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
  const [name = '', ...args] = path.split('/').filter(Boolean).map(decodeURIComponent);
  const params = Object.fromEntries(new URLSearchParams(query));
  return { name, args, params };
}

export function render() {
  const { name, args, params } = parseHash();
  const view = routes.get(name) || routes.get('');
  if (cleanup) {
    try {
      cleanup();
    } catch (e) {
      console.error(e);
    }
    cleanup = null;
  }
  outlet.replaceChildren();
  outlet.scrollTop = 0;
  window.scrollTo(0, 0);
  const result = view(outlet, { ...params, args, id: args[0] });
  cleanup = typeof result === 'function' ? result : null;
  onRoute?.(name);
}

export function startRouter(el, cb) {
  outlet = el;
  onRoute = cb;
  window.addEventListener('hashchange', render);
  render();
}
