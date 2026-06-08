"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { gsap } from "gsap";

interface LightCardProps {
  children: ReactNode;
  className?: string;
  accent?: string;
  tilt?: boolean;
}

export function LightCard({
  children,
  className = "",
  accent = "#8B5CF6",
  tilt = true,
}: LightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !tilt) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    gsap.to(el, { rotateX, rotateY, transformPerspective: 800, duration: 0.35 });
  };

  const handleMouseLeave = () => {
    if (ref.current && tilt) {
      gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.5 });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-[28px] border border-black/[0.06] bg-white transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_32px_64px_-16px_${accent}33] ${className}`}
      style={
        {
          "--accent": accent,
          transformStyle: "preserve-3d",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x,50%) var(--mouse-y,50%), ${accent}18, transparent 45%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accent}66, transparent 60%)`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
        aria-hidden="true"
      />
      <div className="relative h-full rounded-[28px] p-8 md:p-10">{children}</div>
    </div>
  );
}
