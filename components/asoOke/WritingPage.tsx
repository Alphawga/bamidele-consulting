import Link from "next/link";
import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import TrackedCta from "./TrackedCta";
import { alphawga } from "@/lib/alphawga";
import shell from "./AsoOkeShell.module.css";
import styles from "./WritingPage.module.css";

const NOTES = [
  {
    tag: "Systems",
    color: "var(--oxblood)",
    date: "Jun 2026",
    title: "Five tools is not a stack. It's a leak.",
    teaser:
      "What moving 500+ clients off QuickBooks, SeamlessHR, Excel, Trello and WhatsApp taught me about where operations actually bleed.",
  },
  {
    tag: "Discipline",
    color: "var(--forest)",
    date: "May 2026",
    title: "Bible before work, the list before the code",
    teaser: "The morning order that keeps an eight-year practice from becoming eight years of firefighting.",
  },
  {
    tag: "Partnerships",
    color: "var(--gold)",
    date: "Apr 2026",
    title: "Build with the person who owns the problem",
    teaser:
      "Why my best work has always started with a founder who was drowning in their own operation, not with a spec.",
  },
  {
    tag: "Systems",
    color: "var(--oxblood)",
    date: "Mar 2026",
    title: "The seams become the pattern",
    teaser:
      "Aso-Oke is woven in strips, joined on purpose. Good software consolidation works the same way: the joins should show, and hold.",
  },
  {
    tag: "Opportunity",
    color: "var(--forest)",
    date: "Feb 2026",
    title: "The problem is the pitch",
    teaser: "SkinAI started as a skincare brand's WhatsApp backlog. Finding products inside problems, a field guide.",
  },
];

export default function WritingPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Writing
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>Notes from the loom.</h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          On systems, discipline, partnerships, and finding the opportunity inside the problem.
          Written slowly, between builds.
        </p>
      </header>

      <section className={styles.list}>
        {NOTES.map((note) => (
          <Link key={note.title} href="/contact" className={styles.row}>
            <div className={styles.rowHead}>
              <span className={styles.tag} style={{ color: note.color }}>
                {note.tag}
              </span>
              <span className={styles.date}>{note.date}</span>
            </div>
            <h2 className={styles.title}>{note.title}</h2>
            <p className={styles.teaser}>{note.teaser}</p>
          </Link>
        ))}
        <div className={styles.rule} />
        <p className={styles.footnote}>New notes land here first · no newsletter noise</p>
        <p className={styles.closingCta}>
          <TrackedCta
            href={alphawga.calDiagnosticUrl}
            event="diagnostic_cta_click"
            data={{ location: "writing_closing" }}
          >
            Or skip ahead: book the ₦10K diagnostic →
          </TrackedCta>
        </p>
      </section>

      <AsoOkeFooter />
    </div>
  );
}
