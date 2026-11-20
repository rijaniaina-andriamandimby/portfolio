"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Profil", href: "#profil" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(42,44,47,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a href="#" style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--accent)", textDecoration: "none", letterSpacing: "-0.02em" }}>
        RA<span style={{ color: "var(--text)" }}>.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2rem" }} className="hidden-mobile">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="mailto:rija.fam@gmail.com"
        style={{
          background: "var(--accent)",
          color: "var(--bg)",
          padding: "0.5rem 1.2rem",
          fontSize: "0.72rem",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          borderRadius: "2px",
        }}
        className="hidden-mobile"
      >
        Me contacter
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        className="show-mobile"
        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", fontSize: "1.5rem" }}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          background: "var(--bg2)",
          padding: "1.5rem 2rem",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "var(--text)", textDecoration: "none", fontFamily: "Roboto, sans-serif", fontSize: "1.1rem" }}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
