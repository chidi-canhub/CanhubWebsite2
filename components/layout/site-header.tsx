"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getNavItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navItems = getNavItems();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="surface-dark sticky top-0 z-30 border-b border-white/10 bg-[rgba(11,23,40,0.92)] text-white backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-left" aria-label="Canhub Software home">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-semibold text-white"
          >
            C
          </span>
          <span className="truncate text-lg font-semibold tracking-tight text-white">{siteConfig.companyName}</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white md:hidden"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-white/10 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-base font-semibold text-[var(--brand-ink)] transition-colors hover:bg-[var(--brand-accent-soft)] sm:hidden"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
