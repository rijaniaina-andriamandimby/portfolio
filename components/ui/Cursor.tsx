"use client";
import { useEffect, useRef } from "react";

// Custom cursor: a dot that follows the pointer instantly and a ring that trails it smoothly.
// The ring grows over links/buttons and shrinks on click. Mouse devices only; disabled for reduced motion.
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const d = dot.current, r = ring.current;
    if (!d || !r) return;
    const root = document.documentElement;
    let tx = -100, ty = -100, rx = -100, ry = -100, sc = 1, st = 1, raf = 0, shown = false;

    const paint = () => {
      d.style.transform = `translate3d(${tx}px,${ty}px,0)`;
      r.style.transform = `translate3d(${rx}px,${ry}px,0) scale(${sc})`;
    };
    const loop = () => {
      rx += (tx - rx) * 0.18; ry += (ty - ry) * 0.18; sc += (st - sc) * 0.2;
      paint();
      raf = Math.abs(tx - rx) > 0.1 || Math.abs(ty - ry) > 0.1 || Math.abs(st - sc) > 0.01 ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };
    const show = (on: boolean) => { d.style.opacity = r.style.opacity = on ? "1" : "0"; };

    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (!shown) { shown = true; rx = tx; ry = ty; root.classList.add("has-cursor"); show(true); }
      st = (e.target as Element).closest?.("a, button, [role='button'], [role='option']") ? 1.9 : 1;
      kick();
    };
    const down = () => { st = 0.7; kick(); };
    const up = () => { st = 1; kick(); };
    const out = (e: MouseEvent) => { if (!e.relatedTarget) show(false); };
    const over = () => { if (shown) show(true); };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move); window.removeEventListener("pointerdown", down); window.removeEventListener("pointerup", up);
      document.removeEventListener("mouseout", out); document.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[299] -ml-[18px] -mt-[18px] size-9 rounded-full border border-accent opacity-0 transition-opacity duration-200" />
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[300] -ml-1 -mt-1 size-2 rounded-full bg-accent opacity-0 transition-opacity duration-200" />
    </>
  );
}
