import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-custom/50 bg-panel">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-cyan/20">
              <span className="font-mono text-sm font-bold text-accent-cyan">
                V
              </span>
            </div>
            <span className="text-lg font-semibold tracking-tight">Volo</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-text-secondary transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border-custom/30 pt-8 text-center">
          <p className="text-sm text-text-dim">
            &copy; {new Date().getFullYear()} Volo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
