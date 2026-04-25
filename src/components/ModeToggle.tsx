"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const buttonClassName = isDark
    ? "inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/12"
    : "inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200/90 bg-white/72 text-zinc-950 shadow-[0_10px_30px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition-all hover:scale-105 hover:bg-white/88";

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={buttonClassName}
      aria-label="Alternar tema"
    >
      <span className="sr-only">Alternar tema</span>
      {resolvedTheme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </motion.button>
  );
}
