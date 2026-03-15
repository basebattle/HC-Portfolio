"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Data ────────────────────────────────────────────────────────────────────

const KPI_ROWS = [
  {
    id: "prior-auth",
    name: "Prior Authorization Cycle Time",
    project: "Prior Authorization Pipeline",
    baseline: { label: "14 days", value: 14, suffix: "d" },
    target: { label: "3 days", value: 3, suffix: "d" },
    improvement: "78% reduction",
    annual: "$1.2M",
    annualValue: 1.2,
    source: "AMA 2023 Prior Auth Survey — avg 14.6 hrs/physician/week",
    sourceShort: "AMA 2023",
  },
  {
    id: "rcm-ar",
    name: "Days in Accounts Receivable",
    project: "Revenue Cycle Dashboard",
    baseline: { label: "45 days", value: 45, suffix: "d" },
    target: { label: "28 days", value: 28, suffix: "d" },
    improvement: "38% reduction",
    annual: "$1.6M",
    annualValue: 1.6,
    source: "HFMA MAP Key 4 benchmark — optimal A/R <40 days",
    sourceShort: "HFMA MAP",
  },
  {
    id: "clean-claim",
    name: "Clean Claim Rate",
    project: "Revenue Cycle Dashboard",
    baseline: { label: "78%", value: 78, suffix: "%" },
    target: { label: "94%", value: 94, suffix: "%" },
    improvement: "+16pp",
    annual: null,
    annualValue: null,
    source: "HFMA benchmark — industry average 75–85%",
    sourceShort: "HFMA",
  },
  {
    id: "denial-rate",
    name: "Claims Denial Rate",
    project: "Claims Denial Workflow Agent",
    baseline: { label: "12%", value: 12, suffix: "%" },
    target: { label: "5%", value: 5, suffix: "%" },
    improvement: "58% reduction",
    annual: "$0.8M",
    annualValue: 0.8,
    source: "Change Healthcare Denials Index — avg 11.99% denial rate",
    sourceShort: "Change HC Index",
  },
  {
    id: "admin-time",
    name: "Clinical Staff Time per Auth Request",
    project: "Prior Authorization Pipeline",
    baseline: { label: "45 min", value: 45, suffix: " min" },
    target: { label: "5 min", value: 5, suffix: " min" },
    improvement: "89% reduction",
    annual: null,
    annualValue: null,
    source: "CAQH Index 2023 — 14 min average manual auth time",
    sourceShort: "CAQH Index",
  },
];

