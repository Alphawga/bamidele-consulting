# alphawga.com — Design Specification

## 0. The Thesis

This is not a portfolio. It is not a SaaS landing page. It is a demonstration of the core service: **scattered operational fragments consolidate into one unified system.**

The scroll is the argument. The pixels are the proof.

---

## 1. Color System

| Token | Hex | Role | Usage Rule |
|-------|-----|------|------------|
| `ink` | `#0B0E12` | Base background | 90% of the page. Oil-slick, operational, serious. Never pure black. |
| `brass` | `#C89B3C` | Primary accent | CTAs, active states, key numbers, the "stamp" of authority. Sparingly. |
| `steel` | `#3D5A73` | Secondary accent | Grid lines, structural borders, inactive UI elements. |
| `manila` | `#E8DFC8` | Problem-state texture | ONLY in the "before" chaos. Fades out during scroll. Never used in the unified state. |
| `rust` | `#B23A2E` | Leak / danger | ONE moment only: a mismatched number between Excel and QuickBooks before consolidation. |
| `paper` | `#F5F1E8` | Unified system surface | The final ledger grid background. Clean, counted, official. |

**Anti-slop guard:** No gradients. No glassmorphism. No neon glow. No border-radius on containers (sharp corners only). Brass is a stamp, not a decoration.

---

## 2. Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | `Fraunces` | 400, 600 | Headlines only. Warm, ink-stamped, ledger-heading character. |
| Data | `IBM Plex Mono` | 400, 500 | Every number, every naira figure, every stat, every grid cell. |
| Body | `Inter` | 400, 500 | Paragraphs, navigation, labels. Invisible. Gets out of the way. |

**Scale:**
- Hero headline: `Fraunces 600`, `clamp(48px, 6vw, 96px)`, line-height `0.95`, letter-spacing `-0.02em`
- Section headlines: `Fraunces 600`, `clamp(32px, 4vw, 64px)`
- Data/numbers: `IBM Plex Mono 500`, `clamp(14px, 1.2vw, 20px)`
- Body: `Inter 400`, `16px`, line-height `1.6`
- Labels/captions: `IBM Plex Mono 400`, `12px`, uppercase, letter-spacing `0.05em`

---

## 3. The Signature: Scroll-Driven Consolidation

### 3.1 The Setup (0% scroll — Hero)

**Background:** `ink` (`#0B0E12`) full viewport.

**Four fragments** sit scattered across the viewport, slightly tilted, overlapping, chaotic. They are NOT icons. They are **specific, recognizable UI artifacts**:

1. **Excel Fragment** — A torn screenshot of an Excel cell showing `#VALUE!` in red, with a coffee ring stain. Position: top-left, rotated `-12deg`, scale `0.85`.
2. **WhatsApp Fragment** — A cropped chat bubble with blue ticks, text reads "u get the invoice?". Position: top-right, rotated `+8deg`, scale `0.9`.
3. **Paper Tag Fragment** — A crumpled paper tally sheet with handwritten numbers, a torn edge. Position: bottom-left, rotated `-6deg`, scale `0.8`.
4. **QuickBooks Fragment** — A cropped row showing a payment logged twice, the duplicate highlighted in `rust` (`#B23A2E`). Position: bottom-right, rotated `+15deg`, scale `0.75`.

**The Headline** sits **between** the fragments, centered, in `Fraunces 600`, `ink` background behind it (via `mix-blend-mode: normal` on a dark overlay), text color `paper`:

> **"Your money is leaking in the gaps."**

**Subheadline** below, `Inter 400`, `steel` color:

> "Between Excel, QuickBooks, WhatsApp, and paper. I build the one system that holds it all together."

**No CTA button in the hero.** The scroll is the CTA.

### 3.2 The Drift (0% → 50% scroll)

As the user scrolls:

- **Excel fragment** rotates from `-12deg` to `0deg`, drifts toward center-left.
- **WhatsApp fragment** rotates from `+8deg` to `0deg`, drifts toward center-right.
- **Paper tag** rotates from `-6deg` to `0deg`, drifts upward.
- **QuickBooks fragment** rotates from `+15deg` to `0deg`, drifts inward.
- **All fragments** scale up slightly toward `1.0`.
- **Manila texture** (`#E8DFC8`) bleeds through the fragments as they move — like aged paper being illuminated.
- **Headline text** fades to `opacity: 0.2` by 40% scroll. It becomes a ghost.

