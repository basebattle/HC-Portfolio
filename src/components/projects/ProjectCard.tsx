"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

const DOMAIN_COLORS: Record<string, string> = {
  "Clinical Intelligence": "#0D7377",
  "Financial Optimization": "#FF8F00",
  "Strategic Governance": "#1565C0",
};

export default function ProjectCard({ project }: { project: Project }) {
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

  return (
    <div
      role="article"
      tabIndex={0}
      aria-label={`${project.name} — ${project.descriptor}`}
      className="relative flex flex-col transition-all overflow-hidden cursor-pointer"
      style={{
        background: isHovered ? "rgba(22,32,41,0.9)" : "rgba(22,32,41,0.7)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        border: `1px solid ${isHovered ? accentColor + "99" : "rgba(255,255,255,0.08)"}`,
        boxShadow: isHovered ? `0 0 18px ${accentColor}1F` : "none",
        borderRadius: "10px",
        padding: "14px",
        transitionDuration: prefersReduced ? "0s" : "0.25s",
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
          padding: "8px 12px",
          background: `${accentColor}0F`, // 6% opacity hex
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "32px",
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
          }}
        >
          {project.name}
        </span>
        <span
          className="truncate"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "11px",
            color: "#607D8B",
            fontStyle: "italic",
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

            {/* Hint text at bottom */}
            <div className="pt-[14px]">
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "10px",
                  color: "#607D8B",
                }}
              >
                Click to open case study →
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
