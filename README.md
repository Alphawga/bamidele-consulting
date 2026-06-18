# Bamidele Ajibola — Consulting Site

A fast, credible, conversion-focused site for a Lagos technical consultant who consolidates
scattered business operations into one intelligent system. Built to turn a warm referral
into a booked call.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS, design direction "Operations Console" (deep navy, warm off-white, amber CTA)
- MDX content via `next-mdx-remote` + `gray-matter` (no database)
- Resend for the contact form (mailto fallback when no key)
- Cal.com embed for booking
- Deploy target: Vercel

## Run

```bash
npm install
cp .env.example .env.local   # fill in values when ready
npm run dev                  # http://localhost:3000
npm run build                # production build
```

Nothing is blocked by missing values. Without `RESEND_API_KEY` the form falls back to a
mailto handoff. Without `NEXT_PUBLIC_CAL_LINK` the booking page shows a placeholder.

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Home. Hero, problem, shift, proof, how it works, who, CTA |
| `/work`, `/work/[slug]` | Case studies (MDX in `content/case-studies/`) |
| `/services` | Three offers |
| `/about` | Story |
| `/book` | Cal.com embed + 5-field qualifying form |
| `/blog`, `/blog/[slug]` | Blog (MDX in `content/blog/`) |
| `/course` | Placeholder for the AI automation course |

## Content

- Case studies: add an `.mdx` file to `content/case-studies/` with frontmatter
  (`title`, `summary`, `date`, `client`, `outcome`).
- Blog: add an `.mdx` file to `content/blog/` with `title`, `summary`, `date`, `author`.
  Set `draft: true` to hide it.

This is the public site repo. The content pipeline (idea backlog, daily radar) and the
automation that feeds it live in a separate private ops repo. Finished posts are added here
when they are ready to publish.

## Voice rules for all copy

No em dashes. No jargon (leverage, streamline, synergy, seamless, solutions, empower,
unlock). Short, direct sentences. No question hooks. Confident, not salesy. Nigerian
context. Never invent result numbers; leave `[TO FILL]`.

## Still to supply ([TO FILL])

Result numbers, client-naming decision, live automation names, pricing, headshot, client
logo, Cal.com link, Resend API key.
