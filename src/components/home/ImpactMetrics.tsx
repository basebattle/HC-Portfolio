"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import { projects } from "@/data/projects";

// ─── Data ────────────────────────────────────────────────────────────────────

const CLINICAL_TEAL = "var(--neon-teal)";
const STRATEGIC_BLUE = "var(--neon-blue)";
const FINANCIAL_PINK = "var(--neon-pink)";

const METRICS = [
  { label: "FHIR Standards Implemented", value: 7, color: CLINICAL_TEAL, projects: ["Project 01", "Project 06", "Project 08", "Project 09", "Project 10"] },
  { label: "Agent Nodes Deployed", value: 12, suffix: "+", color: STRATEGIC_BLUE, projects: ["Project 02", "Project 03"] },
  { label: "Claims Analyzed", value: 5000, color: FINANCIAL_PINK, projects: ["Project 04"] },
  { label: "HFMA KPIs Tracked", value: 12, color: FINANCIAL_PINK, projects: ["Project 03"] },
  { label: "Governance Domains Covered", value: 7, color: STRATEGIC_BLUE, projects: ["Project 07"] },
  { label: "Infrastructure Cost", value: 0, prefix: "$", color: FINANCIAL_PINK, projects: ["Project 05", "Project 07"] },
];

const NARRATIVES = [
  {
    title: "Clinical Intelligence",
    text: "Before an AI agent can reason about a patient, it needs terminology-resolved clinical data. The portfolio starts here: a full Clinical OS Simulator with Agentic Reasoning Visualization, a synthetic patient generator, and a clinical data gateway.",
    color: CLINICAL_TEAL,
    projects: ["Project 01", "Project 06", "Project 09"],
  },
  {
    title: "Operational Efficiency",
    text: "Applying clinical and financial reasoning to collapse legacy workflows. A prior auth pipeline that cuts cycles by 80%. A CDS engine with 0.94 confidence alerts. A revenue cycle dashboard benchmarked against HFMA standards.",
    color: FINANCIAL_PINK,
    projects: ["Project 02", "Project 08", "Project 03", "Project 04"],
  },
  {
    title: "Strategic Governance",
    text: "The final layer ensures intelligence is an asset, not a liability. Featuring a digital implementation of the HAIRA maturity model and a hospital-at-home monitoring system that bakes CMS compliance into every alert.",
    color: STRATEGIC_BLUE,
    projects: ["Project 07", "Project 10", "Project 05"],
  },
];

const VENN_NODES: {
  id: string;
  color: string;
  zone: "clinical" | "agentic" | "payer" | "clinical-ai" | "clinical-payer" | "ai-payer" | "center";
  cx: number;
  cy: number;
}[] = [
    { id: "P01", color: CLINICAL_TEAL, zone: "clinical-ai", cx: 270, cy: 135 },
    { id: "P06", color: CLINICAL_TEAL, zone: "clinical-ai", cx: 300, cy: 175 },
    { id: "P09", color: CLINICAL_TEAL, zone: "clinical", cx: 145, cy: 190 },
    { id: "P02", color: CLINICAL_TEAL, zone: "clinical-payer", cx: 195, cy: 330 },
    { id: "P08", color: STRATEGIC_BLUE, zone: "agentic", cx: 455, cy: 190 },
    { id: "P07", color: STRATEGIC_BLUE, zone: "clinical-ai", cx: 330, cy: 135 },
    { id: "P10", color: STRATEGIC_BLUE, zone: "ai-payer", cx: 405, cy: 330 },
    { id: "P05", color: FINANCIAL_PINK, zone: "payer", cx: 300, cy: 430 },
    { id: "P04", color: FINANCIAL_PINK, zone: "clinical-payer", cx: 220, cy: 375 },
    { id: "P03", color: FINANCIAL_PINK, zone: "ai-payer", cx: 380, cy: 375 },
  ];

