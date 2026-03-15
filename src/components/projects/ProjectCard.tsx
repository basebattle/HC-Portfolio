"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github, ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import { Project } from "@/data/projects";

// ─── Design-system colour maps ──────────────────────────────────────────────

const CATEGORY_META: Record<
  Project["category"],
  { dot: string; badgeVariant: "teal" | "gold" | "blue"; label: string }
> = {
  "Clinical Intelligence": {
    dot: "#00BFA5",
    badgeVariant: "teal",
    label: "Clinical Intelligence",
  },
  "Financial Optimization": {
    dot: "#FF8F00",
    badgeVariant: "gold",
    label: "Financial Optimization",
  },
  "Strategic Governance": {
    dot: "#5C9BF5",
    badgeVariant: "blue",
    label: "Strategic Governance",
  },
};

const METRIC_TYPE_COLOR: Record<Project["metricType"], string> = {
  financial: "#FF8F00",
  enabler: "#00BFA5",
  strategic: "#5C9BF5",
};

const STATUS_META: Record<
  Project["status"],
  { color: string; bg: string; border: string }
> = {
  Deployed: {
    color: "#4CAF7D",
    bg: "rgba(76,175,125,0.10)",
    border: "rgba(76,175,125,0.30)",
  },
  Blueprint: {
    color: "#FF8F00",
    bg: "rgba(255,143,0,0.10)",
    border: "rgba(255,143,0,0.30)",
  },
  Planned: {
    color: "rgba(232,237,240,0.40)",
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.10)",
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const cat = CATEGORY_META[project.category];
  const metricColor = METRIC_TYPE_COLOR[project.metricType];
  const status = STATUS_META[project.status];

  return (
    <GlassCard
      className="flex flex-col overflow-hidden"
      borderColor={
        project.status === "Deployed"
          ? "rgba(0,191,165,0.18)"
          : "rgba(255,255,255,0.08)"
      }
    >
      {/* ── Top accent bar ── */}
      <div
        className="h-px w-full shrink-0"
        style={{
          background: `linear-gradient(90deg, ${cat.dot}55 0%, transparent 100%)`,
        }}
      />

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Row 1 — idx + category + status */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {/* Index */}
            <span
              className="text-xs font-medium tabular-nums"
              style={{
                color: "rgba(232,237,240,0.28)",
                fontFamily: "var(--font-jetbrains-mono)",
              }}
            >
              {project.idx}
            </span>
            {/* Category badge */}
            <Badge variant={cat.badgeVariant} dot size="sm">
              {cat.label}
            </Badge>
          </div>
          {/* Status indicator */}
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium border shrink-0"
            style={{
              color: status.color,
              background: status.bg,
              borderColor: status.border,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {project.status === "Deployed" && (
              <span
                className="relative inline-flex w-1.5 h-1.5"
              >
                <span
                  className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping"
                  style={{ backgroundColor: status.color }}
                />
                <span
                  className="relative inline-flex w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: status.color }}
                />
              </span>
            )}
            {project.status}
          </span>
        </div>

        {/* Row 2 — Project name */}
        <div>
          <h3
            className="text-xl font-normal leading-tight"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "#E8EDF0",
            }}
          >
            {project.name}
          </h3>
        </div>

        {/* Row 3 — One-liner */}
        <p
          className="text-sm leading-relaxed line-clamp-3"
          style={{
            color: "rgba(232,237,240,0.60)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {project.oneLiner}
        </p>

        {/* Row 4 — Primary metric */}
        <div
          className="flex items-start gap-2 rounded-xl px-4 py-3"
          style={{
            background: `${metricColor}0D`,
            border: `1px solid ${metricColor}22`,
          }}
        >
          <span
            className="text-xs leading-relaxed font-medium"
            style={{
              color: metricColor,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {project.metric}
          </span>
        </div>

        {/* Row 5 — KPI pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.kpis.slice(0, 3).map((kpi) => (
            <span
              key={kpi}
              className="text-[10px] px-2 py-0.5 rounded-full border leading-normal"
              style={{
                color: "rgba(232,237,240,0.50)",
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {kpi}
            </span>
          ))}
        </div>

        {/* ── Expand / collapse ── */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 self-start text-xs font-medium transition-colors duration-150 cursor-pointer mt-auto"
          style={{
            color: expanded
              ? "rgba(0,191,165,0.80)"
              : "rgba(232,237,240,0.38)",
            fontFamily: "var(--font-dm-sans)",
          }}
          aria-expanded={expanded}
        >
          {expanded ? "Hide details" : "Architecture + stack"}
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.22 }}
            className="inline-flex"
          >
            <ChevronDown size={13} />
          </motion.span>
        </button>

        {/* ── Expanded panel ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-4 pt-2">

                {/* Agent architecture — evolution[1] */}
                <div>
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-2"
                    style={{
                      color: "rgba(232,237,240,0.30)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Architecture
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "rgba(232,237,240,0.55)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    {project.evolution[1]}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                {/* Tech stack */}
                <div>
                  <p
                    className="text-[10px] font-semibold tracking-widest uppercase mb-2"
                    style={{
                      color: "rgba(232,237,240,0.30)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded border"
                        style={{
                          color: "#00BFA5",
                          borderColor: "rgba(0,191,165,0.22)",
                          background: "rgba(0,191,165,0.06)",
                          fontFamily: "var(--font-jetbrains-mono)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External links */}
                {(project.github || project.live) && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                        style={{
                          color: "rgba(232,237,240,0.45)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "#E8EDF0")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "rgba(232,237,240,0.45)")
                        }
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                        style={{
                          color: "rgba(232,237,240,0.45)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "#00BFA5")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "rgba(232,237,240,0.45)")
                        }
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={12} />
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Footer CTA — always visible ── */}
      <div
        className="px-6 py-4 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 group"
          style={{
            color: "rgba(232,237,240,0.45)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          <span
            className="group-hover:text-white transition-colors duration-150"
            style={{ color: "inherit" }}
          >
            View case study
          </span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform duration-150"
          />
        </Link>
      </div>
    </GlassCard>
  );
}
