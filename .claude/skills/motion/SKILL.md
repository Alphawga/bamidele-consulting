---
name: motion
description: This project's motion rules — when to animate, how much, and the reduced-motion contract. Read before adding any transition, transform, or animated SVG.
---

Motion here is structural, not decorative. It shows a relationship (fragments converging into
one system), never just adds polish.

- Every animation must have a `prefers-reduced-motion: reduce` fallback. For color/hover
  micro-interactions this means skipping the transition. For the homepage's GSAP scroll
  sequence (`components/homepage/ConsolidationSequence.tsx`) this means not creating a
  `ScrollTrigger` instance at all — render the static end state (grid visible, fragments
  hidden, paper background) and let the page scroll normally past it. A reduced-motion user
  should never get a pinned/scrubbed layout, since pinning itself is a motion behavior.
- **Two different duration models apply, don't conflate them:**
  - Hover/focus micro-interactions and one-shot reveals: 150–250ms for hover, up to ~1.2s for
    a structural reveal. Nothing above ~1.2s in this category.
  - The homepage's pinned scroll sequence is **scroll-distance-driven, not time-driven** — its
    "duration" is however far the user scrolls through the pin (`end: "+=300%"`), not a
    wall-clock value, and the ~1.2s ceiling above does not apply to it. Individual state
    changes within the sequence (the 50% hard-cut, the grid fade-in) do keep to short absolute
    durations (0.15s, 0.3s) as specified in `design copy.md` §3.3.
- No animation on scroll-triggered reveals for ordinary body copy — text should be readable
  immediately, not fade/slide in. The one sanctioned exception is the homepage sequence
  itself, because there the scroll-tied motion *is* the content, not a delivery mechanism for
  it.
- Hover states are color/border changes (see component-states skill), never scale or
  shadow-pop — shadow-based hover states are an AI-slop tell per DESIGN.md.
- GSAP + ScrollTrigger is the only scroll-tied animation library in this project (see
  `design copy.md` §8) — no Lottie, no video, no GIFs, everything is DOM/SVG. Register
  `ScrollTrigger` behind a `typeof window !== "undefined"` guard (module-eval-time, not inside
  a hook) and build sequences with `@gsap/react`'s `useGSAP` hook, not a hand-rolled
  `useEffect` + manual `.kill()` — `useGSAP`'s automatic `gsap.context().revert()` teardown is
  what keeps timelines leak-free across Next.js route navigation and React 18 StrictMode's
  dev-mode double-invoke.
- `will-change: transform` is applied only while an element is actively animating (toggle via
  `onEnter`/`onLeave` or timeline callbacks), never left on permanently.
