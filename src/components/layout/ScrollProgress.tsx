"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{ 
        scaleX,
        background: "linear-gradient(to right, var(--primary), var(--clinical), var(--financial))",
        boxShadow: "0 -2px 10px rgba(74, 111, 165, 0.3)"
      }}
    />
  );
}
