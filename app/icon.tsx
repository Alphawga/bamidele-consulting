import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const PARCHMENT = "#f2ecdf";
const OXBLOOD = "#8e2c48";
const GOLD = "#c79a3b";
const FOREST = "#2e4a3b";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 8,
          background: PARCHMENT,
          paddingBottom: 8,
        }}
      >
        <div style={{ width: 12, height: 38, background: OXBLOOD }} />
        <div style={{ width: 12, height: 26, background: GOLD }} />
        <div style={{ width: 12, height: 48, background: FOREST }} />
      </div>
    ),
    { ...size }
  );
}
