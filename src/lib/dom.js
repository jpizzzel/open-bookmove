// Tiny DOM helpers.
export function h(tag, attrs, ...children) {
  const [name, ...classes] = tag.split('.');
  const el = document.createElement(name || 'div');
  if (classes.length) el.className = classes.join(' ');
  if (attrs && (typeof attrs !== 'object' || attrs instanceof Node || Array.isArray(attrs))) {
    children.unshift(attrs);
    attrs = null;
  }
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v === undefined || v === null || v === false) continue;
      if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'class') el.className = [el.className, v].filter(Boolean).join(' ');
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k === 'value') el.value = v;
      else if (k in el && typeof v !== 'string') el[k] = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  append(el, children);
  return el;
}

function append(el, children) {
  for (const c of children) {
    if (c === null || c === undefined || c === false) continue;
    if (Array.isArray(c)) append(el, c);
    else el.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
}

export function clear(el) {
  while (el.firstChild) el.removeChild(el.firstChild);
  return el;
}

export function toast(message, kind = 'info') {
  let wrap = document.querySelector('.toasts');
  if (!wrap) {
    wrap = h('div.toasts');
    document.body.append(wrap);
  }
  const t = h(`div.toast.toast-${kind}`, message);
  wrap.append(t);
  setTimeout(() => t.classList.add('out'), 2600);
  setTimeout(() => t.remove(), 3000);
}

export function download(filename, text, type = 'application/json') {
  const blob = new Blob([text], { type });
  const a = h('a', { href: URL.createObjectURL(blob), download: filename });
  document.body.append(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 0);
}

export function pickFile(accept) {
  return new Promise((resolve) => {
    const input = h('input', { type: 'file', accept, style: { display: 'none' } });
    input.addEventListener('change', async () => {
      const f = input.files[0];
      input.remove();
      resolve(f ? await f.text() : null);
    });
    document.body.append(input);
    input.click();
  });
}

/** Modal dialog. Returns a promise resolving to the clicked button's value (or null). */
export function modal(title, body, buttons = [{ label: 'OK', value: true, primary: true }]) {
  return new Promise((resolve) => {
    const close = (v) => {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
      resolve(v);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close(null);
    };
    const overlay = h(
      'div.modal-overlay',
      { onclick: (e) => e.target === overlay && close(null) },
      h(
        'div.modal',
        h('h2', title),
        h('div.modal-body', body),
        h(
          'div.modal-actions',
          buttons.map((b) =>
            h(`button.btn${b.primary ? '.btn-primary' : ''}${b.danger ? '.btn-danger' : ''}`, { onclick: () => close(typeof b.value === 'function' ? b.value() : b.value) }, b.label),
          ),
        ),
      ),
    );
    document.addEventListener('keydown', onKey);
    document.body.append(overlay);
    const first = overlay.querySelector('input, textarea, select');
    if (first) first.focus();
  });
}

export function confirmDialog(title, text, okLabel = 'Confirm', danger = false) {
  return modal(title, h('p', text), [
    { label: 'Cancel', value: false },
    { label: okLabel, value: true, primary: !danger, danger },
  ]);
}

export function moveNumber(ply, color) {
  const n = Math.ceil(ply / 2);
  return color === 'w' ? `${n}.` : `${n}…`;
}

// Figurine algebraic notation, as printed in opening books: Nf3 -> ♘f3
const FIG = { K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘' };
export function fan(san) {
  return san.replace(/^[KQRBN]/, (p) => FIG[p]).replace(/=([QRBN])/, (_, p) => `=${FIG[p]}`);
}

/** "3…♘f6" */
export function moveLabel(node) {
  return `${moveNumber(node.ply, node.color)}${node.color === 'w' ? '' : ''}${fan(node.san)}`;
}

/** Inline sequence of moves with numbers: "3.♗c4 ♗c5 4.c3" */
export function moveSeq(nodes) {
  return nodes
    .map((n, i) => (n.color === 'w' ? `${Math.ceil(n.ply / 2)}.${fan(n.san)}` : i === 0 ? `${Math.ceil(n.ply / 2)}…${fan(n.san)}` : fan(n.san)))
    .join(' ');
}

/** Null-safe append: skips null/undefined/false so conditional children never render as "null". */
export function put(el, ...kids) {
  append(el, kids);
  return el;
}
