import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-bg-soft/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60 font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            aria-label="GitHub"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            aria-label="LinkedIn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            aria-label="Email"
            href={`mailto:${profile.email}`}
            className="p-2 rounded-md border border-white/10 hover:border-cyan-400/60 hover:text-cyan-300 transition"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-white/50 font-mono flex items-center gap-1.5">
          Built with <span className="neon-text font-semibold">Next.js</span>,{" "}
          <span className="neon-text font-semibold">Tailwind</span>, and deployed on{" "}
          <span className="neon-text font-semibold">Vercel</span>{" "}
          <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
        </p>
      </div>
    </footer>
  );
}
