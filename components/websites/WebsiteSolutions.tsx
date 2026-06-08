"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useRef } from "react";
import { websiteSolutions } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";
import { GlassCard } from "../ui/GlassCard";
import { PremiumBackground } from "../ui/PremiumBackground";

export function WebsiteSolutions() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef, { stagger: 0.12 });

  return (
    <PremiumBackground>
      <section ref={sectionRef} id="solutions" className="section-padding-lg">
        <div className="container-max">
          <div data-reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <p className="section-label-dark mb-4">Website Solutions</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">
              Built for every <span className="gradient-text">ambition</span>
            </h2>
            <p className="mt-5 text-lg text-white/70 md:text-xl">
              From business websites to custom web applications — engineered for performance, conversion, and scale.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-10">
            {websiteSolutions.map((solution, i) => (
              <div key={solution.title} data-reveal>
                <GlassCard
                  glowFrom={solution.accent}
                  glowTo={solution.glowTo}
                  mouseGlowColor={`${solution.accent}33`}
                  className="min-h-0"
                  tilt
                >
                  <div className="grid gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-10 lg:p-12">
                    <div>
                      <span className="font-display text-xs font-bold tracking-[0.2em] text-white/40">
                        0{i + 1}
                      </span>
                      <p className="mt-2 text-sm font-semibold text-purple">{solution.tagline}</p>
                      <h3 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
                        {solution.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/75">
                        {solution.description}
                      </p>
                      <span
                        className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]"
                        style={{ color: solution.accent }}
                      >
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                    <ul className="grid gap-2.5 sm:grid-cols-2 content-start">
                      {solution.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white/85"
                        >
                          <Check className="h-4 w-4 shrink-0" style={{ color: solution.accent }} aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
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
