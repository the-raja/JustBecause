const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const templates = [
  {
    "id": "universe",
    "title": "Our Little Universe",
    "category": "Love",
    "tag": "Stars & Constellations",
    "bg1": "#0f172a",
    "bg2": "#311042",
    "accent": "#f43f5e"
  },
  {
    "id": "puzzle",
    "title": "Love Puzzle",
    "category": "Love",
    "tag": "Interactive Couple Game",
    "bg1": "#fff1f2",
    "bg2": "#fed7aa",
    "accent": "#e11d48"
  },
  {
    "id": "50-reasons",
    "title": "50 Reasons I Love You",
    "category": "Love",
    "tag": "Digital Flipbook & Letters",
    "bg1": "#fdf2f8",
    "bg2": "#fecdd3",
    "accent": "#be123c"
  },
  {
    "id": "love-memory-photo",
    "title": "Our Love Memories",
    "category": "Love",
    "tag": "Photo Timeline & Gallery",
    "bg1": "#fff7ed",
    "bg2": "#ffe4e6",
    "accent": "#e11d48"
  },
  {
    "id": "heartbeat",
    "title": "Heartbeat ❤️",
    "category": "Love",
    "tag": "Pulsing Rhythm & Memories",
    "bg1": "#1f1319",
    "bg2": "#881337",
    "accent": "#fb7185"
  },
  {
    "id": "birthday",
    "title": "Birthday Surprise",
    "category": "Birthday",
    "tag": "Celebration, Cake & Balloons",
    "bg1": "#fef3c7",
    "bg2": "#fce7f3",
    "accent": "#d97706"
  },
  {
    "id": "love-game",
    "title": "The Love Game",
    "category": "Love",
    "tag": "Couples Quiz & Bonding",
    "bg1": "#4a044e",
    "bg2": "#be123c",
    "accent": "#f472b6"
  },
  {
    "id": "3d-flower-garden",
    "title": "3D Flower Garden",
    "category": "Flowers",
    "tag": "3D Free Fly Botanical Garden",
    "bg1": "#064e3b",
    "bg2": "#1e1b4b",
    "accent": "#10b981"
  },
  {
    "id": "3d-love-book",
    "title": "3D Love Book",
    "category": "Love",
    "tag": "Handcrafted 3D Keepsake Book",
    "bg1": "#4a044e",
    "bg2": "#831843",
    "accent": "#f472b6"
  },
  {
    "id": "a-surprise-for-you",
    "title": "A Surprise for You",
    "category": "Love",
    "tag": "Romantic Surprise & Heart Shower",
    "bg1": "#fff1f2",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "ask-me-out",
    "title": "Ask Me Out",
    "category": "Proposal",
    "tag": "Playful Confession & Date Picker",
    "bg1": "#fff1f2",
    "bg2": "#fdf2f8",
    "accent": "#e11d48"
  },
  {
    "id": "birthday-surprise-v2",
    "title": "Birthday Surprise V2",
    "category": "Birthday",
    "tag": "Secret Love Note & Balloons",
    "bg1": "#fef3c7",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "friendship-day-surprise",
    "title": "Friendship Day Surprise",
    "category": "Friendship",
    "tag": "Best Friend Tribute & Story",
    "bg1": "#fff7ed",
    "bg2": "#fef3c7",
    "accent": "#ea580c"
  },
  {
    "id": "happy-birthday-v8",
    "title": "Happy Birthday V8",
    "category": "Birthday",
    "tag": "Gift Unwrapping & Party Confetti",
    "bg1": "#fef3c7",
    "bg2": "#fed7aa",
    "accent": "#d97706"
  },
  {
    "id": "pink-typography-love",
    "title": "Pink Typography Love",
    "category": "Love",
    "tag": "Aesthetic Kinetic Typography",
    "bg1": "#fdf2f8",
    "bg2": "#fbcfe8",
    "accent": "#db2777"
  },
  {
    "id": "unclickable-no-v3",
    "title": "Unclickable No V3",
    "category": "Proposal",
    "tag": "Valentine Runaway No & Audio",
    "bg1": "#fff1f2",
    "bg2": "#ffe4e6",
    "accent": "#e11d48"
  },
  {
    "id": "virtual-hug",
    "title": "Virtual Hug",
    "category": "Love",
    "tag": "Interactive Hug Meter & Receipt",
    "bg1": "#fff7ed",
    "bg2": "#fce7f3",
    "accent": "#f43f5e"
  },
  {
    "id": "365-days-of-love",
    "title": "365 Days of Love",
    "category": "Anniversary",
    "tag": "Cupid Arrow Game & 1 Year Letter",
    "bg1": "#fef3c7",
    "bg2": "#fce7f3",
    "accent": "#d97706"
  },
  {
    "id": "c-birthday-surprise",
    "title": "Birthday Surprise",
    "category": "Birthday",
    "tag": "Heartfelt Wishes & BGM Music",
    "bg1": "#fef3c7",
    "bg2": "#fed7aa",
    "accent": "#ea580c"
  },
  {
    "id": "birthday-candle",
    "title": "Birthday Candle",
    "category": "Birthday",
    "tag": "Blow Candle Wish & Love Letter",
    "bg1": "#1e1b4b",
    "bg2": "#431407",
    "accent": "#f59e0b"
  },
  {
    "id": "c-birthday-surprise-v8",
    "title": "Birthday Surprise V8",
    "category": "Birthday",
    "tag": "Envelope Modal & Romantic Quotes",
    "bg1": "#fdf2f8",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "3d-garden",
    "title": "3D Garden",
    "category": "Flowers",
    "tag": "Procedural 3D Blooming Rose",
    "bg1": "#0f172a",
    "bg2": "#4c0519",
    "accent": "#f43f5e"
  },
  {
    "id": "garden-of-flowers",
    "title": "Garden of Flowers",
    "category": "Flowers",
    "tag": "Interactive Tap-to-Plant Canvas",
    "bg1": "#f0fdf4",
    "bg2": "#fce7f3",
    "accent": "#059669"
  },
  {
    "id": "garden-of-love",
    "title": "Garden of Love",
    "category": "Love",
    "tag": "Blossoming Garden & Sweet Notes",
    "bg1": "#fdf2f8",
    "bg2": "#dcfce7",
    "accent": "#e11d48"
  },
  {
    "id": "hbd-10",
    "title": "HBD 10",
    "category": "Birthday",
    "tag": "Vibrant Balloons & Celebration Music",
    "bg1": "#fef3c7",
    "bg2": "#f0fdf4",
    "accent": "#0284c7"
  },
  {
    "id": "heart-animation-v3",
    "title": "Heart Animation V3",
    "category": "Love",
    "tag": "Neon Mathematical Particle Heart",
    "bg1": "#09090b",
    "bg2": "#270a1f",
    "accent": "#f43f5e"
  },
  {
    "id": "interactive-flowers",
    "title": "Interactive Flowers",
    "category": "Flowers",
    "tag": "Color-Changing Blooming Bouquet",
    "bg1": "#f0fdf4",
    "bg2": "#fed7aa",
    "accent": "#10b981"
  },
  {
    "id": "unclickable-no",
    "title": "Unclickable No",
    "category": "Proposal",
    "tag": "Cheeky Teleporting No Confession",
    "bg1": "#fff1f2",
    "bg2": "#fdf2f8",
    "accent": "#e11d48"
  },
  {
    "id": "no-way",
    "title": "No Way",
    "category": "Proposal",
    "tag": "Night Sky Heart Fireworks & Prank",
    "bg1": "#0f172a",
    "bg2": "#311042",
    "accent": "#ec4899"
  },
  {
    "id": "pink-cake",
    "title": "Pink Cake",
    "category": "Birthday",
    "tag": "Pastel Cake & Candle Animation",
    "bg1": "#fdf2f8",
    "bg2": "#fbcfe8",
    "accent": "#db2777"
  },
  {
    "id": "red-bloom",
    "title": "Red Bloom",
    "category": "Flowers",
    "tag": "Glowing Roses, Music & Love Letter",
    "bg1": "#1a050d",
    "bg2": "#4c0519",
    "accent": "#ef4444"
  },
  {
    "id": "unclickable-no-v1",
    "title": "Unclickable No V1",
    "category": "Proposal",
    "tag": "Dancing Runaway Button & Sound",
    "bg1": "#fff1f2",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "unclickable-no-v2",
    "title": "Unclickable No V2",
    "category": "Proposal",
    "tag": "Teasing Dodge Dialogues & Confetti",
    "bg1": "#fff1f2",
    "bg2": "#fed7aa",
    "accent": "#e11d48"
  },
  {
    "id": "words-to-heart",
    "title": "Words to Heart",
    "category": "Love",
    "tag": "Charge Love Reactor to 100%",
    "bg1": "#030712",
    "bg2": "#1e1b4b",
    "accent": "#a855f7"
  },
  {
    "id": "happy-birthday-v4",
    "title": "Happy Birthday V4",
    "category": "Birthday",
    "tag": "Interactive Unwrapping Gift Modals",
    "bg1": "#fef3c7",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "100-reasons-i-love-you",
    "title": "100 Reasons I Love You",
    "category": "Love",
    "tag": "Passcode Lock & 100 Card Flips",
    "bg1": "#1f1319",
    "bg2": "#4a044e",
    "accent": "#f472b6"
  },
  {
    "id": "a-bouquet-for-you",
    "title": "A Bouquet for You",
    "category": "Flowers",
    "tag": "Illustrated Bouquet & Love Letter",
    "bg1": "#fdf2f8",
    "bg2": "#fed7aa",
    "accent": "#e11d48"
  },
  {
    "id": "flower-animation-v1",
    "title": "Flower Animation V1",
    "category": "Flowers",
    "tag": "Artistic Sprouting Floral Canvas",
    "bg1": "#052e16",
    "bg2": "#14532d",
    "accent": "#4ade80"
  },
  {
    "id": "heart-animation-v1",
    "title": "Heart Animation V1",
    "category": "Love",
    "tag": "Dynamic Glowing Heart Particles",
    "bg1": "#09090b",
    "bg2": "#18181b",
    "accent": "#f43f5e"
  },
  {
    "id": "i-love-you",
    "title": "I Love You",
    "category": "Love",
    "tag": "Playful Interactive Confession Cards",
    "bg1": "#fff1f2",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "i-love-you-beat",
    "title": "I Love You Beat",
    "category": "Love",
    "tag": "Pulsing Heartbeat Rhythm & Note",
    "bg1": "#1c1917",
    "bg2": "#4c0519",
    "accent": "#fb7185"
  },
  {
    "id": "a-letter-for-you",
    "title": "A Letter for You",
    "category": "Love",
    "tag": "Vintage Envelope & Wax Seal Letter",
    "bg1": "#451a03",
    "bg2": "#78350f",
    "accent": "#fbbf24"
  },
  {
    "id": "neon-love-animation",
    "title": "Neon Love Animation",
    "category": "Love",
    "tag": "Luminous Neon Light Romance",
    "bg1": "#020617",
    "bg2": "#1e1b4b",
    "accent": "#38bdf8"
  },
  {
    "id": "the-question",
    "title": "The Question",
    "category": "Proposal",
    "tag": "Catch 3 Sparks Proposal Game",
    "bg1": "#0f172a",
    "bg2": "#3b0764",
    "accent": "#ec4899"
  },
  {
    "id": "rotating-photo-memories",
    "title": "Rotating Photo Memories",
    "category": "Memories",
    "tag": "3D Orbiting Memory Frame Carousel",
    "bg1": "#1e1b4b",
    "bg2": "#4c0519",
    "accent": "#f43f5e"
  },
  {
    "id": "a-sorry-for-you",
    "title": "A Sorry for You",
    "category": "Apology",
    "tag": "Gentle Sincere Apology & Touch",
    "bg1": "#f8fafc",
    "bg2": "#ede9fe",
    "accent": "#8b5cf6"
  },
  {
    "id": "a-thank-you",
    "title": "A Thank You",
    "category": "Appreciation",
    "tag": "Sequential Gratitude Animation",
    "bg1": "#fff7ed",
    "bg2": "#fef3c7",
    "accent": "#f59e0b"
  },
  {
    "id": "timer-tree",
    "title": "Timer Tree",
    "category": "Interactive",
    "tag": "Growing Heart Tree & Live Counter",
    "bg1": "#042f2e",
    "bg2": "#134e4a",
    "accent": "#2dd4bf"
  },
  {
    "id": "unclickable-no-v5",
    "title": "Unclickable No V5",
    "category": "Proposal",
    "tag": "Runaway No & Official Certificate",
    "bg1": "#fff1f2",
    "bg2": "#fed7aa",
    "accent": "#e11d48"
  },
  {
    "id": "unclickable-no-v6",
    "title": "Unclickable No V6",
    "category": "Proposal",
    "tag": "Bubu Dodging No & Love Victory",
    "bg1": "#fff1f2",
    "bg2": "#fce7f3",
    "accent": "#e11d48"
  },
  {
    "id": "vanilla-and-chocolate",
    "title": "Vanilla and Chocolate",
    "category": "Love",
    "tag": "Two Souls in 7 Billion Universe",
    "bg1": "#0f172a",
    "bg2": "#311042",
    "accent": "#ec4899"
  }
];

async function run() {
  const outDir = path.join(process.cwd(), 'public', 'templates');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const t of templates) {
    const isDark = t.bg1.startsWith('#0') || t.bg1.startsWith('#1') || t.bg1.startsWith('#2') || t.bg1.startsWith('#3') || t.bg1.startsWith('#4');
    const textColor = isDark ? '#ffffff' : '#1c1917';
    const subColor = isDark ? '#fbcfe8' : '#701a75';
    const cardBg = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.88)';
    const cardBorder = isDark ? 'rgba(255,255,255,0.22)' : 'rgba(244,63,94,0.25)';

    const safeTitle = t.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeTag = t.tag.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const svg = `
    <svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad_${t.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t.bg1}" />
          <stop offset="100%" stop-color="${t.bg2}" />
        </linearGradient>
        <radialGradient id="glow_${t.id}" cx="50%" cy="40%" r="45%">
          <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.35" />
          <stop offset="100%" stop-color="${t.accent}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="800" height="500" fill="url(#grad_${t.id})" />
      <circle cx="400" cy="220" r="260" fill="url(#glow_${t.id})" />

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
    console.log('Generated:', `${t.id}.webp`);
  }
  console.log('Done! Generated all', templates.length, 'previews.');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
