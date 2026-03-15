"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ChevronRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

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
            <div className="flex flex-col gap-6">

              {/* Gold award badge */}
              <AnimateIn delay={0.05}>
                <div className="inline-flex items-center gap-2 self-start">
                  <span
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
                    style={{
                      color: "#FF8F00",
                      borderColor: "rgba(255,143,0,0.35)",
                      background: "rgba(255,143,0,0.08)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#FF8F00" }}
                    />
                    Best Large Deal Winner
                  </span>
                </div>
              </AnimateIn>

              {/* H1 */}
              <AnimateIn delay={0.13}>
                <h1
                  className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-normal leading-[1.06] tracking-tight"
                  style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
                >
                  Healthcare AI
                  <br />
                  <span style={{ color: "#00BFA5" }}>Innovation</span>
                  <br />
                  Showroom
                </h1>
              </AnimateIn>

              {/* Body copy */}
              <AnimateIn delay={0.21}>
                <p
                  className="text-base sm:text-lg leading-relaxed max-w-[520px]"
                  style={{
                    color: "rgba(232,237,240,0.65)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  Four production-grade proof-of-concepts targeting the
                  highest-cost inefficiencies in US health systems — prior
                  authorization, revenue cycle, clinical data access, and AI
                  governance — built to the standards C-suite stakeholders
                  evaluate.
                </p>
              </AnimateIn>

              {/* CTA buttons */}
              <AnimateIn delay={0.29}>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollTo("#solutions")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90 active:opacity-80"
                    style={{
                      background:
                        "linear-gradient(135deg, #0D7377 0%, #00BFA5 100%)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                  >
                    Explore Solutions
                    <ArrowRight size={15} />
                  </button>
                  <button
                    onClick={() => scrollTo("#contact")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-150"
                    style={{
                      color: "#E8EDF0",
                      border: "1px solid rgba(232,237,240,0.15)",
                      background: "rgba(232,237,240,0.04)",
                      fontFamily: "var(--font-dm-sans)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(232,237,240,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(232,237,240,0.04)";
                    }}
                  >
                    Book a Walkthrough
                    <ChevronRight size={15} />
                  </button>
                </div>
              </AnimateIn>

              {/* Trust micro-line */}
              <AnimateIn delay={0.35}>
                <p
                  className="text-xs tracking-wide"
                  style={{
                    color: "rgba(232,237,240,0.30)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  10 projects &middot; 3 categories &middot; FHIR R4 &middot; CMS-aligned &middot; HIPAA-ready
                </p>
              </AnimateIn>
            </div>

            {/* ── Right column: 2×2 stat cards (desktop only) ── */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {STAT_CARDS.map((card, i) => (
                <AnimateIn key={card.label} delay={0.20 + i * 0.09} from="bottom">
                  <div
                    className="flex flex-col gap-2 p-6 rounded-2xl border h-full"
                    style={{
                      background: "rgba(22,32,41,0.7)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      className="text-[2.6rem] font-bold leading-none tabular-nums"
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
                        color: "rgba(232,237,240,0.42)",
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
