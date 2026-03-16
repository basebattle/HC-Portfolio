"use client";

import { createElement, useEffect, useState } from "react";
import { GraduationCap, Briefcase, Award, Globe, Stethoscope } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

// ─── Credential data ──────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    icon: Stethoscope,
    title: "Physiotherapist",
    subtitle: "BPT · Clinical rehabilitation specialist",
  },
  {
    icon: GraduationCap,
    title: "MHA",
    subtitle: "Healthcare Administration · Tier 1 institution",
  },
  {
    icon: Briefcase,
    title: "Senior Healthcare Consultant",
    subtitle: "Global Health & Life Sciences practice · Innovation function",
  },
  {
    icon: Award,
    title: "PAHM® · AZ-900 · AWS AI · APMP® · LSS Green Belt",
    subtitle: "Healthcare · Cloud AI · Procurement · Quality",
  },
  {
    icon: Globe,
    title: "10 Live Projects",
    subtitle: "hc-portfolio-zeta.vercel.app",
    link: "https://hc-portfolio-zeta.vercel.app",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutSection() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 lg:px-8"
      style={{
        backgroundImage: "url('/images/speaker-bg.jpg')",
        backgroundSize: "cover",
        // Using center 20% on mobile via CSS class override, center top on desktop
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#0F1923"
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (min-width: 768px) {
          #about { background-position: center top !important; }
        }
      ` }} />

      {/* Layer 2 (Blur) + Layer 3 (Tint) */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backdropFilter: prefersReduced ? "none" : "blur(14px) saturate(0.35)",
          WebkitBackdropFilter: prefersReduced ? "none" : "blur(14px) saturate(0.35)",
          background: "linear-gradient(135deg, rgba(15,25,35,0.82) 0%, rgba(15,25,35,0.70) 40%, rgba(15,25,35,0.88) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <AnimateIn from="bottom" delay={0}>
          <SectionLabel className="block mb-6">About</SectionLabel>
        </AnimateIn>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: prose ── */}
          <div className="flex flex-col gap-8">
            <AnimateIn from="bottom" delay={0.10}>
              <blockquote
                className="text-3xl sm:text-4xl font-normal leading-tight"
                style={{ fontFamily: "var(--font-dm-serif)", color: "#0D7377" }}
              >
                "I am not a developer who learned healthcare.<br />
                I am a clinician who learned to build."
              </blockquote>
            </AnimateIn>

            <AnimateIn from="bottom" delay={0.16}>
              <div
                className="flex flex-col gap-6 text-base sm:text-lg leading-[1.8]"
                style={{
                  color: "#ECEFF1",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                <p>
                  Dual-credentialed in physiotherapy and healthcare administration, I spent the first chapter of my career inside clinical systems — wards, rehabilitation units, multidisciplinary teams. The second chapter moved me into strategy consulting at a global Healthcare and Life Sciences practice, where I work embedded within the innovation function of the world's largest integrated payvider organisation.
                </p>
                <p>
                  The 10 projects in this portfolio are not weekend experiments. They implement HL7 FHIR R4, CDS Hooks v2.0.1, LangGraph multi-agent pipelines, and CMS compliance frameworks — the same standards that govern $4 trillion in annual US healthcare spend. Each one is a proof-of-concept for a strategic thesis, not a technical tutorial.
                </p>
                <p>
                  I occupy the intersection of three worlds that rarely speak to each other: clinical operations, agentic AI architecture, and management consulting. The portfolio exists to demonstrate that intersection is real — and that it compounds.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: credential cards ── */}
          <div className="flex flex-col gap-4 mt-2 lg:mt-0">
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              const hasLink = !!cred.link;

              return (
                <AnimateIn key={cred.title} from="right" delay={prefersReduced ? 0 : 0.12 + i * 0.08}>
                  {createElement(
                    hasLink ? "a" : "div",
                    hasLink
                      ? { href: cred.link, target: "_blank", rel: "noopener noreferrer", className: "block group outline-none" }
                      : { className: "block group" },
                    <div
                      className="relative overflow-hidden transition-all duration-200"
                      style={{
                        background: "rgba(22,32,41,0.75)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderLeft: "3px solid #0D7377",
                        borderRadius: "10px",
                        padding: "12px 16px",
                      }}
                    >
                      {/* Hover states handled via group-hover classes added to inner elements where possible, 
                          but since inline styles override classes, we'll use a clean setup.
                      */}
                      <style dangerouslySetInnerHTML={{
                        __html: `
                        .group:hover .cred-card-${i} {
                          border-left-color: #00BFA5 !important;
                          box-shadow: 0 0 16px rgba(0,191,165,0.12) !important;
                        }
                      ` }} />
                      <div className={`flex items-center gap-3 cred-card-${i} h-full border-transparent border-l-0 absolute inset-0 z-0 transition-all duration-200`} />

                      <div className="relative z-10 flex flex-row items-center gap-3">
                        {/* Icon badge */}
                        <div className="shrink-0 flex items-center justify-center">
                          <Icon size={18} color="#0D7377" />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col min-w-0">
                          <span
                            className="text-[13px] font-medium leading-snug"
                            style={{
                              color: "#ECEFF1",
                              fontFamily: "var(--font-dm-sans)",
                            }}
                          >
                            {cred.title}
                          </span>
                          <span
                            className="text-[11px] leading-snug mt-0.5"
                            style={{
                              color: "#607D8B",
                              fontFamily: "var(--font-dm-sans)",
                            }}
                          >
                            {cred.subtitle}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </AnimateIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
