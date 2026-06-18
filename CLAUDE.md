# Bamidele Consulting Site (public) — CLAUDE.md

Public marketing + content site for Bamidele Ajibola, a Lagos technical architect who
consolidates scattered business operations into one intelligent system. The site's one job:
turn a warm referral into a booked call. This is NOT a developer portfolio.

This repo is public and holds only the website and its published content. The content
pipeline and internal workflow live in a separate private ops repo (`bamidele-consulting-ops`).
Keep routine IDs, unpublished ideas, and ops notes OUT of this repo.

## Voice rules (non-negotiable, for ALL copy)

- No em dashes anywhere. Use periods, commas, colons, or brackets.
- No jargon: leverage, streamline, synergy, seamless, solutions, empower, unlock.
- Short, direct sentences. One idea per line where possible.
- No question hooks ("Are you struggling with...").
- Conversational, confident, not salesy. The proof does the selling.
- Nigerian context where natural (Naira, real situations, local tools).
- Never invent result numbers, client names, pricing. Leave `[TO FILL]`.
- Never reword the core line: "I consolidate scattered business operations into one
  intelligent system."

## Stack

- Next.js 14 App Router + TypeScript + Tailwind. MDX via `next-mdx-remote` + `gray-matter`.
- Resend (contact form, mailto fallback). Cal.com embed (booking). Deploy: Vercel.
- No database. Keep it static and fast. Lighthouse target 95+ on mobile.

## Design — "Operations Console"

Tokens in `tailwind.config.ts`: `ink #11243B`, `paper #F7F6F2`, `accent #C2611B`,
`muted #5B6B7B`, `line #E3E1D9`. Fonts: Space Grotesk (display) + Inter (body) + JetBrains
Mono (data labels only). Motifs: subtle dotted grid, mono section labels, hairline dividers,
scattered-to-one visual (`components/ScatteredToOne.tsx`). Reuse `Section`, `SectionLabel`,
`BookButton`, `SiteNav`. One primary CTA everywhere: Book a call.

## Routes

`/` home · `/work` + `/work/[slug]` case studies · `/services` · `/about` · `/book`
(Cal + 5-field form) · `/blog` + `/blog/[slug]` · `/course` (placeholder).
Content in `content/case-studies/*.mdx` and `content/blog/*.mdx` (`draft: true` hides).

## Still to supply ([TO FILL])

Result numbers, client-naming decision, live automation names, pricing, headshot, client
logo, Cal.com link (`NEXT_PUBLIC_CAL_LINK`), Resend key (`RESEND_API_KEY`).
