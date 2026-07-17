---
version: alpha
name: Alphawga-design-system
description: A dark, ledger-inspired operational interface for Alphawga (Bamidele Ajibola), a Lagos technical architect who consolidates fragmented business operations into unified systems. The system anchors on an oil-slick near-black canvas (never pure #000) that resolves, on the homepage's signature scroll sequence, into a clean paper-colored ledger surface — chaos consolidating into order is the literal visual argument. Fraunces (a warm, ink-stamped serif) carries display headlines; Inter carries body copy, invisibly; IBM Plex Mono carries every number, naira figure, label, and grid cell — a deliberate "this is a counted, official system" signal. One accent, brass, used as a stamp of authority (CTAs, key numbers), never a wash. Steel is the structural/secondary color: grid lines, borders, inactive states. Manila and rust are reserved, narrow-purpose colors — manila only for "before" chaos texture, rust for exactly one signal (a leaking, mismatched number) — never used decoratively elsewhere. No gradients, no glassmorphism, no border-radius on containers: sharp corners only.

colors:
  ink: "#0B0E12"
  brass: "#C89B3C"
  brass-active: "#A67F2E"
  brass-disabled: "#5C4A22"
  steel: "#3D5A73"
  steel-soft: "#4A5D70"
  manila: "#E8DFC8"
  rust: "#B23A2E"
  paper: "#F5F1E8"
  on-brass: "#0B0E12"
  on-ink: "#F5F1E8"
  on-ink-soft: "#3D5A73"
  on-paper: "#0B0E12"
  success: "#6FA97C"
  warning: "#D4A017"
  error: "#C6564A"

typography:
  display-hero:
    fontFamily: "Fraunces, ui-serif, serif"
    fontSize: "clamp(48px, 6vw, 96px)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "Fraunces, ui-serif, serif"
    fontSize: "clamp(32px, 4vw, 64px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -0.01em
  display-md:
    fontFamily: "Fraunces, ui-serif, serif"
    fontSize: "clamp(24px, 3vw, 40px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: 0
  display-quote:
    fontFamily: "Fraunces, ui-serif, serif"
    fontSize: "clamp(20px, 2.5vw, 32px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, ui-sans-serif, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, ui-sans-serif, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  label-mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.05em
  data-mono:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "clamp(14px, 1.2vw, 20px)"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.05em

rounded:
  none: 0px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 88px

components:
  button-primary:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.on-brass}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 22px
    height: 46px
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-brass}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.on-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: 12px 22px
    height: 46px
    border: "1px solid {colors.steel}"
  site-header:
    backgroundColor: transparent
    textColor: "{colors.steel}"
    typography: "{typography.label-mono}"
    height: 64px
    position: absolute
  menu-overlay:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.display-lg}"
  fragment-mockup:
    backgroundColor: "{colors.manila}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: none
  ledger-grid:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.on-paper}"
    typography: "{typography.data-mono}"
    border: "1px solid {colors.steel}"
  proof-metric:
    backgroundColor: transparent
    textColor: "{colors.on-ink}"
    typography: "{typography.data-mono}"
  audit-question-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.steel}"
  audit-result-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.brass}"
  blog-post-card:
    backgroundColor: transparent
    textColor: "{colors.on-ink}"
    typography: "{typography.body-md}"
    border: "1px solid {colors.steel-soft}"
    padding: "{spacing.lg} 0"
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.steel}"
    typography: "{typography.label-mono}"
    border: none
    borderBottom: "1px solid transparent"
  category-tab-active:
    backgroundColor: transparent
    textColor: "{colors.brass}"
    typography: "{typography.label-mono}"
    borderBottom: "1px solid {colors.brass}"
  text-input:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: 10px 14px
    height: 46px
    border: "1px solid {colors.steel}"
  text-input-focused:
    border: "1px solid {colors.brass}"
    rounded: "{rounded.none}"
  cta-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.display-md}"
    rounded: "{rounded.none}"
    padding: 56px
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.steel}"
    typography: "{typography.body-sm}"
    padding: 56px
    border: "1px solid {colors.steel-soft}"
---

## Overview

