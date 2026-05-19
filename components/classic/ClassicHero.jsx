"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { profile } from "@/lib/data";
import ClassicHeroGraphic from "./ClassicHeroGraphic";

function useTypingRoles(roles, speed = 85, pause = 1500) {
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

export default function ClassicHero() {
  const typed = useTypingRoles(profile.roles);

  return (
    <section
      id="home"
      className="classic-section pt-32 min-h-screen flex items-center"
    >
      <div className="classic-container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* LEFT */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="classic-kicker"
          >
            Hello, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="classic-h1 text-5xl sm:text-6xl lg:text-7xl mt-3 text-white whitespace-nowrap"
          >
            <span className="classic-grad-text">Mahanth</span>
            <span className="text-orange-400">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-sm text-white/40 tracking-[0.25em] uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {profile.name}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl sm:text-2xl mt-6 text-white/75 font-light min-h-[36px]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            I&apos;m a{" "}
            <span className="text-orange-300 font-medium">{typed}</span>
            <span className="inline-block w-[2px] h-6 bg-orange-400 ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-white/60 max-w-xl leading-relaxed text-[16px]"
          >
            Junior Pipeline Developer with 1+ year of hands-on experience in
            the VFX industry — working with{" "}
            <span className="text-white/85">Python automation</span>,{" "}
            <span className="text-white/85">Linux systems</span>, and{" "}
            <span className="text-white/85">Houdini / AYON pipelines</span>.
            Actively transitioning into DevOps Engineering on the IT side,
            focused on Docker, Kubernetes, CI/CD, and AWS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-3 mt-9"
          >
            <a href="#projects" className="classic-btn classic-btn-primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href={profile.resume} download className="classic-btn classic-btn-ghost">
              <Download className="w-4 h-4" /> Resume
            </a>
            <a href="#contact" className="classic-btn classic-btn-ghost">
              <Mail className="w-4 h-4" /> Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-4 mt-8"
          >
            <a
              aria-label="GitHub"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-orange-400/50 hover:text-orange-300 transition"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-orange-400/50 hover:text-orange-300 transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              aria-label="Email"
              href={`mailto:${profile.email}`}
              className="p-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-orange-400/50 hover:text-orange-300 transition"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="ml-2 text-xs uppercase tracking-[0.2em] text-white/35">
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <ClassicHeroGraphic />
        </motion.div>
      </div>
    </section>
  );
}
