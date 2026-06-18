import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}</p>
          <p className="mt-4 max-w-sm text-sm text-muted">
            One system, from sourcing to delivery. Built for established Nigerian operations.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="label">Pages</span>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="text-accent hover:text-accent-ink">
                Book a call
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-page px-5 pb-8">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. Lagos, Nigeria.
        </p>
      </div>
    </footer>
  );
}
