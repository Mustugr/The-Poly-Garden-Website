# The Poly Garden Sugar — Website

Custom-cake & dessert site for **Ivelisse Schuwerer** (NY / NJ).
Stack: **Next.js 16** (App Router) · **Tailwind v4** · **Supabase** · **Resend** · deployed on **Vercel**.

> If you're coming back to this in two years and forgot everything, this README plus `PLAN.md` are the orientation. Read both.

---

## Run it locally

```bash
npm install
cp .env.example .env.local        # fill in keys (optional for first run)
npm run dev                       # http://localhost:3000
```

Without env vars the order form logs warnings and skips DB writes & emails — useful for design iteration.

```bash
npm run build && npm start        # production build
```

---

## Folder map

```
app/                          Next.js App Router — one folder per route
  layout.tsx                  Fonts + Navbar + Footer + LanguageProvider wrapper
  globals.css                 Tailwind v4 @theme tokens (palette, fonts, helpers)
  page.tsx                    Home (hero / story / featured cakes / testimonials / dark CTA)
  about/page.tsx              About Ivelisse + values
  faq/page.tsx                Accordion FAQ
  contact/page.tsx            Contact info + Instagram + service area
  gallery/page.tsx            Filterable cake grid (uniform 4:5 portrait tiles)
  order/page.tsx              Paper-style framed custom order form
  not-found.tsx               Branded 404 page
  api/order/route.ts          POST endpoint — validates, saves to Supabase, sends emails

components/
  Navbar.tsx                  Sticky nav, EN/ES toggle, mobile menu, PGS monogram
  Footer.tsx                  Wordmark + PG monogram + links + contact, dark
  LanguageProvider.tsx        Context + localStorage + browser locale auto-detect
  LandingAnimation.tsx        ~2-second cake-build splash on home page
  Wordmark.tsx                "THE / POLY GARDEN / SUGAR" with gold rules — HTML/CSS, 5 sizes
  Monogram.tsx                Interlocked PGS / PG SVG monogram
  FlowerArt.tsx               Renders /public/flowers/*.png as a recolorable CSS mask
  FloralSprig.tsx             Tiny inline SVG divider (leaf · cosmos · leaf)
  IconInstagram.tsx           Custom IG glyph (lucide v1 lacks it)
  OrderForm.tsx               react-hook-form + zod for the /order page

lib/
  i18n.ts                     EN + ES translations
  cakes.ts                    Gallery items (12 stock photos — replace with real shoots)
  supabase.ts                 Supabase client + types
  resend.ts                   Transactional email templates

public/
  flowers/                    Production-bundled flower mask PNGs (semantic names)

branding-source/              Design reference — NOT bundled into the production site
  logos/                      Original brand sheets from the designer (8 multi-variant boards)
  flowers-raw/                Raw 6000×6000 floral PNGs (input to scripts/process-flowers.mjs)

scripts/
  process-flowers.mjs         Re-build /public/flowers/ from /branding-source/flowers-raw/

supabase/
  schema.sql                  `orders` table + RLS policies

PLAN.md                       Phase tracker: what's done, what's next, decisions still pending
DESIGN_PROMPT.md              Brand brief — palette, typography, voice
.env.example                  Copy to .env.local and fill in keys
```

---

## Brand-mark system (high level)

Every visible brand mark is **rendered in code** — no JPEGs ship with the live site, so everything stays crisp at any zoom and adapts to cream or noir surfaces.

| Mark | Component | Notes |
|---|---|---|
| Wordmark "THE / POLY GARDEN / SUGAR" | `Wordmark` | HTML + CSS flex, real text rendering. Gold rules are flex children — they can never cut through the text. |
| PGS / PG monogram | `Monogram` | SVG — three (or two) overlapping serif glyphs in Cormorant Garamond. |
| Floral artwork | `FlowerArt` | Loads a black-line PNG from `/public/flowers/` as a CSS `mask-image`, painted by `tone` (gold, cream, ink, etc.). Same asset works on cream and on noir. |
| Inline divider | `FloralSprig` | Small SVG: leaf · cosmos · leaf · gold rules. |

**Available flowers** (used as `<FlowerArt name="…" />`):

- `sweet-pea-garland` (wide horizontal — used in the dark footer seam)
- `magnolia-spray` (small magnolias on a horizontal branch — process / values sections)
- `magnolia-pair` (two large magnolias diagonal — hero accent)
- `peonies-horizontal` (lush peonies — main piece in the dark CTA banner)
- `floral-branch-tall` (vertical floral branch — corner accents on every page)

To add a new flower: drop the raw PNG in `branding-source/flowers-raw/`, add an entry to `ASSETS` in `scripts/process-flowers.mjs`, run the script, then add the new name to the `FlowerName` union and `ASPECT` map in `components/FlowerArt.tsx`.

---

## Common edits

```bash
# Add a new page
# 1. Create app/<name>/page.tsx
# 2. Add nav link in components/Navbar.tsx → links array
# 3. Add translations in lib/i18n.ts under nav.<name>

# Re-process flower assets (after adding raw PNGs or tweaking the script)
node scripts/process-flowers.mjs

# Replace stock cake photos
# Edit lib/cakes.ts — each entry has src, alt, title{en,es}, description{en,es}.
# Eventually upload originals to Supabase Storage and update src URLs +
# next.config.ts → images.remotePatterns to allow the storage hostname.
```

---

## Status

See [`PLAN.md`](./PLAN.md) for the phase tracker (MVP → Phase 2 owner dashboard → Phase 3 growth) and the pre-launch checklist (domain, Supabase, Resend, real cake photos).
