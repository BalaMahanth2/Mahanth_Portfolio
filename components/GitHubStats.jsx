"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { githubUsername, profile } from "@/lib/data";

export default function GitHubStats() {
  const user = githubUsername;

  return (
    <section id="github" className="section">
      <div className="container-x">
        <SectionTitle
          kicker="// open-source"
          title="GitHub Activity"
          subtitle="Live stats — contributions, streaks, and the languages I reach for most."
        />

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub Stats"
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=0F1729&title_color=22D3EE&icon_color=A855F7&text_color=E5E7EB&ring_color=22D3EE`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-xl p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub Streak"
              loading="lazy"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=0F1729&stroke=0F1729&ring=22D3EE&fire=A855F7&currStreakLabel=22D3EE&sideLabels=E5E7EB&dates=E5E7EB&sideNums=E5E7EB&currStreakNum=E5E7EB`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass rounded-xl p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Top Languages"
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=0F1729&title_color=22D3EE&text_color=E5E7EB&langs_count=8`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-cyan-300 mb-2">
                <Github className="w-5 h-5" />
                <h3 className="font-mono text-sm">contribution heatmap</h3>
              </div>
              <p className="text-xs text-white/55 mb-4 leading-relaxed">
                A year of green squares — proof that consistency beats intensity
                when learning infra.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub contribution chart"
              loading="lazy"
              src={`https://ghchart.rshah.org/22d3ee/${user}`}
              className="w-full rounded-md bg-white/[0.02] p-3"
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-cyan-200"
            >
              <Github className="w-3.5 h-3.5" /> github.com/{user}
            </a>
          </motion.div>
        </div>

        <p className="mt-6 text-center text-[11px] font-mono text-white/40">
          stats refresh from github via public widgets — first load may take a moment
        </p>
      </div>
    </section>
  );
}
