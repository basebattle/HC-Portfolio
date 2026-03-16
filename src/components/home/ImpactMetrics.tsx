"use client";

import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import { projects } from "@/data/projects";

// ─── Data ────────────────────────────────────────────────────────────────────

const METRICS = [
  { label: "FHIR Standards Implemented", value: 7, color: "#0D7377", projects: ["P01", "P06", "P08", "P09", "P10"] },
  { label: "Agent Nodes Deployed", value: 12, suffix: "+", color: "#0D7377", projects: ["P02", "P03"] },
  { label: "Claims Analyzed", value: 5000, color: "#FF8F00", projects: ["P04"] },
  { label: "HFMA KPIs Tracked", value: 12, color: "#FF8F00", projects: ["P03"] },
  { label: "Governance Domains Covered", value: 7, color: "#1565C0", projects: ["P07"] },
  { label: "Infrastructure Cost", value: 0, prefix: "$", color: "#FF8F00", projects: ["P05", "P07"] },
];

const NARRATIVES = [
  {
    title: "The Data Layer",
    text: "Before an AI agent can reason about a patient, it needs clean, typed, terminology-resolved clinical data. The portfolio starts here: a standards-compliant FHIR bridge, a synthetic patient generator, and a clinical data gateway that serves three deployment modes from a single codebase.",
    color: "#0D7377",
    projects: ["P01", "P06", "P09"],
  },
  {
    title: "The Intelligence Layer",
    text: "With data flowing, the next layer applies clinical and financial reasoning. A prior auth pipeline that collapses 45-minute workflows. A CDS engine that scores drug interactions at 0.94 confidence. A revenue cycle dashboard benchmarked against HFMA standards. A denial workflow that catches problems before submission, not after.",
    color: "#FF8F00",
    projects: ["P02", "P08", "P03", "P04"],
  },
  {
    title: "The Governance Layer",
    text: "Intelligence without oversight is liability. The portfolio closes with a digital implementation of a peer-reviewed AI governance framework and a hospital-at-home monitoring system that bakes CMS compliance into every clinical decision.",
    color: "#1565C0",
    projects: ["P07", "P10", "P05"],
  },
];

