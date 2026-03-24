"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Target, 
  AlertCircle, 
  Cpu, 
  CheckCircle2, 
  User, 
  ArrowRightLeft,
  Zap,
  ShieldCheck,
  BarChart3
} from "lucide-react";
import type { Project } from "@/data/projects";
import AnimateIn from "@/components/ui/AnimateIn";
import GlassCard from "@/components/ui/GlassCard";
import CountUpMetric from "@/components/ui/CountUpMetric";

import ProjectFlowChart from "./ProjectFlowChart";

const DOMAIN_COLORS: Record<string, string> = {
  "Clinical Intelligence": "var(--neon-teal)",
  "Financial Optimization": "var(--neon-pink)",
  "Strategic Governance": "var(--neon-blue)",
};

interface CaseStudyContentProps {
  project: Project;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  const accentColor = DOMAIN_COLORS[project.category] || "var(--primary)";
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Highlight numbers, percentages, currency
  const formatText = (text: string) => {
    return text.replace(/(\$?\d+(?:,\d+)*(?:\.\d+)?(?:K|M|%)?)/g, `<span style="font-weight:600;color:${accentColor}">$1</span>`);
  };

  return (
    <div className="relative flex flex-col gap-16 pb-20">
      {/* ── Reading Progress (Moved to Bottom) ── */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 h-1 origin-left z-[100]"
        style={{ scaleX, background: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
      />

      {/* ── Why This Matters (Strategic Pull Quote) ── */}
      <AnimateIn from="bottom" delay={0.1}>
        <div className="relative py-12 px-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden">
           <div className="absolute top-0 left-0 w-2 h-full" style={{ background: accentColor }} />
           <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-6 block">
             Strategic Thesis
           </span>
           <blockquote className="text-2xl sm:text-3xl font-normal leading-tight text-foreground/90 italic" style={{ fontFamily: "var(--font-dm-serif)" }}>
             &ldquo;{project.veteran?.split('.')[0] || "Solving for the next decade of healthcare reasoning infrastructure."}.&rdquo;
           </blockquote>
           <div className="mt-8 flex items-center gap-3">
              <div className="w-8 h-px bg-white/10" />
              <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">The Implementation Mandate</span>
           </div>
        </div>
      </AnimateIn>

      {/* ── Context ── */}
      {project.context && (
        <AnimateIn from="bottom" delay={0.2}>
          <GlassCard className="p-8 flex flex-col gap-5 border-white/5 overflow-hidden group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/5 text-foreground/40 group-hover:text-foreground transition-colors">
                <Target size={20} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/40">
                Operating Context
              </span>
            </div>
            <p className="text-lg sm:text-xl font-light leading-relaxed text-foreground/80"
               dangerouslySetInnerHTML={{ __html: formatText(project.context) }} />
          </GlassCard>
        </AnimateIn>
      )}

      {/* ── Problem ── */}
      <AnimateIn from="bottom" delay={0.06}>
        <div className="flex flex-col gap-6 pl-2 border-l-2 border-red-500/20">
          <div className="flex items-center gap-3">
            <AlertCircle size={18} className="text-red-500/60" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-500/60">
              The Problem
            </span>
          </div>
          <p className="text-base leading-relaxed text-slate-400 max-w-2xl"
             dangerouslySetInnerHTML={{ __html: formatText(project.problem) }} />
        </div>
      </AnimateIn>

      {/* ── Approach ── */}
      {project.approach && (
        <AnimateIn from="bottom" delay={0.12}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <Cpu size={18} style={{ color: accentColor }} className="opacity-60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: accentColor, opacity: 0.6 }}>
                Technical Approach
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
               <div className="lg:col-span-7">
                  <p className="text-base leading-relaxed text-slate-300"
                     dangerouslySetInnerHTML={{ __html: formatText(project.approach) }} />
               </div>
               <div className="lg:col-span-5 flex flex-col gap-4">
                  {project.features?.slice(0, 3).map((f, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }} 
                      className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3"
                    >
                       <div className="shrink-0 p-2 rounded-lg bg-white/5 text-slate-500">
                          {f.icon === "zap" && <Zap size={14} />}
                          {f.icon === "shield" && <ShieldCheck size={14} />}
                          {!f.icon && <BarChart3 size={14} />}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-slate-200">{f.name}</span>
                          <span className="text-[10px] text-slate-500">{f.benefit}</span>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </AnimateIn>
      )}

      {/* ── Evolution ── */}
      <AnimateIn from="bottom" delay={0.18}>
        <div className="flex flex-col gap-6">
           <div className="flex items-center gap-3">
              <ArrowRightLeft size={16} className="text-slate-600" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600">
                Technical Evolution
              </span>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Traditional Stack</span>
                 <p className="text-sm text-slate-500 leading-relaxed font-light">{project.evolution[0]}</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={40} style={{ color: accentColor }} />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>Antigravity v5 Engine</span>
                 <p className="text-sm text-slate-200 leading-relaxed font-medium">{project.evolution[1]}</p>
              </div>
           </div>
        </div>
      </AnimateIn>

      {/* ── Outcome ── */}
      {project.outcome && (
        <AnimateIn from="bottom" delay={0.24}>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-teal-500 opacity-60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-teal-500 opacity-60">
                Strategic Outcome
              </span>
            </div>
            
            <GlassCard 
              borderColor="rgba(0,191,165,0.2)"
              className="p-10 flex flex-col gap-8 bg-teal-500/[0.03] overflow-hidden"
            >
              <p className="text-xl sm:text-2xl font-medium leading-relaxed text-slate-100"
                 dangerouslySetInnerHTML={{ __html: formatText(project.outcome) }} />
              
              {/* Highlight KPI from hero numbers */}
              <div className="flex items-center gap-10">
                 <div className="flex flex-col">
                    <CountUpMetric 
                      value={parseFloat(project.heroNumber.replace(/[^\d.-]/g, ''))}
                      suffix={project.heroUnit}
                      prefix={project.heroNumber.startsWith('$') ? '$' : ''}
                      className="text-4xl font-serif font-medium text-teal-400"
                    />
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Primary Impact Metric</span>
                 </div>
                 <div className="h-10 w-px bg-white/10" />
                 <div className="flex flex-col gap-1">
                    <span className="text-xs text-slate-400 font-medium">ONC HTI-2 Compliance</span>
                    <span className="text-[10px] text-slate-600 uppercase tracking-widest">Validated Reasoning Trace</span>
                 </div>
              </div>
            </GlassCard>
          </div>
        </AnimateIn>
      )}

      {/* ── Role ── */}
      {project.role && (
        <AnimateIn from="bottom" delay={0.3}>
          <div className="mt-10 pt-10 border-t border-white/5 flex items-start gap-4">
            <div className="shrink-0 p-2 rounded-full bg-white/5 text-slate-500">
               <User size={16} />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Project Leadership</span>
                <p className="text-sm text-slate-400 italic font-light">
                  {project.role}
                </p>
            </div>
          </div>
        </AnimateIn>
      )}
    </div>
  );
}
