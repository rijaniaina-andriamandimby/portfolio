import { Code2, Cpu, Database, GitBranch, Languages, Monitor, Server } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TechIcon from "./TechIcon";
import Reveal, { GrowBar } from "./Reveal";
import { ui } from "./ui";

const skills = [
  { category: "Languages", icon: Code2, items: ["Python", "Java", "JavaScript", "TypeScript", "Kotlin"] },
  { category: "Frontend", icon: Monitor, items: ["ReactJS", "NextJS"] },
  { category: "Backend", icon: Server, items: ["NodeJS", "ExpressJS", "Django", "NestJS (basics)", "FastAPI (basics)"] },
  { category: "Databases", icon: Database, items: ["PostgreSQL", "MySQL"] },
  { category: "DevOps & CI/CD", icon: GitBranch, items: ["Git", "Docker", "Jenkins", "GitHub Actions", "CI/CD Pipelines"] },
];
const spoken = [{ lang: "French", level: "B2", pct: 72 }, { lang: "English", level: "B1", pct: 55 }, { lang: "Malagasy", level: "Native", pct: 100 }];

export default function Skills() {
  return (
    <section id="skills" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={Cpu} num="01" label="Skills" title="Technical stack" />
        <div className="mb-14 grid gap-5 md:grid-cols-2">
          {skills.map((g, i) => (
            <Reveal key={g.category} delay={(i % 2) * 100} className={i === skills.length - 1 && skills.length % 2 ? "md:col-span-2" : ""}>
            <div className={`${ui.card} group h-full !p-5`}>
              <div className={ui.topLine} />
              <h3 className={`${ui.label} mb-3 flex items-center gap-2 text-accent`}><g.icon size={15} aria-hidden />{g.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t} className="flex items-center gap-2 rounded-sm border border-line bg-bg px-3 py-1.5 text-[.82rem] font-medium transition hover:border-accent">
                    <TechIcon name={t} size={20} />
                    {t.replace(" (basics)", "")}
                    {t.includes("basics") && <span className={ui.small}>· basics</span>}
                  </li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
        <h3 className={`${ui.h3} mb-5 flex items-center gap-2.5`}><Languages size={20} className="text-accent" aria-hidden />Languages spoken</h3>
        <div className={ui.grid}>
          {spoken.map((l, i) => (
            <Reveal key={l.lang} delay={i * 100}>
            <div className={`${ui.card} group`}>
              <div className={ui.topLine} />
              <div className="mb-3 flex justify-between"><span className={ui.h3}>{l.lang}</span><span className={ui.small}>{l.level}</span></div>
              <GrowBar pct={l.pct} />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
