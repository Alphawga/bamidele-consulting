---
name: component-states
description: This project's default/hover/active/focus conventions. Read before styling any interactive element (button, link, tab, input).
---

Separation comes from hairline borders and color shift, never drop shadow — see DESIGN.md's
Elevation & Depth section.

- **Links / nav items:** default `text-steel`, hover/active `text-paper` (or `text-brass` for
  primary in-content links). Never a background shadow.
- **Buttons (primary):** `bg-brass text-ink`, hover `bg-paper` (text stays `ink`-colored
  through the transition — spec's "text shifts to ink" is read as "text stays ink," not a
  second color) — a color shift, not a scale transform.
- **Buttons (secondary/outline):** `border-steel text-paper`, hover `border-brass text-brass`.
- **Inputs:** `border-steel` default, `border-brass` on focus. No glow/ring effects beyond the
  border color change.
- **Tabs (blog category filter):** inactive `text-steel`, transparent bottom border; active
  `text-brass border-b border-brass` (see DESIGN.md `category-tab-active`) — an underline, not
  a filled pill, since border-radius is banned outright in this system.
- Never add `hover:scale-*` or `hover:shadow-*` as the primary hover signal — this system has
  no "elevated surface" exception either; a brass border (not a shadow) signals emphasis (see
  `audit-result-card`).
