"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-950 backdrop-blur-xl transition-all hover:scale-105 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
      aria-label="Alternar tema"
    >
      <span className="sr-only">Alternar tema</span>
      {theme === "dark" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
    </motion.button>
  );
}
