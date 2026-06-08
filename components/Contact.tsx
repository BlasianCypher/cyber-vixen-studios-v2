"use client";

import { ArrowRight, Mail } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { FloatingField } from "./ui/FloatingField";
import { PremiumBackground } from "./ui/PremiumBackground";
import { SectionHeader } from "./ui/SectionHeader";

const projectTypes = [
  "Website Development",
  "App Development",
  "SEO & Marketing",
  "Cloud Solutions",
  "AI Integration",
  "Other",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const formWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.from(leftRef.current.children, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 82%" },
        });
      }
      if (formWrapRef.current) {
        gsap.from(formWrapRef.current, {
          y: 56,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: formWrapRef.current, start: "top 85%" },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PremiumBackground
      blobs={[
        {
          color: "rgba(139,92,246,0.16)",
          size: "h-[460px] w-[460px]",
          position: "-left-32 bottom-0",
        },
        {
          color: "rgba(0,191,255,0.1)",
          size: "h-[380px] w-[380px]",
          position: "right-0 top-1/4",
        },
      ]}
    >
      <section id="contact" className="section-padding-lg">
        <div className="container-max">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-24 xl:gap-32">
            <div ref={leftRef}>
              <SectionHeader
                label="Get In Touch"
                align="left"
                title={
                  <>
                    Let&apos;s Build Something{" "}
                    <span className="gradient-text">Amazing</span> Together
                  </>
                }
                description="Share your vision with us. We'll craft a tailored plan to bring it to life."
                theme="dark"
                className="mb-0 max-w-none"
              />

              <div className="mt-14">
                <a
                  href="mailto:cybervixenstudios@outlook.com"
                  className="group inline-flex items-center gap-4 transition-transform duration-300 hover:translate-x-1"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-dark border border-white/10 shadow-[0_0_32px_rgba(139,92,246,0.2)] transition-shadow duration-300 group-hover:shadow-[0_0_48px_rgba(139,92,246,0.35)]">
                    <Mail className="h-5 w-5 text-purple" aria-hidden="true" />
                  </span>
                  <span className="text-base font-medium text-white/80 transition-colors group-hover:text-white">
                    cybervixenstudios@outlook.com
                  </span>
                </a>
              </div>
            </div>

            <div ref={formWrapRef}>
              <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] glass-dark p-8 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] md:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple/20 blur-[60px]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-electric-blue/15 blur-[50px]"
                  aria-hidden="true"
                />

                {submitted ? (
                  <div className="relative flex flex-col items-center justify-center py-20 text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple/30 bg-purple/10 shadow-[0_0_32px_rgba(139,92,246,0.3)]">
                      <ArrowRight className="h-6 w-6 text-purple" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      Message received
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingField
                        name="name"
                        label="Your Name"
                        type="text"
                        required
                        autoComplete="name"
                        variant="dark"
                      />
                      <FloatingField
                        name="email"
                        label="Your Email"
                        type="email"
                        required
                        autoComplete="email"
                        variant="dark"
                      />
                    </div>
                    <FloatingField
                      name="projectType"
                      label="Project Type"
                      type="select"
                      required
                      options={projectTypes}
                      variant="dark"
                    />
                    <FloatingField
                      name="message"
                      label="Tell us about your project..."
                      type="textarea"
                      required
                      rows={6}
                      variant="dark"
                    />

                    <button
                      type="submit"
                      className="group mt-4 flex h-[60px] w-full items-center justify-center gap-2 rounded-2xl text-[15px] font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_48px_rgba(139,92,246,0.45)] hover:brightness-110"
                      style={{
                        background:
                          "linear-gradient(135deg, #8B5CF6 0%, #00BFFF 50%, #39FF14 100%)",
                      }}
                    >
                      Send Message
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PremiumBackground>
  );
}
