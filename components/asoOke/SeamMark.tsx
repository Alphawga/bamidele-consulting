import styles from "./AsoOkeShell.module.css";

export default function SeamMark({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={styles.seam}>
      <i className={styles.seamBar} />
      <i className={`${styles.seamBarGold} ${onDark ? styles.seamBarGoldOnDark : ""}`} />
      <i className={`${styles.seamBarForest} ${onDark ? styles.seamBarForestOnDark : ""}`} />
    </span>
  );
}
