type MonogramProps = {
  variant?: "PGS" | "PG";
  size?: number;
  className?: string;
};

const FONT = '"Cormorant Garamond", "Times New Roman", Georgia, serif';

export function Monogram({
  variant = "PGS",
  size = 72,
  className,
}: MonogramProps) {
  if (variant === "PG") {
    return (
      <svg
        viewBox="0 0 180 160"
        width={size}
        height={(size * 160) / 180}
        className={className}
        fill="currentColor"
        aria-hidden="true"
      >
        <g
          fontFamily={FONT}
          fontWeight={500}
          textAnchor="middle"
          fontStyle="normal"
        >
          <text x="64" y="128" fontSize="160">
            P
          </text>
          <text x="120" y="128" fontSize="160">
            G
          </text>
        </g>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 240 160"
      width={size}
      height={(size * 160) / 240}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <g fontFamily={FONT} fontWeight={500} textAnchor="middle">
        <text x="62" y="128" fontSize="148">
          P
        </text>
        <text x="120" y="128" fontSize="158">
          G
        </text>
        <text x="178" y="128" fontSize="148">
          S
        </text>
      </g>
    </svg>
  );
}
