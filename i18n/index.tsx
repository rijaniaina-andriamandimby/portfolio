"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { LANGS, dictionaries, type Dict, type Lang } from "./dictionaries";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: dictionaries.en });
export const useT = () => useContext(LangContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // English by default; a language chosen by the visitor is remembered.
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      setLangState(saved && LANGS.includes(saved) ? saved : "en");
    } catch {}
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  const setLang = useCallback((l: Lang) => { setLangState(l); try { localStorage.setItem("lang", l); } catch {} }, []);
  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
