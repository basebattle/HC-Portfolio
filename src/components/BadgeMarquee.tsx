"use client";

// BadgeMarquee.tsx
// Drop this in: /components/BadgeMarquee.tsx
//
// Usage in your page or layout:
//   import BadgeMarquee from "@/components/BadgeMarquee";
//   <BadgeMarquee />
//
// Tailwind custom animation is defined in globals.css (see bottom of this file).

import React, { useRef, useState, useCallback, useEffect } from "react";
import AwardBadge from "@/components/AwardBadge";
import { BADGES } from "@/lib/badgeConfig";

interface BadgeMarqueeProps {
  badgeSize?: number;       // px per badge, default 160
  speed?: number;           // seconds for one full scroll cycle, default 35
  gap?: number;             // px gap between badges, default 32
}

export default function BadgeMarquee({
  badgeSize = 160,
  speed = 35,
  gap = 32,
}: BadgeMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate badges so the marquee loops seamlessly
  // Three copies ensures no gap flash on any viewport width
  const tripled = [...BADGES, ...BADGES, ...BADGES];

  const handleBadgeHoverStart = useCallback((id: string) => {
    setIsPaused(true);
    setHoveredId(id);
  }, []);

  const handleBadgeHoverEnd = useCallback(() => {
    setIsPaused(false);
    setHoveredId(null);
  }, []);

  // Pause/resume via CSS custom property so we don't interrupt mid-animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.animationPlayState = isPaused ? "paused" : "running";
  }, [isPaused]);

  const badgeWidth = badgeSize * 0.75;
  const totalTrackWidth = (badgeWidth + gap) * BADGES.length;

  return (
    <section
      className="relative w-full overflow-hidden py-6 mt-16"
      style={{
        // Dark frosted strip — sits in your header / hero section
        background:
          "linear-gradient(180deg, rgba(8,8,18,0.95) 0%, rgba(12,12,24,0.98) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label="Certification badge showcase"
    >
      {/* Left fade mask */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: 120,
          background:
            "linear-gradient(to right, rgba(8,8,18,1) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: 120,
          background:
            "linear-gradient(to left, rgba(8,8,18,1) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Scrolling track */}
      <div
        ref={trackRef}
        className="flex items-center badge-marquee-track"
        style={{
          // Drive animation duration from prop so it's tunable
          "--marquee-duration": `${speed}s`,
          "--marquee-width": `${totalTrackWidth}px`,
          gap: `${gap}px`,
          paddingLeft: `${gap}px`,
          // Width = 3× badge strip so we can translate by 1× and loop
          width: `${totalTrackWidth * 3 + gap * BADGES.length * 3}px`,
          willChange: "transform",
          animationPlayState: "running",
        } as React.CSSProperties}
        aria-hidden="true" // screen readers use the aria-label on the section
      >
        {tripled.map((badge, index) => {
          const isThisHovered = hoveredId === `${badge.id}-${index}`;
          return (
            <AwardBadge
              key={`${badge.id}-${index}`}
              badge={badge}
              size={badgeSize}
              onHoverStart={() => handleBadgeHoverStart(`${badge.id}-${index}`)}
              onHoverEnd={handleBadgeHoverEnd}
            />
          );
        })}
      </div>

      {/* Subtle label beneath — optional, remove if too busy */}
      <p
        className="text-center mt-3 text-xs tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono, monospace)" }}
      >
        10 Certifications · Healthcare · AI · Operations · Management
      </p>
    </section>
  );
}

/*
──────────────────────────────────────────────
ADD THIS TO YOUR globals.css
──────────────────────────────────────────────

@keyframes glint {
  0%   { left: -150%; opacity: 0; }
  25%  { opacity: 0.8; }
  50%  { left: 150%; opacity: 0; }
  100% { left: 150%; opacity: 0; }
}

@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(calc(var(--marquee-width) * -1)); }
}

.badge-marquee-track {
  animation: marquee-scroll var(--marquee-duration, 35s) linear infinite;
}

.badge-marquee-track:hover {
  animation-play-state: paused;
}

──────────────────────────────────────────────
*/
