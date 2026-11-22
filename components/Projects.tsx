"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Briefcase, Building2, Calendar, ChevronLeft, ChevronRight, GraduationCap, ImageOff, Maximize2, Smartphone, Trophy, X, type LucideIcon } from "lucide-react";
import { useT } from "@/lib/i18n";
import type { Dict } from "@/lib/dictionaries";
import SectionHeader from "./SectionHeader";
import TechIcon, { GithubIcon } from "./TechIcon";
import Reveal from "./Reveal";
import { ui } from "./ui";

type Raw = { slug: keyof Dict["projects"]["items"]; kind: keyof Dict["projects"]["types"]; icon: LucideIcon; stack: string[]; n: number; github: string };
type Project = Raw & { title: string; place: string; date: string; desc: string; type: string };

// Replace each "github" URL with the repository of the project.
const GH = "https://github.com/rijaniaina-andriamandimby";
const projects: Raw[] = [
  { slug: "devhunt-eni", kind: "hackathon", icon: Trophy, stack: [], n: 3, github: GH },
  { slug: "gestion-scolaire", kind: "freelance", icon: Briefcase, stack: ["ReactJS", "Django", "PostgreSQL"], n: 3, github: GH },
  { slug: "communication-interne", kind: "internship", icon: Briefcase, stack: ["ReactJS", "ExpressJS", "PostgreSQL"], n: 3, github: GH },
  { slug: "villa-reservation", kind: "internship", icon: Briefcase, stack: [], n: 3, github: GH },
  { slug: "gestion-restaurant", kind: "academic", icon: GraduationCap, stack: [], n: 3, github: GH },
  { slug: "gestion-entretien", kind: "academic", icon: GraduationCap, stack: [], n: 3, github: GH },
  { slug: "scan-documents", kind: "mobile", icon: Smartphone, stack: [], n: 3, github: GH },
];

function Photo({ p, i, onError, failed, className }: { p: Project; i: number; onError: () => void; failed: boolean; className: string }) {
  const { t } = useT();
  if (failed) return <div className={`${ui.small} flex flex-col items-center gap-2 p-4 text-center`}><ImageOff size={24} aria-hidden />Add public/projects/{p.slug}/{i + 1}.jpg</div>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img key={i} loading="lazy" decoding="async" className={className} src={`/projects/${p.slug}/${i + 1}.jpg`} alt={`${p.title}, ${t.projects.photo} ${i + 1}/${p.n}`} onError={onError} />;
}

function Lightbox({ p, i, setI, go, failed, fail, onClose }: { p: Project; i: number; setI: (n: number) => void; go: (d: number) => void; failed: Record<number, boolean>; fail: (n: number) => void; onClose: () => void }) {
  const { t } = useT();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [go, onClose]);
  const arrow = "absolute top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25";
  // Rendered in a portal on <body>: the card has a hover transform, which would otherwise trap a fixed overlay inside the card.
  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={`${p.title} – ${t.projects.photos}`} onClick={onClose} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 text-white/80">
      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-4 text-white">
        <div><p className="font-bold">{p.title}</p><p className="text-sm opacity-70">{i + 1} / {p.n}</p></div>
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} autoFocus aria-label={t.projects.close} className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/25"><X size={22} /></button>
      </div>
      <div onClick={(e) => e.stopPropagation()} className="flex items-center justify-center px-16 py-20">
        <Photo p={p} i={i} failed={!!failed[i]} onError={() => fail(i)} className="max-h-[calc(100vh-10rem)] max-w-[calc(100vw-8rem)] object-contain" />
      </div>
      <button className={`${arrow} left-3 sm:left-6`} onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={t.projects.prev}><ChevronLeft size={24} /></button>
      <button className={`${arrow} right-3 sm:right-6`} onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={t.projects.next}><ChevronRight size={24} /></button>
      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-2" onClick={(e) => e.stopPropagation()}>
        {Array.from({ length: p.n }, (_, k) => <button key={k} onClick={() => setI(k)} aria-label={`${t.projects.goTo} ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-white" : "w-2 bg-white/40"}`} />)}
      </div>
    </div>,
    document.body
  );
}

function Carousel({ p }: { p: Project }) {
  const { t } = useT();
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const go = (d: number) => setI((v) => (v + d + p.n) % p.n);
  const fail = (n: number) => setFailed((f) => ({ ...f, [n]: true }));
  const arrow = "absolute top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white transition-colors hover:bg-black";
  return (
    <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-sm bg-bg2 text-muted" tabIndex={0} role="group" aria-roledescription="carousel" aria-label={`${p.title} – ${t.projects.photos}`}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); if (e.key === "Enter") setOpen(true); }}>
      <button onClick={() => setOpen(true)} aria-label={`${p.title} – ${t.projects.open}`} className="group/img absolute inset-0 grid cursor-zoom-in place-items-center">
        <Photo p={p} i={i} failed={!!failed[i]} onError={() => fail(i)} className="size-full object-cover" />
        <span className="absolute bottom-2 right-2 grid size-8 place-items-center rounded-full bg-black/70 text-white opacity-0 transition-opacity group-hover/img:opacity-100 group-focus-visible/img:opacity-100"><Maximize2 size={15} aria-hidden /></span>
      </button>
      <button className={`${arrow} left-2`} onClick={() => go(-1)} aria-label={t.projects.prev}><ChevronLeft size={18} /></button>
      <button className={`${arrow} right-2`} onClick={() => go(1)} aria-label={t.projects.next}><ChevronRight size={18} /></button>
      <span className="pointer-events-none absolute right-2 top-2 rounded-full bg-black/70 px-2 text-xs text-white">{i + 1}/{p.n}</span>
      <div className="absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">
        {Array.from({ length: p.n }, (_, k) => <button key={k} onClick={() => setI(k)} aria-label={`${t.projects.goTo} ${k + 1}`} className={`size-2 rounded-full ${k === i ? "bg-white" : "bg-white/40"}`} />)}
      </div>
      {open && <Lightbox p={p} i={i} setI={setI} go={go} failed={failed} fail={fail} onClose={() => setOpen(false)} />}
    </div>
  );
}

export default function Projects() {
  const { t } = useT();
  const list: Project[] = projects.map((r) => ({ ...r, ...t.projects.items[r.slug], type: t.projects.types[r.kind] }));
  return (
    <section id="projects" className={`${ui.sec} bg-bg2`}>
      <div className={ui.wrap}>
        <SectionHeader icon={Briefcase} num="02" label={t.projects.label} title={t.projects.title} />
        <div className={ui.grid}>
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full">
            <article className={`${ui.card} group flex h-full flex-col gap-4`}>
              <div className={ui.topLine} />
              <Carousel p={p} />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`${ui.label} inline-flex items-center gap-1.5 rounded-sm border border-line px-2 py-1 text-accent`}><p.icon size={13} aria-hidden />{p.type}</span>
                {p.date && <span className={`${ui.small} flex items-center gap-1`}><Calendar size={13} aria-hidden />{p.date}</span>}
              </div>
              <h3 className={ui.h3}>{p.title}</h3>
              <p className={`${ui.small} flex items-center gap-1.5 !text-accent`}><Building2 size={14} aria-hidden />{p.place}</p>
              <p className={ui.text}>{p.desc}</p>
              {p.stack.length > 0 && <div className={ui.row}>{p.stack.map((t) => <span key={t} className={ui.tag}><TechIcon name={t} size={14} />{t}</span>)}</div>}
              <a href={p.github} target="_blank" rel="noopener noreferrer" className={`${ui.btnGhost} mt-auto self-start !px-4 !py-2`}><GithubIcon size={14} />GitHub</a>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
