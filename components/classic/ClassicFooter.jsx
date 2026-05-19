import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/lib/data";

export default function ClassicFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0b0f19]/60 backdrop-blur-md z-[1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-white/10 text-white/65 hover:text-cyan-300 hover:border-cyan-400/50 transition"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full border border-white/10 text-white/65 hover:text-cyan-300 hover:border-cyan-400/50 transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="p-2 rounded-full border border-white/10 text-white/65 hover:text-cyan-300 hover:border-cyan-400/50 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-white/40 flex items-center gap-1.5">
          Built with <span className="classic-grad-text font-semibold">Next.js</span> ·{" "}
          <span className="classic-grad-text font-semibold">Tailwind</span> ·{" "}
          <span className="classic-grad-text font-semibold">Vercel</span>{" "}
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </p>
      </div>
    </footer>
  );
}
