const features = [
  {
    icon: "cloud-sun",
    title: "Ops Suitability",
    description:
      "Check destination weather against OM Part A minima. Auto-fetches TAFs and applies rule-based suitability analysis.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: "route",
    title: "NAT HLA",
    description:
      "Validate North Atlantic High Level Airspace routes against the waypoint database with great-circle calculations.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: "plane-departure",
    title: "Departure Assist",
    description:
      "Instant runway assignments and SID info for your flight. Live data from IGA CDM and FlightAware.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: "bed",
    title: "Rest Time",
    description:
      "Calculate overlapping crew rest slots for 2-4 pilots. Ensures compliance with fatigue management regulations.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: "clock",
    title: "CTOT Calculator",
    description:
      "Calculate Target Off-Block Times from your CTOT. Accounts for taxi time and slot tolerance windows.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    icon: "thermometer",
    title: "Cold Temp Correction",
    description:
      "Apply ICAO cold temperature altitude corrections. Critical for safe instrument approaches in winter ops.",
    color: "text-accent-red",
    bg: "bg-accent-red/10",
  },
  {
    icon: "microphone",
    title: "Cabin Announcements",
    description:
      "Bilingual EN/TR cabin briefing scripts for every phase of flight. From welcome to emergency scenarios.",
    color: "text-accent-amber",
    bg: "bg-accent-amber/10",
  },
  {
    icon: "ruler",
    title: "Metric Table",
    description:
      "Quick meters-to-feet altitude conversions. Essential reference for RVSM airspace and foreign procedures.",
    color: "text-accent-cyan",
    bg: "bg-accent-cyan/10",
  },
  {
    icon: "box",
    title: "Cargo Codes",
    description:
      "Searchable IMP cargo code reference. Instantly look up dangerous goods, perishables, and special handling codes.",
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
];

function FeatureIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const icons: Record<string, React.ReactNode> = {
    "cloud-sun": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        <path d="M8 15a5 5 0 0 1 4.5-7.98A4.5 4.5 0 0 1 17 12h1a3 3 0 0 1 0 6H8z" />
      </svg>
    ),
    route: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <circle cx="6" cy="19" r="3" />
        <circle cx="18" cy="5" r="3" />
        <path d="M9 19h3c3 0 6-2 6-6V8" />
      </svg>
    ),
    "plane-departure": (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M2 20h20M4.5 17l2-7 4 2 5-6 4.5 2.5-3 8.5H4.5z" />
      </svg>
    ),
    bed: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M3 7v10M3 17h18M21 17V10a2 2 0 0 0-2-2H7v5h14" />
        <circle cx="5.5" cy="10.5" r="1.5" />
      </svg>
    ),
    clock: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    thermometer: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
    microphone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M5 10a7 7 0 0 0 14 0M12 17v4m-4 0h8" />
      </svg>
    ),
    ruler: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M3 5h18v14H3zM7 5v4m4-4v6m4-6v4" />
      </svg>
    ),
    box: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className={className}
      >
        <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
        <path d="M3 8l9 5 9-5M12 13v8" />
      </svg>
    ),
  };

  return icons[icon] || null;
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-glow-pulse absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-cyan/5 blur-[120px]" />
          <div
            className="animate-glow-pulse absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-green/5 blur-[100px]"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-custom/50 bg-card-bg/50 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-accent-green" />
              <span className="font-mono text-xs text-text-secondary">
                Built for Turkish Airlines pilots
              </span>
            </div>
          </div>

          <h1 className="animate-fade-up animation-delay-200 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Your cockpit
            <br />
            <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
              companion
            </span>
          </h1>

          <p className="animate-fade-up animation-delay-400 mx-auto mt-6 max-w-xl text-lg text-text-secondary md:text-xl">
            Aviation calculators, weather suitability, crew rest planning, and
            bilingual cabin briefings — everything you need, offline and fast.
          </p>

          <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-cyan px-8 py-3.5 text-sm font-semibold text-background transition-all hover:brightness-110"
            >
              Explore Features
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="translate-y-px"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Floating cockpit HUD element */}
          <div className="animate-fade-up animation-delay-800 relative mx-auto mt-16 max-w-2xl">
            <div className="rounded-2xl border border-border-custom/50 bg-card-bg/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-accent-red" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
                <div className="h-2.5 w-2.5 rounded-full bg-accent-green" />
                <span className="ml-2 font-mono text-xs text-text-dim">
                  volo v1.0
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Ops Suitability", "Rest Time", "CTOT"].map((label) => (
                  <div
                    key={label}
                    className="rounded-lg border border-border-custom/30 bg-surface/50 px-3 py-4 text-center"
                  >
                    <p className="font-mono text-xs text-accent-cyan">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg border border-accent-green/20 bg-accent-green/5 px-4 py-3">
                <span className="font-mono text-xs text-text-secondary">
                  LTFM &rarr; EGLL
                </span>
                <span className="font-mono text-xs font-medium text-accent-green">
                  SUITABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm text-accent-cyan">FEATURES</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built by pilots, for pilots
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-secondary">
              Every tool designed to solve real cockpit workflow needs.
              Offline-first, fast, and reliable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-card-border bg-card-bg/50 p-6 transition-all hover:border-accent-cyan/30 hover:bg-card-bg"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg}`}
                >
                  <FeatureIcon
                    icon={feature.icon}
                    className={`h-5 w-5 ${feature.color}`}
                  />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready for your next flight?
          </h2>
          <p className="mt-4 text-text-secondary">
            Download Volo and bring a smarter toolkit to the flight deck.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border-custom/50 bg-card-bg/50 px-6 py-3 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent-amber" />
            <span className="font-mono text-sm text-text-secondary">
              Coming soon to the App Store
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
