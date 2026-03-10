"use client";

import { useRef, useState, useEffect } from "react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { Layers, Clock3, Cloud, SunMoon, Tablet, Smartphone } from "lucide-react";

/* ── Data ── */
const showcaseFeatures = [
  {
    tag: "WX",
    title: "Operational Suitability",
    description:
      "Auto-fetch TAFs for any airport and instantly check weather against ICAO minima. Color-coded results show suitability at a glance.",
    details: [
      "Paste airports and suitability times straight from your OFP — saves tremendous time",
      "Rule engine for ICAO weather minima",
      "Shareable PDF report for the whole flight",
    ],
    visual: "suitability",
  },
  {
    tag: "NAV",
    title: "NAT HLA Route Verification",
    description:
      "Paste your North Atlantic route and validate every waypoint against the HLA database. Great-circle distance and bearing for each leg.",
    details: [
      "Paste your route directly from the OFP — instant verification",
      "Great-circle distance & initial bearing per leg",
      "Export results as a shareable PDF",
    ],
    visual: "nat",
  },
  {
    tag: "TEMP",
    title: "Cold Temp Correction",
    description:
      "Apply ICAO cold temperature altitude corrections for safe instrument approaches. Enter aerodrome temp and published altitude to get corrected values.",
    details: [
      "ICAO standard cold temperature correction formula",
      "Supports FAF, step-down fix, and MDA/DA altitudes",
      "Export corrected altitudes as a shareable PDF",
    ],
    visual: "coldtemp",
  },
  {
    tag: "DEP",
    title: "Departure Assist",
    description:
      "Enter your flight number and get instant runway assignments, SID information, and taxi estimates. Live data for LTFM from IGA CDM.",
    details: [
      "Live IGA CDM integration for Istanbul",
      "Worldwide coverage via public flight data",
      "Runway and SID assignments in seconds",
    ],
    visual: "departure",
  },
];

/* Grid: app order (left-to-right, top-to-bottom), coming soon last */
const gridFeatures = [
  { tag: "REST", title: "Crew Rest Time", description: "Calculate overlapping rest slots for 2–4 pilots with a clean, intuitive interface designed for quick inflight use." },
  { tag: "SLOT", title: "CTOT Calculator", description: "Compute Target Off-Block Times and boarding start times, accounting for taxi time and slot tolerance." },
  { tag: "REF", title: "Metric Table", description: "Instant meters-to-feet altitude conversion table for RVSM airspace. Export the full table as PDF for quick reference." },
  { tag: "CRG", title: "Cargo Codes", description: "Searchable IMP cargo code reference for DG, perishables, and special handling." },
  { tag: "TIME", title: "Times Calculator", description: "Add hours and minutes for flight time logbook entries, duty periods, and scheduling." },
  { tag: "PA", title: "Cabin Announcements", description: "Bilingual EN/TR announcement scripts for every phase from welcome to emergency.", comingSoon: true },
];

const trustItems = [
  {
    label: "All-in-One",
    icon: Layers,
  },
  {
    label: "Real-Time Data",
    icon: Clock3,
  },
  {
    label: "Offline + Online Capable",
    icon: Cloud,
  },
  {
    label: "Day & Night Mode",
    icon: SunMoon,
  },
];

