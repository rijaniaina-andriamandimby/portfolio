export default function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      borderTop: "1px solid var(--border)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem",
    }}>
      <span style={{ fontFamily: "Roboto, sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--accent)" }}>
        RA<span style={{ color: "var(--text)" }}>.</span>
      </span>
      <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
        © 2026 — Rijaniaina Andriamandimby. Tous droits réservés.
      </span>
      <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>
        Fianarantsoa, Madagascar
      </span>
    </footer>
  );
}
