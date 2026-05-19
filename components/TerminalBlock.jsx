"use client";

import { useEffect, useState } from "react";

export default function TerminalBlock({
  title = "mahanth@devops:~",
  lines = [],
  typingSpeed = 28,
  className = "",
}) {
  const [rendered, setRendered] = useState([]);
  const [typing, setTyping] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx];
    if (charIdx <= current.text.length) {
      const t = setTimeout(() => {
        setTyping(current.text.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, current.delay ?? typingSpeed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setRendered((r) => [...r, current]);
      setTyping("");
      setCharIdx(0);
      setLineIdx((i) => i + 1);
    }, 400);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines, typingSpeed]);

  return (
    <div className={`terminal w-full max-w-xl ${className}`}>
      <div className="terminal-header px-4 py-3 flex items-center gap-2">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="ml-3 text-xs font-mono text-white/50">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[220px]">
        {rendered.map((l, i) => (
          <Line key={i} line={l} />
        ))}
        {lineIdx < lines.length && (
          <Line line={{ ...lines[lineIdx], text: typing }} active />
        )}
        {lineIdx >= lines.length && (
          <div className="text-cyan-300/80">
            <span className="text-emerald-400">➜</span>{" "}
            <span className="text-cyan-300">~</span>{" "}
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

function Line({ line, active }) {
  if (line.type === "output") {
    return (
      <div className="text-white/75 pl-4">
        {line.text}
        {active && <span className="cursor" />}
      </div>
    );
  }
  return (
    <div className="flex gap-2">
      <span className="text-emerald-400">➜</span>
      <span className="text-cyan-300">~</span>
      <span className="text-white/90">
        {line.text}
        {active && <span className="cursor" />}
      </span>
    </div>
  );
}