/* ── Visual mocks ── */
function SuitabilityMock() {
  const suitRef = useRef<HTMLDivElement>(null);
  const [suitInView, setSuitInView] = useState(false);

  useEffect(() => {
    const el = suitRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSuitInView(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* Airport list (input view) — colors from TYPE_COLORS in op-suitability.tsx */
  const airports = [
    { icao: "LTFM", role: "DEP", time: "1150–1350Z", color: "#22c55e" },
    { icao: "KJFK", role: "DEST", time: "2204–0004Z", color: "#00d4ff" },
    { icao: "KEWR", role: "DEST ALTN", time: "2204–0036Z", color: "#f59e0b" },
    { icao: "LHBP", role: "IA", time: "1320–1621Z", color: "#94a3b8" },
    { icao: "EINN", role: "ETOPS ALT", time: "1732–2034Z", color: "#f59e0b" },
    { icao: "BIKF", role: "ETOPS ALT", time: "1825–2226Z", color: "#f59e0b" },
    { icao: "CYYT", role: "ETOPS ALT", time: "2005–2222Z", color: "#f59e0b" },
  ];

  /* TAF result view — SEVERITY_COLORS_DARK from op-suitability.tsx */
  const S = {
    red:   { bg: "rgba(239,68,68,0.12)", border: "#ef4444", tc: "#fca5a5" },
    green: { bg: "rgba(34,197,94,0.12)", border: "#22c55e", tc: "#bbf7d0" },
    none:  { bg: "transparent", border: "transparent", tc: "" },
  };
  const tafResults = [
    {
      icao: "LTFM", role: "DEP", roleColor: "#22c55e", time: "1150–1350Z",
      lines: [
        { text: "TAF LTFM 040440Z 0406/0512 VRB02KT 0300 FG VV001", ...S.red },
        { text: "BECMG 0406/0409 01012KT 9999 NSW SCT030", ...S.none },
        { text: "BECMG 0409/0412 CAVOK", ...S.green },
        { text: "BECMG 0415/0418 SCT012", ...S.none },
        { text: "BECMG 0418/0421 21007KT", ...S.none },
        { text: "PROB40 TEMPO 0420/0424 2500 BR BKN009", ...S.none },
        { text: "BECMG 0504/0507 CAVOK", ...S.none },
      ],
    },
    {
      icao: "KJFK", role: "DEST", roleColor: "#00d4ff", time: "2204–0004Z",
      lines: [
        { text: "TAF KJFK 040833Z 0409/0512 VRB05KT 3SM BR BKN006 OVC020", ...S.red },
        { text: "FM041300 32006KT 5SM BR FEW006 BKN015", ...S.none },
        { text: "FM041600 36005KT P6SM FEW020 SCT250", ...S.none },
        { text: "FM042000 VRB05KT P6SM SCT100 BKN250", ...S.green },
        { text: "FM050400 VRB02KT 6SM BR SCT008 BKN100 BKN250", ...S.none },
        { text: "FM050700 VRB02KT 3SM BR BKN008", ...S.none },
      ],
    },
  ];

  return (
    <div ref={suitRef} className="relative overflow-hidden rounded-2xl border border-card-border/50 bg-card-bg/70">
      {/* View A — Airport List */}
      <div className={suitInView ? "animate-crossfade-a" : ""}>
        <div className="border-b border-border-custom/15 px-5 py-3">
          <span className="text-[12px] font-medium uppercase tracking-wider text-text-dim">Airport List</span>
        </div>
        <div className="divide-y divide-border-custom/10">
          {airports.map((apt) => (
            <div key={apt.icao + apt.role} className="flex items-center justify-between px-5 py-3">
              <span className="font-mono text-[16px] font-bold text-foreground">{apt.icao}</span>
              <div
                className="rounded-lg border px-3 py-1.5"
                style={{ backgroundColor: `${apt.color}12`, borderColor: `${apt.color}40` }}
              >
                <span className="text-[11px] font-bold" style={{ color: apt.color }}>{apt.role}</span>
                <span className="ml-2 font-mono text-[11px] font-medium text-text-secondary">{apt.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border-custom/15 px-5 py-4">
          <div className="flex h-[44px] items-center justify-center rounded-xl bg-accent-cyan text-[15px] font-semibold text-background">
            Check Suitability
          </div>
        </div>
      </div>

      {/* View B — TAF Results (stacked, absolute overlay) */}
      <div className={`${suitInView ? "animate-crossfade-b" : "opacity-0"} absolute inset-0 flex flex-col`}>
        <div className="flex-1 overflow-hidden">
          {tafResults.map((taf) => (
            <div key={taf.icao}>
              <div className="flex items-center justify-between border-b border-border-custom/15 px-4 py-3">
                <span className="font-mono text-[22px] font-bold text-foreground">{taf.icao}</span>
                <div
                  className="rounded-lg border px-2 py-1"
                  style={{ backgroundColor: `${taf.roleColor}15`, borderColor: `${taf.roleColor}50` }}
                >
                  <span className="text-[13px] font-bold leading-tight" style={{ color: taf.roleColor }}>{taf.role}</span>
                  <div className="font-mono text-[13px] font-medium leading-tight text-text-dim">{taf.time}</div>
                </div>
              </div>
              <div className="px-3.5 py-1">
                {taf.lines.map((line: { text: string; bg: string; border: string; tc: string }, i: number) => (
                  <div
                    key={i}
                    className="my-px rounded"
                    style={{
                      backgroundColor: line.bg,
                      borderLeft: `3px solid ${line.border}`,
                      paddingLeft: line.border !== "transparent" ? 8 : 0,
                      paddingTop: line.border !== "transparent" ? 3 : 0,
                      paddingBottom: line.border !== "transparent" ? 3 : 0,
                    }}
                  >
                    <pre
                      className="whitespace-pre-wrap font-mono text-[13px] text-foreground"
                      style={{
                        color: line.tc || undefined,
                        lineHeight: "20px",
                      }}
                    >{line.text}</pre>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-3">
          <div
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2"
            style={{ backgroundColor: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.25)" }}
          >
            <svg className="h-5 w-5 text-accent-cyan" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l3-3 3 3M12 3v12M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] text-accent-cyan">PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NatMock() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const legs = [
    { from: "MALOT", to: "56N020W", tt: "312\u00b0", dist: "342" },
    { from: "56N020W", to: "57N030W", tt: "298\u00b0", dist: "387" },
    { from: "57N030W", to: "56N040W", tt: "284\u00b0", dist: "401" },
    { from: "56N040W", to: "CLAVY", tt: "271\u00b0", dist: "256" },
  ];

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl border border-card-border/50 bg-card-bg/70">
      {/* View A — Route Input (named waypoints) */}
      <div className={inView ? "animate-cf3-a" : ""}>
        <div className="px-5 py-4">
          <span className="mb-2 block text-[12px] font-medium text-text-dim">Route Waypoints</span>
          <div className="rounded-xl border border-border-custom/30 bg-background/40 px-4 py-4" style={{ minHeight: 150 }}>
            <pre className="font-mono text-[14px] leading-relaxed text-foreground">MALOT 56/20 57/30 56/40 CLAVY</pre>
          </div>
          <p className="mt-3 text-center text-[12px] text-text-dim">Paste your NAT route directly from the OFP</p>
          <div className="mt-3">
            <div className="flex h-[44px] items-center justify-center rounded-xl bg-accent-cyan text-[15px] font-semibold text-background">
              Verify Route
            </div>
          </div>
        </div>
      </div>

      {/* View B — Same route, different format (DDN coordinates) */}
      <div className={`${inView ? "animate-cf3-b" : "opacity-0"} absolute inset-0`}>
        <div className="px-5 py-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[12px] font-medium text-text-dim">Route Waypoints</span>
            <span className="text-[11px] text-accent-cyan">Supports many different formats</span>
          </div>
          <div className="rounded-xl border border-border-custom/30 bg-background/40 px-4 py-4" style={{ minHeight: 150 }}>
            <pre className="font-mono text-[14px] leading-relaxed text-foreground">MALOT DCT 5620N DCT 5730N{"\n"}DCT 5640N DCT CLAVY</pre>
          </div>
          <p className="mt-3 text-center text-[12px] text-text-dim">Paste your NAT route directly from the OFP</p>
          <div className="mt-3">
            <div className="flex h-[44px] items-center justify-center rounded-xl bg-accent-cyan text-[15px] font-semibold text-background">
              Verify Route
            </div>
          </div>
        </div>
      </div>

      {/* View C — Results Table */}
      <div className={`${inView ? "animate-cf3-c" : "opacity-0"} absolute inset-0 flex flex-col`}>
        <div className="flex-1 overflow-hidden">
          <div className="flex bg-background/60 px-5 py-3">
            <span className="flex-1 text-[11px] font-bold uppercase tracking-widest text-text-dim">From</span>
            <span className="flex-1 text-[11px] font-bold uppercase tracking-widest text-text-dim">To</span>
            <span className="w-16 text-right text-[11px] font-bold uppercase tracking-widest text-text-dim">TT (&deg;)</span>
            <span className="w-16 text-right text-[11px] font-bold uppercase tracking-widest text-text-dim">Dist</span>
          </div>
          {legs.map((leg, i) => (
            <div key={i} className="flex border-b border-accent-cyan/[0.08] px-5 py-2.5 last:border-b-0">
              <span className="flex-1 font-mono text-[13px] font-medium text-foreground">{leg.from}</span>
              <span className="flex-1 font-mono text-[13px] font-medium text-foreground">{leg.to}</span>
              <span className="w-16 text-right font-mono text-[13px] font-bold text-accent-cyan">{leg.tt}</span>
              <span className="w-16 text-right font-mono text-[13px] font-bold text-accent-cyan">{leg.dist}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center py-2">
          <div
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2"
            style={{ backgroundColor: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.25)" }}
          >
            <svg className="h-5 w-5 text-accent-cyan" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l3-3 3 3M12 3v12M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[12px] text-accent-cyan">PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColdTempMock() {
  const fixes = [
    { label: "Fix 1", input: "3200", result: "3520" },
    { label: "Fix 2", input: "2800", result: "3060" },
    { label: "Fix 3", input: "5000", result: "5500" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-card-border/50 bg-card-bg/70">
      {/* Inputs: Temp + Elevation */}
      <div className="border-b border-border-custom/15 px-5 py-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[12px] font-medium uppercase tracking-wider text-text-dim">Aerodrome Temp</span>
          <span className="font-mono text-[15px] font-bold text-foreground">&minus;15 &deg;C</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-medium uppercase tracking-wider text-text-dim">Aerodrome Elev</span>
          <span className="font-mono text-[15px] font-bold text-foreground">2,000 ft</span>
        </div>
      </div>
      {/* Fix rows */}
      <div className="px-5 py-4 space-y-3">
        {fixes.map((fix) => (
          <div key={fix.label} className="flex items-end gap-3">
            <div className="flex-1">
              <span className="mb-1 block text-[12px] font-medium text-text-dim">{fix.label}</span>
              <div className="rounded-xl border border-border-custom/30 bg-background/40 px-4 py-2.5">
                <span className="font-mono text-[14px] text-foreground">{fix.input}</span>
              </div>
            </div>
            <div className="rounded-xl border border-accent-cyan/30 bg-accent-cyan/[0.08] px-4 py-2.5">
              <span className="font-mono text-[14px] font-bold text-accent-cyan">&rarr; {fix.result} ft</span>
            </div>
          </div>
        ))}
      </div>
      {/* Share PDF pill */}
      <div className="flex items-center justify-center py-2">
        <div className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2"
          style={{ backgroundColor: "rgba(0,212,255,0.1)", borderColor: "rgba(0,212,255,0.25)" }}>
          <svg className="h-5 w-5 text-accent-cyan" viewBox="0 0 24 24" fill="none">
            <path d="M9 6l3-3 3 3M12 3v12M5 10v9a1 1 0 001 1h12a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] text-accent-cyan">PDF</span>
        </div>
      </div>
    </div>
  );
}

function DepartureMock() {
  const rows = [
    { label: "EOBT", value: "07:50Z", highlight: true },
    { label: "TOBT", value: "07:45Z", highlight: false },
    { label: "TSAT", value: "07:52Z", highlight: true },
    { label: "CTOT", value: "08:25Z", highlight: false },
    { label: "Stand", value: "F12", highlight: false },
    { label: "Runway", value: "35L", highlight: true },
    { label: "SID", value: "BAVMA 2A", highlight: false },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-card-border/50 bg-card-bg/70">
      <div className="flex items-center justify-between border-b border-accent-cyan/15 px-5 py-3.5">
        <div>
          <div className="font-mono text-[20px] font-bold text-foreground">THY 1990</div>
          <div className="font-mono text-[14px] text-text-dim mt-0.5">TK1990</div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[20px] font-bold text-accent-cyan">LTFM → EGLL</div>
          <div className="font-mono text-[14px] text-text-dim mt-0.5">B77W</div>
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className={`flex items-center justify-between border-b border-accent-cyan/[0.08] px-5 py-3 last:border-b-0 ${row.highlight ? "bg-accent-cyan/[0.04]" : ""}`}
        >
          <span className="text-[14px] font-medium text-text-dim">{row.label}</span>
          <span className="font-mono text-[15px] font-bold text-foreground">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

const visuals: Record<string, () => React.ReactNode> = {
  suitability: SuitabilityMock,
  nat: NatMock,
  coldtemp: ColdTempMock,
  departure: DepartureMock,
};

/* ── Radar ── */
function RadarSweep() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[46%] h-[1500px] w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.008] blur-[200px]" />

      <div className="absolute left-1/2 top-[46%] h-[1280px] w-[1280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.013]" />
      <div className="absolute left-1/2 top-[46%] h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.01]" />
      <div className="absolute left-1/2 top-[46%] h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-cyan/[0.013]" />

      <div className="absolute left-1/2 top-[46%] h-px w-[1400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-accent-cyan/[0.014] to-transparent" />
      <div className="absolute left-1/2 top-[46%] h-[1400px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-accent-cyan/[0.014] to-transparent" />

      <div className="animate-radar absolute left-1/2 top-[46%] h-[1280px] w-[1280px] -translate-x-1/2 -translate-y-1/2 rounded-full">
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0,212,255,0.055) 0deg, rgba(0,212,255,0.024) 40deg, rgba(0,212,255,0.005) 84deg, transparent 130deg, transparent 360deg)",
            filter: "blur(1.2px)",
          }}
        />
      </div>

      <div
        className="absolute left-1/2 top-[46%] h-[1280px] w-[1280px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ animation: "radar-sweep 28s linear infinite reverse" }}
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, rgba(34,197,94,0.02) 0deg, rgba(34,197,94,0.009) 24deg, transparent 62deg, transparent 360deg)",
            filter: "blur(1.4px)",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-[46%] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/25 shadow-[0_0_12px_rgba(0,212,255,0.16)]" />
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
      <section className="hero-section relative flex min-h-screen items-center justify-center px-10 lg:px-14">
        {/* Mobile: top-down glow */}
        <div className="pointer-events-none absolute inset-0 lg:hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent-cyan/[0.04] blur-[160px]" />
        </div>
        {/* Desktop: full radar + glow */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="animate-pulse-glow absolute left-1/2 top-[35%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-accent-cyan/[0.025] blur-[160px]" />
        </div>
        <div className="hidden lg:block">
          <RadarSweep />
        </div>

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
                  Airline pilot companion app
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

              <div className="animate-fade-up delay-300 mt-6 inline-flex items-center gap-3 rounded-full border border-accent-cyan/20 bg-accent-cyan/[0.06] px-5 py-2.5">
                <div className="flex items-center gap-1.5 text-accent-cyan">
                  <Smartphone className="h-4 w-4" />
                  <span className="text-[13px] font-semibold">iPhone</span>
                </div>
                <span className="text-[16px] font-bold text-accent-cyan/50">+</span>
                <div className="flex items-center gap-1.5 text-accent-cyan">
                  <Tablet className="h-4 w-4" />
                  <span className="text-[13px] font-semibold">iPad</span>
                </div>
              </div>

              <p className="animate-fade-up delay-400 mt-8 max-w-[500px] text-[18px] leading-relaxed text-text-secondary">
                Check weather suitability, calculate crew rest and slot times, cold temperature corrections, verify NAT routes, metric table and flight time calculator — all offline, from one app.
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
              { target: 9, suffix: "+", label: "Pilot Tools" },
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
                Four flagship features powered by live aviation data, plus seven
                more calculators and references — all working offline.*
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
                Seven more for the toolkit
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridFeatures.map((feature, i) => (
              <ScrollReveal key={feature.tag} delay={i * 70}>
                <div className="instrument-card relative rounded-2xl border border-card-border/50 bg-card-bg/50 p-8">
                  {"comingSoon" in feature && feature.comingSoon && (
                    <span className="absolute right-5 top-5 rounded-full border border-accent-amber/20 bg-accent-amber/10 px-3 py-1 text-[11px] font-medium text-accent-amber">
                      Coming Soon
                    </span>
                  )}
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

      {/* ── FOOTNOTE ── */}
      <div className="mx-auto max-w-[1400px] px-10 pb-12 lg:px-14">
        <p className="text-[13px] leading-relaxed text-text-dim">
          *Operational Suitability and Departure Assist require an internet connection for real-time weather and flight data.
        </p>
      </div>
    </main>
  );
}
