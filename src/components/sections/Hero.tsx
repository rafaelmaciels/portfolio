"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, ChevronRight, Mail, Linkedin, Github } from "lucide-react";
import { DATA } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % DATA.profile.headline.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna de Texto */}
        <div className="space-y-8 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium w-fit border border-blue-200 dark:border-blue-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              Olá, eu sou <br />
              {DATA.profile.name}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </motion.h1>

            <div className="h-8 md:h-12 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute text-xl md:text-2xl font-mono text-zinc-600 dark:text-zinc-400"
                >
                  {DATA.profile.headline[index]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-lg text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {DATA.about.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="/api/download-cv"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-medium transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 shadow-lg shadow-zinc-500/20"
            >
              <ArrowDownToLine className="w-4 h-4" />
              Baixar Currículo
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 active:scale-95"
            >
              Ver Projetos
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

           <div className="flex gap-6 pt-4">
              <SocialLink href={DATA.profile.linkedin} icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="https://github.com/rafaelmaciels" icon={<Github className="w-5 h-5" />} />
              <SocialLink href={`mailto:${DATA.profile.email}`} icon={<Mail className="w-5 h-5" />} />
           </div>
        </div>

        {/* Coluna da Imagem */}
        <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
  className="order-1 md:order-2 flex justify-center md:justify-end"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl overflow-hidden">
    <Image 
      src="https://raw.githubusercontent.com/rafaelmaciels/portfolio/master/public/profile.jpg"
      alt="Foto de Rafael Maciel"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
}
