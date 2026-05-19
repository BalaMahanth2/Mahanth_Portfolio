"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export default function ClassicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f19]/75 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-base font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="classic-grad-text">Mahanth</span>
          <span className="text-white/30">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/65 hover:text-white transition-colors"
              >
                <span className="text-cyan-400/80 mr-1">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                {l.label}
                <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 mr-[210px]">
          <a
            href={profile.resume}
            download
            className="classic-btn classic-btn-ghost text-xs px-4 py-2"
          >
            <Download className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md border border-white/10 text-white/80 mr-[120px]"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#0b0f19]/95 backdrop-blur-xl border-t border-white/10"
          >
            <ul className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm text-white/80 hover:text-cyan-300 hover:bg-white/[0.04]"
                  >
                    <span className="text-cyan-400/80 mr-1.5">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={profile.resume}
                  download
                  onClick={() => setOpen(false)}
                  className="classic-btn classic-btn-primary w-full justify-center"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
