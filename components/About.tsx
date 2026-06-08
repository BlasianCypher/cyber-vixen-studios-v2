"use client";

import { Bot, Cloud, Shield, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { GlassCard } from "./ui/GlassCard";
import { PremiumBackground } from "./ui/PremiumBackground";
import { SectionHeader } from "./ui/SectionHeader";

const features = [
  {
    icon: Zap,
    emoji: "⚡",
    title: "Performance First",
    description:
      "Lightning-fast load times and optimized code that keeps users engaged and conversions high.",
    glowFrom: "#8B5CF6",
    glowTo: "#C084FC",
    mouseGlow: "rgba(139, 92, 246, 0.2)",
    iconColor: "#8B5CF6",
  },
  {
    icon: Shield,
    emoji: "🔒",
    title: "Security Focused",
    description:
      "Enterprise-grade security practices protecting your data and your users at every layer.",
    glowFrom: "#00BFFF",
    glowTo: "#38BDF8",
    mouseGlow: "rgba(0, 191, 255, 0.2)",
    iconColor: "#00BFFF",
  },
  {
    icon: Cloud,
    emoji: "☁️",
    title: "Cloud Powered",
    description:
      "Scalable cloud infrastructure that grows seamlessly with your business demands.",
    glowFrom: "#8B5CF6",
    glowTo: "#00BFFF",
    mouseGlow: "rgba(139, 92, 246, 0.18)",
    iconColor: "#00BFFF",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Enhanced",
    description:
      "Intelligent automation and AI integrations that give your product a competitive edge.",
    glowFrom: "#39FF14",
    glowTo: "#4ADE80",
    mouseGlow: "rgba(57, 255, 20, 0.15)",
    iconColor: "#39FF14",
  },
];

export function About() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const grid = gridRef.current;
    const headline = headlineRef.current;
    if (!grid) return;

    const ctx = gsap.context(() => {
      if (headline) {
        gsap.from(headline.children, {
          y: 48,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: headline, start: "top 82%" },
        });
      }

      const cards = grid.querySelectorAll(".about-feature");
      gsap.from(cards, {
        y: 64,
        opacity: 0,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: grid, start: "top 80%" },
      });

      cards.forEach((card, i) => {
        gsap.to(card, {
          y: -12,
          duration: 3 + (i % 2),
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.3,
        });
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <PremiumBackground
      blobs={[
        {
          color: "rgba(139,92,246,0.2)",
          size: "h-[500px] w-[500px]",
          position: "-left-48 top-0",
        },
        {
          color: "rgba(0,191,255,0.12)",
          size: "h-[420px] w-[420px]",
          position: "right-0 bottom-0",
        },
        {
          color: "rgba(57,255,20,0.06)",
          size: "h-[300px] w-[300px]",
          position: "left-1/2 top-1/2",
        },
      ]}
    >
      <section id="about" className="section-padding-lg">
        <div className="container-max">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-32">
            <div ref={headlineRef}>
              <SectionHeader
                label="About Us"
                align="left"
                title={
                  <>
                    We Build With{" "}
                    <span className="gradient-text">Purpose</span>
                    <br />
                    And Obsess Over{" "}
                    <span className="gradient-text">Details</span>
                  </>
                }
                description="Cyber Vixen Studios partners with ambitious brands to design, build, and scale modern technology platforms — with precision, personality, and performance at every step."
                theme="dark"
                className="mb-0 max-w-none"
              />

              <div
                className="mt-12 h-px w-full max-w-md bg-gradient-to-r from-purple/50 via-electric-blue/30 to-transparent"
                aria-hidden="true"
              />
            </div>

            <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="about-feature">
                  <GlassCard
                    glowFrom={feature.glowFrom}
                    glowTo={feature.glowTo}
                    mouseGlowColor={feature.mouseGlow}
                    tilt
                    className="h-full min-h-[240px]"
                  >
                    <div className="flex h-full flex-col p-7">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="text-xl" aria-hidden="true">
                          {feature.emoji}
                        </span>
                        <div
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                          style={{
                            background: `${feature.iconColor}18`,
                            boxShadow: `0 0 20px ${feature.iconColor}33`,
                          }}
                        >
                          <feature.icon
                            className="h-5 w-5"
                            style={{ color: feature.iconColor }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                        {feature.description}
                      </p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
