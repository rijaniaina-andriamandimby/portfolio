"use client";
import { useT } from "@/i18n";

export default function SkipLink() {
  const { t } = useT();
  return <a href="#profile" className="sr-only z-[70] rounded-sm bg-accent px-4 py-2 text-sm font-bold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{t.nav.skip}</a>;
}
