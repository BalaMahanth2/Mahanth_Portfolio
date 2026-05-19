"use client";

import { motion } from "framer-motion";
import { Server, Zap, GitBranch, Cloud } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { aboutText, profile } from "@/lib/data";

const highlights = [
  {
    Icon: GitBranch,
    title: "1+ Yr Pipeline Dev",
    desc: "Production Python + Linux experience in a fast-moving VFX studio.",
  },
  {
    Icon: Zap,
    title: "Automation First",
    desc: "Default reaction to toil: write a script. Then make it idempotent.",
  },
  {
    Icon: Server,
    title: "Linux Native",
    desc: "Rocky Linux, systemd, NGINX, networking — comfortable on the shell.",
  },
  {
    Icon: Cloud,
    title: "DevOps Bound",
    desc: "Active learner: Docker, Kubernetes, CI/CD, AWS — building, not just reading.",
  },
];

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
          >
            {highlights.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="glass glass-hover p-4 rounded-xl group"
              >
                <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 mb-3 group-hover:shadow-neon transition">
                  <Icon className="w-5 h-5 text-cyan-300" />
                </div>
                <h3 className="font-semibold text-white/90">{title}</h3>
                <p className="text-xs text-white/55 mt-1 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
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
