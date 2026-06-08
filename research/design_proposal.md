# Design Proposal — Blooming Marvellous

_Date: 2026-06-08_
_Prepared by: new-website skill_
_Inputs: research_summary.md (approved 2026-06-08), intake answers from Phase 0,
brand reference poster (`research/brand-reference.png`)_

---

This document is the second approval gate. The technology stack is fixed (Astro + GitHub Pages);
everything below is per-business design intent. Approve before any scaffolding begins.

**Positioning in one line:** a local Costa Blanca florist (Lorena) hand-making bespoke
arrangements for every occasion, with a personal touch and free local delivery — boutique polish
with neighbourhood warmth. Ordering is human (online enquiry + WhatsApp + phone + email),
**not** a full ecommerce cart.

**Design anchor:** the brand reference poster (`research/brand-reference.png`) is the visual
source of truth — logo lockup, exact tagline, the four value icons, script-accent usage, the
botanical-green footer band and the floral-on-ivory composition all derive from it.

---

## 1. Information Architecture

### Page set + nav order

Lean, boutique IA — modelled on the local peer (Brisalta), not the national ecommerce platforms.
Photography and the personal story carry the brand; ordering converts to WhatsApp/phone.

| # | Route | Page name | Reason |
|---|-------|-----------|--------|
| 1 | `/` | Home | Always present. Hero + occasions + delivery promise + real testimonials. |
| 2 | `/flowers` | Our Flowers | A florist's most persuasive asset is its work. Gallery + occasion categories — replaces a "shop". |
| 3 | `/about` | About | Named florist (Lorena) + the personal touch is the #1 differentiator vs. faceless platforms. |
| 4 | `/delivery` | Delivery | Free local delivery is the USP; listing the urbanisations served answers "do you deliver to me?" and drives local SEO. |
| 5 | `/contact` | Contact | Phone, WhatsApp, address, map, hours, enquiry form. |

**Nav order:** `Home · Our Flowers · About · Delivery · Contact`
Plus a **persistent "Order on WhatsApp" button** in the navbar (primary conversion action on every page).

### Localisation — trilingual EN / ES / DE (confirmed)

The poster advertises **English · Español · Deutsch**, so the site ships **trilingual** from v1
(the Costa Blanca South has large English- and German-speaking expat communities). Implementation
uses **Astro's native i18n routing**:

- Default locale **English at the root**: `/`, `/flowers`, `/about`, `/delivery`, `/contact`.
- Spanish under `/es/`: `/es/`, `/es/flores`, `/es/sobre-nosotros`, `/es/entrega`, `/es/contacto`.
- German under `/de/`: `/de/`, `/de/blumen`, `/de/ueber-uns`, `/de/lieferung`, `/de/kontakt`.
- A **language toggle (EN | ES | DE)** sits in the navbar; it links to the equivalent page in each locale.
- Copy lives in a per-locale content dictionary (`en` / `es` / `de`) so each route renders from
  localised strings — one page template per route, three language outputs. Shared across locales:
  CTAs, phone/WhatsApp/email, address, delivery-area names, the logo lockup and imagery.
- **Spanish nav:** `Inicio · Nuestras Flores · Sobre Nosotros · Entrega · Contacto`.
- **German nav:** `Startseite · Unsere Blumen · Über uns · Lieferung · Kontakt`.

`astro.config.mjs` gets an `i18n` block (`defaultLocale: "en"`, `locales: ["en","es","de"]`,
`prefixDefaultLocale: false`). Custom domain means no base path, so locale routing stays clean.

> **Scope note:** trilingual ~triples the copy work and means three rendered versions of every
> page. The Spanish and German copy will be drafted by me to a professional standard; Lorena
> should have a native speaker proof the ES/DE before launch (flagged for handover).

### Pages explicitly **not** included

- `services` (ships in starter) — a florist doesn't sell "services"; **Our Flowers + occasions**
  replaces it. The shipped `services.astro` will be repurposed into `flowers.astro`.
- `shop` / `cart` / `account` — no live ecommerce. The business takes orders by WhatsApp/phone;
  Astro static hosting isn't the tool for a real cart, and the boutique doesn't need one yet.
