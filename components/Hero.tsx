"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerGsap } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image) return;

    const ctx = gsap.context(() => {
      gsap.from(image, {
        opacity: 0,
        y: 48,
        scale: 0.97,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.to(image, {
        y: -10,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="bg-white pt-[4.5rem] md:pt-20"
      aria-label="Hero showcase"
    >
      <div className="container-max px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          ref={imageRef}
          className="relative w-full overflow-hidden rounded-[32px] shadow-[0_24px_80px_-12px_rgba(139,92,246,0.18),0_12px_40px_-8px_rgba(0,0,0,0.08)] md:rounded-[40px] lg:rounded-[48px]"
        >
          <Image
            src="/hero-visual.png"
            alt="Cyber Vixen Studios — premium digital systems showcase with laptop, performance metrics, and cloud infrastructure"
            width={1600}
            height={1000}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 1280px) 95vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}
