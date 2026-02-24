import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-border-custom/30">
      {/* Subtle gradient glow at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/5">
                <span className="font-mono text-sm font-bold text-accent-cyan">
                  V
                </span>
              </div>
              <span className="font-display text-lg font-semibold tracking-tight">
                Volo
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-dim">
              Aviation companion for Turkish Airlines pilots. Built by pilots,
              for pilots.
            </p>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
              Legal
            </p>
            <nav className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-sm text-text-secondary transition-colors hover:text-accent-cyan"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text-secondary transition-colors hover:text-accent-cyan"
              >
                Terms of Service
              </Link>
            </nav>
          </div>

          {/* Status */}
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
              </span>
              <span className="font-mono text-xs text-accent-green">
                All systems operational
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border-custom/20 pt-8">
          <p className="font-mono text-[11px] text-text-dim">
            &copy; {new Date().getFullYear()} Volo
          </p>
          <p className="font-mono text-[11px] text-text-dim">
            IST / LTFM
          </p>
        </div>
      </div>
    </footer>
  );
}
