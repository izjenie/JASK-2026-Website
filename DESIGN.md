# JasKapital - Design Direction

Arah visual diambil dari handoff desain (proyek Claude Design) untuk landing page JasKapital.
Ini adalah titik awal yang diadaptasi ke stack React + Tailwind + GSAP dan ke data nyata situs.

## Design Read

> Reading this as: a venture-builder landing for institutional and founder audiences, in an
> editorial institutional visual language, dial **ENERGY 2 / RHYTHM 3 / MOTION 2**.

## Identity

JasKapital is a venture builder. The design reads like a financial *desk*, not a template startup:
warm paper, editorial rules, numbered columns, large serif numerals. It favors structure and
precision over decoration.

- **One-line reasons (R-31):**
  - Warm paper (`#FBFAF8`) instead of pure white: reads as print/document, not app default.
  - Navy (`#0A1628`) for the hero and dark sections: anchors the brand's financial depth.
  - Serif (Playfair) for headlines and numerals: editorial, treaty-like, distinct from a sans SaaS.
  - Sans (Inter) for body: legible and quiet so the serif carries the hierarchy.
  - Editorial `section-head` (eyebrow rule + title left, note right, hairline below): breaks the
    centered-title + card-grid template (R-05).
  - Numbered pillars (01-04) with hairline dividers instead of icon cards: content hierarchy is
    equal-weighing, but presented as a reading sequence, not bento (R-14).
  - Greyscale portfolio photos: removes photo noise and makes the three real companies read as a
    coherent editorial set rather than a screenshot grid.
  - Gold as a *sparing* functional accent (rules, labels, numerals, one CTA): not everywhere
    (R-09, R-29). Gold-deep (`#7A5C08`) is used for gold text on light paper to hold WCAG AA.
  - One subtle vertical-rhythm grid texture in the hero only: an editorial column motif; kept at
    6% opacity and contained to one section (R-07 purpose: column rhythm identity).

## Palette

| Token | Hex | Role |
|-------|-----|------|
| navy | `#0A1628` | Primary dark, hero & dark sections |
| gold | `#B8860B` | Functional accent on dark (labels, numeral, CTA) |
| gold-deep | `#7A5C08` | Gold on light backgrounds (AA-safe) |
| green | `#2E7D4A` | Reserved (hover/rare) |
| paper | `#FBFAF8` | Page background (warm) |
| ink | `#0A1628` | Primary text |
| ink-soft | `#4B5566` | Secondary text |
| line | `#DCD8D0` | Hairlines / dividers |
| cream | `#EFEBE2` | Text on navy |

Rules: max 3 active accents per view; gold carries hierarchy, green is rare; neutral warm greys.

## Typography

- Headings & numerals: Playfair Display (serif), weight 600, tracking tight.
- Hover accent: italic Playfair for the hero phrase (adding craft).
- Body: Inter 400/500, ~15-19px, line-height 1.6-1.7.
- Eyebrow: 13px, uppercase, tracking 0.16em, with a 34px gold rule.

## Dials

- ENERGY 2: confident but restrained; the serif does the talking.
- RHYTHM 3: sections alternate paper / navy and vary composition (columns, metrics, cards,
  contact split); no two sections share the same internal grid.
- MOTION 2: entrance reveals on scroll; count-up on metrics; all gated by
  `prefers-reduced-motion`.

## Motion

- Section reveals: translateY + fade via GSAP ScrollTrigger, `once: true`, guarded by
  `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`.
- Metrics: count-up on scroll to a trigger at 85% viewport.
- All motion is pointing-at-entrance; nothing loops or fills.

## Boundaries

- All content shown is real: 3 portfolio companies (MCASH, NFCX, Riset.ai) with their real
  descriptions and links; real contact (info@jaskapital.com, +6221-50250350); real figures
  (12+, $150M+, Global reach; 11x, $150M+, 5). Nothing is invented (R-38, R-23).
- No em dashes in UI copy (R-02). No testimonials, no fake stats, no fabricated claims (R-18,
  R-36).
