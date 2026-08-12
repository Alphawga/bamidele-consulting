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
    key: "operational-conversation",
    step: "START HERE",
    color: "var(--oxblood)",
    title: "Operational conversation",
    price: "No charge",
    per: "short introductory conversation",
    tagline: "One real bottleneck, understood before anyone prescribes a solution.",
    body: "Bring an order, purchase, delivery, invoicing or approval problem. We trace the workflow, identify the information and decision handoffs, and decide whether there is a material problem worth taking further.",
    listTitle: "What we establish",
    points: [
      "The workflow that deserves attention first",
      "The teams, records and decisions it crosses",
      "What is known, what is assumed and what needs evidence",
      "Whether a commercial next step is justified",
    ],
    guarantee:
      "This is not a diagnosis, a proposal or a disguised software pitch. It is a focused conversation to decide whether there is a useful reason to continue.",
    cta: "Discuss a bottleneck →",
  },
  {
    key: "paid-definition",
    step: "WHEN FURTHER WORK IS NEEDED",
    color: "var(--gold)",
    title: "Paid definition and scoping",
    price: "Scoped after discovery",
    per: "timing and commercial terms follow the work",
    tagline: "Define the problem and the responsible intervention before committing implementation money.",
    body: "When a material problem needs deeper work before it can be responsibly priced, AlphaWGA maps the current state, clarifies requirements, tests options and creates the specification for the next decision.",
    listTitle: "The definition work can include",
    points: [
      "Process and handoff mapping",
      "Requirements, controls and information ownership",
      "The economics and risks of the available options",
      "A delivery plan, milestones and commercial specification",
      "A clear recommendation, including when AlphaWGA should not deliver it",
    ],
    guarantee: "The scope, price and delivery approach come from the operation we have understood, not from a generic rate card.",
    cta: "Discuss a bottleneck →",
    href: "#operational-conversation",
  },
  {
    key: "implementation",
    step: "WHEN CHANGE IS JUSTIFIED",
    color: "var(--forest)",
    title: "Implementation or advisory",
    price: "Priced to scope",
    per: "only after a delivery and margin plan exists",
    tagline: "Use the intervention the operation needs, not the one a vendor happens to sell.",
    body: "The answer may be process redesign, existing-software configuration, integration, automation, staff training, a small custom tool or a larger implementation. AlphaWGA recommends and delivers only what the discovered problem justifies.",
    listTitle: "Every engagement requires",
    points: [
      "A named sponsor and decision owner",
      "Defined milestones and delivery owners",
      "Cash collection before substantial delivery cost",
      "A direct-delivery-cost, gross-profit and founder-hours view",
      "A plan for adoption, controls and operational handover",
    ],
    guarantee:
      "Custom software is never assumed. If existing tools, process change or another provider are better, that is the recommendation.",
    cta: "Discuss a bottleneck →",
    href: "#operational-conversation",
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
          The operation decides
          <br />
          <span className={shell.wn}>what needs to change.</span>
        </h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          AlphaWGA does not begin with a software recommendation or a public rate card. We first
          understand how work, money and information move through the business.
        </p>
        <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "offers_hero" }}
          >
            Discuss a bottleneck →
          </TrackedCta>
        </div>
      </header>

      <section className={styles.body}>
        <div className={`${shell.card} ${styles.rungBand}`}>
          <div className={styles.rungBandText}>
            <div className={`${shell.slabel} ${styles.rungBandLabel}`}>
              <SeamMark />
              START HERE · AN OPERATIONAL CONVERSATION · NO CHARGE
            </div>
            Start with one real workflow.
            <br />
            <br />
            You describe how one order, purchase, delivery, invoice or approval moves through the
            business. We identify the handoffs, exceptions, information gaps and management
            interventions that need attention.
            <br />
            <br />
            If deeper work is justified, AlphaWGA will define its scope, timing and commercial terms
            from what is discovered. If it is not, that will be said plainly.
          </div>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "offers_rung_band" }}
          >
            Discuss a bottleneck →
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
            The same question governs every engagement: what change is justified by the operation,
            its economics and its delivery reality? AlphaWGA may recommend process redesign,
            existing software, integration, automation, training or custom software. The
            <Link href="/okoh"> Okoh work</Link> is hands-on experience, not a reason to prescribe
            an ERP to every business.
          </p>
        </div>
      </section>

      <section className={styles.scorecardBand}>
        <p className={styles.scorecardText}>
          Prefer to understand the approach before talking? See how AlphaWGA investigates a real
          operational problem.
        </p>
        <Link href="/how-we-work" className={shell.btnsec}>
          See how we work →
        </Link>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
