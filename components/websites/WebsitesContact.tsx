"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

export function WebsitesContact() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef);

  return (
    <section ref={sectionRef} id="contact" className="bg-white section-padding-lg">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <p data-reveal className="section-label mb-4">Contact</p>
          <h2 data-reveal className="font-display text-3xl font-bold tracking-[-0.03em] text-black md:text-4xl">
            Let&apos;s start the conversation
          </h2>
          <p data-reveal className="mt-4 text-base text-gray md:text-lg">
            Reach out to schedule your free consultation or ask any questions about your project.
          </p>

          <a
            data-reveal
            href="mailto:cybervixenstudios@outlook.com"
            className="mt-8 inline-flex items-center gap-4 rounded-[24px] border border-black/[0.08] bg-[#fafafa] px-8 py-5 transition-all hover:border-purple/25 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
              <Mail className="h-5 w-5 text-purple" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray">Email</span>
              <span className="block text-base font-semibold text-black">cybervixenstudios@outlook.com</span>
            </span>
            <ArrowRight className="h-5 w-5 text-gray" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
