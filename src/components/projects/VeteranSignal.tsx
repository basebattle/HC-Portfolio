import AnimateIn from "@/components/ui/AnimateIn";
import type { Project } from "@/data/projects";

interface VeteranSignalProps {
  text: Project["veteran"];
}

export default function VeteranSignal({ text }: VeteranSignalProps) {
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
            Industry Signal
          </span>
        </div>

        <blockquote
          className="relative pl-5"
          style={{ borderLeft: "2px solid #00BFA5" }}
        >
          <p
            className="text-sm sm:text-base leading-relaxed italic"
            style={{
              color: "rgba(232,237,240,0.58)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            {text}
          </p>
        </blockquote>
      </div>
    </AnimateIn>
  );
}
