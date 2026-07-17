import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import ScorecardFlow from "./ScorecardFlow";
import shell from "./AsoOkeShell.module.css";
import styles from "./ScorecardPage.module.css";

export default function ScorecardPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Free scorecard
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
          Find your leaks
          <br />
          <span className={shell.wn}>in 10 minutes.</span>
        </h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Find out where your business is leaking money in 10 minutes. 20 questions. Answer
          honestly, nobody sees this but you.
        </p>
      </header>

      <section className={styles.formSection}>
        <ScorecardFlow />
      </section>

      <AsoOkeFooter />
    </div>
  );
}
