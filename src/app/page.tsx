/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // outras opções...
};

module.exports = nextConfig; // <--- O erro está aqui
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // outras opções...
};

export default nextConfig; // <--- Use export default
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 selection:bg-blue-100 dark:selection:bg-blue-900/30">
      {/* Menu Fixo (Navbar com Hamburguer) */}
      <Navbar />
      
      {/* Conteúdo Principal */}
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      
      {/* Rodapé Dedicado */}
      <Footer />
    </main>
  );
}