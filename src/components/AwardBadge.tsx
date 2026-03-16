"use client";

// AwardBadge.tsx
// Drop this in: /components/AwardBadge.tsx
//
// Dependencies (already in your Next.js 14 stack):
//   - next/image
//   - tailwindcss
//   - No extra packages needed

import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import type { BadgeConfig } from "@/lib/badgeConfig";

interface AwardBadgeProps {
  badge: BadgeConfig;
  size?: number; // px, default 160
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

// Max tilt in degrees — subtle, not dramatic
const MAX_TILT = 12;

export default function AwardBadge({
  badge,
  size = 160,
  onHoverStart,
  onHoverEnd,
}: AwardBadgeProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glintActive, setGlintActive] = useState(false);
  const glintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      // Normalise mouse position to -1 → +1 relative to card centre
      const xNorm = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const yNorm = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      // rotateY tilts left/right, rotateX tilts up/down (inverted Y feels natural)
      setTilt({
        x: -yNorm * MAX_TILT,
        y: xNorm * MAX_TILT,
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setGlintActive(true);
    onHoverStart?.();

    // Re-trigger glint sweep each time cursor enters
    if (glintTimerRef.current) clearTimeout(glintTimerRef.current);
    glintTimerRef.current = setTimeout(() => {
      setGlintActive(false);
    }, 1400); // matches glint animation duration
  }, [onHoverStart]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    onHoverEnd?.();
  }, [onHoverEnd]);

  const glowSpread = Math.round(24 * badge.glowIntensity);
  const glowBlur = Math.round(40 * badge.glowIntensity);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 cursor-pointer select-none"
      style={{
        width: size * 0.75, // 3:4 aspect ratio
        height: size,
        // Perspective on the wrapper drives the 3D effect
        perspective: "600px",
      }}
      aria-label={badge.alt}
      role="img"
    >
      {/* Glassmorphism card */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.04)`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: isHovered
            ? "transform 0.08s ease-out"   // snappy follow on move
            : "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)", // smooth spring on leave
          transformStyle: "preserve-3d",
          // Glassmorphism base
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.10)",
          // Colour glow activates on hover
          boxShadow: isHovered
            ? `0 0 ${glowBlur}px ${glowSpread}px ${badge.glowColor},
               0 8px 32px rgba(0,0,0,0.4),
               inset 0 1px 0 rgba(255,255,255,0.12)`
            : "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
          willChange: "transform, box-shadow",
        }}
      >
        {/* Badge image */}
        <Image
          src={badge.src}
          alt={badge.alt}
          fill
          sizes={`${size * 0.75}px`}
          className="object-cover"
          priority={false}
          draggable={false}
        />

        {/* Glint sweep overlay */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
          aria-hidden="true"
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: glintActive ? "150%" : "-150%",
              width: "55%",
              height: "140%",
              background: `linear-gradient(
                105deg,
                transparent 20%,
                ${badge.accentColor}22 40%,
                rgba(255,255,255,0.28) 50%,
                ${badge.accentColor}22 60%,
                transparent 80%
              )`,
              transform: "skewX(-18deg)",
              transition: glintActive
                ? "left 1.4s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
              willChange: "left",
            }}
          />
        </div>

        {/* Edge highlight on hover — simulates angled light catching the card rim */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
                ${135 + tilt.y * 2}deg,
                rgba(255,255,255,0.08) 0%,
                transparent 50%,
                rgba(0,0,0,0.08) 100%
              )`,
              transition: "background 0.08s ease-out",
            }}
          />
        )}
      </div>
    </div>
  );
}
