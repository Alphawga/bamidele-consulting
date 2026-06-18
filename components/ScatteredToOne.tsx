// Operations Console hero motif: scattered tools on the left converge into one
// system on the right. SVG + CSS only, so it stays fast and respects reduced motion.

const sources = [
  { label: "QuickBooks", x: 8, y: 26 },
  { label: "WhatsApp", x: 0, y: 104 },
  { label: "Spreadsheets", x: 20, y: 182 },
  { label: "Sticky notes", x: 4, y: 248 },
];

const target = { x: 300, y: 118 };

export default function ScatteredToOne() {
  return (
    <svg
      viewBox="0 0 480 320"
      className="h-auto w-full"
      role="img"
      aria-label="Scattered tools converging into one system"
    >
      {/* connectors */}
      {sources.map((s, i) => (
        <path
          key={s.label}
          d={`M ${s.x + 96} ${s.y + 16} C ${s.x + 190} ${s.y + 16}, ${target.x - 60} ${target.y + 42}, ${target.x} ${target.y + 42}`}
          fill="none"
          stroke="#C2611B"
          strokeWidth="1.25"
          pathLength={1}
          className="converge-line"
          style={{ animationDelay: `${0.15 * i}s` }}
        />
      ))}

      {/* scattered source chips */}
      {sources.map((s) => (
        <g key={s.label} transform={`translate(${s.x} ${s.y})`}>
          <rect
            width="96"
            height="32"
            rx="3"
            fill="#F7F6F2"
            stroke="#E3E1D9"
            strokeWidth="1"
          />
          <text
            x="48"
            y="21"
            textAnchor="middle"
            fontFamily="var(--font-mono), monospace"
            fontSize="11"
            fill="#5B6B7B"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* unified system */}
      <g transform={`translate(${target.x} ${target.y})`}>
        <rect width="160" height="84" rx="4" fill="#11243B" />
        <rect
          x="12"
          y="14"
          width="136"
          height="1"
          fill="#C2611B"
          opacity="0.7"
        />
        <text
          x="80"
          y="42"
          textAnchor="middle"
          fontFamily="var(--font-display), sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#F7F6F2"
        >
          ONE SYSTEM
        </text>
        <text
          x="80"
          y="62"
          textAnchor="middle"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="2"
          fill="#8A98A6"
        >
          SOURCING → DELIVERY
        </text>
      </g>
    </svg>
  );
}
