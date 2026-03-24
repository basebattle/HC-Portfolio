"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, Linkedin } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const ARTICLES = [
  {
    title: "Healthcare LLMs: Moving from Experimentation to Production",
    excerpt: "Why the true hurdle for clinical AI isn't model parameter count, but the quality of terminology-resolved FHIR infrastructure.",
    date: "March 2026",
    link: "/404",
    readTime: "6 min read"
  },
  {
    title: "The HAIRA Framework: A Practitioner's Perspective",
    excerpt: "Operationalizing AI governance across seven domains to ensure patient safety and regulatory compliance.",
    date: "February 2026",
    link: "/404",
    readTime: "8 min read"
  },
  {
    title: "Prior Authorization: Solving the $35B Documentation Burden",
    excerpt: "How multi-agent orchestration and LangGraph are collapsing 14-day authorization cycles into sub-3-day workflows.",
    date: "January 2026",
    link: "/404",
    readTime: "5 min read"
  }
];

export default function ThoughtLeadershipSection() {
  return (
    <section id="thought-leadership" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-20">
          <AnimateIn delay={0.1}>
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-foreground/40">
              Industry Influence
            </span>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h2 className="text-4xl sm:text-5xl font-normal text-foreground leading-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>
              Thought
              <br />
              <span className="opacity-40 italic">Leadership</span>
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <AnimateIn key={article.title} delay={0.3 + i * 0.1}>
              <a 
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    <BookOpen size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/20">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-serif text-foreground mb-4 leading-tight group-hover:text-white transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed mb-8 group-hover:text-foreground/70 transition-colors">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-[11px] font-medium text-foreground/30">{article.date}</span>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                    Read Article
                    <ExternalLink size={12} />
                  </div>
                </div>
              </a>
            </AnimateIn>
          ))}
        </div>

        {/* Pull Quote / Final Insight */}
        <AnimateIn delay={0.8}>
          <div className="mt-20 flex justify-center">
            <div className="relative max-w-3xl text-center px-8">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-serif opacity-[0.03] select-none text-foreground">"</span>
              <p className="text-xl sm:text-2xl font-serif italic text-foreground/60 leading-relaxed">
                Management consulting in healthcare isn't about the data we have, it's about the <span className="text-foreground">strategic intelligence</span> we build on top of it.
              </p>
              <div className="mt-8 flex flex-col items-center gap-2">
                <div className="w-8 h-px bg-primary/30" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">The Consulting Thesis</span>
              </div>
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
