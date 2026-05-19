"use client";

import { motion } from "framer-motion";
import {
  Container,
  Cloud,
  Terminal,
  GitBranch,
  Server,
  Boxes,
  Database,
  Workflow,
} from "lucide-react";

// Orbit positions — each ring carries a few icons.
const RING_1 = [
  { Icon: Container, label: "Docker" },
  { Icon: Terminal, label: "Linux" },
  { Icon: GitBranch, label: "Git" },
];
const RING_2 = [
  { Icon: Cloud, label: "AWS" },
  { Icon: Boxes, label: "K8s" },
];
const RING_3 = [
  { Icon: Server, label: "Infra" },
  { Icon: Database, label: "DB" },
  { Icon: Workflow, label: "CI/CD" },
];

export default function ClassicHeroGraphic() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* Outer subtle glow */}
      <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-3xl" />

      {/* Concentric rings */}
      <div className="absolute inset-[12%] rounded-full border border-white/[0.05]" />
      <div className="absolute inset-[26%] rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[40%] rounded-full border border-white/[0.10]" />

      {/* Center orb — gradient ring with "M" monogram */}
      <div className="absolute inset-[40%] grid place-items-center">
        <motion.div
          className="classic-orb relative w-full h-full rounded-full bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 grid place-items-center"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="text-5xl font-bold text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
          >
            M
          </span>
        </motion.div>
      </div>

      {/* Orbit ring 1 — innermost, fastest */}
      <Ring icons={RING_1} radiusPct={26} animClass="classic-orbit-1" />
      {/* Orbit ring 2 — middle */}
      <Ring icons={RING_2} radiusPct={38} animClass="classic-orbit-2" />
      {/* Orbit ring 3 — outermost */}
      <Ring icons={RING_3} radiusPct={48} animClass="classic-orbit-3" />

      {/* Floating particles */}
      {Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const r = 45 + (i % 5) * 3;
        const x = 50 + Math.cos(angle) * r;
        const y = 50 + Math.sin(angle) * r;
        return (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-300/70"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
          />
        );
      })}
    </div>
  );
}

function Ring({ icons, radiusPct, animClass }) {
  return (
    <div className="absolute inset-0">
      {icons.map(({ Icon, label }, i) => {
        const offsetDeg = (360 / icons.length) * i;
        return (
          <div
            key={label}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `rotate(${offsetDeg}deg)`,
              width: 0,
              height: 0,
            }}
          >
            <div
              className={animClass}
              style={{ ["--r"]: `${radiusPct}%` }}
            >
              <div className="grid place-items-center w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 text-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.30)]">
                <Icon className="w-4 h-4" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
