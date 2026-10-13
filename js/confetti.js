/* Confeti liviano en canvas */
(function () {
  const COLORS = ['#FFC928', '#FF4D6D', '#7CF05A', '#39C5FF', '#FFFFFF', '#B78CFF'];
  function burst(container, opts) {
    const o = opts || {};
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = container.getBoundingClientRect();
    const cv = document.createElement('canvas');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = rect.width * dpr; cv.height = rect.height * dpr;
    cv.className = 'confetti';
    container.appendChild(cv);
    const ctx = cv.getContext('2d');
    ctx.scale(dpr, dpr);
    const ox = o.x == null ? rect.width / 2 : o.x;
    const oy = o.y == null ? rect.height * 0.4 : o.y;
    const n = o.count || 90;
    const parts = [];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 4 + Math.random() * 9;
      parts.push({
        x: ox, y: oy,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 6,
        w: 6 + Math.random() * 7, h: 10 + Math.random() * 10,
        r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
        c: COLORS[i % COLORS.length], round: Math.random() < 0.3
      });
    }
    const t0 = performance.now();
    function frame(t) {
      const el = t - t0;
      ctx.clearRect(0, 0, rect.width, rect.height);
      parts.forEach(p => {
        p.vy += 0.32; p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, 1 - el / 2600);
        ctx.fillStyle = p.c; ctx.strokeStyle = '#0A0F33'; ctx.lineWidth = 2;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
        else { ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h); }
        ctx.restore();
      });
      if (el < 2700) requestAnimationFrame(frame); else cv.remove();
    }
    requestAnimationFrame(frame);
  }
  window.Confetti = { burst };
})();
