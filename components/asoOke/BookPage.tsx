import AsoOkeNav from "./AsoOkeNav";
import AsoOkeFooter from "./AsoOkeFooter";
import SeamMark from "./SeamMark";
import AuditFlow from "@/components/AuditFlow";
import { site } from "@/lib/site";
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
          One call. ₦{site.auditPriceNgn}.
          <br />
          <span className={shell.wn}>Comes off your Systems Audit.</span>
        </h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          The fee screens for people who are serious about fixing the leak, not browsing. Pay,
          then pick a time.
        </p>
      </header>

      <div className={`${styles.flowWrap} ${shell.rise} ${shell.riseC}`}>
        <AuditFlow variant="checkout" />
      </div>

      <AsoOkeFooter />
    </div>
  );
}