- `team` — single owner-florist (Lorena). The About page is her story, not a team grid.
- `blog` — no content cadence. Omit until there's a real plan.
- Separate `occasions` page — folded into **Our Flowers** to keep nav tight (occasions are
  category sections within that page).

---

## 2. Per-page section list

### `/` — Home

1. `hero-lockup` — recreates the poster: lush floral column on the left, the **`LogoLockup`**
   (script "Blooming" + serif-caps "MARVELLOUS" + gold-heart rule + "by Lorena") and the exact
   tagline on warm ivory to the right, with primary CTA "Order on WhatsApp" + secondary "See our flowers".
2. `value-props` — the four poster icons in a row: **Fresh & Seasonal Flowers · Personalised
   Service · Same Day Delivery · Perfect for Every Occasion** (`ValueProps` component, circular
   blush icon badges). High-trust, straight from the brand sheet.
3. `section-label` + short **personal-touch intro** narrative, closed with a `Sprig` motif divider.
4. `occasions-grid` (`OccasionCard` ×6) — Weddings & Events · Sympathy & Funerals · Birthdays ·
   Anniversaries · Mother's Day & Celebrations · Everyday Bouquets. _(adapts `services-grid-Nup`)_
5. `featured-product` — a "Bespoke, made just for you" feature band with image + the West-Ham
   sympathy story framed as proof of personal craft.
6. `delivery-promise` band — free local delivery headline + `DeliveryAreas` teaser + the script
   "Order with ease — online & by phone" treatment. _(landscape-banner / cta-band-with-trust style)_
7. `testimonials-band` — 3 real Facebook quotes (Vivien, Martin, Elise).
8. `final-cta` — poster's closing line "Make someone's day — order today and make it bloom" with
   "Order on WhatsApp" + call button, on the botanical-green band. _(extends shipped `FinalCTA`)_

### `/flowers` — Our Flowers

1. `hero-editorial` — page header, smaller display type, generous whitespace.
2. Intro copy — bespoke philosophy, fresh daily.
3. `occasions-grid` (`OccasionCard`, fuller set with short copy per occasion).
4. `gallery-masonry` — arrangement photography (placeholder images; real photos pending).
5. `cta-band-dual` — "Order on WhatsApp" / "Contact us".

### `/about` — About

1. `hero-editorial` — "Meet Lorena" / the Blooming Marvellous story.
2. `story-narrative` — Lorena's voice, the personal touch, why bespoke; the West-Ham-colours
   sympathy tribute as a real example of care.
3. `values-grid` — Bespoke · Fresh · Personal · Free local delivery (4 values).
4. `landscape-banner` — workshop / flowers image (`Sprig` accent).
5. `testimonials-band` — different real quotes (Katie, Linda, Angie).
6. `final-cta`.

### `/delivery` — Delivery

1. `hero-editorial` — "Free local delivery, made personal".
2. `approach-steps` — How to order: 1) Choose your occasion · 2) Message on WhatsApp or call ·
   3) We hand-make your arrangement · 4) Free local delivery to your door.
3. `DeliveryAreas` — full list of urbanisations served (La Marina, San Fulgencio, Guardamar,
   Ciudad Quesada, Rojales, Torrevieja, Santa Pola, Elche, Alicante) + `map-block`.
4. `opening-hours-block` — hours (token — pending from owner).
5. `cta-band-with-trust` — "Order on WhatsApp" + "Free delivery across the Costa Blanca South".

### `/contact` — Contact

1. `hero-editorial` (compact) — "Get in touch".
2. `contact-methods-row` — WhatsApp (`https://wa.me/34966848487`), call (`tel:+34618063933`),
   email (`mailto:bloomingmarvellouslamarina@gmail.com`). Three large tap-targets.
3. `meta-row` + `map-block` — address (Calle Virgen de la Asunción, Urb. Oasis, Alicante) + hours + numbers.
4. `contact-form` — name, email, occasion (dropdown), message. Submits to the Gmail (target TBD:
   Formspree / Web3Forms / mailto — handover item).
5. `final-cta` (light) — reassure on quick personal reply.

Every page ends in a CTA. ✓

---

## 3. Custom components needed

