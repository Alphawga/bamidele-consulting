"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/track";
import SeamMark from "./SeamMark";
import { alphawga } from "@/lib/alphawga";
import styles from "./AsoOkeShell.module.css";

const LINKS = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/okoh", label: "Case Study" },
  { href: "/offers", label: "Offers" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function AsoOkeNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
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
          <span className={styles.navCtaFull}>Discuss a bottleneck</span>
          <span className={styles.navCtaShort}>Discuss</span>
        </a>
        <button
          type="button"
          className={styles.navToggle}
          aria-expanded={menuOpen}
          aria-controls="aso-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? styles.navToggleBarTopOpen : styles.navToggleBar} />
          <span className={menuOpen ? styles.navToggleBarHidden : styles.navToggleBar} />
          <span className={menuOpen ? styles.navToggleBarBottomOpen : styles.navToggleBar} />
        </button>
      </nav>

      {menuOpen ? (
        <div id="aso-menu" className={styles.navMenu}>
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navMenuLink} ${
                pathname === link.href ? styles.navMenuLinkActive : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={alphawga.calDiagnosticUrl}
            className={`${styles.btnp} ${styles.navMenuCta}`}
            onClick={() => trackEvent("diagnostic_cta_click", { location: "nav_menu" })}
          >
            Discuss a bottleneck →
          </a>
        </div>
      ) : null}
    </>
  );
}
