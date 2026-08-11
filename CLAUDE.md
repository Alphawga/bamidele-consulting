# Alphawga (Bamidele Ajibola) — CLAUDE.md

Site for AlphaWGA, the business systems and operational control firm founded by Bamidele
Ajibola in Lagos. It diagnoses how work, money and information move through a growing
business, then consolidates fragmented, owner-dependent operations into one system.
Proof-first, not aspirational: leads with the Okoh build (500+ clients, four years, a repeat
purchase for v2), never with what's needed. The site's job is to get an owner into the free
20-minute read, which is the entry to the paid ladder.

**Shell and CEED Supply are banned everywhere.** The 2026-08-05 clearance covered Okoh's own
name on `/okoh` and nothing else. No confidential figures, no cap-table detail, no internal
module names. The four-year relationship and the v2 repeat purchase may be named.

**The sector is deliberately not picked.** `core/144-day-sprint.md` in the ops repo carries an
override: let the next 5-10 diagnostics select it. Copy qualifies on the control filter
(Nigerian businesses, 10-100 staff, owner still personally controls quotations, purchasing,
invoicing, inventory or approvals), never on an industry. The band is 10-100: it is what
`core/144-day-sprint.md` says, and the sprint vetoes. `playbooks/outreach.md` says 10-50 and is
the outlier.

## Voice rules (non-negotiable, for ALL copy)

- No em dashes anywhere. Use periods, commas, colons, or brackets.
- No jargon: leverage, streamline, synergy, seamless, solutions, empower, unlock.
- Short, direct sentences. One idea per line where possible.
- No question hooks ("Are you struggling with...").
- Conversational, confident, proof-first, not salesy. Never lead with what's needed; always
  lead with what's already been delivered.
- Nigerian context where natural (Naira, real situations, local tools like WhatsApp-as-ops).
- Never ship `[TO FILL]` to a live route. Leave it only in files that do not render.
- Never invent result numbers, client names, or pricing. One narrow,
  explicitly pre-approved exception: the homepage Proof section's "70% workload reduction
  (SchoolWave)" metric, authored directly into the locked `design copy.md` spec — ships as
  written, not gated. No other number gets this exception.
- Never reword the core line: "I consolidate scattered business operations into one
  intelligent system."
- `/about` is the only page carrying the fuller personal narrative (SchoolWave, Insight Flow,
  Synk framed honestly as lessons, NDI, mentoring). The homepage stays business-proof-only.

## Stack

- Next.js 14 App Router + TypeScript + Tailwind. MDX via `next-mdx-remote` + `gray-matter`.
- Resend (audit/waitlist email capture). Cal.com embed, reached through `/book`. Deploy: Vercel.
- **`NEXT_PUBLIC_SITE_URL` must be `https://www.alphawga.com`, the www host.** Vercel serves
  www as primary and 308s the apex. An apex value here puts every sitemap URL, canonical and
  og:url behind a redirect, which Search Console files as "Page with redirect" and never
  indexes. That is what happened through 2026-08.
- Prisma + Postgres (Vercel Postgres) for lead persistence only, on the `erp_waitlist` and
  `scorecard_leads` tables (`app/api/erp-waitlist`, `app/api/scorecard`). `/audit` and
  `/api/waitlist` stay email-only via Resend, no DB write. Site rendering itself is still
  static, no database read on any page. Lighthouse target 95+ on mobile.

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

Aso-Oke design system (listed in `ChromeGate.tsx`'s `BARE_PATHS`, each mounting its own
`AsoOkeNav`/`AsoOkeFooter`): `/` · `/how-we-work` · `/okoh` · `/offers` · `/writing` ·
`/contact` · `/scorecard` · `/book` · `/alphabrain`. A page in `BARE_PATHS` that does not
mount its own nav loses it; a page mounting its own that is missing from the set renders two.

Pre-Aso-Oke design system, still on `SiteHeader` + `Footer`: `/audit`, `/mentorship`,
`/blog/[slug]`. The post pages are the last public route on the old system.

Redirects (`next.config.mjs`): `/blog` → `/writing`, `/consulting` → `/offers`, and
`/products` → `/okoh`. The last one is a **hold, not a retirement**: `/products` sold the Okoh
ERP as an AlphaWGA product line with a waitlist and founding pricing, and the ERP's cap table
is unsigned. The page and `ErpWaitlistForm` are still in the tree.

Content in `content/blog/*.mdx` (`draft: true` hides; frontmatter: `title`, `category`,
`excerpt`, `date`, `readTime`, `slug`). `/writing` is the Aso-Oke index over that same
collection; posts still render at `/blog/[slug]`. `/okoh` is a static page, not MDX-driven —
it's a single flagship case study, not a list.

## The offer ladder (source of truth: ops repo `playbooks/offer-playbook.md`)

Free scorecard → free 20-minute read → **Operational Control Diagnostic ₦100,000** →
Consolidation Blueprint ₦750K-1.5M → Consolidation Build ₦2M-4M → Systems Advisor ₦300K/month.

The ₦10,000 diagnostic call is retired. Do not sell it, link it, or quote the price. The
diagnostic price is a **sequential experiment** (₦100K, then ₦150K, then ₦250K, one at a time,
each earned by a real paid engagement) — never publish a tier card or a menu, and never quote a
price without its scope.

## Still to supply

- The `/okoh` narrative body should be rewritten from the cleared case-study source outline
  once it exists. What is there now uses only already-published, already-cleared facts.
- `/about` carries no dates or employer history. Bamidele's own account of the arc (how he
  entered the business, what he owned, what changed) is his to supply, not mine to reconstruct.
- `/writing` is down to one publishable post. Two were placeholder bodies and are now drafts.
- `/audit` and `/mentorship` are still on the old design system.
- Env: Cal.com link (`NEXT_PUBLIC_CAL_LINK`), Resend key (`RESEND_API_KEY`).
