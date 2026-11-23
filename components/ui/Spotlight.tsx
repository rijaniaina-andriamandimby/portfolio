"use client";
import { useEffect } from "react";

// One pointer listener for every ".spot" card: sets --mx / --my (read by the CSS radial gradient). Skipped on touch screens.
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, el: HTMLElement | null = null, x = 0, y = 0;
    const move = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.(".spot") as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      el = card; x = e.clientX - r.left; y = e.clientY - r.top;
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; el?.style.setProperty("--mx", `${x}px`); el?.style.setProperty("--my", `${y}px`); });
    };
    document.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(raf); document.removeEventListener("pointermove", move); };
  }, []);
  return null;
}
