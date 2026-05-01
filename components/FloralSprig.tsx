type FloralSprigProps = {
  size?: number;
  className?: string;
};

export function FloralSprig({ size = 140, className }: FloralSprigProps) {
  return (
    <svg
      viewBox="0 0 200 32"
      width={size}
      height={(size * 32) / 200}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="2" y1="16" x2="62" y2="16" />

      <g transform="translate(74 16)">
        <path d="M 0 0 C 5 -3, 5 -10, 0 -13 C -5 -10, -5 -3, 0 0 Z" />
        <path d="M 0 -2 L 0 -11" strokeWidth="0.5" />
      </g>

      <g transform="translate(100 16)">
        {[0, 72, 144, 216, 288].map((rot) => (
          <path
            key={rot}
            d="M 0 -1 C 3 -2.5, 3 -7, 0 -8 C -3 -7, -3 -2.5, 0 -1 Z"
            transform={`rotate(${rot})`}
          />
        ))}
        <circle r="1.4" fill="currentColor" />
      </g>

      <g transform="translate(126 16)">
        <path d="M 0 0 C -5 -3, -5 -10, 0 -13 C 5 -10, 5 -3, 0 0 Z" />
        <path d="M 0 -2 L 0 -11" strokeWidth="0.5" />
      </g>

      <line x1="138" y1="16" x2="198" y2="16" />
    </svg>
  );
}
