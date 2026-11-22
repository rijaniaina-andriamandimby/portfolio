"use client";
import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { useT } from "@/lib/i18n";

const R = 20, C = 2 * Math.PI * R;

// Top progress bar + bottom-right circular indicator / back-to-top button.
// Updates DOM styles directly inside one rAF per frame: no React re-render while scrolling.
export default function ScrollProgress() {
  const { t } = useT();
  const bar = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const d = document.documentElement;
      const max = d.scrollHeight - d.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      if (ring.current) ring.current.style.strokeDashoffset = String(C * (1 - p));
      if (btn.current) btn.current.dataset.show = String(window.scrollY > 320);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);

  return (
    <>
      <div ref={bar} aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-accent will-change-transform" />
      <button ref={btn} data-show="false" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label={t.nav.top}
        className="fixed bottom-5 right-4 z-50 grid size-12 translate-y-3 place-items-center rounded-full bg-surface text-accent opacity-0 shadow-[0_8px_24px_rgba(0,0,0,.3)] transition duration-300 pointer-events-none data-[show=true]:pointer-events-auto data-[show=true]:translate-y-0 data-[show=true]:opacity-100 hover:-translate-y-0.5 sm:bottom-6 sm:right-6">
        <svg viewBox="0 0 48 48" className="absolute inset-0 size-full -rotate-90" aria-hidden>
          <circle cx="24" cy="24" r={R} fill="none" stroke="var(--line)" strokeWidth="3" />
          <circle ref={ring} cx="24" cy="24" r={R} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} />
        </svg>
        <ArrowUp size={18} aria-hidden />
      </button>
    </>
  );
}
