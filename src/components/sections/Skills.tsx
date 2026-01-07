"use client";

import { DATA } from "@/lib/data";
import { Code2, Terminal, Users } from "lucide-react";

export function Skills() {
  return (
    <section id="habilidades" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Competências
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Uma visão geral das minhas habilidades técnicas, ferramentas do dia a dia e competências comportamentais.
          </p>
        </div>

        {/* Grid de 3 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* COLUNA 1: Tecnologias (Hard Skills) */}
          <SkillCard 
            title="Tecnologias (Hard Skills)"
            icon={<Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
            skills={DATA.skills.hard}
            delay={0}
          />

          {/* COLUNA 2: Ferramentas & SO */}
          <SkillCard 
            title="Ferramentas & SO"
            icon={<Terminal className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
            skills={DATA.skills.tools}
            delay={100}
          />

          {/* COLUNA 3: Soft Skills */}
          <SkillCard 
            title="Soft Skills"
            icon={<Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            skills={DATA.skills.soft}
            delay={200}
          />

        </div>
      </div>
    </section>
  );
}

// Componente do Card Individual (Reutilizável)
function SkillCard({ 
  title, 
  icon, 
  skills, 
  delay 
}: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[];
  delay: number;
}) {
  return (
    <div 
      className="h-full flex flex-col bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-100 dark:border-zinc-800">
          {icon}
        </div>
        <h3 className="font-semibold text-lg tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}