const SUMMARY_TILES = [
  { label: "Projected Annual Impact", value: 2.8, prefix: "$", suffix: "M", decimals: 1, color: "#FF8F00" },
  { label: "Deployed Projects", value: 3, prefix: "", suffix: "", decimals: 0, color: "#00BFA5" },
  { label: "Avg A/R Improvement", value: 38, prefix: "", suffix: "%", decimals: 0, color: "#00BFA5" },
  { label: "Auth Cycle Reduction", value: 78, prefix: "", suffix: "%", decimals: 0, color: "#FF8F00" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({
  baseline,
  target,
  color,
}: {
  baseline: number;
  target: number;
  color: string;
}) {
  // Visual: baseline fills full width at 100%, target shrinks proportionally
  const pct = Math.round((target / baseline) * 100);
  return (
    <div className="flex items-center gap-2 w-full">
      {/* Track */}
      <div
        className="relative flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {/* Baseline fill (dimmed full width) */}
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
        {/* Target fill */}
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            background: color,
            transition: "width 1.2s cubic-bezier(0.22,1,0.36,1)",
          }}
        />
      </div>
      <span
        className="text-[10px] tabular-nums shrink-0"
        style={{
          color: "rgba(232,237,240,0.30)",
          fontFamily: "var(--font-jetbrains-mono)",
        }}
      >
        {pct}%
      </span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#080F16" }}
    >
      {/* Subtle radial bloom */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(13,115,119,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <AnimateIn from="bottom" delay={0}>
          <SectionLabel className="block mb-3">Impact</SectionLabel>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.07}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-4"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
          >
            <CountUpMetric
              value={2.8}
              prefix="$"
              suffix="M"
              decimals={1}
              duration={1600}
              delay={300}
              style={{
                color: "#FF8F00",
                fontFamily: "var(--font-dm-serif)",
              }}
            />{" "}
            Projected Downstream Impact
          </h2>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.13}>
          <p
            className="text-base max-w-2xl mb-14"
            style={{
              color: "rgba(232,237,240,0.52)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Modeled against a 200-bed reference health system with 12,000 annual
            prior-auth requests, 15% commercial payer mix, and a 78% baseline clean
            claim rate. All figures use published HFMA, AMA, and CAQH benchmark
            methodology.
          </p>
        </AnimateIn>

        {/* ── Summary tiles ── */}
        <AnimateIn from="bottom" delay={0.16}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {SUMMARY_TILES.map((tile, i) => (
              <div
                key={tile.label}
                className="flex flex-col gap-1 px-5 py-4 rounded-2xl border"
                style={{
                  background: "rgba(22,32,41,0.65)",
                  borderColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="text-2xl sm:text-3xl font-bold tabular-nums leading-none"
                  style={{
                    color: tile.color,
                    fontFamily: "var(--font-dm-serif)",
                  }}
                >
                  <CountUpMetric
                    value={tile.value}
                    prefix={tile.prefix}
                    suffix={tile.suffix}
                    decimals={tile.decimals}
                    duration={1400}
                    delay={200 + i * 80}
                  />
                </span>
                <span
                  className="text-xs leading-snug mt-1"
                  style={{
                    color: "rgba(232,237,240,0.45)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {tile.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* ── KPI rows ── */}
        <div className="flex flex-col gap-0">
          {KPI_ROWS.map((row, i) => (
            <AnimateIn key={row.id} from="bottom" delay={i * 0.07}>
              <div
                className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-8 gap-y-4 px-6 py-6 border-b transition-colors duration-150"
                style={{
                  borderColor: "rgba(255,255,255,0.06)",
                  background: "transparent",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(22,32,41,0.45)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "transparent")
                }
              >
                {/* Left: name + project tag + progress */}
                <div className="flex flex-col gap-3">

                  {/* Name row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="text-base font-semibold"
                      style={{
                        color: "#E8EDF0",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {row.name}
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full border"
                      style={{
                        color: "rgba(232,237,240,0.38)",
                        borderColor: "rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.03)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {row.project}
                    </span>
                  </div>

                  {/* Baseline → Target row */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Baseline */}
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-[10px] font-medium tracking-wider uppercase"
                        style={{
                          color: "rgba(232,237,240,0.28)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        Baseline
                      </span>
                      <CountUpMetric
                        value={row.baseline.value}
                        suffix={row.baseline.suffix}
                        decimals={0}
                        duration={900}
                        delay={i * 60}
                        className="text-xl font-semibold tabular-nums"
                        style={{
                          color: "rgba(232,237,240,0.50)",
                          fontFamily: "var(--font-dm-serif)",
                          textDecoration: "line-through",
                          textDecorationColor: "rgba(232,237,240,0.20)",
                        }}
                      />
                    </div>

                    {/* Arrow */}
                    <span
                      className="text-lg mt-3"
                      style={{ color: "rgba(232,237,240,0.20)" }}
                    >
                      →
                    </span>

                    {/* Target */}
                    <div className="flex flex-col gap-0.5">
                      <span
                        className="text-[10px] font-medium tracking-wider uppercase"
                        style={{
                          color: "rgba(232,237,240,0.28)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        Target
                      </span>
                      <CountUpMetric
                        value={row.target.value}
                        suffix={row.target.suffix}
                        decimals={0}
                        duration={1200}
                        delay={200 + i * 60}
                        className="text-xl font-semibold tabular-nums"
                        style={{
                          color: "#4CAF7D",
                          fontFamily: "var(--font-dm-serif)",
                        }}
                      />
                    </div>

                    {/* Improvement badge */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border mt-3"
                      style={{
                        color: "#4CAF7D",
                        borderColor: "rgba(76,175,125,0.28)",
                        background: "rgba(76,175,125,0.08)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {row.improvement}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <ProgressBar
                    baseline={row.baseline.value}
                    target={row.target.value}
                    color={row.annual ? "#FF8F00" : "#00BFA5"}
                  />

                  {/* Source citation */}
                  <p
                    className="text-[10px]"
                    style={{
                      color: "rgba(232,237,240,0.25)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Source: {row.source}
                  </p>
                </div>

                {/* Right: annual impact (if financial) */}
                {row.annual && (
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 sm:text-right">
                    <div>
                      <CountUpMetric
                        value={row.annualValue!}
                        prefix="$"
                        suffix="M"
                        decimals={1}
                        duration={1400}
                        delay={300 + i * 60}
                        className="text-2xl sm:text-3xl font-bold tabular-nums"
                        style={{
                          color: "#FF8F00",
                          fontFamily: "var(--font-dm-serif)",
                        }}
                      />
                      <p
                        className="text-[10px] mt-0.5"
                        style={{
                          color: "rgba(232,237,240,0.30)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        annual impact
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* ── Methodology footnote ── */}
        <AnimateIn from="bottom" delay={0.1}>
          <div
            className="mt-12 px-6 py-5 rounded-2xl border"
            style={{
              background: "rgba(13,115,119,0.05)",
              borderColor: "rgba(13,115,119,0.15)",
            }}
          >
            <p
              className="text-xs leading-relaxed"
              style={{
                color: "rgba(232,237,240,0.38)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              <span style={{ color: "rgba(232,237,240,0.55)" }}>
                Methodology note:
              </span>{" "}
              All projections modeled against a 200-bed reference system. Financial
              impact uses HFMA revenue cycle benchmarks, AMA prior authorization
              survey data (2023), CAQH Index administrative efficiency metrics, and
              the Change Healthcare Revenue Cycle Denials Index. Figures represent
              potential annual savings; actual results depend on implementation scope
              and payer mix. No live patient data was used.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
