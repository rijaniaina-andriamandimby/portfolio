"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Briefcase, Building2, ChevronLeft, ChevronRight, ImageOff, Maximize2, X } from "lucide-react";
import { useT } from "@/i18n";
import Image from "next/image";
import { projects, type RawProject } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import TechIcon from "@/components/ui/TechIcon";
import Reveal from "@/components/ui/Reveal";
import { ui } from "@/components/ui/styles";


type Project = RawProject & { title: string; place: string; desc: string; type: string };

// next/image: automatic AVIF/WebP, responsive sizes and lazy loading. `fill` needs a positioned parent with a size.
function Photo({ p, i, onError, failed, contain, sizes }: { p: Project; i: number; onError: () => void; failed: boolean; contain?: boolean; sizes: string }) {
  const { t } = useT();
  if (failed) return <div className={`${ui.small} grid size-full place-items-center p-4 text-center`}><span className="flex flex-col items-center gap-2"><ImageOff size={24} aria-hidden />public/projects/{p.slug}/{i + 1}.webp</span></div>;
  return <Image key={i} src={`/projects/${p.slug}/${i + 1}.webp`} alt={`${p.title}, ${t.projects.photo} ${i + 1}/${p.n}`} fill sizes={sizes} {...(contain ? { unoptimized: true } : { quality: 90 })} className={contain ? "animate-fade-in object-contain" : "animate-fade-in object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.03]"} onError={onError} />;
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
      <div onClick={(e) => e.stopPropagation()} className="relative h-[calc(100vh-10rem)] w-[calc(100vw-8rem)] max-w-[1600px] text-white/70 [@media(min-resolution:2dppx)]:max-w-[1100px]">
        <Photo p={p} i={i} failed={!!failed[i]} onError={() => fail(i)} contain sizes="100vw" />
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
  if (p.n === 0) return (
    <div className="grid aspect-[2/1] place-items-center rounded-sm bg-bg2 text-muted"><div className={`${ui.small} flex flex-col items-center gap-2 p-4 text-center`}><p.icon size={28} aria-hidden />{t.projects.noPhotos}</div></div>
  );
  const arrow = "absolute top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/70 text-white transition-colors hover:bg-black";
  return (
    <div className="relative grid aspect-[2/1] place-items-center overflow-hidden rounded-sm bg-bg2 text-muted" tabIndex={0} role="group" aria-roledescription="carousel" aria-label={`${p.title} – ${t.projects.photos}`}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); if (e.key === "Enter") setOpen(true); }}>
      <button onClick={() => setOpen(true)} aria-label={`${p.title} – ${t.projects.open}`} className="group/img absolute inset-0 grid cursor-zoom-in place-items-center">
        <Photo p={p} i={i} failed={!!failed[i]} onError={() => fail(i)} sizes="(min-width: 1024px) 520px, (min-width: 768px) 46vw, 92vw" />
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
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90} className="h-full">
            <article className={`${ui.card} group flex h-full flex-col gap-4`}>
              <div className={ui.topLine} />
              <Carousel p={p} />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className={`${ui.label} inline-flex items-center gap-1.5 rounded-sm border border-line px-2 py-1 text-accent`}><p.icon size={13} aria-hidden />{p.type}</span>
              </div>
              <h3 className={ui.h3}>{p.title}</h3>
              <p className={`${ui.small} flex items-center gap-1.5 !text-accent`}><Building2 size={14} aria-hidden />{p.place}</p>
              <p className={ui.text}>{p.desc}</p>
              {p.stack.length > 0 && <div className={ui.row}>{p.stack.map((t) => <span key={t} className={ui.tag}><TechIcon name={t} size={14} />{t}</span>)}</div>}
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
