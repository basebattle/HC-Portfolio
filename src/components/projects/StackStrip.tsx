import AnimateIn from "@/components/ui/AnimateIn";
import type { Project } from "@/data/projects";

interface StackStripProps {
  stack: Project["stack"];
}

export default function StackStrip({ stack }: StackStripProps) {
  return (
    <AnimateIn from="bottom" delay={0}>
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
            Tech Stack
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium border"
              style={{
                color: "#00BFA5",
                borderColor: "rgba(0,191,165,0.22)",
                background: "rgba(0,191,165,0.06)",
                fontFamily: "var(--font-jetbrains-mono)",
                letterSpacing: "0.01em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </AnimateIn>
  );
}
