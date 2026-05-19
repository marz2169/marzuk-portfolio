"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = { href: string; label: string };

type Props = {
  variant?: "home" | "detail";
  backHref?: string;
  pageTitle?: string;
  navLinks?: NavLink[];
};

const DEFAULT_NAV: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Featured" },
  { href: "#samples", label: "Work" },
  { href: "#skills", label: "Skills" },
];

export function SiteHeader({
  variant = "home",
  backHref,
  pageTitle,
  navLinks = DEFAULT_NAV,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-[0_1px_0_0_rgba(15,23,42,0.03)]">
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo / Monogram */}
        <Link
          href={variant === "detail" && backHref ? backHref : "/"}
          className="flex items-center gap-3 group shrink-0"
        >
          <span className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] via-[var(--brand-2)] to-[var(--brand-deep)] text-white font-semibold text-sm shadow-md ring-1 ring-white/20">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
            <span className="relative tracking-tight display-font font-medium">MC</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </span>
          {variant === "home" ? (
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-tight tracking-tight">
                Marzuk Chowdhury
              </p>
              <p className="text-[10px] text-slate-500 leading-tight uppercase tracking-[0.14em] font-semibold">
                Accounting Portfolio
              </p>
            </div>
          ) : (
            <div className="hidden sm:block">
              <p className="text-[10px] text-slate-500 leading-tight uppercase tracking-[0.14em] font-semibold flex items-center gap-1">
                <span className="text-slate-400">←</span> Back to Portfolio
              </p>
              <p className="text-sm font-bold text-slate-900 leading-tight tracking-tight">
                {pageTitle || "Case Study"}
              </p>
            </div>
          )}
        </Link>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 text-sm bg-slate-50/80 rounded-full p-1 ring-1 ring-slate-200/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm transition-all duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: status + CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-full tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available
          </span>
          <a
            href={variant === "home" ? "#contact" : "/#contact"}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Get in Touch</span>
            <svg
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl">
          <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-50 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