// Helper for Venn Diagram Nodes
function ProjectLink({ id, color, className }: { id: string, color: string, className?: string }) {
  const numId = id.replace("P", "");
  const proj = projects.find(p => p.idx === numId);
  if (!proj) return null;

  return (
    <Link
      href={`/projects/${proj.slug}`}
      className={`group absolute flex items-center justify-center pointer-events-auto ${className}`}
      style={{
        width: "28px", height: "28px",
        background: `${color}1A`,
        border: `1px solid ${color}4D`,
        borderRadius: "50%",
        textDecoration: "none",
        transition: "all 0.2s ease"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = `${color}33`;
        (e.currentTarget as HTMLElement).style.transform = "scale(1.15)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = `${color}1A`;
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
      }}
    >
      <span style={{ color, fontSize: "10px", fontFamily: "var(--font-jetbrains-mono)", fontWeight: 600 }}>
        {id}
      </span>

      {/* Tooltip on hover */}
      <div className="absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity bg-[#1A2535] border border-white/10 rounded-md px-2 py-1 -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 shadow-lg">
        <span style={{ color: "#ECEFF1", fontSize: "11px", fontFamily: "var(--font-dm-sans)" }}>{proj.name}</span>
      </div>
    </Link>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ImpactMetrics() {
  return (
    <section
      id="impact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b"
      style={{
        background: "#1A2535",
        backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(13,115,119,0.06) 0%, transparent 70%)",
        borderColor: "rgba(255,255,255,0.06)"
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section header ── */}
        <AnimateIn from="bottom" delay={0}>
          <div className="mb-3">
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                color: "#00BFA5",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Impact Architecture
            </span>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.07}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-16"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#ECEFF1" }}
          >
            Measured Impact
          </h2>
        </AnimateIn>

        {/* ── Band 1: Impact Distribution ── */}
        <AnimateIn from="bottom" delay={0.15}>
          <div className="flex overflow-x-auto pb-4 mb-4 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {METRICS.map((metric, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[240px] sm:w-[260px] snap-start rounded-xl p-5 sm:p-6 flex flex-col"
                style={{
                  background: "rgba(26,37,53,0.5)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderLeft: `3px solid ${metric.color}`
                }}
              >
                <div style={{ color: metric.color, fontFamily: "var(--font-dm-serif)", fontSize: "40px", lineHeight: 1, marginBottom: "12px" }}>
                  <CountUpMetric value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "#E8EDF0", fontWeight: 500, marginBottom: "16px", flexGrow: 1 }}>
                  {metric.label}
                </div>
                <div className="flex flex-wrap items-center mt-auto pt-2">
                  {metric.projects.map((id, pIdx) => {
                    const numId = id.replace("P", "");
                    const proj = projects.find(p => p.idx === numId);
                    return proj ? (
                      <span key={id} className="flex items-center">
                        <Link
                          href={`/projects/${proj.slug}`}
                          className="hover:underline transition-all hover:brightness-125"
                          style={{ color: metric.color, fontFamily: "var(--font-jetbrains-mono)", fontSize: "11px" }}
                        >
                          {id}
                        </Link>
                        {pIdx < metric.projects.length - 1 && (
                          <span className="mx-1.5" style={{ color: "rgba(255,255,255,0.15)", fontSize: "10px" }}>•</span>
                        )}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* ── Band 2: The Intersection ── */}
        <AnimateIn from="bottom" delay={0.25}>
          <div className="my-16 sm:my-24 flex flex-col items-center">
            <h3
              className="text-xl sm:text-2xl mb-8 sm:mb-12 text-center"
              style={{ fontFamily: "var(--font-dm-serif)", color: "rgba(232,237,240,0.6)" }}
            >
              Where the work converges
            </h3>

            <div className="relative w-full max-w-[280px] sm:max-w-lg md:max-w-xl aspect-square sm:aspect-video flex items-center justify-center">
              {/* Clinical Circle */}
              <div
                className="absolute w-[65%] sm:w-[50%] pt-[65%] sm:pt-[50%] rounded-full mix-blend-screen"
                style={{
                  background: "radial-gradient(circle at center, rgba(13,115,119,0.18) 0%, rgba(13,115,119,0.02) 100%)",
                  border: "1px solid rgba(13,115,119,0.25)",
                  top: "0%", left: "15%",
                }}
              >
                <div className="absolute top-[15%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <span style={{ color: "#0D7377", fontSize: "10px", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }} className="hidden sm:block">Clinical<br />Informatics</span>
                </div>
              </div>

              {/* Agentic AI Circle */}
              <div
                className="absolute w-[65%] sm:w-[50%] pt-[65%] sm:pt-[50%] rounded-full mix-blend-screen"
                style={{
                  background: "radial-gradient(circle at center, rgba(21,101,192,0.18) 0%, rgba(21,101,192,0.02) 100%)",
                  border: "1px solid rgba(21,101,192,0.25)",
                  top: "0%", right: "15%",
                }}
              >
                <div className="absolute top-[15%] right-[20%] transform translate-x-1/2 -translate-y-1/2 text-center">
                  <span style={{ color: "#1565C0", fontSize: "10px", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }} className="hidden sm:block">Agentic<br />AI</span>
                </div>
              </div>

              {/* Payer-Provider Circle */}
              <div
                className="absolute w-[65%] sm:w-[50%] pt-[65%] sm:pt-[50%] rounded-full mix-blend-screen"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,143,0,0.18) 0%, rgba(255,143,0,0.02) 100%)",
                  border: "1px solid rgba(255,143,0,0.25)",
                  bottom: "10%", left: "50%", transform: "translateX(-50%)"
                }}
              >
                <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
                  <span style={{ color: "#FF8F00", fontSize: "10px", fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em", textTransform: "uppercase" }} className="hidden sm:block">Payer-Provider<br />Operations</span>
                </div>
              </div>

              {/* Center Text */}
              <div className="absolute z-20 text-center flex flex-col items-center justify-center pointer-events-none mt-[-10%] sm:mt-[-5%]">
                <span style={{ fontFamily: "var(--font-dm-serif)", fontSize: "20px", color: "#ECEFF1", lineHeight: 1.2 }} className="sm:text-2xl md:text-3xl">
                  10 Projects.<br />1 Builder.
                </span>
              </div>

              {/* Project Nodes positioned roughly */}
              <div className="absolute z-30 w-full h-full pointer-events-none mt-[-10%] sm:mt-[-5%]">
                {/* Clinical Only */}
                <ProjectLink id="P01" color="#0D7377" className="top-[15%] sm:top-[25%] left-[25%] sm:left-[22%]" />
                <ProjectLink id="P09" color="#0D7377" className="top-[35%] sm:top-[40%] left-[15%] sm:left-[18%]" />

                {/* Agentic AI Only */}
                <ProjectLink id="P08" color="#1565C0" className="top-[15%] sm:top-[25%] right-[25%] sm:right-[22%]" />

                {/* Financial / Payer-Provider Only */}
                <ProjectLink id="P05" color="#FF8F00" className="bottom-[10%] sm:bottom-[15%] left-[45%] sm:left-[48%]" />

                {/* Intersections */}
                {/* Clinical + AI */}
                <ProjectLink id="P06" color="#0D7377" className="top-[20%] sm:top-[25%] left-[50%] -translate-x-1/2" />
                <ProjectLink id="P07" color="#1565C0" className="top-[35%] sm:top-[38%] left-[50%] -translate-x-1/2" />

                {/* Clinical + Financial */}
                <ProjectLink id="P02" color="#0D7377" className="top-[60%] sm:top-[55%] left-[30%] sm:left-[35%]" />
                <ProjectLink id="P04" color="#FF8F00" className="top-[75%] sm:top-[68%] left-[35%] sm:left-[40%]" />

                {/* Financial + AI */}
                <ProjectLink id="P10" color="#1565C0" className="top-[60%] sm:top-[55%] right-[30%] sm:right-[35%]" />
                <ProjectLink id="P03" color="#FF8F00" className="top-[75%] sm:top-[68%] right-[35%] sm:right-[40%]" />
              </div>
            </div>

            <div className="mt-8 text-center flex items-center justify-center pb-2">
              <a
                href="https://github.com/basebattle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-100 opacity-60"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#E8EDF0]">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "#E8EDF0" }}>
                  All 10 projects are open-source on GitHub
                </span>
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* ── Band 3: Impact Narrative ── */}
        <AnimateIn from="bottom" delay={0.35}>
          <div className="flex flex-col gap-10 sm:gap-12 mt-8 md:max-w-4xl mx-auto">
            {NARRATIVES.map((block, i) => (
              <div key={i} className="relative pl-6 sm:pl-8">
                <div className="absolute left-0 top-1.5 bottom-0 w-[3px] rounded-full" style={{ background: block.color }} />
                <h4 className="text-xl sm:text-2xl mb-3" style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}>{block.title}</h4>
                <p className="text-[15px] sm:text-base leading-relaxed mb-5" style={{ fontFamily: "var(--font-dm-sans)", color: "#ECEFF1" }}>
                  {block.text}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {block.projects.map(id => {
                    const numId = id.replace("P", "");
                    const proj = projects.find(p => p.idx === numId);
                    return proj ? (
                      <Link
                        key={id}
                        href={`/projects/${proj.slug}`}
                        className="px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-colors hover:brightness-125"
                        style={{ background: `${block.color}1A`, color: block.color, border: `1px solid ${block.color}33` }}
                      >
                        <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10px", fontWeight: 600 }}>{id}</span>
                        <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", fontWeight: 500 }}>{proj.name}</span>
                      </Link>
                    ) : null;
                  })}
                </div>

                {/* Connecting line between blocks */}
                {i < NARRATIVES.length - 1 && (
                  <div className="absolute -bottom-6 sm:-bottom-7 left-0 w-full h-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
