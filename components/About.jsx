"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { aboutText, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// about"
          title="About Me"
          subtitle="From 1+ year of pipeline tooling in VFX to building cloud-native DevOps infrastructure in IT."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* LEFT — photo tile + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Profile photo tile — Custom aesthetic with neon glow + terminal label */}
            <div className="relative aspect-square rounded-xl glass glass-hover overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-pink-500/20" />
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div className="text-[8rem] font-bold leading-none neon-text select-none font-mono">
                  M
                </div>
              </div>
              <div
                aria-label={profile.name}
                role="img"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${profile.image}')` }}
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/85 to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 chip font-mono text-[10px]">
                <span className="text-emerald-400">$</span>{" "}
                <span className="text-cyan-300">whoami</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT — content + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            {aboutText.map((p, i) => (
              <p key={i} className="text-white/75 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <Stat label="Years Experience" value="1+" />
              <Stat label="Automation Scripts" value="20+" />
              <Stat label="Certifications" value="2" />
              <Stat label="Coffee/day" value="∞" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="glass rounded-lg p-3 text-center">
      <div className="text-2xl font-bold neon-text">{value}</div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-white/50 mt-1">
        {label}
      </div>
    </div>
  );
}
