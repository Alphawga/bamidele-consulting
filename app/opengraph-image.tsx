import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bamidele Ajibola — one intelligent system for your operation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#11243B",
          color: "#F7F6F2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#C2611B" }}>
          BAMIDELE AJIBOLA
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          I consolidate scattered business operations into one intelligent system.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8A98A6" }}>
          Sourcing to delivery. One source of truth. Lagos.
        </div>
      </div>
    ),
    { ...size }
  );
}
