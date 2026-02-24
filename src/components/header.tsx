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
      className={`fixed top-0 z-50 w-full border-b border-transparent transition-all duration-500 ${
        scrolled ? "border-border-custom/30 bg-background/85 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/8">
            <span className="font-mono text-[15px] font-bold text-accent-cyan">V</span>
          </div>
          <span className="text-[17px] font-semibold tracking-tight">Volo</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {[
            { href: "/#features", label: "Features" },
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-text-secondary transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-custom/40 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-text-secondary">
            {mobileOpen ? (
              <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
        <nav className="border-t border-border-custom/20 bg-background/95 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-10 py-5">
            {[
              { href: "/#features", label: "Features" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-[15px] text-text-secondary transition-colors hover:text-foreground"
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
