const features = [
  {
    title: "Ops Suitability",
    description:
      "Check destination weather against OM Part A minima. Auto-fetches TAFs and applies rule-based suitability analysis.",
    tag: "WX",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "NAT HLA",
    description:
      "Validate North Atlantic High Level Airspace routes against the waypoint database with great-circle distance calculations.",
    tag: "NAV",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Departure Assist",
    description:
      "Instant runway assignments and SID info for your flight. Real-time data from IGA CDM and FlightAware.",
    tag: "DEP",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Crew Rest Time",
    description:
      "Calculate overlapping crew rest slots for 2\u20134 pilots. Ensures compliance with fatigue management regulations.",
    tag: "REST",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "CTOT Calculator",
    description:
      "Calculate Target Off-Block Times from your CTOT. Accounts for taxi time and slot tolerance windows.",
    tag: "SLOT",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Cold Temp Correction",
    description:
      "Apply ICAO cold temperature altitude corrections. Critical for safe instrument approaches in winter operations.",
    tag: "TEMP",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Cabin Announcements",
    description:
      "Bilingual EN/TR cabin briefing scripts for every phase of flight. From welcome announcements to emergency scenarios.",
    tag: "PA",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Metric Table",
    description:
      "Quick meters-to-feet altitude conversions. Essential reference for RVSM airspace and foreign procedures.",
    tag: "REF",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
  {
    title: "Cargo Codes",
    description:
      "Searchable IMP cargo code reference. Instantly look up dangerous goods, perishables, and special handling codes.",
    tag: "CRG",
    status: "LIVE",
    statusColor: "text-accent-green",
  },
];

function RadarSweep() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Radar circles */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.04]" />
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.06]" />
      <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.08]" />
      {/* Crosshairs */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-cyan/[0.06] to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-cyan/[0.06] to-transparent" />
      {/* Sweep */}
      <div className="animate-radar absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.06) 30deg, transparent 60deg)",
          }}
        />
      </div>
    </div>
  );
}

function HudBrackets() {
  return (
    <>
      {/* Top-left bracket */}
      <div className="animate-hud-bracket absolute -left-4 -top-4 h-8 w-8 md:-left-6 md:-top-6 md:h-12 md:w-12">
        <div className="absolute left-0 top-0 h-full w-px bg-accent-cyan/30" />
        <div className="absolute left-0 top-0 h-px w-full bg-accent-cyan/30" />
      </div>
      {/* Top-right bracket */}
      <div className="animate-hud-bracket absolute -right-4 -top-4 h-8 w-8 md:-right-6 md:-top-6 md:h-12 md:w-12">
        <div className="absolute right-0 top-0 h-full w-px bg-accent-cyan/30" />
        <div className="absolute right-0 top-0 h-px w-full bg-accent-cyan/30" />
      </div>
      {/* Bottom-left bracket */}
      <div className="animate-hud-bracket absolute -bottom-4 -left-4 h-8 w-8 md:-bottom-6 md:-left-6 md:h-12 md:w-12">
        <div className="absolute bottom-0 left-0 h-full w-px bg-accent-cyan/30" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-accent-cyan/30" />
      </div>
      {/* Bottom-right bracket */}
      <div className="animate-hud-bracket absolute -bottom-4 -right-4 h-8 w-8 md:-bottom-6 md:-right-6 md:h-12 md:w-12">
        <div className="absolute bottom-0 right-0 h-full w-px bg-accent-cyan/30" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-accent-cyan/30" />
      </div>
    </>
  );
}

