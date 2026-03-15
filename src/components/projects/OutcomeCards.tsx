"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import type { Project } from "@/data/projects";

// Parse a KPI string into animatable parts.
// Handles patterns like "45 to 28", "78% to 94%", "14 days to 3 days"
function parseKpi(kpi: string): {
  label: string;
  value: number | null;
  prefix: string;
  suffix: string;
  raw: string;
} {
  // Pattern: "X unit to Y unit" — extract the target (second) number
  const toMatch = kpi.match(/(\d+(?:\.\d+)?)\s*([^\d]*?)\s*to\s*(\d+(?:\.\d+)?)\s*([^\s,]*)/i);
  if (toMatch) {
    const targetVal = parseFloat(toMatch[3]);
    const rawSuffix = toMatch[4] || toMatch[2] || "";
    const cleanSuffix = rawSuffix.replace(/[()]/g, "").trim();
    // Detect prefix: "$" before the first number
    const prefix = kpi.trimStart().startsWith("$") ? "$" : "";
    return { label: kpi, value: targetVal, prefix, suffix: cleanSuffix, raw: kpi };
  }

  // Pattern: standalone number with unit — "94%", "$1.2M", "3 days"
  const standalone = kpi.match(/^(\$?)\s*(\d+(?:\.\d+)?)\s*(%|M|d|days|min|x)?/i);
  if (standalone) {
    return {
      label: kpi,
      value: parseFloat(standalone[2]),
      prefix: standalone[1] || "",
      suffix: standalone[3] || "",
      raw: kpi,
    };
  }

  return { label: kpi, value: null, prefix: "", suffix: "", raw: kpi };
}

const CARD_COLORS = ["#00BFA5", "#FF8F00", "#5C9BF5"] as const;

interface OutcomeCardsProps {
  kpis: Project["kpis"];
}

export default function OutcomeCards({ kpis }: OutcomeCardsProps) {
  const displayed = kpis.slice(0, 3);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-px"
          style={{ background: "rgba(232,237,240,0.18)" }}
        />
        <span
          className="text-xs font-semibold tracking-[0.18em] uppercase"
          style={{
            color: "rgba(232,237,240,0.30)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Outcomes
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayed.map((kpi, i) => {
          const parsed = parseKpi(kpi);
          const color = CARD_COLORS[i % CARD_COLORS.length];

          return (
            <AnimateIn key={kpi} from="bottom" delay={i * 0.08}>
              <div
                className="flex flex-col gap-3 p-5 rounded-2xl border h-full"
                style={{
                  background: "rgba(22,32,41,0.70)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderColor: `${color}22`,
                }}
              >
                {/* Animated value */}
                <div
                  className="text-3xl font-bold tabular-nums leading-none"
                  style={{
                    color,
                    fontFamily: "var(--font-dm-serif)",
                  }}
                >
                  {parsed.value !== null ? (
                    <CountUpMetric
                      value={parsed.value}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      decimals={parsed.value % 1 !== 0 ? 1 : 0}
                      duration={1300}
                      delay={200 + i * 100}
                    />
                  ) : (
                    <span style={{ fontSize: "1.25rem", lineHeight: 1.3 }}>
                      {kpi}
                    </span>
                  )}
                </div>

                {/* Full KPI label */}
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: "rgba(232,237,240,0.52)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {kpi}
                </p>

                {/* Accent line */}
                <div
                  className="h-px w-8 rounded-full mt-auto"
                  style={{ backgroundColor: color, opacity: 0.45 }}
                />
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </div>
  );
}
