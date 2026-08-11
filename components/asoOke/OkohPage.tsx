import Image from "next/image";
import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./OkohPage.module.css";

const STATS = [
  { v: "500+", l: "clients on one system" },
  { v: "5", l: "tools retired" },
  { v: "4", l: "years, and a second build" },
];

const ARC = [
  {
    marker: "Before",
    title: "Five tools, none of them talking",
    body: "A procurement and supply operation in oil and gas, with real volume and real money moving. QuickBooks held some of the accounting. Spreadsheets held quotes and stock. WhatsApp held orders and updates. Paper held the warehouse. Trello held whatever was left. Nobody could answer a simple question quickly: what did this client order, what is in the warehouse right now, what have we been paid, what is late.",
  },
  {
    marker: "The years before",
    title: "I was inside the business first",
    body: "This did not start with a brief. It started with years of watching where the operation actually broke, from inside it. That is why the first version fixed the right things. Not because the software was clever, but because the problem was already understood before a line of it was written.",
  },
  {
    marker: "v1",
    title: "One system, sourcing to delivery",
    body: "Quotations, orders, purchasing, the warehouse, shipping, clients, staff, and the money underneath all of it, in one place. A number entered once flows everywhere it is needed. When goods are received, the accounting posts itself. The operation and the money stopped being two separate systems reconciled at month end.",
  },
  {
    marker: "Then",
    title: "It ran the business for years",
    body: "Not a pilot, not a demo. The live operating system of a working company, used every day by people whose jobs depended on it being right. That is the part most software never earns.",
  },
  {
    marker: "v2",
    title: "They came back to extend it, not replace it",
    body: "Two years after the first version shipped, the client returned to build the next one on the same foundation. A repeat purchase from a business that had lived with the first version for years is the only software review that means anything.",
  },
];

export default function OkohPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Case study
        </div>
        <Image
          src="/images/okoh-erp-logo.png"
          alt="Okoh ERP System"
          width={215}
          height={38}
          className={`${styles.clientLogo} ${shell.rise} ${shell.riseA}`}
          priority
        />
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
          We did not start with software.
          <br />
          <span className={shell.wn}>We started with the business.</span>
        </h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Okoh is a Lagos procurement and supply operation serving oil and gas. Its business ran
          on five disconnected tools until it ran on one system instead. Four years later the
          same client came back and bought the second version.
        </p>
        <div className={`${styles.statRow} ${shell.rise} ${shell.riseD}`}>
          {STATS.map((stat) => (
            <div key={stat.l}>
              <div className={styles.statV}>{stat.v}</div>
              <div className={styles.statL}>{stat.l}</div>
            </div>
          ))}
        </div>
      </header>

      <section className={styles.body}>
        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            How it went
          </div>
          <h2 className={styles.h2}>The order things happened in.</h2>
          <div className={styles.arc}>
            {ARC.map((step) => (
              <div key={step.title} className={styles.arcRow}>
                <div className={styles.arcYear}>{step.marker}</div>
                <div className={styles.arcText}>
                  <h3 className={styles.arcTitle}>{step.title}</h3>
                  <p className={styles.arcBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={shell.slabel}>
            <SeamMark />
            Before and after
          </div>
          <h2 className={styles.h2}>What actually changed.</h2>
          <div className={styles.beforeAfter}>
            <div className={`${shell.card} ${styles.baCard}`}>
              <div className={styles.baTop} style={{ background: "var(--oxblood)" }} />
              <div className={styles.baLabel}>Before</div>
              <p className={styles.baBody}>
                Sourcing, orders, inventory and money lived in separate places. Follow-ups
                depended on somebody remembering. Payroll was in none of it. Every answer had to
                be assembled by a person, and the assembling happened at month end, which is
                also when the mistakes were found.
              </p>
            </div>
            <div className={`${shell.card} ${styles.baCard}`}>
              <div className={styles.baTop} style={{ background: "var(--forest)" }} />
              <div className={styles.baLabel}>After</div>
              <p className={styles.baBody}>
                One platform covering the chain from quotation to cash, the warehouse, shipping
                and logistics, the clients and suppliers, staff and payroll, and full
                double-entry accounting underneath all of it. Anyone on the team can see what
                shipped, what was paid, and what is still owed, without going through the owner.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.pullBand}>
          <div className={shell.slabel}>
            <SeamMark onDark />
            What it proves
          </div>
          <h2 className={styles.pullH}>
            The hard part was never the software. It was understanding the business.
          </h2>
          <p className={styles.pullBody}>
            Most people who build operations software have not run an operation, and most people
            who advise on operations cannot build. Sitting in both seats for four years inside
            one real business is what makes the diagnosis worth paying for. It is also why the{" "}
            <Link href="/how-we-work">diagnostic comes first</Link> and the technology decision
            comes out of it, rather than the other way round.
          </p>
        </div>
      </section>

      <section className={styles.closing}>
        <h2 className={styles.closingH2}>Your operation, one system.</h2>
        <p className={styles.closingSub}>
          Twenty minutes, no charge and no pitch. You describe how work moves through the
          business, and you leave knowing which part to look at first.
        </p>
        <div className={styles.closingCta}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            className={shell.btnp}
            event="diagnostic_cta_click"
            data={{ location: "okoh_closing" }}
          >
            Book a free 20-minute read →
          </TrackedCta>
        </div>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
