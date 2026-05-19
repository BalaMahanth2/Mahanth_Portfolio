"use client";

import { Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useStyle } from "./StyleProvider";

export default function StyleSwitcher() {
  const { style, setStyle } = useStyle();

  return (
    <div
      role="group"
      aria-label="Design style switcher"
      className="relative inline-flex items-center p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg shadow-black/40"
    >
      <motion.span
        aria-hidden
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_18px_rgba(34,211,238,0.45)]"
        style={{
          width: "calc(50% - 4px)",
          left: style === "custom" ? "4px" : "calc(50%)",
        }}
      />
      <Button
        active={style === "custom"}
        onClick={() => setStyle("custom")}
        Icon={Sparkles}
        title="Custom — terminal DevOps aesthetic"
      >
        Custom
      </Button>
      <Button
        active={style === "classic"}
        onClick={() => setStyle("classic")}
        Icon={FileText}
        title="Classic — premium developer portfolio"
      >
        Classic
      </Button>
    </div>
  );
}

function Button({ active, onClick, children, Icon, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-pressed={active}
      className={`relative z-10 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
        active ? "text-white" : "text-white/55 hover:text-white/80"
      }`}
    >
      <Icon className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">{children}</span>
    </button>
  );
}
