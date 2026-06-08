"use client";

import { ArrowUpRight, Cloud, Globe, Search, Smartphone } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { GlassCard } from "./ui/GlassCard";
import { PremiumBackground } from "./ui/PremiumBackground";
import { SectionHeader } from "./ui/SectionHeader";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance, conversion-focused websites engineered with modern frameworks and scalable architecture.",
    glowFrom: "#8B5CF6",
    glowTo: "#A78BFA",
    mouseGlow: "rgba(139, 92, 246, 0.22)",
    iconBg: "rgba(139, 92, 246, 0.15)",
    iconColor: "#8B5CF6",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform applications built for speed, reliability, and seamless user experiences.",
    glowFrom: "#00BFFF",
    glowTo: "#38BDF8",
    mouseGlow: "rgba(0, 191, 255, 0.22)",
    iconBg: "rgba(0, 191, 255, 0.15)",
    iconColor: "#00BFFF",
  },
  {
    number: "03",
    icon: Search,
    title: "SEO & Growth",
    description:
      "Data-driven search strategies that increase visibility, drive qualified traffic, and accelerate organic growth.",
    glowFrom: "#39FF14",
    glowTo: "#4ADE80",
    mouseGlow: "rgba(57, 255, 20, 0.18)",
    iconBg: "rgba(57, 255, 20, 0.12)",
    iconColor: "#39FF14",
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Secure, scalable cloud infrastructure designed for performance, uptime, and enterprise-grade reliability.",
    glowFrom: "#8B5CF6",
    glowTo: "#00BFFF",
    mouseGlow: "rgba(139, 92, 246, 0.2)",
    iconBg: "rgba(139, 92, 246, 0.12)",
    iconColor: "#00BFFF",
  },
];

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll(".service-card-wrap");
    const rings = grid.querySelectorAll(".service-glow-ring");

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 80%",
        },
      });

      rings.forEach((ring, i) => {
        gsap.to(ring, {
          opacity: 0.6,
          scale: 1.05,
          duration: 2 + i * 0.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <PremiumBackground>
      <section id="services" className="section-padding-lg">
        <div className="container-max">
          <SectionHeader
            label="What We Do"
            title={
              <>
                Digital Solutions That Drive{" "}
                <span className="gradient-text">Real Growth</span>
              </>
            }
            theme="dark"
          />

          <div
            ref={gridRef}
            className="relative grid gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-6"
          >
            {services.map((service) => (
              <div key={service.title} className="service-card-wrap relative">
                <div
                  className="service-glow-ring pointer-events-none absolute -inset-3 rounded-[36px] opacity-30 blur-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${service.glowFrom}44, ${service.glowTo}22)`,
                  }}
                  aria-hidden="true"
                />

                <GlassCard
                  glowFrom={service.glowFrom}
                  glowTo={service.glowTo}
                  mouseGlowColor={service.mouseGlow}
                  className="h-full min-h-[420px]"
                >
                  <div className="flex h-full flex-col p-9 md:p-10">
                    <div className="mb-auto flex flex-col items-center text-center">
                      <div
                        className="service-icon mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 shadow-[0_0_24px_var(--icon-glow)]"
                        style={
                          {
                            background: service.iconBg,
                            "--icon-glow": `${service.iconColor}44`,
                          } as React.CSSProperties
                        }
                      >
                        <service.icon
                          className="h-7 w-7"
                          style={{ color: service.iconColor }}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="mb-3 font-display text-xs font-bold tracking-[0.2em] text-white/30">
                        {service.number}
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/50">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-10 flex justify-center">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_20px_var(--icon-glow)]"
                        style={
                          {
                            background: `${service.iconBg}`,
                            "--icon-glow": `${service.iconColor}66`,
                          } as React.CSSProperties
                        }
                        aria-hidden="true"
                      >
                        <ArrowUpRight
                          className="h-4 w-4"
                          style={{ color: service.iconColor }}
                        />
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
