"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronRight, Download } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import Image from "next/image";

const STAT_CARDS = [
  {
    value: "$2.8M",
    label: "Projected Annual Impact",
    sublabel: "across deployed projects",
    color: "#FF8F00",
  },
  {
    value: "60%",
    label: "Admin Time Reduction",
    sublabel: "prior auth workflows",
    color: "#00BFA5",
  },
  {
    value: "3d",
    label: "Auth Cycle Time",
    sublabel: "down from 14 days",
    color: "#00BFA5",
  },
  {
    value: "94%",
    label: "Clean Claim Rate",
    sublabel: "up from 78% baseline",
    color: "#FF8F00",
  },
];

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0F1923" }}
    >
      {/* Radial gradient overlays */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Animated Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)",
            animation: "pulse 8s ease-in-out infinite alternate"
          }}
        />
        {/* Teal bloom — top-right */}
        <div
          className="absolute"
          style={{
            width: "700px",
            height: "700px",
            top: "-10%",
            right: "-5%",
            background:
              "radial-gradient(ellipse at center, rgba(13,115,119,0.22) 0%, transparent 70%)",
            animation: "pulse 10s ease-in-out infinite alternate"
          }}
        />
        {/* Green bloom — bottom-left */}
        <div
          className="absolute"
          style={{
            width: "600px",
            height: "600px",
            bottom: "-5%",
            left: "-5%",
            background:
              "radial-gradient(ellipse at center, rgba(0,191,165,0.13) 0%, transparent 70%)",
            animation: "pulse 12s ease-in-out infinite alternate-reverse"
          }}
        />
        {/* Wide teal wash at 70% 40% per spec */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(13,115,119,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-8">
              {/* H1 */}
              <AnimateIn delay={0.13}>
                <h1
                  className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[1.06] tracking-tight"
                  style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
                >
                  Healthcare AI,
                  <br />
                  <span style={{ color: "#0D7377" }}>Operationalised.</span>
                </h1>
              </AnimateIn>

              {/* Body copy */}
              <AnimateIn delay={0.21}>
                <p
                  className="text-base sm:text-lg leading-relaxed max-w-[520px]"
                  style={{
                    color: "#607D8B",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  10 production systems at the intersection of clinical informatics,
                  agentic AI, and US payer-provider operations. Built to prove
                  a thesis: domain expertise is the only moat that matters.
                </p>
              </AnimateIn>

              {/* Stats Bar */}
              <AnimateIn delay={0.25}>
                <div className="flex items-center gap-8 py-2">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-4xl font-bold tabular-nums"
                      style={{ color: "#00BFA5", fontFamily: "var(--font-dm-serif)" }}
                    >
                      <CountUpMetric value={10} duration={1200} />
                    </span>
                    <span
                      className="text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: "#607D8B", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Live Systems
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-4xl font-bold tabular-nums"
                      style={{ color: "#FF8F00", fontFamily: "var(--font-dm-serif)" }}
                    >
                      <CountUpMetric value={3} duration={1200} />
                    </span>
                    <span
                      className="text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: "#607D8B", fontFamily: "var(--font-dm-sans)" }}
                    >
                      Healthcare AI Domains
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-4xl font-bold tabular-nums"
                      style={{ color: "#ECEFF1", fontFamily: "var(--font-dm-serif)" }}
                    >
                      <CountUpMetric value={7} duration={1200} />
                    </span>
                    <span
                      className="text-[11px] uppercase tracking-wider font-semibold"
                      style={{ color: "#607D8B", fontFamily: "var(--font-dm-sans)" }}
                    >
                      FHIR/CDS Standards Implemented
                    </span>
                  </div>
                </div>
              </AnimateIn>

              {/* CTA buttons */}
              <AnimateIn delay={0.29}>
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    onClick={() => scrollTo("#solutions")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{
                      background: "#0D7377",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    View Portfolio
                    <ArrowRight size={15} />
                  </button>
                  <button
                    onClick={() => scrollTo("#about")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    style={{
                      color: "#E8EDF0",
                      border: "1px solid rgba(232,237,240,0.15)",
                      background: "transparent",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(232,237,240,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "transparent";
                    }}
                  >
                    Read the Story
                    <ChevronRight size={15} />
                  </button>
                </div>
              </AnimateIn>
            </div>

            {/* ── Right column: 2×2 stat cards + Hero Profile Image ── */}
            <div className="hidden lg:flex flex-col gap-6 relative h-[600px] w-full items-center justify-center">

              {/* Hero Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                {/* 
                  Drop the hero image here. 
                  Masked using maskImage so the harsh edges fade cleanly into the #0F1923 background.
                */}
                <div
                  className="relative w-[380px] h-[500px]"
                  style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                    maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 70%)",
                  }}
                >
                  <Image
                    src="/hero-profile.png"
                    alt="Dr. Piyush Sharma"
                    fill
                    className="object-cover opacity-80 mix-blend-screen"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>

              {/* Grid for Stat Cards, positioned over the image with high z-index */}
              <div className="grid grid-cols-2 gap-4 w-full z-10">
                {STAT_CARDS.map((card, i) => (
                  <AnimateIn key={card.label} delay={0.20 + i * 0.09} from="bottom">
                    <div
                      className="flex flex-col gap-2 p-6 rounded-2xl border"
                      style={{
                        background: "rgba(22,32,41,0.65)", // increased transparency to peek image behind
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        borderColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <span
                        className="text-[2.6rem] font-bold leading-none tabular-nums drop-shadow-md"
                        style={{
                          color: card.color,
                          fontFamily: "var(--font-dm-serif)",
                        }}
                      >
                        {card.value}
                      </span>
                      <span
                        className="text-sm font-semibold leading-snug"
                        style={{
                          color: "#E8EDF0",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {card.label}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          color: "rgba(232,237,240,0.5)",
                          fontFamily: "var(--font-dm-sans)",
                        }}
                      >
                        {card.sublabel}
                      </span>
                      <div
                        className="mt-2 h-px w-8 rounded-full"
                        style={{ backgroundColor: card.color, opacity: 0.45 }}
                      />
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing scroll cue */}
      <div className="relative z-10 flex justify-center pb-8">
        <motion.button
          onClick={() => scrollTo("#solutions")}
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 group cursor-pointer"
        >
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: "rgba(232,237,240,0.28)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            scroll
          </span>
          <ArrowDown
            size={16}
            style={{ color: "rgba(0,191,165,0.55)" }}
            className="group-hover:opacity-100 transition-opacity"
          />
        </motion.button>
      </div>
    </section>
  );
}