function VennDiagram() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 600 500"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Impact intersection map"
      >
        <defs>
          <radialGradient id="grad-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F5D4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.02" />
          </radialGradient>
          <radialGradient id="grad-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00B7FF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#00B7FF" stopOpacity="0.02" />
          </radialGradient>
          <radialGradient id="grad-pink" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF007A" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FF007A" stopOpacity="0.02" />
          </radialGradient>
        </defs>

        {/* Circles */}
        <circle cx="230" cy="210" r="180" fill="url(#grad-teal)" stroke="#00F5D4" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="370" cy="210" r="180" fill="url(#grad-blue)" stroke="#00B7FF" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="300" cy="330" r="165" fill="url(#grad-pink)" stroke="#FF007A" strokeWidth="1" strokeOpacity="0.4" />

        {/* Labels */}
        <text x="100" y="100" fill="#00F5D4" fontSize="11" className="font-bold tracking-[0.25em]" textAnchor="middle" opacity="0.9">CLINICAL</text>
        <text x="100" y="116" fill="#00F5D4" fontSize="11" className="font-bold tracking-[0.25em]" textAnchor="middle" opacity="0.9">INTELLIGENCE</text>

        <text x="500" y="100" fill="#00B7FF" fontSize="11" className="font-bold tracking-[0.25em]" textAnchor="middle" opacity="0.9">STRATEGIC</text>
        <text x="500" y="116" fill="#00B7FF" fontSize="11" className="font-bold tracking-[0.25em]" textAnchor="middle" opacity="0.9">AGENTS</text>

        <text x="300" y="475" fill="#FF007A" fontSize="11" className="font-bold tracking-[0.25em]" textAnchor="middle" opacity="0.9">PAYER & RCM</text>

        {/* Nodes */}
        {VENN_NODES.map((node) => {
          const numId = node.id.replace("P", "");
          const proj = projects.find(p => p.idx.includes(numId));
          if (!proj) return null;
          const isHovered = hoveredId === node.id;
          
          return (
            <g 
              key={node.id} 
              className="cursor-pointer"
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.location.href = `/projects/${proj.slug}`}
            >
              <circle
                cx={node.cx}
                cy={node.cy}
                r={isHovered ? 16 : 12}
                fill={isHovered ? node.color : "rgba(8, 15, 25, 0.9)"}
                stroke={node.color}
                strokeWidth={isHovered ? 2 : 1}
                className="transition-all duration-300"
                style={{ filter: isHovered ? `drop-shadow(0 0 10px ${node.color})` : "none" }}
              />
              <text
                x={node.cx}
                y={node.cy + 4}
                fill={isHovered ? "var(--background)" : "white"}
                fontSize="9"
                className="font-mono font-bold"
                textAnchor="middle"
                pointerEvents="none"
              >
                {node.id}
              </text>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="pointer-events-none"
                  >
                    <rect
                      x={node.cx - 80}
                      y={node.cy - 60}
                      width="160"
                      height="40"
                      rx="8"
                      fill="rgba(8, 15, 25, 0.95)"
                      stroke={node.color}
                      strokeWidth="1"
                    />
                    <text 
                      x={node.cx} 
                      y={node.cy - 42} 
                      fill="white" 
                      fontSize="10" 
                      textAnchor="middle" 
                      className="font-serif italic"
                    >
                      {proj.name}
                    </text>
                    <text 
                      x={node.cx} 
                      y={node.cy - 30} 
                      fill={node.color} 
                      fontSize="7" 
                      textAnchor="middle" 
                      className="uppercase tracking-[0.2em] font-bold"
                    >
                      Case Study →
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ImpactMetrics() {
  const [activeNarrative, setActiveNarrative] = useState(0);

  return (
    <section
      id="impact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 mb-20">
          <AnimateIn delay={0.1}>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-foreground/40">
              Impact Architecture
            </span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Measured Strategic
              <br />
              <span className="opacity-40 italic">Outcomes</span>
            </h2>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3}>
          <div className="flex overflow-x-auto pb-8 mb-16 -mx-4 px-4 sm:mx-0 sm:px-0 gap-6 snap-x scrollbar-hide">
            {METRICS.map((metric, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] snap-start rounded-3xl p-8 flex flex-col gap-6 group hover:bg-white/[0.03] transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid rgba(255,255,255,0.05)`,
                  borderLeft: `4px solid ${metric.color}`
                }}
              >
                <div style={{ color: "var(--foreground)", fontFamily: "var(--font-dm-serif)", fontSize: "44px", lineHeight: 1 }}>
                  <CountUpMetric value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <div style={{ fontFamily: "var(--font-dm-sans)", fontSize: "14px", color: "var(--foreground)", opacity: 0.6, fontWeight: 400, flexGrow: 1 }}>
                  {metric.label}
                </div>
                <div className="flex flex-wrap items-center mt-auto pt-6 border-t border-white/5 gap-2">
                  {metric.projects.map((id) => {
                    const numId = id.replace("Project ", "");
                    const proj = projects.find(p => p.idx.includes(numId));
                    return proj ? (
                      <Link
                        key={id}
                        href={`/projects/${proj.slug}`}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-mono font-bold text-foreground/40 hover:text-foreground transition-colors"
                      >
                        P{numId}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
             <VennDiagram />
          </div>
          
          <div className="lg:col-span-5 flex flex-col gap-10">
            <AnimateIn delay={0.4}>
              <h3 className="text-2xl font-serif text-foreground/80 mb-8 italic">Where the work converges</h3>
            </AnimateIn>
            
            {NARRATIVES.map((block, i) => (
              <AnimateIn key={i} delay={0.5 + i * 0.1}>
                <div 
                  className={`relative pl-8 group transition-all duration-300 ${activeNarrative === i ? "opacity-100" : "opacity-40 hover:opacity-100"}`}
                  onMouseEnter={() => setActiveNarrative(i)}
                >
                  <div className="absolute left-0 top-2 bottom-0 w-px bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                      className="w-full h-full origin-top"
                      style={{ background: activeNarrative === i ? block.color : "transparent" }}
                    />
                  </div>
                  <h4 className="text-xl font-serif mb-3 transition-colors" style={{ color: activeNarrative === i ? block.color : "var(--foreground)" }}>{block.title}</h4>
                  
                  <AnimatePresence initial={false}>
                    {activeNarrative === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm leading-relaxed text-foreground/70 mb-4 mt-3">
                          {block.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex flex-wrap gap-2 pb-4 mt-2">
                    {block.projects.map(id => {
                      const numId = id.replace("Project ", "");
                      const proj = projects.find(p => p.idx.includes(numId));
                      return proj ? (
                        <Link
                          key={id}
                          href={`/projects/${proj.slug}`}
                          className="px-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center gap-2 hover:bg-white/[0.1] hover:border-white/20 transition-all shadow-md hover:shadow-lg"
                        >
                          <span className="text-[10px] font-mono font-bold drop-shadow-md" style={{ color: block.color }}>P{numId}</span>
                          <span className="text-xs font-medium text-white">{proj.name}</span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
