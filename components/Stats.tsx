"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

const stats = [
  { value: 50, suffix: "+", label: "Projects Built", color: "#8B5CF6" },
  { value: 99, suffix: "%", label: "Client Satisfaction", color: "#00BFFF" },
  { value: 24, suffix: "/7", label: "Support", color: "#39FF14" },
  { value: 100, suffix: "%", label: "Custom Solutions", color: "#8B5CF6" },
];

function AnimatedCounter({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [active, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const grid = gridRef.current;
    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      gsap.from(grid.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          onEnter: () => setActive(true),
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding border-y border-black/[0.05] bg-white"
    >
      <div className="container-max" ref={gridRef}>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl font-bold tracking-[-0.03em] text-black md:text-6xl">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  active={active}
                />
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray">
                {stat.label}
              </p>
              <div
                className="mx-auto mt-5 h-px w-10"
                style={{ background: stat.color }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
