import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import { DATA } from "@/lib/data";

const PHONE_NUMBER = "(83) 98799-4005";

export default function CurriculoPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 md:px-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao portfólio
          </Link>
          <a
            href={`mailto:${DATA.profile.email}`}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Entrar em contato
          </a>
        </div>

        <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="space-y-3 border-b border-zinc-200 pb-6 dark:border-zinc-800">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{DATA.profile.name}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">{DATA.profile.role}</p>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {DATA.profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {DATA.profile.email}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </span>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            <Section title="Resumo Profissional">
              <p className="leading-7 text-zinc-600 dark:text-zinc-400">{DATA.about.bio}</p>
            </Section>

            <Section title="Habilidades">
              <div className="flex flex-wrap gap-2">
                {[...DATA.skills.hard, ...DATA.skills.tools, ...DATA.skills.soft].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Section>

            <Section title="Experiência Profissional">
              <div className="space-y-6">
                {DATA.experience.map((item) => (
                  <article key={`${item.company}-${item.role}`} className="space-y-2">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h2 className="text-lg font-semibold">{item.role}</h2>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</span>
                    </div>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{item.company}</p>
                    <p className="leading-7 text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    <ul className="space-y-2 pl-5 text-sm text-zinc-600 marker:text-blue-500 dark:text-zinc-400">
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Formação">
              <div className="space-y-4">
                {DATA.education.map((item) => (
                  <article key={`${item.institution}-${item.course}`} className="space-y-1">
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                      <h2 className="text-lg font-semibold">{item.course}</h2>
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">{item.period}</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.institution} • {item.status}
                    </p>
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Certificações">
              <div className="grid gap-3 md:grid-cols-2">
                {DATA.certifications.map((item) => (
                  <article
                    key={`${item.name}-${item.date}`}
                    className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.institution} • {item.date}
                    </p>
                  </article>
                ))}
              </div>
            </Section>
          </div>
        </section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
