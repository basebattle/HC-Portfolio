"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Activity, Github, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";

const DOMAIN_COLORS: Record<string, { striking: string; muted: string }> = {
  "Clinical Intelligence": { striking: "var(--neon-teal)", muted: "rgba(0, 245, 212, 0.25)" },
  "Financial Optimization": { striking: "var(--neon-pink)", muted: "rgba(255, 0, 122, 0.25)" },
  "Strategic Governance": { striking: "var(--neon-blue)", muted: "rgba(0, 183, 255, 0.25)" },
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
          borderColor: isHovered ? colors.striking : "rgba(255,255,255,0.15)",
          padding: "32px",
          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.5), 0 0 35px ${colors.striking}60, inset 0 0 25px ${colors.striking}20` : "none",
        }}
      >
        {/* Shorthand Dot/Label */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3 min-w-0 overflow-hidden">
             <div 
               className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-mono font-bold tracking-tighter border shadow-lg shrink-0"
               style={{ 
                 backgroundColor: colors.muted, 
                 borderColor: colors.striking, 
                 color: colors.striking,
                 boxShadow: `0 0 15px ${colors.striking}50`
               }}
             >
               {project.idx.replace("Project ", "P")}
             </div>
             <div className="flex flex-col min-w-0 overflow-hidden">
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40 shrink-0" style={{ color: colors.striking }}>Deployment Unit</span>
                <h3 className="text-xl font-serif tracking-tight text-white transition-colors leading-tight truncate" style={{ textShadow: `0 0 15px ${colors.striking}60` }}>
                  {project.name}
                </h3>
             </div>
          </div>
        </div>


        {/* Hero Metric (Muted background, striking text) */}
        <div 
          className="mb-8 w-28 h-28 mx-auto rounded-full flex flex-col items-center justify-center text-center transition-all duration-500 shrink-0 aspect-square"
          style={{ 
            backgroundColor: isHovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
            border: isHovered ? `1px solid ${colors.striking}80` : `1px solid ${colors.striking}30`,
            boxShadow: `0 0 20px ${colors.striking}20 inset`
          }}
        >
          <div className="text-4xl font-serif mb-1" style={{ color: colors.striking, textShadow: isHovered ? `0 0 20px ${colors.striking}80` : `0 0 10px ${colors.striking}40` }}>
            {project.heroNumber}
          </div>
          <div className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase">
            {project.heroUnit}
          </div>
        </div>

        <p className="text-sm text-white/80 leading-relaxed mb-6 flex-grow italic line-clamp-3">
          {project.descriptor}
        </p>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-[9px] font-mono whitespace-nowrap shadow-sm" style={{ color: colors.striking, border: `1px solid ${colors.striking}30` }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 mb-6 shrink-0 z-20 relative">
          <div 
            className={`px-3 py-1 rounded-full text-[9px] font-bold whitespace-nowrap shrink-0 uppercase tracking-widest border transition-all ${project.status === "Deployed" ? "pulse-red" : ""}`}
            style={{ 
              borderColor: project.status === "Deployed" ? "rgba(239, 68, 68, 0.4)" : (isHovered ? colors.striking : "rgba(255,255,255,0.2)"), 
              color: project.status === "Deployed" ? "#ef4444" : (isHovered ? colors.striking : "rgba(255,255,255,0.6)"),
              backgroundColor: project.status === "Deployed" ? "rgba(239, 68, 68, 0.1)" : "transparent",
              boxShadow: project.status === "Deployed" ? "0 0 10px rgba(239, 68, 68, 0.2)" : "none"
            }}
          >
            {project.status === "Deployed" ? (
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)] animate-pulse block" />LIVE</span>
            ) : project.status}
          </div>
        </div>

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
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/20 transition-all group/icon hover:bg-white/10 hover:border-white/40 shadow-lg"
                  >
                    <Github 
                      size={20} 
                      className="transition-all duration-300 opacity-80 group-hover/icon:opacity-100"
                      style={{ 
                        color: colors.striking,
                        filter: `drop-shadow(0 0 10px ${colors.striking}90)`
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
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500/10 border border-red-500/30 text-red-400 hover:text-red-300 hover:bg-red-500/20 pulse-red transition-all group/icon shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  >
                    <Globe 
                      size={20} 
                      className="transition-all duration-300 opacity-90 group-hover/icon:opacity-100 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
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
           <div className="mt-auto pt-4 flex justify-center absolute bottom-4 left-0 right-0">
              <div className="w-1 h-1 rounded-full bg-white/20 animate-bounce" />
           </div>
        )}
      </div>
    </motion.div>
  );
}
