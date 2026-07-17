// Generates the placeholder art photography used across the site.
//
// These are abstract, grayscale, film-grain images composed from layered
// gradients and softly blurred organic forms — cohesive "gallery print" look,
// bundled straight into public/images so the site renders with zero runtime
// dependency on any external photo host (works on Vercel and fully offline).
//
// Regenerate with:  npm i -D sharp && node scripts/generate-images.mjs
// Swap any file in public/images for a real photo of the same name to go live.

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

// Deterministic PRNG so re-runs are byte-stable.
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Tonal presets — each reads as a different lighting mood.
const TONES = {
  dark: { bg: ["#070707", "#161616"], light: "#d6d6d6", forms: 3, vignette: 0.9, contrast: 1.28, brightness: 0.98 },
  mid: { bg: ["#141414", "#2b2b2b"], light: "#ececec", forms: 3, vignette: 0.72, contrast: 1.18, brightness: 1.02 },
  high: { bg: ["#39393b", "#dcdcda"], light: "#ffffff", forms: 2, vignette: 0.5, contrast: 1.1, brightness: 1.06 },
};

function svg(w, h, tone, rnd) {
  const t = TONES[tone];
  const ang = 40 + rnd() * 120;
  const forms = [];
  for (let i = 0; i < t.forms; i++) {
    const cx = (0.2 + rnd() * 0.6) * w;
    const cy = (0.15 + rnd() * 0.6) * h;
    const r = (0.35 + rnd() * 0.5) * Math.min(w, h);
    const op = 0.45 + rnd() * 0.4;
    forms.push({ id: `f${i}`, cx, cy, r, op });
  }
  const stops = forms
    .map(
      (f) =>
        `<radialGradient id="${f.id}" cx="${f.cx}" cy="${f.cy}" r="${f.r}" gradientUnits="userSpaceOnUse">
           <stop offset="0%" stop-color="${t.light}" stop-opacity="${f.op}"/>
           <stop offset="45%" stop-color="${t.light}" stop-opacity="${f.op * 0.35}"/>
           <stop offset="100%" stop-color="${t.light}" stop-opacity="0"/>
         </radialGradient>`
    )
    .join("");
  const ellipses = forms
    .map((f) => {
      const rx = f.r * (0.7 + rnd() * 0.6);
      const ry = f.r * (0.7 + rnd() * 0.6);
      const rot = rnd() * 180;
      return `<ellipse cx="${f.cx}" cy="${f.cy}" rx="${rx}" ry="${ry}" fill="url(#${f.id})" transform="rotate(${rot} ${f.cx} ${f.cy})"/>`;
    })
    .join("");
  return Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <defs>
        <linearGradient id="bg" gradientTransform="rotate(${ang})">
          <stop offset="0%" stop-color="${t.bg[0]}"/>
          <stop offset="100%" stop-color="${t.bg[1]}"/>
        </linearGradient>
        <radialGradient id="vig" cx="50%" cy="42%" r="75%">
          <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="${t.vignette}"/>
        </radialGradient>
        ${stops}
      </defs>
      <rect width="${w}" height="${h}" fill="url(#bg)"/>
      ${ellipses}
      <rect width="${w}" height="${h}" fill="url(#vig)"/>
    </svg>`
  );
}

async function make(name, w, h, tone, seed) {
  const rnd = mulberry32(seed);
  const t = TONES[tone];
  const base = await sharp(svg(w, h, tone, rnd)).png().toBuffer();

  // Organic low-frequency tonal cloud: tiny noise field upscaled smoothly.
  const cloud = await sharp({
    create: { width: Math.max(8, Math.round(w / 44)), height: Math.max(8, Math.round(h / 44)), channels: 3, noise: { type: "gaussian", mean: 128, sigma: 60 } },
  })
    .resize(w, h, { kernel: "cubic" })
    .blur(Math.max(2, Math.min(w, h) / 90))
    .grayscale()
    .png()
    .toBuffer();

  // Fine film grain.
  const grain = await sharp({
    create: { width: w, height: h, channels: 3, noise: { type: "gaussian", mean: 128, sigma: 12 } },
  })
    .grayscale()
    .png()
    .toBuffer();

  await sharp(base)
    .blur(Math.max(1.2, Math.min(w, h) / 70)) // melt the forms into photographic light
    .composite([
      { input: cloud, blend: "soft-light" },
      { input: grain, blend: "overlay" },
    ])
    .grayscale()
    .linear(t.contrast, -(128 * t.contrast) + 128) // contrast around mid-grey
    .modulate({ brightness: t.brightness })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(join(OUT, name));
  return name;
}

const JOBS = [
  ["hero.jpg", 1920, 1180, "dark", 1010],
  ["portrait.jpg", 1200, 1500, "mid", 2020],
  ["og.jpg", 1200, 630, "dark", 3030],
  ["work-01.jpg", 1200, 1500, "dark", 111],
  ["work-02.jpg", 1500, 1000, "mid", 222],
  ["work-03.jpg", 1200, 1200, "high", 333],
  ["work-04.jpg", 1100, 1650, "dark", 444],
  ["work-05.jpg", 1500, 1000, "mid", 555],
  ["work-06.jpg", 1200, 1500, "high", 666],
  ["work-07.jpg", 1600, 1000, "dark", 777],
  ["work-08.jpg", 1200, 1500, "mid", 888],
  ["work-09.jpg", 1200, 1200, "dark", 999],
  ["series-01.jpg", 1500, 1050, "dark", 12001],
  ["series-02.jpg", 1500, 1050, "mid", 12002],
  ["series-03.jpg", 1500, 1050, "high", 12003],
];

await mkdir(OUT, { recursive: true });
const done = await Promise.all(JOBS.map(([n, w, h, tone, seed]) => make(n, w, h, tone, seed)));
console.log("generated", done.length, "images →", OUT);
console.log(done.join(", "));
