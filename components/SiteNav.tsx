"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import BookButton from "./BookButton";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const linkClass = (href: string) =>
    isActive(href)
      ? "text-ink font-medium"
      : "text-muted hover:text-ink";

  return (
    <>
      {/* Desktop */}
      <nav className="hidden items-center gap-6 md:flex">
        <ul className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative py-1 ${linkClass(item.href)}`}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-accent" />
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
        <BookButton />
      </nav>

      {/* Mobile controls */}
      <div className="flex items-center gap-3 md:hidden">
        <BookButton className="px-4 py-2">Book</BookButton>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile panel */}
      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-line bg-paper md:hidden">
          <ul className="mx-auto flex max-w-page flex-col px-5 py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3 text-base ${linkClass(item.href)}`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="font-mono text-xs text-accent">●</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}
