"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const links = [
  { name: "Sobre", href: "#about" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Experiência", href: "#experience" },
  { name: "Formação", href: "#education" },
  { name: "Projetos", href: "#projects" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || isOpen
          ? "border-zinc-200/80 bg-white/92 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/92"
          : "border-zinc-200/70 bg-white/88 backdrop-blur-xl dark:border-white/6 dark:bg-zinc-950/88"
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-[1920px] items-center justify-between gap-6 px-6 md:px-12">
        <Link
          href="/"
          className="hidden text-3xl font-bold tracking-tighter text-zinc-950 md:block dark:text-white"
        >
          RM<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-12 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[1.05rem] font-semibold text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-4 text-[1.05rem] font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/16"
          >
            Blog
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="hidden w-16 items-center justify-center md:flex">
          <ModeToggle />
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-zinc-950 dark:text-white"
            onClick={() => setIsOpen(false)}
          >
            RM<span className="text-blue-500">.</span>
          </Link>

          <div className="flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-950 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:text-white"
              aria-label="Alternar menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="border-t border-zinc-200/80 bg-white/96 px-4 pb-5 pt-4 dark:border-white/8 dark:bg-zinc-950/96 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-4 text-lg font-semibold text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-4 text-lg font-semibold text-white dark:bg-white/10"
              >
                Blog
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
