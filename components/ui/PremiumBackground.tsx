"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

interface PremiumBackgroundProps {
  children: ReactNode;
  className?: string;
  blobs?: Array<{
    color: string;
    size: string;
    position: string;
    delay?: number;
  }>;
  particles?: boolean;
  beams?: boolean;
}

const DEFAULT_BLOBS = [
  {
    color: "rgba(139,92,246,0.18)",
    size: "h-[480px] w-[480px]",
    position: "-left-40 -top-20",
  },
  {
    color: "rgba(0,191,255,0.12)",
    size: "h-[520px] w-[520px]",
    position: "-right-32 top-1/3",
    delay: 1,
  },
  {
    color: "rgba(57,255,20,0.08)",
    size: "h-[360px] w-[360px]",
    position: "left-1/3 -bottom-20",
    delay: 2,
  },
];

function seededRandom(seed: number): number {
  const value = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

export function PremiumBackground({
  children,
  className = "",
  blobs = DEFAULT_BLOBS,
  particles = true,
  beams = true,
}: PremiumBackgroundProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      blobRefs.current.forEach((blob, i) => {
        if (!blob) return;
        gsap.to(blob, {
          x: i % 2 === 0 ? 30 : -30,
          y: i === 1 ? -25 : 20,
          duration: 6 + i * 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, section);

    const handleMouse = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--section-mouse-x", `${x}%`);
      section.style.setProperty("--section-mouse-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      ctx.revert();
      section.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const particleData = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    left: seededRandom(i * 3 + 1) * 100,
    top: seededRandom(i * 3 + 2) * 100,
    size: seededRandom(i * 3 + 3) * 3 + 1,
    color: ["#8B5CF6", "#00BFFF", "#39FF14"][i % 3],
    delay: seededRandom(i * 3 + 4) * 4,
  }));

  return (
    <div
      ref={sectionRef}
      className={`premium-section ${className}`}
      style={
        {
          "--section-mouse-x": "50%",
          "--section-mouse-y": "50%",
        } as CSSProperties
      }
    >
      <div className="noise-overlay" aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(800px circle at var(--section-mouse-x) var(--section-mouse-y), rgba(139,92,246,0.08), transparent 50%)`,
        }}
        aria-hidden="true"
      />

      {blobs.map((blob, i) => (
        <div
          key={i}
          ref={(el) => {
            blobRefs.current[i] = el;
          }}
          className={`premium-blob pointer-events-none absolute rounded-full blur-[100px] ${blob.size} ${blob.position}`}
          style={{ background: blob.color }}
          aria-hidden="true"
        />
      ))}

      {beams && (
        <>
          <div className="light-beam left-[15%] top-[-10%] opacity-20" aria-hidden="true" />
          <div className="light-beam right-[20%] top-[-5%] opacity-15" aria-hidden="true" />
        </>
      )}

      {particles && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {particleData.map((p) => (
            <span
              key={p.id}
              className="premium-particle absolute rounded-full"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                background: p.color,
                boxShadow: `0 0 ${p.size * 6}px ${p.color}`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${8 + (p.id % 5)}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
