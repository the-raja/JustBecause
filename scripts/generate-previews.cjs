const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const templates = [
  { id: 'universe', title: 'Our Little Universe', category: 'Love', tag: 'Stars & Constellations', bg1: '#0f172a', bg2: '#311042', accent: '#f43f5e' },
  { id: 'puzzle', title: 'Love Puzzle', category: 'Love', tag: 'Interactive Couple Game', bg1: '#fff1f2', bg2: '#fed7aa', accent: '#e11d48' },
  { id: '50-reasons', title: '50 Reasons I Love You', category: 'Love', tag: 'Digital Flipbook & Letters', bg1: '#fdf2f8', bg2: '#fecdd3', accent: '#be123c' },
  { id: 'love-memory-photo', title: 'Our Love Memories', category: 'Love', tag: 'Photo Timeline & Gallery', bg1: '#fff7ed', bg2: '#ffe4e6', accent: '#e11d48' },
  { id: 'heartbeat', title: 'Heartbeat ❤️', category: 'Love', tag: 'Pulsing Rhythm & Memories', bg1: '#1f1319', bg2: '#881337', accent: '#fb7185' },
  { id: 'birthday', title: 'Birthday Surprise', category: 'Birthday', tag: 'Celebration, Cake & Balloons', bg1: '#fef3c7', bg2: '#fce7f3', accent: '#d97706' },
  { id: 'love-game', title: 'The Love Game', category: 'Love', tag: 'Couples Quiz & Bonding', bg1: '#4a044e', bg2: '#be123c', accent: '#f472b6' },
];

async function run() {
  const outDir = path.join(process.cwd(), 'public', 'templates');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const t of templates) {
    const isDark = t.bg1.startsWith('#0') || t.bg1.startsWith('#1') || t.bg1.startsWith('#4');
    const textColor = isDark ? '#ffffff' : '#1c1917';
    const subColor = isDark ? '#fbcfe8' : '#701a75';
    const cardBg = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.85)';
    const cardBorder = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(244,63,94,0.25)';

    const safeTitle = t.title.replace(/&/g, '&amp;');
    const safeTag = t.tag.replace(/&/g, '&amp;');

    const svg = `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.bg1}" />
          <stop offset="100%" stop-color="${t.bg2}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.35" />
          <stop offset="100%" stop-color="${t.accent}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="800" height="500" fill="url(#grad)" />
      <circle cx="400" cy="220" r="260" fill="url(#glow)" />

      <!-- Decorative frame -->
      <rect x="30" y="30" width="740" height="440" rx="24" fill="none" stroke="${cardBorder}" stroke-width="2" />

      <!-- Center Card -->
      <rect x="110" y="90" width="580" height="320" rx="20" fill="${cardBg}" stroke="${cardBorder}" stroke-width="1.5" />

      <!-- Brand watermark top -->
      <text x="400" y="150" font-family="sans-serif" font-size="14" font-weight="800" letter-spacing="3" fill="${t.accent}" text-anchor="middle">JUST BECAUSE</text>

      <!-- Template Title -->
      <text x="400" y="215" font-family="sans-serif" font-size="32" font-weight="900" fill="${textColor}" text-anchor="middle">${safeTitle}</text>

      <!-- Tag / Subtitle -->
      <text x="400" y="255" font-family="sans-serif" font-size="16" font-weight="600" fill="${subColor}" text-anchor="middle">${safeTag}</text>

      <!-- Live badge -->
      <g transform="translate(290, 310)">
        <rect width="220" height="40" rx="20" fill="${t.accent}" />
        <circle cx="24" cy="20" r="5" fill="#ffffff" />
        <text x="115" y="25" font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle">LIVE DEMO READY ↗</text>
      </g>

      <!-- Bottom instruction -->
      <text x="400" y="385" font-family="sans-serif" font-size="12" font-weight="500" fill="${subColor}" opacity="0.8" text-anchor="middle">Click VIEW LIVE to test interactive experience</text>
    </svg>
    `;

    const filePath = path.join(outDir, `${t.id}.webp`);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(filePath);
    console.log('Generated:', filePath);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
