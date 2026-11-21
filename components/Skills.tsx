import { Languages, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { techIcon } from "./techIcons";
import { ui } from "./ui";

const skills = [
  { category: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["ReactJS", "NextJS"] },
  { category: "Backend", items: ["NodeJS", "ExpressJS", "Django", "NestJS (basics)", "FastAPI (basics)"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL"] },
  { category: "DevOps & Tools", items: ["Git", "Docker"] },
];
const spoken = [{ lang: "French", level: "B2", pct: 72 }, { lang: "English", level: "B1", pct: 55 }, { lang: "Malagasy", level: "Native", pct: 100 }];

export default function Skills() {
  return (
    <section id="skills" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={Wrench} num="01" label="Skills" title="Technical stack" />
        <div className={`${ui.grid} mb-16`}>
          {skills.map((g) => (
            <div key={g.category} className={`${ui.card} group`}>
              <div className={ui.topLine} />
              <h3 className={`${ui.h3} mb-4`}>{g.category}</h3>
              <div className={ui.row}>
                {g.items.map((t) => { const I = techIcon(t); return <span key={t} className={ui.tag}><I size={14} className="text-accent" aria-hidden />{t}</span>; })}
              </div>
            </div>
          ))}
        </div>
        <h3 className={`${ui.h3} mb-5 flex items-center gap-2.5`}><Languages size={20} className="text-accent" aria-hidden />Languages spoken</h3>
        <div className={ui.grid}>
          {spoken.map((l) => (
            <div key={l.lang} className={`${ui.card} group`}>
              <div className={ui.topLine} />
              <div className="mb-3 flex justify-between"><span className={ui.h3}>{l.lang}</span><span className={ui.small}>{l.level}</span></div>
              <div className="h-1 rounded-sm bg-line"><div className="h-full rounded-sm bg-accent" style={{ width: `${l.pct}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
