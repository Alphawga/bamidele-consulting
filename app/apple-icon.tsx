import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const PARCHMENT = "#f2ecdf";
const OXBLOOD = "#8e2c48";
const GOLD = "#c79a3b";
const FOREST = "#2e4a3b";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 22,
          background: PARCHMENT,
          paddingBottom: 24,
        }}
      >
        <div style={{ width: 32, height: 108, background: OXBLOOD }} />
        <div style={{ width: 32, height: 74, background: GOLD }} />
        <div style={{ width: 32, height: 132, background: FOREST }} />
      </div>
    ),
    { ...size }
  );
}
