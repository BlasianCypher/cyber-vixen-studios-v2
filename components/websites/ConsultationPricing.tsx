"use client";

import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import { CalendlyButton } from "@/components/booking/CalendlyBooking";
import { consultationTopics } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

export function ConsultationPricing() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="consultation"
      className="relative overflow-hidden section-padding-lg text-white"
      style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #0f0f1a 45%, #0a1628 100%)" }}
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple/20 blur-[100px]" aria-hidden="true" />

      <div className="container-max relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p data-reveal className="section-label-dark mb-4">Consultation &amp; Pricing</p>
            <h2 data-reveal className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-5xl">
              Every Project Is <span className="gradient-text">Different.</span>
            </h2>
            <p data-reveal className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
              Pricing is discussed after a free consultation — tailored to your goals,
              features, timeline, and budget. No hidden fees. No obligation.
            </p>
          </div>

          <div
            data-reveal
            className="relative rounded-[28px] border border-white/[0.12] bg-[#141418] p-8 md:p-10"
          >
            <span className="absolute right-6 top-6 rounded-full bg-green-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-400">
              Free
            </span>

            <h3 className="font-display text-xl font-bold text-white md:text-2xl">
              Your complimentary consultation covers:
            </h3>
            <ul className="mt-6 space-y-3">
              {consultationTopics.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-sm text-white/80 md:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-purple" aria-hidden="true" />
                  {topic}
                </li>
              ))}
            </ul>

            <CalendlyButton
              className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-white text-sm font-semibold text-black transition-all hover:bg-white/90"
            >
              Schedule Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </CalendlyButton>
          </div>
        </div>
      </div>
    </section>
  );
}
