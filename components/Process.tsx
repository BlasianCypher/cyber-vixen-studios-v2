"use client";

import {
  Code2,
  Palette,
  Rocket,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { PremiumBackground } from "./ui/PremiumBackground";
import { SectionHeader } from "./ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your vision, goals, and audience.",
    icon: Search,
    color: "#8B5CF6",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Crafting a roadmap for success and scalability.",
    icon: Target,
    color: "#00BFFF",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating beautiful, intuitive user experiences.",
    icon: Palette,
    color: "#8B5CF6",
  },
  {
    number: "04",
    title: "Development",
    description: "Building robust, high-performance solutions.",
    icon: Code2,
    color: "#39FF14",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploying your product with confidence.",
    icon: Rocket,
    color: "#8B5CF6",
  },
  {
    number: "06",
    title: "Growth",
    description: "Continuous optimization and scaling support.",
    icon: TrendingUp,
    color: "#00BFFF",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const line = lineRef.current;
    const timeline = timelineRef.current;
    if (!section || !line || !timeline) return;

    const orbs = timeline.querySelectorAll(".process-node-orb");
    const cards = timeline.querySelectorAll(".process-node-card");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { attr: { x2: 0 } },
        {
          attr: { x2: 1200 },
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 75%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        }
      );

      orbs.forEach((orb, i) => {
        gsap.from(orb, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: timeline,
            start: `top ${78 - i * 2}%`,
            toggleActions: "play none none none",
          },
        });

        gsap.to(orb, {
          y: -8,
          duration: 2.5 + (i % 3) * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: i * 0.2,
        });
      });

      gsap.from(cards, {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 78%",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <PremiumBackground
      blobs={[
        {
          color: "rgba(139,92,246,0.15)",
          size: "h-[400px] w-[400px]",
          position: "left-0 top-1/4",
        },
        {
          color: "rgba(0,191,255,0.1)",
          size: "h-[440px] w-[440px]",
          position: "right-0 bottom-0",
        },
      ]}
    >
      <section id="process" ref={sectionRef} className="section-padding-lg">
        <div className="container-max">
          <SectionHeader
            label="Our Process"
            title={
              <>
                A Clear Path From Idea to{" "}
                <span className="gradient-text">Impact</span>
              </>
            }
            theme="dark"
          />

          <div ref={timelineRef} className="relative">
            <div className="relative mb-20 hidden lg:block">
              <svg
                className="h-2 w-full overflow-visible"
                viewBox="0 0 1200 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="4"
                  x2="1200"
                  y2="4"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="2"
                />
                <line
                  ref={lineRef}
                  x1="0"
                  y1="4"
                  x2="0"
                  y2="4"
                  stroke="url(#process-neon)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#process-glow)"
                />
                <defs>
                  <linearGradient id="process-neon" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="35%" stopColor="#00BFFF" />
                    <stop offset="65%" stopColor="#39FF14" />
                    <stop offset="100%" stopColor="#00BFFF" />
                  </linearGradient>
                  <filter id="process-glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="process-node-card flex flex-col items-center text-center"
                >
                  <div
                    className="process-node-orb process-orb-glow relative mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full glass-dark border border-white/10"
                    style={
                      {
                        "--orb-color": `${step.color}88`,
                        boxShadow: `0 0 24px ${step.color}44, inset 0 0 20px ${step.color}11`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="font-display text-sm font-bold"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="absolute inset-0 rounded-full opacity-40 blur-md"
                      style={{ background: step.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08]"
                    style={{ background: `${step.color}15` }}
                  >
                    <step.icon
                      className="h-4 w-4"
                      style={{ color: step.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
