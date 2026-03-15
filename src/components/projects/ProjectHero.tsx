"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AnimateIn from "@/components/ui/AnimateIn";
import type { Project } from "@/data/projects";

const CATEGORY_BADGE: Record<Project["category"], "teal" | "gold" | "blue"> = {
  "Clinical Intelligence": "teal",
  "Financial Optimization": "gold",
  "Strategic Governance": "blue",
};

const STATUS_META: Record<
  Project["status"],
  { color: string; bg: string; border: string; pulse: boolean }
> = {
  Deployed: {
    color: "#4CAF7D",
    bg: "rgba(76,175,125,0.10)",
    border: "rgba(76,175,125,0.28)",
    pulse: true,
  },
  Blueprint: {
    color: "#FF8F00",
    bg: "rgba(255,143,0,0.10)",
    border: "rgba(255,143,0,0.28)",
    pulse: false,
  },
  Planned: {
    color: "rgba(232,237,240,0.38)",
    bg: "rgba(255,255,255,0.04)",
    border: "rgba(255,255,255,0.10)",
    pulse: false,
  },
};

const METRIC_COLOR: Record<Project["metricType"], string> = {
  financial: "#FF8F00",
  enabler: "#00BFA5",
  strategic: "#5C9BF5",
};

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const status = STATUS_META[project.status];
  const metricColor = METRIC_COLOR[project.metricType];

  return (
    <div className="flex flex-col gap-8">
      {/* ── Back link ── */}
      <AnimateIn from="left" delay={0} duration={0.4}>
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-1.5 text-sm transition-colors duration-150 group w-fit"
          style={{
            color: "rgba(232,237,240,0.38)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform duration-150"
          />
          <span className="group-hover:text-white transition-colors duration-150">
            All projects
          </span>
        </Link>
      </AnimateIn>

      {/* ── Status bar ── */}
      <AnimateIn from="bottom" delay={0.06}>
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Index chip */}
          <span
            className="text-xs font-medium tabular-nums px-2 py-0.5 rounded border"
            style={{
              color: "rgba(232,237,240,0.30)",
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "var(--font-jetbrains-mono)",
            }}
          >
            {project.idx}
          </span>

          {/* Category */}
          <Badge variant={CATEGORY_BADGE[project.category]} dot size="sm">
            {project.category}
          </Badge>

          {/* Status */}
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border"
            style={{
              color: status.color,
              background: status.bg,
              borderColor: status.border,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {status.pulse && (
              <span className="relative inline-flex w-1.5 h-1.5">
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

          {/* Phase */}
          <span
            className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border"
            style={{
              color: "rgba(232,237,240,0.35)",
              borderColor: "rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Phase {project.phase}
          </span>
        </div>
      </AnimateIn>

      {/* ── H1 ── */}
      <AnimateIn from="bottom" delay={0.12}>
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight"
          style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
        >
          {project.name}
        </h1>
      </AnimateIn>

      {/* ── One-liner ── */}
      <AnimateIn from="bottom" delay={0.18}>
        <p
          className="text-lg sm:text-xl leading-relaxed max-w-2xl"
          style={{
            color: "rgba(232,237,240,0.62)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          {project.oneLiner}
        </p>
      </AnimateIn>

      {/* ── Metric callout ── */}
      <AnimateIn from="bottom" delay={0.24}>
        <div
          className="inline-flex items-start gap-3 px-5 py-4 rounded-xl"
          style={{
            background: `${metricColor}0D`,
            border: `1px solid ${metricColor}28`,
          }}
        >
          <div
            className="w-1 self-stretch rounded-full shrink-0"
            style={{ background: metricColor }}
          />
          <div className="flex flex-col gap-0.5">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase"
              style={{
                color: `${metricColor}99`,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Primary metric
            </span>
            <span
              className="text-base font-semibold"
              style={{
                color: metricColor,
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {project.metric}
            </span>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
