export function HexLogo({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Hive Cafe hexagon logo"
    >
      {/* Outer hexagon */}
      <polygon
        points="50,2 95,26 95,74 50,98 5,74 5,26"
        fill="oklch(0.68 0.16 72)"
        stroke="oklch(0.58 0.14 70)"
        strokeWidth="2"
      />
      {/* Inner hexagon (honeycomb) */}
      <polygon
        points="50,12 85,31 85,69 50,88 15,69 15,31"
        fill="oklch(0.78 0.12 75)"
        stroke="oklch(0.68 0.16 72)"
        strokeWidth="1.5"
      />
      {/* Center hexagon */}
      <polygon
        points="50,22 75,36 75,64 50,78 25,64 25,36"
        fill="oklch(0.85 0.10 80)"
      />
      {/* Honey drop in center */}
      <ellipse
        cx="50"
        cy="52"
        rx="8"
        ry="11"
        fill="oklch(0.92 0.08 80)"
        opacity="0.9"
      />
      <ellipse
        cx="50"
        cy="48"
        rx="5"
        ry="6"
        fill="oklch(0.95 0.04 85)"
        opacity="0.7"
      />
    </svg>
  );
}
