"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Network, Zap, Home, ChevronRight, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

const PILLARS = [
  {
    id: "readiness",
    title: "Readiness",
    icon: ShieldCheck,
    description: "Assessing structural and cultural maturity for clinical AI adoption.",
    ref: "HAIRA (Project 07)",
    metric: "35-point governance audit",
    color: "var(--neon-blue)",
    projects: ["haira"]
  },
  {
    id: "interoperability",
    title: "Interoperability",
    icon: Network,
    description: "Moving from static data silos to real-time 'Reasoning Access' via MCP.",
    ref: "FHIR-MCP (Project 01)",
    metric: "Sub-second integration latency",
    color: "var(--neon-teal)",
    projects: ["fhir-mcp-bridge", "fhir-llm-gateway"]
  },
  {
    id: "efficiency",
    title: "Efficiency",
    icon: Zap,
    description: "Automating the high-cost revenue lifecycle and admin overhead.",
    ref: "Prior-Auth & Denials",
    metric: "80% reduction in manual review",
    color: "var(--neon-pink)",
    projects: ["prior-auth", "claims-denial"]
  },
  {
    id: "delivery",
    title: "Care Delivery",
    icon: Home,
    description: "Enabling the hospital-of-the-future via intelligent command centers.",
    ref: "HaH Intelligence (Project 10)",
    metric: "Real-time NEWS2 risk triage",
    color: "var(--neon-blue)",
    projects: ["hah-monitoring"]
  }
];

export default function DXPillarsSection() {
  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-neon-teal/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20 text-center items-center">
          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-2">
               <div className="w-8 h-[1px] bg-neon-teal/40" />
               <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-neon-teal">
                 Strategic Framework
               </span>
               <div className="w-8 h-[1px] bg-neon-teal/40" />
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-foreground leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              The Digital Transformation
              <br />
              <span className="text-neon-blue glow-blue italic">Core Pillars</span>
            </h2>
          </AnimateIn>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => (
            <AnimateIn key={pillar.id} delay={0.3 + i * 0.1}>
              <div
                className="group relative h-full p-8 rounded-[32px] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/[0.1] transition-all duration-500 flex flex-col gap-8 glow-blue/0 hover:glow-blue/10 min-h-[420px]"
              >
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl relative z-10"
                  style={{ 
                    background: `linear-gradient(135deg, ${pillar.color}44 0%, ${pillar.color}22 100%)`, 
                    border: `1px solid ${pillar.color}33`,
                    boxShadow: `0 0 30px ${pillar.color}33`
                  }}
                >
                  <pillar.icon size={28} style={{ color: pillar.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="text-2xl font-serif tracking-tight" style={{ color: pillar.color }}>
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed transition-colors opacity-80" style={{ color: pillar.color }}>
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom section */}
                <Link href={`/projects/${pillar.projects[0]}`} className="mt-auto pt-8 border-t border-white/[0.05] flex flex-col gap-5 relative z-20 group/link">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold group-hover/link:text-white transition-colors">Ref Project</span>
                    <span className="text-xs font-semibold text-slate-300 group-hover/link:text-white transition-colors">{pillar.ref}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold group-hover/link:text-white transition-colors">Success Metric</span>
                    <span className="text-sm font-medium italic" style={{ color: pillar.color }}>{pillar.metric}</span>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 right-0 opacity-0 group-hover/link:opacity-100 transition-all duration-300 translate-x-4 -translate-y-4 group-hover/link:translate-x-0 group-hover/link:translate-y-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <ArrowUpRight size={18} className="text-white" />
                    </div>
                  </div>
                </Link>

                {/* Vertical detail line */}
                <div 
                  className="absolute top-8 left-0 w-1 h-24 transition-transform duration-500 origin-top group-hover:scale-y-[2.5] z-10"
                  style={{ backgroundColor: pillar.color }}
                />

                {/* Domain Color Tide (Enhancement E) */}
                <div className="absolute inset-0 transition-transform duration-500 origin-bottom scale-y-0 group-hover:scale-y-100 z-0 rounded-[32px] overflow-hidden pointer-events-none"
                     style={{ backgroundColor: pillar.color, opacity: 0.05 }} />
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Framing Text */}
        <AnimateIn delay={0.8}>
          <div className="mt-20 p-10 rounded-[40px] bg-white/[0.02] border border-white/[0.05] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group hover:border-neon-teal/20 transition-all duration-500">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h4 className="text-xl font-serif text-white flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-neon-teal animate-pulse" />
                 Strategic Synthesis
              </h4>
              <p className="text-base text-slate-400 leading-relaxed">
                These pillars represent a cohesive Digital Transformation 
                Methodology where <span className="text-neon-blue font-medium italic">Readiness</span> governs 
                the <span className="text-neon-teal font-medium italic">Interoperability</span> layer, 
                enabling <span className="text-neon-pink font-medium italic">Efficiency</span> and safe <span className="text-white font-medium italic">Care Delivery</span>.
              </p>
            </div>
            <Link 
              href="/playbook"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group shrink-0"
            >
              View Methodology Playbook
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
