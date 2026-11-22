"use client";
import { Calendar, CheckCircle2, GraduationCap, Languages, Laptop, Loader2, School, Award, type LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { ui } from "./ui";

type Status = "progress" | "completed" | "certified";
type Level = "master" | "bachelor" | "certificate" | "highschool";
type Key = "master" | "bachelor" | "office" | "english" | "bac";

// Most recent first. "major" = degrees (larger node on the axis).
const steps: { key: Key; icon: LucideIcon; level: Level; major: boolean; status: Status }[] = [
  { key: "master", icon: GraduationCap, level: "master", major: true, status: "progress" },
  { key: "bachelor", icon: GraduationCap, level: "bachelor", major: true, status: "completed" },
  { key: "office", icon: Laptop, level: "certificate", major: false, status: "certified" },
  { key: "english", icon: Languages, level: "certificate", major: false, status: "certified" },
  { key: "bac", icon: School, level: "highschool", major: true, status: "completed" },
];
const statusIcon = { progress: Loader2, completed: CheckCircle2, certified: Award } as const;

export default function Education() {
  const { t } = useT();
  return (
    <section id="education" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={GraduationCap} num="03" label={t.education.label} title={t.education.title} />
        <ol className="relative flex flex-col gap-8 before:absolute before:inset-y-0 before:left-5 before:w-px before:-translate-x-1/2 before:bg-line md:gap-10 md:before:left-1/2">
          {steps.map((s, i) => {
            const left = i % 2 === 0; // alternate sides on desktop
            const Status = statusIcon[s.status];
            const item = t.education.items[s.key];
            return (
              <Reveal as="li" key={s.key} from={left ? "left" : "right"} className={`relative pl-14 md:w-1/2 md:pl-0 ${left ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"}`}>
                <span className={`absolute left-5 top-5 grid -translate-x-1/2 place-items-center rounded-full border-2 border-accent bg-bg text-accent ${s.major ? "size-10" : "size-7"} ${left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0"}`}>
                  <s.icon size={s.major ? 18 : 14} aria-hidden />
                </span>
                <article className={`${ui.card} group`}>
                  <div className={ui.topLine} />
                  <div className={`${ui.row} mb-3 justify-between ${left ? "md:flex-row-reverse" : ""}`}>
                    <span className={`${ui.label} text-accent`}>{t.education.levels[s.level]}</span>
                    <span className={`${ui.label} inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 ${s.status === "progress" ? "border-accent bg-accent text-bg" : "border-line text-muted"}`}>
                      <Status size={12} className={s.status === "progress" ? "animate-spin" : ""} aria-hidden />{t.education.status[s.status]}
                    </span>
                  </div>
                  <h3 className={`${ui.h3} mb-1`}>{item.title}</h3>
                  <p className={`${ui.text} mb-3`}>{item.school}</p>
                  <p className={`${ui.small} flex items-center gap-1.5 ${left ? "md:justify-end" : ""}`}><Calendar size={13} aria-hidden />{item.period}</p>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
