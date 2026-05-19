"use client";

import { motion } from "framer-motion";
import {
  Container,
  Cloud,
  GitBranch,
  Terminal,
  Server,
  Workflow,
  Database,
  Shield,
  Cpu,
  Network,
} from "lucide-react";

const ICONS = [
  { Icon: Container, x: "6%", y: "20%", d: 0 },
  { Icon: Cloud, x: "88%", y: "16%", d: 1 },
  { Icon: GitBranch, x: "12%", y: "72%", d: 2 },
  { Icon: Terminal, x: "82%", y: "70%", d: 0.5 },
  { Icon: Server, x: "50%", y: "8%", d: 1.5 },
  { Icon: Workflow, x: "50%", y: "88%", d: 2.2 },
  { Icon: Database, x: "92%", y: "44%", d: 0.8 },
  { Icon: Shield, x: "4%", y: "44%", d: 1.2 },
  { Icon: Cpu, x: "30%", y: "30%", d: 0.4 },
  { Icon: Network, x: "70%", y: "32%", d: 1.7 },
];

export default function FloatingIcons() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      {ICONS.map(({ Icon, x, y, d }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{
            opacity: [0.35, 0.7, 0.35],
            y: [0, -10, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 6 + (i % 3),
            repeat: Infinity,
            delay: d,
            ease: "easeInOut",
          }}
        >
          <div className="p-2.5 rounded-lg glass border-cyan-400/15 text-cyan-300/80 shadow-neon">
            <Icon className="w-5 h-5" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
