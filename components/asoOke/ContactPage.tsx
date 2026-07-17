import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./ContactPage.module.css";

const FACTS = [
  { k: "Based in", v: "Lagos, Nigeria" },
  { k: "Response", v: "Within 24 hours, business days" },
  { k: "Diagnostic fee", v: "₦10,000, comes off your Systems Audit price within 7 days" },
  { k: "Best for", v: "Procurement, supply chain, oil and gas services" },
];

export default function ContactPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={styles.left}>
          <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
            <SeamMark />
            Contact
          </div>
          <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
            Bring the tangle.
            <br />
            <span className={shell.wn}>Leave with a thread.</span>
          </h1>
          <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
            The fastest way in is the ₦10K diagnostic call. One session, and you keep the map.
            For everything else, a plain email works.
          </p>
          <div className={`${styles.ctaStack} ${shell.rise} ${shell.riseD}`}>
            <TrackedCta
              href={alphawga.calDiagnosticUrl}
              className={shell.btnp}
              event="diagnostic_cta_click"
              data={{ location: "contact_hero" }}
            >
              Book the ₦10K diagnostic →
            </TrackedCta>
            <a href={`mailto:${alphawga.email}`} className={styles.emailLink}>
              {alphawga.email}
            </a>
          </div>
        </div>

        <div className={`${styles.right} ${shell.rise} ${shell.riseC}`}>
          {FACTS.map((fact) => (
            <div key={fact.k} className={`${shell.card} ${styles.factCard}`}>
              <span className={styles.factKey}>{fact.k}</span>
              <span className={styles.factVal}>{fact.v}</span>
            </div>
          ))}
          <div className={styles.tipCard}>
            <div className={styles.tipLabel}>Before you write</div>
            <p className={styles.tipBody}>
              Come with one number in mind: what a typical order is worth to you. Everything we
              find gets priced against it.
            </p>
          </div>
        </div>
      </header>

      <section className={styles.quoteSection}>
        <p className={styles.quoteline}>
          &ldquo;Bible before work. <b>The list before the code.</b>&rdquo;
        </p>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
