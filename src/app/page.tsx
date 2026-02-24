import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

/* ── Feature data ── */
const showcaseFeatures = [
  {
    tag: "WX",
    title: "Operational Suitability",
    description:
      "Auto-fetch TAFs for any airport and instantly check weather against OM Part A minima. Color-coded results tell you if your destination is suitable — no more manual cross-referencing.",
    details: [
      "Real-time TAF parsing from aviationweather.gov",
      "Rule engine for OM Part A weather minima",
      "Supports multi-airport suitability checks",
    ],
    visual: "suitability",
  },
  {
    tag: "NAV",
    title: "NAT HLA Route Verification",
    description:
      "Paste your North Atlantic route and validate every waypoint against the HLA database. Great-circle distance and bearing calculations for each leg.",
    details: [
      "Full NAT waypoint coordinate database",
      "Great-circle distance & initial bearing",
      "Visual route table with leg-by-leg breakdown",
    ],
    visual: "nat",
  },
  {
    tag: "DEP",
    title: "Departure Assist",
    description:
      "Enter your flight number and get instant runway assignments, SID information, and estimated taxi times. Live data for LTFM from IGA CDM.",
    details: [
      "Live IGA CDM integration for Istanbul",
      "FlightAware fallback for worldwide coverage",
      "Runway and SID assignments in seconds",
    ],
    visual: "departure",
  },
];

const gridFeatures = [
  {
    tag: "REST",
    title: "Crew Rest Time",
    description:
      "Calculate overlapping rest slots for 2–4 pilots with fatigue regulation compliance.",
  },
  {
    tag: "SLOT",
    title: "CTOT Calculator",
    description:
      "Compute Target Off-Block Times accounting for taxi time and slot tolerance windows.",
  },
  {
    tag: "TEMP",
    title: "Cold Temp Correction",
    description:
      "ICAO cold temperature altitude corrections for safe instrument approaches.",
  },
  {
    tag: "PA",
    title: "Cabin Announcements",
    description:
      "Bilingual EN/TR briefing scripts for every phase from welcome to emergency.",
  },
  {
    tag: "REF",
    title: "Metric Table",
    description:
      "Instant meters-to-feet altitude conversions for RVSM airspace.",
  },
  {
    tag: "CRG",
    title: "Cargo Codes",
    description:
      "Searchable IMP cargo code reference for DG, perishables, and special handling.",
  },
];

