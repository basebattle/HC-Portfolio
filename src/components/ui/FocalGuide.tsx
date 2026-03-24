"use client";

import { motion } from "framer-motion";

export default function FocalGuide({ 
  className = "", 
  direction = "down",
  color = "var(--primary)" 
}: { 
  className?: string; 
  direction?: "down" | "up";
  color?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 80, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-px"
        style={{ 
          background: `linear-gradient(to ${direction === "down" ? "bottom" : "top"}, ${color}, transparent)` 
        }}
      />
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, opacity: 0.4 }} />
    </div>
  );
}
