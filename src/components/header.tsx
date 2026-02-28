"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Hide on scroll down, show on scroll up (mobile only)
      if (window.innerWidth < 768) {
        setHidden(y > 80 && y > lastY.current);
      } else {
        setHidden(false);
      }

      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-transparent ${
        scrolled
          ? "border-border-custom/20 bg-background/50 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          : "bg-background"
      } ${hidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ transition: "opacity 150ms ease, background-color 500ms ease, border-color 500ms ease, box-shadow 500ms ease" }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-10 lg:px-14">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-[18px] w-[18px]">
              <path fill="currentColor" className="text-accent-cyan" d="M186.62,464H160a16,16,0,0,1-14.57-22.6l64.46-142.25L113.1,297,77.8,339.77C71.07,348.23,65.7,352,52,352H34.08a17.66,17.66,0,0,1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38,0,0,0,0-.15,14.82,14.82,0,0,1-.53-1.59L16.92,182.76c-2.15-7.61.2-12.93,2.56-16.06a16.83,16.83,0,0,1,13.6-6.7H52c10.23,0,20.16,4.59,26,12l34.57,42.05,97.32-1.44-64.44-142A16,16,0,0,1,160,48h26.91a25,25,0,0,1,19.35,9.8l125.05,152,57.77-1.52c4.23-.23,15.95-.31,18.66-.31C463,208,496,225.94,496,256c0,9.46-3.78,27-29.07,38.16-14.93,6.6-34.85,9.94-59.21,9.94-2.68,0-14.37-.08-18.66-.31l-57.76-1.54-125.36,152A25,25,0,0,1,186.62,464Z"/>
            </svg>
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
