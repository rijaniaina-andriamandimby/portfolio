"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { LANGS, LANG_NAMES } from "@/i18n/dictionaries";
import { useT } from "@/i18n";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useT();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const key = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", key);
    return () => { document.removeEventListener("mousedown", away); document.removeEventListener("keydown", key); };
  }, [open]);

  return (
    <div ref={box} className="relative">
      <button onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open} aria-label={`${t.nav.language}: ${LANG_NAMES[lang]}`}
        className="flex h-9 items-center gap-1.5 rounded-sm border border-line px-2.5 text-[.72rem] font-medium uppercase tracking-[.1em] text-fg transition-colors hover:border-accent hover:text-accent">
        <Globe size={15} aria-hidden />{lang}
      </button>
      {open && (
        <ul role="listbox" aria-label={t.nav.language} className="absolute right-0 top-11 z-50 min-w-40 animate-fade-up overflow-hidden rounded border border-line bg-surface py-1 shadow-[0_12px_32px_rgba(0,0,0,.3)]">
          {LANGS.map((l) => (
            <li key={l} role="option" aria-selected={l === lang}>
              <button onClick={() => { setLang(l); setOpen(false); }} className={`flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-[.85rem] transition-colors hover:bg-bg ${l === lang ? "text-accent" : ""}`}>
                <span><span className="mr-2 inline-block w-5 text-[.7rem] uppercase opacity-60">{l}</span>{LANG_NAMES[l]}</span>
                {l === lang && <Check size={14} aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
