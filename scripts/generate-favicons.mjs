/**
 * Renders the PNG icons in public/ from public/favicon.svg.
 *
 *   npm run favicons            writes into public/
 *   npm run favicons -- <dir>   writes into <dir> instead, to preview first
 *
 * Uses sharp, which the site already depends on for images. This replaces
 * svgexport, which is unmaintained (last release 2022), pulled in puppeteer 3
 * with a high-severity advisory, and rendered the old logo's white book pages
 * solid black, so every PNG icon showed a black shape instead of the logo.
 */
import { mkdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, "public", "favicon.svg");
const outDir = resolve(process.argv[2] ?? join(root, "public"));

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const white = { r: 255, g: 255, b: 255, alpha: 1 };

const icons = [
  // Tab icons: as large as the square allows, so 16px stays legible.
  { file: "favicon-16x16.png", size: 16, padding: 0, background: transparent },
  { file: "favicon-32x32.png", size: 32, padding: 0, background: transparent },
  // iOS fills transparent areas of a home-screen icon with black, so this
  // one gets a solid background and some breathing room.
  { file: "apple-touch-icon.png", size: 180, padding: 0.12, background: white },
  // Android and installed-app icons (site.webmanifest).
  { file: "android-chrome-192x192.png", size: 192, padding: 0.08, background: transparent },
  { file: "android-chrome-512x512.png", size: 512, padding: 0.08, background: transparent },
];

await mkdir(outDir, { recursive: true });

// favicon.svg has empty margin around the artwork. Trim it once, so small
// icons spend their few pixels on the logo rather than on blank space.
const artwork = await sharp(source, { density: 300 }).trim().png().toBuffer();

for (const { file, size, padding, background } of icons) {
  const inner = Math.round(size * (1 - 2 * padding));
  const logo = await sharp(artwork)
    .resize(inner, inner, { fit: "contain", background: transparent })
    .png()
    .toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: logo, gravity: "center" }])
    .png({ compressionLevel: 9 })
    .toFile(join(outDir, file));
  console.log(`wrote ${join(outDir, file)} (${size}x${size})`);
}
