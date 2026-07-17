import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import ScorecardFlow from "./ScorecardFlow";
import shell from "./AsoOkeShell.module.css";
import styles from "./ScorecardPage.module.css";

export default function ScorecardPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <section className={styles.stage}>
        <ScorecardFlow />
      </section>

      <AsoOkeFooter />
    </div>
  );
}
