import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-custom/20">
      <div className="mx-auto max-w-[1400px] px-10 py-16 lg:px-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-cyan/25 bg-accent-cyan/8">
              <span className="font-mono text-[15px] font-bold text-accent-cyan">V</span>
            </div>
            <span className="text-[17px] font-semibold tracking-tight">Volo</span>
          </div>

          <nav className="flex items-center gap-10">
            <Link href="/privacy" className="text-[15px] text-text-secondary transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[15px] text-text-secondary transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border-custom/15 pt-8">
          <p className="text-[14px] text-text-dim">&copy; {new Date().getFullYear()} Volo</p>
          <p className="text-[14px] text-text-dim">IST / LTFM</p>
        </div>
      </div>
    </footer>
  );
}