The base atmosphere is an **oil-slick near-black canvas** (`{colors.ink}` — #0B0E12), operational and serious, never pure `#000000`. This is not a static palette: the homepage's signature scroll sequence transitions the canvas itself from `ink` to a clean, counted **paper** surface (`{colors.paper}` — #F5F1E8) as scattered operational fragments consolidate into one ledger. Every other page stays on `ink` — `paper` is reserved for the "unified system" moment and its ledger-grid motif, never used as a general page background.

**Fraunces** carries display headlines only — warm, ink-stamped, ledger-heading character, weights 400/600. **Inter** carries body copy, invisible, gets out of the way. **IBM Plex Mono** carries every number: naira figures, stats, grid cells, labels, category tags — the mono voice is the "this is a counted, official system" signal, matching the ledger-grid motif structurally, not just typographically.

Brand voltage comes from a **single brass accent** (`{colors.brass}` — #C89B3C), used sparingly as a stamp of authority: CTAs, active states, key numbers. **Steel** (`{colors.steel}` — #3D5A73) is the structural/secondary color — grid lines, borders, inactive UI. **Manila** (`{colors.manila}` — #E8DFC8) and **rust** (`{colors.rust}` — #B23A2E) are narrow-purpose: manila only textures the "before" chaos state and fades out once consolidated; rust appears in exactly one moment — a mismatched, leaking number before consolidation — never used decoratively elsewhere.

**Key Characteristics:**
- Oil-slick near-black canvas (`{colors.ink}` — #0B0E12). Never pure black. Paper (`{colors.paper}` — #F5F1E8) only for the unified-ledger surface.
- Brass primary (`{colors.brass}` — #C89B3C). CTAs, active states, key numbers, the "stamp." Not a wash across every card.
- Fraunces for display (weights 400/600), Inter for body (weights 400/500) — a deliberate serif/sans pairing, not two similar sans-serifs. IBM Plex Mono for every number and label.
- No border-radius on any container, no gradients, no glassmorphism, no neon glow. Sharp corners only. Brass is a stamp, not a decoration.
- Separation comes from hairline steel borders, never drop shadows.
- Section rhythm `{spacing.section}` (88px). Card padding `{spacing.xl}` (32px).

## Colors

### Brand & Accent
- **Brass** (`{colors.brass}` — #C89B3C): the one accent color. CTA backgrounds, active state, key numbers, the "ONE SYSTEM." stamp. Used sparingly — it is a stamp, not a wash.
- **Brass Active** (`{colors.brass-active}` — #A67F2E): press/hover-darker variant, used where brass needs a pressed state distinct from its hover-to-paper transition.
- **Brass Disabled** (`{colors.brass-disabled}` — #5C4A22): desaturated dark variant for disabled CTA states.

### Structural
- **Steel** (`{colors.steel}` — #3D5A73): grid lines, hairline borders, inactive nav/tab state, secondary text on dark surfaces. The system's primary separation tool.
- **Steel Soft** (`{colors.steel-soft}` — #4A5D70): barely-visible dividers within the same band.

### Reserved-purpose
- **Manila** (`{colors.manila}` — #E8DFC8): ONLY the "before" chaos texture (hero fragments, problem-state surfaces). Fades out during the scroll consolidation. Never used in the unified/paper state, never used as general decoration.
- **Rust** (`{colors.rust}` — #B23A2E): the leak/danger signal. ONE moment on the homepage (a mismatched Excel/QuickBooks number) plus form-validation error states elsewhere. Never decorative.

### Surface
- **Ink** (`{colors.ink}` — #0B0E12): default page floor, every page except the homepage's ledger-grid moment. Cards separate from the page via a 1px steel border, not a lighter background tone — this system does not stack multiple dark elevation steps.
- **Paper** (`{colors.paper}` — #F5F1E8): the unified-system surface. Clean, counted, official. Reserved for the homepage ledger grid.

### Text
- **On Ink** (`{colors.on-ink}` — #F5F1E8): headlines and primary text on the dark canvas.
- **On Ink Soft** (`{colors.on-ink-soft}` — #3D5A73, i.e. steel): secondary text, captions, nav-inactive, subheadlines on dark surfaces.
- **On Paper** (`{colors.on-paper}` — #0B0E12): text on the paper ledger surface.

### Semantic
- **Success** (`{colors.success}` — #6FA97C), **Warning** (`{colors.warning}` — #D4A017), **Error** (`{colors.error}` — #C6564A, matches rust): form validation only. Never decorative.

## Typography

### Font Family
**Fraunces** carries every display headline (h1–h3, hero, quote-style paragraphs) at weight 600, or 400 for the single quote-style "Who This Is For" paragraph treatment. **Inter** carries body copy, navigation labels, and form text at weight 400/500 — deliberately invisible, it should never call attention to itself. **IBM Plex Mono** carries every number, naira figure, category tag, and structural label at weight 400 (labels, uppercase, tracked) or 500 (data/stats) — never paragraph copy.

### Hierarchy

| Token | Size | Weight | Use |
|---|---|---|---|
| `{typography.display-hero}` | clamp(48–96px) | 600 | Homepage hero headline only |
| `{typography.display-lg}` | clamp(32–64px) | 600 | Section headlines |
| `{typography.display-md}` | clamp(24–40px) | 600 | Sub-section heads, CTA band headline |
| `{typography.display-quote}` | clamp(20–32px) | 400 | "Who This Is For" style single-paragraph statements |
| `{typography.body-md}` | 16px | 400 | Default running text |
| `{typography.body-sm}` | 14px | 400 | Secondary copy, footer body |
| `{typography.label-mono}` | 12px | 400 | Category tags, nav labels, section markers — uppercase, IBM Plex Mono |
| `{typography.data-mono}` | clamp(14–20px) | 500 | Naira figures, stats, ledger-grid cells — IBM Plex Mono |
| `{typography.button}` | 14px | 500 | Button labels — uppercase, IBM Plex Mono |

### Principles
Display headlines use Fraunces at weight 600 (or 400 for the single quote-paragraph treatment) — never bold system-sans weight. Body copy is Inter and stays out of the way — no display-weight body text. Every number, no exceptions, renders in IBM Plex Mono, not the body or display font.

## Layout

- **Base unit:** 4px. Tokens: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 88px.
- **Max content width:** matches existing `maxWidth.page` (72rem / 1152px) in `tailwind.config.ts`. The homepage's pinned scroll sequence (`ConsolidationSequence`) is full-bleed and does not use this constraint.
- **Grid discipline:** do not default to three symmetrical columns. The homepage Proof section is an intentional 2-up asymmetric split (before/after left, metrics right); the ledger grid is a literal 4-column table because that's what a ledger is, not a default layout reflex.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No border, no shadow | Body sections, hero, footer |
| Hairline | 1px `{colors.steel}` border | Cards, inputs, the ledger grid — the only separation tool |
| Stamped | 1px `{colors.brass}` border | Emphasized cards (audit result) — brass border reads as an official stamp, not a shadow |

Depth comes entirely from hairline borders and the ink→paper canvas transition, never drop shadows or a second dark elevation tone. This system deliberately has only one dark surface (`ink`) — no `surface-soft`/`surface-card` stack — separation is border-only.

## Shapes

**No border-radius anywhere, on any container.** Sharp corners only — this is a hard anti-slop rule, not a default to override per-component. The only curved shapes in the system are illustrative, not structural: the WhatsApp fragment's chat-bubble shape and the Excel fragment's coffee-ring stain are drawn shapes representing real-world objects, not UI chrome, and are exempt.

## Do's and Don'ts

### Do
- Anchor every page on the oil-slick near-black canvas (`ink`). Never pure `#000000`.
- Use Fraunces for every display headline.
- Use IBM Plex Mono for every number, naira figure, and label — this is the system's signature structural detail.
- Reserve brass for CTAs, active states, and key numbers only.
- Use hairline steel borders for card separation, not drop shadows.
- Reserve manila for "before" chaos texture and rust for the one leak/danger signal — never decoratively.

### Don't
- Don't add border-radius to any container (buttons, cards, inputs, the grid).
- Don't use gradients, glassmorphism, or neon glow anywhere.
- Don't use purple.
- Don't use manila or rust as general accent colors — they are narrow, single-purpose signals.
- Don't stack multiple dark elevation tones — this system has one ink surface, separated by borders only.
- Don't use generic icon libraries — only real UI-fragment mockups or custom SVG.
- Don't add a sticky navigation bar — the scroll is the navigation.

## Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Homepage fragments stack vertically instead of scattering; scroll sequence collapses fragments into a 2-column grid (not 4); no parallax, direct scroll-tie only |
| Tablet | 768–1024px | Desktop scroll sequence and 4-column grid apply; 2-up grids where used elsewhere |
| Desktop | > 1024px | Full layout; content capped at `maxWidth.page` outside the full-bleed scroll sequence |

## Iteration Guide

1. Reference component YAML keys directly (`{component.button-primary}`, `{component.ledger-grid}`) when building — don't invent ad hoc styling per page.
2. New components follow the existing token set; never inline hex values (the one sanctioned exception is `app/opengraph-image.tsx`, which runs in the Edge runtime outside Tailwind and must use literal hex).
3. When adding a new page section, check the Do's/Don'ts before reaching for a default pattern (border-radius, drop shadow, purple, a second dark surface tone).
4. Mono is structural signal — every number and label, never paragraph text.
5. See `design copy.md` (repo root) for the full original scroll-sequence specification this system was synthesized from — DESIGN.md restates it in this repo's token format but does not repeat the frame-by-frame animation choreography, which lives in `components/homepage/ConsolidationSequence.tsx`.
