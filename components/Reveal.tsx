"use client";
import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

// Fires once when the element enters the viewport (IntersectionObserver: no scroll handler, no layout work).
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen] as const;
}

type Props = { as?: ElementType; from?: "up" | "left" | "right"; delay?: number; className?: string; children: ReactNode };

// Fade + slide in (opacity/transform only, so it stays on the GPU). Styles live in globals.css (.reveal).
export default function Reveal({ as: Tag = "div", from = "up", delay = 0, className = "", children }: Props) {
  const [ref, seen] = useInView<HTMLElement>();
  return (
    <Tag ref={ref} data-from={from} style={{ transitionDelay: seen ? `${delay}ms` : undefined }} className={`reveal ${seen ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

export function GrowBar({ pct }: { pct: number }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="h-1 overflow-hidden rounded-sm bg-line">
      <div className="h-full origin-left rounded-sm bg-accent transition-transform duration-1000 ease-out motion-reduce:transition-none" style={{ transform: `scaleX(${seen ? pct / 100 : 0})` }} />
    </div>
  );
}
