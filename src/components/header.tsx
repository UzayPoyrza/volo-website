"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border-custom/40 bg-background/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute inset-0 rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 transition-colors group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10" />
            <span className="relative font-mono text-sm font-bold text-accent-cyan">
              V
            </span>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Volo
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "/#features", label: "Features" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border-custom/50 bg-surface/50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-text-secondary"
          >
            {mobileOpen ? (
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M2 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border-custom/30 bg-background/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {[
              { href: "/#features", label: "Features" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
