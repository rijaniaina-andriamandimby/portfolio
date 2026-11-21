import { Calendar, CheckCircle2, GraduationCap, Languages, Laptop, Loader2, School, Award, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { ui } from "./ui";

type Step = { icon: LucideIcon; level: string; major: boolean; title: string; school: string; period: string; status: "In progress" | "Completed" | "Certified" };

// Most recent first. "major" = university degrees (larger node on the axis).
const steps: Step[] = [
  { icon: GraduationCap, level: "Master's degree", major: true, title: "Professional Master's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "Ongoing", status: "In progress" },
  { icon: GraduationCap, level: "Bachelor's degree", major: true, title: "Professional Bachelor's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "2022 – 2025", status: "Completed" },
  { icon: Laptop, level: "Training certificate", major: false, title: "Office Software & Graphic Design", school: "Antohomadinika Professional Training Institute", period: "October 2022", status: "Certified" },
  { icon: Languages, level: "Training certificate", major: false, title: "English Language Training", school: "Madagascar Professional Training Center, Andranomena", period: "Jan – Aug 2022", status: "Certified" },
  { icon: School, level: "High school diploma", major: true, title: "Baccalaureate, Series C", school: "Notre Dame de l'Assomption Catholic High School, Mahitsy", period: "2020 – 2021", status: "Completed" },
];

const statusIcon = { "In progress": Loader2, Completed: CheckCircle2, Certified: Award } as const;

export default function Education() {
  return (
    <section id="education" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={GraduationCap} num="03" label="Education" title="Academic background" />
        <ol className="relative flex flex-col gap-8 before:absolute before:inset-y-0 before:left-5 before:w-px before:-translate-x-1/2 before:bg-line md:gap-10 md:before:left-1/2">
          {steps.map((s, i) => {
            const left = i % 2 === 0; // alternate sides on desktop
            const Status = statusIcon[s.status];
            const done = s.status !== "In progress";
            return (
              <Reveal as="li" key={s.title} from={left ? "left" : "right"} className={`relative pl-14 md:w-1/2 md:pl-0 ${left ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"}`}>
                {/* node on the axis */}
                <span className={`absolute top-5 left-5 grid -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-bg text-accent ${s.major ? "size-10" : "size-7"} ${left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0"}`}>
                  <s.icon size={s.major ? 18 : 14} aria-hidden />
                </span>
                <article className={`${ui.card} group`}>
                  <div className={ui.topLine} />
                  <div className={`${ui.row} mb-3 justify-between ${left ? "md:flex-row-reverse" : ""}`}>
                    <span className={`${ui.label} text-accent`}>{s.level}</span>
                    <span className={`${ui.label} inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 ${done ? "border-line text-muted" : "border-accent bg-accent text-bg"}`}>
                      <Status size={12} className={s.status === "In progress" ? "animate-spin" : ""} aria-hidden />{s.status}
                    </span>
                  </div>
                  <h3 className={`${ui.h3} mb-1`}>{s.title}</h3>
                  <p className={`${ui.text} mb-3`}>{s.school}</p>
                  <p className={`${ui.small} flex items-center gap-1.5 ${left ? "md:justify-end" : ""}`}><Calendar size={13} aria-hidden />{s.period}</p>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
