"use client";

import { createElement, useEffect, useState } from "react";
import Image from "next/image";
import { Shield, Briefcase, Award, Zap, Building } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

// ─── Credential data ──────────────────────────────────────────────────────────

const CREDENTIALS = [
  {
    icon: Building,
    title: "Senior Consultant",
    subtitle: "Global Health & Life Sciences Practice",
  },
  {
    icon: Zap,
    title: "Strategic DX Architect",
    subtitle: "Focus: AI Implementation & Clinical RCM",
  },
  {
    icon: Shield,
    title: "HAIRA Lead",
    subtitle: "AI Governance & Structural Maturity",
  },
  {
    icon: Award,
    title: "PAHM® · LSS Green Belt",
    subtitle: "Academy of Healthcare Management",
  },
  {
    icon: Briefcase,
    title: "MHA · BPT",
    subtitle: "Healthcare Administration & Clinical Roots",
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
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Background Image Container with Stylized Blur */}
      <div className="absolute inset-0 z-0 lg:left-0 lg:right-auto lg:w-[120%] h-full pointer-events-none opacity-30 lg:opacity-40 transition-all duration-1000 blur-[60px] scale-110">
        <Image
          src="/hero-profile.png"
          alt="Consulting Context"
          fill
          priority
          className="object-cover"
        />

        {/* Masking for bleed */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to left, var(--background) 20%, transparent 60%, transparent 80%, var(--background) 100%), linear-gradient(to top, var(--background) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <AnimateIn delay={0.1}>
          <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-foreground/40 block mb-12">
            The Consultant Identity
          </span>
        </AnimateIn>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Left: prose ── */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <AnimateIn delay={0.2}>
              <h2
                className="text-4xl sm:text-5xl font-normal leading-tight text-foreground"
                style={{ fontFamily: "var(--font-dm-serif)" }}
              >
                I don&apos;t just build healthcare software;
                <br />
                <span className="opacity-40 italic">I implement transformation.</span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={0.3}>
              <div
                className="flex flex-col gap-8 text-base leading-relaxed text-foreground/60 max-w-2xl"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <p>
                  As a Senior Healthcare Management Consultant embedded within global innovation practices, I occupy the critical space where clinical operations meet agentic AI. My work isn&apos;t about purely technical experiments; it&apos;s about solvability—creating the architectures that allow the world&apos;s largest integrated health systems to deploy AI safely and at scale.
                </p>
                <p>
                  My perspective is dual-rooted. I started my career in clinical rehabilitation (BPT) before transitioning into Healthcare Administration (MHA) and high-stakes strategy consulting. This allows me to architect solutions that respect clinical workflows while driving the $35B+ efficiencies required by modern revenue cycles.
                </p>
                <p>
                   The 12 projects in this portfolio implement the four pillars of Digital Transformation: <span className="text-foreground">Readiness</span>, <span className="text-foreground">Interoperability</span>, <span className="text-foreground">Efficiency</span>, and <span className="text-foreground">Care Delivery</span>. They serve as a proof-of-concept for my thesis: that the next decade of healthcare will be defined by the quality of its reasoning infrastructure.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* ── Right: credential cards ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 mt-12 lg:mt-24">
            {CREDENTIALS.map((cred, i) => {
              const Icon = cred.icon;
              return (
                <AnimateIn key={cred.title} delay={0.4 + i * 0.1}>
                  <div
                    className="group relative overflow-hidden p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary/10 transition-colors">
                        <Icon size={20} className="text-primary opacity-60 group-hover:opacity-100" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-serif font-medium text-foreground group-hover:text-white transition-colors">{cred.title}</span>
                        <span className="text-[11px] font-medium text-foreground/40 mt-1 uppercase tracking-widest">{cred.subtitle}</span>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
