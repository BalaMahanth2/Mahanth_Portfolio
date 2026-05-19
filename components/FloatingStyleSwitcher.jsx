"use client";

import { motion } from "framer-motion";
import StyleSwitcher from "./StyleSwitcher";

export default function FloatingStyleSwitcher() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-3 right-3 sm:top-4 sm:right-4 z-[60]"
    >
      <StyleSwitcher />
    </motion.div>
  );
}
