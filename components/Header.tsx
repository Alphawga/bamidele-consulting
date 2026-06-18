import Link from "next/link";
import SiteNav from "./SiteNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-page items-center justify-between px-5">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          AlphaWGA
          <span className="ml-2 hidden font-mono text-xs font-normal text-muted sm:inline">
            / consolidation
          </span>
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
