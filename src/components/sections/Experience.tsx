"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { DATA } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Cabeçalho da Seção */}
        <div className="mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Trajetória Profissional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl"
          >
            Uma evolução constante: do atendimento ao cliente à implantação de sistemas complexos.
          </motion.p>
        </div>

        {/* Linha do Tempo */}
        <div className="relative space-y-12">
          {/* Linha Vertical Conectora (Background) */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-zinc-800 md:left-1/2 md:-ml-0.5 hidden md:block" />

          {DATA.experience.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Subcomponente do Item da Timeline
function TimelineItem({ item, index }: { item: typeof DATA.experience[0]; index: number }) {
  // Alternar lados apenas no desktop (par/ímpar)
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Marcador Central (Bolinha da linha do tempo) */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-zinc-950 bg-blue-600 dark:bg-blue-500 z-10 -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-6 shadow-sm" />

      {/* Conteúdo (Card) */}
      <div className={`flex-1 ml-12 md:ml-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <div className="space-y-3 group">
          {/* Header do Card */}
          <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"}`}>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              {item.period}
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {item.role}
            </h3>
            <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">
              {item.company}
            </p>
          </div>

          {/* Descrição Principal */}
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
            {item.description}
          </p>

          {/* Lista de Conquistas (Achievements) */}
          <ul className={`space-y-2 mt-4 ${isEven ? "md:items-end" : "md:items-start"} flex flex-col`}>
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400 ${
                  isEven ? "md:flex-row-reverse md:text-right" : "flex-row"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-zinc-400 dark:text-zinc-600 mt-0.5 shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Espaço Vazio para manter o alinhamento central no desktop */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}