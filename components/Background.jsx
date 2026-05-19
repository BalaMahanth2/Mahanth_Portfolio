"use client";

import { motion } from "framer-motion";

// Animated dot particles + grid + radial glow — sits behind hero only.
export default function Background() {
  const dots = Array.from({ length: 24 });

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />

      {/* radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* moving gradient blobs */}
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 30, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-0 w-[420px] h-[420px] rounded-full bg-purple-500/15 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, -60, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-1/3 w-[420px] h-[420px] rounded-full bg-pink-500/10 blur-3xl"
      />

      {/* drifting particles */}
      {dots.map((_, i) => {
        const left = `${(i * 37) % 100}%`;
        const top = `${(i * 53) % 100}%`;
        const delay = (i % 6) * 0.5;
        const size = (i % 3) + 2;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-cyan-300/40"
            style={{ left, top, width: size, height: size }}
            animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 5 + (i % 4), repeat: Infinity, delay }}
          />
        );
      })}
    </div>
  );
}
