import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { ShieldCheck, Clock3, Languages, Cloud } from "lucide-react";

/* ── Data ── */
const showcaseFeatures = [
  {
    tag: "WX",
    title: "Operational Suitability",
    description:
      "Auto-fetch TAFs for any airport and instantly check weather against OM Part A minima. Color-coded results show suitability at a glance.",
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
      "Paste your North Atlantic route and validate every waypoint against the HLA database. Great-circle distance and bearing for each leg.",
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
      "Enter your flight number and get instant runway assignments, SID information, and taxi estimates. Live data for LTFM from IGA CDM.",
    details: [
      "Live IGA CDM integration for Istanbul",
      "FlightAware fallback for worldwide coverage",
      "Runway and SID assignments in seconds",
    ],
    visual: "departure",
  },
];

const gridFeatures = [
  { tag: "REST", title: "Crew Rest Time", description: "Calculate overlapping rest slots for 2\u20134 pilots with fatigue regulation compliance." },
  { tag: "SLOT", title: "CTOT Calculator", description: "Compute Target Off-Block Times accounting for taxi time and slot tolerance." },
  { tag: "TEMP", title: "Cold Temp Correction", description: "ICAO cold temperature altitude corrections for safe instrument approaches." },
  { tag: "PA", title: "Cabin Announcements", description: "Bilingual EN/TR briefing scripts for every phase from welcome to emergency." },
  { tag: "REF", title: "Metric Table", description: "Instant meters-to-feet altitude conversions for RVSM airspace." },
  { tag: "CRG", title: "Cargo Codes", description: "Searchable IMP cargo code reference for DG, perishables, and special handling." },
];

const trustItems = [
  {
    label: "OM Part A Compliant",
    icon: ShieldCheck,
  },
  {
    label: "Real-Time Data",
    icon: Clock3,
  },
  {
    label: "EN/TR Support",
    icon: Languages,
  },
  {
    label: "Offline + Online Capable",
    icon: Cloud,
  },
];

/* ── Visual mocks ── */
function SuitabilityMock() {
  return (
    <div className="rounded-2xl border border-card-border/50 bg-card-bg/70 p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[15px] font-medium text-text-secondary">Suitability Check</span>
        <span className="font-mono text-[12px] text-text-dim">3 airports</span>
      </div>
      {[
        { icao: "EGLL", name: "Heathrow", status: "SUITABLE", color: "text-accent-green", bg: "bg-accent-green/5", border: "border-accent-green/15" },
        { icao: "LFPG", name: "De Gaulle", status: "MARGINAL", color: "text-accent-amber", bg: "bg-accent-amber/5", border: "border-accent-amber/15" },
        { icao: "EHAM", name: "Schiphol", status: "SUITABLE", color: "text-accent-green", bg: "bg-accent-green/5", border: "border-accent-green/15" },
      ].map((apt) => (
        <div key={apt.icao} className={`mb-3 flex items-center justify-between rounded-xl border ${apt.border} ${apt.bg} px-6 py-4 last:mb-0`}>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[16px] font-semibold text-foreground">{apt.icao}</span>
            <span className="text-[14px] text-text-dim">{apt.name}</span>
          </div>
          <span className={`font-mono text-[13px] font-medium ${apt.color}`}>{apt.status}</span>
        </div>
      ))}
    </div>
  );
}

