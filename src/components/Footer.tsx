"use client";

import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  AtSign,
  Music,
  BarChart3
} from "lucide-react";
import { DATA } from "@/lib/data";
import { VisitorCounter } from "@/components/VisitorCounter";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Lado Esquerdo: Identidade */}
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {/* Adicionado o span com o ponto azul aqui */}
            {DATA.profile.name}<span className="text-blue-600">.</span>
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Portfolio & CV
          </p>
          <p className="text-xs text-zinc-400 max-w-xs">
            Desenvolvimento Web • Implantação ERP • Suporte Técnico
          </p>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/rafaelmaciels"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialLink
            href="https://github.com/rafaelmaciels"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
          />
          <SocialLink
            href="https://x.com/rafaelost"
            icon={<Twitter className="w-5 h-5" />}
            label="X (Twitter)"
          />
          <SocialLink
            href="https://instagram.com/rafaelost"
            icon={<Instagram className="w-5 h-5" />}
            label="Instagram"
          />
          <SocialLink
            href="https://www.threads.net/@rafaelost"
            icon={<AtSign className="w-5 h-5" />}
            label="Threads"
          />
          <SocialLink
            href="https://open.spotify.com/user/113326465"
            icon={<Music className="w-5 h-5" />}
            label="Spotify"
          />
          <SocialLink
            href="https://stats.fm/rafaelmaciel"
            icon={<BarChart3 className="w-5 h-5" />}
            label="Stats.fm"
          />
        </div>
      </div>

      {/* Linha Inferior: Copyright + Contador */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-900 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
        <p>
          © {new Date().getFullYear()} {DATA.profile.name}. Todos os direitos reservados.
        </p>

        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <p>
            Construído com <span className="text-zinc-600 dark:text-zinc-300 font-medium">Next.js</span> e <span className="text-zinc-600 dark:text-zinc-300 font-medium">Tailwind CSS</span>.
          </p>
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
      aria-label={label}
    >
      {icon}
    </a>
  );
}