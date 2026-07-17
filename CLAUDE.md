# Alphawga (Bamidele Ajibola) — CLAUDE.md

Personal/business site for Bamidele Ajibola (Alphawga), a Lagos full-stack developer who
consolidates fragmented business operations into unified, intelligent systems. Proof-first,
not aspirational: leads with Okoh ERP (500+ clients, oil & gas procurement, Shell, CEED
Supply), never with what's needed. The site's job: turn a warm referral into a booked call,
via the `/audit` lead magnet as the primary conversion path.

## Voice rules (non-negotiable, for ALL copy)

- No em dashes anywhere. Use periods, commas, colons, or brackets.
- No jargon: leverage, streamline, synergy, seamless, solutions, empower, unlock.
- Short, direct sentences. One idea per line where possible.
- No question hooks ("Are you struggling with...").
- Conversational, confident, proof-first, not salesy. Never lead with what's needed; always
  lead with what's already been delivered.
- Nigerian context where natural (Naira, real situations, local tools like WhatsApp-as-ops).
- Never invent result numbers, client names, or pricing. Leave `[TO FILL]`. One narrow,
  explicitly pre-approved exception: the homepage Proof section's "70% workload reduction
  (SchoolWave)" metric, authored directly into the locked `design copy.md` spec — ships as
  written, not gated. No other number gets this exception.
- Never reword the core line: "I consolidate scattered business operations into one
  intelligent system."
- `/about` is the only page carrying the fuller personal narrative (SchoolWave, Insight Flow,
  Synk framed honestly as lessons, NDI, mentoring). The homepage stays business-proof-only.

## Stack

- Next.js 14 App Router + TypeScript + Tailwind. MDX via `next-mdx-remote` + `gray-matter`.
- Resend (audit/waitlist email capture). Cal.com embed (booking, inline on `/okoh` and
  `/audit`, no standalone `/book` page). Deploy: Vercel.
- No database. Keep it static and fast. Lighthouse target 95+ on mobile.

## Design system

Full spec lives in `DESIGN.md` (root) — read it before writing any UI, synthesized from the
locked `design copy.md` (root). `PRODUCT.md` carries the strategic brief (register, users,
brand personality, anti-references) that DESIGN.md's visual system serves. Summary: oil-slick
near-black canvas (never pure `#000`), one brass accent (`#C89B3C`, matches
`tailwind.config.ts`) used as a sparing "stamp," steel for structure/borders, manila and rust
as narrow single-purpose signals (before-state texture, one leak moment). Fraunces for display
headlines, Inter for body copy (intentionally used here, paired with Fraunces + IBM Plex Mono
rather than alone — that pairing is what avoids the generic-agent Inter-everywhere tell), IBM
Plex Mono for every number/label. No border-radius on any container, no gradients, no
glassmorphism. Hairline borders for separation, not drop shadows. No stock photography, no
purple — see DESIGN.md's Do's and Don'ts before reaching for a default pattern. The
homepage's signature is a GSAP ScrollTrigger scroll-driven sequence (see
`.claude/skills/motion/SKILL.md`) — the site has no sticky nav; a full-screen `MenuOverlay`
is the nav source of truth.

Design tooling installed: the official `frontend-design` Claude Code plugin (foundation),
Impeccable (`.claude/skills/impeccable/` — run `/impeccable audit` or `/impeccable polish`
for refinement passes; it also runs a PostToolUse anti-pattern detector hook automatically),
and two hand-authored per-aspect skills (`.claude/skills/motion/`,
`.claude/skills/component-states/`) capturing this project's specific taste calls. Update
those two as new taste decisions get made, per Emil Kowalski's "agents with taste" approach.

Reuse `Section`, `SectionLabel`, `BookButton`, `components/nav/SiteHeader`,
`components/nav/MenuOverlay`, `Prose`. Primary CTA everywhere is the `/audit` lead magnet
(`BookButton` defaults to it); `/okoh` additionally carries a direct Cal.com embed for people
who don't need the audit funnel.

## Routes

`/` home · `/okoh` case study (Okoh ERP, v1 + v2, tech stack) · `/audit` (lead-magnet
questionnaire, email-gated diagnostic, paid-call CTA) · `/about` (full personal story) ·
`/blog` + `/blog/[slug]` (categories: "Procurement & Operations", "Building & Creativity") ·
`/skinai` (placeholder + waitlist) · `/mentorship` (placeholder, no form).

Content in `content/blog/*.mdx` (`draft: true` hides; frontmatter: `title`, `category`,
`excerpt`, `date`, `readTime`, `slug`). `/okoh` is a static page, not MDX-driven — it's a
single flagship case study, not a list.

## Still to supply ([TO FILL])

Result numbers beyond the confirmed Okoh figures, live automation names, Skin AI details,
mentorship program specifics, audit call pricing (`NEXT_PUBLIC_AUDIT_PRICE_NGN`), headshot,
client logo, Cal.com link (`NEXT_PUBLIC_CAL_LINK`), Resend key (`RESEND_API_KEY`).