| Component | Type | Where it lives | Reason |
|-----------|------|----------------|--------|
| `LogoLockup` | `.astro` | `src/components/LogoLockup.astro` | The brand mark from the poster — script "Blooming" + serif-caps "MARVELLOUS" + gold-heart rule + "by Lorena". Used in hero, navbar, footer. |
| `ValueProps` | `.tsx` | `src/components/ValueProps.tsx` | The four poster value icons (Fresh & Seasonal · Personalised Service · Same Day Delivery · Perfect for Every Occasion) as a circular-badge icon row. |
| `OccasionCard` | `.tsx` | `src/components/OccasionCard.tsx` | Occasion tiles repeat on home + Our Flowers (image, label, short copy, link). |
| `Sprig` | `.astro` | `src/components/Sprig.astro` | Brand motif — a small botanical sprig / gold-heart used as a section divider (the florist analog of `PawPrint`). |
| `DeliveryAreas` | `.tsx` | `src/components/DeliveryAreas.tsx` | The list/chips of urbanisations served; reused on home teaser + delivery page; local-SEO load-bearing. |
| `Testimonial` | `.tsx` | `src/components/Testimonial.tsx` | Quote card for the testimonials band (real Facebook reviews); reused on home + about. |
| `LanguageToggle` | `.astro` | `src/components/LanguageToggle.astro` | EN \| ES \| DE switcher in the navbar; links to the equivalent route in each locale. |

Extend the shipped `HomeHero`, `Services` (→ occasions grid), and `FinalCTA` rather than rewriting.
The Allura script-accent is handled with a CSS class (`.script-accent`), not a component. The
footer adds **Instagram · Facebook · Pinterest** (`@bloomingmarvellous.lamarina`) per the poster.

---

## 4. Design system direction

### Palette (locked from intake)

- `--color-primary`: `#DDA0AC` (Rose Blush)
- `--color-secondary`: `#2F4B45` (Deep Botanical Green)
- `--color-background`: `#FAF7F5` (Warm Ivory)
- `--color-accent-1`: `#C9A35F` (Soft Gold)
- `--color-accent-2`: `#F2D8DD` (Dusty Pink)
- `--color-text`: `#2C2C2C` (Charcoal)
- Supporting: `--color-light-grey #E8E5E3`, `--color-sage #AEB9AA`, `--color-floral-pink #E9B4C2`,
  `--color-cream #FFFDFC`, `--color-primary-hover #C98998`, `--color-secondary-hover #233833`

### Typography (locked from intake)

- Display: **Cormorant Garamond** (weights 500/600) — hero & headings
- Body: **Montserrat** (weights 300/400/500) — paragraphs, nav, descriptions
- Accent script: **Allura** — used sparingly for words like "Blooming" / "that matter" / "Order with ease"

### Vertical rhythm + spacing

- Section vertical padding: **120px desktop / ~64px mobile** (generous whitespace is core to the look)
- Container max-width: **1200px**
- Border radius: **16px on cards, 6px on buttons** (mixed, soft)
- Card shadow: `0 8px 30px rgba(0,0,0,0.06)`

### Treatment notes

Editorial soft-luxury — think Jo Malone × wedding florist × boutique gift shop, not a traditional
flower shop. Large floral photography, lots of warm-ivory breathing room, Cormorant Garamond
headings, blush accents, and deep botanical green anchoring the navbar and footer. Soft gold used
sparingly for dividers/hover. Allura script appears once or twice per page as a romantic flourish —
never for body text. Buttons: solid rose-blush primary, outline-rose secondary.

**Poster-derived signature details** (lift these to keep the site on-brand):
- **Logo lockup**: script "Blooming" overlapping serif-caps "MARVELLOUS", a thin gold rule with a
  centred gold heart, "BY LORENA" in letter-spaced caps beneath.
- **Circular blush icon badges** with a hairline outline for the value-props row.
- **Rose-blush brushstroke** behind the "Order with ease" line (decorative PNG/SVG band).
- **Gold heart** accents as inline punctuation/dividers; "Flowers for all occasions" pink badge.
- **Botanical-green footer band** with the lockup reversed to cream, plus IG/FB/Pinterest badges.

---

## 5. Hero copy draft (research-grounded)

