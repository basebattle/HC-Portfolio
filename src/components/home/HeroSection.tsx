"use client";

import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ChevronRight, Sparkles, Activity, ShieldCheck, BarChart3, Zap } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";
import Image from "next/image";

const TYPEWRITER_WORDS = ["Clinician.", "Builder.", "Strategist."];

const IMPACT_PILLS = [
  {
    label: "Projected Impact",
    value: 2.8,
    prefix: "$",
    suffix: "M+",
    icon: BarChart3,
    color: "var(--financial)"
  },
  {
    label: "Deployed Systems",
    value: 10,
    suffix: "",
    icon: Sparkles,
    color: "var(--clinical)"
  },
  {
    label: "DX Domain Pillars",
    value: 4,
    suffix: "",
    icon: Activity,
    color: "var(--primary)"
  },
  {
    label: "Manual Review Reduction",
    value: 80,
    prefix: "",
    suffix: "%",
    icon: Zap,
    color: "var(--neon-pink)"
  },
  {
    label: "Alert Confidence",
    value: 0.94,
    prefix: "",
    suffix: "",
    icon: Activity, // Reuse or could be Brain, we'll use Activity
    color: "var(--neon-teal)"
  },
  {
    label: "Governance Audit",
    value: 35,
    prefix: "",
    suffix: "-Pt",
    icon: ShieldCheck,
    color: "var(--neon-blue)"
  }
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
    }, 2500);
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* ── Spotlight Orb (Enhancement B) ── */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none fixed z-0"
          style={{
            width: "80vw",
            height: "80vw",
            translateX: "-50%",
            translateY: "-50%",
            left: cursorX,
            top: cursorY,
            background: "radial-gradient(circle, rgba(0, 183, 255, 0.05) 0%, transparent 60%)",
            mixBlendMode: "screen"
          }}
        />
      )}

      {/* ── Background: Warm Bloomed Aesthetics ── */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        {/* Soft Warm Radial Blooms */}
        <div
          className="absolute"
          style={{
            width: "80vw",
            height: "80vw",
            top: "-20%",
            right: "-10%",
            background: "radial-gradient(ellipse at center, rgba(74, 111, 165, 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "60vw",
            height: "60vw",
            bottom: "-10%",
            left: "-10%",
            background: "radial-gradient(ellipse at center, rgba(212, 160, 53, 0.05) 0%, transparent 70%)",
          }}
        />
        {/* Subtle Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
             style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/natural-paper.png')` }} />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

            {/* ── Left Column: Identity ── */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <AnimateIn delay={0.1}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-[1px] bg-neon-blue/40" />
                    <span className="text-sm font-bold tracking-[0.3em] uppercase text-neon-blue/80">
                      HCLS Management Consultant
                    </span>
                  </div>
                </AnimateIn>
                
                <AnimateIn delay={0.2}>
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-foreground max-w-4xl"
                    style={{ fontFamily: "var(--font-dm-serif)" }}
                  >
                    Architecting the <span className="text-neon-blue">Reasoning Infrastructure</span>
                    <br />
                    <span className="opacity-40 italic">for Global Health Systems.</span>
                  </h1>
                </AnimateIn>

                <div className="h-12 flex items-center mt-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={TYPEWRITER_WORDS[index]}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="text-xl sm:text-2xl font-light text-neon-teal/80"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {TYPEWRITER_WORDS[index]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <AnimateIn delay={0.4}>
                <p className="text-lg sm:text-xl leading-relaxed text-foreground/60 max-w-[600px] font-light">
                  A consulting-grade portfolio implementing the four pillars of 
                  Digital Transformation. Shifting the paradigm from simple 
                  dashboards to active, reasoning medical agents.
                </p>
              </AnimateIn>

              {/* ── CTA Row ── */}
              <AnimateIn delay={0.5}>
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => scrollTo("#solutions")}
                    className="px-8 py-4 rounded-xl text-base font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-neon-blue/20 flex items-center gap-3 bg-neon-blue text-background"
                  >
                    Explore Frameworks
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => scrollTo("#about")}
                    className="group px-8 py-4 rounded-xl text-base font-medium text-neon-teal/80 hover:text-neon-teal transition-all flex items-center gap-2 border border-neon-teal/20 hover:border-neon-teal hover:bg-neon-teal/5"
                  >
                    The Story
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimateIn>
            </div>

            {/* ── Right Column: Seamless Background Image ── */}
            <div className="hidden lg:flex justify-end items-center relative h-[700px] w-full col-span-1">
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute right-0 w-[120%] h-full pointer-events-none"
               >
                  <Image 
                    src="/speaker-bg.jpg" 
                    alt="Strategic Leadership" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-60"
                    style={{
                      objectPosition: "30% center",
                      maskImage: "linear-gradient(to left, black 40%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)",
                      WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 90%), linear-gradient(to bottom, black 50%, transparent 100%)"
                    }}
                    priority
                  />
                  {/* Subtle Atmosphere Overlay */}
                  <div className="absolute inset-0 bg-radial-at-r from-transparent via-background/40 to-background opacity-80" />
               </motion.div>
            </div>

          </div>

          {/* ── Impact Pills (Grid Expanded) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12 relative z-20">
            {IMPACT_PILLS.map((pill, i) => (
              <AnimateIn key={pill.label} delay={0.6 + i * 0.1}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-3 group hover:bg-white/10 transition-all duration-300 shadow-xl backdrop-blur-md"
                     style={{
                       borderColor: `color-mix(in srgb, ${pill.color} 15%, transparent)`
                     }}
                >
                  <div className="flex items-center justify-between pointer-events-none">
                     <pill.icon size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: pill.color }} />
                     <span className="text-[10px] uppercase tracking-widest text-foreground/30 font-bold">Metric</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-serif text-foreground transition-colors group-hover:scale-[1.02] origin-left duration-300"
                          style={{
                            color: pill.color,
                            textShadow: `0 0 20px ${pill.color}40, 0 0 10px ${pill.color}20`
                          }}
                    >
                      <CountUpMetric value={pill.value} prefix={pill.prefix} suffix={pill.suffix} decimals={pill.value % 1 !== 0 ? 1 : 0} />
                    </span>
                    <span className="text-xs font-medium text-foreground/60 mt-1 uppercase tracking-wide group-hover:text-foreground/80 transition-colors">
                      {pill.label}
                    </span>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

        </div>
      </div>

      {/* ── Static Scroll Cue ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
         <button
          onClick={() => scrollTo("#solutions")}
          className="flex flex-col items-center gap-2 group cursor-pointer"
         >
            <span className="text-[9px] uppercase tracking-[0.4em] text-foreground/10 group-hover:text-foreground/30 transition-colors">
              Frameworks
            </span>
            <ArrowDown size={14} className="text-foreground/10 group-hover:text-foreground/30 transition-colors" />
         </button>
      </div>
    </section>
  );
}
