"use client";

import { useEffect, type RefObject } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

interface SafeFadeUpOptions {
  selector?: string;
  stagger?: number;
  y?: number;
  start?: string;
  delay?: number;
}

function animateFadeUp(
  targets: gsap.TweenTarget,
  { stagger = 0.08, y = 24, delay = 0 }: SafeFadeUpOptions
) {
  gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger,
      delay,
      ease: "power3.out",
      immediateRender: false,
    }
  );
}

/**
 * Progressive-enhancement scroll reveal.
 * Content stays visible in HTML/CSS until the user scrolls to it;
 * GSAP only runs the fade-up on enter — never pre-hides elements on mount.
 */
export function useSafeFadeUp(
  containerRef: RefObject<HTMLElement | null>,
  options: SafeFadeUpOptions = {}
) {
  const {
    selector = "[data-reveal]",
    stagger = 0.08,
    y = 24,
    start = "top 90%",
    delay = 0,
  } = options;

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start,
        once: true,
        onEnter: () => animateFadeUp(targets, { stagger, y, delay }),
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, [containerRef, selector, stagger, y, start, delay]);
}

/**
 * Per-group scroll reveals (e.g. multiple grids on one page).
 */
export function useSafeFadeUpGroups(
  containerRef: RefObject<HTMLElement | null>,
  groupSelector: string,
  itemSelector: string,
  options: Omit<SafeFadeUpOptions, "selector"> = {}
) {
  const { stagger = 0.08, y = 24, start = "top 90%" } = options;

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const groups = container.querySelectorAll(groupSelector);
    if (!groups.length) return;

    const ctx = gsap.context(() => {
      groups.forEach((group) => {
        const items = group.querySelectorAll(itemSelector);
        if (!items.length) return;

        ScrollTrigger.create({
          trigger: group,
          start,
          once: true,
          onEnter: () => animateFadeUp(items, { stagger, y }),
        });
      });

      ScrollTrigger.refresh();
    }, container);

    return () => ctx.revert();
  }, [containerRef, groupSelector, itemSelector, stagger, y, start]);
}

/**
 * Immediate fade-up on mount (hero sections). Does not pre-hide — animates on first paint.
 */
export function useSafeFadeUpImmediate(
  containerRef: RefObject<HTMLElement | null>,
  options: Omit<SafeFadeUpOptions, "start"> = {}
) {
  const { selector = "[data-reveal]", stagger = 0.1, y = 32, delay = 0.05 } = options;

  useEffect(() => {
    registerGsap();
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      animateFadeUp(targets, { stagger, y, delay });
    }, container);

    return () => ctx.revert();
  }, [containerRef, selector, stagger, y, delay]);
}
