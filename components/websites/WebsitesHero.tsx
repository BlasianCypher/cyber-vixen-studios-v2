"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { CalendlyButton } from "@/components/booking/CalendlyBooking";
import { gsap, registerGsap } from "@/lib/gsap";
import { useSafeFadeUpImmediate } from "@/lib/useSafeFadeUp";

export function WebsitesHero() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUpImmediate(sectionRef);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-visual-main", {
        y: -10,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero-float-card", {
        y: -8,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white pt-24 pb-16 md:pt-28 md:pb-20"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-purple/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-electric-blue/8 blur-[100px]" aria-hidden="true" />

      <div className="container-max relative z-10 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p data-reveal className="section-label mb-5">Website Design &amp; Development</p>
          <h1 data-reveal className="font-display text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-black md:text-6xl lg:text-7xl">
            Websites Built To Grow{" "}
            <span className="gradient-text">Your Business.</span>
          </h1>
          <p data-reveal className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray md:text-xl">
            Modern websites engineered for visibility, credibility, performance, and growth.
          </p>
          <div data-reveal className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CalendlyButton
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-semibold text-white transition-all hover:shadow-[0_0_32px_rgba(139,92,246,0.35)]"
            >
              Schedule Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </CalendlyButton>
            <Link
              href="#solutions"
              className="inline-flex h-12 items-center rounded-full border border-black/10 px-7 text-sm font-semibold text-black transition-all hover:bg-light-gray/60"
            >
              Explore Solutions
            </Link>
          </div>
        </div>

        <div data-reveal className="relative mx-auto mt-14 max-w-5xl md:mt-16">
          <div className="hero-visual-main relative overflow-hidden rounded-[32px] border border-black/[0.08] bg-gradient-to-br from-[#fafafa] to-white p-4 shadow-[0_32px_80px_-20px_rgba(139,92,246,0.2)] md:rounded-[40px] md:p-5">
            <div className="overflow-hidden rounded-[24px] border border-black/[0.08] bg-[#0a0a0a]">
              <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-green-400/80" />
                <span className="ml-3 flex-1 rounded bg-white/[0.06] px-3 py-1 text-[11px] text-white/50">yourbusiness.com</span>
              </div>
              <div className="grid md:grid-cols-[1fr_240px]">
                <div className="border-r border-white/[0.06] p-6 md:p-8">
                  <div className="mb-5 h-3.5 w-40 rounded-full bg-purple/50" />
                  <div className="mb-2 h-2.5 w-full rounded-full bg-white/[0.08]" />
                  <div className="mb-2 h-2.5 w-4/5 rounded-full bg-white/[0.08]" />
                  <div className="mb-6 h-2.5 w-3/5 rounded-full bg-white/[0.08]" />
                  <div className="grid grid-cols-3 gap-3">
                    {["#8B5CF6", "#00BFFF", "#22c55e"].map((c) => (
                      <div key={c} className="aspect-[4/3] rounded-lg" style={{ background: `${c}28`, border: `1px solid ${c}44` }} />
                    ))}
                  </div>
                </div>
                <div className="hidden p-5 md:block">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-white/50">Dashboard</p>
                  <div className="space-y-2">
                    {[["Visitors", "2.4k"], ["Conversions", "18%"], ["Revenue", "$12k"]].map(([l, v]) => (
                      <div key={l} className="rounded-lg border border-white/[0.08] bg-white/[0.04] p-3">
                        <p className="text-[10px] text-white/45">{l}</p>
                        <p className="font-display text-base font-bold text-white">{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-float-card absolute -left-3 top-10 rounded-xl border border-purple/25 bg-white p-4 shadow-lg md:-left-10">
            <p className="text-[10px] font-bold uppercase tracking-wider text-purple">Performance</p>
            <p className="font-display text-2xl font-bold text-black">98</p>
            <p className="text-xs text-gray">Lighthouse Score</p>
          </div>
          <div className="hero-float-card absolute -right-2 top-1/3 rounded-xl border border-electric-blue/25 bg-white p-4 shadow-lg md:-right-8">
            <p className="text-[10px] font-bold uppercase tracking-wider text-electric-blue">Uptime</p>
            <p className="font-display text-2xl font-bold text-black">99.9%</p>
          </div>
          <div className="hero-float-card absolute bottom-6 left-1/4 rounded-xl border border-green-500/30 bg-white px-4 py-2.5 shadow-md">
            <span className="flex items-center gap-2 text-sm font-semibold text-green-600">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Live &amp; Growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
