"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// experience"
          title="Where I've Worked"
          subtitle="Hands-on pipeline and infra work in a fast-moving VFX studio."
        />

        <div className="space-y-6">
          {experience.map((e, idx) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="relative glass glass-hover rounded-2xl p-6 sm:p-8 overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl" />

              <div className="relative flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-14 h-14 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-500/25 to-purple-500/25 border border-cyan-400/25 shrink-0 shadow-neon">
                  <Briefcase className="w-6 h-6 text-cyan-300" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white/95">
                      {e.role}
                    </h3>
                    <span className="chip border-cyan-400/40 text-cyan-300">
                      {e.period}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-cyan-300/90 mt-1">
                    @ {e.company}
                  </p>
                  <p className="text-xs text-white/50 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3 h-3" />
                    {e.location}
                  </p>

                  <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    {e.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-white/70 leading-relaxed"
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
