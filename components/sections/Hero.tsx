"use client";
import Image from "next/image";
import { SITE } from "@/config/site";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, FolderKanban, Laptop, Wrench } from "lucide-react";
import { useT } from "@/i18n";
import { GithubIcon } from "@/components/ui/TechIcon";
import { ui } from "@/components/ui/styles";

const stats = [
  { icon: FolderKanban, num: "7", key: "projects" },
  { icon: Laptop, num: "2", key: "internships" },
  { icon: Wrench, num: "19", key: "technologies" },
] as const;

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(to); return; }
    let raf = 0; const t0 = performance.now();
    const tick = (t: number) => { const k = Math.min(1, (t - t0) / 1200); setN(Math.round(to * (1 - Math.pow(1 - k, 3)))); if (k < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <>{n}</>;
}

export default function Hero() {
  const { t } = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const size = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    size();
    const count = window.innerWidth < 640 ? 28 : 55; // fewer particles on phones
    const dots = Array.from({ length: count }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.4 + 0.1 }));
    let id = 0, visible = true, color = getComputedStyle(canvas).color;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      for (const p of dots) {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.globalAlpha = p.a; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      id = requestAnimationFrame(tick);
    };
    const start = () => { if (!id && visible && !document.hidden) id = requestAnimationFrame(tick); };
    const stop = () => { cancelAnimationFrame(id); id = 0; };
    // Pause the animation when the hero is off-screen or the tab is hidden, so it never costs scroll performance.
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sectionRef.current?.toggleAttribute("data-offscreen", !visible); if (visible) start(); else stop(); });
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    const theme = new MutationObserver(() => { color = getComputedStyle(canvas).color; });
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", size);
    start();
    return () => { stop(); io.disconnect(); theme.disconnect(); document.removeEventListener("visibilitychange", onVis); window.removeEventListener("resize", size); };
  }, []);

  return (
    <section id="profile" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-28">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full text-accent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" aria-hidden />

      <div className={`${ui.wrap} relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]`}>
        {/* Text: left */}
        <div className="order-2 md:order-1">
          <div className={`${ui.label} mb-8 inline-flex animate-fade-up items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-accent`}>
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />{t.hero.badge}
          </div>
          <h1 className={`${ui.h1} mb-4 animate-fade-up [animation-delay:.1s]`}>Rijaniaina<br /><span className="text-accent">Andriamandimby</span></h1>
          <p className={`${ui.label} mb-6 animate-fade-up text-muted [animation-delay:.2s]`}>{t.hero.role} · ReactJS / ExpressJS / Django</p>
          <p className={`${ui.lead} mb-10 max-w-[640px] animate-fade-up [animation-delay:.3s]`}>
            {t.hero.bio}
          </p>
          <div className={`${ui.row} mb-14 animate-fade-up gap-4 [animation-delay:.4s]`}>
            <a href="#projects" className={ui.btn}><ArrowDown size={14} aria-hidden />{t.hero.view}</a>
            <a href={SITE.contact.github} target="_blank" rel="noopener noreferrer" className={ui.btnGhost}><GithubIcon size={14} />GitHub</a>
          </div>
          <div className="flex animate-fade-up flex-wrap gap-12 border-t border-line pt-8 [animation-delay:.5s]">
            {stats.map((s) => (
              <div key={t.hero.stats[s.key]} className="flex items-center gap-3">
                <s.icon size={22} className="text-accent" aria-hidden />
                <div><div className="text-[2rem] font-extrabold leading-none text-accent"><CountUp to={Number(s.num)} /></div><div className={`${ui.small} mt-1`}>{t.hero.stats[s.key]}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait: right, vertical 4:5, transparent background */}
        {/* Portrait: slides in, then floats gently over a softly pulsing glow */}
        <div className="relative order-1 mx-auto w-full max-w-[250px] animate-fade-up [animation-delay:.2s] md:order-2 md:max-w-[340px]">
          <div className="absolute inset-x-8 bottom-4 top-12 animate-glow rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <Image src="/profile.webp" width={297} height={503} priority sizes="(min-width: 768px) 340px, 250px" alt={t.hero.alt} className="relative h-auto w-full animate-float object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,.35)] transition-[scale] duration-500 hover:scale-[1.04]" />
        </div>
      </div>
    </section>
  );
}