function NatMock() {
  return (
    <div className="rounded-2xl border border-card-border/50 bg-card-bg/70 p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[15px] font-medium text-text-secondary">Route Validation</span>
        <span className="font-mono text-[12px] text-accent-green">VALID</span>
      </div>
      <div className="space-y-2.5">
        {[
          { wpt: "MALOT", dist: "\u2014", brg: "\u2014" },
          { wpt: "56N020W", dist: "342 nm", brg: "312\u00b0" },
          { wpt: "57N030W", dist: "387 nm", brg: "298\u00b0" },
          { wpt: "56N040W", dist: "401 nm", brg: "284\u00b0" },
          { wpt: "CLAVY", dist: "256 nm", brg: "271\u00b0" },
        ].map((leg, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl bg-background/40 px-5 py-3">
            <span className="font-mono text-[14px] font-medium text-accent-cyan">{leg.wpt}</span>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[13px] text-text-secondary">{leg.dist}</span>
              <span className="font-mono text-[13px] text-text-dim">{leg.brg}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DepartureMock() {
  return (
    <div className="rounded-2xl border border-card-border/50 bg-card-bg/70 p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[15px] font-medium text-text-secondary">Departure Info</span>
        <span className="font-mono text-[12px] text-accent-cyan">THY 1990</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Runway", value: "35L", color: "text-accent-cyan" },
          { label: "SID", value: "BAVMA 2A", color: "text-accent-green" },
          { label: "CTOT", value: "08:25Z", color: "text-accent-amber" },
          { label: "Gate", value: "F12", color: "text-foreground" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-border-custom/25 bg-background/30 px-5 py-5">
            <p className="mb-2 text-[12px] font-medium uppercase tracking-wider text-text-dim">{item.label}</p>
            <p className={`font-mono text-2xl font-bold ${item.color}`}>{item.value}</p>
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

/* ── Radar ── */
function RadarSweep() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.03]" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.05]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-cyan/[0.04] to-transparent" />
      <div className="animate-radar absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full" style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.04) 40deg, transparent 80deg)" }} />
      </div>
    </div>
  );
}

/* ── MFD ── */
function MfdDisplay() {
  return (
    <div className="rounded-2xl border border-card-border/50 bg-card-bg/60 p-6 backdrop-blur-sm">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="animate-blink h-2 w-2 rounded-full bg-accent-green" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-accent-green">Online</span>
        </div>
        <span className="font-mono text-[11px] text-text-dim">v1.0.0</span>
      </div>
      <div className="mb-4 rounded-xl border border-border-custom/25 bg-background/40 p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium uppercase tracking-wider text-text-dim">Active route</span>
          <span className="font-mono text-[12px] text-accent-cyan">THY 1990</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-2xl font-bold">LTFM</p>
            <p className="text-[12px] text-text-dim">Istanbul</p>
          </div>
          <div className="flex flex-1 items-center px-5">
            <div className="h-px flex-1 bg-gradient-to-r from-accent-cyan/30 to-transparent" />
            <div className="mx-3 flex h-8 w-8 items-center justify-center rounded-full border border-accent-cyan/20 bg-accent-cyan/5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-accent-cyan">
                <path d="M2 7h10m0 0L8.5 3.5M12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-accent-green/30 to-transparent" />
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">EGLL</p>
            <p className="text-[12px] text-text-dim">London</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { label: "OPS SUIT", value: "OK", color: "text-accent-green" },
          { label: "REST", value: "12:40", color: "text-accent-cyan" },
          { label: "CTOT", value: "08:25Z", color: "text-accent-amber" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-border-custom/20 bg-background/25 px-3 py-3 text-center">
            <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-text-dim">{item.label}</p>
            <p className={`font-mono text-[15px] font-bold ${item.color}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ══════════════════════ PAGE ══════════════════════ */
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center px-10 pt-[72px] lg:px-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.025] blur-[160px]" />
        </div>
        <RadarSweep />

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
            {/* Left — Copy */}
            <div>
              <div className="animate-fade-up">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-border-custom/30 bg-card-bg/50 px-5 py-2.5 text-[14px] text-text-secondary backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-green" />
                  </span>
                  Pilot companion app
                </span>
              </div>

              <h1 className="animate-fade-up delay-200 mt-10 text-[clamp(3rem,5.5vw,5rem)] font-bold leading-[1.1] tracking-[-0.025em]">
                Your flight ops
                <br />
                toolkit,{" "}
                <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
                  in your pocket
                </span>
              </h1>

              <p className="animate-fade-up delay-400 mt-8 max-w-[500px] text-[18px] leading-relaxed text-text-secondary">
                Check weather suitability, calculate crew rest and slot times,
                verify NAT routes, and run cabin briefings — all offline, from one app.
              </p>

              <div className="animate-fade-up delay-500 mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#features"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-accent-cyan px-8 py-4 text-[15px] font-semibold text-background transition-all hover:shadow-[0_0_32px_rgba(0,212,255,0.18)]"
                >
                  Explore Features
                  <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10m0 0L8.5 3.5M12 7L8.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="flex items-center gap-2.5 rounded-xl border border-border-custom/40 px-6 py-4">
                  <span className="h-2 w-2 rounded-full bg-accent-amber" />
                  <span className="text-[14px] text-text-secondary">App Store — Soon</span>
                </div>
              </div>
            </div>

            {/* Right — MFD */}
            <div className="animate-fade-up delay-600 hidden lg:block">
              <MfdDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="border-y border-border-custom/15 py-16">
        <div className="mx-auto max-w-[1400px] px-10 lg:px-14">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-[54px] w-[54px] items-center justify-center text-accent-cyan">
                    <item.icon className="h-[54px] w-[54px]" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <p className="text-[14px] font-medium tracking-wide text-text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-[1100px] px-10 lg:px-14">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-2">
            {[
              { target: 11, suffix: "", label: "Pilot Tools" },
              { target: 0, suffix: "", label: "Ads, Ever", static: true },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 120}>
                <div className="text-center">
                  <p className="font-mono text-[46px] font-bold leading-none text-accent-cyan md:text-[54px]">
                    {stat.static ? "0" : <AnimatedCounter target={stat.target} suffix={stat.suffix} />}
                  </p>
                  <p className="mt-4 text-[14px] font-medium tracking-wide text-text-secondary">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURE SHOWCASE ── */}
      <section id="features" className="py-28">
        <div className="mx-auto max-w-[1400px] px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-24 max-w-[650px]">
              <p className="mb-5 text-[14px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
                Features
              </p>
              <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
                Every tool solves a real cockpit problem
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-text-secondary">
                Three flagship features powered by live aviation data, plus six
                more calculators and references — all working offline.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-36">
            {showcaseFeatures.map((feature, i) => {
              const Visual = visuals[feature.visual];
              const reversed = i % 2 === 1;
              return (
                <div key={feature.tag} className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${reversed ? "lg:[direction:rtl]" : ""}`}>
                  <ScrollReveal direction={reversed ? "right" : "left"} className={reversed ? "lg:[direction:ltr]" : ""}>
                    <div>
                      <span className="mb-5 inline-block rounded-full border border-accent-cyan/15 bg-accent-cyan/5 px-4 py-1.5 font-mono text-[12px] font-medium uppercase tracking-widest text-accent-cyan">
                        {feature.tag}
                      </span>
                      <h3 className="text-[30px] font-bold leading-[1.2] tracking-[-0.015em] md:text-[36px]">
                        {feature.title}
                      </h3>
                      <p className="mt-5 max-w-[460px] text-[16px] leading-relaxed text-text-secondary">
                        {feature.description}
                      </p>
                      <ul className="mt-7 space-y-3.5">
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-[15px] text-text-secondary">
                            <svg className="mt-1 h-4 w-4 shrink-0 text-accent-cyan" viewBox="0 0 16 16" fill="none">
                              <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction={reversed ? "left" : "right"} delay={150} className={reversed ? "lg:[direction:ltr]" : ""}>
                    {Visual && <Visual />}
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MORE TOOLS ── */}
      <section className="py-28">
        <div className="mx-auto max-w-[1400px] px-10 lg:px-14">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-5 text-[14px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
                More Tools
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.015em]">
                Six more for the toolkit
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridFeatures.map((feature, i) => (
              <ScrollReveal key={feature.tag} delay={i * 70}>
                <div className="instrument-card rounded-2xl border border-card-border/50 bg-card-bg/50 p-8">
                  <span className="mb-5 inline-block rounded-full border border-accent-cyan/15 bg-accent-cyan/5 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-accent-cyan">
                    {feature.tag}
                  </span>
                  <h3 className="mb-3 text-[19px] font-semibold tracking-tight">{feature.title}</h3>
                  <p className="text-[15px] leading-relaxed text-text-secondary">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-28">
        <div className="mx-auto max-w-[900px] px-10 lg:px-14">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-card-border/30 bg-card-bg/30 px-12 py-16 text-center backdrop-blur-sm md:px-20">
              <div className="pointer-events-none absolute left-8 top-6 text-[80px] leading-none text-accent-cyan/8 md:left-14 md:top-10">
                &ldquo;
              </div>
              <p className="relative z-10 text-[22px] font-medium leading-[1.6] tracking-[-0.01em] md:text-[26px]">
                Built by pilots with our dev team to solve real cockpit workflow
                needs. The tools we wished we had on every flight.
              </p>
              <p className="mt-10 text-[14px] tracking-wide text-text-dim">The Volo Team</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.02] blur-[140px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[650px] px-10 text-center">
          <ScrollReveal>
            <p className="mb-5 text-[14px] font-medium uppercase tracking-[0.15em] text-accent-cyan">
              Get Started
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em]">
              Ready for your next flight?
            </h2>
            <p className="mt-6 text-[17px] text-text-secondary">
              Bring a smarter toolkit to the flight deck.
            </p>
            <div className="mt-12 inline-flex items-center gap-3 rounded-full border border-border-custom/30 bg-card-bg/50 px-7 py-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-amber opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-amber" />
              </span>
              <span className="text-[15px] text-text-secondary">Coming soon to the App Store</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
