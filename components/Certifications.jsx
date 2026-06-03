"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { certifications } from "@/lib/data";
import { ShieldCheck, Cloud, Terminal, Award, ExternalLink } from "lucide-react";

const ICONS = { ShieldCheck, Cloud, Terminal };

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// credentials"
          title="Certifications"
          subtitle="Validated foundations across security, cloud, and infrastructure."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {certifications.map((c, i) => {
            const Icon = ICONS[c.icon] || Award;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group relative glass glass-hover rounded-2xl p-6 overflow-hidden"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{ filter: "blur(28px)" }}
                />

                <div className="relative flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500/25 to-purple-500/25 border border-cyan-400/25 group-hover:shadow-neon transition">
                    <Icon className="w-6 h-6 text-cyan-300" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded border border-cyan-400/30 text-cyan-300/90 bg-cyan-400/5 tracking-wider">
                    {c.badge}
                  </span>
                </div>

                <h3 className="relative text-lg font-semibold text-white/95 leading-snug">
                  {c.title}
                </h3>
                <p className="relative font-mono text-xs text-cyan-300/80 mt-1">
                  {c.issuer}
                </p>
                <p className="relative text-sm text-white/65 mt-3 leading-relaxed">
                  {c.desc}
                </p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition"
                  >
                    Verify <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
