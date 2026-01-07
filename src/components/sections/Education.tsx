"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { DATA } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-12"
        >
          Formação & Certificados
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Graduação */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Acadêmico</h3>
            </div>
            <div className="space-y-8">
              {DATA.education.map((edu, i) => (
                <div key={i} className="pl-4 border-l-2 border-zinc-100 dark:border-zinc-800">
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-50">{edu.course}</h4>
                  <p className="text-sm text-zinc-500 mt-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-zinc-400 mt-1">{edu.period}</p>
                  
                  {edu.specifics && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.specifics.map((cert, index) => (
                        <a
                          key={index}
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {cert.name}
                          <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-50" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certificações */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-blue-600 dark:text-blue-400">
              <Award className="w-6 h-6" />
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Certificações</h3>
            </div>
            <div className="grid gap-3">
              {DATA.certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-blue-900 transition-colors group"
                >
                  <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600">
                    {cert.name}
                  </span>
                  <span className="text-xs text-zinc-400 bg-zinc-200 dark:bg-zinc-800 px-2 py-0.5 rounded">
                    {cert.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}