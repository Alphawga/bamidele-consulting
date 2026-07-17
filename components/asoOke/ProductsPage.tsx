import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import ErpWaitlistForm from "./ErpWaitlistForm";
import shell from "./AsoOkeShell.module.css";
import styles from "./ProductsPage.module.css";

const FEATURES = [
  "Quotations created, tracked, and followed up in one place",
  "Live stock levels, no more counting from memory",
  "Every order tracked from purchase to delivery",
  "Invoices, receivables, and profit per job visible daily",
  "Tasks assigned and confirmed without chasing",
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
      </header>

      <section className={styles.body}>
        <p className={styles.bodyP}>
          Most ERP software is built in an office and sold on promises. Okoh ERP was built
          inside a Lagos oil and gas procurement firm serving 500+ clients, replacing
          scattered apps, spreadsheets, and manual reminders with one system that holds.
        </p>
        <p className={styles.bodyP}>
          It covers the full chain: quotation, inventory, purchasing, order tracking,
          accounting, projects, and scheduling. One record from enquiry to cash.
        </p>
        <p className={styles.bodyP}>
          We are now building the version other firms can run. The waitlist is open.
          Waitlist members get first access and founding pricing.
        </p>

        <ul className={styles.featureList}>
          {FEATURES.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.waitlistSection}>
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
