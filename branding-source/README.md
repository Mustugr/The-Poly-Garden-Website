# Branding source

Design reference only. **Nothing in this folder ships to the production site** — Next.js only serves files from `/public/`.

If you want a flower or a logo to appear on the website, copy or process the asset into `/public/`.

```
logos/
  Original brand sheets from the designer (Mystic Design's team).
  Each JPEG is a multi-variant style-guide board, not a single ready-to-use lockup.
  We rebuilt every visible mark in code — see components/Wordmark.tsx and components/Monogram.tsx.

flowers-raw/
  10 raw 6000×6000 botanical line-art PNGs.
  Inputs to scripts/process-flowers.mjs, which crops + downscales the ones we use
  into /public/flowers/ with semantic names.
  Currently used: 02, 03, 05, 06, 09. The rest are unused but kept in case
  we want to add more floral compositions later.
```

To add a new flower to the live site, see the "Common edits" section in the root `README.md`.
