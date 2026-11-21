// Minimal PGN parser: headers, move numbers, {comments}, ;comments, (variations), NAGs, results.
// Produces a move tree of unvalidated SAN nodes: { san, comment, children }.

const RESULT = /^(1-0|0-1|1\/2-1\/2|\*)$/;
const MOVENUM = /^\d+\.+$/;
const NAG_SYMBOL = /^(!!|\?\?|!\?|\?!|!|\?|\+-|-\+|=|∞|±|∓|⩲|⩱)$/;

function tokenize(text) {
  const tokens = [];
  let i = 0;
  const n = text.length;
  while (i < n) {
    const c = text[i];
    if (/\s/.test(c)) { i++; continue; }
    if (c === '{') {
      const end = text.indexOf('}', i + 1);
      const stop = end === -1 ? n : end;
      tokens.push({ t: 'comment', v: text.slice(i + 1, stop).trim() });
      i = stop + 1;
      continue;
    }
    if (c === ';') {
      const end = text.indexOf('\n', i + 1);
      const stop = end === -1 ? n : end;
      tokens.push({ t: 'comment', v: text.slice(i + 1, stop).trim() });
      i = stop + 1;
      continue;
    }
    if (c === '[') {
      const end = text.indexOf(']', i + 1);
      const stop = end === -1 ? n : end;
      const m = text.slice(i + 1, stop).match(/^\s*(\w+)\s+"(.*)"\s*$/s);
      if (m) tokens.push({ t: 'header', k: m[1], v: m[2] });
      i = stop + 1;
      continue;
    }
    if (c === '(') { tokens.push({ t: 'open' }); i++; continue; }
    if (c === ')') { tokens.push({ t: 'close' }); i++; continue; }
    if (c === '$') {
      let j = i + 1;
      while (j < n && /\d/.test(text[j])) j++;
      tokens.push({ t: 'nag', v: text.slice(i, j) });
      i = j;
      continue;
    }
    let j = i;
    while (j < n && !/[\s{}()\[\];]/.test(text[j])) j++;
    let word = text.slice(i, j);
    i = j;
    // split "1.e4" / "12...Nf6" into number + move
    if (MOVENUM.test(word)) { tokens.push({ t: 'num' }); continue; }
    const m = word.match(/^(\d+\.+)([^.].*)$/);
    if (m) { tokens.push({ t: 'num' }); word = m[2]; }
    if (MOVENUM.test(word)) { tokens.push({ t: 'num' }); continue; }
    if (RESULT.test(word)) { tokens.push({ t: 'result', v: word }); continue; }
    if (NAG_SYMBOL.test(word)) { tokens.push({ t: 'nag', v: word }); continue; }
    // strip trailing annotation glyphs from SAN (e.g. "Nf3!?")
    const san = word.replace(/[!?]+$/, '');
    if (san) tokens.push({ t: 'move', v: san });
  }
  return tokens;
}

export function newNode(san = null) {
  return { san, comment: '', children: [] };
}

function appendComment(node, text) {
  // drop embedded commands like [%cal Ge2e4], [%csl Rd5], [%clk 0:05:00], [%eval 0.3]
  text = text.replace(/\[%[^\]]*\]/g, '').replace(/\s+/g, ' ').trim();
  if (!text) return;
  node.comment = node.comment ? `${node.comment} ${text}` : text;
}

/** Parse PGN text that may contain several games. Returns [{ headers, root }]. */
export function parsePgn(text) {
  const tokens = tokenize(text.replace(/\r/g, ''));
  const games = [];
  let game = null;
  const startGame = () => {
    game = { headers: {}, root: newNode() };
    games.push(game);
    return game;
  };
  let stack = [];
  let parent = null; // node new moves attach to
  let last = null; // last move node (for comments / variations)
  let sawMove = false;

  const reset = () => {
    startGame();
    parent = game.root;
    last = game.root;
    stack = [];
    sawMove = false;
  };
  reset();

  for (const tok of tokens) {
    switch (tok.t) {
      case 'header':
        if (sawMove) reset();
        game.headers[tok.k] = tok.v;
        break;
      case 'comment':
        appendComment(last, tok.v);
        break;
      case 'move': {
        const node = newNode(tok.v);
        parent.children.push(node);
        node._parent = parent;
        parent = node;
        last = node;
        sawMove = true;
        break;
      }
      case 'open':
        // variation is an alternative to `last`, so branch from last's parent
        stack.push({ parent, last });
        parent = last._parent || game.root;
        last = parent;
        break;
      case 'close': {
        const s = stack.pop();
        if (s) { parent = s.parent; last = s.last; }
        break;
      }
      case 'result':
        if (stack.length === 0) {
          // end of game; next tokens (if any) start a new game
          if (sawMove || Object.keys(game.headers).length) reset();
        }
        break;
      default:
        break;
    }
  }
  // drop empty trailing game
  const out = games.filter((g) => g.root.children.length || Object.keys(g.headers).length);
  for (const g of out) stripParents(g.root);
  return out;
}

function stripParents(node) {
  delete node._parent;
  for (const c of node.children) stripParents(c);
}
