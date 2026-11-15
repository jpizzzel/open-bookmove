// Local persistence (everything lives in the browser; nothing is sent anywhere).
const KEY = 'openbook:v1';

const DEFAULT_SETTINGS = {
  sound: true,
  boardTheme: 'sage',
  coordinates: true,
  animation: true,
  opponentDelay: 450,
  showComments: true,
  newPerSession: 20,
  dailyGoal: 20,
  reviewFromStart: false,
};

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const data = JSON.parse(raw);
      return {
        cards: data.cards || {},
        custom: data.custom || [],
        activity: data.activity || {},
        settings: { ...DEFAULT_SETTINGS, ...(data.settings || {}) },
        meta: data.meta || {},
      };
    }
  } catch (e) {
    console.warn('Could not read saved data', e);
  }
  return { cards: {}, custom: [], activity: {}, settings: { ...DEFAULT_SETTINGS }, meta: {} };
}

export const store = load();
// one-time move to the new default board, which matches the site palette
if (!store.meta.boardV3) {
  if (store.settings.boardTheme === 'brown') store.settings.boardTheme = 'sage';
  store.meta.boardV3 = true;
}
const listeners = new Set();

let saveTimer = null;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(flush, 150);
  listeners.forEach((fn) => fn());
}
export function flush() {
  clearTimeout(saveTimer);
  try {
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch (e) {
    console.warn('Could not save', e);
  }
}
window.addEventListener('beforeunload', flush);

export function onChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function today(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function logActivity(n = 1) {
  const k = today();
  store.activity[k] = (store.activity[k] || 0) + n;
  save();
}

export function streak() {
  let count = 0;
  const d = new Date();
  // today counts if active; otherwise start from yesterday
  if (!store.activity[today(d)]) d.setDate(d.getDate() - 1);
  while (store.activity[today(d)]) {
    count++;
    d.setDate(d.getDate() - 1);
  }
  return count;
}

export function exportData() {
  return JSON.stringify({ app: 'openbook', version: 1, exported: new Date().toISOString(), ...store }, null, 2);
}

export function importData(json) {
  const data = JSON.parse(json);
  if (!data || typeof data !== 'object' || !data.cards) throw new Error('Not an OpenBook backup file');
  store.cards = data.cards || {};
  store.custom = data.custom || [];
  store.activity = data.activity || {};
  store.settings = { ...DEFAULT_SETTINGS, ...(data.settings || {}) };
  store.meta = data.meta || {};
  save();
  flush();
}

export function resetProgress(courseId) {
  if (courseId) {
    const prefix = `${courseId}|`;
    for (const k of Object.keys(store.cards)) if (k.startsWith(prefix)) delete store.cards[k];
  } else {
    store.cards = {};
    store.activity = {};
  }
  save();
}