function MfdDisplay() {
  return (
    <div className="relative rounded-xl border border-border-custom/60 bg-card-bg/80 p-5 backdrop-blur-sm">
      {/* Top bar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="animate-blink h-1.5 w-1.5 rounded-full bg-accent-green" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">
              Online
            </span>
          </div>
          <span className="font-mono text-[10px] text-text-dim">|</span>
          <span className="font-mono text-[10px] text-text-dim">
            MFD-01
          </span>
        </div>
        <span className="font-mono text-[10px] text-text-dim">v1.0.0</span>
      </div>

      {/* Route display */}
      <div className="mb-3 rounded-lg border border-border-custom/40 bg-background/60 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
            Active route
          </span>
          <span className="font-mono text-[10px] text-accent-cyan">
            THY 1990
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-foreground">
              LTFM
            </p>
            <p className="font-mono text-[10px] text-text-dim">Istanbul</p>
          </div>
          <div className="flex flex-1 items-center px-6">
            <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/50 to-transparent" />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mx-2 text-accent-cyan"
            >
              <path
                d="M10 3L17 10L10 17M3 10H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="h-px flex-1 bg-gradient-to-l from-accent-green/50 to-transparent" />
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-foreground">
              EGLL
            </p>
            <p className="font-mono text-[10px] text-text-dim">London</p>
          </div>
        </div>
      </div>

      {/* Status grid */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "OPS SUIT", value: "OK", color: "text-accent-green" },
          { label: "REST", value: "12:40", color: "text-accent-cyan" },
          { label: "CTOT", value: "08:25Z", color: "text-accent-amber" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border-custom/30 bg-background/40 px-3 py-3 text-center"
          >
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-text-dim">
              {item.label}
            </p>
            <p className={`font-mono text-sm font-medium ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ── HERO ── */}
      <section className="scanlines cockpit-grid relative flex min-h-screen items-center justify-center pt-16">
        {/* Background radial glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[30%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.03] blur-[150px]" />
          <div
            className="animate-pulse-glow absolute right-[20%] top-[60%] h-[400px] w-[400px] rounded-full bg-accent-green/[0.02] blur-[120px]"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <RadarSweep />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-20">
            {/* Left — Copy */}
            <div>
              <div className="animate-fade-up">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border-custom/40 bg-card-bg/60 px-4 py-2 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
                    Built for THY pilots
                  </span>
                </div>
              </div>

              <h1 className="animate-fade-up delay-200 font-display text-5xl font-extrabold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
                Your flight
                <br />
                deck&apos;s missing
                <br />
                <span className="bg-gradient-to-r from-accent-cyan via-accent-cyan to-accent-green bg-clip-text text-transparent">
                  instrument
                </span>
              </h1>

              <p className="animate-fade-up delay-400 mt-8 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                Aviation calculators, weather suitability checks, crew rest
                planning, and bilingual cabin briefings. Offline-first.
                Precision-built.
              </p>

              <div className="animate-fade-up delay-600 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#features"
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-accent-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                >
                  <span className="relative z-10">Explore Features</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="relative z-10 transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 7h10m0 0L8.5 3.5M12 7L8.5 10.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="flex items-center gap-2 rounded-xl border border-border-custom/40 px-5 py-3.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
                  <span className="font-mono text-xs text-text-secondary">
                    App Store — Soon
                  </span>
                </div>
              </div>
            </div>

            {/* Right — MFD Mock */}
            <div className="animate-fade-up delay-600 relative hidden lg:block">
              <HudBrackets />
              <MfdDisplay />
              {/* Decorative altitude tape on right edge */}
              <div className="absolute -right-10 top-4 bottom-4 flex w-6 flex-col items-end justify-between">
                {[380, 360, 340, 320, 300].map((alt) => (
                  <div key={alt} className="flex items-center gap-1">
                    <div className="h-px w-2 bg-accent-cyan/20" />
                    <span className="font-mono text-[8px] text-text-dim">
                      {alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-1200 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-dim">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-accent-cyan/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="relative py-32">
        {/* Section divider line */}
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="h-px w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-border-custom/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* Section header */}
          <div className="mb-20 max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-accent-cyan/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
                Systems
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Built by pilots,
              <br />
              for the flight deck
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
              Every tool solves a real cockpit workflow problem. Offline-first,
              fast, and reliable — no internet required for core features.
            </p>
          </div>

          {/* Feature grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="instrument-card rounded-xl border border-card-border/60 bg-card-bg/60 p-6"
              >
                {/* Tag + status */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-md border border-accent-cyan/20 bg-accent-cyan/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-accent-cyan">
                    {feature.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider ${feature.statusColor}`}
                    >
                      {feature.status}
                    </span>
                  </div>
                </div>

                <h3 className="mb-2.5 font-display text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-border-custom/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS STRIP ── */}
      <section className="relative border-y border-border-custom/30 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { value: "11", label: "Pilot tools", mono: true },
            { value: "2", label: "Languages", mono: true },
            { value: "100%", label: "Offline capable", mono: true },
            { value: "0", label: "Ads, ever", mono: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className={`text-3xl font-bold tracking-tight text-accent-cyan md:text-4xl ${
                  stat.mono ? "font-mono" : "font-display"
                }`}
              >
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-text-dim">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="scanlines relative py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.03] blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-accent-cyan/40" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
              Get started
            </span>
            <div className="h-px w-8 bg-accent-cyan/40" />
          </div>

          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Ready for your
            <br />
            next flight?
          </h2>
          <p className="mt-5 text-base text-text-secondary">
            Bring a smarter toolkit to the flight deck.
          </p>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border-custom/40 bg-card-bg/60 px-6 py-3.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-amber opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-amber" />
            </span>
            <span className="font-mono text-sm text-text-secondary">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
