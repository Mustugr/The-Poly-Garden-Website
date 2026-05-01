# The Poly Garden Sugar — Project Plan

> Custom cake & dessert website for **Ivelisse Schuwerer** · NY & NJ
> Stack: **Next.js 16 + Tailwind v4 + Supabase + Resend** on **Vercel**

Last updated: **2026-05-01**

---

## Status overview

| Area | Status |
|---|---|
| Codebase scaffold | ✅ Done |
| Brand system & design tokens | ✅ Done |
| Public pages (Home / Gallery / Order / About / FAQ / Contact) | ✅ Done |
| Custom order form + API route | ✅ Done |
| Bilingual EN / ES | ✅ Done |
| Real brand logos integrated | ✅ Done |
| Build passes (`npm run build`) | ✅ Clean |
| Live deployment to Vercel | ⏳ Pending |
| Domain `thepolygardensugar.com` | ⏳ Not yet purchased |
| Supabase project connected | ⏳ Pending |
| Resend account connected | ⏳ Pending |
| Real cake photos (replacing stock) | ⏳ Pending |
| Owner dashboard (Phase 2) | 📋 Not started |
| Stripe / SEO / blog (Phase 3) | 📋 Not started |

Legend: ✅ done · ⏳ next up · 📋 planned · ❌ blocked

---

## ✅ Phase 1 — MVP (DONE)

The marketing site + order intake — what the public sees on day one.

### Pages built
- [x] **Home** — hero with primary brand logo, story split, featured pieces (3-up), 4-step process, testimonials, dark CTA banner with brand showcase
- [x] **Gallery** — filterable masonry (All / Cakes / Cupcakes / Desserts / Floral)
- [x] **Order** — digital version of the paper custom order form (with floral artwork header), Zod validation, success state
- [x] **About** — Ivelisse's story + values
- [x] **FAQ** — 8-question accordion
- [x] **Contact** — methods + service area + Instagram

### Backend / order pipeline
- [x] `POST /api/order` route validates with Zod
- [x] Inserts into Supabase `orders` table (status pipeline: `new → quoted → confirmed → baking → ready → delivered`)
- [x] Sends Ivelisse a notification email with all order details (reply-to is the client)
- [x] Sends the client a confirmation email signed by Ivelisse
- [x] Schema in [`supabase/schema.sql`](supabase/schema.sql)

### Brand system
- [x] Cream/gold + ink/noir palette as Tailwind v4 `@theme` tokens
- [x] Cormorant Garamond (display) + Inter (body) + Pinyon Script (accent)
- [x] Real logo images in `public/branding/` (8 files, renamed from WhatsApp uploads)
- [x] Logo placements:
  - Hero → `logo-primary-cream.jpeg`
  - Dark CTA banner → `logo-dark-pair.jpeg`
  - Footer → `logo-dark-quad.jpeg` (cropped)
  - Order page → `logo-order-form.jpeg` (floral header)
- [x] PGS / PG SVG monogram for navbar (compact use)
- [x] Floral SVG ornaments (`FloralCorner`, `FloralSprig`)
- [x] Custom Instagram glyph (lucide v1 lacks it)

### Bilingual
- [x] EN / ES toggle in navbar (top-right)
- [x] Auto-detect Spanish browsers on first visit
- [x] Persist choice in `localStorage`
- [x] Full translation dictionary in `lib/i18n.ts`

### Quality
- [x] Mobile responsive (breakpoint fix landed for navbar CTA)
- [x] TypeScript strict mode passes
- [x] Production build green
- [x] All 6 routes return 200

---

## ⏳ Pre-launch checklist (DO THESE BEFORE GOING LIVE)

### Domain
- [ ] Buy `thepolygardensugar.com` (Namecheap / Cloudflare / Vercel domains)
- [ ] Add domain in **Vercel → Settings → Domains**

### Supabase setup
- [ ] Create project at <https://supabase.com>
- [ ] Run [`supabase/schema.sql`](supabase/schema.sql) in **SQL Editor**
- [ ] Copy 3 keys into `.env.local`:
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Test: submit a test order, verify row appears in `orders` table

