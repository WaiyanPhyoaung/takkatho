Raster favicons are generated from public/favicon.svg.

After changing favicon.svg, run:
  npm run favicons

That writes favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png,
android-chrome-192x192.png and android-chrome-512x512.png into public/.
To preview first, pass a folder: npm run favicons -- /tmp/icons
The script lives in scripts/generate-favicons.mjs and uses sharp.
