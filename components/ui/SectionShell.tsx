"use client";

import { type ReactNode } from "react";

type Variant = "white" | "black" | "purple" | "light-gray";

const variants: Record<Variant, string> = {
  white: "bg-white text-black",
  black: "bg-[#0a0a0a] text-white",
  purple:
    "bg-gradient-to-br from-[#1a0a2e] via-[#0f0f1a] to-[#0a1628] text-white",
  "light-gray": "bg-[#fafafa] text-black",
};

interface SectionShellProps {
  children: ReactNode;
  variant?: Variant;
  id?: string;
  className?: string;
  padded?: boolean;
}

export function SectionShell({
  children,
  variant = "white",
  id,
  className = "",
  padded = true,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${variants[variant]} ${padded ? "section-padding-lg" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
