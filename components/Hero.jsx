"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Background from "./Background";
import FloatingIcons from "./FloatingIcons";
import TerminalBlock from "./TerminalBlock";
import { profile } from "@/lib/data";

function useTypingRoles(roles, speed = 90, pause = 1500) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    if (!deleting && j <= current.length) {
      const t = setTimeout(() => {
        setText(current.slice(0, j));
        setJ((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }
    if (!deleting && j > current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && j >= 0) {
      const t = setTimeout(() => {
        setText(current.slice(0, j));
        setJ((c) => c - 1);
      }, speed / 2);
      return () => clearTimeout(t);
    }
    if (deleting && j < 0) {
      setDeleting(false);
      setJ(0);
      setI((x) => x + 1);
    }
  }, [j, i, deleting, roles, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypingRoles(profile.roles);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16">
      <Background />
      <FloatingIcons />

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass border-cyan-400/30 text-xs font-mono text-cyan-300"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>DevOps Engineer | Cloud & Infrastructure Automation</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="block whitespace-nowrap text-white/85">Hello, I am</span>
            <span className="neon-text whitespace-nowrap">{profile.name}</span>
            <span className="text-cyan-300 animate-blink">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-xl sm:text-2xl font-mono text-white/80 min-h-[40px]"
          >
            <span className="text-cyan-300">$</span>{" "}
            <span className="text-emerald-400">whoami</span>{" "}
            <span className="text-white">→</span>{" "}
            <span className="text-white font-semibold">{typed}</span>
            <span className="cursor" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/65 max-w-xl leading-relaxed"
          >
            Junior DevOps Engineer with 1+ year of hands-on experience building
            CI/CD pipelines, automating Linux infrastructure, managing
            containerized applications, and developing scalable deployment
            workflows using Python, Docker, GitHub Actions, Ansible, and AWS.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-white/65 max-w-xl leading-relaxed"
          >
            Currently working in the VFX industry managing production
            infrastructure, automation systems, and distributed Linux
            environments across 30+ production nodes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg glass glass-hover"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg glass glass-hover"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-lg glass glass-hover"
            >
              <Mail className="w-5 h-5" />
            </a>
            <span className="ml-2 text-xs font-mono text-white/40">
              {profile.location} · UTC+5:30
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:justify-self-end w-full"
        >
          <TerminalBlock
            title="mahanth@devops:~ — bash"
            lines={[
              { type: "cmd", text: "whoami" },
              { type: "output", text: "yakkala bala mahanth · jr devops engineer (1+ yr)" },
              { type: "cmd", text: "cat status.yaml" },
              { type: "output", text: "current:   vfx production infra · automation · linux" },
              { type: "output", text: "shifting:  → it · devops engineer" },
              { type: "output", text: "learning:  [docker, k8s, aws, ci/cd]" },
              { type: "cmd", text: "./deploy.sh next-role" },
              { type: "output", text: "✓ skills · ✓ certs · ✓ projects · 🚀 hire-me" },
            ]}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
