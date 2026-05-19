"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "@/lib/data";
import {
  Code2,
  Terminal,
  Container,
  Cloud,
  LineChart,
  Database,
} from "lucide-react";

const CATEGORY_META = {
  Programming: { Icon: Code2, accent: "from-cyan-500/30 to-blue-500/30" },
  "Operating Systems": {
    Icon: Terminal,
    accent: "from-emerald-500/30 to-cyan-500/30",
  },
  "DevOps Tools": {
    Icon: Container,
    accent: "from-purple-500/30 to-pink-500/30",
  },
  Cloud: { Icon: Cloud, accent: "from-blue-500/30 to-purple-500/30" },
  "Monitoring & Infra": {
    Icon: LineChart,
    accent: "from-amber-500/30 to-pink-500/30",
  },
  Databases: { Icon: Database, accent: "from-cyan-500/30 to-emerald-500/30" },
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// stack"
          title="Skills & Tooling"
          subtitle="The tools I use daily, the ones I'm leveling up on, and where I'm headed next."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], idx) => {
            const meta = CATEGORY_META[category] || {
              Icon: Code2,
              accent: "from-cyan-500/30 to-purple-500/30",
            };
            const { Icon, accent } = meta;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="group glass glass-hover rounded-xl p-5 relative overflow-hidden"
              >
                <div
                  className={`absolute -inset-px rounded-xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition pointer-events-none`}
                  style={{ filter: "blur(20px)" }}
                />

                <div className="relative flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 group-hover:shadow-neon transition">
                    <Icon className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="font-semibold text-white/90 font-mono text-sm tracking-wide">
                    {category}
                  </h3>
                </div>

                <div className="relative space-y-3">
                  {items.map((s) => (
                    <SkillBar key={s.name} {...s} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-mono mb-1.5">
        <span className="text-white/80">{name}</span>
        <span className="text-cyan-300/80">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </div>
  );
}
