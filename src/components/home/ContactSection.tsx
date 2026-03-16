"use client";

import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionLabel from "@/components/ui/SectionLabel";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:career.sharmapiyush@gmail.com",
    display: "career.sharmapiyush@gmail.com",
    color: "#00BFA5",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/basebattle/",
    display: "linkedin.com/in/basebattle",
    color: "#5C9BF5",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/basebattle",
    display: "github.com/basebattle",
    color: "rgba(232,237,240,0.65)",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 100%, rgba(13,115,119,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">

        <AnimateIn from="bottom" delay={0}>
          <SectionLabel>Contact</SectionLabel>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.07}>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight"
            style={{ fontFamily: "var(--font-dm-serif)", color: "#E8EDF0" }}
          >
            Book a{" "}
            <span
              style={{
                color: "#00BFA5",
                textShadow: "0 0 28px rgba(0,191,165,0.30)",
              }}
            >
              Walkthrough
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.13}>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-xl"
            style={{
              color: "rgba(232,237,240,0.55)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            If you are evaluating healthcare AI vendors, building an innovation
            programme, or want to explore any project in this portfolio — reach
            out. I respond within one business day.
          </p>
        </AnimateIn>

        {/* Link cards */}
        <AnimateIn from="bottom" delay={0.19} className="w-full">
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 w-full">
            {LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-4 rounded-xl border transition-all duration-200 flex-1 min-w-0"
                  style={{
                    background: "rgba(22,32,41,0.65)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      `${link.color}40`;
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(22,32,41,0.90)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(22,32,41,0.65)";
                  }}
                >
                  <span
                    className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <Icon size={15} style={{ color: link.color }} />
                  </span>
                  <div className="flex flex-col gap-0.5 min-w-0 text-left">
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase"
                      style={{
                        color: "rgba(232,237,240,0.30)",
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="text-xs truncate"
                      style={{
                        color: link.color,
                        fontFamily: "var(--font-dm-sans)",
                      }}
                    >
                      {link.display}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="ml-auto shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-150"
                    style={{ color: link.color }}
                  />
                </a>
              );
            })}
          </div>
        </AnimateIn>

        {/* Availability note */}
        <AnimateIn from="bottom" delay={0.25}>
          <p
            className="text-xs"
            style={{
              color: "rgba(232,237,240,0.25)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Available for advisory roles, consulting engagements, and speaking.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
