"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Container,
  Cloud,
  LineChart,
  Database,
  Film,
} from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { skills } from "@/lib/data";

const CATEGORY_META = {
  Programming: { Icon: Code2, hue: "from-orange-500/15 to-amber-500/15" },
  "Operating Systems": { Icon: Terminal, hue: "from-amber-500/15 to-yellow-500/15" },
  "DevOps Tools": { Icon: Container, hue: "from-orange-500/15 to-red-500/15" },
  Cloud: { Icon: Cloud, hue: "from-amber-500/15 to-orange-500/15" },
  "Monitoring & Infra": { Icon: LineChart, hue: "from-red-500/15 to-orange-500/15" },
  Databases: { Icon: Database, hue: "from-yellow-500/15 to-orange-500/15" },
  "VFX & Pipeline": { Icon: Film, hue: "from-red-500/15 to-pink-500/15" },
};

export default function ClassicSkills() {
  return (
    <section id="skills" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="02."
          kicker="Skills"
          title="Tech stack"
          subtitle="Tools I work with daily, what I'm actively learning, and where I'm headed."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items], idx) => {
            const meta = CATEGORY_META[category] || {
              Icon: Code2,
              hue: "from-orange-500/15 to-red-500/15",
            };
            const { Icon, hue } = meta;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="classic-card-glow p-6 relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hue} opacity-50 rounded-[15px] pointer-events-none`}
                />

                <div className="relative flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl grid place-items-center bg-white/[0.04] border border-white/10 text-orange-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-white text-base"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {category}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s.name} className="classic-chip">
                      {s.name}
                    </span>
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
