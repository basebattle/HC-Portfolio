"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import { projects } from "@/data/projects";

// ─── Data ────────────────────────────────────────────────────────────────────

const CLINICAL_TEAL = "#00d4aa";
const AGENTIC_BLUE = "#1565C0";
const PAYER_AMBER = "#FF8F00";

const METRICS = [
  { label: "FHIR Standards Implemented", value: 7, color: CLINICAL_TEAL, projects: ["P01", "P06", "P08", "P09", "P10"] },
  { label: "Agent Nodes Deployed", value: 12, suffix: "+", color: CLINICAL_TEAL, projects: ["P02", "P03"] },
  { label: "Claims Analyzed", value: 5000, color: PAYER_AMBER, projects: ["P04"] },
  { label: "HFMA KPIs Tracked", value: 12, color: PAYER_AMBER, projects: ["P03"] },
  { label: "Governance Domains Covered", value: 7, color: AGENTIC_BLUE, projects: ["P07"] },
  { label: "Infrastructure Cost", value: 0, prefix: "$", color: PAYER_AMBER, projects: ["P05", "P07"] },
];

const NARRATIVES = [
  {
    title: "The Data Layer",
    text: "Before an AI agent can reason about a patient, it needs clean, typed, terminology-resolved clinical data. The portfolio starts here: a full Clinical Intelligence Simulator with Agentic Reasoning Visualization, a synthetic patient generator, and a clinical data gateway that serves three deployment modes from a single codebase.",
    color: CLINICAL_TEAL,
    projects: ["P01", "P06", "P09"],
  },
  {
    title: "The Intelligence Layer",
    text: "With data flowing, the next layer applies clinical and financial reasoning. A prior auth pipeline that collapses 45-minute workflows. A CDS engine that scores drug interactions at 0.94 confidence. A revenue cycle dashboard benchmarked against HFMA standards. A denial workflow that catches problems before submission, not after.",
    color: PAYER_AMBER,
    projects: ["P02", "P08", "P03", "P04"],
  },
  {
    title: "The Governance Layer",
    text: "Intelligence without oversight is liability. The portfolio closes with a digital implementation of a peer-reviewed AI governance framework and a hospital-at-home monitoring system that bakes CMS compliance into every clinical decision.",
    color: AGENTIC_BLUE,
    projects: ["P07", "P10", "P05"],
  },
];

// ─── Venn Node definitions ────────────────────────────────────────────────────
// Each node: which zone it lives in, its colour, and tooltip text.

const VENN_NODES: {
  id: string;
  color: string;
  zone: "clinical" | "agentic" | "payer" | "clinical-ai" | "clinical-payer" | "ai-payer" | "center";
  // Percentage positions inside the SVG viewBox (600 × 500)
  cx: number;
  cy: number;
}[] = [
    // Clinical Only
    { id: "P09", color: CLINICAL_TEAL, zone: "clinical", cx: 145, cy: 190 },
    // Agentic AI Only
    { id: "P08", color: AGENTIC_BLUE, zone: "agentic", cx: 455, cy: 190 },
    // Payer-Provider Only
    { id: "P05", color: PAYER_AMBER, zone: "payer", cx: 300, cy: 430 },
    // Clinical + AI (FHIR-MCP crosses both)
    { id: "P01", color: CLINICAL_TEAL, zone: "clinical-ai", cx: 270, cy: 135 },
    { id: "P06", color: CLINICAL_TEAL, zone: "clinical-ai", cx: 300, cy: 175 },
    { id: "P07", color: AGENTIC_BLUE, zone: "clinical-ai", cx: 330, cy: 135 },
    // Clinical + Payer
    { id: "P02", color: CLINICAL_TEAL, zone: "clinical-payer", cx: 195, cy: 330 },
    { id: "P04", color: PAYER_AMBER, zone: "clinical-payer", cx: 220, cy: 375 },
    // AI + Payer
    { id: "P03", color: PAYER_AMBER, zone: "ai-payer", cx: 380, cy: 375 },
    { id: "P10", color: AGENTIC_BLUE, zone: "ai-payer", cx: 405, cy: 330 },
  ];

// ─── Interactive Venn Diagram ────────────────────────────────────────────────

