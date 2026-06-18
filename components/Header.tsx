import Link from "next/link";
import { nav } from "@/lib/site";
import BookButton from "./BookButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-5">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          BA
          <span className="ml-2 hidden font-mono text-xs font-normal text-muted sm:inline">
            / consolidation
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <BookButton className="hidden sm:inline-flex" />
        </nav>
      </div>
    </header>
  );
}
