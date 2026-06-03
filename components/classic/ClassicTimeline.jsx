"use client";

import { motion } from "framer-motion";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { timeline } from "@/lib/data";
import {
  Code2,
  Terminal,
  GitBranch,
  Box,
  Layers,
  Workflow,
  Cloud,
  Rocket,
  Briefcase,
} from "lucide-react";

const ICONS = { Code2, Terminal, GitBranch, Box, Layers, Workflow, Cloud, Rocket, Briefcase };

export default function ClassicTimeline() {
  return (
    <section id="timeline" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="05."
          kicker="Journey"
          title="My DevOps journey"
          subtitle="From first Python script to building production-grade infrastructure."
        />

        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400/40 to-transparent" />

          <ol className="space-y-12">
            {timeline.map((t, i) => {
              const Icon = ICONS[t.icon] || Code2;
              const isLeft = i % 2 === 0;

              return (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  {/* dot */}
                  <span className="absolute left-3 sm:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.75)] ring-4 ring-[#0b0f19]" />

                  <div
                    className={`${
                      isLeft ? "sm:text-right sm:pr-8" : "sm:col-start-2 sm:pl-8"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 mb-2 ${
                        isLeft ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg grid place-items-center bg-white/[0.04] border border-white/10 text-orange-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs text-orange-300/80 tracking-[0.18em] uppercase">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-semibold text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {t.title}
                    </h3>
                    {t.date && (
                      <span className="mt-1 inline-block text-xs text-orange-300/90 tracking-[0.14em] uppercase">
                        {t.date}
                      </span>
                    )}
                    <p className="mt-1.5 text-sm text-white/55 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
