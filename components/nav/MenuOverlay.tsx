"use client";

import { useEffect } from "react";
import Link from "next/link";

const primaryLinks = [
  { href: "/#the-system", label: "The System" },
  { href: "/#proof", label: "Proof" },
  { href: "/#who-for", label: "Who For" },
  { href: "/#contact", label: "Contact" },
];

const secondaryLinks = [
  { href: "/okoh", label: "Case Study" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/audit", label: "Audit" },
  { href: "/mentorship", label: "Mentorship" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="site-menu-overlay"
      className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-5"
    >
      <nav>
        <ul className="flex flex-col gap-2">
          {primaryLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="font-display text-[clamp(32px,4vw,64px)] font-semibold text-paper hover:text-brass"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
          {secondaryLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="font-mono text-xs uppercase tracking-label text-steel hover:text-paper"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
