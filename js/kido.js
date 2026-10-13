/* Kido, la mascota de iKidO, dibujada en SVG */
(function () {
  const INK = '#0A0F33';
  const COLORS = {
    cielo: { body: '#39C5FF', belly: '#C8F1FF', dark: '#1C8FD1' },
    rosa: { body: '#FF7FA0', belly: '#FFE0E8', dark: '#E0557A' },
    lima: { body: '#7CF05A', belly: '#E2FFD6', dark: '#4CB82F' },
    lila: { body: '#B78CFF', belly: '#EDE3FF', dark: '#8A5CE0' }
  };

  function egg(c) {
    return `
      <ellipse cx="100" cy="190" rx="50" ry="7" fill="${INK}" opacity="0.25"/>
      <g class="k-egg">
        <path d="M100 18 C142 18 168 80 168 122 C168 164 138 186 100 186 C62 186 32 164 32 122 C32 80 58 18 100 18 Z" fill="#FFF6E0" stroke="${INK}" stroke-width="5"/>
        <circle cx="70" cy="64" r="10" fill="${c.body}"/><circle cx="138" cy="150" r="13" fill="${c.body}"/>
        <circle cx="58" cy="148" r="7" fill="${c.body}"/><circle cx="124" cy="52" r="6" fill="${c.body}"/>
        <path d="M44 104 L62 94 L74 108 L90 94 L104 108 L118 94 L132 108 L146 96 L158 104" fill="none" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round"/>
        <g class="k-eyes"><circle cx="86" cy="124" r="6" fill="${INK}"/><circle cx="116" cy="124" r="6" fill="${INK}"/>
        <circle cx="88" cy="122" r="2" fill="#fff"/><circle cx="118" cy="122" r="2" fill="#fff"/></g>
      </g>`;
  }

  function svg(opts) {
    const o = opts || {};
    const mood = o.mood || 'feliz';
    const c = COLORS[o.color] || COLORS.cielo;
    const cls = 'kido kido--' + mood + (o.cls ? ' ' + o.cls : '');
    const label = o.label || 'Kido, la mascota';
    if (mood === 'huevo') {
      return `<svg class="${cls}" viewBox="0 0 200 200" role="img" aria-label="${label}">${egg(c)}</svg>`;
    }
    const party = mood === 'festejo';
    const arms = party
      ? `<g class="k-arms k-arms--up">
           <ellipse class="k-arm-l" cx="28" cy="74" rx="13" ry="23" transform="rotate(-32 28 74)" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
           <ellipse class="k-arm-r" cx="172" cy="74" rx="13" ry="23" transform="rotate(32 172 74)" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
         </g>`
      : `<g class="k-arms">
           <ellipse cx="32" cy="130" rx="13" ry="21" transform="rotate(35 32 130)" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
           <ellipse class="k-arm-wave" cx="168" cy="130" rx="13" ry="21" transform="rotate(-35 168 130)" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
         </g>`;
    let eyes = '';
    let mouth = '';
    if (mood === 'feliz') {
      eyes = `<g class="k-eyes">
        <ellipse cx="76" cy="90" rx="17" ry="20" fill="#fff" stroke="${INK}" stroke-width="4.5"/>
        <ellipse cx="124" cy="90" rx="17" ry="20" fill="#fff" stroke="${INK}" stroke-width="4.5"/>
        <circle class="k-pupil" cx="80" cy="95" r="9" fill="${INK}"/><circle class="k-pupil" cx="128" cy="95" r="9" fill="${INK}"/>
        <circle cx="84" cy="90" r="3.2" fill="#fff"/><circle cx="132" cy="90" r="3.2" fill="#fff"/></g>`;
      mouth = `<path d="M85 114 Q100 134 115 114 Z" fill="#FF4D6D" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M92 115 L95 122 L98 115 Z" fill="#fff"/>`;
    } else if (party) {
      eyes = `<path d="M60 96 Q76 74 92 96" fill="none" stroke="${INK}" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M108 96 Q124 74 140 96" fill="none" stroke="${INK}" stroke-width="6.5" stroke-linecap="round"/>`;
      mouth = `<path d="M78 110 Q100 150 122 110 Z" fill="#FF4D6D" stroke="${INK}" stroke-width="4.5" stroke-linejoin="round"/>
        <path d="M90 128 Q100 140 110 128 Q100 122 90 128 Z" fill="#FF9DB0"/>`;
    } else if (mood === 'dormido') {
      eyes = `<path d="M60 92 Q76 104 92 92" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>
        <path d="M108 92 Q124 104 140 92" fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`;
      mouth = `<ellipse cx="100" cy="120" rx="6" ry="5" fill="#FF4D6D" stroke="${INK}" stroke-width="4"/>`;
    }
    const crown = o.crown ? `<g class="k-crown"><path d="M66 40 L72 10 L88 26 L100 2 L112 26 L128 10 L134 40 Z" fill="#FFC928" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/><circle cx="100" cy="28" r="5" fill="#FF4D6D" stroke="${INK}" stroke-width="3"/></g>` : '';
    const sparkles = party ? `<g class="k-sparkles">
        <path d="M14 20 L19 33 L32 38 L19 43 L14 56 L9 43 L-4 38 L9 33 Z" fill="#FFC928" stroke="${INK}" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M186 8 L190 18 L200 22 L190 26 L186 36 L182 26 L172 22 L182 18 Z" fill="#fff" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M190 120 L193 128 L201 131 L193 134 L190 142 L187 134 L179 131 L187 128 Z" fill="#7CF05A" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/></g>` : '';
    const zzz = mood === 'dormido' ? `<g class="k-zzz"><text x="150" y="44" font-family="Lilita One, sans-serif" font-size="34" fill="#fff" stroke="${INK}" stroke-width="5" paint-order="stroke">Z</text>
        <text x="176" y="18" font-family="Lilita One, sans-serif" font-size="22" fill="#fff" stroke="${INK}" stroke-width="4" paint-order="stroke">z</text></g>` : '';

    return `<svg class="${cls}" viewBox="0 0 200 200" role="img" aria-label="${label}" style="overflow:visible">
      <ellipse class="k-shadow" cx="100" cy="190" rx="54" ry="8" fill="${INK}" opacity="0.25"/>
      <g class="k-all">
        <path d="M66 50 L56 14 L90 38 Z" fill="#FFC928" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
        <path d="M134 50 L144 14 L110 38 Z" fill="#FFC928" stroke="${INK}" stroke-width="5" stroke-linejoin="round"/>
        ${arms}
        <ellipse cx="72" cy="178" rx="20" ry="11" fill="${c.dark}" stroke="${INK}" stroke-width="5"/>
        <ellipse cx="128" cy="178" rx="20" ry="11" fill="${c.dark}" stroke="${INK}" stroke-width="5"/>
        <path d="M100 32 C152 32 176 72 176 116 C176 160 146 182 100 182 C54 182 24 160 24 116 C24 72 48 32 100 32 Z" fill="${c.body}" stroke="${INK}" stroke-width="5"/>
        <ellipse cx="100" cy="144" rx="44" ry="30" fill="${c.belly}"/>
        <circle cx="100" cy="152" r="12" fill="#FFC928" stroke="${INK}" stroke-width="3.5"/>
        <circle cx="100" cy="152" r="6" fill="none" stroke="#E59E00" stroke-width="2.5"/>
        <ellipse cx="52" cy="118" rx="10" ry="6" fill="#FF7FA0"/>
        <ellipse cx="148" cy="118" rx="10" ry="6" fill="#FF7FA0"/>
        ${eyes}${mouth}${crown}
      </g>
      ${sparkles}${zzz}
    </svg>`;
  }

  window.Kido = { svg, COLORS };
})();
