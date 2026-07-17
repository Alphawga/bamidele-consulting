import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import ErpWaitlistForm from "./ErpWaitlistForm";
import TrackedCta from "./TrackedCta";
import shell from "./AsoOkeShell.module.css";
import styles from "./ProductsPage.module.css";

const STATS = [
  { v: "500+", l: "clients on one system" },
  { v: "5", l: "tools retired" },
  { v: "10+", l: "modules, one source of truth" },
];

const MODULES = [
  {
    color: "var(--oxblood)",
    title: "Sourcing",
    body: "Supplier options compared side by side before a naira commits.",
  },
  {
    color: "var(--gold)",
    title: "Sales & Quotations",
    body: "Quotations created, tracked, and followed up in one place. Nothing sits forgotten in an inbox.",
  },
  {
    color: "var(--forest)",
    title: "Purchasing",
    body: "Purchase orders raised and approved without a single printed form.",
  },
  {
    color: "var(--oxblood)",
    title: "Returns",
    body: "Returns and credits logged against the original order, not reconciled from memory later.",
  },
  {
    color: "var(--gold)",
    title: "Logistics",
    body: "Every order tracked from dispatch to delivery. One record, not five WhatsApp threads.",
  },
  {
    color: "var(--forest)",
    title: "Warehouse & Inventory",
    body: "Live stock levels across every warehouse, no more counting from memory.",
  },
  {
    color: "var(--oxblood)",
    title: "Insurance",
    body: "Cover and claims tracked against the assets and shipments they protect.",
  },
  {
    color: "var(--gold)",
    title: "Accounting",
    body: "Invoices, receivables, and profit per job visible daily, not discovered at month end.",
  },
  {
    color: "var(--forest)",
    title: "HR & Payroll",
    body: "Staff records, leave, loans, performance reviews, and payroll, all in one place.",
  },
  {
    color: "var(--oxblood)",
    title: "Tasks & Support",
    body: "Work assigned and confirmed without chasing. IT support requests logged the same way.",
  },
];

export default function ProductsPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={`${shell.container} ${styles.header}`}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Products
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>Okoh ERP</h1>
        <p className={`${shell.ledes} ${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Already running a real procurement operation. Now being built for yours.
        </p>
        <div className={`${styles.heroCtas} ${shell.rise} ${shell.riseD}`}>
          <TrackedCta
            href="#waitlist"
            className={shell.btnp}
            event="waitlist_cta_click"
            data={{ location: "products_hero" }}
          >
            Join the waitlist ↓
          </TrackedCta>
        </div>
      </header>

      <section className={styles.proofBand}>
        <div className={shell.container}>
          <div className={`${shell.slabel} ${shell.slabelOnDark}`}>
            <SeamMark onDark />
            The proof
          </div>
          <p className={styles.proofText}>
            Built inside a live procurement operation, not designed in a boardroom.
          </p>
          <div className={styles.statRow}>
            {STATS.map((stat) => (
              <div key={stat.l}>
                <div className={styles.statV}>{stat.v}</div>
                <div className={styles.statL}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.intro}>
          <p className={styles.bodyP}>
            Most ERP software is built in an office and sold on promises. Okoh ERP was built
            inside a Lagos oil and gas procurement firm serving 500+ clients, replacing
            scattered apps, spreadsheets, and manual reminders with one system that holds.
          </p>
          <p className={styles.bodyP}>
            It covers the full chain: quotation, inventory, purchasing, order tracking,
            accounting, projects, and scheduling. One record from enquiry to cash.
          </p>
        </div>

        <div className={`${shell.slabel} ${styles.moduleLabel}`}>
          <SeamMark />
          What&apos;s inside
        </div>
        <div className={styles.moduleGrid}>
          {MODULES.map((module) => (
            <div key={module.title} className={`${shell.card} ${styles.moduleCard}`}>
              <div className={styles.moduleTop} style={{ background: module.color }} />
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleBody}>{module.body}</p>
            </div>
          ))}
        </div>

        <div className={`${shell.card} ${styles.callout}`}>
          <div className={styles.calloutText}>
            <div className={`${shell.slabel} ${styles.calloutLabel}`}>
              <SeamMark />
              Now taking waitlist signups
            </div>
            We are now building the version other firms can run. Waitlist members get first
            access and founding pricing.
          </div>
          <TrackedCta
            href="#waitlist"
            className={shell.btnp}
            event="waitlist_cta_click"
            data={{ location: "products_callout" }}
          >
            Join the waitlist ↓
          </TrackedCta>
        </div>

        <p className={styles.footnote}>
          Want the operations work that led here? See the <Link href="/offers">Offers</Link>.
        </p>
      </section>

      <section id="waitlist" className={styles.waitlistSection}>
        <div className={shell.slabel}>
          <SeamMark />
          Join the waitlist
        </div>
        <ErpWaitlistForm />
      </section>

      <AsoOkeFooter />
    </div>
  );
}
