"use client";
import { Code2, Cpu, Database, GitBranch, Languages, Monitor, Server } from "lucide-react";
import { useT } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import TechIcon from "./TechIcon";
import Reveal, { GrowBar } from "./Reveal";
import { ui } from "./ui";

const skills = [
  { key: "languages", icon: Code2, items: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin"] },
  { key: "frontend", icon: Monitor, items: ["ReactJS", "NextJS"] },
  { key: "backend", icon: Server, items: ["NodeJS", "ExpressJS", "Django", "NestJS (basics)", "FastAPI (basics)"] },
  { key: "databases", icon: Database, items: ["PostgreSQL", "MySQL"] },
  { key: "devops", icon: GitBranch, items: ["Git", "Docker", "Jenkins", "GitHub Actions", "CI/CD Pipelines"] },
] as const;
const spoken = [{ key: "fr", level: "B2", pct: 72 }, { key: "en", level: "B1", pct: 55 }, { key: "mg", level: "", pct: 100 }] as const;

export default function Skills() {
  const { t } = useT();
  return (
    <section id="skills" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={Cpu} num="01" label={t.skills.label} title={t.skills.title} />
        <div className="mb-14 grid gap-5 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.key} delay={(i % 2) * 100} className={i === skills.length - 1 && skills.length % 2 ? "md:col-span-2" : ""}>
              <div className={`${ui.card} group h-full !p-5`}>
                <div className={ui.topLine} />
                <h3 className={`${ui.label} mb-3 flex items-center gap-2 text-accent`}><g.icon size={15} aria-hidden />{t.skills.cats[g.key]}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((n) => (
                    <li key={n} className="flex items-center gap-2 rounded-sm border border-line bg-bg px-3 py-1.5 text-[.82rem] font-medium transition hover:border-accent">
                      <TechIcon name={n} size={20} />
                      {n.replace(" (basics)", "")}
                      {n.includes("basics") && <span className={ui.small}>· {t.skills.basics}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <h3 className={`${ui.h3} mb-5 flex items-center gap-2.5`}><Languages size={20} className="text-accent" aria-hidden />{t.skills.spokenTitle}</h3>
        <div className={ui.grid}>
          {spoken.map((l, i) => (
            <Reveal key={l.key} delay={i * 100}>
              <div className={`${ui.card} group`}>
                <div className={ui.topLine} />
                <div className="mb-3 flex justify-between"><span className={ui.h3}>{t.skills.spoken[l.key]}</span><span className={ui.small}>{l.level || t.skills.native}</span></div>
                <GrowBar pct={l.pct} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
