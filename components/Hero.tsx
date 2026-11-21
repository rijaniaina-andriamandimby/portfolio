"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, FolderKanban, Laptop, Wrench } from "lucide-react";
import { GithubIcon } from "./TechIcon";
import { ui } from "./ui";

const stats = [
  { icon: FolderKanban, num: "7", label: "Projects" },
  { icon: Laptop, num: "2", label: "Internships" },
  { icon: Wrench, num: "19", label: "Technologies" },
];

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
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start(); else stop(); });
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
    <section id="profile" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-28">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full text-accent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" aria-hidden />

      <div className={`${ui.wrap} relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]`}>
        {/* Text: left */}
        <div className="order-2 md:order-1">
          <div className={`${ui.label} mb-8 inline-flex animate-fade-up items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-accent`}>
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />Available for opportunities
          </div>
          <h1 className={`${ui.h1} mb-4 animate-fade-up [animation-delay:.1s]`}>Rijaniaina<br /><span className="text-accent">Andriamandimby</span></h1>
          <p className={`${ui.label} mb-6 animate-fade-up text-muted [animation-delay:.2s]`}>Full Stack Developer · ReactJS / ExpressJS / Django</p>
          <p className={`${ui.lead} mb-10 max-w-[640px] animate-fade-up [animation-delay:.3s]`}>
            I am a curious, ambitious, and growth-oriented individual with a strong passion for technology and software engineering. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical solutions. Driven by continuous learning and self-improvement, I strive to build reliable, meaningful, and impactful software while constantly developing my technical and personal skills.
          </p>
          <div className={`${ui.row} mb-14 animate-fade-up gap-4 [animation-delay:.4s]`}>
            <a href="#projects" className={ui.btn}><ArrowDown size={14} aria-hidden />View my projects</a>
            <a href="https://github.com/rijaniaina-andriamandimby" target="_blank" rel="noopener noreferrer" className={ui.btnGhost}><GithubIcon size={14} />GitHub</a>
          </div>
          <div className="flex animate-fade-up flex-wrap gap-12 border-t border-line pt-8 [animation-delay:.5s]">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon size={22} className="text-accent" aria-hidden />
                <div><div className="text-[2rem] font-extrabold leading-none text-accent"><CountUp to={Number(s.num)} /></div><div className={`${ui.small} mt-1`}>{s.label}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait: right, vertical 4:5, transparent background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.png" fetchPriority="high" decoding="async" alt="Portrait of Rijaniaina Andriamandimby" className="order-1 mx-auto aspect-[4/5] w-full max-w-[250px] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,.35)] md:order-2 md:max-w-[420px]" />
      </div>
    </section>
  );
}
