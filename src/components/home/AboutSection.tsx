"use client";

import { GraduationCap, Briefcase, Award, Bot, Stethoscope } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Credential data ──────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    icon: GraduationCap,
    title: "MHA — Health Administration",
    org: "Tata Institute of Social Sciences, Mumbai",
    year: "2023",
    color: "#00BFA5",
    borderColor: "rgba(0,191,165,0.18)",
  },
  {
    icon: Stethoscope,
    title: "BPT — Physiotherapy",
    org: "Patna Medical College and Hospital",
    year: "2020",
    color: "#00BFA5",
    borderColor: "rgba(0,191,165,0.12)",
  },
  {
    icon: Briefcase,
    title: "Sr. Healthcare Consultant",
    org: "Cognizant Technology Solutions",
    year: "2019–present",
    color: "#5C9BF5",
    borderColor: "rgba(92,155,245,0.16)",
  },
  {
    icon: Award,
    title: "Best Large Deal Winner",
    org: "Cognizant Innovation Council",
    year: "2023",
    color: "#FF8F00",
    borderColor: "rgba(255,143,0,0.22)",
  },
  {
    icon: Bot,
    title: "Agentic AI Architect",
    org: "Healthcare AI — MCP · LangGraph · FHIR R4",
    year: "2024–present",
    color: "#00BFA5",
    borderColor: "rgba(0,191,165,0.18)",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#0F1923" }}
    >
      {/* Faint radial accent — bottom right */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(0,191,165,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── Section label ── */}
        <AnimateIn from="bottom" delay={0}>
          <SectionLabel className="block mb-3">About</SectionLabel>
        </AnimateIn>

        {/* ── H2 ── */}
        <AnimateIn from="bottom" delay={0.07}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-14"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
          >
            The Clinical-to-AI{" "}
            <span
              style={{
                color: "#00BFA5",
                textShadow: "0 0 32px rgba(0,191,165,0.35)",
              }}
            >
              Bridge
            </span>
          </h2>
        </AnimateIn>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left: 3/5 — prose ── */}
          <div className="lg:col-span-3 flex flex-col gap-7">

            <AnimateIn from="bottom" delay={0.10}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "rgba(232,237,240,0.70)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                I started as a physiotherapist — hands-on, patient-facing,
                measuring outcomes in degrees of mobility and pain scores. That
                clinical grounding is not background noise; it is the lens through
                which I evaluate every AI system I build. A prior-authorization
                agent that shaves eleven days off a cycle is not a workflow
                optimisation — it is a patient getting surgery before their
                condition deteriorates.
              </p>
            </AnimateIn>

            <AnimateIn from="bottom" delay={0.16}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "rgba(232,237,240,0.70)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                My MHA from the Tata Institute of Social Sciences gave me the
                strategic frame: health economics, policy design, and the
                operational realities of running a health system under margin
                pressure. At Cognizant I moved into large-scale healthcare IT
                delivery — managing cross-functional teams across payer, provider,
                and life-sciences clients, and earning recognition on the Innovation
                Council for structuring a Best Large Deal win.
              </p>
            </AnimateIn>

            <AnimateIn from="bottom" delay={0.22}>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "rgba(232,237,240,0.70)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                The portfolio on this page is the third chapter: applied agentic AI
                on the problems I know are costing health systems the most. Every
                project starts from a published benchmark, is scoped to a measurable
                clinical or financial outcome, and is built to the interoperability
                standards — FHIR R4, CDS Hooks, HL7, CMS compliance — that
                enterprise health system evaluators require before taking anything
                to production.
              </p>
            </AnimateIn>

            {/* Divider + quick stats */}
            <AnimateIn from="bottom" delay={0.28}>
              <div
                className="grid grid-cols-3 gap-4 pt-4 border-t"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                {[
                  { value: "10+", label: "years healthcare" },
                  { value: "3", label: "deployed projects" },
                  { value: "FHIR R4", label: "interoperability" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span
                      className="text-2xl font-normal leading-none"
                      style={{
                        color: "#00BFA5",
                        fontFamily: "var(--font-dm-serif)",
                      }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        color: "rgba(232,237,240,0.38)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: 2/5 — credential cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <AnimateIn key={cred.title} from="right" delay={0.12 + i * 0.08}>
                  <GlassCard
                    hover
                    borderColor={cred.borderColor}
                    className="px-5 py-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon badge */}
                      <div
                        className="shrink-0 flex items-center justify-center w-9 h-9 rounded-lg mt-0.5"
                        style={{
                          background: `${cred.color}14`,
                          border: `1px solid ${cred.color}28`,
                        }}
                      >
                        <Icon size={16} style={{ color: cred.color }} />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span
                          className="text-sm font-semibold leading-snug"
                          style={{
                            color: "#E8EDF0",
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {cred.title}
                        </span>
                        <span
                          className="text-xs leading-snug"
                          style={{
                            color: "rgba(232,237,240,0.50)",
                            fontFamily: "var(--font-dm-sans)",
                          }}
                        >
                          {cred.org}
                        </span>
                        <span
                          className="text-[10px] mt-0.5 tabular-nums"
                          style={{
                            color: cred.color,
                            fontFamily: "var(--font-jetbrains-mono)",
                            opacity: 0.75,
                          }}
                        >
                          {cred.year}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
