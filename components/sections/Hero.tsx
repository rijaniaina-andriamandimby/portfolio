"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ChevronDown } from "lucide-react";
import { SITE } from "@/config/site";
import { useT } from "@/i18n";
import { GithubIcon, LinkedinIcon } from "@/components/ui/TechIcon";
import { ui } from "@/components/ui/styles";

export default function Hero() {
  const { t } = useT();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  // Particles: paused when the hero is off-screen or the tab is hidden.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const size = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    size();
    const count = window.innerWidth < 640 ? 28 : 55;
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

  // 3D tilt of the portrait following the pointer (mouse devices only).
  useEffect(() => {
    const sec = sectionRef.current, tilt = tiltRef.current;
    if (!sec || !tilt || window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      const r = sec.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; tilt.style.transform = `perspective(900px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 14).toFixed(2)}deg)`; });
    };
    const leave = () => { tilt.style.transform = ""; };
    sec.addEventListener("pointermove", move, { passive: true });
    sec.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); sec.removeEventListener("pointermove", move); sec.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <section id="profile" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 size-full text-accent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/4 size-[420px] animate-drift rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-[360px] animate-drift-slow rounded-full bg-accent/10 blur-3xl" aria-hidden />

      <div className={`${ui.wrap} hero-out relative grid items-center gap-10 md:grid-cols-[1.3fr_1fr]`}>
        <div className="order-2 md:order-1">
          <h1 className={`${ui.h1} mb-5`}>
            <span className="block overflow-hidden pb-[.08em]"><span className="block animate-rise">Rijaniaina</span></span>
            <span className="block overflow-hidden pb-[.08em]"><span className="block animate-rise text-accent [animation-delay:.12s]">Andriamandimby</span></span>
          </h1>
          <p className="mb-6 animate-fade-up bg-[linear-gradient(110deg,var(--muted)_30%,var(--accent)_50%,var(--muted)_70%)] bg-[length:200%_100%] bg-clip-text text-[clamp(1.15rem,2.6vw,1.6rem)] font-medium leading-snug text-transparent animate-shimmer [animation-delay:.3s]">
            {t.hero.role}
          </p>
          <p className={`${ui.lead} mb-10 max-w-[640px] animate-fade-up [animation-delay:.45s]`}>{t.hero.bio}</p>
          <div className={`${ui.row} animate-fade-up gap-4 [animation-delay:.6s]`}>
            <a href="#projects" className={ui.btn}><ArrowDown size={14} aria-hidden />{t.hero.view}</a>
            <a href={SITE.contact.github} target="_blank" rel="noopener noreferrer" className={ui.btnGhost}><GithubIcon size={14} />GitHub</a>
            <a href={SITE.contact.linkedin} target="_blank" rel="noopener noreferrer" className={ui.btnGhost}><LinkedinIcon size={14} />LinkedIn</a>
          </div>
        </div>

        {/* Portrait: enters, floats over a pulsing glow and tilts with the pointer */}
        <div className="relative order-1 mx-auto w-full max-w-[250px] animate-fade-up [animation-delay:.2s] md:order-2 md:max-w-[340px]">
          <div ref={tiltRef} className="relative transition-transform duration-300 ease-out will-change-transform">
            <div className="absolute inset-x-8 bottom-4 top-12 animate-glow rounded-full bg-accent/30 blur-3xl" aria-hidden />
            <Image src="/profile.webp" width={297} height={503} priority sizes="(min-width: 768px) 340px, 250px" alt={t.hero.alt} className="relative h-auto w-full animate-float object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,.35)]" />
          </div>
        </div>
      </div>

      <a href="#skills" aria-label={t.hero.scroll} className="absolute bottom-6 left-1/2 grid -translate-x-1/2 place-items-center text-muted transition-colors hover:text-accent">
        <span className="grid h-10 w-6 place-items-start justify-center rounded-full border border-current pt-2"><span className="block h-2 w-0.5 animate-bounce rounded-full bg-current" /></span>
        <ChevronDown size={16} className="mt-1 animate-pulse" aria-hidden />
      </a>
    </section>
  );
}
