"use client";

import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectLinksProps {
  github: Project["github"];
  live: Project["live"];
}

export default function ProjectLinks({ github, live }: ProjectLinksProps) {
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
        {github && (
          <a
            href={`https://github.com/${github}`}
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
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.20)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.12)";
            }}
          >
            <Github size={15} />
            View on GitHub
          </a>
        )}

        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-150 transform hover:scale-[1.02] active:scale-[0.98] bg-[#008080] hover:bg-[#006666]"
            style={{
              fontFamily: "var(--font-dm-sans)",
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
      </div>
    </div>
  );
}
