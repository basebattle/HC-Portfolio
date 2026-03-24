"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Activity, Github, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";

const DOMAIN_COLORS: Record<string, { striking: string; muted: string }> = {
  "Clinical Intelligence": { striking: "var(--neon-teal)", muted: "rgba(0, 245, 212, 0.15)" },
  "Financial Optimization": { striking: "var(--neon-pink)", muted: "rgba(255, 0, 122, 0.15)" },
  "Strategic Governance": { striking: "var(--neon-blue)", muted: "rgba(0, 183, 255, 0.15)" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const colors = DOMAIN_COLORS[project.category] || { striking: "#00d4aa", muted: "rgba(0, 212, 170, 0.1)" };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      layout
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={() => isMobile ? setIsHovered(!isHovered) : router.push(`/projects/${project.slug}`)}
      className="relative cursor-pointer group"
      style={{ zIndex: isHovered ? 50 : 1 }}
      animate={{ 
        scale: isHovered && !isMobile ? 1.05 : 1,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
      }}
    >
      <div
        className="flex flex-col h-full rounded-[32px] border transition-all duration-500 overflow-hidden"
        style={{
          background: isHovered ? "rgba(15, 25, 40, 0.95)" : "rgba(10, 15, 25, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: isHovered ? colors.striking : "rgba(255,255,255,0.06)",
          padding: "32px",
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${colors.striking}40, inset 0 0 20px ${colors.striking}10` : "none",
        }}
      >
        {/* Shorthand Dot/Label */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
             <div 
               className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-mono font-bold tracking-tighter border shadow-lg shrink-0"
               style={{ 
                 backgroundColor: colors.muted, 
                 borderColor: colors.striking, 
                 color: colors.striking,
                 boxShadow: isHovered ? `0 0 15px ${colors.striking}40` : "none"
               }}
             >
               {project.idx.replace("Project ", "P")}
             </div>
             <div className="flex flex-col">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30">Deployment Unit</span>
                <h3 className="text-xl font-serif text-white group-hover:text-neon-teal transition-colors leading-tight">
                  {project.name}
                </h3>
             </div>
          </div>
          <div 
            className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border transition-all ${project.status === "Deployed" ? "pulse-red" : ""}`}
            style={{ 
              borderColor: project.status === "Deployed" ? "rgba(239, 68, 68, 0.4)" : (isHovered ? colors.striking : "rgba(255,255,255,0.1)"), 
              color: project.status === "Deployed" ? "#ef4444" : (isHovered ? colors.striking : "rgba(255,255,255,0.4)"),
              backgroundColor: project.status === "Deployed" ? "rgba(239, 68, 68, 0.05)" : "transparent"
            }}
          >
            {project.status === "Deployed" ? "● Live" : project.status}
          </div>
        </div>

        {/* Hero Metric (Muted background, striking text) */}
        <div 
          className="mb-8 w-28 h-28 mx-auto rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shrink-0 aspect-square"
          style={{ 
            backgroundColor: isHovered ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
            border: isHovered ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent"
          }}
        >
          <div className="text-4xl font-serif mb-1" style={{ color: colors.striking, textShadow: isHovered ? `0 0 20px ${colors.striking}40` : "none" }}>
            {project.heroNumber}
          </div>
          <div className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase">
            {project.heroUnit}
          </div>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-8 italic opacity-80 line-clamp-3">
          {project.descriptor}
        </p>

        {/* Revealable Actions */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between"
            >
              <div className="flex gap-4">
                {project.github && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github || "#", "_blank");
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 transition-all group/icon hover:bg-white/10 hover:border-white/20"
                  >
                    <Github 
                      size={20} 
                      className="transition-all duration-300 opacity-60 group-hover/icon:opacity-100"
                      style={{ 
                        color: colors.striking,
                        filter: isHovered ? `drop-shadow(0 0 8px ${colors.striking}80)` : "none" 
                      }} 
                    />
                  </button>
                )}
                {project.live && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.live || "#", "_blank");
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 pulse-red transition-all group/icon"
                  >
                    <Globe 
                      size={20} 
                      className="transition-all duration-300 opacity-80 group-hover/icon:opacity-100"
                      style={{ filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))" }}
                    />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neon-teal">
                Full Case Study <BookOpen size={14} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isHovered && (
           <div className="mt-auto pt-4 flex justify-center">
              <div className="w-1 h-1 rounded-full bg-white/20 animate-bounce" />
           </div>
        )}
      </div>
    </motion.div>
  );
}
