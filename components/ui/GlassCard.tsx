"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { gsap } from "gsap";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glowFrom?: string;
  glowTo?: string;
  mouseGlowColor?: string;
  tilt?: boolean;
}

export function GlassCard({
  children,
  className = "",
  glowFrom = "#8B5CF6",
  glowTo = "#00BFFF",
  mouseGlowColor = "rgba(139, 92, 246, 0.18)",
  tilt = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconPulseRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    if (tilt) {
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    if (tilt) {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleMouseEnter = () => {
    if (iconPulseRef.current) {
      gsap.fromTo(
        iconPulseRef.current,
        { scale: 1 },
        { scale: 1.08, duration: 0.3, yoyo: true, repeat: 1, ease: "power2.inOut" }
      );
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`group relative rounded-[28px] transition-shadow duration-500 hover:-translate-y-3 hover:shadow-[0_32px_80px_-16px_var(--card-shadow)] ${className}`}
      style={
        {
          "--glow-from": glowFrom,
          "--glow-to": glowTo,
          "--mouse-glow-color": mouseGlowColor,
          "--card-shadow": `${glowFrom}44`,
          transformStyle: "preserve-3d",
        } as React.CSSProperties
      }
    >
      <div className="glow-ring" aria-hidden="true" />
      <div className="mouse-glow" aria-hidden="true" />
      <div
        ref={iconPulseRef}
        className="glass-dark glass-dark-solid relative h-full overflow-hidden rounded-[28px] border border-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_-12px_rgba(0,0,0,0.5)]"
      >
        {children}
      </div>
    </div>
  );
}