/* ── Visual mocks for feature showcase ── */
function SuitabilityMock() {
  return (
    <div className="rounded-xl border border-card-border/60 bg-card-bg/80 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          Suitability Check
        </span>
        <span className="font-mono text-[10px] text-accent-cyan">3 airports</span>
      </div>
      {[
        { icao: "EGLL", name: "Heathrow", status: "SUITABLE", color: "text-accent-green", border: "border-accent-green/20", bg: "bg-accent-green/5" },
        { icao: "LFPG", name: "De Gaulle", status: "MARGINAL", color: "text-accent-amber", border: "border-accent-amber/20", bg: "bg-accent-amber/5" },
        { icao: "EHAM", name: "Schiphol", status: "SUITABLE", color: "text-accent-green", border: "border-accent-green/20", bg: "bg-accent-green/5" },
      ].map((apt) => (
        <div
          key={apt.icao}
          className={`mb-2 flex items-center justify-between rounded-lg border ${apt.border} ${apt.bg} px-4 py-3 last:mb-0`}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-foreground">
              {apt.icao}
            </span>
            <span className="font-mono text-[10px] text-text-dim">
              {apt.name}
            </span>
          </div>
          <span className={`font-mono text-xs font-medium ${apt.color}`}>
            {apt.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function NatMock() {
  return (
    <div className="rounded-xl border border-card-border/60 bg-card-bg/80 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          Route validation
        </span>
        <span className="font-mono text-[10px] text-accent-green">VALID</span>
      </div>
      <div className="space-y-1.5">
        {[
          { wpt: "MALOT", dist: "—", brg: "—" },
          { wpt: "56N020W", dist: "342 nm", brg: "312°" },
          { wpt: "57N030W", dist: "387 nm", brg: "298°" },
          { wpt: "56N040W", dist: "401 nm", brg: "284°" },
          { wpt: "CLAVY", dist: "256 nm", brg: "271°" },
        ].map((leg, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-md bg-background/50 px-3 py-2"
          >
            <span className="font-mono text-xs font-medium text-accent-cyan">
              {leg.wpt}
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-text-secondary">
                {leg.dist}
              </span>
              <span className="font-mono text-[10px] text-text-dim">
                {leg.brg}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DepartureMock() {
  return (
    <div className="rounded-xl border border-card-border/60 bg-card-bg/80 p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-dim">
          Departure info
        </span>
        <span className="font-mono text-[10px] text-accent-cyan">THY 1990</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Runway", value: "35L", color: "text-accent-cyan" },
          { label: "SID", value: "BAVMA 2A", color: "text-accent-green" },
          { label: "CTOT", value: "08:25Z", color: "text-accent-amber" },
          { label: "Gate", value: "F12", color: "text-foreground" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg border border-border-custom/30 bg-background/40 px-3 py-3"
          >
            <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-text-dim">
              {item.label}
            </p>
            <p className={`font-mono text-lg font-bold ${item.color}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, () => React.ReactNode> = {
  suitability: SuitabilityMock,
  nat: NatMock,
  departure: DepartureMock,
};

/* ── Radar (hero background) ── */
function RadarSweep() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.03]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.05]" />
      <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.07]" />
      <div className="absolute left-1/2 top-1/2 h-[600px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-cyan/[0.04] to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-px w-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-cyan/[0.04] to-transparent" />
      <div className="animate-radar absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-full w-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.05) 40deg, transparent 80deg)",
          }}
        />
      </div>
    </div>
  );
}

/* ── MFD (hero visual) ── */
function MfdDisplay() {
  return (
    <div className="relative">
      {/* HUD brackets */}
      <div className="animate-hud-bracket absolute -left-5 -top-5 h-10 w-10">
        <div className="absolute left-0 top-0 h-full w-px bg-accent-cyan/25" />
        <div className="absolute left-0 top-0 h-px w-full bg-accent-cyan/25" />
      </div>
      <div className="animate-hud-bracket absolute -right-5 -top-5 h-10 w-10">
        <div className="absolute right-0 top-0 h-full w-px bg-accent-cyan/25" />
        <div className="absolute right-0 top-0 h-px w-full bg-accent-cyan/25" />
      </div>
      <div className="animate-hud-bracket absolute -bottom-5 -left-5 h-10 w-10">
        <div className="absolute bottom-0 left-0 h-full w-px bg-accent-cyan/25" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-accent-cyan/25" />
      </div>
      <div className="animate-hud-bracket absolute -bottom-5 -right-5 h-10 w-10">
        <div className="absolute bottom-0 right-0 h-full w-px bg-accent-cyan/25" />
        <div className="absolute bottom-0 right-0 h-px w-full bg-accent-cyan/25" />
      </div>

      <div className="rounded-2xl border border-border-custom/50 bg-card-bg/70 p-6 backdrop-blur-md">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="animate-blink h-1.5 w-1.5 rounded-full bg-accent-green" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">
                Online
              </span>
            </div>
            <span className="text-border-custom/40">|</span>
            <span className="font-mono text-[10px] text-text-dim">MFD-01</span>
          </div>
          <span className="font-mono text-[10px] text-text-dim">v1.0.0</span>
        </div>

        {/* Route */}
        <div className="mb-4 rounded-xl border border-border-custom/30 bg-background/50 p-5">
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
              <p className="font-display text-2xl font-bold">LTFM</p>
              <p className="font-mono text-[10px] text-text-dim">Istanbul</p>
            </div>
            <div className="flex flex-1 items-center px-4">
              <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/40 to-transparent" />
              <div className="mx-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent-cyan/20 bg-accent-cyan/5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-cyan">
                  <path d="M2 7h10m0 0L8.5 3.5M12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-accent-green/40 to-transparent" />
            </div>
            <div className="text-center">
              <p className="font-display text-2xl font-bold">EGLL</p>
              <p className="font-mono text-[10px] text-text-dim">London</p>
            </div>
          </div>
        </div>

        {/* Status readouts */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "OPS SUIT", value: "OK", color: "text-accent-green" },
            { label: "REST", value: "12:40", color: "text-accent-cyan" },
            { label: "CTOT", value: "08:25Z", color: "text-accent-amber" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border-custom/25 bg-background/30 px-3 py-3 text-center"
            >
              <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-text-dim">
                {item.label}
              </p>
              <p className={`font-mono text-sm font-bold ${item.color}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════ PAGE ══════════════════════ */
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ── HERO ── */}
      <section className="scanlines cockpit-grid relative flex min-h-screen items-center justify-center pb-20 pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[30%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.03] blur-[150px]" />
        </div>
        <RadarSweep />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-24">
            {/* Copy */}
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
                Aviation calculators, weather suitability, crew rest planning,
                and bilingual cabin briefings. Offline-first. Precision-built.
              </p>

              <div className="animate-fade-up delay-600 mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#features"
                  className="group relative inline-flex items-center gap-2.5 rounded-xl bg-accent-cyan px-7 py-3.5 text-sm font-semibold text-background transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                >
                  <span>Explore Features</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M2 7h10m0 0L8.5 3.5M12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

            {/* MFD */}
            <div className="animate-fade-up delay-700 hidden lg:block">
              <MfdDisplay />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="animate-fade-in delay-1200 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-text-dim">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-accent-cyan/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="relative border-y border-border-custom/20 bg-panel/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-text-dim">
              Designed for the flight deck
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              { label: "Offline First", icon: "wifi-off" },
              { label: "OM Part A Compliant", icon: "check-shield" },
              { label: "Bilingual EN/TR", icon: "language" },
              { label: "Real-Time Data", icon: "signal" },
              { label: "No Ads", icon: "block" },
            ].map((badge, i) => (
              <ScrollReveal key={badge.label} delay={i * 100}>
                <div className="flex items-center gap-2.5 opacity-60 transition-opacity hover:opacity-100">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border-custom/30 bg-surface/50">
                    <span className="font-mono text-[10px] text-accent-cyan">
                      {badge.icon === "wifi-off" && "↯"}
                      {badge.icon === "check-shield" && "✓"}
                      {badge.icon === "language" && "AB"}
                      {badge.icon === "signal" && "◉"}
                      {badge.icon === "block" && "⊘"}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-secondary">
                    {badge.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { target: 11, suffix: "", label: "Pilot tools" },
              { target: 2, suffix: "", label: "Languages" },
              { target: 100, suffix: "%", label: "Offline capable" },
              { target: 0, suffix: "", label: "Ads, ever", static: true },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 150}>
                <div className="text-center">
                  <p className="font-mono text-4xl font-bold text-accent-cyan md:text-5xl">
                    {stat.static ? (
                      "0"
                    ) : (
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                      />
                    )}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE (alternating) ── */}
      <section id="features" className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-24 max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-px w-8 bg-accent-cyan/60" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
                  Core Systems
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Every tool solves a real
                <br />
                cockpit problem
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary">
                Three flagship features powered by live aviation data. Plus six
                more calculators and references — all working offline.
              </p>
            </div>
          </ScrollReveal>

          {/* Alternating 2-col showcases */}
          <div className="space-y-28">
            {showcaseFeatures.map((feature, i) => {
              const Visual = visuals[feature.visual];
              const reversed = i % 2 === 1;

              return (
                <div
                  key={feature.tag}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <ScrollReveal
                    direction={reversed ? "right" : "left"}
                    className={reversed ? "lg:[direction:ltr]" : ""}
                  >
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2">
                        <span className="rounded-md border border-accent-cyan/20 bg-accent-cyan/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-accent-cyan">
                          {feature.tag}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-accent-green">
                            Live
                          </span>
                        </div>
                      </div>
                      <h3 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                        {feature.title}
                      </h3>
                      <p className="mt-4 max-w-md leading-relaxed text-text-secondary">
                        {feature.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {feature.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm text-text-secondary"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal
                    direction={reversed ? "left" : "right"}
                    delay={200}
                    className={reversed ? "lg:[direction:ltr]" : ""}
                  >
                    {Visual && <Visual />}
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MORE TOOLS GRID ── */}
      <section className="relative py-28">
        <div className="absolute inset-x-0 top-0 flex justify-center">
          <div className="h-px w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-border-custom/50 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-accent-cyan/40" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-cyan">
                  More tools
                </span>
                <div className="h-px w-8 bg-accent-cyan/40" />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Six more for the toolkit
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {gridFeatures.map((feature, i) => (
              <ScrollReveal key={feature.tag} delay={i * 80}>
                <div className="instrument-card rounded-xl border border-card-border/60 bg-card-bg/60 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md border border-accent-cyan/20 bg-accent-cyan/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-accent-cyan">
                      {feature.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent-green">
                        Live
                      </span>
                    </div>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                  <div className="mt-5 h-px w-full bg-gradient-to-r from-border-custom/40 to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILOT QUOTE ── */}
      <section className="relative py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.02] blur-[120px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-card-border/40 bg-card-bg/40 px-8 py-12 text-center backdrop-blur-sm md:px-16">
              {/* Decorative quote marks */}
              <div className="pointer-events-none absolute left-6 top-6 font-display text-6xl leading-none text-accent-cyan/10 md:left-10 md:top-8 md:text-8xl">
                &ldquo;
              </div>
              <p className="relative z-10 font-display text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
                Built by pilots with our dev team to solve real cockpit workflow
                needs. The tools we wished we had on every flight.
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="h-px w-8 bg-accent-cyan/30" />
                <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
                  Volo Team
                </span>
                <div className="h-px w-8 bg-accent-cyan/30" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="scanlines relative py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.03] blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
          <ScrollReveal>
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
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
