"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { track } from "@vercel/analytics";
import { gsap, ScrollTrigger } from "@/lib/motion/gsap";
import { useReducedMotion } from "@/lib/motion/useReducedMotion";
import { alphawga } from "@/lib/alphawga";
import AsoOkeNav from "@/components/asoOke/AsoOkeNav";
import AsoOkeFooter from "@/components/asoOke/AsoOkeFooter";
import SeamMark from "@/components/asoOke/SeamMark";
import TrackedCta from "@/components/asoOke/TrackedCta";
import styles from "./AsoOkeHome.module.css";

const STRIPS = [
  { label: "Accounts", op: styles.op1, dark: false },
  { label: "Inventory", op: styles.op2, dark: true },
  { label: "Procurement", op: styles.op3, dark: false },
  { label: "Logistics", op: styles.op4, dark: false },
  { label: "Payroll & HR", op: styles.op5, dark: true },
  { label: "Reporting", op: styles.op6, dark: false },
];

const OFFER_CARDS = [
  {
    color: "var(--oxblood)",
    title: "Systems Audit",
    price: "₦250,000",
    body: "Two weeks inside your operation. You get the leak map, the cost of chaos number, and the fix-it-in-this-order roadmap.",
    href: "/offers#systems-audit",
    cta: "See the Systems Audit →",
  },
  {
    color: "var(--gold)",
    title: "Consolidation Blueprint",
    price: "₦750K to 1.5M",
    body: "The full design of your future operation. Every process mapped, every tool chosen with real naira costs, a build plan any good developer can follow.",
    href: "/offers#consolidation-blueprint",
    cta: "See the Blueprint →",
  },
  {
    color: "var(--forest)",
    title: "Systems Advisor",
    price: "₦300,000/month",
    body: "A senior systems head on your leadership team for less than a junior developer's salary. I take only four advisory clients at a time.",
    href: "/offers#systems-advisor",
    cta: "See the Advisor role →",
  },
];

const FITS = [
  {
    title: "Procurement & supply chain firms",
    body: "Quotes in Excel, POs on email, deliveries tracked on WhatsApp. You need one record from quotation to cash, with nothing falling through.",
  },
  {
    title: "Oil & gas service companies",
    body: "Compliance-heavy operations where a missed document costs a contract. Okoh ERP was built for exactly this.",
  },
  {
    title: "Growing ops teams (10–200 staff)",
    body: "Big enough that the patchwork hurts, small enough that a ready-made ERP would drown you. Exactly who we build one system that holds for.",
  },
];

