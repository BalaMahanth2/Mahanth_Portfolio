"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import ClassicSectionTitle from "./ClassicSectionTitle";
import { githubUsername, profile } from "@/lib/data";

export default function ClassicGitHubStats() {
  const user = githubUsername;

  return (
    <section id="github" className="classic-section">
      <div className="classic-container">
        <ClassicSectionTitle
          number="07."
          kicker="Open Source"
          title="GitHub activity"
          subtitle="Live stats — contributions, streaks, and the languages I reach for most."
        />

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="classic-glass p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub Stats"
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=FB923C&icon_color=EF4444&text_color=E2E8F0&ring_color=FB923C`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="classic-glass p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub Streak"
              loading="lazy"
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&stroke=00000000&ring=FB923C&fire=EF4444&currStreakLabel=FB923C&sideLabels=E2E8F0&dates=E2E8F0&sideNums=E2E8F0&currStreakNum=E2E8F0`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="classic-glass p-4 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Top Languages"
              loading="lazy"
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=FB923C&text_color=E2E8F0&langs_count=8`}
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="classic-glass p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-orange-300 mb-2">
                <Github className="w-5 h-5" />
                <h3
                  className="text-sm font-semibold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Contribution heatmap
                </h3>
              </div>
              <p className="text-xs text-white/50 mb-4 leading-relaxed">
                A year of green squares — consistency over intensity.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="GitHub contribution chart"
              loading="lazy"
              src={`https://ghchart.rshah.org/fb923c/${user}`}
              className="w-full rounded-md bg-white/[0.02] p-3 border border-white/5"
            />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs text-orange-300 hover:text-orange-200 self-start"
            >
              <Github className="w-3.5 h-3.5" /> github.com/{user}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
