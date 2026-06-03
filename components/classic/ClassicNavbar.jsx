"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

// Floating switcher is ~200px wide on desktop, ~90px on mobile (icon-only).
// Reserve right padding so navbar items don't sit beneath it.
const SWITCHER_DESKTOP = 220;
const SWITCHER_MOBILE = 110;

export default function ClassicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Detect which section is currently in view to highlight the nav link.
      const offset = window.innerHeight * 0.35;
      let current = "#home";
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = link.href;
      }
      setActive(current);
    };
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
          ? "bg-[#0b0f19]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto h-16 flex items-center justify-between pl-5 pr-4 sm:pl-6 sm:pr-6"
        style={{ paddingRight: undefined }}
      >
        {/* Brand — clean, single-line, no awkward splits */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 shrink-0"
          aria-label={`${profile.name} — home`}
        >
          <span
            className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 text-white font-bold text-sm shadow-[0_0_18px_rgba(251,146,60,0.35)] group-hover:scale-105 transition"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            M
          </span>
          <span
            className="hidden sm:flex flex-col leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Mahanth<span className="text-orange-400">.</span>
            </span>
            <span className="text-[10px] tracking-[0.18em] uppercase text-white/40 mt-1">
              Pipeline · DevOps
            </span>
          </span>
        </a>

        {/* Desktop nav — centered, well-spaced */}
        <ul className="hidden md:flex items-center gap-0.5 mx-4 flex-1 justify-center">
          {navLinks.map((l, i) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`group relative px-3 py-2 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    isActive ? "text-orange-400" : "text-white/65 hover:text-white"
                  }`}
                >
                  <span className={`mr-1 ${isActive ? "text-orange-400" : "text-orange-400/70"}`}>
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {l.label}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-orange-400 to-red-500 origin-left transition-transform ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop right-side spacer — reserve clearance for floating switcher */}
        <div
          className="hidden md:block shrink-0"
          style={{ paddingRight: `${SWITCHER_DESKTOP}px` }}
          aria-hidden="true"
        />

        {/* Mobile menu trigger — also reserve clearance */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md border border-white/10 text-white/80"
          onClick={() => setOpen((v) => !v)}
          style={{ marginRight: `${SWITCHER_MOBILE}px` }}
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
              {navLinks.map((l, i) => {
                const isActive = active === l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-md text-sm hover:bg-white/[0.04] ${
                        isActive ? "text-orange-400" : "text-white/80 hover:text-orange-300"
                      }`}
                    >
                      <span className="text-orange-400/80 mr-1.5">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