// easeOutBack — lands with a lively overshoot, not a hard stop
function spring(t: number, c1 = 1.7) {
  t = Math.min(Math.max(t, 0), 1);
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
function ease(t: number) {
  const c = Math.min(Math.max(t, 0), 1);
  return 1 - Math.pow(1 - c, 3);
}

export default function AsoOkeHome() {
  const reduced = useReducedMotion();

  const rootRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const weaveWrapRef = useRef<HTMLElement>(null);
  const joinedRef = useRef<HTMLDivElement>(null);
  const stripRefs = useRef<Array<HTMLDivElement | null>>([]);
  const nameRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const proofWrapRef = useRef<HTMLElement>(null);
  const proofCardRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const workCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useGSAP(
    () => {
      const rvEls = gsap.utils.toArray<HTMLElement>(`.${styles.rv}`);

      if (reduced) {
        gsap.set(rvEls, { opacity: 1, y: 0 });
        if (joinedRef.current) gsap.set(joinedRef.current, { opacity: 1, y: 0 });
        stripRefs.current.forEach((row, i) => {
          if (!row) return;
          const mid = (STRIPS.length - 1) / 2;
          gsap.set(row, { x: 0, y: (mid - i) * 0.58, scaleY: 0.58, opacity: 1 });
          const name = nameRefs.current[i];
          if (name) gsap.set(name, { opacity: 0 });
        });
        if (proofCardRef.current) gsap.set(proofCardRef.current, { scale: 1, borderRadius: 0 });
        countRefs.current.forEach((el) => {
          if (el) el.textContent = el.dataset.to ?? "0";
        });
        return;
      }

      // Reveal-on-scroll
      rvEls.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 34 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      // Count-up stats
      countRefs.current.forEach((el) => {
        if (!el) return;
        const to = parseInt(el.dataset.to ?? "0", 10);
        const counter = { val: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(counter, {
              val: to,
              duration: 1.4,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = String(Math.round(counter.val));
              },
            }),
        });
      });

      // Selvedge band drift
      if (bandRef.current) {
        ScrollTrigger.create({
          trigger: document.documentElement,
          start: 0,
          end: "max",
          onUpdate: (self) => {
            if (bandRef.current) {
              bandRef.current.style.backgroundPositionX = `${(self.scroll() * 0.25).toFixed(1)}px`;
            }
          },
        });
      }

      // Weave scene — pinned, scrubbed strip choreography
      if (weaveWrapRef.current) {
        const rows = stripRefs.current.filter((r): r is HTMLDivElement => !!r);
        const h = rows[0]?.offsetHeight ?? 52;
        const gap = 14;
        const mid = (STRIPS.length - 1) / 2;

        ScrollTrigger.create({
          trigger: weaveWrapRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const p = self.progress;
            const m = ease((p - 0.62) / 0.28);
            const s = 1 - 0.42 * m;
            const stepClose = (gap + h * (1 - s)) * m;

            rows.forEach((row, i) => {
              const t = Math.min(Math.max((p - 0.02 - i * 0.075) / 0.26, 0), 1);
              const e = spring(t, 1.9);
              const dir = i % 2 ? 1 : -1;
              const amp = Math.min(110, window.innerWidth * 0.16);
              const tx = dir * amp * (1 - e);
              const ty = (mid - i) * stepClose;
              row.style.opacity = String(Math.min(Math.max(t / 0.25, 0), 1));
              row.style.transform = `translate(${tx}px,${ty}px) scaleY(${s})`;
              const name = nameRefs.current[i];
              if (name) {
                name.style.opacity = String(1 - m);
                name.style.transform = `scaleY(${1 / s})`;
              }
            });

            if (joinedRef.current) {
              const jc = Math.min(Math.max(spring((p - 0.86) / 0.14), 0), 1);
              joinedRef.current.style.opacity = String(jc);
              joinedRef.current.style.transform = `translateY(${14 * (1 - jc)}px)`;
            }
          },
        });
      }

      // Proof section — pinned scale-reveal
      if (proofWrapRef.current && proofCardRef.current) {
        ScrollTrigger.create({
          trigger: proofWrapRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const p = ease(self.progress / 0.5);
            if (proofCardRef.current) {
              proofCardRef.current.style.transform = `scale(${0.85 + 0.15 * p})`;
              proofCardRef.current.style.borderRadius = `${30 * (1 - p)}px`;
            }
          },
        });
      }

      const coarse = window.matchMedia("(pointer: coarse)").matches;
      if (coarse) return;

      // Hero portrait tilt
      const tilt = tiltRef.current;
      if (tilt) {
        const onMove = (ev: PointerEvent) => {
          const r = tilt.getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          tilt.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
          if (shineRef.current) shineRef.current.style.opacity = "1";
        };
        const onLeave = () => {
          tilt.style.transition = "transform .6s cubic-bezier(.22,.61,.21,1)";
          tilt.style.transform = "rotateY(0) rotateX(0)";
          if (shineRef.current) shineRef.current.style.opacity = "0";
          setTimeout(() => {
            tilt.style.transition = "";
          }, 600);
        };
        tilt.addEventListener("pointermove", onMove);
        tilt.addEventListener("pointerleave", onLeave);
      }

      // Work cards 3D hover
      workCardRefs.current.forEach((card) => {
        if (!card) return;
        const onMove = (ev: PointerEvent) => {
          const r = card.getBoundingClientRect();
          const x = (ev.clientX - r.left) / r.width - 0.5;
          const y = (ev.clientY - r.top) / r.height - 0.5;
          card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
          card.style.boxShadow = "0 30px 50px -26px rgba(28,25,22,.4)";
        };
        const onLeave = () => {
          card.style.transform = "";
          card.style.boxShadow = "";
        };
        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", onLeave);
      });
    },
    { scope: rootRef, dependencies: [reduced] }
  );

  return (
    <div ref={rootRef} className={styles.root}>
      <div ref={bandRef} className={styles.sband} />

      <AsoOkeNav />

      <header className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroText}>
          <div className={`${styles.slabel} ${styles.r3} ${styles.r3a}`}>
            <SeamMark />
            Lagos, Nigeria · Operations consultancy · Procurement & oil and gas
          </div>
          <h1 className={styles.hdisp}>
            <span className={`${styles.r3} ${styles.r3b}`}>Woven,</span>
            <span className={`${styles.wn} ${styles.r3} ${styles.r3c}`}>not patched.</span>
          </h1>
          <p className={`${styles.ledes} ${styles.r3} ${styles.r3d}`} style={{ maxWidth: 600 }}>
            I&apos;m Bamidele Ajibola. Right now you are the operating system of your business.
            Every quote, every delivery, every follow-up passes through your head, and it leaks
            money in places you can&apos;t see. AlphaWGA finds the leaks, puts a naira cost on
            each one, and designs the operation that runs without you. It starts with one call.
          </p>
          <div className={`${styles.heroCtas} ${styles.r3} ${styles.r3d}`}>
            <a
              href={alphawga.calDiagnosticUrl}
              className={styles.btnp}
              onClick={() => track("diagnostic_cta_click", { location: "home_hero" })}
            >
              Book the ₦10K diagnostic →
            </a>
            <Link
              href="/scorecard"
              className={styles.btnsec}
              onClick={() => track("scorecard_link_click", { location: "home_hero" })}
            >
              Take the free self-audit
            </Link>
          </div>
          <p className={`${styles.heroProof} ${styles.r3} ${styles.r3d}`}>
            Currently running the operations system behind a Lagos procurement firm serving
            500+ clients.
          </p>
        </div>
        <div ref={tiltRef} className={styles.tiltcard}>
          <div className={styles.tiltInner}>
            <Image
              src="/images/portrait.jpg"
              alt="Bamidele Ajibola, portrait"
              fill
              sizes="(max-width: 720px) 80vw, 420px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className={styles.tiltframe} />
          <div ref={shineRef} className={styles.shine} />
        </div>
      </header>

      <section className={styles.weavewrap} id="weave" ref={weaveWrapRef}>
        <div className={styles.weavestick}>
          <div className={styles.container}>
            <div className={styles.slabel} style={{ marginBottom: 14 }}>
              <SeamMark />
              What I weave
            </div>
            <h2 className={styles.h2s} style={{ maxWidth: 820, fontSize: "min(52px, 4.6vh)" }}>
              Six operations. <span className={styles.wn}>One cloth.</span>
            </h2>
            <div className={styles.stripstack}>
              {STRIPS.map((strip, i) => (
                <div
                  key={strip.label}
                  ref={(el) => {
                    stripRefs.current[i] = el;
                  }}
                  className={`${styles.striperow} ${strip.op}`}
                >
                  <span
                    ref={(el) => {
                      nameRefs.current[i] = el;
                    }}
                    className={`${styles.stripname} ${strip.dark ? styles.darkText : ""}`}
                  >
                    {strip.label}
                  </span>
                </div>
              ))}
            </div>
            <div ref={joinedRef} className={styles.joined} style={{ marginTop: "min(26px, 2.2vh)" }}>
              <div className={`${styles.striplbl} ${styles.joinedCaption}`}>
                One system. The seams become the pattern.
              </div>
            </div>
            <p className={styles.scrollhint}>Keep scrolling. Six strips, one cloth</p>
          </div>
        </div>
      </section>

      <section className={styles.proofwrap} id="proof" ref={proofWrapRef}>
        <div className={styles.proofstick}>
          <div ref={proofCardRef} className={styles.proofcard}>
            <div className={styles.proofthreads} />
            <div className={styles.container} style={{ position: "relative" }}>
              <div className={styles.slabel}>
                <SeamMark onDark />
                The proof
              </div>
              <h2 className={styles.h2s} style={{ maxWidth: 900 }}>
                Okoh ERP: 500+ clients moved off QuickBooks, SeamlessHR, Excel, Trello and
                WhatsApp.
              </h2>
              <p className={styles.bodys} style={{ maxWidth: 700, marginTop: 24 }}>
                A full ERP for an oil and gas procurement firm. Procurement, logistics, accounts,
                inventory, payroll and HR, reporting. Every strip of the operation, woven onto
                one loom.
              </p>
              <div className={styles.statrow}>
                <div>
                  <div className={styles.statv}>
                    <span
                      ref={(el) => {
                        countRefs.current[0] = el;
                      }}
                      data-to="500"
                    >
                      0
                    </span>
                    +
                  </div>
                  <div className={styles.statl}>clients on one system</div>
                </div>
                <div>
                  <div className={styles.statv}>
                    <span
                      ref={(el) => {
                        countRefs.current[1] = el;
                      }}
                      data-to="5"
                    >
                      0
                    </span>
                  </div>
                  <div className={styles.statl}>tools retired</div>
                </div>
                <div>
                  <div className={styles.statv}>
                    <span
                      ref={(el) => {
                        countRefs.current[2] = el;
                      }}
                      data-to="6"
                    >
                      0
                    </span>
                    +
                  </div>
                  <div className={styles.statl}>modules, one source of truth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.container} ${styles.sec}`} id="work">
        <div className={`${styles.slabel} ${styles.rv}`}>
          <SeamMark />
          The work
        </div>
        <p className={`${styles.qualifier} ${styles.rv}`}>
          Four steps, from a ₦10,000 call to a senior systems head on your team. Start
          wherever makes sense.
        </p>
        <div className={styles.pathgrid}>
          {OFFER_CARDS.map((offer, i) => (
            <div
              key={offer.title}
              ref={(el) => {
                workCardRefs.current[i] = el;
              }}
              className={`${styles.pathcard} ${styles.rv} ${
                i === 0 ? styles.dl1 : i === 1 ? styles.dl2 : styles.dl3
              }`}
            >
              <div className={styles.pathtop} style={{ background: offer.color }} />
              <h3 className={styles.h3s}>{offer.title}</h3>
              <div className={styles.offerPrice}>{offer.price}</div>
              <p className={styles.bodys} style={{ fontSize: 16.5 }}>
                {offer.body}
              </p>
              <p className={styles.pathlink}>
                <Link href={offer.href}>{offer.cta}</Link>
              </p>
            </div>
          ))}
        </div>
        <p className={`${styles.pathlink} ${styles.rv}`} style={{ marginTop: 36 }}>
          <Link href="/offers" className={styles.btnsec}>
            See all offers →
          </Link>
        </p>
      </section>

      <section className={styles.closingBand}>
        <h2 className={styles.closingH2}>Start with the ₦10K diagnostic.</h2>
        <p className={styles.closingSub}>
          It comes off your Systems Audit price if you book within 7 days.
        </p>
        <TrackedCta
          href={alphawga.calDiagnosticUrl}
          className={`${styles.btngold} ${styles.closingCta}`}
          event="diagnostic_cta_click"
          data={{ location: "home_closing" }}
        >
          Book the diagnostic →
        </TrackedCta>
      </section>

      <section className={`${styles.container} ${styles.sec}`} id="who-for">
        <div className={`${styles.slabel} ${styles.rv}`}>
          <SeamMark />
          Who this is for
        </div>
        <p className={`${styles.qualifier} ${styles.rv}`}>
          Best fit: operations doing ₦5M+ monthly where the leaks are already costing real
          money.
        </p>
        <div className={styles.fitList}>
          {FITS.map((fit, i) => (
            <div
              key={fit.title}
              className={`${styles.fitRow} ${styles.rv} ${
                i === 0 ? styles.dl1 : i === 1 ? styles.dl2 : styles.dl3
              }`}
            >
              <div className={styles.fitNum}>{`0${i + 1}`}</div>
              <h3 className={`${styles.h3s} ${styles.fitRowTitle}`}>{fit.title}</h3>
              <p className={styles.fitRowBody}>{fit.body}</p>
            </div>
          ))}
        </div>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
