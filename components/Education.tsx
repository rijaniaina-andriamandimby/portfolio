"use client";

const formations = [
  {
    title: "Master Professionnel en Génie Logiciel & Base de Données",
    school: "Ecole Nationale d'Informatique — Université de Fianarantsoa",
    period: "En cours",
    status: "EN COURS",
    color: "#cfd2d6",
  },
  {
    title: "Licence Professionnelle en Génie Logiciel & Base de Données",
    school: "Ecole Nationale d'Informatique — Université de Fianarantsoa",
    period: "2022 – 2025",
    status: "OBTENU",
    color: "#8f949b",
  },
  {
    title: "Formation en Langue Anglaise",
    school: "Madagascar Professional Training Center Andranomena",
    period: "Janv – Août 2022",
    status: "CERTIFIÉ",
    color: "#aeb2b8",
  },
  {
    title: "Formation en Bureautique et Infographie",
    school: "Institut de Formation Professionnel Antohomadinika",
    period: "Octobre 2022",
    status: "CERTIFIÉ",
    color: "#aeb2b8",
  },
  {
    title: "Baccalauréat Série C",
    school: "Lycée Catholique Notre Dame de l'Assomption Mahitsy",
    period: "2020 – 2021",
    status: "OBTENU",
    color: "#9a9da2",
  },
];

export default function Education() {
  return (
    <section id="formation" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          // 03 — Formation
        </p>
        <h2 style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
          Parcours <span style={{ color: "var(--accent)", fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}>académique</span>
        </h2>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "1.5rem",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "var(--border)",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {formations.map((f, i) => (
            <div
              key={f.title}
              style={{
                display: "flex",
                gap: "2.5rem",
                paddingBottom: i < formations.length - 1 ? "2.5rem" : "0",
                position: "relative",
                animation: `fadeUp 0.5s ${i * 0.1}s ease both`,
              }}
            >
              {/* Dot */}
              <div style={{
                position: "relative",
                flexShrink: 0,
                width: "3rem",
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.35rem",
                zIndex: 1,
              }}>
                <div style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: f.color,
                  border: "3px solid var(--bg)",
                  boxShadow: `0 0 0 1px ${f.color}`,
                }} />
              </div>

              {/* Content */}
              <div style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "1.5rem",
                flex: 1,
                borderLeft: `3px solid ${f.color}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <span style={{
                    fontSize: "0.6rem",
                    color: f.color,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    background: `${f.color}15`,
                    border: `1px solid ${f.color}40`,
                    padding: "0.2rem 0.6rem",
                    borderRadius: "2px",
                  }}>
                    {f.status}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--muted)", fontFamily: "Roboto, sans-serif" }}>
                    {f.period}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  marginBottom: "0.4rem",
                  lineHeight: 1.4,
                }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "var(--muted)", lineHeight: 1.5 }}>
                  {f.school}
                </p>
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
      `}</style>
    </section>
  );
}
