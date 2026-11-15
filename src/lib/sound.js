// Tiny synthesized sound effects (no audio files needed).
import { store } from './store.js';

let ctx = null;
function audio() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function knock(volume = 0.5, freq = 180, length = 0.07) {
  const a = audio();
  if (!a) return;
  const t = a.currentTime;
  const buf = a.createBuffer(1, Math.floor(a.sampleRate * length), a.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 4);
  const src = a.createBufferSource();
  src.buffer = buf;
  const filter = a.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = freq * 8;
  const gain = a.createGain();
  gain.gain.value = volume;
  src.connect(filter).connect(gain).connect(a.destination);
  src.start(t);
}

function tone(freqs, duration = 0.12, volume = 0.12, type = 'sine') {
  const a = audio();
  if (!a) return;
  let t = a.currentTime;
  for (const f of freqs) {
    const o = a.createOscillator();
    const g = a.createGain();
    o.type = type;
    o.frequency.value = f;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(volume, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + duration + 0.02);
    t += duration * 0.8;
  }
}

export const sound = {
  move() { if (store.settings.sound) knock(0.45, 200); },
  capture() { if (store.settings.sound) knock(0.8, 260, 0.1); },
  correct() { if (store.settings.sound) tone([660, 880], 0.1, 0.08); },
  wrong() { if (store.settings.sound) tone([220, 170], 0.14, 0.1, 'triangle'); },
  done() { if (store.settings.sound) tone([523, 659, 784, 1047], 0.12, 0.08); },
};
