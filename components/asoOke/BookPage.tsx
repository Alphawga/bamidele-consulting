import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import AuditFlow from "@/components/AuditFlow";
import shell from "./AsoOkeShell.module.css";
import styles from "./BookPage.module.css";

export default function BookPage() {
  return (
    <div className={shell.root}>
      <div className={shell.sband} />
      <AsoOkeNav />

      <header className={styles.header}>
        <div className={`${shell.slabel} ${shell.rise} ${shell.riseA}`}>
          <SeamMark />
          Book
        </div>
        <h1 className={`${styles.h1} ${shell.rise} ${shell.riseB}`}>
          Twenty minutes.
          <br />
          <span className={shell.wn}>No charge, no pitch.</span>
        </h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Tell me how the business runs and I will tell you which part I would look at first,
          and why. If a full diagnostic is worth doing after that, I will say what it costs and
          you can decide then. Pick a time.
        </p>
      </header>

      <div className={`${styles.flowWrap} ${shell.rise} ${shell.riseC}`}>
        <AuditFlow variant="checkout" />
      </div>

      <AsoOkeFooter />
    </div>
  );
}
