import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import CaseStudyContent from "@/components/projects/CaseStudyContent";
import StackStrip from "@/components/projects/StackStrip";
import OutcomeCards from "@/components/projects/OutcomeCards";
import VeteranSignal from "@/components/projects/VeteranSignal";
import ProjectLinks from "@/components/projects/ProjectLinks";
import InterstitialFeatures from "@/components/projects/InterstitialFeatures";
import AnimateIn from "@/components/ui/AnimateIn";

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ─── Per-page metadata ────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.name} — Dr. Piyush Sharma`,
    description: project.oneLiner,
  };
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return (
    <div
      className="h-px w-full"
      style={{ background: "rgba(255,255,255,0.06)" }}
    />
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A0F1A" }}
    >
      {/* ── Radial bloom behind hero ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 60% 0%, rgba(0, 183, 255, 0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col gap-16">
        
        {/* ── Project Visual ── */}
        {project.visual && (
          <AnimateIn from="top" delay={0.1}>
            <div className="relative w-full aspect-video rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group">
               <Image 
                 src={project.visual} 
                 alt={`${project.name} Architecture`} 
                 fill 
                 className="object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-transparent to-transparent opacity-60" />
               <div className="absolute bottom-8 left-8">
                  <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                    High-Fidelity Architecture
                  </div>
               </div>
            </div>
          </AnimateIn>
        )}

        {/* ── (1+2) Hero: status bar, H1, one-liner, metric callout ── */}
        <ProjectHero project={project} />

        <Divider />

        {/* ── Interstitial Feature Deep-Dive ── */}
        <InterstitialFeatures features={project.features} />

        {project.features && <Divider />}

        {/* ── (3+4) Problem + Before/After evolution ── */}
        <CaseStudyContent project={project} />

        <Divider />

        {/* ── (5) Stack strip ── */}
        <StackStrip stack={project.stack} />

        <Divider />

        {/* ── (6) Three KPI outcome cards ── */}
        <OutcomeCards kpis={project.kpis} />

        {/* ── (7) Links ── */}
        <Divider />
        <AnimateIn from="bottom" delay={0}>
          <ProjectLinks github={project.github} live={project.live} simulation={project.simulation} deepDive={project.deepDive} />
        </AnimateIn>

        <Divider />

        {/* ── (8) Veteran signal blockquote ── */}
        <VeteranSignal text={project.veteran} />
      </div>
    </div>
  );
}
