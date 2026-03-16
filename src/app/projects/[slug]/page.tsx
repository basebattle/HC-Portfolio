import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
      style={{ backgroundColor: "#0F1923" }}
    >
      {/* ── Radial bloom behind hero ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 60% 0%, rgba(13,115,119,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col gap-16">

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
          <ProjectLinks github={project.github} live={project.live} />
        </AnimateIn>

        <Divider />

        {/* ── (8) Veteran signal blockquote ── */}
        <VeteranSignal text={project.veteran} />
      </div>
    </div>
  );
}
