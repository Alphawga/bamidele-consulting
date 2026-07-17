import SeamMark from "./SeamMark";
import { alphawga } from "@/lib/alphawga";
import styles from "./AsoOkeShell.module.css";

export default function AsoOkeFooter() {
  return (
    <footer>
      <div className={styles.sfooter}>
        <div className={styles.wordmark} style={{ fontSize: 15 }}>
          <SeamMark />
          {alphawga.name}
        </div>
        <span className={`${styles.mono} ${styles.founderLine}`}>Founded by {alphawga.founder}</span>
        <span className={styles.fr}>Lagos, NG · est. 2018</span>
      </div>
      <div className={styles.sband2} />
    </footer>
  );
}
