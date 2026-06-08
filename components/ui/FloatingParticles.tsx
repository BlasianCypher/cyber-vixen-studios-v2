"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = ["#8B5CF6", "#00BFFF", "#39FF14"];

function seededRandom(seed: number): number {
  const value = Math.sin(seed * 127.1 + seed * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: seededRandom(i * 6 + 1) * 100,
    y: seededRandom(i * 6 + 2) * 100,
    size: seededRandom(i * 6 + 3) * 3 + 1,
    duration: seededRandom(i * 6 + 4) * 20 + 15,
    delay: seededRandom(i * 6 + 5) * 5,
    color: COLORS[i % COLORS.length],
  }));
}

export function FloatingParticles({ count = 40 }: { count?: number }) {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
