import { ReactNode } from "react";

type BadgeVariant = "teal" | "gold" | "blue" | "slate" | "green" | "ghost";
type BadgeSize = "sm" | "md";

const VARIANT_STYLES: Record<BadgeVariant, { color: string; border: string; bg: string }> = {
  teal: {
    color: "#00BFA5",
    border: "rgba(0,191,165,0.30)",
    bg: "rgba(0,191,165,0.08)",
  },
  gold: {
    color: "#FF8F00",
    border: "rgba(255,143,0,0.30)",
    bg: "rgba(255,143,0,0.08)",
  },
  blue: {
    color: "#5C9BF5",
    border: "rgba(21,101,192,0.35)",
    bg: "rgba(21,101,192,0.10)",
  },
  slate: {
    color: "rgba(232,237,240,0.55)",
    border: "rgba(255,255,255,0.10)",
    bg: "rgba(255,255,255,0.04)",
  },
  green: {
    color: "#4CAF7D",
    border: "rgba(76,175,125,0.30)",
    bg: "rgba(76,175,125,0.08)",
  },
  ghost: {
    color: "rgba(232,237,240,0.45)",
    border: "rgba(255,255,255,0.08)",
    bg: "transparent",
  },
};

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "slate",
  size = "sm",
  dot = false,
  className = "",
}: BadgeProps) {
  const v = VARIANT_STYLES[variant];
  const padding = size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium border tracking-wide ${padding} ${className}`}
      style={{
        color: v.color,
        borderColor: v.border,
        background: v.bg,
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      {dot && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: v.color }}
        />
      )}
      {children}
    </span>
  );
}
