import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--brand-border)] bg-[rgba(248,245,240,0.88)] backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-left">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-semibold text-white">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight text-[var(--brand-ink)]">
            {siteConfig.name}
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[var(--brand-muted)] transition-colors hover:text-[var(--brand-ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-[var(--brand-border)] px-4 py-2 text-sm font-semibold text-[var(--brand-ink)] transition-colors hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)] sm:inline-flex"
          >
            Talk to us
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-[var(--brand-accent)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-accent-deep)]"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  );
}
