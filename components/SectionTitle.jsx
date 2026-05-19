"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {kicker && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.25em] uppercase text-cyan-300/80"
        >
          {kicker}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="h-section mt-2"
      >
        <span className="neon-text">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-white/65 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
    </div>
  );
}
