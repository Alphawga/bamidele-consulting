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
    key: "operational-control-diagnostic",
    step: "STEP TWO",
    color: "var(--oxblood)",
    title: "Operational Control Diagnostic",
    price: "₦100,000",
    per: "1 week",
    tagline: "One workflow, taken apart and understood, in a week.",
    body: "We agree on the workflow that is costing you most before anything starts. You walk away with a written map of how that work actually moves through your business today, the constraints ranked by what they cost, and the 30 days of actions that follow from it.",
    listTitle: "What's inside",
    points: [
      "One high-risk workflow, scoped and agreed before we start",
      "Interviews with you and up to two of your staff",
      "A review of every tool that workflow touches",
      "The current-state map: how the work moves today, not how it is supposed to",
      "The constraints, named and ranked by what each one costs you",
      "30-day actions, each marked \"your team can do this\" or \"needs a developer\"",
      "A readout call where I walk you through every finding",
    ],
    guarantee:
      "You get a written deliverable, never an hour of my time. The document is yours forever and you can execute it with anyone. If the workflow turns out healthier than you feared, I will say so and the actions list will be short.",
    cta: "Start with the free read →",
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
    cta: "Begins after a diagnostic →",
    href: "#operational-control-diagnostic",
  },
  {
    key: "consolidation-build",
    step: "STEP FOUR",
    color: "var(--forest)",
    title: "Consolidation Build",
    price: "₦2M to 4M",
    per: "6 to 10 weeks",
    tagline: "I don't just tell you what to build. I build it, and it works before I hand it back.",
    body: "Blueprints usually die at implementation, not because the plan was wrong but because nobody senior was watching. This is the version where the person who found the leaks is the one who closes them, inside your operation, with working software at the end instead of a document somebody else has to interpret.",
    listTitle: "What's inside",
    points: [
      "The same process mapping and future-state design as the Blueprint, or your existing one reused",
      "Built inside your operation, against how your people actually work",
      "A working demo every week, same day and time, so progress is never a black box",
      "About six weeks for a single department, about ten for a full operation",
      "Payment in three parts: 30% to start, 30% at a working midpoint demo, 40% at handover",
    ],
    guarantee:
      "If you already have a developer or a team who can build it, buy the Blueprint instead and let them. I will tell you that in the conversation rather than after you have paid.",
    afterNote: "Sign within 30 days of Blueprint handover and 20% of the Blueprint fee comes off the Build.",
    cta: "Begins after a diagnostic →",
    href: "#operational-control-diagnostic",
  },
  {
    key: "systems-advisor",
    step: "STEP FIVE",
    color: "var(--oxblood)",
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
    cta: "Start with the free read →",
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
          That is the result. It starts with a free conversation, and every step after it earns
          the next. No retainers you can&apos;t explain to your accountant.
        </p>
        <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "offers_hero" }}
          >
            Book a free 20-minute read →
          </TrackedCta>
        </div>
      </header>

      <section className={styles.body}>
        <div className={`${shell.card} ${styles.rungBand}`}>
          <div className={styles.rungBandText}>
            <div className={`${shell.slabel} ${styles.rungBandLabel}`}>
              <SeamMark />
              STEP ONE · A 20-minute read · Free
            </div>
            Twenty minutes on how your business actually runs.
            <br />
            <br />
            You describe how work moves through the business. I tell you which part I would look
            at first and why, and give you one thing you can go and check yourself this week.
            <br />
            <br />
            If a full diagnostic is worth doing after that, I will tell you what it costs. If it
            isn&apos;t, I will tell you that too.
          </div>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "offers_rung_band" }}
          >
            Book the free read →
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
            Sometimes the fix is software and sometimes it is not. The diagnostic is what tells
            you which, and it is the same answer whether or not I am the one who builds it.
            The <Link href="/okoh">Okoh build</Link> is the clearest evidence of what happens
            when the diagnosis comes first.
          </p>
        </div>
      </section>

      <section className={styles.scorecardBand}>
        <p className={styles.scorecardText}>
          Not ready to pay anything yet. Take the free self-audit and find your leaks in 10
          minutes, on your own.
        </p>
        <Link href="/scorecard" className={shell.btnsec}>
          Take the free self-audit →
        </Link>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
