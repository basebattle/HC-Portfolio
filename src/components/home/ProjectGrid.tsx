"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUpMetric from "@/components/ui/CountUpMetric";

function DomainHeader({ title, count, color }: { title: string; count: number; color: string }) {
  return (
    <div className="flex items-center justify-between pb-[10px] mb-4" style={{ borderBottom: `1px solid ${color}4D` }}>
      <span style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "11px", color, textTransform: "uppercase" }}>
        {title}
      </span>
      <span className="px-2 py-0.5 rounded-full" style={{ background: `${color}1A`, color, fontSize: "10px", fontFamily: "var(--font-jetbrains-mono)" }}>
        {count} project{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
}

interface ProjectGridProps {
  standalone?: boolean;
}

export default function ProjectGrid({ standalone = false }: ProjectGridProps) {
  const clinicalProjects = projects.filter(p => p.category === "Clinical Intelligence");
  const financialProjects = projects.filter(p => p.category === "Financial Optimization");
  const governanceProjects = projects.filter(p => p.category === "Strategic Governance");

  return (
    <section
      id="solutions"
      className={`${standalone ? "pt-28 pb-24" : "py-24"} px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <AnimateIn from="bottom" delay={0}>
          <div className="mb-3">
            <span
              className="text-xs font-semibold tracking-[0.18em] uppercase"
              style={{
                color: "#00BFA5",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              Portfolio
            </span>
          </div>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.06}>
          <h2
            className="text-3xl sm:text-4xl font-normal mb-4"
            style={{
              fontFamily: "var(--font-dm-serif)",
              color: "#E8EDF0",
            }}
          >
            10 Projects. 3 Problem Domains.
          </h2>
        </AnimateIn>

        <AnimateIn from="bottom" delay={0.12}>
          <p
            className="text-base max-w-2xl mb-12"
            style={{
              color: "rgba(232,237,240,0.55)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            Each project targets a measurable inefficiency in US healthcare delivery.
            Deployed projects are live; Blueprints have full architecture documentation;
            Planned projects have detailed technical specifications.
          </p>
        </AnimateIn>

        {/* ── Project grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Clinical Intelligence */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-6">
            <DomainHeader title="Clinical Intelligence" count={clinicalProjects.length} color="#0D7377" />
            {clinicalProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.40, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Financial Optimization */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-6">
            <DomainHeader title="Financial Optimization" count={financialProjects.length} color="#FF8F00" />
            {financialProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.40, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Strategic Governance */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col gap-6">
            <DomainHeader title="Strategic Governance" count={governanceProjects.length} color="#1565C0" />
            {governanceProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.40, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
