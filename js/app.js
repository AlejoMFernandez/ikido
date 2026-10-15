/* ============ iKidO · prototipo interactivo (v3: arranca vacío) ============ */
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
    musica: '<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
    luna: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
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
    reset: '<path d="M4 4v6h6"/><path d="M20 12a8 8 0 1 1-2.3-5.7L20 9"/>',
    copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
    tarea: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    dientes: '<path d="M7 3c-2 0-4 2-4 5 0 4 2 5 2 9 0 2 1 4 2 4s2-3 2-5 1-3 3-3 3 1 3 3 1 5 2 5 2-2 2-4c0-4 2-5 2-9 0-3-2-5-4-5-2 0-3 1-5 1S9 3 7 3z"/>',
    cocina: '<path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M2 10h20M9 6c0-1 1-2 1-3M14 6c0-1 1-2 1-3"/>',
    alerta: '<path d="M12 5v9M12 19v.5"/>',
    historial: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>'
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

  /* ---------- sugerencias (catálogo de la app anterior, en español) ---------- */
  const CATALOG = [
    { title: 'Hacer la cama', icon: 'cama', value: 10 },
    { title: 'Hacer la tarea', icon: 'tarea', value: 20 },
    { title: 'Lavarse los dientes', icon: 'dientes', value: 5 },
    { title: 'Ordenar el cuarto', icon: 'casa', value: 15 },
    { title: 'Ayudar en la cocina', icon: 'cocina', value: 10 },
    { title: 'Sacar la basura', icon: 'basura', value: 10 },
    { title: 'Leer 20 minutos', icon: 'libro', value: 15 },
    { title: 'Darle de comer al perro', icon: 'perro', value: 10 }
  ];
  const REWARD_SUGS = [
    { title: 'Helado', icon: 'helado', cost: 50 },
    { title: 'Elijo la peli del viernes', icon: 'peli', cost: 80 },
    { title: 'Elijo la música en el auto', icon: 'musica', cost: 40 },
    { title: '20 minutos más despierto', icon: 'luna', cost: 60 },
    { title: 'Armar un fuerte en el living', icon: 'casa', cost: 100 },
    { title: 'Salida al cine', icon: 'ticket', cost: 200 },
    { title: 'Juego nuevo', icon: 'joystick', cost: 500 }
  ];
  const KCOLORS = { cielo: '#C8F1FF', rosa: '#FFE0E8', lima: '#E2FFD6', lila: '#EDE3FF' };
  const RCOLORS = ['#39C5FF', '#B78CFF', '#7CF05A', '#FF4D6D', '#FFC928'];
  const MISSION_REASONS = ['Falta terminarla', 'Hacela de nuevo, más prolijo', 'Mañana la seguís'];
  const REWARD_REASONS = ['Este fin de semana no se puede', 'Elegí otro premio', 'Lo hablamos en casa'];

  /* ---------- estado: arranca vacío ---------- */
  const KEY = 'ikido-demo-v3';
  const blank = () => ({ family: null, kids: [], rewards: [], requests: [], deliveries: [], ledger: [], tips: {}, currentKid: null, kidLogged: {} });
  let S;
  function load() {
    try { const raw = localStorage.getItem(KEY); S = raw ? JSON.parse(raw) : null; } catch (e) { S = null; }
    if (!S || !Array.isArray(S.kids)) S = blank();
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  load();

  /* ---------- utilidades ---------- */
  const app = document.getElementById('app');
  const $ = (sel, root) => (root || app).querySelector(sel);
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const fmt = n => Math.round(n).toLocaleString('es-AR');
  const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const uid = p => p + Date.now().toString(36) + Math.floor(Math.random() * 1000);
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sfx = (n, a) => Sound.play(n, a);
  const isDesktop = () => window.innerWidth > 760;
  const today = () => new Date().toDateString();
  function ago(ts) {
    if (!ts) return 'recién';
    const m = Math.round((Date.now() - ts) / 60000);
    if (m < 1) return 'recién';
    if (m < 60) return `hace ${m} min`;
    const h = Math.round(m / 60);
    return h < 24 ? `hace ${h} h` : 'hace días';
  }
  function scale() { const r = app.getBoundingClientRect(); return r.width / (app.offsetWidth || 1) || 1; }
  function relRect(el) {
    const a = app.getBoundingClientRect(), r = el.getBoundingClientRect(), s = scale();
    return { x: (r.left - a.left) / s, y: (r.top - a.top) / s, w: r.width / s, h: r.height / s };
  }
  function shake(el) { if (el) el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-9px)' }, { transform: 'translateX(9px)' }, { transform: 'translateX(0)' }], { duration: 260 }); }

  /* quién es el adulto, para los textos del chico */
  const adult = () => !S.family ? 'tu familia' : S.family.role === 'otro' ? S.family.parentName : S.family.role;
  const adultCap = () => cap(adult());

  /* chicos */
  const kidById = id => S.kids.find(k => k.id === id);
  const curKid = () => kidById(S.currentKid);
  const need = level => 50 + 25 * (level - 1);
  function kidSvg(k, mood, extra) {
    if (!k) return Kido.svg({ mood: 'huevo' });
    if (k.level < 2) return Kido.svg(Object.assign({ mood: 'huevo', color: k.color }, extra || {}));
    return Kido.svg(Object.assign({ mood: mood || 'feliz', color: k.color, crown: k.level >= 10 }, extra || {}));
  }
  function genCode(base, digits) {
    const letters = (base || 'X').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().replace(/[^A-Z]/g, '');
    let code;
    do { code = (letters + 'XXX').slice(0, digits === 3 ? 3 : Math.min(5, Math.max(3, letters.length))) + String(Math.floor(Math.random() * Math.pow(10, digits))).padStart(digits, '0'); }
    while (S.kids.some(k => k.code === code) || (S.family && S.family.code === code));
    return code;
  }
  function newKid(name, color) {
    return { id: uid('k'), name, color, code: genCode(name, 4), coins: 0, earned: 0, level: 1, xp: 0, streak: 0, lastDay: null, missions: [], medals: {}, newMedals: [], chest: 'locked', celebrate: [], inbox: [] };
  }
  function addLedger(kid, delta, title) { S.ledger.unshift({ kid: kid.id, delta, title, at: Date.now() }); }

  /* ---------- pantallas ---------- */
  const clearToasts = () => app.querySelectorAll('.toast').forEach(x => x.remove());
  let current = null;
  let mode = 'splash';
  let tab = 'mapa';
  let ptab = 'familia';
  let busy = false;
  let shownCoins = 0;
  function mount(html, cls, anim) {
    const el = document.createElement('section');
    el.className = 'screen ' + cls + ' ' + (anim || 'in-fade');
    el.innerHTML = html;
    clearToasts();
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
          <button class="btn3d blanco" data-action="as-parent"><span class="face" style="background:#FFE0E8">${ic('user', { size: 30 })}</span><span style="text-align:left">Soy mamá o papá<small>${S.family ? 'Entrar a mi familia' : 'Crear mi familia'}</small></span></button>
          <button class="btn3d oro" data-action="as-kid"><span class="face">${Kido.svg({ mood: 'huevo' })}</span><span style="text-align:left">Soy chico/a<small>Entrar con mi código</small></span></button>
        </div>
        <p class="credit">Prototipo desarrollado por <a href="https://alejomfernandez.com.ar" target="_blank" rel="noopener">Alejo Martín Fernández</a></p>
      `, 'kid splash', 'in-fade');
  }

  /* ===================== INGRESO DEL CHICO ===================== */
  function renderJoin() {
    mode = 'join';
    const hint = S.kids.length ? `<button class="demo-chip" data-action="join-demo">Completar con los códigos de ${esc((curKid() || S.kids[S.kids.length - 1]).name)}</button>` : '';
    mount(`
      <button class="back-k" data-action="to-splash" aria-label="Volver">${ic('back', { size: 20, sw: 3.5, color: '#fff' })}</button>
      <div class="kd">${Kido.svg({ mood: 'huevo' })}</div>
      <h1 class="ol">¡Entrá a tu aventura!</h1>
      <p>Pedile a tu mamá o papá el código de la familia y tu código secreto.</p>
      <div class="code-field"><label for="fc">Código de familia</label><input id="fc" maxlength="8" placeholder="Ej: FER482" autocomplete="off" autocapitalize="characters"></div>
      <div class="code-field"><label for="cc">Tu código secreto</label><input id="cc" maxlength="10" placeholder="Ej: GERO3842" autocomplete="off" autocapitalize="characters"></div>
      <button class="btn3d oro" data-action="join-go">¡Entrar!</button>
      ${hint}
    `, 'kid join', 'in-up');
  }
  async function typeInto(inp, text) { inp.value = ''; for (const ch of text) { inp.value += ch; sfx('tap'); await wait(65); } }
  async function joinDemo() {
    if (busy || !S.family) return;
    const k = curKid() || S.kids[S.kids.length - 1];
    if (!k) return;
    busy = true;
    await typeInto($('#fc'), S.family.code);
    await typeInto($('#cc'), k.code);
    busy = false;
  }
  async function joinGo() {
    if (busy) return;
    const fc = $('#fc'), cc = $('#cc');
    if (!fc || !cc) return;
    const clean = v => v.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (!S.family) {
      sfx('nope');
      toast({ title: 'Todavía no hay ninguna familia', text: 'Primero un adulto tiene que entrar como mamá o papá y crearla.' }, 3600);
      return;
    }
    const okF = clean(fc.value) === S.family.code;
    const kid = S.kids.find(k => k.code === clean(cc.value));
    if (!okF || !kid) {
      sfx('nope');
      if (!okF) shake(fc);
      if (!kid) shake(cc);
      toast({ title: 'Mmm, ese código no va', text: 'Fijate que esté bien escrito. Los códigos están en la pantalla de Familia del adulto.' }, 3400);
      return;
    }
    busy = true;
    fc.classList.add('ok'); cc.classList.add('ok');
    sfx('success');
    const kd = $('.kd');
    kd.innerHTML = kidSvg(kid, 'festejo');
    kd.animate([{ transform: 'scale(.6) rotate(-10deg)' }, { transform: 'scale(1.15) rotate(6deg)' }, { transform: 'scale(1)' }], { duration: 600, easing: 'cubic-bezier(.3,1.6,.5,1)' });
    Confetti.burst(current, { y: 140, count: 70 });
    await wait(1100);
    S.currentKid = kid.id; S.kidLogged[kid.id] = true; save();
    busy = false;
    tab = 'mapa'; renderKid('in-up');
  }

  /* ===================== MODO CHICO ===================== */
  function pendingSum(k) {
    const a = k.celebrate.reduce((t, id) => { const m = k.missions.find(x => x.id === id); return t + (m ? m.value : 0); }, 0);
    const b = k.inbox.reduce((t, ev) => t + (ev.type === 'reward-rejected' ? ev.cost : 0), 0);
    return a + b;
  }
  function hud(k) {
    return `<div class="hud">
      <button class="avatar" data-action="profile" aria-label="Cambiar de perfil">${kidSvg(k)}</button>
      <div class="hud-mid">
        <div class="hud-name">${esc(k.name)} <span class="lvl" id="lvl">Nv ${k.level}</span></div>
        <div class="xp" aria-label="Experiencia"><i id="xpbar" style="width:${Math.round(k.xp / need(k.level) * 100)}%"></i></div>
      </div>
      <div class="chip" id="coinChip" aria-label="Monedas"><span class="c"></span><span id="coinNum">${fmt(shownCoins)}</span></div>
      <div class="chip" aria-label="Racha de días" style="padding-left:6px">${FLAME}<span>${k.streak}</span></div>
    </div>`;
  }
  function knav() {
    const b = (id, label, icon) => `<button class="${tab === id ? 'on' : ''}" data-action="ktab" data-tab="${id}">${ic(icon, { color: tab === id ? '#0A0F33' : '#C9D2FF', sw: tab === id ? 2.6 : 2.3 })}${label}</button>`;
    return `<nav class="knav">${b('mapa', 'Misiones', 'mapa')}${b('tesoro', 'Tesoro', 'tesoro')}${b('logros', 'Logros', 'logros')}</nav>`;
  }
  function renderKid(anim) {
    const k = curKid();
    if (!k) { renderJoin(); return; }
    mode = 'kid';
    shownCoins = k.coins - pendingSum(k);
    if (tab === 'mapa') renderMap(anim);
    else if (tab === 'tesoro') renderTesoro(anim);
    else renderLogros(anim);
    if (k.inbox.length) setTimeout(processInbox, 650);
    else if (tab === 'mapa' && k.celebrate.length) setTimeout(celebrate, 650);
  }

  /* ---------- mapa ---------- */
  function renderMap(anim) {
    const k = curKid();
    const el = mount(`${hud(k)}<div class="ribbon ol">Misiones de hoy</div><div class="scroll" id="mapScroll"><div class="map" id="map"></div></div>${knav()}`, 'kid', anim);
    drawMap(el);
  }
  function drawMap(screen, flipId) {
    const k = curKid();
    const map = $('#map', screen);
    if (!map || !k) return;
    if (!k.missions.length) {
      map.style.width = 'auto'; map.style.height = 'auto';
      map.innerHTML = `<div class="kid-empty">
        <div class="ke-kido">${kidSvg(k, 'feliz')}</div>
        <b class="ol">¡Hola, ${esc(k.name)}!</b>
        <p>${k.level < 2 ? 'Tu Kido todavía es un huevo. Nace cuando cumplas tus primeras misiones.' : 'Por ahora no tenés misiones.'}</p>
        <p class="soft">Pedile a ${esc(adult())} que te cargue una misión desde su perfil.</p>
      </div>`;
      return;
    }
    const W = Math.min(app.offsetWidth, 430);
    const xs = [0.26, 0.7, 0.36, 0.74, 0.28, 0.68, 0.34, 0.72];
    const top = 70, step = 122;
    const ms = k.missions.map(m => k.celebrate.includes(m.id) ? Object.assign({}, m, { status: 'review' }) : m);
    const pts = ms.map((m, i) => ({ x: Math.round(W * xs[i % xs.length]), y: top + i * step }));
    const chestPt = { x: Math.round(W * (ms.length % 2 ? 0.3 : 0.66)), y: top + ms.length * step + 4 };
    const all = pts.concat([chestPt]);
    const H = chestPt.y + 110;
    map.style.width = W + 'px'; map.style.height = H + 'px';
    const curIdx = ms.findIndex(m => m.status === 'todo');
    const seg = (a, b) => ` C${a.x} ${a.y + step * 0.55} ${b.x} ${b.y - step * 0.55} ${b.x} ${b.y}`;
    let d = `M${all[0].x} ${all[0].y}`;
    for (let i = 1; i < all.length; i++) d += seg(all[i - 1], all[i]);
    let lastDone = -1; ms.forEach((m, i) => { if (m.status === 'approved' || m.status === 'review') lastDone = i; });
    let dDone = '';
    if (lastDone > 0) { dDone = `M${all[0].x} ${all[0].y}`; for (let i = 1; i <= lastDone; i++) dDone += seg(all[i - 1], all[i]); }
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
        : m.status === 'redo' ? ic('alerta', { size: 34, color: '#FFFFFF', sw: 5 })
        : i === curIdx ? `<svg width="44" height="44" viewBox="0 0 24 24" fill="#FFF6E0" stroke="#0A0F33" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[m.icon]}</svg>`
        : ic(m.icon, { size: 28, color: '#9FB0F0' });
      const label = m.status === 'review' ? `${m.title} · ${adult()} revisa` : m.status === 'redo' ? `${m.title} · ¡a rehacer!` : `${m.title} · +${m.value}`;
      html += `<button class="node ${cls}${flipId === m.id ? ' flip' : ''}" style="left:${p.x}px;top:${p.y}px" data-action="node" data-id="${m.id}" aria-label="${esc(m.title)}">${icon}</button>`;
      const r = cls === 'current' ? 62 : 46;
      if (p.x < W / 2) html += `<span class="node-label ${cls}" style="left:${p.x + r}px;top:${p.y}px">${esc(label)}</span>`;
      else html += `<span class="node-label ${cls}" style="right:${W - p.x + r}px;top:${p.y}px">${esc(label)}</span>`;
    });
    html += `<button class="chest-node ${k.chest}" style="left:${chestPt.x}px;top:${chestPt.y}px" data-action="chest" aria-label="Cofre del día">${chestSVG()}</button>`;
    html += `<span class="chest-label ol" style="left:${chestPt.x}px;top:${chestPt.y + 48}px">${k.chest === 'opened' ? 'Cofre abierto' : 'Cofre del día'}</span>`;
    const kp = curIdx >= 0 ? pts[curIdx] : chestPt;
    const kx = kp.x < W / 2 ? kp.x + 54 : kp.x - 146;
    html += `<div class="map-kido" style="left:${kx}px;top:${kp.y - 30}px">${kidSvg(k, curIdx >= 0 ? 'feliz' : 'festejo')}</div>`;
    map.innerHTML = html;
    if (curIdx >= 0) {
      const lbl = map.querySelector('.node-label.current');
      if (lbl) { lbl.style.left = Math.max(8, kp.x - 80) + 'px'; lbl.style.right = 'auto'; lbl.style.top = (kp.y + 76) + 'px'; }
    }
    const sc = $('#mapScroll', screen);
    if (sc) sc.scrollTop = Math.max(0, kp.y - 200);
  }

  function openMissionSheet(m) {
    sfx('pop');
    sheet(`
      <div class="sheet-icon">${ic(m.icon, { size: 46, sw: 2.2, fill: '#FFF6E0' })}</div>
      <h2>${esc(m.title)}</h2>
      ${m.status === 'redo' ? `<p style="margin-bottom:12px">${esc(adultCap())} la revisó y te dejó un mensaje:</p><div class="says">«${esc(m.reason)}»</div>` : `<p>Cuando la termines, tocá el botón. ${esc(adultCap())} la revisa y te manda las monedas.</p>`}
      <div style="text-align:center"><span class="repeat-tag">${ic('historial', { size: 16, sw: 2.6 })}${m.repeat === 'hoy' ? 'Solo por hoy' : 'Se repite toda la semana'}</span></div>
      <div style="text-align:center;margin:-4px 0 18px"><span class="reward-pill"><span style="width:24px;height:24px;border-radius:50%;background:#FFC928;display:inline-block"></span>+${m.value}</span></div>
      <button class="btn3d" data-action="do-mission" data-id="${m.id}">${m.status === 'redo' ? '¡Ahora sí la hice!' : '¡La hice!'}</button>
    `);
  }
  async function doMission(id) {
    const k = curKid(); if (!k) return;
    const m = k.missions.find(x => x.id === id);
    if (!m || busy) return;
    busy = true;
    closeSheet();
    m.status = 'review'; m.at = Date.now(); delete m.reason;
    save();
    Sound.vibrate([30, 40, 60]);
    await missionOverlay(m);
    drawMap(current, m.id);
    busy = false;
    if (!S.tips.toParent) {
      S.tips.toParent = true; save();
      await wait(700);
      toast({ tip: true, title: 'Tip de la demo', text: isDesktop() ? 'Ahora tocá «Ver como adulto» a la izquierda y sellá la misión.' : 'Tocá tu avatar (arriba a la izquierda) y entrá como adulto para sellarla.' }, 5200);
    }
  }
  function missionOverlay(m) {
    return new Promise(resolve => {
      sfx('whoosh');
      clearToasts();
      const ov = document.createElement('div');
      ov.className = 'overlay ov-mission';
      ov.innerHTML = `
        <div class="rays gold"></div><div class="glow"></div>
        <h2 class="ov-title ol-xl">¡Misión<br>cumplida!</h2>
        <div class="ov-kido">${kidSvg(curKid(), 'festejo')}</div>
        <div class="badge-plus"><b class="ol-xl">+${m.value}</b><span>monedas</span></div>
        <div class="ov-card"><h3>${ic(m.icon, { size: 32, fill: '#C8F1FF' })}${esc(m.title)}</h3><p>Le avisamos a ${esc(adult())}. Cuando ponga su sello, las monedas caen en tu cuenta.</p></div>
        <div class="ov-actions"><button class="btn3d">¡Genial!</button></div>`;
      app.appendChild(ov);
      setTimeout(() => sfx('success'), 250);
      setTimeout(() => { Confetti.burst(ov, { y: 260 }); sfx('pop'); }, 600);
      ov.querySelector('.ov-actions button').addEventListener('click', () => {
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      }, { once: true });
    });
  }

  /* ---------- medallas ---------- */
  const MEDALS = [
    { id: 'primera', name: 'Primera misión', html: () => `<div class="m" style="background:#7CF05A;box-shadow:inset 0 -5px 0 #4CB82F">${ic('check', { size: 28, sw: 3.5 })}</div>` },
    { id: 'nacio', name: 'Kido nació', html: () => `<div class="m" style="background:#C8F1FF;overflow:hidden"><span style="width:44px;height:44px;margin-top:8px">${Kido.svg({ mood: 'feliz' })}</span></div>` },
    { id: 'cien', name: '100 monedas', html: () => `<div class="m" style="background:#FFC928;box-shadow:inset 0 -5px 0 #E59E00">100</div>` },
    { id: 'lector', name: 'Lector', html: () => `<div class="m" style="background:#B78CFF;box-shadow:inset 0 -5px 0 #8A5CE0">${ic('libro', { size: 28, fill: '#fff' })}</div>` },
    { id: 'ayudante', name: '5 misiones', html: () => `<div class="m" style="background:#39C5FF;box-shadow:inset 0 -5px 0 #1C8FD1">5</div>` },
    { id: 'tesoro', name: 'Primer tesoro', html: () => `<div class="m" style="background:#FF4D6D;box-shadow:inset 0 -5px 0 #D63355">${ic('regalo', { size: 28, fill: '#FFC928' })}</div>` },
    { id: 'nivel3', name: 'Nivel 3', html: () => `<div class="m" style="background:#FFF6E0">3</div>` },
    { id: 'racha7', name: 'Racha de 7', html: () => '' },
    { id: 'secreta', name: 'Secreta', html: () => '' }
  ];
  const medalName = id => (MEDALS.find(m => m.id === id) || {}).name || '';
  function award(k, id) { if (k.medals[id]) return false; k.medals[id] = true; k.newMedals.push(id); return true; }
  function checkMedals(k) {
    const approved = k.missions.filter(m => m.status === 'approved');
    const got = [];
    if (approved.length >= 1 && award(k, 'primera')) got.push('primera');
    if (approved.length >= 5 && award(k, 'ayudante')) got.push('ayudante');
    if (approved.some(m => m.icon === 'libro') && award(k, 'lector')) got.push('lector');
    if (k.earned >= 100 && award(k, 'cien')) got.push('cien');
    if (k.level >= 2 && award(k, 'nacio')) got.push('nacio');
    if (k.level >= 3 && award(k, 'nivel3')) got.push('nivel3');
    if (k.streak >= 7 && award(k, 'racha7')) got.push('racha7');
    return got;
  }
  async function announceMedals(list) {
    for (const id of list) {
      sfx('medal');
      toast({ tip: true, title: `¡Medalla nueva: ${medalName(id)}!`, text: 'La vas a encontrar en Logros.' }, 2600);
      await wait(1400);
    }
  }

  /* ---------- celebración (cuando el adulto selló) ---------- */
  async function celebrate() {
    const k = curKid();
    if (busy || mode !== 'kid' || tab !== 'mapa' || !k || !k.celebrate.length) return;
    busy = true;
    const ids = k.celebrate.slice();
    for (const id of ids) {
      const m = k.missions.find(x => x.id === id);
      if (!m) { k.celebrate = k.celebrate.filter(x => x !== id); continue; }
      const t = toast({ stamp: true, title: `¡${adultCap()} selló «${m.title}»!`, text: `+${m.value} monedas para vos` });
      sfx('stamp'); Sound.vibrate(60);
      await wait(650);
      await coinRain(m.value, t);
      k.celebrate = k.celebrate.filter(x => x !== id);
      if (k.lastDay !== today()) { k.streak += 1; k.lastDay = today(); }
      const from = k.level;
      const leveled = addXP(k, m.value * 3);
      save();
      drawMap(current, id); sfx('sparkle');
      await wait(350);
      closeToast(t);
      if (leveled) await levelOverlay(k, from);
    }
    const medals = checkMedals(k); save();
    if (k.missions.length && k.missions.every(x => x.status === 'approved') && k.chest === 'locked') {
      k.chest = 'ready'; save();
      drawMap(current);
      sfx('sparkle');
      toast({ tip: true, title: '¡Cofre del día desbloqueado!', text: 'Cumpliste todas tus misiones. Bajá hasta el final del mapa y abrilo.' }, 4000);
      await wait(4200);
    } else drawMap(current);
    await announceMedals(medals);
    busy = false;
  }
  function addXP(k, n) {
    k.xp += n;
    let leveled = false;
    while (k.xp >= need(k.level)) { k.xp -= need(k.level); k.level += 1; leveled = true; }
    const bar = $('#xpbar');
    if (bar) {
      if (leveled) {
        bar.style.width = '100%';
        setTimeout(() => { bar.style.transition = 'none'; bar.style.width = '0%'; requestAnimationFrame(() => { bar.style.transition = ''; bar.style.width = Math.round(k.xp / need(k.level) * 100) + '%'; }); const l = $('#lvl'); if (l) l.textContent = 'Nv ' + k.level; }, 900);
      } else bar.style.width = Math.round(k.xp / need(k.level) * 100) + '%';
    }
    return leveled;
  }
  function coinRain(value, fromEl) {
    return new Promise(resolve => {
      const chip = $('#coinChip'), num = $('#coinNum');
      if (!chip || !num || !fromEl) { shownCoins += value; if (num) num.textContent = fmt(shownCoins); resolve(); return; }
      const from = relRect(fromEl), to = relRect(chip);
      const n = Math.max(5, Math.min(10, Math.round(value / 2)));
      const per = value / n, base = shownCoins;
      let done = 0, acc = 0;
      for (let i = 0; i < n; i++) {
        const c = document.createElement('div');
        c.className = 'fly-coin';
        const sx = from.x + from.w * (0.2 + Math.random() * 0.6), sy = from.y + from.h * 0.6;
        const ex = to.x + 4, ey = to.y + 4;
        app.appendChild(c);
        const mx = (sx + ex) / 2 + (Math.random() - 0.5) * 120, my = Math.min(sy, ey) - 60 - Math.random() * 60;
        const anim = c.animate([
          { transform: `translate(${sx}px,${sy}px) scale(.4)`, opacity: 0 },
          { transform: `translate(${sx}px,${sy + 30}px) scale(1.15)`, opacity: 1, offset: 0.2 },
          { transform: `translate(${mx}px,${my}px) scale(1)`, offset: 0.6 },
          { transform: `translate(${ex}px,${ey}px) scale(.7)`, opacity: 1 }
        ], { duration: reduced ? 1 : 760, delay: reduced ? 0 : i * 95, easing: 'cubic-bezier(.5,0,.6,1)', fill: 'both' });
        anim.onfinish = () => {
          c.remove(); sfx('coin', i);
          acc += per; done++;
          shownCoins = done === n ? base + value : Math.round(base + acc);
          num.textContent = fmt(shownCoins);
          chip.classList.remove('bump'); void chip.offsetWidth; chip.classList.add('bump');
          if (done === n) resolve();
        };
      }
    });
  }
  function levelOverlay(k, fromLevel) {
    const hatch = fromLevel < 2;
    return new Promise(resolve => {
      clearToasts();
      const ov = document.createElement('div');
      ov.className = 'overlay ov-level';
      ov.innerHTML = `<div class="rays beam"></div>
        <div class="lv-txt ol">${hatch ? '¡Tu Kido nació!' : '¡Subiste de nivel!'}</div>
        <div class="lv-num ol-xl">${k.level}</div>
        <div class="lv-kido" id="lvk">${hatch ? Kido.svg({ mood: 'huevo', color: k.color }) : kidSvg(k, 'festejo')}</div>
        <p>${hatch ? 'Cuidalo cumpliendo misiones: cuanto más subís de nivel, más crece.' : 'Kido está creciendo. En el nivel 10 se convierte en rey.'}</p>
        <button class="btn3d oro">¡Vamos!</button>`;
      app.appendChild(ov);
      if (hatch) {
        const box = ov.querySelector('#lvk');
        setTimeout(() => { box.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(-14deg)' }, { transform: 'rotate(14deg)' }, { transform: 'rotate(0)' }], { duration: 420, iterations: 2 }); sfx('shake'); }, 500);
        setTimeout(() => { box.innerHTML = kidSvg(k, 'festejo'); sfx('levelup'); Sound.vibrate([40, 60, 40, 60, 120]); Confetti.burst(ov, { y: 320, count: 140 }); }, 1450);
      } else {
        sfx('levelup'); Sound.vibrate([40, 60, 40, 60, 120]);
        setTimeout(() => Confetti.burst(ov, { y: 300, count: 120 }), 500);
      }
      ov.querySelector('button').addEventListener('click', () => {
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      }, { once: true });
    });
  }

  /* ---------- bandeja: lo que pasó mientras el chico no estaba ---------- */
  async function processInbox() {
    const k = curKid();
    if (busy || mode !== 'kid' || !k || !k.inbox.length) return;
    busy = true;
    let medals = [];
    while (k.inbox.length) {
      const ev = k.inbox[0];
      if (ev.type === 'reward-approved') {
        k.inbox.shift();
        if (award(k, 'tesoro')) medals.push('tesoro');
        save();
        await chestOverlay({ title: ev.title, icon: ev.icon, color: ev.color, foot: `¡${adultCap()} aprobó tu pedido! Cuando te lo dé, lo marca como entregado.`, back: '¡Genial!' });
      } else if (ev.type === 'reward-rejected') {
        const t = toast({ title: `${adultCap()} dijo «todavía no» a ${ev.title}`, text: `«${ev.reason}». Te devolvemos tus ${fmt(ev.cost)} monedas.` });
        sfx('back');
        await wait(900);
        k.inbox.shift(); save();
        await coinRain(ev.cost, t);
        await wait(900);
        closeToast(t);
      } else if (ev.type === 'mission-rejected') {
        const t = toast({ title: `${adultCap()} revisó «${ev.title}»`, text: `«${ev.reason}». Está de nuevo en tu mapa.` });
        sfx('nope');
        k.inbox.shift(); save();
        await wait(2600);
        closeToast(t);
      } else { k.inbox.shift(); save(); }
    }
    busy = false;
    if (tab === 'tesoro') renderTesoro('in-fade');
    else if (tab === 'logros') renderLogros('in-fade');
    else { drawMap(current); }
    await announceMedals(medals);
    if (tab === 'mapa' && k.celebrate.length) setTimeout(celebrate, 300);
  }

  /* ---------- tesoro ---------- */
  function renderTesoro(anim) {
    const k = curKid();
    const coins = shownCoins;
    let body;
    if (!S.rewards.length) {
      body = `<div class="kid-empty"><div class="ke-kido" style="width:150px;height:126px">${chestSVG()}</div><b class="ol">El Tesoro está vacío</b><p>Todavía no hay premios para pedir.</p><p class="soft">Pedile a ${esc(adult())} que cargue premios desde su perfil.</p></div>`;
    } else {
      const sorted = S.rewards.slice().sort((a, b) => a.cost - b.cost);
      const goal = sorted.find(r => r.cost > coins) || sorted[sorted.length - 1];
      const pct = Math.min(100, Math.round(coins / goal.cost * 100));
      const cards = sorted.map((r, i) => {
        if (coins >= r.cost) return `<div class="rcard" style="background:${r.color};animation-delay:${i * 60}ms">
            <div class="ri">${ic(r.icon, { size: 54, sw: 1.8, fill: '#FFC928' })}</div>
            <b>${esc(r.title)}</b>
            <button class="buy" data-action="buy" data-id="${r.id}">Pedir · ${fmt(r.cost)}</button></div>`;
        const p = Math.round(coins / r.cost * 100);
        return `<div class="rcard locked" style="animation-delay:${i * 60}ms">
            <div class="ri">${ic(r.icon, { size: 52, sw: 1.8, color: '#9FB0F0' })}<span class="lock">${ic('lock', { size: 18, sw: 3 })}</span></div>
            <b>${esc(r.title)}</b>
            <div class="need"><div class="bar"><i style="width:${p}%"></i></div><small>${fmt(coins)} de ${fmt(r.cost)}</small></div></div>`;
      }).join('');
      body = `<div class="goal"><div class="gi">${ic(goal.icon, { size: 62, sw: 1.8, fill: '#FFC928' })}</div>
          <div style="flex:1;min-width:0"><small>Tu meta</small><b class="ol">${esc(goal.title)}</b>
          <div class="bar"><i style="width:${pct}%"></i></div>
          <div class="left">${coins >= goal.cost ? '¡Ya te alcanza!' : `¡Te faltan ${fmt(goal.cost - coins)} monedas!`}</div></div></div>
        ${reqStrip(k)}
        <div class="rgrid">${cards}</div>`;
    }
    mount(`
      <div class="top-title"><h1 class="ol"><svg width="46" height="38" viewBox="0 0 200 170" aria-hidden="true"><path d="M20 84 L20 60 Q20 18 100 18 Q180 18 180 60 L180 84 Z" fill="#E0873C" stroke="#0A0F33" stroke-width="10"/><rect x="20" y="80" width="160" height="82" rx="12" fill="#B8612A" stroke="#0A0F33" stroke-width="10"/><rect x="84" y="66" width="32" height="34" rx="6" fill="#FFC928" stroke="#0A0F33" stroke-width="8"/></svg>Tesoro</h1>
        <div class="coins-big" id="coinChip"><span class="c"></span><span id="coinNum">${fmt(coins)}</span></div></div>
      <div class="scroll">${body}</div>${knav()}`, 'kid', anim);
  }
  function reqStrip(k) {
    const mine = S.requests.filter(q => q.kid === k.id);
    const toGet = S.deliveries.filter(d => d.kid === k.id);
    if (!mine.length && !toGet.length) return '';
    return `<div class="reqs">${mine.map(q => `<div class="req"><div class="ri" style="background:${q.color}">${ic(q.icon, { size: 28, sw: 2, fill: '#FFF6E0' })}</div><div><b>${esc(q.title)}</b><small>Pedido por ${fmt(q.cost)}</small></div><span class="st wait">Esperando a ${esc(adult())}</span></div>`).join('')}${toGet.map(d => `<div class="req"><div class="ri" style="background:#7CF05A">${ic(d.icon, { size: 28, sw: 2, fill: '#FFF6E0' })}</div><div><b>${esc(d.title)}</b><small>Aprobado</small></div><span class="st ok">Te lo dan pronto</span></div>`).join('')}</div>`;
  }
  function openBuySheet(r) {
    sfx('pop');
    sheet(`
      <div class="sheet-icon" style="background:${r.color}">${ic(r.icon, { size: 46, sw: 2, fill: '#FFF6E0' })}</div>
      <h2>${esc(r.title)}</h2>
      <p>Le mandamos el pedido a ${esc(adult())}. Si lo aprueba, ¡abrís el cofre! Te quedarían ${fmt(curKid().coins - r.cost)} monedas.</p>
      <div style="text-align:center;margin:-4px 0 18px"><span class="reward-pill"><span style="width:24px;height:24px;border-radius:50%;background:#FFC928;display:inline-block"></span>${fmt(r.cost)}</span></div>
      <div class="row"><button class="btn3d blanco sm" data-action="close-sheet">Todavía no</button><button class="btn3d oro sm" data-action="confirm-buy" data-id="${r.id}">¡Pedirlo!</button></div>
    `);
  }
  async function confirmBuy(id) {
    const k = curKid();
    const r = S.rewards.find(x => x.id === id);
    if (!k || !r || busy || k.coins - pendingSum(k) < r.cost) return;
    busy = true;
    closeSheet();
    k.coins -= r.cost;
    S.requests.push({ id: uid('q'), title: r.title, icon: r.icon, color: r.color, cost: r.cost, kid: k.id, at: Date.now() });
    addLedger(k, -r.cost, 'Pidió: ' + r.title);
    save();
    shownCoins = k.coins - pendingSum(k);
    await requestOverlay(r);
    renderTesoro('in-fade');
    busy = false;
    if (!S.tips.toParentReward) {
      S.tips.toParentReward = true; save();
      await wait(600);
      toast({ tip: true, title: 'Tip de la demo', text: 'Entrá como adulto y aprobá el pedido: cuando vuelvas como chico, se abre el cofre.' }, 5200);
    }
  }
  function requestOverlay(r) {
    return new Promise(resolve => {
      sfx('whoosh'); clearToasts();
      const ov = document.createElement('div');
      ov.className = 'overlay ov-mission ov-request';
      ov.innerHTML = `
        <div class="rays"></div><div class="glow"></div>
        <h2 class="ov-title ol-xl">¡Pedido<br>enviado!</h2>
        <div class="ov-kido" style="width:210px;height:210px">${kidSvg(curKid(), 'feliz')}</div>
        <div class="badge-plus" style="background:${r.color}"><b class="ol-xl" style="font-size:32px">${fmt(r.cost)}</b><span style="color:#0A0F33">guardadas</span></div>
        <div class="ov-card"><h3>${ic(r.icon, { size: 32, fill: '#FFC928' })}Esperando a ${esc(adult())}</h3><p>Tus monedas quedan guardadas. Si lo aprueba, ¡abrís el cofre! Si dice que todavía no, te las devolvemos.</p></div>
        <div class="ov-actions"><button class="btn3d oro">¡Dale!</button></div>`;
      app.appendChild(ov);
      setTimeout(() => sfx('sparkle'), 300);
      ov.querySelector('.ov-actions button').addEventListener('click', () => {
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      }, { once: true });
    });
  }
  function chestOverlay(o) {
    return new Promise(resolve => {
      clearToasts();
      const ov = document.createElement('div');
      ov.className = 'overlay ov-chest';
      const prize = o.coins
        ? `<div class="prize" style="background:#FFC928"><div class="ico" style="background:#FFF6A0"><span class="display" style="font-size:40px">+${o.coins}</span></div><b>${esc(o.title)}</b></div>`
        : `<div class="prize" style="background:${o.color}"><div class="ico">${ic(o.icon, { size: 64, sw: 1.7, fill: '#FFC928' })}</div><b>${esc(o.title)}</b></div>`;
      ov.innerHTML = `<div class="rays beam"></div><div class="glow"></div>
        <h2 class="ov-title ol-xl">¡Es tuyo!</h2>
        ${prize}
        <button class="chest-big" aria-label="Abrir el cofre">${chestSVG()}</button>
        <div class="tap-hint ol">Tocá el cofre</div>
        <div class="ov-foot"><p>${esc(o.foot)}</p><button class="btn3d oro">${o.back}</button></div>`;
      app.appendChild(ov);
      sfx('whoosh');
      const chest = ov.querySelector('.chest-big');
      let opened = false;
      const shakeOnce = () => { chest.classList.remove('shake'); void chest.offsetWidth; chest.classList.add('shake'); [0, 150, 300].forEach(t => setTimeout(() => sfx('shake'), t)); };
      setTimeout(shakeOnce, 400);
      const idle = setInterval(() => { if (!opened && ov.isConnected) shakeOnce(); }, 2600);
      chest.addEventListener('click', () => {
        if (opened) return;
        opened = true; clearInterval(idle);
        chest.classList.remove('shake');
        ov.classList.add('opened');
        sfx('chest'); Sound.vibrate([50, 30, 120]);
        setTimeout(() => Confetti.burst(ov, { y: relRect(chest).y + 40, count: 130 }), 350);
      });
      ov.querySelector('.ov-foot button').addEventListener('click', () => {
        clearInterval(idle);
        sfx('tap'); ov.classList.add('closing');
        setTimeout(() => { ov.remove(); resolve(); }, 250);
      });
    });
  }
  async function openDailyChest() {
    const k = curKid();
    if (busy || !k) return;
    if (k.chest === 'locked') {
      sfx('nope');
      const c = $('.chest-node'); if (c) c.animate([{ transform: 'translate(-50%,-50%) rotate(0)' }, { transform: 'translate(-50%,-50%) rotate(-8deg)' }, { transform: 'translate(-50%,-50%) rotate(8deg)' }, { transform: 'translate(-50%,-50%) rotate(0)' }], { duration: 300 });
      toast({ tip: true, title: 'Todavía está cerrado', text: `Cumplí todas tus misiones y que ${adult()} las selle para abrirlo.` }, 3200);
      return;
    }
    if (k.chest === 'opened') { sfx('tap'); toast({ tip: true, title: 'Ya abriste el cofre de hoy', text: 'Mañana aparece uno nuevo.' }, 2600); return; }
    busy = true;
    k.chest = 'opened'; k.coins += 30; k.earned += 30; addLedger(k, 30, 'Cofre del día'); save();
    await chestOverlay({ coins: 30, title: 'Monedas extra', foot: 'Premio por cumplir todas las misiones del día.', back: '¡Genial!' });
    busy = false;
    renderKid('in-fade');
  }

  /* ---------- logros ---------- */
  function renderLogros(anim) {
    const k = curKid();
    const got = MEDALS.filter(m => k.medals[m.id]).length;
    const fresh = k.newMedals.slice();
    const medals = MEDALS.map(m => k.medals[m.id]
      ? `<div class="medal${fresh.includes(m.id) ? ' new' : ''}">${m.html()}<span>${m.name}</span></div>`
      : `<div class="medal off"><div class="m display" style="font-size:26px">?</div><span>${m.name}</span></div>`).join('');
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => `<span class="${i < k.streak ? '' : 'off'}">${d}</span>`).join('');
    const arrow = `<svg class="evo-arrow" viewBox="0 0 24 24" fill="none" stroke="#0A0F33" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;
    const stage = (lv, label, size, mood) => {
      const now = (lv === 1 && k.level < 2) || (lv === 2 && k.level >= 2 && k.level < 10) || (lv === 10 && k.level >= 10);
      const past = (lv === 1 && k.level >= 2) || (lv === 2 && k.level >= 10);
      const future = !now && !past;
      const art = future ? `<div class="q">?</div>` : `<div style="width:${size}px;height:${size}px">${lv === 1 ? Kido.svg({ mood: 'huevo', color: k.color }) : Kido.svg({ mood, color: k.color, crown: lv === 10 })}</div>`;
      return `<div class="evo-st ${now ? 'now' : past ? 'past' : ''}">${art}${now ? 'Ahora' : label}</div>`;
    };
    mount(`
      <div class="top-title"><h1 class="ol">Logros</h1><div class="chip" id="coinChip"><span class="c"></span><span id="coinNum">${fmt(shownCoins)}</span></div></div>
      <div class="scroll">
        <div class="card evo"><div class="evo-head">Tu Kido<span>Nivel ${k.level}</span></div>
          <div class="evo-row">${stage(1, 'Huevo', k.level < 2 ? 84 : 52, 'feliz')}${arrow}${stage(2, 'Nv 2', k.level >= 2 && k.level < 10 ? 84 : 60, 'festejo')}${arrow}${stage(10, 'Nv 10', 84, 'festejo')}</div>
          <small style="display:block;margin-top:8px;font-weight:900;font-size:13px">${k.level < 2 ? `Faltan ${need(k.level) - k.xp} puntos para que nazca` : `Faltan ${need(k.level) - k.xp} puntos para el nivel ${k.level + 1}`}</small></div>
        <div class="card streak"><svg width="58" height="78" viewBox="0 0 60 80" aria-hidden="true" style="flex-shrink:0"><path d="M30 4 C38 22 54 30 54 50 C54 66 43 76 30 76 C17 76 6 66 6 50 C6 38 14 30 18 22 C20 32 24 36 28 36 C26 24 26 14 30 4 Z" fill="#FFC928" stroke="#0A0F33" stroke-width="5" stroke-linejoin="round"/><path d="M30 40 C36 48 42 52 42 60 C42 68 36 72 30 72 C24 72 18 68 18 60 C18 54 24 50 30 40 Z" fill="#FFF6A0"/></svg>
          <div style="flex:1;min-width:0"><b class="ol">${k.streak ? `Racha de ${k.streak} ${k.streak === 1 ? 'día' : 'días'}` : 'Sin racha todavía'}</b><div class="days">${days}</div><small>${k.streak >= 7 ? '¡Semana completa!' : 'Cumplí misiones todos los días para llegar a 7'}</small></div></div>
        <div class="sec-title ol">Medallas: ${got} de ${MEDALS.length}</div>
        <div class="medals">${medals}</div>
      </div>${knav()}`, 'kid', anim);
    if (fresh.length) { setTimeout(() => sfx('medal'), 200); k.newMedals = []; save(); }
  }

  /* ===================== MODO ADULTO ===================== */
  let detailKid = null;
  let ledgerFilter = 'todo';
  function reviewList() {
    const out = [];
    S.kids.forEach(k => k.missions.forEach(m => { if (m.status === 'review') out.push({ k, m }); }));
    return out;
  }
  function pnav() {
    const b = (id, label, icon) => `<button class="${ptab === id ? 'on' : ''}" data-action="ptab" data-tab="${id}">${ic(icon, { color: ptab === id ? '#0A0F33' : '#4A4F72', sw: 2.2 })}${label}</button>`;
    return `<nav class="pnav">${b('familia', 'Familia', 'home')}${b('revisar', 'Revisar', 'sello')}${b('premios', 'Premios', 'regalo')}${b('cuenta', 'Cuenta', 'user')}</nav>`;
  }
  function renderParent(anim) {
    mode = 'parent';
    if (!S.family || !S.kids.length) { renderOnboarding(S.family ? 4 : 1, anim); return; }
    if (ptab === 'familia') renderFamilia(anim);
    else if (ptab === 'revisar') renderRevisar(anim);
    else if (ptab === 'premios') renderPremios(anim);
    else if (ptab === 'nueva') renderNueva(anim);
    else if (ptab === 'detalle' && kidById(detailKid)) renderDetalle(anim);
    else { ptab = ptab === 'detalle' ? 'familia' : ptab; ptab === 'familia' ? renderFamilia(anim) : renderCuenta(anim); }
  }

  /* ---------- bienvenida guiada (5 pasos) ---------- */
  let onb = { name: '', role: 'mamá', last: '', kid: '', color: 'cielo' };
  function renderOnboarding(step, anim) {
    mode = 'parent';
    const dots = [1, 2, 3, 4, 5].map(i => `<i class="${i === step ? 'on' : ''}"></i>`).join('');
    const inputStyle = 'height:56px;padding:0 16px;border-radius:18px;border:3px solid var(--tinta);font-weight:800;font-size:18px;box-shadow:0 4px 0 var(--tinta);width:100%';
    let body = '';
    if (step === 1) body = `
      <div class="hero"><div class="kd">${Kido.svg({ mood: 'feliz' })}</div>
        <h1>Bienvenido a iKidO</h1>
        <p>Las tareas de la casa se convierten en misiones. Así funciona:</p>
        <div class="steps">
          <div><span style="background:#FFC928">${ic('mapa')}</span>Vos creás misiones y les ponés monedas</div>
          <div><span style="background:#7CF05A">${ic('check', { sw: 3 })}</span>Tu hijo las cumple y te avisa</div>
          <div><span style="background:#C8F1FF">${ic('sello')}</span>Vos las sellás y le caen las monedas</div>
          <div><span style="background:#FF7FA0">${ic('regalo')}</span>Las canjea por premios que elegís vos</div>
        </div></div>
      <button class="btn3d noche" data-action="onb-next" data-step="1">Crear mi familia</button>`;
    else if (step === 2) body = `
      <div class="hero" style="justify-content:flex-start;padding-top:20px"><h1>Contanos de vos</h1>
        <div class="field" style="display:flex;flex-direction:column;gap:8px"><label for="pn" style="font-weight:900">Tu nombre</label><input id="pn" value="${esc(onb.name)}" maxlength="18" placeholder="Ej: Laura" autocomplete="off" style="${inputStyle}"></div>
        <div class="field" style="display:flex;flex-direction:column;gap:8px"><span style="font-weight:900">Para tus hijos sos…</span><div class="picks">${[['mamá', 'Mamá'], ['papá', 'Papá'], ['otro', 'Otro adulto']].map(([v, l]) => `<button class="pick${onb.role === v ? ' on' : ''}" data-action="onb-role" data-v="${v}">${l}</button>`).join('')}</div></div>
        <div class="field" style="display:flex;flex-direction:column;gap:8px"><label for="ln" style="font-weight:900">Apellido de la familia</label><input id="ln" value="${esc(onb.last)}" maxlength="18" placeholder="Ej: Fernández" autocomplete="off" style="${inputStyle}"></div></div>
      <button class="btn3d noche" data-action="onb-next" data-step="2">Siguiente</button>`;
    else if (step === 3) body = `
      <div class="hero"><h1>Este es el código de tu familia</h1>
        <p>Tus hijos lo usan para entrar, sin mail ni contraseña.</p>
        <div class="bigcode">${S.family.code}<button class="copy" data-action="copy" data-text="${S.family.code}" aria-label="Copiar código">${ic('copy', { size: 20 })}</button></div>
        <p style="font-size:14px">Lo vas a tener siempre a mano en la pantalla de Familia.</p></div>
      <button class="btn3d noche" data-action="onb-next" data-step="3">Siguiente</button>`;
    else if (step === 4) body = `
      <div class="hero"><h1>Sumá a tu primer hijo</h1>
        <div class="field" style="display:flex;flex-direction:column;gap:8px"><label for="kn" style="font-weight:900">¿Cómo se llama?</label><input id="kn" value="${esc(onb.kid)}" maxlength="16" placeholder="Ej: Gero" autocomplete="off" style="${inputStyle}"></div>
        <p style="font-weight:900;color:#0A0F33">Elegí el color de su Kido</p>
        <div class="colors">${['cielo', 'rosa', 'lima', 'lila'].map(c => `<button class="${onb.color === c ? 'on' : ''}" data-action="onb-color" data-c="${c}" style="background:${KCOLORS[c]}" aria-label="${c}">${Kido.svg({ mood: 'feliz', color: c })}</button>`).join('')}</div></div>
      <button class="btn3d noche" data-action="onb-next" data-step="4">Crear su perfil</button>`;
    else {
      const k = S.kids[S.kids.length - 1];
      body = `
      <div class="hero"><div class="kd" id="hatch">${Kido.svg({ mood: 'huevo', color: k.color })}</div>
        <h1>¡Listo!</h1>
        <p>El Kido de ${esc(k.name)} todavía es un huevo: nace cuando cumpla sus primeras misiones. Para entrar, usa este código secreto:</p>
        <div class="bigcode" style="font-size:30px">${k.code}<button class="copy" data-action="copy" data-text="${k.code}" aria-label="Copiar código">${ic('copy', { size: 20 })}</button></div></div>
      <button class="btn3d oro" data-action="onb-done">Ir a mi familia</button>`;
    }
    mount(`<div class="dots">${dots}</div>${body}`, 'parent onb', anim || 'in-right');
    if (step === 5) setTimeout(() => {
      const h = $('#hatch'); if (!h) return;
      h.animate([{ transform: 'rotate(0)' }, { transform: 'rotate(-12deg)' }, { transform: 'rotate(12deg)' }, { transform: 'rotate(0)' }], { duration: 500, iterations: 3 });
      sfx('shake'); setTimeout(() => sfx('shake'), 500);
    }, 400);
  }
  function onbNext(step) {
    if (step === 2) {
      const pn = $('#pn'), ln = $('#ln');
      onb.name = pn.value.trim(); onb.last = ln.value.trim();
      if (!onb.name) { sfx('nope'); shake(pn); pn.focus(); return; }
      if (!onb.last) { sfx('nope'); shake(ln); ln.focus(); return; }
      if (!S.family) S.family = { code: '' };
      S.family.parentName = cap(onb.name); S.family.role = onb.role; S.family.last = cap(onb.last);
      if (!S.family.code) S.family.code = genCode(onb.last, 3);
      save();
    }
    if (step === 4) {
      const kn = $('#kn');
      onb.kid = kn.value.trim();
      if (!onb.kid) { sfx('nope'); shake(kn); kn.focus(); return; }
      if (!S.kids.length) S.kids.push(newKid(cap(onb.kid), onb.color));
      save();
      sfx('success');
    } else sfx('tap');
    renderOnboarding(step + 1);
  }

  /* ---------- familia ---------- */
  function renderFamilia(anim) {
    const rv = reviewList().length, rq = S.requests.length, dl = S.deliveries.length, n = rv + rq + dl;
    const parts = [];
    if (rv) parts.push(`${rv} ${rv === 1 ? 'misión' : 'misiones'}`);
    if (rq) parts.push(`${rq} ${rq === 1 ? 'pedido' : 'pedidos'}`);
    if (dl) parts.push(`${dl} por entregar`);
    const anyMission = S.kids.some(k => k.missions.length);
    const firstKid = S.kids[0];
    const loggedAny = S.kids.some(k => S.kidLogged[k.id]);
    const steps = [
      { done: true, text: 'Crear la familia' },
      { done: anyMission, text: 'Crear la primera misión', action: 'ptab', tab: 'nueva' },
      { done: S.rewards.length > 0, text: 'Cargar premios para el Tesoro', action: 'ptab', tab: 'premios' },
      { done: loggedAny, text: `Entrar como ${firstKid.name} con su código`, action: 'as-kid' }
    ];
    const pending = steps.filter(s => !s.done).length;
    const checklist = pending ? `<div class="firsts"><b>Primeros pasos</b>${steps.map(s => s.done
      ? `<div class="fs done"><span>${ic('check', { size: 18, sw: 3.5 })}</span>${esc(s.text)}</div>`
      : `<button class="fs" data-action="${s.action}" ${s.tab ? `data-tab="${s.tab}"` : ''}><span></span>${esc(s.text)}${ic('chev', { size: 18, sw: 3 })}</button>`).join('')}</div>` : '';
    const kids = S.kids.map(k => {
      const done = k.missions.filter(m => m.status === 'approved').length, tot = k.missions.length;
      return `<button class="kidcard" data-action="kid-detail" data-kid="${k.id}"><div class="kf" style="background:${KCOLORS[k.color]}">${kidSvg(k)}</div><div class="kb">
          <div class="kt">${esc(k.name)}<span class="kc"><i></i>${fmt(k.coins)}</span></div>
          <small>${k.level < 2 ? 'Kido en el huevo' : 'Nivel ' + k.level}${k.streak ? ` · racha de ${k.streak}` : ''} · código ${k.code}</small>
          <div class="pbar"><div><i style="width:${tot ? Math.round(done / tot * 100) : 0}%"></i></div>${tot ? `${done}/${tot} esta semana` : 'Sin misiones'}</div></div></button>`;
    }).join('');
    mount(`
      <div class="p-head"><div><small>Familia ${esc(S.family.last)}</small><h1>Hola, ${esc(S.family.parentName)}</h1></div><div class="p-logo">iKid<i></i></div></div>
      <div class="scroll">
        ${n ? `<button class="alert pulse" data-action="ptab" data-tab="revisar"><span class="n">${n}</span><span style="flex:1"><b>Para revisar</b><span>${parts.join(', ')}</span></span>${ic('chev', { size: 22, sw: 3.5, color: '#fff' })}</button>` : ''}
        ${checklist}
        <div class="famcode">${ic('home', { color: '#FFC928', size: 28 })}<div style="flex:1"><small>Código de la familia</small><b>${S.family.code}</b></div><button class="copy" data-action="copy" data-text="${S.family.code}" aria-label="Copiar código">${ic('copy', { size: 20 })}</button></div>
        <div class="p-sec">Tus hijos</div>
        ${kids}
        <button class="addkid" data-action="add-kid">+ Agregar hijo/a</button>
        <button class="btn3d noche p-fab" data-action="ptab" data-tab="nueva">${ic('plus', { size: 22, sw: 4, color: '#FFC928' })}Nueva misión</button>
      </div>${pnav()}`, 'parent', anim);
  }

  /* ---------- detalle del chico + historial ---------- */
  function renderDetalle(anim) {
    const k = kidById(detailKid);
    const rows = S.ledger.filter(l => l.kid === k.id);
    const earned = rows.filter(l => l.delta > 0).reduce((t, l) => t + l.delta, 0);
    const spent = -rows.filter(l => l.delta < 0).reduce((t, l) => t + l.delta, 0);
    const shown = rows.filter(l => ledgerFilter === 'todo' || (ledgerFilter === 'gano' ? l.delta > 0 : l.delta < 0));
    const list = shown.length ? shown.map(l => `<div class="lrow"><div class="d" style="background:${l.delta > 0 ? '#E2FFD6' : '#FFE0E8'}">${ic(l.delta > 0 ? 'check' : 'regalo', { size: 20, sw: 2.6 })}</div><div class="t"><b>${esc(l.title)}</b><small>${ago(l.at)}</small></div><span class="v ${l.delta > 0 ? 'plus' : 'minus'}">${l.delta > 0 ? '+' : '−'}${fmt(Math.abs(l.delta))}</span></div>`).join('')
      : `<div class="empty" style="margin:0">Todavía no hay movimientos. Aparecen cuando sellás misiones o ${esc(k.name)} pide premios.</div>`;
    const missions = k.missions.length ? k.missions.map(m => `<div class="lrow"><div class="d" style="background:#FFF6E0">${ic(m.icon, { size: 20 })}</div><div class="t"><b>${esc(m.title)}</b><small>${{ todo: 'Pendiente', review: 'Para revisar', approved: 'Sellada', redo: 'Para rehacer' }[m.status]} · ${m.repeat === 'hoy' ? 'solo hoy' : 'toda la semana'}</small></div><span class="v" style="color:#B07800">+${m.value}</span></div>`).join('')
      : `<div class="empty" style="margin:0">Sin misiones todavía.</div>`;
    const f = (id, label) => `<button class="${ledgerFilter === id ? 'on' : ''}" data-action="lfilter" data-f="${id}">${label}</button>`;
    mount(`
      <div class="p-head" style="justify-content:flex-start"><button class="back" data-action="ptab" data-tab="familia" aria-label="Volver">${ic('back', { size: 20, sw: 3.5 })}</button><h1>${esc(k.name)}</h1></div>
      <div class="scroll">
        <div class="kid-hero" style="background:${KCOLORS[k.color]}"><div class="kf">${kidSvg(k)}</div><div><h2>${k.level < 2 ? 'En el huevo' : 'Nivel ' + k.level}</h2><small>Código secreto para entrar</small><div class="codepill">${k.code}<button class="copy" style="width:30px;height:30px;border-radius:9px;border-width:2px" data-action="copy" data-text="${k.code}" aria-label="Copiar código">${ic('copy', { size: 15 })}</button></div></div></div>
        <div class="stats"><div class="stat"><b>${fmt(k.coins)}</b><small>Monedas</small></div><div class="stat"><b style="color:#1E8F4E">+${fmt(earned)}</b><small>Ganadas</small></div><div class="stat"><b style="color:#C93554">−${fmt(spent)}</b><small>Gastadas</small></div></div>
        <div class="p-sec">Sus misiones</div>
        <div class="ledger">${missions}</div>
        <div class="p-sec">Historial de monedas</div>
        <div class="filters">${f('todo', 'Todo')}${f('gano', 'Ganadas')}${f('gasto', 'Gastadas')}</div>
        <div class="ledger">${list}</div>
      </div>${pnav()}`, 'parent', anim);
  }

  /* ---------- revisar ---------- */
  function renderRevisar(anim) {
    const list = reviewList();
    const rvHtml = list.length ? list.map(({ k, m }) => `
      <div class="rv" data-rv="${m.id}">
        <div class="rv-top"><div class="kf" style="background:${KCOLORS[k.color]}">${kidSvg(k)}</div>
          <div class="t"><b>${esc(m.title)}</b><small>${esc(k.name)}, ${ago(m.at)}</small></div><span class="v">+${m.value}</span></div>
        <div class="rv-btns"><button class="no" data-action="reject" data-id="${m.id}" data-kid="${k.id}">Todavía no</button>
          <button class="btn3d" data-action="seal" data-id="${m.id}" data-kid="${k.id}">${ic('sello', { size: 22, fill: '#fff' })}Sellar</button></div>
      </div>`).join('') : `<div class="empty">No hay misiones para revisar. Cuando tu hijo toque «¡La hice!», aparece acá.</div>`;
    const rqHtml = S.requests.length ? S.requests.map(q => `
      <div class="rv" data-rv="${q.id}">
        <div class="rv-top"><div class="kf" style="background:${q.color};border:3px solid var(--tinta)">${ic(q.icon, { size: 30, sw: 2, fill: '#FFF6E0' })}</div>
          <div class="t"><b>${esc(q.title)}</b><small>${esc((kidById(q.kid) || {}).name || '')} lo pidió, ${ago(q.at)}</small></div><span class="v">${fmt(q.cost)}</span></div>
        <div class="rv-btns"><button class="no" data-action="req-reject" data-id="${q.id}">Todavía no</button>
          <button class="btn3d" data-action="req-approve" data-id="${q.id}">${ic('check', { size: 22, sw: 3.5 })}Aprobar</button></div>
      </div>`).join('') : `<div class="empty">No hay premios pedidos.</div>`;
    const dlHtml = S.deliveries.length ? S.deliveries.map(d => `
      <div class="rv deliv" data-rv="${d.id}">
        <div class="rv-top"><div class="gi">${ic(d.icon, { size: 34, sw: 1.8, fill: '#FFC928' })}</div>
          <div class="t"><b class="display" style="font-size:20px;font-weight:400">${esc(d.title)}</b><small>Para ${esc((kidById(d.kid) || {}).name || '')}, ya aprobado</small></div></div>
        <button class="btn3d oro sm" data-action="deliver" data-id="${d.id}">Marcar como entregado</button>
      </div>`).join('') : `<div class="empty">No hay premios por entregar.</div>`;
    mount(`
      <div class="p-head" style="justify-content:flex-start"><button class="back" data-action="ptab" data-tab="familia" aria-label="Volver">${ic('back', { size: 20, sw: 3.5 })}</button><h1>Para revisar</h1></div>
      <div class="scroll">
        <div class="p-sec">Misiones hechas</div>${rvHtml}
        <div class="p-sec" style="margin-top:8px">Premios pedidos</div>${rqHtml}
        <div class="p-sec" style="margin-top:8px">Por entregar</div>${dlHtml}
      </div>${pnav()}`, 'parent', anim);
  }
  function stampCard(card, text) {
    const st = document.createElement('div');
    st.className = 'stamp'; st.textContent = text;
    card.appendChild(st);
    sfx('stamp'); Sound.vibrate(70);
    setTimeout(() => { current.classList.add('shake-screen'); setTimeout(() => current.classList.remove('shake-screen'), 320); }, 300);
  }
  async function seal(id, kidId, btn) {
    if (busy) return;
    const k = kidById(kidId); if (!k) return;
    const m = k.missions.find(x => x.id === id); if (!m) return;
    busy = true;
    const card = btn.closest('.rv');
    stampCard(card, '¡Aprobado!');
    m.status = 'approved';
    k.coins += m.value; k.earned += m.value;
    k.celebrate.push(m.id);
    addLedger(k, m.value, m.title);
    save();
    await wait(900);
    sfx('whoosh');
    card.classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
    if (!S.tips.toKid) {
      S.tips.toKid = true; save();
      await wait(400);
      toast({ tip: true, title: 'Tip de la demo', text: isDesktop() ? `Ahora tocá «Ver como chico» para ver la lluvia de monedas de ${k.name}.` : `Andá a Cuenta y entrá como ${k.name} para ver la lluvia de monedas.` }, 5200);
    }
  }
  let pendingReject = null;
  function reasonSheet(kind, id, kidId) {
    pendingReject = { kind, id, kidId };
    const opts = kind === 'mission' ? MISSION_REASONS : REWARD_REASONS;
    sfx('pop');
    sheet(`
      <h2 style="margin-top:4px">${kind === 'mission' ? '¿Qué le falta?' : '¿Por qué todavía no?'}</h2>
      <p>${kind === 'mission' ? 'Le llega tu mensaje y la misión vuelve a su mapa.' : 'Le llega tu mensaje y le devolvemos las monedas.'}</p>
      <div class="reasons">${opts.map((o, i) => `<button class="reason${i === 0 ? ' on' : ''}" data-action="reason" data-r="${esc(o)}">${esc(o)}</button>`).join('')}</div>
      <input class="txt" id="rtxt" maxlength="60" placeholder="O escribí tu propio mensaje" autocomplete="off">
      <button class="btn3d noche sm" data-action="reject-send">Enviar</button>`);
  }
  async function rejectSend() {
    if (!pendingReject || busy) return;
    const custom = ($('#rtxt') || {}).value;
    const sel = app.querySelector('.reason.on');
    const reason = (custom && custom.trim()) || (sel ? sel.dataset.r : 'Todavía no');
    const { kind, id, kidId } = pendingReject; pendingReject = null;
    busy = true;
    const card = app.querySelector(`[data-rv="${id}"]`);
    closeSheet();
    if (kind === 'mission') {
      const k = kidById(kidId);
      const m = k && k.missions.find(x => x.id === id);
      if (m) { m.status = 'redo'; m.reason = reason; k.inbox.push({ type: 'mission-rejected', title: m.title, reason }); }
    } else {
      const q = S.requests.find(x => x.id === id);
      const k = q && kidById(q.kid);
      if (q && k) {
        S.requests = S.requests.filter(x => x.id !== id);
        k.coins += q.cost; addLedger(k, q.cost, 'Devuelto: ' + q.title);
        k.inbox.push({ type: 'reward-rejected', title: q.title, cost: q.cost, reason });
      }
    }
    save();
    sfx('back');
    if (card) card.classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
    toast({ tip: true, title: 'Mensaje enviado', text: `«${reason}»` }, 2600);
  }
  async function approveRequest(id, btn) {
    if (busy) return;
    const q = S.requests.find(x => x.id === id);
    const k = q && kidById(q.kid);
    if (!q || !k) return;
    busy = true;
    stampCard(btn.closest('.rv'), '¡Aprobado!');
    S.requests = S.requests.filter(x => x.id !== id);
    S.deliveries.push({ id: uid('d'), title: q.title, icon: q.icon, kid: k.id, cost: q.cost });
    k.inbox.push({ type: 'reward-approved', title: q.title, icon: q.icon, color: q.color });
    save();
    await wait(900);
    sfx('whoosh');
    btn.closest('.rv').classList.add('gone');
    await wait(650);
    renderRevisar('in-fade');
    busy = false;
    toast({ tip: true, title: 'Pedido aprobado', text: `Cuando ${k.name} entre, se le abre el cofre con su premio.` }, 3600);
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

  /* ---------- premios ---------- */
  let rdraft = { icon: 'regalo', cost: 100 };
  function renderPremios(anim) {
    const list = S.rewards.slice().sort((a, b) => a.cost - b.cost);
    mount(`
      <div class="p-head"><div><small>Lo que tus hijos pueden pedir</small><h1>Premios</h1></div></div>
      <div class="scroll"><div class="plist">
        ${list.length ? list.map(r => `<div class="pitem"><div class="ri" style="background:${r.color}">${ic(r.icon, { size: 32, sw: 1.9, fill: '#FFF6E0' })}</div><b>${esc(r.title)}</b><span>${fmt(r.cost)}</span><button class="del" data-action="del-reward" data-id="${r.id}" aria-label="Borrar premio">${ic('x', { size: 16, sw: 3 })}</button></div>`).join('')
          : `<div class="empty" style="margin:0">Todavía no cargaste premios. Pueden ser salidas, permisos o antojos: cosas que puedas dar vos.</div>`}
        <button class="btn3d noche" style="margin-top:6px" data-action="add-reward">${ic('plus', { size: 22, sw: 4, color: '#FFC928' })}Agregar premio</button>
      </div></div>${pnav()}`, 'parent', anim);
  }
  function addRewardSheet() {
    rdraft = { icon: 'regalo', cost: 100 };
    sfx('pop');
    const used = new Set(S.rewards.map(r => r.title));
    const sugs = REWARD_SUGS.filter(s => !used.has(s.title));
    sheet(`
      <h2 style="margin-top:4px">Nuevo premio</h2>
      ${sugs.length ? `<p style="margin-bottom:8px">Tocá una idea o escribí la tuya</p><div class="sugs" style="margin-bottom:10px">${sugs.map((s, i) => `<button class="sug" data-action="rsug" data-i="${REWARD_SUGS.indexOf(s)}">${ic(s.icon, { size: 22 })}${esc(s.title)}<span>${s.cost}</span></button>`).join('')}</div>` : '<p>Escribí el premio</p>'}
      <input class="txt" id="rname" maxlength="28" placeholder="Ej: Ir a la plaza con papá" autocomplete="off">
      <div class="picks" id="rIcons">${['regalo', 'helado', 'peli', 'musica', 'luna', 'casa', 'ticket', 'joystick'].map(i => `<button class="pick icon${rdraft.icon === i ? ' on' : ''}" data-action="rpick" data-k="icon" data-v="${i}" aria-label="${i}">${ic(i)}</button>`).join('')}</div>
      <div class="picks" id="rCosts">${[40, 50, 60, 80, 100, 200, 500].map(v => `<button class="pick val${rdraft.cost === v ? ' on' : ''}" data-action="rpick" data-k="cost" data-v="${v}">${v}</button>`).join('')}</div>
      <button class="btn3d noche sm" data-action="reward-save">Guardar premio</button>`);
  }
  function useRewardSug(i) {
    const s = REWARD_SUGS[i]; if (!s) return;
    const inp = $('#rname'); if (inp) { inp.value = s.title; inp.animate([{ background: '#FFF6A0' }, { background: '#fff' }], { duration: 700 }); }
    rdraft.icon = s.icon; rdraft.cost = s.cost;
    app.querySelectorAll('#rIcons .pick').forEach(p => p.classList.toggle('on', p.dataset.v === s.icon));
    app.querySelectorAll('#rCosts .pick').forEach(p => p.classList.toggle('on', +p.dataset.v === s.cost));
    sfx('pop');
  }
  function saveReward() {
    const inp = $('#rname');
    const name = (inp ? inp.value : '').trim();
    if (!name) { sfx('nope'); shake(inp); if (inp) inp.focus(); return; }
    S.rewards.push({ id: uid('r'), title: cap(name), icon: rdraft.icon, cost: rdraft.cost, color: RCOLORS[S.rewards.length % RCOLORS.length] });
    save();
    closeSheet();
    sfx('success');
    renderPremios('in-fade');
    toast({ tip: true, title: 'Premio agregado', text: 'Ya aparece en el Tesoro de tus hijos.' }, 2600);
  }

  /* ---------- agregar hijo ---------- */
  let kdraft = 'lima';
  function addKidSheet() {
    kdraft = ['cielo', 'rosa', 'lima', 'lila'][S.kids.length % 4];
    sfx('pop');
    sheet(`
      <h2 style="margin-top:4px">Nuevo hijo/a</h2>
      <p>Le damos un código secreto para entrar y un Kido que todavía es un huevo.</p>
      <input class="txt" id="kname" maxlength="16" placeholder="Nombre" autocomplete="off">
      <div class="colors" style="margin-bottom:16px">${['cielo', 'rosa', 'lima', 'lila'].map(c => `<button class="${kdraft === c ? 'on' : ''}" data-action="kpick" data-c="${c}" style="background:${KCOLORS[c]}" aria-label="${c}">${Kido.svg({ mood: 'feliz', color: c })}</button>`).join('')}</div>
      <button class="btn3d noche sm" data-action="kid-save">Crear perfil</button>`);
  }
  function saveKid() {
    const inp = $('#kname');
    const name = (inp ? inp.value : '').trim();
    if (!name) { sfx('nope'); shake(inp); if (inp) inp.focus(); return; }
    const k = newKid(cap(name), kdraft);
    S.kids.push(k); save();
    closeSheet();
    sfx('success');
    renderFamilia('in-fade');
    toast({ tip: true, title: `¡${k.name} ya está en la familia!`, text: `Su código secreto es ${k.code}.` }, 4200);
  }

  /* ---------- nueva misión ---------- */
  let draft = { title: '', icon: 'planta', kid: null, value: 15, repeat: 'semana' };
  function renderNueva(anim) {
    if (!kidById(draft.kid)) draft.kid = S.kids[0].id;
    const icons = ['planta', 'cama', 'basura', 'libro', 'platos', 'perro'];
    if (!icons.includes(draft.icon)) icons[0] = draft.icon;
    const vals = [5, 10, 15, 20, 30];
    mount(`
      <div class="p-head" style="justify-content:flex-start"><button class="back" data-action="ptab" data-tab="familia" aria-label="Volver">${ic('back', { size: 20, sw: 3.5 })}</button><h1>Nueva misión</h1></div>
      <div class="scroll"><div class="form">
        <div class="field"><span class="lb">Ideas para empezar</span><div class="sugs">${CATALOG.map((c, i) => `<button class="sug" data-action="sug" data-i="${i}">${ic(c.icon, { size: 22 })}${esc(c.title)}<span>+${c.value}</span></button>`).join('')}</div></div>
        <div class="field"><label for="mt">¿Qué hay que hacer?</label><input id="mt" maxlength="28" placeholder="Ej: Regar las plantas" value="${esc(draft.title)}" autocomplete="off"></div>
        <div class="field"><span class="lb">Ícono</span><div class="picks">${icons.map(i => `<button class="pick icon${draft.icon === i ? ' on' : ''}" data-action="pick" data-k="icon" data-v="${i}" aria-label="${i}">${ic(i)}</button>`).join('')}</div></div>
        <div class="field"><span class="lb">¿Para quién?</span><div class="picks">${S.kids.map(k => `<button class="pick kid${draft.kid === k.id ? ' on' : ''}" data-action="pick" data-k="kid" data-v="${k.id}"><span class="kf" style="background:${KCOLORS[k.color]}">${kidSvg(k)}</span>${esc(k.name)}</button>`).join('')}</div></div>
        <div class="field"><span class="lb">¿Cuántas monedas vale?</span><div class="picks">${vals.map(v => `<button class="pick val${draft.value === v ? ' on' : ''}" data-action="pick" data-k="value" data-v="${v}">${v}</button>`).join('')}</div></div>
        <div class="field"><span class="lb">¿Cuándo?</span><div class="picks"><button class="pick${draft.repeat === 'semana' ? ' on' : ''}" data-action="pick" data-k="repeat" data-v="semana">Toda la semana</button><button class="pick${draft.repeat === 'hoy' ? ' on' : ''}" data-action="pick" data-k="repeat" data-v="hoy">Solo hoy</button></div></div>
        <button class="btn3d noche" data-action="create-mission" style="margin-top:6px">Enviar misión</button>
      </div></div>${pnav()}`, 'parent', anim);
    const inp = $('#mt'); if (inp) inp.addEventListener('input', () => { draft.title = inp.value; });
  }
  function useSuggestion(i) {
    const c = CATALOG[i]; if (!c) return;
    draft.title = c.title; draft.icon = c.icon; draft.value = [5, 10, 15, 20, 30].includes(c.value) ? c.value : 15;
    sfx('pop');
    renderNueva('in-fade');
    const inp = $('#mt'); if (inp) inp.animate([{ background: '#FFF6A0' }, { background: '#fff' }], { duration: 700 });
  }
  function createMission() {
    const inp = $('#mt');
    const title = (inp ? inp.value : draft.title).trim();
    if (!title) { sfx('nope'); shake(inp); if (inp) inp.focus(); return; }
    const k = kidById(draft.kid) || S.kids[0];
    k.missions.push({ id: uid('m'), title: cap(title), icon: draft.icon, value: draft.value, status: 'todo', repeat: draft.repeat, at: Date.now() });
    if (k.chest === 'ready') k.chest = 'locked';
    save();
    sfx('success');
    draft = { title: '', icon: 'planta', kid: k.id, value: 15, repeat: 'semana' };
    ptab = 'familia';
    renderFamilia('in-left');
    toast({ tip: true, title: `Misión enviada a ${k.name}`, text: 'Ya aparece en su mapa de misiones.' }, 3000);
  }

  /* ---------- cuenta ---------- */
  function renderCuenta(anim) {
    mount(`
      <div class="p-head"><div><small>${esc(S.family.parentName)} ${esc(S.family.last)}</small><h1>Cuenta</h1></div></div>
      <div class="scroll"><div class="plist">
        ${S.kids.map(k => `<button class="pitem" data-action="enter-kid" data-kid="${k.id}" style="text-align:left"><div class="ri" style="background:${KCOLORS[k.color]};overflow:hidden">${kidSvg(k)}</div><b>Entrar como ${esc(k.name)}</b>${ic('chev', { size: 20, sw: 3 })}</button>`).join('')}
        <button class="pitem" data-action="toggle-sound" style="text-align:left"><div class="ri" style="background:#FFC928">${ic(Sound.isMuted() ? 'mute' : 'sonido')}</div><b data-sound-label>${Sound.isMuted() ? 'Sonido: apagado' : 'Sonido: activado'}</b></button>
        <button class="pitem" data-action="reset" style="text-align:left"><div class="ri" style="background:#FFE0E8">${ic('reset')}</div><b>Borrar todo y empezar de cero</b></button>
      </div>
      <p class="credit" style="color:#4A4F72;text-align:center;margin:10px 18px 20px">Prototipo desarrollado por <a href="https://alejomfernandez.com.ar" target="_blank" rel="noopener" style="color:#0A0F33;font-weight:900">Alejo Martín Fernández</a></p>
      </div>${pnav()}`, 'parent', anim);
  }

  /* ===================== hojas, avisos ===================== */
  let sheetEl = null, veilEl = null;
  function sheet(inner) {
    closeSheet(true);
    clearToasts();
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
    t.innerHTML = (o.stamp ? `<span class="stamp-mini">¡OK!</span>` : `<span class="tip-ico">!</span>`) + `<div><b>${esc(o.title)}</b><span>${esc(o.text)}</span></div>`;
    clearToasts();
    app.appendChild(t);
    if (autoClose) setTimeout(() => closeToast(t), autoClose);
    t.addEventListener('click', () => closeToast(t));
    return t;
  }
  function closeToast(t) { if (!t || !t.isConnected) return; t.classList.add('closing'); setTimeout(() => t.remove(), 300); }
  function profileSheet() {
    sfx('pop');
    const k = curKid();
    sheet(`
      <h2 style="margin-top:4px">¿Quién usa iKidO?</h2>
      <p>En casa, cada uno entra con su perfil.</p>
      <div style="display:flex;flex-direction:column;gap:14px">
        ${S.kids.map(x => `<button class="btn3d ${k && x.id === k.id ? 'oro' : 'blanco'} sm" data-action="enter-kid" data-kid="${x.id}">${esc(x.name)}${k && x.id === k.id ? ' (estás acá)' : ''}</button>`).join('')}
        <button class="btn3d blanco sm" data-action="as-parent">${esc(S.family ? S.family.parentName : 'Adulto')} (${esc(S.family && S.family.role !== 'otro' ? S.family.role : 'adulto')})</button>
        <div class="row"><button class="btn3d blanco sm" data-action="toggle-sound" data-sound-label style="font-size:16px">${Sound.isMuted() ? 'Sonido: no' : 'Sonido: sí'}</button><button class="btn3d blanco sm" data-action="reset" style="font-size:16px">Empezar de cero</button></div>
      </div>`);
  }

  /* ===================== navegación ===================== */
  function asKid() {
    closeSheet(true);
    tab = 'mapa';
    if (!S.family) { renderJoin(); return; }
    const k = curKid();
    if (k && S.kidLogged[k.id]) renderKid('in-up'); else renderJoin();
  }
  function enterKid(id) {
    closeSheet(true);
    const k = kidById(id); if (!k) return;
    S.currentKid = id; save();
    tab = 'mapa';
    if (S.kidLogged[id]) renderKid('in-up'); else renderJoin();
  }
  function asParent() { closeSheet(true); ptab = 'familia'; renderParent('in-up'); }
  function updateSoundLabels() {
    document.querySelectorAll('[data-sound-label]').forEach(el => {
      const short = el.closest('.sheet');
      el.textContent = short ? (Sound.isMuted() ? 'Sonido: no' : 'Sonido: sí') : (Sound.isMuted() ? 'Sonido: apagado' : 'Sonido: activado');
    });
  }
  function resetAll() {
    try { localStorage.removeItem(KEY); } catch (err) {}
    S = blank(); shownCoins = 0; busy = false;
    onb = { name: '', role: 'mamá', last: '', kid: '', color: 'cielo' };
    draft = { title: '', icon: 'planta', kid: null, value: 15, repeat: 'semana' };
    closeSheet(true); app.querySelectorAll('.overlay,.toast,.fly-coin').forEach(x => x.remove());
    sfx('back'); tab = 'mapa'; ptab = 'familia'; renderSplash();
  }

  function handle(e) {
    Sound.unlock();
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const a = el.dataset.action;
    switch (a) {
      case 'as-kid': sfx('tap'); asKid(); break;
      case 'as-parent': sfx('tap'); asParent(); break;
      case 'enter-kid': sfx('tap'); enterKid(el.dataset.kid); break;
      case 'profile': if (!busy) profileSheet(); break;
      case 'close-sheet': sfx('back'); closeSheet(); break;
      case 'to-splash': sfx('back'); renderSplash(); break;
      case 'join-demo': joinDemo(); break;
      case 'join-go': joinGo(); break;
      case 'ktab': {
        if (busy) return;
        const order = ['mapa', 'tesoro', 'logros'];
        const nt = el.dataset.tab; if (nt === tab) return;
        const dir = order.indexOf(nt) > order.indexOf(tab) ? 'in-right' : 'in-left';
        tab = nt; sfx('tab'); renderKid(dir); break;
      }
      case 'node': {
        if (busy) return;
        const k = curKid(); const m = k && k.missions.find(x => x.id === el.dataset.id);
        if (!m) return;
        if (m.status === 'todo' || m.status === 'redo') openMissionSheet(m);
        else if (m.status === 'review') { sfx('tap'); toast({ tip: true, title: 'Esperando el sello', text: `${adultCap()} todavía no revisó «${m.title}».` }, 2600); }
        else { sfx('sparkle'); toast({ stamp: true, title: '¡Misión cumplida!', text: `Ganaste ${m.value} monedas con «${m.title}».` }, 2400); }
        break;
      }
      case 'do-mission': doMission(el.dataset.id); break;
      case 'chest': openDailyChest(); break;
      case 'buy': { const r = S.rewards.find(x => x.id === el.dataset.id); if (r && !busy) openBuySheet(r); break; }
      case 'confirm-buy': sfx('tap'); confirmBuy(el.dataset.id); break;
      case 'ptab': {
        if (busy) return;
        const order = ['familia', 'detalle', 'nueva', 'revisar', 'premios', 'cuenta'];
        const nt = el.dataset.tab; if (nt === ptab) return;
        const dir = order.indexOf(nt) > order.indexOf(ptab) ? 'in-right' : 'in-left';
        ptab = nt; sfx('tab'); renderParent(dir); break;
      }
      case 'onb-next': onbNext(+el.dataset.step); break;
      case 'onb-role': { const pn = $('#pn'), ln = $('#ln'); if (pn) onb.name = pn.value; if (ln) onb.last = ln.value; onb.role = el.dataset.v; sfx('tap'); el.parentElement.querySelectorAll('.pick').forEach(p => p.classList.toggle('on', p === el)); break; }
      case 'onb-color': { const kn = $('#kn'); if (kn) onb.kid = kn.value; onb.color = el.dataset.c; sfx('pop'); el.parentElement.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === el)); break; }
      case 'onb-done': sfx('success'); ptab = 'familia'; renderFamilia('in-up'); setTimeout(() => toast({ tip: true, title: '¡Familia creada!', text: 'Seguí los «Primeros pasos» para probar todo el circuito.' }, 3600), 500); break;
      case 'copy': { const t = el.dataset.text; try { if (navigator.clipboard) navigator.clipboard.writeText(t); } catch (err) {} sfx('sparkle'); toast({ tip: true, title: 'Copiado', text: t }, 1800); break; }
      case 'kid-detail': if (busy) return; detailKid = el.dataset.kid; ledgerFilter = 'todo'; ptab = 'detalle'; sfx('tap'); renderDetalle('in-right'); break;
      case 'lfilter': ledgerFilter = el.dataset.f; sfx('tab'); renderDetalle('in-fade'); break;
      case 'seal': seal(el.dataset.id, el.dataset.kid, el); break;
      case 'reject': if (!busy) reasonSheet('mission', el.dataset.id, el.dataset.kid); break;
      case 'reason': { sfx('tap'); el.parentElement.querySelectorAll('.reason').forEach(b => b.classList.toggle('on', b === el)); const t = $('#rtxt'); if (t) t.value = ''; break; }
      case 'reject-send': rejectSend(); break;
      case 'req-approve': approveRequest(el.dataset.id, el); break;
      case 'req-reject': if (!busy) reasonSheet('reward', el.dataset.id); break;
      case 'deliver': deliver(el.dataset.id, el); break;
      case 'add-reward': addRewardSheet(); break;
      case 'rsug': useRewardSug(+el.dataset.i); break;
      case 'rpick': { const k = el.dataset.k; rdraft[k] = k === 'cost' ? +el.dataset.v : el.dataset.v; sfx('tap'); el.parentElement.querySelectorAll('.pick').forEach(p => p.classList.toggle('on', p === el)); break; }
      case 'reward-save': saveReward(); break;
      case 'del-reward': { S.rewards = S.rewards.filter(r => r.id !== el.dataset.id); save(); sfx('back'); renderPremios('in-fade'); break; }
      case 'add-kid': addKidSheet(); break;
      case 'kpick': { kdraft = el.dataset.c; sfx('pop'); el.parentElement.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === el)); break; }
      case 'kid-save': saveKid(); break;
      case 'pick': {
        const k = el.dataset.k; let v = el.dataset.v; if (k === 'value') v = +v;
        const inp = $('#mt'); if (inp) draft.title = inp.value;
        draft[k] = v; sfx('tap');
        el.parentElement.querySelectorAll('.pick').forEach(p => p.classList.toggle('on', p === el));
        break;
      }
      case 'sug': useSuggestion(+el.dataset.i); break;
      case 'create-mission': createMission(); break;
      case 'toggle-sound': Sound.setMuted(!Sound.isMuted()); updateSoundLabels(); if (!Sound.isMuted()) sfx('sparkle'); if (mode === 'parent' && ptab === 'cuenta') renderCuenta('in-fade'); break;
      case 'reset': resetAll(); break;
    }
  }
  document.addEventListener('click', handle);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && sheetEl) closeSheet();
    if (e.key === 'Enter' && mode === 'join') joinGo();
  });

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