- **Logo lockup**: *Blooming* **MARVELLOUS** — by Lorena. _(script + serif-caps, from the poster.)_
- **Hero headline (tagline, verbatim from poster)**: Beautiful flowers. Made for moments
  **that matter**. _("that matter" set in Allura script.)_
- **Hero sub-headline**: Bespoke arrangements made by hand with a personal touch, and delivered
  free across La Marina and the Costa Blanca South.
- **Primary CTA label**: "Order on WhatsApp"
- **Primary CTA target**: external — `https://wa.me/34966848487`
- **Secondary CTA label**: "See our flowers"
- **Secondary CTA target**: `/flowers`

Grounded in: the brand reference poster (verbatim tagline), brand essence (Bespoke · Personal ·
Local), owner positioning statement, and the free-local-delivery USP from the research summary.

---

## 6. Page-level copy direction

- `/flowers` — Lead with the bespoke philosophy ("made just for you, never off-the-shelf").
  Organise by occasion; let photography do the selling. Each occasion gets one warm line.
- `/about` — Founder voice (Lorena). Use the West-Ham-colours sympathy tribute verbatim-in-spirit
  as proof that "the care and effort is second to none." Warm, personal, not corporate.
- `/delivery` — Reassure on free local delivery and same-day for local orders. Name every town so
  visitors instantly see they're covered. Make ordering feel effortless (4 simple steps).
- `/contact` — Surface WhatsApp, call and email above the form; promise a quick, personal reply.

> **Testimonial name note:** Andrea Quintero's verbatim review spells the florist "Lorraine"; the
> brand spelling is **Lorena**. On-site, normalise her name to "Lorena" in any displayed quote for
> consistency (the quote is otherwise unchanged).

---

## 7. Library updates (post-build)

- **New custom component**: `OccasionCard` — occasion tile (image + label + copy + link); reusable
  across any occasion-led business (florists, event venues, caterers).
- **New custom component**: `DeliveryAreas` — service-area list/chips; reusable for any
  local-delivery or service-area business; local-SEO friendly.
- **New archetype hint**: add a **florist** archetype to `business_archetypes.md` — boutique
  florists follow retail-light visuals + salon-style bespoke service, convert via WhatsApp/phone
  (not cart), and are strongly occasion-led; IA `index | flowers | about | delivery | contact`.
- **New custom component**: `ValueProps` — circular-badge icon row (4 trust props); reusable for any
  service business with a "why us" strip.
- **New custom component**: `LanguageToggle` — EN/ES/DE locale switcher; reusable for any multilingual build.
- **New section pattern**: `occasions-grid` — occasion category tiles; `delivery-promise` band;
  `hero-lockup` — floral-column + brand-lockup hero (florist/boutique).

---

## 8. Open questions for the user — RESOLVED

1. **Weddings & Events** — ✅ Fold into an occasion section on Our Flowers in v1; dedicated page is a v2 option.
2. **Florist's name** — ✅ **Lorena** (matches the brand poster; reviewer "Lorraine" spellings normalised on-site).
3. **Email address** — ✅ **Include** `bloomingmarvellouslamarina@gmail.com` in contact methods,
   footer, and as the contact-form target.
4. **Naming Lorena + the West Ham story** — ✅ Yes to both on About.
5. **Languages** — ✅ **Trilingual EN/ES/DE from v1** (see §1 Localisation).
6. **Phone numbers** — ✅ Call → `+34 618 06 39 33` (mobile); WhatsApp → `+34 966 84 84 87`
   (`https://wa.me/34966848487`).

### Still using placeholders (non-blocking — flagged for handover)

- **Opening hours** — not supplied; Delivery + Contact will carry a clearly-marked `{{OPENING_HOURS}}`
  token until Lorena confirms.
- **Real photography** — none supplied; scaffold uses tasteful placeholder images (and the floral
  crop from the poster where it fits) with descriptive `alt` text. Instagram shots can replace them later.
- **ES / DE copy** — drafted by me to a professional standard; should be proofed by a native speaker before launch.
- **Contact-form submission target** — to be decided (Formspree / Web3Forms / mailto); noted for handover.

---

## Build Gate — Approval Required

- [ ] Approved as-is
- [ ] Approved with edits (note edits below)
- [ ] More design work needed (note what's missing)

### User notes / edits

…
