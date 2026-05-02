// Generate favicon PNG/ICO set from public/favicon.svg
// Usage: node scripts/gen-favicons.mjs
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const publicDir = resolve(projectRoot, 'public');
const sourceSvg = resolve(publicDir, 'favicon.svg');

const pngTargets = [
  { size: 16, file: 'favicon-16x16.png' },
  { size: 32, file: 'favicon-32x32.png' },
  { size: 180, file: 'apple-touch-icon.png' },
  { size: 192, file: 'android-chrome-192x192.png' },
  { size: 512, file: 'android-chrome-512x512.png' },
];

const icoSizes = [16, 32, 48];

async function renderPng(svgBuffer, size) {
  // Density scaling sharpens raster output from the small viewBox.
  return sharp(svgBuffer, { density: Math.max(72, size * 8) })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function main() {
  const svgBuffer = await readFile(sourceSvg);

  // Standalone PNGs
  for (const { size, file } of pngTargets) {
    const out = resolve(publicDir, file);
    const buf = await renderPng(svgBuffer, size);
    await writeFile(out, buf);
    console.log(`wrote ${file} (${size}x${size})`);
  }

  // Multi-size ICO
  const icoBuffers = await Promise.all(icoSizes.map((size) => renderPng(svgBuffer, size)));
  const icoBuffer = await pngToIco(icoBuffers);
  const icoPath = resolve(publicDir, 'favicon.ico');
  await writeFile(icoPath, icoBuffer);
  console.log(`wrote favicon.ico (${icoSizes.join(', ')})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
