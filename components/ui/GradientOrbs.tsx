"use client";

import { motion } from "framer-motion";

export function GradientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-[10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[5%] top-[20%] h-[600px] w-[600px] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #00BFFF 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #39FF14 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
