"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(207,210,214, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="profil"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "6rem 2rem 4rem",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        opacity: 0.3,
      }} />

      <div className="hero-container"
  style={{
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  }}>
        <img src="/profile.jpg" alt="Rijaniaina Andriamandimby" style={{ width: "140px", height: "140px", objectFit: "cover", borderRadius: "50%", border: "3px solid var(--border)", marginBottom: "1.5rem", display: "block" }} />
        {/* Tag */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "2px",
          padding: "0.4rem 0.8rem",
          fontSize: "0.7rem",
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "2rem",
          animation: "fadeUp 0.6s ease both",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse 2s infinite" }} />
          Disponible pour opportunités
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          marginBottom: "1rem",
          animation: "fadeUp 0.6s 0.1s ease both",
        }}>
          <span style={{ display: "block", color: "var(--text)" }}>RIJANIAINA</span>
          <span style={{ display: "block", color: "var(--accent)" }}>ANDRIAM<span style={{ color: "var(--text)", fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}>andimby</span></span>
        </h1>

        {/* Role */}
        <p style={{
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "2rem",
          animation: "fadeUp 0.6s 0.2s ease both",
        }}>
          Développeur Full Stack · ReactJS / ExpressJS / Django
        </p>

        {/* Bio */}
        <p style={{
          maxWidth: "640px",
          color: "var(--text)",
          opacity: 0.7,
          lineHeight: 1.8,
          fontSize: "0.85rem",
          marginBottom: "3rem",
          animation: "fadeUp 0.6s 0.3s ease both",
        }}>
          I am a curious, ambitious, and growth-oriented individual with a strong passion for technology and software engineering. I enjoy solving complex problems, exploring new technologies, and turning ideas into practical solutions. Driven by continuous learning and self-improvement, I strive to build reliable, meaningful, and impactful software.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both" }}>
          <a
            href="#projets"
            style={{
              background: "var(--accent)",
              color: "var(--bg)",
              padding: "0.85rem 2rem",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(207,210,214,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Voir mes projets
          </a>
          <a
            href="https://github.com/rijaniaina-andriamandimby"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text)",
              padding: "0.85rem 2rem",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            GitHub →
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex",
          gap: "3rem",
          marginTop: "5rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
          animation: "fadeUp 0.6s 0.5s ease both",
        }}>
          {[
            { num: "7", label: "Projets réalisés" },
            { num: "2", label: "Stages effectués" },
            { num: "15", label: "Technologies" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--accent)", lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.08em", marginTop: "0.25rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}
