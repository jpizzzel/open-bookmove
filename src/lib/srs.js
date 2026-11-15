// Spaced repetition scheduling (SM-2 flavoured) for individual repertoire moves.
// Card shape: { i: intervalDays, e: ease, r: reps (streak), l: lapses, d: dueTimestamp, s: lastSeen }

export const MIN = 60 * 1000;
export const HOUR = 60 * MIN;
export const DAY = 24 * HOUR;

const RELEARN_DELAY = 10 * MIN;
const MAX_INTERVAL = 365;

function fuzz(days) {
  if (days < 3) return days;
  const spread = Math.max(1, Math.round(days * 0.05));
  return days + Math.round((Math.random() * 2 - 1) * spread);
}

function dueAt(now, days) {
  // a little slack so a card scheduled "tomorrow" is due tomorrow morning, not tomorrow at this minute
  return now + days * DAY - 4 * HOUR;
}

/** A card that has just been learned. `struggled` = mistakes while learning it. */
export function learned(now = Date.now(), struggled = false) {
  if (struggled) return { i: 0, e: 2.3, r: 0, l: 0, d: now + RELEARN_DELAY, s: now };
  return { i: 1, e: 2.5, r: 1, l: 0, d: dueAt(now, 1), s: now };
}

/** Grade a review. correct=false resets the streak and brings the card back soon. */
export function review(card, correct, now = Date.now()) {
  const c = { ...card, s: now };
  if (!correct) {
    c.l = (c.l || 0) + 1;
    c.r = 0;
    c.i = 0;
    c.e = Math.max(1.3, (c.e || 2.5) - 0.2);
    c.d = now + RELEARN_DELAY;
    return c;
  }
  c.r = (c.r || 0) + 1;
  let next;
  if (c.i < 1) next = 1;
  else if (c.r === 2) next = 3;
  else next = Math.max(c.i + 1, Math.round(c.i * c.e));
  c.i = Math.min(MAX_INTERVAL, fuzz(next));
  c.e = Math.min(3.0, (c.e || 2.5) + 0.03);
  c.d = dueAt(now, c.i);
  return c;
}

export function isDue(card, now = Date.now()) {
  return !!card && card.d <= now;
}

/** 'new' | 'learning' | 'young' | 'mature' */
export function stage(card) {
  if (!card) return 'new';
  if (card.i < 1) return 'learning';
  if (card.i < 21) return 'young';
  return 'mature';
}

export function formatInterval(days) {
  if (days < 1) return '< 1 day';
  if (days < 30) return `${days} day${days === 1 ? '' : 's'}`;
  if (days < 365) return `${Math.round(days / 30)} mo`;
  return `${(days / 365).toFixed(1)} yr`;
}
