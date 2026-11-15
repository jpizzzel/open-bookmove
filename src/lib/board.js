// Chessground + chess.js wrapper used by every board in the app.
import { Chessground } from 'chessground';
import { Chess } from 'chess.js';
import { store } from './store.js';
import { sound } from './sound.js';

export function legalDests(chess) {
  const dests = new Map();
  for (const m of chess.moves({ verbose: true })) {
    if (!dests.has(m.from)) dests.set(m.from, []);
    dests.get(m.from).push(m.to);
  }
  return dests;
}

const colorName = (c) => (c === 'w' ? 'white' : 'black');

/**
 * createBoard(el, { orientation, onMove(san, moveObj), viewOnly })
 * `onMove` fires when the user makes a legal move on the board.
 */
export function createBoard(el, opts = {}) {
  const chess = new Chess();
  let interactiveColor = null; // 'w' | 'b' | 'both' | null
  const wrap = el;
  wrap.classList.add('cg-wrap-outer', `theme-${store.settings.boardTheme}`);

  const cg = Chessground(wrap, {
    fen: chess.fen(),
    orientation: opts.orientation || 'white',
    coordinates: opts.viewOnly ? false : store.settings.coordinates,
    viewOnly: !!opts.viewOnly,
    animation: { enabled: store.settings.animation && !opts.viewOnly, duration: 220 },
    highlight: { lastMove: true, check: true },
    movable: {
      free: false,
      color: undefined,
      showDests: true,
      events: {
        after: (orig, dest) => handleUserMove(orig, dest),
      },
    },
    premovable: { enabled: false },
    draggable: { enabled: !opts.viewOnly, showGhost: true },
    selectable: { enabled: !opts.viewOnly },
    drawable: { enabled: !opts.viewOnly, visible: true },
  });

  function handleUserMove(from, to) {
    let mv = null;
    try {
      const piece = chess.get(from);
      const promo = piece && piece.type === 'p' && (to[1] === '8' || to[1] === '1') ? 'q' : undefined;
      mv = chess.move({ from, to, promotion: promo });
    } catch {
      mv = null;
    }
    if (!mv) {
      sync();
      return;
    }
    playSound(mv);
    sync([mv.from, mv.to]);
    opts.onMove?.(mv.san, mv);
  }

  function playSound(mv) {
    if (mv.captured) sound.capture();
    else sound.move();
  }

  function sync(lastMove) {
    const turn = chess.turn();
    const canMove = interactiveColor === 'both' || interactiveColor === turn;
    cg.set({
      fen: chess.fen(),
      turnColor: colorName(turn),
      check: chess.inCheck(),
      lastMove: lastMove || cg.state.lastMove,
      movable: {
        color: canMove ? colorName(turn) : undefined,
        dests: canMove ? legalDests(chess) : new Map(),
      },
    });
  }

  const api = {
    chess,
    cg,
    /** Reset to a FEN (no animation of individual moves). */
    setFen(fen, lastMove) {
      chess.load(fen);
      cg.set({ lastMove: lastMove || undefined });
      sync(lastMove);
    },
    /** Play a SAN move programmatically (e.g. the opponent's reply). */
    play(san, withSound = true) {
      const mv = chess.move(san);
      if (withSound) playSound(mv);
      sync([mv.from, mv.to]);
      return mv;
    },
    undo() {
      chess.undo();
      const hist = chess.history({ verbose: true });
      const last = hist[hist.length - 1];
      cg.set({ lastMove: last ? [last.from, last.to] : undefined });
      sync(last ? [last.from, last.to] : undefined);
    },
    /** Which side the user may move: 'w', 'b', 'both' or null. */
    setInteractive(color) {
      interactiveColor = color;
      sync();
    },
    setOrientation(o) {
      cg.set({ orientation: o });
    },
    shapes(list) {
      cg.setAutoShapes(list || []);
    },
    arrow(from, to, brush = 'green') {
      cg.setAutoShapes([{ orig: from, dest: to, brush }]);
    },
    highlight(square, brush = 'green') {
      cg.setAutoShapes([{ orig: square, brush }]);
    },
    flash(kind) {
      if (kind !== 'bad') return;
      const frame = wrap.parentElement || wrap;
      frame.classList.remove('board-shake');
      void frame.offsetWidth;
      frame.classList.add('board-shake');
    },
    /** Annotation glyph on a square: kind 'good' (!), 'bad' (?), 'hint', 'new'. */
    glyph(square, kind, text) {
      const frame = wrap.parentElement || wrap;
      let layer = frame.querySelector(':scope > .glyph-layer');
      if (!layer) {
        layer = document.createElement('div');
        layer.className = 'glyph-layer';
        frame.append(layer);
      }
      layer.replaceChildren();
      if (!square) return;
      const white = cg.state.orientation === 'white';
      const f = square.charCodeAt(0) - 97;
      const r = Number(square[1]) - 1;
      const col = white ? f : 7 - f;
      const g = document.createElement('div');
      g.className = `glyph ${kind}${col === 7 ? ' flip' : ''}`;
      g.style.left = `${col * 12.5}%`;
      g.style.top = `${(white ? 7 - r : r) * 12.5}%`;
      const b = document.createElement('b');
      const LABELS = { good: '✓', bad: '✕', new: '+', hint: '?' };
      b.textContent = LABELS[kind] || text;
      g.append(b);
      layer.append(g);
    },
    redraw() {
      cg.redrawAll();
    },
    destroy() {
      cg.destroy();
    },
  };
  return api;
}

/** A static, non-interactive mini board. */
export function miniBoard(el, fen, orientation = 'white') {
  el.classList.add('cg-wrap-outer', 'mini', `theme-${store.settings.boardTheme}`);
  return Chessground(el, {
    fen,
    orientation,
    viewOnly: true,
    coordinates: false,
    animation: { enabled: false },
    drawable: { enabled: false, visible: false },
  });
}
