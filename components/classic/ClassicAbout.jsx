"use client";

import { motion } from "framer-motion";
import { Terminal, Boxes, Server, Cloud } from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { aboutText, profile } from "@/lib/data";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "20+", label: "Automation Scripts" },
  { value: "9", label: "Side Projects" },
  { value: "2", label: "Certifications" },
];

const sidekicks = [
  { Icon: Terminal, label: "Linux" },
  { Icon: Boxes, label: "Docker" },
  { Icon: Server, label: "Pipelines" },
  { Icon: Cloud, label: "AWS" },
];

export default function ClassicAbout() {
  return (
    <section id="about" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="01."
          kicker="About"
          title="A bit about me"
          subtitle="Pipeline engineering today, DevOps engineering tomorrow — both grounded in the same automation-first mindset."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* LEFT — illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-square">
              {/* glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/15 via-amber-500/15 to-red-500/15 blur-3xl rounded-full" />

              {/* avatar tile — photo on top of M fallback; photo silently fails if file missing */}
              <div className="relative w-full h-full rounded-2xl classic-card-glow overflow-hidden">
                {/* gradient backdrop */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(251,146,60,0.18), rgba(245,158,11,0.18) 40%, rgba(239,68,68,0.18))",
                  }}
                />
                {/* Fallback letter (visible if photo file is missing) */}
                <div className="absolute inset-0 grid place-items-center pointer-events-none">
                  <div
                    className="text-[10rem] font-bold leading-none classic-grad-text select-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    M
                  </div>
                </div>
                {/* Photo overlay */}
                <div
                  aria-label={profile.name}
                  role="img"
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${profile.image}')` }}
                />
                {/* Bottom gradient for chip legibility */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />

                {/* corner pills */}
                <div className="absolute top-3 left-3 classic-chip">~/about</div>
                <div className="absolute bottom-3 right-3 classic-chip">DevOps</div>
              </div>

              {/* sidekick chips */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {sidekicks.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="classic-glass px-3 py-2 flex items-center gap-2 text-xs text-white/75"
                  >
                    <Icon className="w-3.5 h-3.5 text-orange-300" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — paragraphs + stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-3 space-y-5"
          >
            {aboutText.map((p, i) => (
              <p key={i} className="text-white/70 leading-relaxed text-[16px]">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="classic-glass p-4 text-center hover:-translate-y-1 transition"
                >
                  <div className="text-3xl font-bold classic-grad-text">
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/45 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
