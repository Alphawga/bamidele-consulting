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
          Bring one bottleneck.
          <br />
          <span className={shell.wn}>Start with how work moves.</span>
        </h1>
        <p className={`${styles.lede} ${shell.rise} ${shell.riseC}`}>
          Bring one order, purchase, delivery, invoicing or approval problem. We will trace how
          it moves through the business, where control is being lost and whether there is a useful
          reason to continue. This is a first conversation, not a diagnosis or proposal.
        </p>
      </header>

      <div className={`${styles.flowWrap} ${shell.rise} ${shell.riseC}`}>
        <AuditFlow variant="checkout" />
      </div>

      <AsoOkeFooter />
    </div>
  );
}
