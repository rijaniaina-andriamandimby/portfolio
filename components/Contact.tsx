"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rija.fam@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "6rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        {/* Header */}
        <p style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
          // 04 — Contact
        </p>
        <h2 style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2rem, 6vw, 4rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          marginBottom: "1.5rem",
        }}>
          Travaillons <span style={{ color: "var(--accent)", fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}>ensemble</span>
        </h2>

        <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 3rem" }}>
          Je suis ouvert aux opportunités de stage, emploi ou collaboration sur des projets intéressants.
          N&apos;hésitez pas à me contacter !
        </p>

        {/* Email button */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
          <button
            onClick={copyEmail}
            style={{
              background: copied ? "var(--surface)" : "var(--accent)",
              color: copied ? "var(--accent)" : "var(--bg)",
              border: copied ? "1px solid var(--accent)" : "none",
              padding: "1rem 2.5rem",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          >
            {copied ? "✓ Email copié !" : "rija.fam@gmail.com"}
          </button>
        </div>

        {/* Contact info grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "4rem" }}>
          {[
            { label: "Téléphone", value: "038 183 600", href: "tel:+261381836000" },
            { label: "WhatsApp", value: "032 843 3393", href: "tel:+261328433393" },
            { label: "Localisation", value: "Fianarantsoa, Madagascar", href: "#" },
            { label: "GitHub", value: "rijaniaina-andriamandimby", href: "https://github.com/rijaniaina-andriamandimby" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "1.25rem",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                {item.label}
              </p>
              <p style={{ fontSize: "0.8rem", color: "var(--text)", fontFamily: "Roboto, sans-serif" }}>
                {item.value}
              </p>
            </a>
          ))}
        </div>

        {/* Hobbies */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2.5rem" }}>
          <p style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
            En dehors du code
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { emoji: "⚽", label: "Football" },
              { emoji: "🚴", label: "Cyclisme" },
              { emoji: "🎮", label: "Jeux vidéos" },
            ].map((h) => (
              <div key={h.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "0.5rem 1rem",
                borderRadius: "2px",
                fontSize: "0.78rem",
                color: "var(--muted)",
              }}>
                {h.emoji} {h.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
