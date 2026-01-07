"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star, GitFork, Code2 } from "lucide-react";
import { getRepos, Repo } from "@/lib/github";

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getRepos();
      setRepos(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
          >
            Projetos em Destaque
          </motion.h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Explorações em código, estudos de caso e soluções reais extraídas do meu GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Skeleton Loading (enquanto carrega)
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-48 rounded-xl bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
            ))
          ) : (
            repos.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))
          )}
        </div>
        
        {/* Botão Ver Mais no GitHub */}
        <div className="mt-12 text-center">
            <a 
                href="https://github.com/rafaelmaciels" 
                target="_blank" 
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 transition-colors"
            >
                <Github className="w-4 h-4" />
                Ver todos os repositórios
            </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ repo, index }: { repo: Repo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col justify-between p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex gap-3">
             {repo.homepage && (
                <a href={repo.homepage} target="_blank" aria-label="Demo" className="text-zinc-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                </a>
             )}
             <a href={repo.html_url} target="_blank" aria-label="GitHub Repo" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2 line-clamp-1">
          {repo.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3 leading-relaxed">
          {repo.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-900 text-xs font-medium text-zinc-500">
        <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {repo.language || "Código"}
        </span>
        {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                {repo.stargazers_count}
            </span>
        )}
      </div>
    </motion.div>
  );
}