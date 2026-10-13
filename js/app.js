/* ============ iKidO · prototipo interactivo ============ */
(function () {
  'use strict';

  /* ---------- íconos ---------- */
  const P = {
    cama: '<path d="M3 18v-6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6M3 18h18M7 9V6h4v3"/>',
    basura: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    libro: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3zM21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>',
    platos: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/>',
    perro: '<circle cx="6" cy="10" r="2"/><circle cx="10" cy="5" r="2"/><circle cx="14" cy="5" r="2"/><circle cx="18" cy="10" r="2"/><path d="M8 17c0-3 2-5 4-5s4 2 4 5-2 3-4 3-4 0-4-3z"/>',
    planta: '<path d="M12 21v-9"/><path d="M12 12C12 7 8 5 4 5c0 4 3 7 8 7zM12 10c0-4 3-6 8-6 0 4-3 6-8 6z"/><path d="M7 21h10"/>',
    helado: '<path d="M7 10a5 5 0 0 1 10 0"/><path d="M6 10h12l-6 12z"/>',
    peli: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M10 9l4 2-4 2z"/>',
    casa: '<path d="M3 20V11l9-7 9 7v9z"/><path d="M9 20v-5h6v5"/>',
    ticket: '<path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 6v12" stroke-dasharray="2 2"/>',
    joystick: '<path d="M6 8h12a4 4 0 0 1 4 4v1a4 4 0 0 1-7 2.6L14 14h-4l-1 1.6A4 4 0 0 1 2 13v-1a4 4 0 0 1 4-4z"/><path d="M7 11v3M5.5 12.5h3"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    reloj: '<path d="M7 3h10M7 21h10M8 3c0 5 8 6 8 9s-8 4-8 9M16 3c0 5-8 6-8 9"/>',
    mapa: '<path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    tesoro: '<path d="M3 11V8q0-4 9-4t9 4v3"/><rect x="3" y="11" width="18" height="9" rx="2"/><path d="M12 10v4"/>',
    logros: '<circle cx="12" cy="14" r="7"/><path d="M8 2l2 6M16 2l-2 6"/>',
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    sello: '<path d="M9 3h6v6l3 3v3H6v-3l3-3z"/><path d="M4 21h16"/>',
    regalo: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8c-2-4-6-4-6-1s6 1 6 1 6 2 6-1-4-3-6 1z"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 4v16M4 12h16"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2" fill="#0A0F33"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    sonido: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19.5 5.5a9 9 0 0 1 0 13"/>',
    mute: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9l5 6M22 9l-5 6"/>',
    reset: '<path d="M4 4v6h6"/><path d="M20 12a8 8 0 1 1-2.3-5.7L20 9"/>'
  };
  function ic(name, o) {
    o = o || {};
    return `<svg width="${o.size || 24}" height="${o.size || 24}" viewBox="0 0 24 24" fill="${o.fill || 'none'}" stroke="${o.color || '#0A0F33'}" stroke-width="${o.sw || 2.4}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;
  }
  const FLAME = '<svg class="flame" viewBox="0 0 60 80" aria-hidden="true"><path d="M30 4 C38 22 54 30 54 50 C54 66 43 76 30 76 C17 76 6 66 6 50 C6 38 14 30 18 22 C20 32 24 36 28 36 C26 24 26 14 30 4 Z" fill="#FF4D6D"/><path d="M30 40 C36 48 42 52 42 60 C42 68 36 72 30 72 C24 72 18 68 18 60 C18 54 24 50 30 40 Z" fill="#FFC928"/></svg>';
  function chestSVG() {
    return `<svg viewBox="0 0 200 170" aria-hidden="true">
      <rect x="20" y="80" width="160" height="82" rx="12" fill="#B8612A" stroke="#0A0F33" stroke-width="6"/>
      <ellipse cx="100" cy="82" rx="80" ry="14" fill="#FFF6A0" stroke="#0A0F33" stroke-width="6"/>
      <rect x="44" y="90" width="18" height="72" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
      <rect x="138" y="90" width="18" height="72" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
      <rect x="86" y="96" width="28" height="32" rx="6" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
      <circle cx="100" cy="110" r="4" fill="#0A0F33"/>
      <g class="lid">
        <path d="M20 84 L20 60 Q20 18 100 18 Q180 18 180 60 L180 84 Z" fill="#E0873C" stroke="#0A0F33" stroke-width="6" stroke-linejoin="round"/>
        <rect x="44" y="20" width="18" height="64" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
        <rect x="138" y="20" width="18" height="64" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
        <rect x="86" y="66" width="28" height="26" rx="6" fill="#FFC928" stroke="#0A0F33" stroke-width="5"/>
      </g>
    </svg>`;
  }

  /* ---------- estado ---------- */
  const KEY = 'ikido-demo-v1';
  const DEFAULT = {
    started: false,
    coins: 285, level: 7, xp: 60, streak: 5,
    missions: [
      { id: 'm1', title: 'Hacer la cama', icon: 'cama', value: 10, status: 'approved' },
      { id: 'm2', title: 'Sacar la basura', icon: 'basura', value: 15, status: 'review', when: 'hace 10 min' },
      { id: 'm3', title: 'Leer 20 minutos', icon: 'libro', value: 10, status: 'todo' },
      { id: 'm4', title: 'Poner la mesa', icon: 'platos', value: 15, status: 'todo' },
      { id: 'm5', title: 'Pasear al perro', icon: 'perro', value: 20, status: 'todo' }
    ],
    emi: { coins: 120, level: 3, streak: 2, missions: [{ id: 'e1', title: 'Ordenar los juguetes', icon: 'casa', value: 10, status: 'review', when: 'hace 1 h' }] },
    chest: 'locked',
    rewards: [
      { id: 'r1', title: 'Helado', icon: 'helado', cost: 150, color: '#39C5FF' },
      { id: 'r2', title: 'Elijo la peli del viernes', icon: 'peli', cost: 200, color: '#B78CFF' },
      { id: 'r3', title: 'Pijamada', icon: 'casa', cost: 400, color: '#7CF05A' },
      { id: 'r4', title: 'Salida al cine', icon: 'ticket', cost: 500, color: '#FF4D6D' },
      { id: 'r5', title: 'Juego nuevo', icon: 'joystick', cost: 1500, color: '#FFC928' }
    ],
    deliveries: [{ id: 'd0', title: 'Elijo la peli del viernes', icon: 'peli', kid: 'Emilia', cost: 200 }],
    celebrate: [],
    medals: { primera: true, cien: true, lector: true, ayudante: true, tesoro: false, racha7: false, secreta: false, nivel8: false, madrugador: false },
    newMedal: null,
    tips: {}
  };
  let S;
  function load() {
    try { const raw = localStorage.getItem(KEY); S = raw ? JSON.parse(raw) : null; } catch (e) { S = null; }
    if (!S || !S.missions) S = JSON.parse(JSON.stringify(DEFAULT));
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  load();

  /* ---------- utilidades ---------- */
  const app = document.getElementById('app');
  const $ = (sel, root) => (root || app).querySelector(sel);
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const fmt = n => n.toLocaleString('es-AR');
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sfx = (n, a) => Sound.play(n, a);
  let mode = 'splash';
  let tab = 'mapa';
  let busy = false;
  let shownCoins = S.coins;
  const isDesktop = () => window.innerWidth > 760;

  function scale() {
    const r = app.getBoundingClientRect();
    return r.width / (app.offsetWidth || 1) || 1;
  }
  function relRect(el) {
    const a = app.getBoundingClientRect(), r = el.getBoundingClientRect(), s = scale();
    return { x: (r.left - a.left) / s, y: (r.top - a.top) / s, w: r.width / s, h: r.height / s };
  }

  /* ---------- pantallas ---------- */
  let current = null;
  function mount(html, cls, anim) {
    const el = document.createElement('section');
    el.className = 'screen ' + cls + ' ' + (anim || 'in-fade');
    el.innerHTML = html;
    const old = current;
    app.appendChild(el);
    current = el;
    if (old) { old.classList.add('out'); setTimeout(() => old.remove(), 260); }
    return el;
  }

  /* ===================== INICIO ===================== */
  function renderSplash() {
    mode = 'splash';
    mount(`
        <div class="logo ol-xl"><span class="l">i</span><span class="l">K</span><span class="l">i</span><span class="l">d</span><i class="coin-o" aria-hidden="true"><b>GG</b></i></div>
        <div class="kd">${Kido.svg({ mood: 'feliz' })}</div>
        <p class="tag">Cada tarea es una misión. Cada misión da monedas.</p>
        <div class="who">
          <button class="btn3d oro" data-action="as-kid"><span class="face">${Kido.svg({ mood: 'feliz' })}</span><span style="text-align:left">Soy Gero<small>Entrar como chico</small></span></button>
          <button class="btn3d blanco" data-action="as-parent"><span class="face" style="background:#FFE0E8">${ic('user', { size: 30 })}</span><span style="text-align:left">Soy Laura<small>Entrar como mamá</small></span></button>
        </div>
        <p class="credit">Prototipo desarrollado por <a href="https://alejomfernandez.com.ar" target="_blank" rel="noopener">Alejo Martín Fernández</a></p>
      `, 'kid splash', 'in-fade');
  }

  /* ===================== MODO CHICO ===================== */
  function pendingSum() { return S.celebrate.reduce((t, id) => { const m = S.missions.find(x => x.id === id); return t + (m ? m.value : 0); }, 0); }

  function hud() {
    return `<div class="hud">
      <button class="avatar" data-action="profile" aria-label="Cambiar de perfil">${Kido.svg({ mood: 'feliz' })}</button>
      <div class="hud-mid">
        <div class="hud-name">Gero <span class="lvl" id="lvl">Nv ${S.level}</span></div>
        <div class="xp" aria-label="Experiencia"><i id="xpbar" style="width:${S.xp}%"></i></div>
      </div>
      <div class="chip" id="coinChip" aria-label="Monedas"><span class="c"></span><span id="coinNum">${fmt(shownCoins)}</span></div>
      <div class="chip" aria-label="Racha de días" style="padding-left:6px">${FLAME}<span>${S.streak}</span></div>
    </div>`;
  }
  function knav() {
    const b = (id, label, icon) => `<button class="${tab === id ? 'on' : ''}" data-action="ktab" data-tab="${id}">${ic(icon, { color: tab === id ? '#0A0F33' : '#C9D2FF', sw: tab === id ? 2.6 : 2.3 })}${label}</button>`;
    return `<nav class="knav">${b('mapa', 'Misiones', 'mapa')}${b('tesoro', 'Tesoro', 'tesoro')}${b('logros', 'Logros', 'logros')}</nav>`;
  }

  function renderKid(anim) {
    mode = 'kid';
    shownCoins = S.coins - pendingSum();
    if (tab === 'mapa') renderMap(anim);
    else if (tab === 'tesoro') renderTesoro(anim);
    else renderLogros(anim);
  }

  /* ---------- mapa ---------- */
  function renderMap(anim) {
    const el = mount(`${hud()}<div class="ribbon ol">Misiones de hoy</div><div class="scroll" id="mapScroll"><div class="map" id="map"></div></div>${knav()}`, 'kid', anim);
    drawMap(el);
    if (S.celebrate.length) setTimeout(celebrate, 650);
  }

  function drawMap(screen, flipId) {
    const map = $('#map', screen);
    const W = Math.min(app.offsetWidth, 430);
    const xs = [0.26, 0.7, 0.36, 0.74, 0.28, 0.68, 0.34, 0.72];
    const top = 70, step = 122;
    const ms = S.missions.map(m => S.celebrate.includes(m.id) ? Object.assign({}, m, { status: 'review' }) : m);
    const pts = ms.map((m, i) => ({ x: Math.round(W * xs[i % xs.length]), y: top + i * step }));
    const chestPt = { x: Math.round(W * (ms.length % 2 ? 0.3 : 0.66)), y: top + ms.length * step + 4 };
    const all = pts.concat([chestPt]);
    const H = chestPt.y + 110;
    map.style.width = W + 'px'; map.style.height = H + 'px';
    const curIdx = ms.findIndex(m => m.status === 'todo');
    let d = `M${all[0].x} ${all[0].y}`;
    for (let i = 1; i < all.length; i++) {
      const a = all[i - 1], b = all[i];
      d += ` C${a.x} ${a.y + step * 0.55} ${b.x} ${b.y - step * 0.55} ${b.x} ${b.y}`;
    }
    let lastDone = -1; ms.forEach((m, i) => { if (m.status !== 'todo') lastDone = i; });
    let dDone = '';
    if (lastDone > 0) {
      dDone = `M${all[0].x} ${all[0].y}`;
      for (let i = 1; i <= lastDone; i++) { const a = all[i - 1], b = all[i]; dDone += ` C${a.x} ${a.y + step * 0.55} ${b.x} ${b.y - step * 0.55} ${b.x} ${b.y}`; }
    }
    let html = `<svg class="path" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" aria-hidden="true">
      <path d="${d}" fill="none" stroke="#0A0F33" stroke-width="22" stroke-linecap="round"/>
      <path d="${d}" fill="none" stroke="#2E3F99" stroke-width="14" stroke-linecap="round"/>
      ${dDone ? `<path d="${dDone}" fill="none" stroke="#FFC928" stroke-width="5" stroke-linecap="round" stroke-dasharray="2 12"/>` : ''}
    </svg>`;
    ms.forEach((m, i) => {
      const p = pts[i];
      let cls = m.status === 'approved' ? 'done' : m.status;
      if (i === curIdx) cls = 'current';
      const icon = m.status === 'approved' ? ic('check', { size: 32, sw: 4 })
        : m.status === 'review' ? ic('reloj', { size: 30, color: '#FFFFFF', sw: 3 })
        : i === curIdx ? `<svg width="44" height="44" viewBox="0 0 24 24" fill="#FFF6E0" stroke="#0A0F33" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[m.icon]}</svg>`
        : ic(m.icon, { size: 28, color: '#9FB0F0' });
      const label = m.status === 'approved' ? `${m.title} · +${m.value}` : m.status === 'review' ? `${m.title} · mamá revisa` : `${m.title} · +${m.value}`;
      html += `<button class="node ${cls}${flipId === m.id ? ' flip' : ''}" style="left:${p.x}px;top:${p.y}px" data-action="node" data-id="${m.id}" aria-label="${m.title}">${icon}</button>`;
      const r = cls === 'current' ? 62 : 46;
      const lblCls = cls === 'current' ? 'current' : cls;
      if (p.x < W / 2) html += `<span class="node-label ${lblCls}" style="left:${p.x + r}px;top:${p.y}px">${label}</span>`;
      else html += `<span class="node-label ${lblCls}" style="right:${W - p.x + r}px;top:${p.y}px">${label}</span>`;
    });
    const chestCls = S.chest === 'ready' ? 'ready' : S.chest === 'opened' ? 'opened' : 'locked';
    html += `<button class="chest-node ${chestCls}" style="left:${chestPt.x}px;top:${chestPt.y}px" data-action="chest" aria-label="Cofre del día">${chestSVG()}</button>`;
    html += `<span class="chest-label ol" style="left:${chestPt.x}px;top:${chestPt.y + 48}px">${S.chest === 'opened' ? 'Cofre abierto' : 'Cofre del día'}</span>`;
    const kp = curIdx >= 0 ? pts[curIdx] : chestPt;
    const kx = kp.x < W / 2 ? kp.x + 54 : kp.x - 146;
    html += `<div class="map-kido" style="left:${kx}px;top:${kp.y - 30}px">${Kido.svg({ mood: curIdx >= 0 ? 'feliz' : 'festejo' })}</div>`;
    map.innerHTML = html;
    // las etiquetas del nodo actual se mueven debajo para no chocar con Kido
    if (curIdx >= 0) {
      const lbl = map.querySelector('.node-label.current');
      if (lbl) { lbl.style.left = (kp.x - 80) + 'px'; lbl.style.right = 'auto'; lbl.style.top = (kp.y + 76) + 'px'; }
    }
    const sc = $('#mapScroll', screen);
    if (sc) sc.scrollTop = Math.max(0, kp.y - 200);
  }

  /* ---------- acciones del mapa ---------- */
  function openMissionSheet(m) {
    sfx('pop');
    sheet(`
      <div class="sheet-icon">${ic(m.icon, { size: 46, sw: 2.2, fill: '#FFF6E0' })}</div>
      <h2>${m.title}</h2>
      <p>Cuando la termines, tocá el botón. Mamá la revisa y te manda las monedas.</p>
      <div style="text-align:center;margin:-4px 0 18px"><span class="reward-pill"><span style="width:24px;height:24px;border-radius:50%;background:#FFC928;display:inline-block"></span>+${m.value}</span></div>
      <button class="btn3d" data-action="do-mission" data-id="${m.id}">¡La hice!</button>
    `);
  }

  async function doMission(id) {
    const m = S.missions.find(x => x.id === id);
    if (!m || busy) return;
    busy = true;
    closeSheet();
    m.status = 'review'; m.when = 'recién';
    save();
    Sound.vibrate([30, 40, 60]);
    await missionOverlay(m);
    drawMap(current, m.id);
    busy = false;
    if (!S.tips.toParent) {
      S.tips.toParent = true; save();
      await wait(700);
      toast({ tip: true, title: 'Tip de la demo', text: isDesktop() ? 'Ahora tocá «Ver como Mamá» a la izquierda y sellá la misión.' : 'Tocá tu avatar (arriba a la izquierda) y entrá como Mamá para sellarla.' }, 5200);
    }
  }

  function missionOverlay(m) {
    return new Promise(resolve => {
      sfx('whoosh');
      const ov = document.createElement('div');
      ov.className = 'overlay ov-mission';
      ov.innerHTML = `
        <div class="rays gold"></div><div class="glow"></div>
        <h2 class="ov-title ol-xl">¡Misión<br>cumplida!</h2>
        <div class="ov-kido">${Kido.svg({ mood: 'festejo' })}</div>
        <div class="badge-plus"><b class="ol-xl">+${m.value}</b><span>monedas</span></div>
        <div class="ov-card"><h3>${ic(m.icon, { size: 32, fill: '#C8F1FF' })}${m.title}</h3><p>Le avisamos a mamá. Cuando ponga su sello, las monedas caen en tu cuenta.</p></div>
        <div class="ov-actions"><button class="btn3d">¡Genial!</button></div>`;
      app.appendChild(ov);
      setTimeout(() => sfx('success'), 250);
      setTimeout(() => { Confetti.burst(ov, { y: 260 }); sfx('pop'); }, 600);
      ov.querySelector('.ov-actions button').addEventListener('click', () => {
        sfx('tap');
        ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      }, { once: true });
    });
  }

  /* ---------- celebración (cuando mamá ya selló) ---------- */
  async function celebrate() {
    if (busy || mode !== 'kid' || tab !== 'mapa' || !S.celebrate.length) return;
    busy = true;
    const ids = S.celebrate.slice();
    for (const id of ids) {
      const m = S.missions.find(x => x.id === id);
      if (!m) continue;
      const t = toast({ stamp: true, title: `¡Mamá selló «${m.title}»!`, text: `+${m.value} monedas para vos` });
      sfx('stamp'); Sound.vibrate(60);
      await wait(650);
      await coinRain(m.value, t);
      S.celebrate = S.celebrate.filter(x => x !== id);
      const leveled = addXP(m.value * 3);
      save();
      drawMap(current, id); sfx('sparkle');
      await wait(350);
      closeToast(t);
      if (leveled) await levelOverlay();
    }
    const allDone = S.missions.every(x => x.status === 'approved');
    if (allDone && S.chest === 'locked') {
      S.chest = 'ready'; save();
      drawMap(current);
      sfx('sparkle');
      toast({ tip: true, title: '¡Cofre del día desbloqueado!', text: 'Cumpliste todas las misiones. Bajá hasta el final del mapa y abrilo.' }, 4200);
    } else {
      drawMap(current);
    }
    busy = false;
  }

  function addXP(n) {
    S.xp += n;
    let leveled = false;
    if (S.xp >= 100) { S.xp -= 100; S.level += 1; leveled = true; if (S.level >= 8) S.medals.nivel8 = true; }
    const bar = $('#xpbar');
    if (bar) {
      if (leveled) { bar.style.width = '100%'; setTimeout(() => { bar.style.transition = 'none'; bar.style.width = '0%'; requestAnimationFrame(() => { bar.style.transition = ''; bar.style.width = S.xp + '%'; }); const l = $('#lvl'); if (l) l.textContent = 'Nv ' + S.level; }, 900); }
      else bar.style.width = S.xp + '%';
    }
    return leveled;
  }

  function coinRain(value, fromEl) {
    return new Promise(resolve => {
      const chip = $('#coinChip');
      const num = $('#coinNum');
      if (!chip || !fromEl) { shownCoins += value; resolve(); return; }
      const from = relRect(fromEl), to = relRect(chip);
      const n = Math.max(5, Math.min(10, Math.round(value / 2)));
      const per = value / n;
      const base = shownCoins;
      let done = 0, acc = 0;
      for (let i = 0; i < n; i++) {
        const c = document.createElement('div');
        c.className = 'fly-coin';
        const sx = from.x + from.w * (0.2 + Math.random() * 0.6), sy = from.y + from.h * 0.6;
        const ex = to.x + 4, ey = to.y + 4;
        c.style.left = '0px'; c.style.top = '0px';
        app.appendChild(c);
        const mx = (sx + ex) / 2 + (Math.random() - 0.5) * 120, my = Math.min(sy, ey) - 60 - Math.random() * 60;
        const anim = c.animate([
          { transform: `translate(${sx}px,${sy}px) scale(.4)`, opacity: 0 },
          { transform: `translate(${sx}px,${sy + 30}px) scale(1.15)`, opacity: 1, offset: 0.2 },
          { transform: `translate(${mx}px,${my}px) scale(1)`, offset: 0.6 },
          { transform: `translate(${ex}px,${ey}px) scale(.7)`, opacity: 1 }
        ], { duration: reduced ? 1 : 760, delay: reduced ? 0 : i * 95, easing: 'cubic-bezier(.5,0,.6,1)', fill: 'both' });
        anim.onfinish = () => {
          c.remove();
          sfx('coin', i);
          acc += per; done++;
          shownCoins = done === n ? base + value : Math.round(base + acc);
          num.textContent = fmt(shownCoins);
          chip.classList.remove('bump'); void chip.offsetWidth; chip.classList.add('bump');
          if (done === n) resolve();
        };
      }
    });
  }

  function levelOverlay() {
    return new Promise(resolve => {
      const ov = document.createElement('div');
      ov.className = 'overlay ov-level';
      ov.innerHTML = `<div class="rays beam"></div>
        <div class="lv-txt ol">¡Subiste de nivel!</div>
        <div class="lv-num ol-xl">${S.level}</div>
        <div class="lv-kido">${Kido.svg({ mood: 'festejo' })}</div>
        <p>Kido está creciendo. En el nivel 10 se convierte en rey.</p>
        <button class="btn3d oro">¡Vamos!</button>`;
      app.appendChild(ov);
      sfx('levelup'); Sound.vibrate([40, 60, 40, 60, 120]);
      setTimeout(() => Confetti.burst(ov, { y: 300, count: 120 }), 500);
      ov.querySelector('button').addEventListener('click', () => {
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      }, { once: true });
    });
  }

  /* ---------- tesoro ---------- */
  function renderTesoro(anim) {
    const goal = S.rewards.filter(r => r.cost > S.coins).sort((a, b) => a.cost - b.cost)[0] || S.rewards[S.rewards.length - 1];
    const pct = Math.min(100, Math.round(S.coins / goal.cost * 100));
    const cards = S.rewards.map((r, i) => {
      const can = S.coins >= r.cost;
      if (can) return `<div class="rcard" style="background:${r.color};animation-delay:${i * 60}ms">
          <div class="ri">${ic(r.icon, { size: 54, sw: 1.8, fill: '#FFC928' })}</div>
          <b>${r.title}</b>
          <button class="buy" data-action="buy" data-id="${r.id}">Canjear ${fmt(r.cost)}</button></div>`;
      const p = Math.round(S.coins / r.cost * 100);
      return `<div class="rcard locked" style="animation-delay:${i * 60}ms">
          <div class="ri">${ic(r.icon, { size: 52, sw: 1.8, color: '#9FB0F0' })}<span class="lock">${ic('lock', { size: 18, sw: 3 })}</span></div>
          <b>${r.title}</b>
          <div class="need"><div class="bar"><i style="width:${p}%"></i></div><small>${fmt(S.coins)} de ${fmt(r.cost)}</small></div></div>`;
    }).join('');
    mount(`
      <div class="top-title"><h1 class="ol"><svg width="46" height="38" viewBox="0 0 200 170" aria-hidden="true"><path d="M20 84 L20 60 Q20 18 100 18 Q180 18 180 60 L180 84 Z" fill="#E0873C" stroke="#0A0F33" stroke-width="10"/><rect x="20" y="80" width="160" height="82" rx="12" fill="#B8612A" stroke="#0A0F33" stroke-width="10"/><rect x="84" y="66" width="32" height="34" rx="6" fill="#FFC928" stroke="#0A0F33" stroke-width="8"/></svg>Tesoro</h1>
        <div class="coins-big" id="coinChip"><span class="c"></span><span id="coinNum">${fmt(S.coins)}</span></div></div>
      <div class="scroll">
        <div class="goal"><div class="gi">${ic(goal.icon, { size: 62, sw: 1.8, fill: '#FFC928' })}</div>
          <div style="flex:1;min-width:0"><small>Tu meta</small><b class="ol">${goal.title}</b>
          <div class="bar"><i style="width:${pct}%"></i></div>
          <div class="left">${S.coins >= goal.cost ? '¡Ya te alcanza!' : `¡Te faltan ${fmt(goal.cost - S.coins)} monedas!`}</div></div></div>
        <div class="rgrid">${cards}</div>
      </div>${knav()}`, 'kid', anim);
  }

  function openBuySheet(r) {
    sfx('pop');
    sheet(`
      <div class="sheet-icon" style="background:${r.color}">${ic(r.icon, { size: 46, sw: 2, fill: '#FFF6E0' })}</div>
      <h2>${r.title}</h2>
      <p>Si lo canjeás, te quedan ${fmt(S.coins - r.cost)} monedas. Mamá recibe el aviso para dártelo.</p>
      <div style="text-align:center;margin:-4px 0 18px"><span class="reward-pill"><span style="width:24px;height:24px;border-radius:50%;background:#FFC928;display:inline-block"></span>${fmt(r.cost)}</span></div>
      <div class="row"><button class="btn3d blanco sm" data-action="close-sheet">Todavía no</button><button class="btn3d oro sm" data-action="confirm-buy" data-id="${r.id}">¡Canjear!</button></div>
    `);
  }

  async function confirmBuy(id) {
    const r = S.rewards.find(x => x.id === id);
    if (!r || busy || S.coins < r.cost) return;
    busy = true;
    closeSheet();
    S.coins -= r.cost;
    S.deliveries.push({ id: 'd' + Date.now(), title: r.title, icon: r.icon, kid: 'Gero', cost: r.cost });
    let medal = false;
    if (!S.medals.tesoro) { S.medals.tesoro = true; S.newMedal = 'tesoro'; medal = true; }
    save();
    await chestOverlay({ title: r.title, icon: r.icon, color: r.color, foot: `Mamá ya sabe. Cuando te lo dé, lo marca como entregado.`, spent: `Gastaste ${fmt(r.cost)} y te quedan ${fmt(S.coins)}` , back: 'Volver al Tesoro' });
    renderTesoro('in-fade');
    busy = false;
    if (medal) { await wait(400); sfx('medal'); toast({ tip: true, title: '¡Medalla nueva: Primer tesoro!', text: 'La vas a encontrar en Logros.' }, 3600); }
  }

  function chestOverlay(o) {
    return new Promise(resolve => {
      const ov = document.createElement('div');
      ov.className = 'overlay ov-chest';
      const prize = o.coins
        ? `<div class="prize" style="background:#FFC928"><div class="ico" style="background:#FFF6A0"><span class="display" style="font-size:40px">+${o.coins}</span></div><b>${o.title}</b></div>`
        : `<div class="prize" style="background:${o.color}"><div class="ico">${ic(o.icon, { size: 64, sw: 1.7, fill: '#FFC928' })}</div><b>${o.title}</b></div>`;
      ov.innerHTML = `<div class="rays beam"></div><div class="glow"></div>
        <h2 class="ov-title ol-xl">¡Es tuyo!</h2>
        ${prize}
        <button class="chest-big" aria-label="Abrir el cofre">${chestSVG()}</button>
        <div class="tap-hint ol">Tocá el cofre</div>
        <div class="ov-foot"><p>${o.foot}</p>${o.spent ? `<div class="spent">${o.spent}</div>` : ''}<button class="btn3d oro">${o.back}</button></div>`;
      app.appendChild(ov);
      sfx('whoosh');
      const chest = ov.querySelector('.chest-big');
      let opened = false;
      const shakeOnce = () => { chest.classList.remove('shake'); void chest.offsetWidth; chest.classList.add('shake'); [0, 150, 300].forEach(t => setTimeout(() => sfx('shake'), t)); };
      setTimeout(shakeOnce, 400);
      const idle = setInterval(() => { if (!opened) shakeOnce(); }, 2600);
      chest.addEventListener('click', () => {
        if (opened) return;
        opened = true; clearInterval(idle);
        chest.classList.remove('shake');
        ov.classList.add('opened');
        sfx('chest'); Sound.vibrate([50, 30, 120]);
        setTimeout(() => Confetti.burst(ov, { y: relRect(chest).y + 40, count: 130 }), 350);
      });
      ov.querySelector('.ov-foot button').addEventListener('click', () => {
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      });
    });
  }

  async function openDailyChest() {
    if (busy) return;
    if (S.chest === 'locked') {
      sfx('nope');
      const c = $('.chest-node'); if (c) { c.animate([{ transform: 'translate(-50%,-50%) rotate(0)' }, { transform: 'translate(-50%,-50%) rotate(-8deg)' }, { transform: 'translate(-50%,-50%) rotate(8deg)' }, { transform: 'translate(-50%,-50%) rotate(0)' }], { duration: 300 }); }
      toast({ tip: true, title: 'Todavía está cerrado', text: 'Cumplí todas las misiones de hoy y que mamá las selle para abrirlo.' }, 3200);
      return;
    }
    if (S.chest === 'opened') { sfx('tap'); toast({ tip: true, title: 'Ya abriste el cofre de hoy', text: 'Mañana aparece uno nuevo.' }, 2600); return; }
    busy = true;
    S.chest = 'opened'; S.coins += 50; save();
    await chestOverlay({ coins: 50, title: 'Monedas extra', foot: 'Premio por cumplir todas las misiones del día.', back: '¡Genial!' });
    shownCoins = S.coins - pendingSum();
    renderMap('in-fade');
    busy = false;
  }

  /* ---------- logros ---------- */
  const MEDALS = [
    { id: 'primera', name: 'Primera misión', html: () => `<div class="m" style="background:#7CF05A;box-shadow:inset 0 -5px 0 #4CB82F">${ic('check', { size: 28, sw: 3.5 })}</div>` },
    { id: 'cien', name: '100 monedas', html: () => `<div class="m" style="background:#FFC928;box-shadow:inset 0 -5px 0 #E59E00">100</div>` },
    { id: 'lector', name: 'Lector', html: () => `<div class="m" style="background:#B78CFF;box-shadow:inset 0 -5px 0 #8A5CE0">${ic('libro', { size: 28, fill: '#fff' })}</div>` },
    { id: 'ayudante', name: 'Ayudante', html: () => `<div class="m" style="background:#39C5FF;box-shadow:inset 0 -5px 0 #1C8FD1">${ic('home', { size: 28, fill: '#fff' })}</div>` },
    { id: 'tesoro', name: 'Primer tesoro', html: () => `<div class="m" style="background:#FF4D6D;box-shadow:inset 0 -5px 0 #D63355">${ic('regalo', { size: 28, fill: '#FFC928' })}</div>` },
    { id: 'nivel8', name: 'Nivel 8', html: () => `<div class="m" style="background:#FFF6E0">8</div>` },
    { id: 'racha7', name: 'Racha de 7', html: () => '' },
    { id: 'madrugador', name: 'Madrugador', html: () => '' },
    { id: 'secreta', name: 'Secreta', html: () => '' }
  ];
  function renderLogros(anim) {
    const got = MEDALS.filter(m => S.medals[m.id]).length;
    const medals = MEDALS.map(m => S.medals[m.id]
      ? `<div class="medal${S.newMedal === m.id ? ' new' : ''}">${m.html()}<span>${m.name}</span></div>`
      : `<div class="medal off"><div class="m display" style="font-size:26px">?</div><span>${m.name}</span></div>`).join('');
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => `<span class="${i < S.streak ? '' : 'off'}">${d}</span>`).join('');
    const arrow = `<svg class="evo-arrow" viewBox="0 0 24 24" fill="none" stroke="#0A0F33" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;
    mount(`
      <div class="top-title"><h1 class="ol">Logros</h1><div class="chip"><span class="c"></span><span>${fmt(S.coins)}</span></div></div>
      <div class="scroll">
        <div class="card evo"><div class="evo-head">Tu Kido<span>Nivel ${S.level}</span></div>
          <div class="evo-row">
            <div class="evo-st past"><div style="width:52px;height:52px">${Kido.svg({ mood: 'huevo' })}</div>Nv 1</div>${arrow}
            <div class="evo-st past"><div style="width:60px;height:60px">${Kido.svg({ mood: 'feliz' })}</div>Nv 3</div>${arrow}
            <div class="evo-st now"><div style="width:84px;height:84px">${Kido.svg({ mood: 'festejo' })}</div>Ahora</div>${arrow}
            <div class="evo-st"><div class="q">?</div>Nv 10</div>
          </div></div>
        <div class="card streak"><svg width="58" height="78" viewBox="0 0 60 80" aria-hidden="true" style="flex-shrink:0"><path d="M30 4 C38 22 54 30 54 50 C54 66 43 76 30 76 C17 76 6 66 6 50 C6 38 14 30 18 22 C20 32 24 36 28 36 C26 24 26 14 30 4 Z" fill="#FFC928" stroke="#0A0F33" stroke-width="5" stroke-linejoin="round"/><path d="M30 40 C36 48 42 52 42 60 C42 68 36 72 30 72 C24 72 18 68 18 60 C18 54 24 50 30 40 Z" fill="#FFF6A0"/></svg>
          <div style="flex:1;min-width:0"><b class="ol">Racha de ${S.streak} días</b><div class="days">${days}</div><small>${7 - S.streak} días más y ganás 50 monedas extra</small></div></div>
        <div class="sec-title ol">Medallas: ${got} de ${MEDALS.length}</div>
        <div class="medals">${medals}</div>
      </div>${knav()}`, 'kid', anim);
    if (S.newMedal) { setTimeout(() => sfx('medal'), 200); S.newMedal = null; save(); }
  }

  /* ===================== MODO PADRE ===================== */
  let ptab = 'familia';
  function reviewList() {
    const g = S.missions.filter(m => m.status === 'review').map(m => Object.assign({ kid: 'gero' }, m));
    const e = S.emi.missions.filter(m => m.status === 'review').map(m => Object.assign({ kid: 'emi' }, m));
    return g.concat(e);
  }
  function pnav() {
    const b = (id, label, icon) => `<button class="${ptab === id ? 'on' : ''}" data-action="ptab" data-tab="${id}">${ic(icon, { color: ptab === id ? '#0A0F33' : '#4A4F72', sw: 2.2 })}${label}</button>`;
    return `<nav class="pnav">${b('familia', 'Familia', 'home')}${b('revisar', 'Revisar', 'sello')}${b('premios', 'Premios', 'regalo')}${b('cuenta', 'Cuenta', 'user')}</nav>`;
  }
  function kidFace(kid, size) {
    return kid === 'emi' ? Kido.svg({ mood: 'feliz', color: 'rosa' }) : Kido.svg({ mood: 'feliz' });
  }
  function renderParent(anim) {
    mode = 'parent';
    if (ptab === 'familia') renderFamilia(anim);
    else if (ptab === 'revisar') renderRevisar(anim);
    else if (ptab === 'premios') renderPremios(anim);
    else if (ptab === 'nueva') renderNueva(anim);
    else renderCuenta(anim);
  }

  function renderFamilia(anim) {
    const rv = reviewList().length, dl = S.deliveries.length, n = rv + dl;
    const gDone = S.missions.filter(m => m.status === 'approved').length, gTot = S.missions.length;
    const eDone = S.emi.missions.filter(m => m.status === 'approved').length + 1, eTot = S.emi.missions.length + 2;
    const parts = [];
    if (rv) parts.push(`${rv} ${rv === 1 ? 'misión hecha' : 'misiones hechas'}`);
    if (dl) parts.push(`${dl} ${dl === 1 ? 'premio' : 'premios'} por entregar`);
    mount(`
      <div class="p-head"><div><small>Familia Fernández</small><h1>Hola, Laura</h1></div><div class="p-logo">iKid<i></i></div></div>
      <div class="scroll">
        <button class="alert ${n ? 'pulse' : 'calm'}" data-action="ptab" data-tab="revisar">
          <span class="n">${n}</span><span style="flex:1"><b>${n ? 'Para revisar' : 'Todo al día'}</b><span>${n ? parts.join(' y ') : 'No hay nada pendiente'}</span></span>${ic('chev', { size: 22, sw: 3.5, color: n ? '#fff' : '#0A0F33' })}
        </button>
        <div class="p-sec">Tus chicos</div>
        <div class="kidcard"><div class="kf" style="background:#C8F1FF">${kidFace('gero')}</div><div class="kb">
          <div class="kt">Gerónimo<span class="kc"><i></i>${fmt(S.coins)}</span></div>
          <small>Nivel ${S.level} · racha de ${S.streak} días</small>
          <div class="pbar"><div><i style="width:${Math.round(gDone / gTot * 100)}%"></i></div>${gDone}/${gTot} hoy</div></div></div>
        <div class="kidcard"><div class="kf" style="background:#FFE0E8">${kidFace('emi')}</div><div class="kb">
          <div class="kt">Emilia<span class="kc"><i></i>${fmt(S.emi.coins)}</span></div>
          <small>Nivel ${S.emi.level} · racha de ${S.emi.streak} días</small>
          <div class="pbar"><div><i style="width:${Math.round(eDone / eTot * 100)}%"></i></div>${eDone}/${eTot} hoy</div></div></div>
        <button class="addkid" data-action="soon" data-text="Agregar chicos va a estar en la versión completa.">+ Agregar chico/a</button>
        <button class="btn3d noche p-fab" data-action="ptab" data-tab="nueva">${ic('plus', { size: 22, sw: 4, color: '#FFC928' })}Nueva misión</button>
      </div>${pnav()}`, 'parent', anim);
  }

  function renderRevisar(anim) {
    const list = reviewList();
    const rvHtml = list.length ? list.map(m => `
      <div class="rv" data-rv="${m.id}">
        <div class="rv-top"><div class="kf" style="background:${m.kid === 'emi' ? '#FFE0E8' : '#C8F1FF'}">${kidFace(m.kid)}</div>
          <div class="t"><b>${m.title}</b><small>${m.kid === 'emi' ? 'Emilia' : 'Gerónimo'}, ${m.when || 'recién'}</small></div><span class="v">+${m.value}</span></div>
        <div class="rv-btns"><button class="no" data-action="reject" data-id="${m.id}" data-kid="${m.kid}">Todavía no</button>
          <button class="btn3d" data-action="seal" data-id="${m.id}" data-kid="${m.kid}">${ic('sello', { size: 22, fill: '#fff' })}Sellar</button></div>
      </div>`).join('') : `<div class="empty">No hay misiones para revisar. Cuando un chico toque «¡La hice!», aparece acá.</div>`;
    const dlHtml = S.deliveries.length ? S.deliveries.map(d => `
      <div class="rv deliv" data-rv="${d.id}">
        <div class="rv-top"><div class="gi">${ic(d.icon, { size: 34, sw: 1.8, fill: '#FFC928' })}</div>
          <div class="t"><b class="display" style="font-size:20px;font-weight:400">${d.title}</b><small>${d.kid} lo canjeó por ${fmt(d.cost)}</small></div></div>
        <button class="btn3d oro sm" data-action="deliver" data-id="${d.id}">Marcar como entregado</button>
      </div>`).join('') : `<div class="empty">No hay premios por entregar.</div>`;
    mount(`
      <div class="p-head" style="justify-content:flex-start"><button class="back" data-action="ptab" data-tab="familia" aria-label="Volver">${ic('back', { size: 20, sw: 3.5 })}</button><h1>Para revisar</h1></div>
      <div class="scroll" id="rvScroll">
        <div class="p-sec">Misiones hechas</div>${rvHtml}
        <div class="p-sec" style="margin-top:8px">Premios por entregar</div>${dlHtml}
      </div>${pnav()}`, 'parent', anim);
  }

  async function seal(id, kid, btn) {
    if (busy) return;
    busy = true;
    const card = btn.closest('.rv');
    const st = document.createElement('div');
    st.className = 'stamp'; st.textContent = '¡Aprobado!';
    card.appendChild(st);
    sfx('stamp'); Sound.vibrate(70);
    setTimeout(() => { current.classList.add('shake-screen'); setTimeout(() => current.classList.remove('shake-screen'), 320); }, 300);
    const list = kid === 'emi' ? S.emi.missions : S.missions;
    const m = list.find(x => x.id === id);
    if (m) {
      m.status = 'approved';
      if (kid === 'emi') S.emi.coins += m.value;
      else { S.coins += m.value; S.celebrate.push(m.id); }
      save();
    }
    await wait(900);
    sfx('whoosh');
    card.classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
    if (kid !== 'emi' && !S.tips.toKid) {
      S.tips.toKid = true; save();
      await wait(400);
      toast({ tip: true, title: 'Tip de la demo', text: isDesktop() ? 'Ahora tocá «Ver como Gero» para ver la lluvia de monedas.' : 'Andá a Cuenta y entrá como Gero para ver la lluvia de monedas.' }, 5200);
    }
  }

  async function reject(id, kid, btn) {
    if (busy) return;
    busy = true;
    const list = kid === 'emi' ? S.emi.missions : S.missions;
    const m = list.find(x => x.id === id);
    if (m) { m.status = 'todo'; save(); }
    sfx('back');
    btn.closest('.rv').classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
    toast({ tip: true, title: 'Le avisamos', text: 'La misión vuelve a su lista para que la termine.' }, 2600);
  }

  async function deliver(id, btn) {
    if (busy) return;
    busy = true;
    btn.innerHTML = `${ic('check', { size: 24, sw: 4 })}¡Entregado!`;
    btn.style.background = '#7CF05A';
    sfx('sparkle');
    S.deliveries = S.deliveries.filter(d => d.id !== id); save();
    await wait(700);
    btn.closest('.rv').classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
  }

  function renderPremios(anim) {
    mount(`
      <div class="p-head"><div><small>Lo que pueden ganar</small><h1>Premios</h1></div></div>
      <div class="scroll"><div class="plist">
        ${S.rewards.map(r => `<div class="pitem"><div class="ri" style="background:${r.color}">${ic(r.icon, { size: 32, sw: 1.9, fill: '#FFF6E0' })}</div><b>${r.title}</b><span>${fmt(r.cost)}</span></div>`).join('')}
        <button class="addkid" style="margin:4px 0 0;width:100%" data-action="soon" data-text="Crear premios propios va a estar en la versión completa.">+ Agregar premio</button>
      </div></div>${pnav()}`, 'parent', anim);
  }

  let draft = { title: '', icon: 'planta', kid: 'gero', value: 15 };
  function renderNueva(anim) {
    const icons = ['planta', 'cama', 'basura', 'libro', 'platos', 'perro'];
    const vals = [5, 10, 15, 20, 30];
    mount(`
      <div class="p-head" style="justify-content:flex-start"><button class="back" data-action="ptab" data-tab="familia" aria-label="Volver">${ic('back', { size: 20, sw: 3.5 })}</button><h1>Nueva misión</h1></div>
      <div class="scroll"><div class="form">
        <div class="field"><label for="mt">¿Qué hay que hacer?</label><input id="mt" maxlength="28" placeholder="Ej: Regar las plantas" value="${draft.title.replace(/"/g, '&quot;')}" autocomplete="off"></div>
        <div class="field"><span class="lb">Ícono</span><div class="picks">${icons.map(i => `<button class="pick icon${draft.icon === i ? ' on' : ''}" data-action="pick" data-k="icon" data-v="${i}" aria-label="${i}">${ic(i)}</button>`).join('')}</div></div>
        <div class="field"><span class="lb">¿Para quién?</span><div class="picks">
          <button class="pick kid${draft.kid === 'gero' ? ' on' : ''}" data-action="pick" data-k="kid" data-v="gero"><span class="kf" style="background:#C8F1FF">${kidFace('gero')}</span>Gerónimo</button>
          <button class="pick kid${draft.kid === 'emi' ? ' on' : ''}" data-action="pick" data-k="kid" data-v="emi"><span class="kf" style="background:#FFE0E8">${kidFace('emi')}</span>Emilia</button></div></div>
        <div class="field"><span class="lb">¿Cuántas monedas vale?</span><div class="picks">${vals.map(v => `<button class="pick val${draft.value === v ? ' on' : ''}" data-action="pick" data-k="value" data-v="${v}">${v}</button>`).join('')}</div></div>
        <button class="btn3d noche" data-action="create-mission" style="margin-top:6px">Enviar misión</button>
      </div></div>${pnav()}`, 'parent', anim);
    const inp = $('#mt'); if (inp) inp.addEventListener('input', () => { draft.title = inp.value; });
  }

  function createMission() {
    const inp = $('#mt');
    const title = (inp ? inp.value : draft.title).trim();
    if (!title) {
      sfx('nope');
      if (inp) { inp.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 260 }); inp.focus(); }
      return;
    }
    const m = { id: 'n' + Date.now(), title: title.charAt(0).toUpperCase() + title.slice(1), icon: draft.icon, value: draft.value, status: 'todo' };
    if (draft.kid === 'emi') S.emi.missions.push(m);
    else { S.missions.push(m); if (S.chest === 'ready') S.chest = 'locked'; }
    save();
    sfx('success');
    const who = draft.kid === 'emi' ? 'Emilia' : 'Gero';
    draft = { title: '', icon: 'planta', kid: 'gero', value: 15 };
    ptab = 'familia';
    renderFamilia('in-left');
    toast({ tip: true, title: `Misión enviada a ${who}`, text: who === 'Gero' ? 'Ya aparece en su mapa de misiones.' : 'Ya aparece en su lista.' }, 3000);
  }

  function renderCuenta(anim) {
    mount(`
      <div class="p-head"><div><small>Laura Fernández</small><h1>Cuenta</h1></div></div>
      <div class="scroll"><div class="plist">
        <button class="pitem" data-action="as-kid" style="text-align:left"><div class="ri" style="background:#C8F1FF;overflow:hidden">${kidFace('gero')}</div><b>Entrar como Gero</b>${ic('chev', { size: 20, sw: 3 })}</button>
        <button class="pitem" data-action="toggle-sound" style="text-align:left"><div class="ri" style="background:#FFC928">${ic(Sound.isMuted() ? 'mute' : 'sonido')}</div><b data-sound-label>${Sound.isMuted() ? 'Sonido: apagado' : 'Sonido: activado'}</b></button>
        <button class="pitem" data-action="reset" style="text-align:left"><div class="ri" style="background:#FFE0E8">${ic('reset')}</div><b>Reiniciar la demo</b></button>
      </div>
      <p class="credit" style="color:#4A4F72;text-align:center;margin:10px 18px 20px">Prototipo desarrollado por <a href="https://alejomfernandez.com.ar" target="_blank" rel="noopener" style="color:#0A0F33;font-weight:900">Alejo Martín Fernández</a></p>
      </div>${pnav()}`, 'parent', anim);
  }

  /* ===================== hojas, avisos ===================== */
  let sheetEl = null, veilEl = null;
  function sheet(inner) {
    closeSheet(true);
    app.querySelectorAll('.toast').forEach(x => x.remove());
    veilEl = document.createElement('div'); veilEl.className = 'veil'; veilEl.dataset.action = 'close-sheet';
    sheetEl = document.createElement('div'); sheetEl.className = 'sheet'; sheetEl.setAttribute('role', 'dialog');
    sheetEl.innerHTML = `<button class="sheet-x" data-action="close-sheet" aria-label="Cerrar">${ic('x', { size: 20, sw: 3.5 })}</button>` + inner;
    app.appendChild(veilEl); app.appendChild(sheetEl);
  }
  function closeSheet(instant) {
    if (!sheetEl) return;
    const s = sheetEl, v = veilEl; sheetEl = veilEl = null;
    if (instant) { s.remove(); v.remove(); return; }
    s.classList.add('closing'); v.classList.add('closing');
    setTimeout(() => { s.remove(); v.remove(); }, 220);
  }
  function toast(o, autoClose) {
    const t = document.createElement('div');
    t.className = 'toast' + (o.tip ? ' bottom' : '');
    t.setAttribute('role', 'status');
    t.innerHTML = (o.stamp ? `<span class="stamp-mini">¡OK!</span>` : `<span class="tip-ico">!</span>`) + `<div><b>${o.title}</b><span>${o.text}</span></div>`;
    app.querySelectorAll('.toast').forEach(x => x.remove());
    app.appendChild(t);
    if (autoClose) setTimeout(() => closeToast(t), autoClose);
    t.addEventListener('click', () => closeToast(t));
    return t;
  }
  function closeToast(t) { if (!t || !t.isConnected) return; t.classList.add('closing'); setTimeout(() => t.remove(), 300); }

  function profileSheet() {
    sfx('pop');
    sheet(`
      <h2 style="margin-top:4px">¿Quién usa iKidO?</h2>
      <p>En casa, cada uno entra con su perfil.</p>
      <div style="display:flex;flex-direction:column;gap:14px">
        <button class="btn3d oro sm" data-action="as-kid">Gero (estás acá)</button>
        <button class="btn3d blanco sm" data-action="as-parent">Mamá (Laura)</button>
        <div class="row"><button class="btn3d blanco sm" data-action="toggle-sound" data-sound-label style="font-size:16px">${Sound.isMuted() ? 'Sonido: no' : 'Sonido: sí'}</button><button class="btn3d blanco sm" data-action="reset" style="font-size:16px">Reiniciar</button></div>
      </div>`);
  }

  /* ===================== navegación general ===================== */
  function asKid() { closeSheet(true); tab = 'mapa'; S.started = true; save(); renderKid('in-up'); }
  function asParent() { closeSheet(true); ptab = 'familia'; S.started = true; save(); renderParent('in-up'); }
  function updateSoundLabels() {
    document.querySelectorAll('[data-sound-label]').forEach(el => {
      const short = el.closest('.sheet');
      el.textContent = short ? (Sound.isMuted() ? 'Sonido: no' : 'Sonido: sí') : (Sound.isMuted() ? 'Sonido: apagado' : 'Sonido: activado');
    });
  }

  function handle(e) {
    Sound.unlock();
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.dataset.action;
    switch (a) {
      case 'as-kid': sfx('tap'); asKid(); break;
      case 'as-parent': sfx('tap'); asParent(); break;
      case 'profile': if (!busy) profileSheet(); break;
      case 'close-sheet': sfx('back'); closeSheet(); break;
      case 'ktab': {
        if (busy) return;
        const order = ['mapa', 'tesoro', 'logros'];
        const nt = el.dataset.tab; if (nt === tab) return;
        const dir = order.indexOf(nt) > order.indexOf(tab) ? 'in-right' : 'in-left';
        tab = nt; sfx('tab'); renderKid(dir); break;
      }
      case 'node': {
        if (busy) return;
        const m = S.missions.find(x => x.id === el.dataset.id);
        if (!m) return;
        if (m.status === 'todo') openMissionSheet(m);
        else if (m.status === 'review') { sfx('tap'); toast({ tip: true, title: 'Esperando el sello', text: `Mamá todavía no revisó «${m.title}».` }, 2600); }
        else { sfx('sparkle'); toast({ stamp: true, title: '¡Misión cumplida!', text: `Ganaste ${m.value} monedas con «${m.title}».` }, 2400); }
        break;
      }
      case 'do-mission': doMission(el.dataset.id); break;
      case 'chest': openDailyChest(); break;
      case 'buy': { const r = S.rewards.find(x => x.id === el.dataset.id); if (r && !busy) openBuySheet(r); break; }
      case 'confirm-buy': sfx('tap'); confirmBuy(el.dataset.id); break;
      case 'ptab': {
        if (busy) return;
        const order = ['familia', 'nueva', 'revisar', 'premios', 'cuenta'];
        const nt = el.dataset.tab; if (nt === ptab) return;
        const dir = order.indexOf(nt) > order.indexOf(ptab) ? 'in-right' : 'in-left';
        ptab = nt; sfx('tab'); renderParent(dir); break;
      }
      case 'seal': seal(el.dataset.id, el.dataset.kid, el); break;
      case 'reject': reject(el.dataset.id, el.dataset.kid, el); break;
      case 'deliver': deliver(el.dataset.id, el); break;
      case 'pick': {
        const k = el.dataset.k; let v = el.dataset.v; if (k === 'value') v = +v;
        const inp = $('#mt'); if (inp) draft.title = inp.value;
        draft[k] = v; sfx('tap');
        el.parentElement.querySelectorAll('.pick').forEach(p => p.classList.toggle('on', p === el));
        break;
      }
      case 'create-mission': createMission(); break;
      case 'soon': sfx('tap'); toast({ tip: true, title: 'En la versión completa', text: el.dataset.text }, 2800); break;
      case 'toggle-sound': Sound.setMuted(!Sound.isMuted()); updateSoundLabels(); if (!Sound.isMuted()) sfx('sparkle'); if (mode === 'parent' && ptab === 'cuenta') renderCuenta('in-fade'); break;
      case 'reset': {
        try { localStorage.removeItem(KEY); } catch (err) {}
        S = JSON.parse(JSON.stringify(DEFAULT)); shownCoins = S.coins; busy = false;
        closeSheet(true); app.querySelectorAll('.overlay,.toast,.fly-coin').forEach(x => x.remove());
        sfx('back'); tab = 'mapa'; ptab = 'familia'; renderSplash(); break;
      }
    }
  }
  document.addEventListener('click', handle);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && sheetEl) closeSheet(); });

  /* ---------- tamaño del teléfono en escritorio ---------- */
  function fit() {
    const s = window.innerWidth <= 760 ? 1 : Math.min(1, (window.innerHeight - 40) / 844);
    document.documentElement.style.setProperty('--s', s.toFixed(3));
  }
  let rT;
  window.addEventListener('resize', () => { fit(); clearTimeout(rT); rT = setTimeout(() => { if (mode === 'kid' && tab === 'mapa' && current && !busy) drawMap(current); }, 150); });
  fit();
  updateSoundLabels();

  renderSplash();
})();
