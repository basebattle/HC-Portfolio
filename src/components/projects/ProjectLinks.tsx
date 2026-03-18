"use client";

import { ExternalLink, Github, PlayCircle, BookOpen } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectLinksProps {
  github: Project["github"];
  live: Project["live"];
  simulation?: Project["simulation"];
  deepDive?: Project["deepDive"];
}

export default function ProjectLinks({ github, live, simulation, deepDive }: ProjectLinksProps) {
  const githubUrl = github
    ? github.startsWith("http")
      ? github
      : `https://github.com/${github}`
    : null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div
          className="w-6 h-px"
          style={{ background: "rgba(232,237,240,0.18)" }}
        />
        <span
          className="text-xs font-semibold tracking-[0.18em] uppercase"
          style={{
            color: "rgba(232,237,240,0.30)",
            fontFamily: "var(--font-dm-sans)",
          }}
        >
          Resources
        </span>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Source Code */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 border transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              color: "#E8EDF0",
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.20)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            <Github size={15} />
            Source Code
          </a>
        )}

        {/* Live Simulation (if separate from live) */}
        {simulation && simulation !== live && (
          <a
            href={simulation}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "#00d4aa",
              color: "#0F1923",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#00b894"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#00d4aa"; }}
          >
            <PlayCircle size={15} />
            Live Simulation
          </a>
        )}

        {/* Live Demo */}
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: simulation && simulation !== live ? "rgba(0,136,128,0.85)" : "#008080",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#006666"; }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                simulation && simulation !== live ? "rgba(0,136,128,0.85)" : "#008080";
            }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <div
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium border"
            style={{
              color: "rgba(232,237,240,0.35)",
              borderColor: "rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "rgba(232,237,240,0.25)" }}
            />
            Technical Preview — in development
          </div>
        )}

        {/* Architecture Deep-Dive */}
        {deepDive && (
          <a
            href={deepDive}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-150 border transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              color: "#E8EDF0",
              borderColor: "rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.03)",
              fontFamily: "var(--font-dm-sans)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.18)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.10)";
            }}
          >
            <BookOpen size={15} />
            Architecture Deep-Dive
          </a>
        )}
      </div>
    </div>
  );
}
