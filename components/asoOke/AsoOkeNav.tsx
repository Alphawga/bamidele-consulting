"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/track";
import SeamMark from "./SeamMark";
import { alphawga } from "@/lib/alphawga";
import styles from "./AsoOkeShell.module.css";

const LINKS = [
  { href: "/offers", label: "Offers" },
  { href: "/products", label: "Products" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function AsoOkeNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.snav}>
      <Link href="/" className={styles.wordmark}>
        <SeamMark />
        {alphawga.name}
      </Link>
      <div className={styles.snavlinks}>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? styles.navLinkActive : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <a
        href={alphawga.calDiagnosticUrl}
        className={`${styles.btnsec} ${styles.navCta}`}
        onClick={() => trackEvent("diagnostic_cta_click", { location: "nav" })}
      >
        <span className={styles.navCtaFull}>Book the ₦10K diagnostic</span>
        <span className={styles.navCtaShort}>Book diagnostic</span>
      </a>
    </nav>
  );
}
