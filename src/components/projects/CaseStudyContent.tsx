"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import type { Project } from "@/data/projects";

interface CaseStudyContentProps {
  project: Project;
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <div className="flex flex-col gap-14">

      {/* ── Problem statement ── */}
      <AnimateIn from="bottom" delay={0}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-px"
              style={{ background: "rgba(232,237,240,0.18)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                color: "rgba(232,237,240,0.30)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              The Problem
            </span>
          </div>

          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{
              color: "rgba(232,237,240,0.68)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {project.problem}
          </p>
        </div>
      </AnimateIn>

      {/* ── Before / After evolution ── */}
      <AnimateIn from="bottom" delay={0.06}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div
              className="w-6 h-px"
              style={{ background: "rgba(232,237,240,0.18)" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                color: "rgba(232,237,240,0.30)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Evolution
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before */}
            <div
              className="flex flex-col gap-3 p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(232,237,240,0.35)",
                  }}
                >
                  1
                </span>
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{
                    color: "rgba(232,237,240,0.30)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Before
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(232,237,240,0.50)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {project.evolution[0]}
              </p>
            </div>

            {/* After */}
            <div
              className="flex flex-col gap-3 p-5 rounded-xl"
              style={{
                background: "rgba(0,191,165,0.04)",
                border: "1px solid rgba(0,191,165,0.14)",
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold"
                  style={{
                    background: "rgba(0,191,165,0.14)",
                    color: "#00BFA5",
                  }}
                >
                  2
                </span>
                <span
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{
                    color: "rgba(0,191,165,0.60)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  After
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(232,237,240,0.68)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {project.evolution[1]}
              </p>
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
}
