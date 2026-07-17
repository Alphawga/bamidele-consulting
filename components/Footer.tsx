import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-steel/30">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-paper">{site.name}</p>
          <p className="mt-1 text-sm text-steel">{site.role}</p>
          <p className="mt-4 max-w-sm text-sm text-steel">
            One system, from sourcing to delivery. Built for established Nigerian operations.
          </p>
        </div>
        <Link href="/audit" className="font-mono text-xs uppercase tracking-label text-brass hover:text-paper">
          Take the audit
        </Link>
      </div>
      <div className="mx-auto max-w-page px-5 pb-8">
        <p className="font-mono text-xs text-steel">
          © {new Date().getFullYear()} {site.name}. Lagos, Nigeria.
        </p>
      </div>
    </footer>
  );
}
