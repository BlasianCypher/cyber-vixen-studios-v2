"use client";

import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { CalendlyButton } from "@/components/booking/CalendlyBooking";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

export function WebsitesCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-padding-lg text-white"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a1628 100%)" }}
    >
      <div className="noise-overlay" aria-hidden="true" />
      <div className="container-max relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 data-reveal className="font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Ready To Build Something <span className="gradient-text">Exceptional?</span>
          </h2>
          <p data-reveal className="mt-5 text-lg text-white/75 md:text-xl">
            Let&apos;s create a website that works as hard as you do.
          </p>
          <CalendlyButton
            className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-black transition-all hover:bg-white/90"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
