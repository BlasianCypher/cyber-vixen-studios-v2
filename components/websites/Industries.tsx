"use client";

import { useRef } from "react";
import { industries } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef, { stagger: 0.06 });

  return (
    <section ref={sectionRef} id="industries" className="bg-white section-padding-lg">
      <div className="container-max">
        <div data-reveal className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <p className="section-label mb-4">Industries We Serve</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-black md:text-5xl">
            Trusted across <span className="gradient-text">every sector</span>
          </h2>
          <p className="mt-5 text-lg text-gray">
            Websites tailored to your industry, audience, and growth goals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              data-reveal
              className="group rounded-[20px] border border-black/[0.08] bg-[#fafafa] p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mb-4 h-1 w-8 rounded-full"
                style={{ background: industry.accent }}
                aria-hidden="true"
              />
              <h3 className="font-display text-base font-semibold text-black">{industry.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
