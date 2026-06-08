"use client";

import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { faqItems } from "./data";
import { useSafeFadeUp } from "@/lib/useSafeFadeUp";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/[0.08] last:border-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-black md:text-lg">
          <span className="mr-3 text-sm font-bold text-purple">{String(index + 1).padStart(2, "0")}</span>
          {question}
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gray transition-transform ${open ? "rotate-180 text-purple" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pr-8 text-sm leading-relaxed text-gray md:text-base">{answer}</p>
      </div>
    </div>
  );
}

export function WebsitesFAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  useSafeFadeUp(sectionRef);

  return (
    <section ref={sectionRef} id="faq" className="bg-white section-padding-lg">
      <div className="container-max">
        <div data-reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.03em] text-black md:text-4xl">
            Common questions, <span className="gradient-text">clear answers</span>
          </h2>
        </div>

        <div data-reveal className="mx-auto max-w-3xl rounded-[24px] border border-black/[0.08] bg-[#fafafa] px-6 md:px-10">
          {faqItems.map((item, i) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
