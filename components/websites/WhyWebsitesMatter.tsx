"use client";

import Image from "next/image";
import { useRef } from "react";
import { credibilityStats, storyBlocks } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";
import { PremiumBackground } from "../ui/PremiumBackground";

const storyVisuals = [
  {
    src: "/images/digital-storefront.png",
    alt: "Website analytics dashboard across desktop, laptop, and mobile devices",
  },
  {
    src: "/images/social-media-isnt-enough.png",
    alt: "Comparison showing why social media alone is not enough compared with owning a professional website",
    floating: true,
  },
  {
    src: "/images/every-marketing-channel-leads-home.png",
    alt: "Infographic showing marketing channels leading back to a business website",
  },
];

function StoryVisual({
  visual,
}: {
  visual: (typeof storyVisuals)[number];
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[1200px] py-4 md:py-6 ${
        visual.floating ? "story-visual-float" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-4 rounded-[32px] bg-purple/30 blur-[72px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-2 -left-2 h-32 w-32 rounded-full bg-electric-blue/20 blur-[58px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-2 -top-2 h-32 w-32 rounded-full bg-purple/20 blur-[58px]"
        aria-hidden="true"
      />
      <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.06] p-2 shadow-[0_32px_90px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-white/[0.16] hover:shadow-[0_42px_110px_-30px_rgba(139,92,246,0.55)]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="rounded-[20px] object-contain shadow-[0_18px_48px_-22px_rgba(0,0,0,0.85)] transition-transform duration-[400ms] ease-out group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}

export function WhyWebsitesMatter() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef);

  return (
    <PremiumBackground beams={false}>
      <section ref={sectionRef} id="why-matter" className="section-padding-lg">
        <div className="container-max">
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <p className="section-label-dark mb-4">Why Websites Matter</p>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
              A website is <span className="gradient-text">no longer optional.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75 md:text-xl">
              Modern customers expect businesses to have a professional online presence.
              Without one, you&apos;re invisible to the people searching for exactly what you offer.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credibilityStats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="rounded-[24px] border border-white/[0.12] bg-[#141418] p-6 text-center"
              >
                <p className="font-display text-4xl font-bold md:text-5xl" style={{ color: stat.accent }}>
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8 lg:space-y-12">
            {storyBlocks.map((block, i) => (
              <div
                key={block.title}
                data-reveal
                className="rounded-[32px] border border-white/[0.08] bg-white/[0.03] p-5 shadow-[0_28px_90px_-36px_rgba(0,0,0,0.85)] backdrop-blur-sm md:p-8"
              >
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-3 h-1 w-10 rounded-full" style={{ background: block.accent }} />
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{block.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">{block.body}</p>
                </div>
                <StoryVisual visual={storyVisuals[i]} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