**Easing:** `power2.inOut` (GSAP). Not bouncy. Not elastic. Industrial, deliberate.

### 3.3 The Snap (50% scroll)

At exactly 50% scroll:

- All four fragments **disappear** (not morph, not fade — a hard `opacity: 0` with a `scale: 0.95` micro-shrink).
- A **steel grid** (`steel` lines, `1px`) snaps into view from `opacity: 0` to `opacity: 1` in `0.15s`.
- The grid is a **ledger table**: 4 columns, 3 rows. Clean. Sharp. Counted.
- Grid cells populated with real data in `IBM Plex Mono`:
  - Row 1: `Q-0019` | `Shell Nigeria` | `₦4,250,000` | `DELIVERED`
  - Row 2: `Q-0018` | `CEED Supply` | `₦1,800,000` | `IN TRANSIT`
  - Row 3: `Q-0017` | `KFO` | `₦950,000` | `PAID`
- **Column headers**: `QUOTE NO.` | `CLIENT` | `AMOUNT` | `STATUS` — `IBM Plex Mono 400`, `12px`, uppercase, `steel` color.
- **Background** transitions from `ink` to `paper` (`#F5F1E8`) over `0.3s`.

**The snap feel:** Mechanical. Precision. Like a steel door closing. No bounce. No overshoot.

### 3.4 The Reveal (50% → 100% scroll)

- The grid holds steady.
- A **brass stamp** (`brass` color, `Fraunces 600`) appears in the top-right of the grid: **"ONE SYSTEM."**
- Below the grid, a new headline fades in, `Fraunces 600`, `ink` color:

> **"One source of truth."**

- Subheadline: `Inter 400`, `steel` color:

> "From sourcing to delivery. Quotations, inventory, purchasing, warehouse, logistics, accounting, and HR. The gaps are gone."

---

## 4. Sections (6 Total, No More)

### Section 1: Hero (The Scatter)
- **Height:** `100vh`
- **Content:** Fragments + headline + subheadline
- **Scroll:** Triggers the drift
- **Background:** `ink`

### Section 2: The Diagnosis (The Drift)
- **Height:** `100vh`
- **Content:** Fragments in motion, mid-alignment
- **Scroll:** 0% → 50% of this section drives the animation
- **Background:** Transitions from `ink` to `manila` to `paper`

### Section 3: The System (The Snap)
- **Height:** `100vh`
- **Content:** Ledger grid + "ONE SYSTEM" stamp + headline
- **Scroll:** 50% → 100% reveals the grid
- **Background:** `paper`

### Section 4: Proof (Okoh Case Study)
- **Height:** Auto, min `80vh`
- **Layout:** Two-column. Left: before/after. Right: metrics.
- **Before:** A photo or screenshot of the actual chaos (Excel + WhatsApp + paper). Desaturated. Slightly blurred.
- **After:** A clean screenshot of Okoh ERP v2. Sharp. In focus.
- **Metrics** (right column, `IBM Plex Mono`):
  - `8` — YEARS BUILDING
  - `1` — UNIFIED SYSTEM
  - `500+` — CLIENTS SERVICED THROUGH OKOH
  - `20+` — DEVELOPERS MENTORED
  - `70%` — WORKLOAD REDUCTION (SchoolWave)
- **Accent:** `brass` horizontal rule above the metrics.

### Section 5: Who This Is For
- **Height:** Auto, min `60vh`
- **Content:** One paragraph. No bullet points. No cards.
- **Text:** `Fraunces 400`, `clamp(20px, 2.5vw, 32px)`:

> "This is for established procurement and supply companies serving oil and gas. If your business runs on QuickBooks plus spreadsheets plus WhatsApp and the gaps are costing you money, this is for you. It is not for someone who wants a logo and a flyer."

- **Background:** `ink`
- **Text color:** `paper`

### Section 6: CTA (The Audit)
- **Height:** `50vh`
- **Content:** One headline, one button.
- **Headline:** `Fraunces 600`:

> "Let us look at your operation together."

