"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-custom/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan/20">
            <span className="font-mono text-sm font-bold text-accent-cyan">
              V
            </span>
          </div>
          <span className="text-lg font-semibold tracking-tight">Volo</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#features"
            className="text-sm text-text-secondary transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-text-secondary transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-text-secondary transition-colors hover:text-foreground"
          >
            Terms
          </Link>
        </nav>

        <button
          className="flex h-8 w-8 items-center justify-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-foreground"
          >
            {mobileOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M3 5H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 10H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border-custom/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            <Link
              href="/#features"
              className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-surface hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Terms
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
