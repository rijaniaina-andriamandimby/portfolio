"use client";
import { useEffect, useState } from "react";

type Project = { slug: string; title: string; client: string; date: string; type: string; desc: string; stack: string[]; n: number };

const projects: Project[] = [
  { slug: "devhunt-eni", title: "Dev Hunt – Hackathon ENI", client: "Ecole Nationale d'Informatique", date: "Avril 2026", type: "Hackathon", desc: "Participation au hackathon interne de l'ENI.", stack: [], n: 3 },
  { slug: "gestion-scolaire", title: "Application Web de Gestion Scolaire", client: "Lycée d'Enseignement Générale Andramasina", date: "Décembre 2025", type: "Freelance", desc: "Application de gestion des étudiants, des matières et des enseignants du lycée d'Andramasina.", stack: ["ReactJS", "Django", "PostgreSQL"], n: 3 },
  { slug: "communication-interne", title: "Plateforme de Communication Interne", client: "Success MDG – Anosisoa Antananarivo", date: "Sept – Nov 2025", type: "Stage · 3 mois", desc: "Développement d'une plateforme de communication interne et de suivi des activités de l'entreprise.", stack: ["ReactJS", "ExpressJS", "PostgreSQL"], n: 3 },
  { slug: "villa-reservation", title: "Refonte Site Web & App Réservation de Villa", client: "Polypus Corporation S.A", date: "Sept – Nov 2024", type: "Stage · 3 mois", desc: "Amélioration du site web de l'entreprise et développement d'une application de gestion des réservations de leurs villas.", stack: [], n: 3 },
  { slug: "gestion-restaurant", title: "Gestion de Restaurant", client: "ENI Fianarantsoa", date: "", type: "Projet académique", desc: "Application de gestion d'un restaurant (commandes, menus, stock).", stack: [], n: 3 },
  { slug: "gestion-entretien", title: "Gestion d'Entretien", client: "ENI Fianarantsoa", date: "", type: "Projet académique", desc: "Application de gestion et de suivi des entretiens.", stack: [], n: 3 },
  { slug: "scan-documents", title: "Scan de Documents Administratifs", client: "ENI Fianarantsoa", date: "", type: "Application mobile", desc: "Application mobile de numérisation de documents administratifs.", stack: [], n: 3 },
];

const btn = { background: "var(--accent)", color: "var(--bg)", border: "none", padding: "0.55rem 1.1rem", fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "0.75rem", borderRadius: "2px", cursor: "pointer" } as const;

function Gallery({ p, onClose }: { p: Project; onClose: () => void }) {
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((v) => (v + 1) % p.n);
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + p.n) % p.n);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [p.n, onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(20,21,22,0.9)", zIndex: 200, display: "grid", placeItems: "center", padding: "1rem" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(960px,100%)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", fontSize: "0.85rem" }}>
          <span>{p.title} · {i + 1}/{p.n}</span>
          <button style={btn} onClick={onClose} autoFocus>Fermer</button>
        </div>
        <div style={{ background: "var(--bg2)", borderRadius: "4px", minHeight: "260px", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: "0.85rem", textAlign: "center", padding: "1rem" }}>
          {failed[i] ? (
            <span>Ajoutez la photo dans public/projects/{p.slug}/{i + 1}.jpg</span>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/projects/${p.slug}/${i + 1}.jpg`} alt={`${p.title}, photo ${i + 1}`} onError={() => setFailed((f) => ({ ...f, [i]: true }))} style={{ maxWidth: "100%", maxHeight: "65vh", objectFit: "contain" }} />
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={btn} onClick={() => setI((i - 1 + p.n) % p.n)}>Précédente</button>
          <button style={btn} onClick={() => setI((i + 1) % p.n)}>Suivante</button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projets" style={{ padding: "6rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <p style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>// 02 — Projets</p>
          <h2 style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            Expériences <span style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 300 }}>& Réalisations</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {projects.map((p) => (
            <div key={p.slug} onMouseEnter={() => setHovered(p.slug)} onMouseLeave={() => setHovered(null)}
              style={{ background: "var(--surface)", border: `1px solid ${hovered === p.slug ? "var(--accent)" : "var(--border)"}`, borderRadius: "4px", padding: "2rem", display: "flex", flexDirection: "column", gap: "0.9rem", alignItems: "flex-start", transition: "border-color 0.3s, transform 0.3s", transform: hovered === p.slug ? "translateY(-4px)" : "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", gap: "1rem" }}>
                <span style={{ fontSize: "0.65rem", color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid var(--border)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>{p.type}</span>
                <span style={{ fontSize: "0.7rem", color: "var(--muted)" }}>{p.date}</span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: "0.75rem", color: "var(--accent)", opacity: 0.8 }}>{p.client}</p>
              <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.7 }}>{p.desc}</p>
              {p.stack.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {p.stack.map((t) => <span key={t} style={{ fontSize: "0.68rem", background: "var(--bg)", border: "1px solid var(--border)", padding: "0.25rem 0.6rem", borderRadius: "2px" }}>{t}</span>)}
                </div>
              )}
              <button style={{ ...btn, marginTop: "auto" }} onClick={() => setOpen(p)}>Voir les photos ({p.n})</button>
            </div>
          ))}
        </div>
      </div>
      {open && <Gallery p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
