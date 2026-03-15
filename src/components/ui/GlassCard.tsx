"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  /** Override the border colour, defaults to white/8 */
  borderColor?: string;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  borderColor = "rgba(255,255,255,0.08)",
  style,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.015, y: -2 } : undefined}
      transition={{ type: "spring", stiffness: 340, damping: 28 }}
      className={`rounded-2xl border ${className}`}
      style={{
        background: "rgba(22,32,41,0.70)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderColor,
        ...style,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
