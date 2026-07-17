import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./OffersPage.module.css";

const OFFERS = [
  {
    key: "systems-audit",
    step: "STEP TWO",
    color: "var(--oxblood)",
    title: "Systems Audit",
    price: "₦250,000",
    per: "14 days",
    tagline: "Every leak in your operation, found and costed in 14 days.",
    body: "You walk away knowing exactly what the chaos costs your business every month, in one number, plus the order to fix things in, so the cheap fixes fund the bigger ones.",
    listTitle: "What's inside",
    points: [
      "Two weeks inside your operation",
      "Interviews with your key staff: the one who quotes, the one who tracks orders, the one who chases money",
      "A walkthrough of how one real order actually moves through your business",
      "The Leak Map: every leak, its cause, its monthly naira cost",
      "The Cost of Chaos: one number for what the mess costs you monthly",
      "The Roadmap: fixes in order, each marked \"your team can do this\" or \"needs a developer\"",
      "A 60-minute call where I walk you through every finding",
      "A designed report you can put in front of your partners",
    ],
    guarantee:
      "The report is yours forever, execute it with anyone. And if the audit shows your operation is healthier than you feared, I will say so and shrink the roadmap. You pay for the truth, not for a big document.",
    afterNote: "I take 2 audits per month.",
    cta: "Start with the diagnostic →",
  },
  {
    key: "consolidation-blueprint",
    step: "STEP THREE",
    color: "var(--gold)",
    title: "Consolidation Blueprint",
    price: "₦750K to 1.5M",
    per: "4 to 6 weeks",
    tagline: "Your future operation, designed so it gets built right the first time.",
    body: "You walk away with the complete design of your new operation: every process mapped, every tool chosen with its real naira cost, and a build plan written so any good developer builds it correctly, no false starts, no money burnt on rebuilds.",
    listTitle: "What's inside",
    points: [
      "Your operation mapped end to end, today and future state",
      "Tool choices with costs and reasons: use this because of this, it costs about this monthly",
      "Exactly what information lives where, and who owns it",
      "A build plan any good developer can follow without meeting me",
      "A vendor shortlist with the questions to ask before you pay anyone",
      "30 days of WhatsApp support so the plan does not die in a drawer",
    ],
    guarantee: "If a good developer cannot build from my plan, I work with them until they can, at no extra cost.",
    cta: "Begins after an audit →",
    href: "#systems-audit",
  },
  {
    key: "systems-advisor",
    step: "STEP FOUR",
    color: "var(--forest)",
    title: "Systems Advisor",
    price: "₦300,000",
    per: "per month, minimum 3 months",
    tagline: "A senior systems head on your team for less than a junior developer's salary.",
    body: "You stop making systems decisions alone. Every vendor quote, developer invoice, and tool choice gets reviewed before your money moves. Each month you get a one-page report: what improved, what is stuck, what happens next.",
    listTitle: "What's inside",
    points: [
      "Two strategy calls every month",
      "WhatsApp access, answers within 24 hours on business days",
      "Everything systems-related reviewed before you commit",
      "The monthly report that shows what you are paying for",
    ],
    guarantee:
      "Cancel with 30 days notice. If the monthly report cannot justify the fee, you will both know it and be free to act on it.",
    afterNote: "I take only four advisory clients at a time.",
    cta: "Start with the diagnostic →",
  },
];

export default function OffersPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={`${shell.container} ${styles.header}`}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Offers
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
          A business that
          <br />
          <span className={shell.wn}>runs without you.</span>
        </h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          That is the result. Four steps get you there. The first costs ₦10K, and every step
          earns the next. No retainers you can&apos;t explain to your accountant.
        </p>
      </header>

      <section className={styles.body}>
        <div className={`${shell.card} ${styles.rungBand}`}>
          <div className={styles.rungBandText}>
            <div className={`${shell.slabel} ${styles.rungBandLabel}`}>
              <SeamMark />
              STEP ONE · Diagnostic Call · ₦10,000
            </div>
            Your most expensive leak, found and costed in one call.
            <br />
            <br />
            You walk away knowing the single place your business loses the most money every
            month, the naira figure attached to it, and two fixes you can apply the same week
            without paying anyone.
            <br />
            <br />
            Your ₦10K comes off the audit price if you book within 7 days.
          </div>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "offers_rung_band" }}
          >
            Book the diagnostic →
          </TrackedCta>
        </div>

        <div className={styles.grid}>
          {OFFERS.map((offer) => (
            <div key={offer.title} id={offer.key} className={`${shell.card} ${styles.card}`}>
              <div className={styles.cardTop} style={{ background: offer.color }} />
              <div className={styles.tag}>{offer.step}</div>
              <h3 className={styles.title}>{offer.title}</h3>
              <div className={styles.price}>{offer.price}</div>
              <div className={styles.per}>{offer.per}</div>
              <p className={styles.body2}>
                {offer.tagline} {offer.body}
              </p>
              <div className={styles.tag}>{offer.listTitle}</div>
              {offer.points.map((point) => (
                <div key={point} className={styles.point}>
                  <span className={styles.chip} style={{ background: offer.color }} />
                  {point}
                </div>
              ))}
              <p className={styles.footnote}>{offer.guarantee}</p>
              {offer.afterNote && <p className={styles.footnote}>{offer.afterNote}</p>}
              <TrackedCta
                href={offer.href ?? alphawga.calDiagnosticUrl}
                className={`${shell.btnfill} ${styles.cta}`}
                event="offers_card_click"
                data={{ offer: offer.key }}
              >
                {offer.cta}
              </TrackedCta>
            </div>
          ))}
        </div>

        <div className={styles.footnotes}>
          <p className={styles.footnote}>
            Sometimes the fix is software, not advice. We built Okoh ERP, and it runs a live
            procurement operation today. If your audit shows you need it, we will tell you.
            See it on the <Link href="/products">Products page</Link>.
          </p>
        </div>
      </section>

      <section className={styles.scorecardBand}>
        <p className={styles.scorecardText}>
          Not ready to pay anything yet. Take the free self-audit and find your leaks in 10
          minutes.
        </p>
        <Link href="/scorecard" className={shell.btnsec}>
          Take the free self-audit →
        </Link>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
