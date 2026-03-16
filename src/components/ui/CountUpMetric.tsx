"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpMetricProps {
  /** The numeric target value */
  value: number;
  /** Text to prepend (e.g. "$") */
  prefix?: string;
  /** Text to append (e.g. "%", "d", "M") */
  suffix?: string;
  /** Decimal places to display */
  decimals?: number;
  /** Animation duration in ms */
  duration?: number;
  /** Delay before starting in ms */
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Only trigger once when in view */
  once?: boolean;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function CountUpMetric({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
  delay = 0,
  className = "",
  style,
  once = true,
}: CountUpMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "0px" });
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView) return;
    if (once && hasRun.current) return;
    hasRun.current = true;

    let startTime: number | null = null;
    let rafId: number;

    const delayId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setDisplay(easeOutCubic(progress) * value);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        } else {
          setDisplay(value);
        }
      };
      rafId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(delayId);
      cancelAnimationFrame(rafId);
    };
  }, [isInView, value, duration, delay, once]);

  const formatted = display.toFixed(decimals);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
