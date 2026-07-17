"use client";

import { useState } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-label text-steel hover:text-paper"
        >
          Alphawga
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="site-menu-overlay"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs uppercase tracking-label text-steel hover:text-paper"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