function VennDiagram() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Project domain intersection diagram"
      >
        {/* ── Ring definitions ── */}
        <defs>
          <filter id="glow-teal" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-amber" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <radialGradient id="grad-teal" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#00d4aa" stopOpacity="0.03" />
          </radialGradient>
          <radialGradient id="grad-blue" cx="60%" cy="40%">
            <stop offset="0%" stopColor="#1565C0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1565C0" stopOpacity="0.03" />
          </radialGradient>
          <radialGradient id="grad-amber" cx="50%" cy="60%">
            <stop offset="0%" stopColor="#FF8F00" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FF8F00" stopOpacity="0.03" />
          </radialGradient>
        </defs>

        {/* ── Clinical Informatics & AI circle (top-left) ── */}
        <circle cx="230" cy="210" r="170" fill="url(#grad-teal)" stroke="#00d4aa" strokeWidth="1" strokeOpacity="0.3" />
        <text x="100" y="110" fill="#00d4aa" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">CLINICAL</text>
        <text x="100" y="123" fill="#00d4aa" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">INFORMATICS</text>

        {/* ── Agentic AI circle (top-right) ── */}
        <circle cx="370" cy="210" r="170" fill="url(#grad-blue)" stroke="#1565C0" strokeWidth="1" strokeOpacity="0.3" />
        <text x="500" y="110" fill="#1565C0" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">AGENTIC</text>
        <text x="500" y="123" fill="#1565C0" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">AI</text>

        {/* ── Payer-Provider circles (bottom) ── */}
        <circle cx="300" cy="330" r="155" fill="url(#grad-amber)" stroke="#FF8F00" strokeWidth="1" strokeOpacity="0.3" />
        <text x="300" y="472" fill="#FF8F00" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">PAYER-PROVIDER</text>
        <text x="300" y="485" fill="#FF8F00" fontSize="10" fontFamily="monospace" letterSpacing="1" textAnchor="middle" opacity="0.8">OPERATIONS</text>

        {/* ── Center label ── */}
        <text x="300" y="250" fill="#ECEFF1" fontSize="14" fontFamily="Georgia, serif" textAnchor="middle" opacity="0.9">10 Projects.</text>
        <text x="300" y="268" fill="#ECEFF1" fontSize="14" fontFamily="Georgia, serif" textAnchor="middle" opacity="0.9">1 Builder.</text>

        {/* ── Project Nodes ── */}
        {VENN_NODES.map((node) => {
          const proj = projects.find(p => p.idx === node.id.replace("P", ""));
          if (!proj) return null;
          const isHovered = hoveredId === node.id;
          return (
            <g key={node.id} className="cursor-pointer" onClick={() => window.location.href = `/projects/${proj.slug}`}>
              <Link href={`/projects/${proj.slug}`}>
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isHovered ? 16 : 13}
                  fill={`${node.color}${isHovered ? "33" : "1A"}`}
                  stroke={node.color}
                  strokeWidth={isHovered ? 1.5 : 1}
                  strokeOpacity={isHovered ? 0.9 : 0.5}
                  filter={isHovered ? `url(#glow-${node.color === CLINICAL_TEAL ? "teal" : node.color === AGENTIC_BLUE ? "blue" : "amber"})` : undefined}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ transition: "all 0.2s ease" }}
                />
                <text
                  x={node.cx}
                  y={node.cy + 4}
                  fill={node.color}
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="600"
                  textAnchor="middle"
                  pointerEvents="none"
                  opacity={isHovered ? 1 : 0.85}
                  onMouseEnter={() => setHoveredId(node.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {node.id}
                </text>

                {/* Tooltip on hover */}
                {isHovered && (
                  <g>
                    <rect
                      x={node.cx - 80}
                      y={node.cy - 46}
                      width="160"
                      height="34"
                      rx="5"
                      fill="#1A2535"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                    <text
                      x={node.cx}
                      y={node.cy - 31}
                      fill="#ECEFF1"
                      fontSize="9"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      {proj.name}
                    </text>
                    <text
                      x={node.cx}
                      y={node.cy - 18}
                      fill="rgba(232,237,240,0.5)"
                      fontSize="8"
                      textAnchor="middle"
                      fontFamily="sans-serif"
                    >
                      Click to view case study →
                    </text>
                  </g>
                )}
              </Link>
            </g>
          );
        })}
      </svg>
    </div>
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
        backgroundImage: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,170,0.05) 0%, transparent 70%)",
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
                color: "#00d4aa",
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
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
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
              className="text-xl sm:text-2xl mb-2 text-center"
              style={{ fontFamily: "var(--font-dm-serif)", color: "rgba(232,237,240,0.6)" }}
            >
              Where the work converges
            </h3>
            <p className="text-xs text-center mb-8 sm:mb-10" style={{ color: "rgba(232,237,240,0.3)", fontFamily: "var(--font-dm-sans)" }}>
              Hover a node to identify the project · Click to open its case study
            </p>

            <VennDiagram />

            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { color: CLINICAL_TEAL, label: "Clinical Informatics" },
                { color: AGENTIC_BLUE, label: "Agentic AI" },
                { color: PAYER_AMBER, label: "Payer-Provider Ops" },
              ].map(({ color, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full inline-block" style={{ background: `${color}33`, border: `1px solid ${color}80` }} />
                  <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: "12px", color: "rgba(232,237,240,0.5)" }}>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center flex items-center justify-center">
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
