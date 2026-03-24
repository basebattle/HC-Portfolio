"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Github } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimateIn from "@/components/ui/AnimateIn";

function DomainHeader({ title, count, color }: { title: string; count: number; color: string }) {
  return (
    <div className="flex flex-col gap-3 mb-12 group">
      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className="text-[11px] font-bold tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity" style={{ color }}>
            {title}
          </span>
          {title === "Clinical Intelligence" && (
            <span className="text-[9px] uppercase tracking-widest text-neon-teal/60 font-medium">Core Reasoning Domain</span>
          )}
        </div>
        <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">
          {count} UNITS
        </span>
      </div>
      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0 w-full h-full"
          style={{ background: `linear-gradient(to right, ${color}, transparent)`, opacity: 0.6 }}
        />
      </div>
    </div>
  );
}

interface ProjectGridProps {
  standalone?: boolean;
}

export default function ProjectGrid({ standalone = false }: ProjectGridProps) {
  const clinicalProjects = projects.filter(p => p.category === "Clinical Intelligence");
  const financialProjects = projects.filter(p => p.category === "Financial Optimization");
  const governanceProjects = projects.filter(p => p.category === "Strategic Governance");

  return (
    <section
      id="portfolio"
      className={`${standalone ? "py-24" : "py-24"} px-4 sm:px-6 lg:px-8 relative`}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <div className="flex flex-col gap-4 mb-20">
          <AnimateIn delay={0.1}>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-foreground/40">
              Project Portfolio
            </span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Strategic Evidence
              <br />
              <span className="opacity-40 italic">In Implementation</span>
            </h2>
          </AnimateIn>
        </div>

        {/* ── Project grid (Uniform Bento Layer) ── */}
        <div className="flex flex-col gap-24">
          
          {/* Clinical Intelligence */}
          <div className="flex flex-col gap-10">
            <DomainHeader title="Clinical Intelligence" count={clinicalProjects.length} color="var(--neon-teal)" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicalProjects.map((project, i) => (
                <AnimateIn key={project.slug} delay={0.3 + i * 0.05}>
                  <ProjectCard project={project} />
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Financial Optimization */}
          <div className="flex flex-col gap-10">
            <DomainHeader title="Financial Optimization" count={financialProjects.length} color="var(--neon-pink)" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financialProjects.map((project, i) => (
                <AnimateIn key={project.slug} delay={0.4 + i * 0.05}>
                  <ProjectCard project={project} />
                </AnimateIn>
              ))}
            </div>
          </div>

          {/* Strategic Governance */}
          <div className="flex flex-col gap-10">
            <DomainHeader title="Strategic Governance" count={governanceProjects.length} color="var(--neon-blue)" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governanceProjects.map((project, i) => (
                <AnimateIn key={project.slug} delay={0.5 + i * 0.05}>
                  <ProjectCard project={project} />
                </AnimateIn>
              ))}
            </div>
          </div>

        </div>

        {/* Call to action */}
        <AnimateIn delay={0.8}>
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-xs text-slate-500 font-medium tracking-wide max-w-lg text-center md:text-left">
              All projects include full technical architectures, deployment playbooks, and strategic ROI analysis formatted for executive health-system review.
            </p>
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Repository Access:</span>
               <div className="flex gap-4">
                 <button 
                   onClick={() => window.open("https://github.com/basebattle", "_blank")}
                   className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group/gh"
                 >
                    <div className="relative">
                      <div className="absolute inset-0 bg-neon-teal/20 blur-lg rounded-full opacity-0 group-hover/gh:opacity-100 transition-opacity" />
                      <Github size={24} className="relative z-10" />
                    </div>
                 </button>
               </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
