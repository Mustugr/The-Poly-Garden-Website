/**
 * Processes the raw 6000×6000 botanical PNGs in /branding-source/flowers-raw/
 * into mask-ready, semantically-named PNGs in /public/flowers/.
 *
 * The raw assets are alpha-transparent black line-art (RGB=0, alpha=density),
 * so they're already perfect mask sources — but huge. This script:
 *   1. Computes the bounding box of non-transparent pixels per file
 *   2. Crops to that box with a small margin
 *   3. Downscales so the longest edge is at most 1600px
 *   4. Writes the result with a semantic filename to /public/flowers/
 *
 * Re-run with `node scripts/process-flowers.mjs` if you add new raw assets,
 * tweak naming, or need to regenerate from a higher-resolution source.
 */

import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  ".."
);

const srcDir = path.join(root, "branding-source/flowers-raw");
const outDir = path.join(root, "public/flowers");

// Map raw filename → semantic output name. Only flowers listed here are
// processed and shipped; the rest stay in branding-source as design reference
// but are not bundled into the production site.
const ASSETS = [
  { src: "02-sweet-pea-garland.png", out: "sweet-pea-garland.png" },
  { src: "03-magnolia-spray.png", out: "magnolia-spray.png" },
  { src: "05-magnolia-pair.png", out: "magnolia-pair.png" },
  { src: "06-peonies-horizontal.png", out: "peonies-horizontal.png" },
  { src: "09-floral-branch-tall.png", out: "floral-branch-tall.png" },
];

await fs.mkdir(outDir, { recursive: true });

for (const { src, out } of ASSETS) {
  const inputPath = path.join(srcDir, src);
  const outputPath = path.join(outDir, out);

  // Find bounding box of non-transparent pixels via the alpha channel.
  const alphaBuf = await sharp(inputPath)
    .extractChannel("alpha")
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { data, info } = alphaBuf;
  const { width, height } = info;

  let minX = width;
  let minY = height;
  let maxX = -1;
  let maxY = -1;

  // Sample every 4th pixel for speed (sources are 6000×6000)
  const step = 4;
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (data[y * width + x] > 16) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) {
    console.log(`  ${src}: empty after threshold; skipping`);
    continue;
  }

  const margin = 60;
  const left = Math.max(0, minX - margin);
  const top = Math.max(0, minY - margin);
  const cropW = Math.min(width - left, maxX - left + margin * 2);
  const cropH = Math.min(height - top, maxY - top + margin * 2);

  // Downscale: keep the longest edge at 1600px so the asset stays crisp at any
  // typical display size while not bloating the production bundle.
  const maxDim = Math.max(cropW, cropH);
  const scale = maxDim > 1600 ? 1600 / maxDim : 1;
  const finalW = Math.round(cropW * scale);
  const finalH = Math.round(cropH * scale);

  await sharp(inputPath)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(finalW, finalH)
    .png({ compressionLevel: 9, palette: false })
    .toFile(outputPath);

  console.log(`  ${src}  →  /public/flowers/${out}  (${finalW}×${finalH})`);
}

console.log("\nDone. Update components/FlowerArt.tsx aspect map if any size changed.");
