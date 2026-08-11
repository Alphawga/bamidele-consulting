import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./HowWeWorkPage.module.css";

const LENSES = [
  {
    title: "How work actually flows",
    body: "Not the version on the org chart. The version where a quote starts on WhatsApp, moves to Excel, gets approved by phone call, and reaches accounts three days later as a photograph.",
  },
  {
    title: "Where information lives",
    body: "Every place a number is kept. When the same figure exists in four places, three of them are wrong and nobody knows which one is right.",
  },
  {
    title: "Where approvals happen",
    body: "Who says yes, on what basis, and how long the business waits for them. This is usually where the owner finds himself.",
  },
  {
    title: "Where things depend on people",
    body: "The staff member who is the only one who knows how something works. Not a discipline problem. A design problem, and it shows up the week they travel.",
  },
  {
    title: "Where errors and rework happen",
    body: "The same correction, made every month, by somebody paid to do something else. Rework is the cheapest leak to find and the most expensive one to leave.",
  },
  {
    title: "Where the owner is still controlling things by hand",
    body: "Quotations, purchasing, invoicing, inventory, approvals. Every one of these still passing through you is a ceiling on how big the business can get.",
  },
  {
    title: "Where technology is missing or misused",
    body: "Sometimes there is no system. More often there are five, bought at different times for different reasons, and none of them talking to each other.",
  },
];

const STEPS = [
  {
    color: "var(--oxblood)",
    tag: "Step 01",
    title: "Agree the workflow",
    body: "We pick the one that is costing you most and we fix its boundaries in writing before anything starts. A diagnostic with no edges becomes a consulting relationship with no end.",
  },
  {
    color: "var(--gold)",
    tag: "Step 02",
    title: "Talk to the people doing it",
    body: "You, and up to two of your staff. One question does most of the work: walk me through yesterday. The gap between your version and theirs is where the money is going.",
  },
  {
    color: "var(--forest)",
    tag: "Step 03",
    title: "Watch a real order move",
    body: "A screen-share where you show me how one actual job moved through the business last week. Not a demo, not a diagram. The real thing, with the workarounds still in it.",
  },
  {
    color: "var(--oxblood)",
    tag: "Step 04",
    title: "Map it and rank it",
    body: "You get the current state written down, and the constraints ranked by what each one costs you monthly. Each fix is marked so you know whether your team can do it or whether it needs a developer.",
  },
  {
    color: "var(--gold)",
    tag: "Step 05",
    title: "The readout",
    body: "An hour where I walk you through all of it. The document is yours forever and you can hand it to anyone. Most of the call is spent on the first three things to fix.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          How we work
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
          Before you buy more software,
          <br />
          <span className={shell.wn}>understand how the business runs.</span>
        </h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Most operations problems get solved by buying something. A new system, another
          subscription, a developer. It usually fails, because the thing being automated was
          never understood in the first place. So we start with the diagnosis, and the
          technology decision comes out of it rather than before it.
        </p>
        <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "how_we_work_hero" }}
          >
            Book a free 20-minute read →
          </TrackedCta>
          <Link href="/offers" className={shell.btnsec}>
            See the offers
          </Link>
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            The frame
          </div>
          <h2 className={styles.h2}>Seven things a diagnostic looks at.</h2>
          <p className={styles.sectionLede}>
            Every engagement asks the same seven questions of the business. The answers differ
            enormously. The questions do not.
          </p>
          <div className={styles.lensList}>
            {LENSES.map((lens, i) => (
              <div key={lens.title} className={styles.lens}>
                <div className={styles.lensNum}>{`0${i + 1}`}</div>
                <div className={styles.lensText}>
                  <h3 className={styles.lensTitle}>{lens.title}</h3>
                  <p className={styles.lensBody}>{lens.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            The work
          </div>
          <h2 className={styles.h2}>What a week of it looks like.</h2>
          <p className={styles.sectionLede}>
            This is the{" "}
            <Link href="/offers#operational-control-diagnostic">
              Operational Control Diagnostic
            </Link>{" "}
            at its smallest scope: one workflow, one week. Larger scopes run the same five steps
            across more of the business.
          </p>
          <div className={styles.stepGrid}>
            {STEPS.map((step) => (
              <div key={step.title} className={`${shell.card} ${styles.step}`}>
                <div className={styles.stepTop} style={{ background: step.color }} />
                <div className={styles.stepTag}>{step.tag}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.ruleBand}>
            <div className={shell.slabel}>
              <SeamMark onDark />
              The rule underneath all of it
            </div>
            <h2 className={styles.ruleBandH}>Technology follows diagnosis. Never the reverse.</h2>
            <p className={styles.ruleBandBody}>
              Sometimes the answer is software. Often it is a process, a control, or one person
              given clear ownership of something. If the diagnostic says you do not need to build
              anything, you will hear that, and the roadmap will be short. You are paying for the
              truth about your operation, not for a big document.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <h2 className={styles.closingH2}>Start with twenty minutes.</h2>
        <p className={styles.closingSub}>
          No charge, no pitch. You describe how work moves through the business, and you leave
          knowing which part to look at first and one thing you can go and check yourself this
          week.
        </p>
        <div className={styles.closingCta}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "how_we_work_closing" }}
          >
            Book the free read →
          </TrackedCta>
        </div>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
