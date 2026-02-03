"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { DATA } from "@/lib/data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiência", href: "#experience" },
    { name: "Formação", href: "#education" },
    { name: "Projetos", href: "#projects" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link
          href="#"
          className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          {DATA.profile.shortName}<span className="text-blue-600">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://rafaelmaciel.net/blog"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
          >
            Blog <ExternalLink className="w-3 h-3" />
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-zinc-600 dark:text-zinc-400"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://rafaelmaciel.net/blog"
            target="_blank"
            className="text-lg font-medium text-blue-600 dark:text-blue-400"
          >
            Acessar Blog
          </a>
        </div>
      )}
    </header>
  );
}
