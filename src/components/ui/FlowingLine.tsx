"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FlowingLine() {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(document.documentElement.scrollHeight);
    const handleResize = () => setWindowHeight(document.documentElement.scrollHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 100 100`}
        preserveAspectRatio="none"
        className="opacity-20"
      >
        <motion.path
          d="M 50 0 C 80 20, 20 40, 50 60 C 80 80, 20 100, 50 120"
          stroke="var(--primary)"
          strokeWidth="0.2"
          fill="transparent"
          style={{ pathLength }}
        />
        {/* Glowing Nodes */}
        <motion.circle
          cx="50"
          cy="20"
          r="0.5"
          fill="var(--neon-teal)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glow-teal"
        />
        <motion.circle
          cx="50"
          cy="60"
          r="0.5"
          fill="var(--neon-pink)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glow-pink"
        />
      </svg>
    </div>
  );
}
