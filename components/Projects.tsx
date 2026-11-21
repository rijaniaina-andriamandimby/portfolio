"use client";
import { useState } from "react";
import { Briefcase, Building2, Calendar, ChevronLeft, ChevronRight, FolderKanban, GraduationCap, ImageOff, Smartphone, Trophy, type LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { techIcon } from "./techIcons";
import { ui } from "./ui";

type Project = { slug: string; title: string; place: string; date: string; type: string; icon: LucideIcon; desc: string; stack: string[]; n: number };

const projects: Project[] = [
  { slug: "devhunt-eni", title: "Dev Hunt – ENI Hackathon", place: "National School of Computer Science (ENI)", date: "April 2026", type: "Hackathon", icon: Trophy, desc: "Participation in the internal hackathon of ENI.", stack: [], n: 3 },
  { slug: "gestion-scolaire", title: "School Management Web Application", place: "Andramasina General Education High School", date: "December 2025", type: "Freelance", icon: Briefcase, desc: "Application to manage the students, subjects and teachers of the Andramasina high school.", stack: ["ReactJS", "Django", "PostgreSQL"], n: 3 },
  { slug: "communication-interne", title: "Internal Communication Platform", place: "Success MDG – Anosisoa, Antananarivo", date: "Sep – Nov 2025", type: "3-month internship", icon: Briefcase, desc: "Development of an internal communication and activity tracking platform for the company.", stack: ["ReactJS", "ExpressJS", "PostgreSQL"], n: 3 },
  { slug: "villa-reservation", title: "Website Redesign & Villa Booking App", place: "Polypus Corporation S.A", date: "Sep – Nov 2024", type: "3-month internship", icon: Briefcase, desc: "Improvement of the company website and development of a booking management application for their villas.", stack: [], n: 3 },
  { slug: "gestion-restaurant", title: "Restaurant Management", place: "ENI Fianarantsoa", date: "", type: "Academic project", icon: GraduationCap, desc: "Application to manage a restaurant (orders, menus, stock).", stack: [], n: 3 },
  { slug: "gestion-entretien", title: "Maintenance Management", place: "ENI Fianarantsoa", date: "", type: "Academic project", icon: GraduationCap, desc: "Application to manage and follow maintenance operations.", stack: [], n: 3 },
  { slug: "scan-documents", title: "Administrative Document Scanner", place: "ENI Fianarantsoa", date: "", type: "Mobile app", icon: Smartphone, desc: "Mobile application to scan administrative documents.", stack: [], n: 3 },
];

function Carousel({ p }: { p: Project }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const go = (d: number) => setI((v) => (v + d + p.n) % p.n);
  const arrow = "absolute top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/70 transition-colors hover:bg-black";
  return (
    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-sm bg-bg2" tabIndex={0} role="group" aria-roledescription="carousel" aria-label={`${p.title} photos`}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}>
      {failed[i] ? (
        <div className={`${ui.small} flex flex-col items-center gap-2 p-4 text-center`}><ImageOff size={24} aria-hidden />Add public/projects/{p.slug}/{i + 1}.jpg</div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={i} className="size-full object-cover" src={`/projects/${p.slug}/${i + 1}.jpg`} alt={`${p.title}, photo ${i + 1} of ${p.n}`} onError={() => setFailed((f) => ({ ...f, [i]: true }))} />
      )}
      <button className={`${arrow} left-2`} onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft size={18} /></button>
      <button className={`${arrow} right-2`} onClick={() => go(1)} aria-label="Next photo"><ChevronRight size={18} /></button>
      <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 text-xs">{i + 1}/{p.n}</span>
      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
        {Array.from({ length: p.n }, (_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Go to photo ${k + 1}`} className={`size-2 rounded-full ${k === i ? "bg-accent" : "bg-white/40"}`} />)}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={FolderKanban} num="02" label="Projects" title="Experience & Achievements" />
        <div className={ui.grid}>
          {projects.map((p) => (
            <article key={p.slug} className={`${ui.card} group flex flex-col gap-4`}>
              <div className={ui.topLine} />
              <Carousel p={p} />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`${ui.label} inline-flex items-center gap-1.5 rounded-sm border border-line px-2 py-1 text-accent`}><p.icon size={13} aria-hidden />{p.type}</span>
                {p.date && <span className={`${ui.small} flex items-center gap-1`}><Calendar size={13} aria-hidden />{p.date}</span>}
              </div>
              <h3 className={ui.h3}>{p.title}</h3>
              <p className={`${ui.small} flex items-center gap-1.5 !text-accent`}><Building2 size={14} aria-hidden />{p.place}</p>
              <p className={ui.text}>{p.desc}</p>
              {p.stack.length > 0 && <div className={ui.row}>{p.stack.map((t) => { const I = techIcon(t); return <span key={t} className={ui.tag}><I size={14} className="text-accent" aria-hidden />{t}</span>; })}</div>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
