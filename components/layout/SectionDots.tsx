"use client";
import { useEffect, useState } from "react";
import { useT } from "@/i18n";

const sections = ["profile", "skills", "projects", "education", "contact"] as const;

// Vertical dot navigation (large screens): shows the current section and jumps to any section.
export default function SectionDots() {
  const { t } = useT();
  const [active, setActive] = useState<string>("profile");
  useEffect(() => {
    const els = sections.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav aria-label="Sections" className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {sections.map((id) => (
        <a key={id} href={`#${id}`} aria-label={t.nav[id]} aria-current={active === id ? "true" : undefined} className="group relative grid size-4 place-items-center">
          <span className={`block rounded-full border border-accent transition-all duration-300 ${active === id ? "size-3 bg-accent" : "size-2 bg-transparent group-hover:bg-accent/60"}`} />
          <span className="pointer-events-none absolute right-7 whitespace-nowrap rounded-sm border border-line bg-surface px-2.5 py-1 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">{t.nav[id]}</span>
        </a>
      ))}
    </nav>
  );
}
