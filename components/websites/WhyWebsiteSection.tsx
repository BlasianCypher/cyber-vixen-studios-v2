"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { websiteReasons } from "./data";
import { useSafeFadeUp, useSafeFadeUpGroups } from "@/lib/useSafeFadeUp";

const cardStyles = {
  white: "border-black/[0.08] bg-white text-black shadow-sm",
  purple: "border-purple/25 bg-[#f5f0ff] text-black",
  black: "border-white/[0.12] bg-[#141418] text-white",
  green: "border-green-500/25 bg-[#f0fdf4] text-black",
};

const sectionBackgrounds = [
  "bg-white",
  "bg-[#0a0a0a]",
  "bg-gradient-to-br from-[#1a0a2e] via-[#120f1a] to-[#0a1628]",
  "bg-white",
  "bg-[#0a0a0a]",
];

function ReasonCard({ reason, index }: { reason: (typeof websiteReasons)[0]; index: number }) {
  const isDark = reason.variant === "black";

  return (
    <article
      data-reveal-item
      className={`group relative rounded-[24px] border p-7 transition-all duration-300 hover:-translate-y-1 md:p-8 ${cardStyles[reason.variant]}`}
    >
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border"
        style={{
          background: `${reason.accent}18`,
          borderColor: `${reason.accent}40`,
        }}
      >
        <reason.icon className="h-5 w-5" style={{ color: reason.accent }} aria-hidden="true" />
      </div>
      <span className={`mb-2 block text-xs font-bold tracking-[0.2em] ${isDark ? "text-white/40" : "text-black/40"}`}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className={`font-display text-lg font-semibold ${isDark ? "text-white" : "text-black"}`}>
        {reason.title}
      </h3>
      <p className={`mt-2.5 text-sm leading-relaxed ${isDark ? "text-white/70" : "text-gray"}`}>
        {reason.content}
      </p>
      {reason.benefits && (
        <ul className={`mt-5 space-y-2 border-t pt-5 ${isDark ? "border-white/10" : "border-black/08"}`}>
          {reason.benefits.map((b) => (
            <li key={b} className={`flex items-center gap-2 text-xs font-medium ${isDark ? "text-white/75" : "text-gray"}`}>
              <Check className="h-3.5 w-3.5 shrink-0" style={{ color: reason.accent }} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export function WhyWebsiteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useSafeFadeUp(introRef);
  useSafeFadeUpGroups(sectionRef, ".reasons-grid", "[data-reveal-item]", { stagger: 0.07 });
  useSafeFadeUp(bottomRef);

  const chunks = [
    websiteReasons.slice(0, 3),
    websiteReasons.slice(3, 6),
    websiteReasons.slice(6, 9),
    websiteReasons.slice(9, 12),
    websiteReasons.slice(12, 15),
  ];

  return (
    <div ref={sectionRef} id="why-website">
      <div ref={introRef} className="bg-white section-padding-lg">
        <div className="container-max">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="section-label mb-4">The Case For A Website</p>
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-5xl">
              Why Every Serious Business Needs A Website
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray md:text-xl">
              A website isn&apos;t just a digital brochure. It&apos;s your credibility builder,
              sales engine, marketing platform, and growth system — working around the clock.
            </p>
          </div>
        </div>
      </div>

      {chunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className={`${sectionBackgrounds[chunkIndex]} section-padding-sm relative overflow-hidden md:section-padding-lg`}
        >
          {chunkIndex % 2 === 1 && <div className="noise-overlay" aria-hidden="true" />}
          {chunkIndex === 2 && (
            <p className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 text-center text-sm font-medium text-white/50">
              15 reasons every business needs a professional website
            </p>
          )}
          <div className="container-max relative z-10">
            <div className="reasons-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {chunk.map((reason) => (
                <ReasonCard
                  key={reason.title}
                  reason={reason}
                  index={websiteReasons.indexOf(reason)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <div ref={bottomRef} className="bg-white section-padding-lg">
        <div className="container-max">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[32px] border border-purple/20 bg-gradient-to-br from-purple/[0.08] via-white to-electric-blue/[0.06] p-10 md:p-14"
          >
            <p className="section-label mb-4">The Bottom Line</p>
            <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-black md:text-4xl">
              Your business deserves a digital home that works as hard as you do.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-gray md:text-lg">
              <p>
                A website is your storefront, sales team, customer service representative,
                marketing engine, credibility builder, and growth platform — all in one.
              </p>
              <p>
                Without a professional website, you&apos;re not just missing opportunities.
                You may be losing trust, visibility, and revenue every single day.
              </p>
            </div>
            <Link
              href="#consultation"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]"
            >
              Schedule Your Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
