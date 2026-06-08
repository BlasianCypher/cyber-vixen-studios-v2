"use client";

import { useRef } from "react";
import { websiteFeatures } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";
import { PremiumBackground } from "../ui/PremiumBackground";

export function WebsiteFeatures() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef, { stagger: 0.06 });

  return (
    <PremiumBackground beams={false}>
      <section ref={sectionRef} id="features" className="section-padding-lg bg-[#080808]">
        <div className="container-max">
          <div data-reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <p className="section-label-dark mb-4">Website Features</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">
              Everything your website <span className="gradient-text">needs to win</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Every feature engineered for performance, conversion, and growth.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {websiteFeatures.map((feature) => (
              <div
                key={feature.title}
                data-reveal
                className="group rounded-[20px] border border-white/[0.12] bg-[#141418] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                  style={{ background: `${feature.accent}20` }}
                >
                  <feature.icon className="h-5 w-5" style={{ color: feature.accent }} aria-hidden="true" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