### Resend setup
- [ ] Create account at <https://resend.com>
- [ ] Verify domain `thepolygardensugar.com` (DNS records via Vercel)
- [ ] Generate API key, add to `.env.local`:
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL="The Poly Garden Sugar <hello@thepolygardensugar.com>"`
  - `OWNER_EMAIL=ivelisse@thepolygardensugar.com`
- [ ] Test: submit a test order, confirm both emails arrive (owner + client)

### Vercel deployment
- [ ] `vercel` from project root (or import GitHub repo)
- [ ] Paste env vars into **Vercel → Settings → Environment Variables**
- [ ] Connect domain
- [ ] Verify HTTPS works

### Content
- [ ] Replace 12 Unsplash stock photos in [`lib/cakes.ts`](lib/cakes.ts) with Ivelisse's real cakes
  - [ ] Upload originals to Supabase Storage (bucket: `gallery`)
  - [ ] Update `src` URLs to public Supabase URLs
  - [ ] Add Supabase Storage hostname to `next.config.ts → images.remotePatterns`
- [ ] Add real Instagram handle (currently placeholder `@thepolygardensugar`)
- [ ] Confirm tagline copy in `lib/i18n.ts` (EN + ES) — currently generic
- [ ] Confirm About page body text matches Ivelisse's voice
- [ ] Confirm FAQ answers are accurate (deposit %, lead times, delivery zones)
- [ ] Add a hero portrait of Ivelisse for the About page (currently stock)
- [ ] Add real testimonials (currently 3 placeholder quotes on home)

### Polish before launch
- [ ] Test order flow end-to-end on real device (mobile + desktop)
- [ ] Test EN ↔ ES toggle on every page
- [ ] Lighthouse audit (aim for 90+ on Performance & Accessibility)
- [ ] Add `favicon.ico` + `apple-touch-icon.png` (currently default)
- [ ] Add Open Graph image (`/public/og.jpg`) for social previews
- [ ] Write the 404 page

---

## 📋 Phase 2 — Owner Dashboard

Once Ivelisse starts getting real orders, the inbox isn't enough. Build her a small admin app.

### Auth
- [ ] `/admin/login` page with Supabase Auth (email magic link)
- [ ] Single admin user (Ivelisse)
- [ ] Middleware protecting `/admin/*` routes

### Order list
- [ ] `/admin/orders` — table of every inquiry
- [ ] Columns: client, date, products, status, quoted amount
- [ ] Filter by status (`new`, `quoted`, `confirmed`, etc.)
- [ ] Search by client name / email

### Order detail
- [ ] `/admin/orders/[id]` — full inquiry view
- [ ] Edit status, set quote amount, mark deposit paid
- [ ] "Send Quote" button → emails the client a templated quote via Resend
- [ ] "Send Deposit Reminder" → automated 7 days before pickup if unpaid
- [ ] "Send Pickup Reminder" → automated 24 hours before pickup

### Calendar view
- [ ] `/admin/calendar` — monthly grid showing pickup/delivery dates
- [ ] Color-coded by status
- [ ] Click date → see all orders for that day
- [ ] Spot collisions early (two cakes due same morning, etc.)

### Notifications
- [ ] Push notification (or just email) when a new order arrives
- [ ] Daily digest at 8 AM listing today's pickups

---

## 📋 Phase 3 — Growth

Optional, post-launch when there's traction.

- [ ] **Stripe deposits** — collect 50% online instead of Zelle/cash hassle
- [ ] **Client portal** — clients can log in to view their order status
- [ ] **Reviews** — a `/reviews` page; clients rate after pickup; surface on home + gallery
- [ ] **SEO blog** — `/blog/[slug]`; posts like "Quinceañera cakes in NJ", "Wedding cake flavors that pair with champagne"
- [ ] **Instagram feed** — auto-embed her latest 6 IG posts on home / gallery
- [ ] **Tasting bookings** — wedding clients schedule tastings via the site
- [ ] **Loyalty / referral** — discount code for repeat clients

---

## Decisions still pending

| Question | Default if not answered |
|---|---|
| Real Instagram handle? | `@thepolygardensugar` placeholder used |
| Phone number to display? | "By inquiry" placeholder used |
| Deposit % policy (50% standard)? | 50% used in copy |
| Lead time minimums? | 7 days standard, 14 days tiered (used in copy) |
| Tasting fee for weddings? | Not mentioned; can add to FAQ later |
| Allergy disclaimer wording? | Standard "common allergens in our kitchen" used |
| Service-area radius? | "All of NY & NJ" used; can narrow later |

---

## How to run the project

```bash
npm install
cp .env.example .env.local        # fill in keys (optional for first run)
npm run dev
```

Open <http://localhost:3000>. Without env vars, the order form logs warnings and skips DB writes & emails — useful for design iteration.

```bash
npm run build                     # production build
npm start                          # serve production build
```

---

## Project structure

```
app/                    Next.js App Router
  layout.tsx              fonts + navbar + footer + i18n provider
  page.tsx                Home
  gallery/page.tsx        Gallery
  order/page.tsx          Order form panel
  about/page.tsx          About Ivelisse
  faq/page.tsx            FAQ accordion
  contact/page.tsx        Contact info
  api/order/route.ts      POST endpoint (Supabase + Resend)
  globals.css             Tailwind v4 @theme tokens

components/
  Navbar.tsx              Sticky nav, EN/ES toggle, mobile menu
  Footer.tsx              Brand + links + contact
  OrderForm.tsx           react-hook-form + zod
  LanguageProvider.tsx    Context + localStorage
  Monogram.tsx            PGS / PG SVG (compact)
  FloralCorner.tsx        Botanical SVG ornaments
  FloralSprig.tsx         Inline floral divider
  IconInstagram.tsx       Custom IG glyph

lib/
  i18n.ts                 EN + ES translations
  cakes.ts                Gallery items (12 stock photos)
  supabase.ts             Client + types
  resend.ts               Email templates

public/
  branding/               8 real brand images (renamed from WhatsApp)

supabase/
  schema.sql              orders table + RLS

.env.example              copy to .env.local
README.md                 setup docs
PLAN.md                   this file
```

---

## Useful commands

```bash
# View all routes
curl -s http://localhost:3000/{,gallery,order,about,faq,contact} -o /dev/null -w "%{url}: %{http_code}\n"

# Check that brand images load
ls public/branding/

# Tailwind v4 quirk — custom .btn-* classes use plain CSS, not @layer.
# If hidden md:inline-flex doesn't work on a button, wrap it in
# <div className="hidden md:block"><Link className="btn-gold">...</Link></div>

# Add a new page
# 1. Create app/<name>/page.tsx
# 2. Add nav link in components/Navbar.tsx → links array
# 3. Add translations in lib/i18n.ts under nav.<name>
```

---

Made with care · Ivelisse Schuwerer · The Poly Garden Sugar
