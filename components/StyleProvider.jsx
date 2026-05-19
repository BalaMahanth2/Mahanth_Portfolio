"use client";

import { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-style";
const DEFAULT_STYLE = "classic"; // Classic is the default landing experience.

const StyleContext = createContext({
  style: DEFAULT_STYLE,
  setStyle: () => {},
  mounted: false,
});

export function StyleProvider({ children }) {
  const [style, setStyleState] = useState(DEFAULT_STYLE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "classic" || saved === "custom") setStyleState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, style);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-style", style);
      document.body?.classList.toggle("classic-body", style === "classic");
    }
  }, [style, mounted]);

  const setStyle = (next) =>
    setStyleState(next === "custom" ? "custom" : "classic");

  return (
    <StyleContext.Provider value={{ style, setStyle, mounted }}>
      {children}
    </StyleContext.Provider>
  );
}

export const useStyle = () => useContext(StyleContext);
