"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Terminal, Award } from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { certifications } from "@/lib/data";

const ICONS = { ShieldCheck, Cloud, Terminal };

export default function ClassicCertifications() {
  return (
    <section id="certifications" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="06."
          kicker="Credentials"
          title="Certifications"
          subtitle="Validated foundations across security, cloud, and infrastructure."
        />

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map((c, i) => {
            const Icon = ICONS[c.icon] || Award;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="classic-card-glow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 shadow-[0_0_24px_rgba(251,146,60,0.30)]">
                    <Icon className="w-5 h-5 text-orange-300" />
                  </div>
                  <span className="text-[10px] font-medium px-2 py-1 rounded border border-orange-400/30 text-orange-300 bg-orange-400/5 tracking-[0.2em]">
                    {c.badge}
                  </span>
                </div>

                <h3
                  className="text-base font-semibold text-white leading-snug"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-xs text-orange-300/75 mt-1">{c.issuer}</p>
                <p className="text-sm text-white/55 mt-3 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
