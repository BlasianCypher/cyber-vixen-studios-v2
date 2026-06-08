"use client";

import { useEffect, useRef } from "react";
import { processSteps } from "./data";
import { gsap, registerGsap } from "@/lib/gsap";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

export function WebsitesProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useSafeFadeUp(sectionRef);

  useEffect(() => {
    registerGsap();
    const line = lineRef.current;
    const timeline = timelineRef.current;
    if (!line || !timeline) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { attr: { x2: 0 } },
        {
          attr: { x2: 1400 },
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1,
          },
        }
      );
    }, timeline);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-white section-padding-lg">
      <div className="container-max">
        <div data-reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="section-label mb-4">Development Process</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-black md:text-5xl">
            From concept to <span className="gradient-text">launch &amp; beyond</span>
          </h2>
          <p className="mt-5 text-lg text-gray">
            A proven, transparent process — so you always know where your project stands.
          </p>
        </div>

        <div ref={timelineRef}>
          <div className="relative mb-12 hidden lg:block">
            <svg className="h-2 w-full overflow-visible" viewBox="0 0 1400 8" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="4" x2="1400" y2="4" stroke="#e5e7eb" strokeWidth="2" />
              <line ref={lineRef} x1="0" y1="4" x2="0" y2="4" stroke="url(#web-proc-neon)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="web-proc-neon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#00BFFF" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.number} data-reveal className="flex flex-col items-center text-center">
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/[0.06] bg-white shadow-md"
                  style={{ boxShadow: `0 0 20px ${step.color}33` }}
                >
                  <span className="font-display text-sm font-bold" style={{ color: step.color }}>
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
