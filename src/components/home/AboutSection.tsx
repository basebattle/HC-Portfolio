"use client";

import { GraduationCap, Briefcase, Award, Globe, Stethoscope } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Credential data ──────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    icon: Stethoscope,
    title: "BPT",
    org: "Patna Medical College & Hospital",
  },
  {
    icon: GraduationCap,
    title: "MHA",
    org: "Tata Institute of Social Sciences, Mumbai",
  },
  {
    icon: Briefcase,
    title: "Senior Consultant",
    org: "Cognizant — UHG/Optum Account",
  },
  {
    icon: Award,
    title: "PAHM® · AZ-900 · AWS AI · APMP® · LSS Green Belt",
    org: "Certifications",
  },
  {
    icon: Globe,
    title: "Portfolio: hc-portfolio-zeta.vercel.app",
    org: "Live Website",
    link: "https://hc-portfolio-zeta.vercel.app",
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
          <SectionLabel className="block mb-6">About</SectionLabel>
        </AnimateIn>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left: 3/5 — prose ── */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <AnimateIn from="bottom" delay={0.10}>
              <blockquote
                className="text-3xl sm:text-4xl font-normal leading-tight"
                style={{ fontFamily: "var(--font-dm-serif)", color: "#0D7377" }}
              >
                "I am not a developer who learned healthcare. I am a clinician who learned to build."
              </blockquote>
            </AnimateIn>

            <AnimateIn from="bottom" delay={0.16}>
              <div className="flex flex-col gap-6">
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: "#ECEFF1",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Dual-credentialed in Physiotherapy (BPT, Patna Medical College) and Healthcare
                  Administration (MHA, TISS Mumbai), I spent years inside clinical systems before
                  spending years consulting on them at Cognizant — embedded in UnitedHealth Group's
                  innovation ecosystem as a Senior Healthcare Consultant.
                </p>

                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: "#ECEFF1",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  The 10 projects in this portfolio are not weekend experiments. They implement
                  HL7 FHIR R4, CDS Hooks v2.0.1, LangGraph multi-agent pipelines, and CMS
                  compliance frameworks — the same standards that govern $4 trillion in annual
                  US healthcare spend. Each one is a proof-of-concept for a strategic thesis, not
                  a technical tutorial.
                </p>

                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{
                    color: "#ECEFF1",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  I position myself at the intersection of three worlds that rarely speak to each
                  other: clinical operations, AI architecture, and management consulting. That
                  intersection is where Healthcare AI strategy is actually made.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: 2/5 — credential cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 mt-2 lg:mt-0">
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              const hasLink = !!cred.link;

              const CardWrapper = hasLink ? 'a' : 'div';
              const cardProps = hasLink
                ? { href: cred.link, target: "_blank", rel: "noopener noreferrer", className: "block group outline-none" }
                : { className: "block group" };

              return (
                <AnimateIn key={cred.title} from="right" delay={0.12 + i * 0.08}>
                  <CardWrapper {...cardProps}>
                    <div
                      className="relative overflow-hidden rounded-xl border border-white/10 transition-all duration-300 group-hover:border-[#00BFA5]/50 group-hover:shadow-[0_0_20px_rgba(0,191,165,0.15)]"
                      style={{
                        background: "rgba(22,32,41,0.7)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    >
                      {/* Left border accent */}
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#0D7377] transition-colors duration-300 group-hover:bg-[#00BFA5]"
                      />

                      <div className="px-5 py-4 pl-7 flex items-center gap-4">
                        {/* Icon badge */}
                        <div
                          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 group-hover:bg-[#00BFA5]/10"
                          style={{
                            background: "rgba(13,115,119,0.1)",
                            border: "1px solid rgba(13,115,119,0.2)",
                          }}
                        >
                          <Icon size={18} className="text-[#0D7377] transition-colors duration-300 group-hover:text-[#00BFA5]" />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col min-w-0">
                          <span
                            className="text-[15px] font-semibold leading-snug truncate transition-colors duration-300 group-hover:text-white"
                            style={{
                              color: "#E8EDF0",
                              fontFamily: "var(--font-dm-sans)",
                            }}
                          >
                            {cred.title}
                          </span>
                          <span
                            className="text-[13px] leading-snug mt-0.5 truncate"
                            style={{
                              color: "#607D8B",
                              fontFamily: "var(--font-dm-sans)",
                            }}
                          >
                            {cred.org}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardWrapper>
                </AnimateIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
