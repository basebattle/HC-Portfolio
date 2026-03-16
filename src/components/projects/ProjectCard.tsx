"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Activity, Github } from "lucide-react";
import { Project } from "@/data/projects";

const DOMAIN_COLORS: Record<string, string> = {
  "Clinical Intelligence": "#0D7377",
  "Financial Optimization": "#FF8F00",
  "Strategic Governance": "#1565C0",
};

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const accentColor = DOMAIN_COLORS[project.category] || "#0D7377";

  const prefersReduced = typeof window !== "undefined" && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const duration = prefersReduced ? 0 : 0.22;

  // Enhance numbers within bullets
  const formatBullet = (text: string) => {
    // Matches numbers, percentages, currency, K/M suffixes
    return text.replace(/(\$?\d+(?:,\d+)*(?:\.\d+)?(?:K|M|%)?)/g, `<span style="font-weight:500;color:${accentColor}">$1</span>`);
  };

  const cardContent = (
    <div
      role="article"
      tabIndex={0}
      aria-label={`${project.name} — ${project.descriptor}`}
      className={`flex flex-col transition-all overflow-hidden cursor-pointer ${compact ? "absolute top-0 left-0 w-full" : "relative"}`}
      style={{
        background: isHovered ? "rgba(22,32,41,0.95)" : "rgba(22,32,41,0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${isHovered ? accentColor + "99" : "rgba(255,255,255,0.08)"}`,
        boxShadow: isHovered ? `0 0 18px ${accentColor}1F` : "none",
        borderRadius: "10px",
        padding: compact ? "10px 12px" : "14px",
        transitionDuration: prefersReduced ? "0s" : "0.25s",
        zIndex: compact && isHovered ? 20 : 10,
        height: compact && !isHovered ? "100%" : "auto"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(`/projects/${project.slug}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(`/projects/${project.slug}`);
        }
      }}
    >
      {/* Metric Hero Box (Stable Anchor) */}
      <div
        className="flex flex-col mb-[10px]"
        style={{
          border: `1px solid ${accentColor}59`, // 35% opacity hex
          borderRadius: "6px",
          padding: compact ? "6px 10px" : "8px 12px",
          background: `${accentColor}0F`, // 6% opacity hex
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: compact ? "26px" : "32px",
            color: accentColor,
            fontWeight: 500,
            lineHeight: 1,
          }}
        >
          {project.heroNumber}
        </span>
        <span
          className="uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "10px",
            color: "#607D8B",
            marginTop: "3px",
            letterSpacing: "0.08em",
          }}
        >
          {project.heroUnit}
        </span>
      </div>

      {/* Project Identity */}
      <div className="flex flex-col gap-[2px]">
        <span
          style={{
            fontFamily: "var(--font-jetbrains-mono)",
            fontSize: "10px",
            color: "#607D8B",
          }}
        >
          P{project.idx}
        </span>
        <span
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#ECEFF1",
            lineHeight: 1.4,
          }}
        >
          {project.name}
        </span>
        <span
          className={!isHovered && compact ? "line-clamp-2" : ""}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            color: "#607D8B",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {project.descriptor}
        </span>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 flex flex-col gap-2">
              {project.bullets?.map((bullet, idx) => (
                <div key={idx} className="flex items-start">
                  <div
                    className="shrink-0 mr-2"
                    style={{
                      width: "2px",
                      height: "14px",
                      background: accentColor,
                      marginTop: "2px"
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "11px",
                      color: "#ECEFF1",
                      lineHeight: 1.6,
                    }}
                    dangerouslySetInnerHTML={{ __html: formatBullet(bullet) }}
                  />
                </div>
              ))}
            </div>

            {/* Quick Actions Row */}
            <div className="pt-5 mt-auto flex items-center gap-3">
              {project.live && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.live || "", "_blank");
                  }}
                  className="flex items-center justify-center p-2 rounded-lg border transition-all duration-200"
                  style={{
                    background: `${accentColor}12`,
                    borderColor: `${accentColor}25`,
                    color: accentColor,
                  }}
                  title="Visit Webpage"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${accentColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${accentColor}12`;
                  }}
                >
                  <Globe size={15} />
                </button>
              )}

              {project.simulation && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.simulation || "", "_blank");
                  }}
                  className="flex items-center justify-center p-2 rounded-lg border transition-all duration-200"
                  style={{
                    background: `${accentColor}12`,
                    borderColor: `${accentColor}25`,
                    color: accentColor,
                  }}
                  title="Run Simulation"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${accentColor}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${accentColor}12`;
                  }}
                >
                  <Activity size={15} />
                </button>
              )}

              {project.github && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const url = project.github?.startsWith("http")
                      ? project.github
                      : `https://github.com/${project.github}`;
                    window.open(url, "_blank");
                  }}
                  className="flex items-center justify-center p-2 rounded-lg border transition-all duration-200"
                  style={{
                    background: "rgba(232,237,240,0.06)",
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "#ECEFF1",
                  }}
                  title="View GitHub"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(232,237,240,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(232,237,240,0.06)";
                  }}
                >
                  <Github size={15} />
                </button>
              )}

              <div className="ml-auto flex items-center">
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono)",
                    fontSize: "10px",
                    color: "#607D8B",
                  }}
                >
                  View full case study →
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (!compact) return cardContent;

  return (
    <div className="relative w-full h-full">
      {/* Invisible placeholder to maintain grid cell dimensions */}
      <div
        className="invisible flex flex-col pointer-events-none"
        style={{ padding: "10px 12px", border: "1px solid transparent" }}
      >
        <div style={{ padding: "6px 10px", marginBottom: "10px", border: "1px solid transparent" }}>
          <span style={{ fontSize: "26px", lineHeight: 1 }}>{project.heroNumber}</span>
          <span style={{ fontSize: "10px", marginTop: "3px" }}>{project.heroUnit}</span>
        </div>
        <div className="flex flex-col gap-[2px]">
          <span style={{ fontSize: "10px" }}>P{project.idx}</span>
          <span style={{ fontSize: "13px", lineHeight: 1.4 }}>{project.name}</span>
          <span className="line-clamp-2" style={{ fontSize: "11px", lineHeight: 1.5 }}>{project.descriptor}</span>
        </div>
      </div>
      {cardContent}
    </div>
  );
}
