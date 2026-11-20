"use client";

const skills = [
  { category: "Langages", items: ["Python", "Java", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["ReactJS", "NextJS"] },
  { category: "Backend", items: ["NodeJS", "ExpressJS", "Django", "NestJS (bases)", "FastAPI (bases)"] },
  { category: "Base de données", items: ["PostgreSQL", "MySQL"] },
  { category: "DevOps & Outils", items: ["Git", "Docker"] },
];

const languages = [
  { lang: "Français", level: "B2", pct: 72 },
  { lang: "Anglais", level: "B1", pct: 55 },
  { lang: "Malgache", level: "Natif", pct: 100 },
];

export default function Skills() {
  return (
    <section id="competences" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "4rem" }}>
        <p style={{ color: "var(--accent)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          // 01 — Compétences
        </p>
        <h2 style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
          Stack <span style={{ color: "var(--accent)", fontStyle: "italic", fontFamily: "Roboto, sans-serif" }}>technique</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
        {skills.map((group, i) => (
          <div
            key={group.category}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "1.5rem",
              position: "relative",
              overflow: "hidden",
              animation: `fadeUp 0.5s ${i * 0.1}s ease both`,
            }}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "var(--accent)",
            }} />
            <p style={{ color: "var(--muted)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem" }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {group.items.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                    padding: "0.35rem 0.7rem",
                    fontSize: "0.72rem",
                    borderRadius: "2px",
                    fontFamily: "Roboto, sans-serif",
                    transition: "border-color 0.2s, color 0.2s",
                    cursor: "default",
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
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", padding: "2rem" }}>
        <p style={{ color: "var(--muted)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Langues
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {languages.map((l) => (
            <div key={l.lang}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "0.8rem", fontFamily: "Roboto, sans-serif", fontWeight: 600 }}>{l.lang}</span>
                <span style={{ fontSize: "0.72rem", color: "var(--accent)" }}>{l.level}</span>
              </div>
              <div style={{ height: "3px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${l.pct}%`,
                  background: "var(--accent)",
                  borderRadius: "2px",
                  transition: "width 1s ease",
                }} />
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
