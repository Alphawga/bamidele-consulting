"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registration touches `window` at module-eval time, before any hook runs,
// so it needs its own guard separate from the SSR-safety inside useGSAP.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
