/* iKidO · efectos de sonido sintetizados con Web Audio (sin archivos) */
(function () {
  let ctx = null;
  let master = null;
  let muted = false;
  try { muted = localStorage.getItem('ikido-muted') === '1'; } catch (e) {}

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, start, dur, opts) {
    const o = opts || {};
    const c = ensure(); if (!c || muted) return;
    const t0 = c.currentTime + (start || 0);
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = o.type || 'square';
    osc.frequency.setValueAtTime(freq, t0);
    if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t0 + dur);
    const vol = o.vol == null ? 0.12 : o.vol;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g); g.connect(master);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  }

  function noise(start, dur, opts) {
    const o = opts || {};
    const c = ensure(); if (!c || muted) return;
    const t0 = c.currentTime + (start || 0);
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = c.createBufferSource(); src.buffer = buf;
    const f = c.createBiquadFilter();
    f.type = o.filter || 'lowpass';
    f.frequency.setValueAtTime(o.freq || 1000, t0);
    if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t0 + dur);
    f.Q.value = o.q || 1;
    const g = c.createGain();
    g.gain.setValueAtTime(o.vol == null ? 0.3 : o.vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t0); src.stop(t0 + dur + 0.02);
  }

  const notes = { C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880, B5: 987.77, C6: 1046.5, D6: 1174.66, E6: 1318.5, G6: 1568 };

  const sfx = {
    tap() { tone(700, 0, 0.06, { type: 'triangle', vol: 0.1, to: 900 }); },
    back() { tone(600, 0, 0.07, { type: 'triangle', vol: 0.09, to: 420 }); },
    tab() { tone(520, 0, 0.05, { type: 'triangle', vol: 0.08 }); tone(780, 0.04, 0.06, { type: 'triangle', vol: 0.08 }); },
    pop() { tone(320, 0, 0.12, { type: 'sine', vol: 0.18, to: 980 }); },
    coin(i) {
      const k = 1 + ((i || 0) % 4) * 0.06;
      tone(notes.B5 * k, 0, 0.07, { vol: 0.07 });
      tone(notes.E6 * k, 0.06, 0.18, { vol: 0.07 });
    },
    whoosh() { noise(0, 0.35, { filter: 'bandpass', freq: 400, to: 3000, q: 0.8, vol: 0.25 }); },
    success() {
      [notes.C5, notes.E5, notes.G5, notes.C6].forEach((f, i) => tone(f, i * 0.09, 0.2, { vol: 0.09 }));
      tone(notes.E6, 0.38, 0.45, { vol: 0.08 });
      tone(notes.G6, 0.38, 0.45, { type: 'triangle', vol: 0.06 });
    },
    levelup() {
      const seq = [notes.C5, notes.E5, notes.G5, notes.C6, notes.G5, notes.C6, notes.E6, notes.G6];
      seq.forEach((f, i) => tone(f, i * 0.08, 0.16, { vol: 0.085 }));
      tone(notes.C6, 0.66, 0.7, { type: 'triangle', vol: 0.1 });
      tone(notes.E6, 0.66, 0.7, { vol: 0.06 });
    },
    stamp() {
      noise(0, 0.18, { filter: 'lowpass', freq: 900, to: 120, vol: 0.55 });
      tone(140, 0, 0.28, { type: 'sine', vol: 0.5, to: 45 });
    },
    shake() { tone(170, 0, 0.06, { vol: 0.08 }); noise(0, 0.07, { filter: 'highpass', freq: 2500, vol: 0.12 }); },
    chest() {
      tone(220, 0, 0.5, { type: 'sawtooth', vol: 0.06, to: 880 });
      noise(0, 0.5, { filter: 'bandpass', freq: 600, to: 5000, vol: 0.15 });
      [notes.C6, notes.E6, notes.G6, notes.C6 * 2].forEach((f, i) => tone(f, 0.45 + i * 0.07, 0.25, { type: 'triangle', vol: 0.08 }));
    },
    sparkle() { [notes.E6, notes.G6, notes.C6 * 2].forEach((f, i) => tone(f, i * 0.05, 0.12, { type: 'triangle', vol: 0.06 })); },
    nope() { tone(300, 0, 0.12, { type: 'square', vol: 0.06, to: 200 }); tone(200, 0.11, 0.16, { type: 'square', vol: 0.06, to: 140 }); },
    medal() { [notes.G5, notes.C6, notes.E6, notes.G6].forEach((f, i) => tone(f, i * 0.07, 0.3, { type: 'triangle', vol: 0.09 })); }
  };

  function vibrate(p) { try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} }

  window.Sound = {
    unlock: ensure,
    play(name, arg) { try { if (sfx[name]) sfx[name](arg); } catch (e) {} },
    vibrate,
    isMuted() { return muted; },
    setMuted(v) { muted = !!v; try { localStorage.setItem('ikido-muted', muted ? '1' : '0'); } catch (e) {} }
  };
})();
