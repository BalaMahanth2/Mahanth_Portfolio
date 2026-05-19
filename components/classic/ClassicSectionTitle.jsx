"use client";

import { motion } from "framer-motion";

export default function ClassicSectionTitle({ number, kicker, title, subtitle, center = true }) {
  const align = center ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto" : ""} ${align}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        {number && <span className="classic-section-num">{number}</span>}
        {kicker && <span className="classic-kicker">{kicker}</span>}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="classic-h2 mt-3 text-4xl sm:text-5xl"
      >
        <span className="classic-grad-text">{title}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/55 leading-relaxed text-[15px]"
        >
          {subtitle}
        </motion.p>
      )}

      <div className={`classic-divider mt-7 max-w-[120px] ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
