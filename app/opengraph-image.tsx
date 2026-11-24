import { ImageResponse } from "next/og";

export const alt = "Rijaniaina Andriamandimby — Full Stack Developer · Python / JavaScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#2a2c2f", color: "#ececea" }}>
        <div style={{ fontSize: 28, color: "#cfd2d6", letterSpacing: 4, marginBottom: 24 }}>PORTFOLIO</div>
        <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.05 }}>Rijaniaina Andriamandimby</div>
        <div style={{ fontSize: 38, color: "#cfd2d6", marginTop: 28 }}>Full Stack Developer · Python / JavaScript</div>
      </div>
    ),
    size
  );
}
