# Handover — Blooming Marvellous

_Built: 2026-06-08 · Astro 6 + Tailwind v4 + GitHub Pages_

## 1. Project
- **Path:** `~/Development/websites/bloomingmarvellous`
- **Stack:** Astro (static) · Tailwind v4 · trilingual (EN/ES/DE) via Astro i18n
- **Local preview:** `cd ~/Development/websites/bloomingmarvellous && npm run dev`
- **Build:** `npm run build` → `npm run preview`

## 2. Repo & deployment
- **Repo (once pushed):** `https://github.com/lng-boomworks/bloomingmarvellous`
- **Custom domain:** `https://bloomingmarvellousflowers.com` (set in `astro.config.mjs` + `public/CNAME`)
- **GitHub Pages default (pre-DNS):** `https://lng-boomworks.github.io/bloomingmarvellous/`
- Deploy workflow: `.github/workflows/deploy.yml` (Node 22, GitHub Actions). After first push,
  enable **Settings → Pages → Source: GitHub Actions**.

## 3. Approved information architecture
Trilingual. English at root, Spanish under `/es/`, German under `/de/`. Nav order:
**Home · Our Flowers · About · Delivery · Contact** + persistent "Order on WhatsApp" button + EN│ES│DE toggle.

| EN | ES | DE |
|----|----|----|
| `/` | `/es/` | `/de/` |
| `/flowers` | `/es/flores` | `/de/blumen` |
| `/about` | `/es/sobre-nosotros` | `/de/ueber-uns` |
| `/delivery` | `/es/entrega` | `/de/lieferung` |
| `/contact` | `/es/contacto` | `/de/kontakt` |

15 pages total, all in the sitemap.

## 4. Custom components shipped
- `LogoLockup.astro` — brand mark (script "Blooming" + serif "MARVELLOUS" + gold heart + "by Lorena")
- `ValueProps.astro` — the 4 poster value icons
- `OccasionCard.astro` — occasion tiles (Home + Our Flowers)
- `Sprig.astro` — botanical gold divider motif
- `DeliveryAreas.astro` — service-area chips
- `Testimonial.astro` — review card
- `LanguageToggle.astro` — EN/ES/DE switcher
- `CTABand.astro` — shared green final-CTA band
- Page bodies in `src/components/bodies/` · content dictionary in `src/i18n/content.ts` · business facts in `src/data/site.ts`
- Retheme: `Button.tsx` + `src/styles/global.css` (`@theme`) now use the florist palette/fonts.

## 5. Content used
- Real verbatim Facebook testimonials (Vivien, Katie, Linda, Martin, Elise, Angie, Andrea).
- Hero tagline lifted verbatim from the brand poster: *"Beautiful flowers. Made for moments that matter."*
- Contact: WhatsApp `+34 966 84 84 87` (`wa.me/34966848487`), call `+34 618 06 39 33`, email `bloomingmarvellouslamarina@gmail.com`.

## 6. Outstanding placeholder tokens / pending content
| Item | Where | Status |
|------|-------|--------|
| **Real photography** | `public/images/` (hero, featured, about, occasions/*, gallery/*) | Placeholders: floral crops of the brand poster + soft brand-tint tiles. Replace with real photos (Instagram shots work). |
| **Opening hours** | Delivery + Contact (`shared.hoursTBC`) | Shows "Please get in touch for our latest opening hours." — supply real hours. |
| **Map embed** | Delivery + Contact (`{{MAP_EMBED_URL}}`) | Friendly "map coming soon" placeholder. Drop in a Google Maps embed. |
| **Contact form backend** | `ContactBody.astro` | Currently a functional `mailto:` fallback to the Gmail. Recommended: swap for Formspree/Web3Forms. |
| **Pinterest URL** | `src/data/site.ts` (`{{PINTEREST_URL}}`) | Icon hidden until a real URL is set. Confirm Instagram + Pinterest handles too (poster shows `@bloomingmarvellous.lamarina`; current IG link uses `blooming_marvellous_florist`). |
| **Favicons / OG image** | `public/` | Starter favicons still in place; `og-default.jpg` is a poster crop. Replace with brand favicon + a proper OG image. |

## 7. Important content notes
- **Florist's name = Lorena** (per the brand poster). Andrea Quintero's review (which wrote "Lorraine")
  is normalised to "Lorena" on-site for consistency.
- **ES + DE copy** was drafted to a professional standard but **should be proofed by a native speaker** before launch.

## 8. Suggested next actions
1. Replace placeholder imagery with real photography.
2. Native-speaker proof of Spanish + German copy.
3. Configure DNS for `bloomingmarvellousflowers.com` → GitHub Pages, then verify the domain in repo settings.
4. Set opening hours, Google Maps embed, and a real contact-form backend.
5. Confirm/replace social handles (Instagram, Pinterest) and add a Pinterest URL.
6. Add brand favicon + OG image; consider per-page hreflang `alternate` tags for SEO across locales.
7. Accessibility + Lighthouse pass; image optimisation (the poster-crop JPEGs are unoptimised).
8. Gather a few more recent testimonials and refresh the gallery.
