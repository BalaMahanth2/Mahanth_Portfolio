"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
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

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// journey"
          title="DevOps Learning Journey"
          subtitle="The path from first Python script to building production-grade infrastructure."
        />

        <div className="relative pl-6 sm:pl-0">
          {/* vertical line */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

          <ol className="space-y-10">
            {timeline.map((t, i) => {
              const Icon = ICONS[t.icon] || Code2;
              const isLeft = i % 2 === 0;

              return (
                <motion.li
                  key={t.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-10"
                >
                  {/* dot */}
                  <span className="absolute left-3 sm:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-neon ring-4 ring-bg" />

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
                      <div className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20">
                        <Icon className="w-4 h-4 text-cyan-300" />
                      </div>
                      <span className="font-mono text-xs text-cyan-300/80">
                        step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white/95">
                      {t.title}
                    </h3>
                    {t.date && (
                      <span className="mt-1 inline-block font-mono text-xs text-cyan-300/90">
                        {t.date}
                      </span>
                    )}
                    <p className="mt-1.5 text-sm text-white/65 leading-relaxed">
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