- **Button:** Sharp rectangle (no border-radius), `brass` background, `ink` text, `IBM Plex Mono 500`, uppercase:

> **"BOOK A 15-MINUTE CALL"**

- **Hover state:** Button background shifts to `paper`, text shifts to `ink`. No scale transform. No shadow. Just a color swap.
- **Below button:** One line, `Inter 400`, `steel`:

> "A short call to see if your operation is a fit. No pressure."

---

## 5. Navigation

**No sticky nav.** No hamburger menu. No logo in the top-left corner.

Instead:
- **Top-left:** `Alphawga` in `IBM Plex Mono 400`, `12px`, uppercase, `steel` color. No logo mark. Just the word.
- **Top-right:** `MENU` in `IBM Plex Mono 400`, `12px`, uppercase, `steel` color. Click reveals a full-screen overlay:
  - Background: `ink`
  - Links: `Fraunces 600`, `paper` color, `clamp(32px, 4vw, 64px)`
  - Links: "The System", "Proof", "Who For", "Contact"
  - Close: `ESC` or click `MENU` again.

**Why no sticky nav:** The scroll is the navigation. Adding a sticky bar would be like putting a steering wheel on a train.

---

## 6. Mobile Behavior

**Hero:** Fragments do not scatter. They stack vertically:
1. Excel fragment (top)
2. WhatsApp fragment
3. Paper tag
4. QuickBooks fragment (bottom)

Headline sits between fragment 2 and 3.

**Scroll:** On scroll, fragments **collapse upward** into a single horizontal line, then **snap** into a simplified 2-column grid (not 4 columns). The principle is the same: chaos → order. The execution adapts.

**No parallax on mobile.** Direct scroll-tie only. Performance over premium feel.

---

## 7. Assets Required

| Asset | Status | Notes |
|-------|--------|-------|
| Excel fragment image | NEED | Screenshot of real Excel cell with `#VALUE!`, add coffee stain in post |
| WhatsApp fragment image | NEED | Screenshot of real chat bubble with blue ticks, text: "u get the invoice?" |
| Paper tag image | NEED | Photo of crumpled tally sheet with handwritten numbers, torn edge |
| QuickBooks fragment image | NEED | Screenshot of duplicate payment row, highlight in rust |
| Okoh "before" photo | NEED | Photo of actual chaos: desk with Excel, paper, phone. Desaturate in CSS. |
| Okoh "after" screenshot | NEED | Clean screenshot of ERP v2. Sharp. |
| Headshot | HAVE? | Must feel operational, not corporate. Warehouse or desk context preferred. |

**If real assets are unavailable:** Use high-fidelity mockups that look real. But real is always better.

---

## 8. Animation Tech Stack

- **GSAP + ScrollTrigger** for the scroll-driven consolidation. This is the only choice — Framer Motion is React-native but ScrollTrigger gives pixel-perfect scrub control.
- **No Lottie.** No video files. No GIFs. Everything is DOM/SVG.
- **will-change: transform** on fragments during scroll. Remove after animation completes.
- **Reduced motion:** If `prefers-reduced-motion: reduce`, skip the drift. Show the grid immediately. Accessibility is not optional.

---

## 9. Anti-Slop Checklist (Before Build)

- [ ] No border-radius on any container (sharp corners only)
- [ ] No gradients (solid colors only)
- [ ] No glassmorphism or blur effects
- [ ] No generic icons (Font Awesome, etc.) — only real fragments or custom SVG
- [ ] No stock photos of people shaking hands
- [ ] No "trusted by" logo bar
- [ ] No testimonial card with 5-star rating
- [ ] No FAQ accordion
- [ ] No "features" grid with 6 icons
- [ ] No sticky navigation bar
- [ ] No cookie banner (unless legally required)

---

## 10. The Prompt for Claude Code

When you feed this to Claude Code, prepend:

> "You are building the alphawga.com homepage. Do not deviate from this design.md. Do not add sections not listed here. Do not use default Tailwind colors — only the tokens defined in the Color System. Do not add border-radius. Do not add gradients. The scroll-driven consolidation animation in Section 3 is the signature — prioritize it above all else. If you are unsure about a design decision, ask before building."

---

*This document is locked. Changes require discussion.*
