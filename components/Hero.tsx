"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Code2, FolderKanban, Laptop, Wrench } from "lucide-react";
import { ui } from "./ui";

const stats = [
  { icon: FolderKanban, num: "7", label: "Projects" },
  { icon: Laptop, num: "2", label: "Internships" },
  { icon: Wrench, num: "15", label: "Technologies" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const size = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    size();
    const dots = Array.from({ length: 60 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.4 + 0.1 }));
    let id = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of dots) {
        p.x = (p.x + p.vx + canvas.width) % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(207,210,214,${p.a})`; ctx.fill();
      }
      id = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("resize", size);
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", size); };
  }, []);

  return (
    <section id="profile" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-12 pt-28">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-size-[60px_60px] opacity-30" aria-hidden />

      <div className={`${ui.wrap} relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]`}>
        {/* Text: left */}
        <div className="order-2 md:order-1">
          <div className={`${ui.label} mb-8 inline-flex animate-fade-up items-center gap-2 rounded-sm border border-line bg-surface px-3 py-1.5 text-accent`}>
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />Available for opportunities
          </div>
          <h1 className={`${ui.h1} mb-4 animate-fade-up [animation-delay:.1s]`}>Rijaniaina<br /><span className="text-accent">Andriamandimby</span></h1>
          <p className={`${ui.label} mb-6 animate-fade-up text-muted [animation-delay:.2s]`}>Full Stack Developer · ReactJS / ExpressJS / Django</p>
          <p className={`${ui.lead} mb-10 max-w-160 animate-fade-up [animation-delay:.3s]`}>
            I am a curious, ambitious, and growth-oriented individual with a strong passion for technology and software engineering. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical solutions. Driven by continuous learning and self-improvement, I strive to build reliable, meaningful, and impactful software while constantly developing my technical and personal skills.
          </p>
          <div className={`${ui.row} mb-14 animate-fade-up gap-4 [animation-delay:.4s]`}>
            <a href="#projects" className={ui.btn}><ArrowDown size={14} aria-hidden />View my projects</a>
            <a href="https://github.com/rijaniaina-andriamanimby" target="_blank" rel="noopener noreferrer" className={ui.btnGhost}><Code2 size={14} aria-hidden />GitHub</a>
          </div>
          <div className="flex animate-fade-up flex-wrap gap-12 border-t border-line pt-8 [animation-delay:.5s]">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <s.icon size={22} className="text-accent" aria-hidden />
                <div><div className="text-[2rem] font-extrabold leading-none text-accent">{s.num}</div><div className={`${ui.small} mt-1`}>{s.label}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait: right, vertical 4:5, transparent background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/profile.png" alt="Portrait of Rijaniaina Andriamandimby" className="order-1 mx-auto aspect-[4/5] w-full max-w-[250px] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,.35)] md:order-2 md:max-w-[420px]" />
      </div>
    </section>
  );
}
