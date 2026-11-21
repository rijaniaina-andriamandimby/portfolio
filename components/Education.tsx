import { BookOpen, Calendar, GraduationCap, Languages, Laptop, School } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { ui } from "./ui";

const items = [
  { icon: GraduationCap, title: "Professional Master's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "In progress", status: "In progress" },
  { icon: GraduationCap, title: "Professional Bachelor's in Software Engineering & Databases", school: "National School of Computer Science (ENI) – University of Fianarantsoa", period: "2022 – 2025", status: "Completed" },
  { icon: Languages, title: "English Language Training", school: "Madagascar Professional Training Center, Andranomena", period: "Jan – Aug 2022", status: "Certified" },
  { icon: Laptop, title: "Office Software & Graphic Design Training", school: "Antohomadinika Professional Training Institute", period: "October 2022", status: "Certified" },
  { icon: School, title: "Baccalaureate, Series C", school: "Notre Dame de l'Assomption Catholic High School, Mahitsy", period: "2020 – 2021", status: "Completed" },
];

export default function Education() {
  return (
    <section id="education" className={ui.sec}>
      <div className={ui.wrap}>
        <SectionHeader icon={BookOpen} num="03" label="Education" title="Academic background" />
        <div className="flex flex-col gap-4">
          {items.map((e) => (
            <div key={e.title} className={`${ui.card} group flex flex-col gap-4 sm:flex-row sm:items-start`}>
              <div className={ui.topLine} />
              <e.icon size={26} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <div className="flex-1"><h3 className={ui.h3}>{e.title}</h3><p className={ui.text}>{e.school}</p></div>
              <div className="flex flex-col gap-2 sm:items-end">
                <p className={`${ui.small} flex items-center gap-1`}><Calendar size={13} aria-hidden />{e.period}</p>
                <span className={`${ui.label} rounded-sm border border-line px-2 py-1 text-accent`}>{e.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
