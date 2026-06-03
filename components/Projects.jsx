"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, FolderGit2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// projects"
          title="Selected Work"
          subtitle="Production tools, infra experiments, and learning labs — all open-source and shipped."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -6 }}
              className="group relative glass glass-hover rounded-xl p-5 flex flex-col overflow-hidden"
            >
              <div
                className={`absolute -inset-px rounded-xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition pointer-events-none`}
                style={{ filter: "blur(24px)" }}
              />

              <div className="relative flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-lg grid place-items-center bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 group-hover:shadow-neon transition">
                  <FolderGit2 className="w-5 h-5 text-cyan-300" />
                </div>
                <div className="flex items-center gap-2">
                  {p.docs && (
                    <a
                      aria-label="Documentation"
                      href={p.docs}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md border border-white/10 text-white/70 hover:text-cyan-300 hover:border-cyan-400/60 transition"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      aria-label="Live demo"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-md border border-white/10 text-white/70 hover:text-cyan-300 hover:border-cyan-400/60 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="relative text-lg font-semibold text-white/95 mb-2 group-hover:text-cyan-200 transition">
                {p.title}
              </h3>
              <p className="relative text-sm text-white/65 leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="relative flex flex-wrap gap-1.5 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="relative mt-5 flex gap-2">
                <a
                  href={p.docs || "#"}
                  target={p.docs ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-disabled={!p.docs}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono transition ${
                    p.docs
                      ? "border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300"
                      : "border border-white/10 text-white/40 cursor-not-allowed"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" /> {p.docs ? "Docs" : "Soon"}
                </a>
                <a
                  href={p.demo || "#"}
                  target={p.demo ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-disabled={!p.demo}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono transition ${
                    p.demo
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-neon-strong"
                      : "border border-white/10 text-white/40 cursor-not-allowed"
                  }`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  {p.demo ? "Demo" : "Soon"}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
