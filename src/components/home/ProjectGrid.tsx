"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";

type Filter = "All" | Project["category"];

const FILTERS: Filter[] = [
  "All",
  "Clinical Intelligence",
  "Financial Optimization",
  "Strategic Governance",
];

// Short labels for narrow screens
const FILTER_SHORT: Partial<Record<Filter, string>> = {
  "Clinical Intelligence": "Clinical",
  "Financial Optimization": "Financial",
  "Strategic Governance": "Governance",
};

const FILTER_ACCENT: Partial<Record<Filter, string>> = {
  "Clinical Intelligence": "#00BFA5",
  "Financial Optimization": "#FF8F00",
  "Strategic Governance": "#5C9BF5",
};

interface ProjectGridProps {
  /** When true, increases top padding to clear the fixed navbar on a standalone page */
  standalone?: boolean;
}

export default function ProjectGrid({ standalone = false }: ProjectGridProps) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const accentColor =
    active === "All" ? "#00BFA5" : (FILTER_ACCENT[active] ?? "#00BFA5");

  return (
    <section
      id="solutions"
      className={`${standalone ? "pt-28 pb-24" : "py-24"} px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">

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
              Portfolio
            </span>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.06}>
          <h2
            className="text-3xl sm:text-4xl font-normal mb-4"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "#E8EDF0",
            }}
          >
            10 Projects. 3 Problem Domains.
          </h2>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.12}>
          <p
            className="text-base max-w-2xl mb-10"
            style={{
              color: "rgba(232,237,240,0.55)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Each project targets a measurable inefficiency in US healthcare delivery.
            Deployed projects are live; Blueprints have full architecture documentation;
            Planned projects have detailed technical specifications.
          </p>
        </AnimateIn>

        {/* ── Filter tabs ── */}
        <AnimateIn from="bottom" delay={0.18}>
          <div
            className="flex flex-wrap gap-2 mb-10 p-1 rounded-xl w-fit"
            style={{
              background: "rgba(22,32,41,0.70)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTERS.map((f) => {
              const isActive = f === active;
              const color = f === "All" ? "#00BFA5" : (FILTER_ACCENT[f] ?? "#00BFA5");
              const count =
                f === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length;

              return (
                <button
                  key={f}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f)}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 cursor-pointer"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    color: isActive ? color : "rgba(232,237,240,0.45)",
                    background: isActive
                      ? `${color}14`
                      : "transparent",
                    outline: "none",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}30`,
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5">
                    {/* Short label on mobile, full on sm+ */}
                    <span className="sm:hidden">
                      {FILTER_SHORT[f] ?? f}
                    </span>
                    <span className="hidden sm:inline">{f}</span>
                    <span
                      className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-semibold leading-none"
                      style={{
                        background: isActive ? `${color}22` : "rgba(255,255,255,0.06)",
                        color: isActive ? color : "rgba(232,237,240,0.35)",
                      }}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </AnimateIn>

        {/* ── Active filter indicator ── */}
        <AnimatePresence mode="wait">
          {active !== "All" && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="mb-6"
            >
              <span
                className="text-xs"
                style={{
                  color: "rgba(232,237,240,0.35)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Showing{" "}
                <span style={{ color: accentColor }}>{filtered.length}</span>{" "}
                project{filtered.length !== 1 ? "s" : ""} in{" "}
                <span style={{ color: accentColor }}>{active}</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Project grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.40,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom Roadmap Stats ── */}
        <AnimateIn from="bottom" delay={0.1} className="mt-14">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-10 rounded-2xl border"
            style={{
              background: "rgba(22,32,41,0.7)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            {/* Deployed */}
            <div className="flex flex-col gap-2 relative">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl lg:text-7xl font-bold tabular-nums" style={{ color: "#00BFA5", fontFamily: "var(--font-dm-serif)" }}>
                  <CountUpMetric value={projects.filter(p => p.status === "Deployed").length} duration={1500} />
                </span>
                <span className="text-2xl font-normal" style={{ color: "#E8EDF0", fontFamily: "var(--font-dm-sans)" }}>Deployed</span>
              </div>
              <span className="text-xs" style={{ color: "#607D8B", fontFamily: "var(--font-jetbrains-mono)" }}>
                Live on Vercel · Render · Streamlit
              </span>

              {/* Separator - desktop only */}
              <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px bg-white/10" />
            </div>

            {/* Blueprint */}
            <div className="flex flex-col gap-2 relative md:pl-4">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl lg:text-7xl font-bold tabular-nums" style={{ color: "#FF8F00", fontFamily: "var(--font-dm-serif)" }}>
                  <CountUpMetric value={13} duration={1500} delay={150} />
                </span>
                <span className="text-2xl font-normal" style={{ color: "#E8EDF0", fontFamily: "var(--font-dm-sans)" }}>Blueprint</span>
              </div>
              <span className="text-xs" style={{ color: "#607D8B", fontFamily: "var(--font-jetbrains-mono)" }}>
                Architected · Documented · Queued
              </span>

              {/* Separator - desktop only */}
              <div className="hidden md:block absolute right-[-1rem] top-2 bottom-2 w-px bg-white/10" />
            </div>

            {/* Planning */}
            <div className="flex flex-col gap-2 md:pl-4">
              <div className="flex items-baseline gap-3">
                <span className="text-6xl lg:text-7xl font-bold tabular-nums" style={{ color: "#607D8B", fontFamily: "var(--font-dm-serif)" }}>
                  <CountUpMetric value={3} duration={1500} delay={300} />
                </span>
                <span className="text-2xl font-normal" style={{ color: "#E8EDF0", fontFamily: "var(--font-dm-sans)" }}>Planning</span>
              </div>
              <span className="text-xs" style={{ color: "#607D8B", fontFamily: "var(--font-jetbrains-mono)" }}>
                Research · Feasibility · Scoping
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
