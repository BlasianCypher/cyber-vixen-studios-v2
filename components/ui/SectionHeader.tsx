"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsap } from "@/lib/gsap";

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = theme === "dark";

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el.children, {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`mb-24 max-w-4xl md:mb-32 ${alignClass} ${className}`}
    >
      <p className={isDark ? "section-label-dark mb-6" : "section-label mb-6"}>
        {label}
      </p>
      <h2
        className={`font-display text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[3.5rem] ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-7 text-lg leading-relaxed md:text-xl ${
            isDark ? "text-white/50" : "text-gray"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
