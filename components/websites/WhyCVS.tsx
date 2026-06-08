"use client";

import { useRef } from "react";
import { whyCVS } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";
import { PremiumBackground } from "../ui/PremiumBackground";

export function WhyCVS() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef, { stagger: 0.08 });

  return (
    <PremiumBackground beams={false}>
      <section ref={sectionRef} id="why-cvs" className="section-padding-lg">
        <div className="container-max">
          <div data-reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
            <p className="section-label-dark mb-4">Why Cyber Vixen Studios</p>
            <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-white md:text-5xl">
              Not just another <span className="gradient-text">web agency</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              We build websites the way product teams build software — with precision, performance, and long-term vision.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCVS.map((item) => (
              <div
                key={item.title}
                data-reveal
                className="rounded-[24px] border border-white/[0.12] bg-[#141418] p-7"
              >
                <span className="mb-3 block text-2xl" aria-hidden="true">{item.emoji}</span>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
