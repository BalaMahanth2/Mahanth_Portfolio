"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { experience } from "@/lib/data";

export default function ClassicExperience() {
  return (
    <section id="experience" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="04."
          kicker="Experience"
          title="Where I've worked"
          subtitle="Hands-on pipeline and infra work in a fast-moving VFX studio."
        />

        <div className="space-y-6 max-w-3xl mx-auto">
          {experience.map((e, idx) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative classic-card-glow p-6 sm:p-8 pl-7"
            >
              {/* Glow left border */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-400 to-purple-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.55)]" />

              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-400/30 shrink-0 shadow-[0_0_24px_rgba(56,189,248,0.25)]">
                  <Briefcase className="w-5 h-5 text-cyan-300" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className="text-xl sm:text-2xl font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {e.role}
                    </h3>
                    <span className="classic-chip border-cyan-400/30 text-cyan-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-300/90 mt-1">@ {e.company}</p>
                  <p className="text-xs text-white/40 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {e.location}
                  </p>

                  <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-white/65 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
