# Bamidele Consulting Site — CLAUDE.md

Marketing + content site for Bamidele Ajibola, a Lagos technical architect who consolidates
scattered business operations into one intelligent system. The site's one job: turn a warm
referral into a booked call. This is NOT a developer portfolio.

## Conversation rule

Align before building (PM-first): for anything beyond a small copy or style tweak, present
understanding + files to change + plan, and wait for confirmation.

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
Mono (data labels only). Motifs: subtle dotted grid, mono section labels (`01 / THE
PROBLEM`), hairline dividers, scattered-to-one visual (`components/ScatteredToOne.tsx`).
Reuse `Section`, `SectionLabel`, `BookButton`. One primary CTA everywhere: Book a call.

## Routes

`/` home · `/work` + `/work/[slug]` case studies · `/services` · `/about` · `/book`
(Cal + 5-field form) · `/insights` + `/insights/[slug]` · `/course` (placeholder).
Content lives in `content/case-studies/*.mdx` and `content/insights/*.mdx`.

## The flywheel

- `content/backlog.md` is the content inbox. Work and meetings drop one-line seeds here.
- `content-engine` skill (global): seed → drafted MDX in Bamidele's voice.
- `workflow-scout` skill (global): monthly, web-researches improvements and proposes diffs
  to this CLAUDE.md and the global one. Proposes, never edits silently.
- Stop hook `.claude/hooks/content-capture.sh` nudges to log a seed when site files change.

## Still to supply ([TO FILL])

Result numbers, client-naming decision, live automation names, pricing, headshot, client
logo, Cal.com link (`NEXT_PUBLIC_CAL_LINK`), Resend key (`RESEND_API_KEY`).
