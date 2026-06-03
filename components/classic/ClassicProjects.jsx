"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Container,
  Cloud,
  Server,
  Terminal,
  Workflow,
  Boxes,
  GitBranch,
  Activity,
  Film,
} from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { projects } from "@/lib/data";

// Pick an icon based on the project's tech keywords.
const ICON_HINTS = [
  { match: /docker|container/i, Icon: Container },
  { match: /kubernetes|k8s|k3s/i, Icon: Boxes },
  { match: /aws|cloud/i, Icon: Cloud },
  { match: /nginx|reverse proxy/i, Icon: Server },
  { match: /ansible|bash|linux/i, Icon: Terminal },
  { match: /github actions|ci\/cd|jenkins/i, Icon: Workflow },
  { match: /grafana|prometheus|monitor/i, Icon: Activity },
  { match: /pipeline|ayon|houdini|vfx/i, Icon: Film },
  { match: /python|script/i, Icon: GitBranch },
];

function pickIcon(project) {
  const blob = `${project.title} ${project.tech.join(" ")}`;
  for (const { match, Icon } of ICON_HINTS) {
    if (match.test(blob)) return Icon;
  }
  return Container;
}

export default function ClassicProjects() {
  return (
    <section id="projects" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="03."
          kicker="Projects"
          title="Things I've built"
          subtitle="Production tools, infra experiments, and labs — every one of them open-source."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = pickIcon(p);
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group classic-card-glow flex flex-col overflow-hidden"
              >
                {/* Preview area */}
                <div className="relative h-40 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60`} />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 grid place-items-center text-orange-200 shadow-[0_0_30px_rgba(251,146,60,0.40)] group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b0f19] to-transparent" />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      className="text-base font-semibold text-white group-hover:text-orange-300 transition leading-snug"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {p.docs && (
                        <a
                          aria-label="Documentation"
                          href={p.docs}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-md text-white/55 hover:text-orange-300 hover:bg-white/[0.05] transition"
                        >
                          <FileText className="w-4 h-4" />
                        </a>
                      )}
                      {p.demo && (
                        <a
                          aria-label="Demo"
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-md text-white/55 hover:text-orange-300 hover:bg-white/[0.05] transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-white/55 leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t} className="classic-chip">
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 4 && (
                      <span className="classic-chip">+{p.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
