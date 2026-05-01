type WordmarkProps = {
  variant?: "cream" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
};

const SIZES = {
  xs: {
    small: "text-[0.55rem]",
    big: "text-base md:text-lg",
    rule: "w-5",
    gap: "gap-1.5",
  },
  sm: {
    small: "text-[0.7rem]",
    big: "text-2xl md:text-[1.7rem]",
    rule: "w-8",
    gap: "gap-2",
  },
  md: {
    small: "text-sm md:text-base",
    big: "text-4xl md:text-5xl",
    rule: "w-12",
    gap: "gap-3",
  },
  lg: {
    small: "text-lg md:text-xl",
    big: "text-6xl md:text-7xl lg:text-[5rem]",
    rule: "w-14 md:w-20",
    gap: "gap-3 md:gap-4",
  },
  xl: {
    small: "text-xl md:text-2xl",
    big: "text-7xl md:text-8xl lg:text-[6rem]",
    rule: "w-16 md:w-24",
    gap: "gap-4 md:gap-5",
  },
} as const;

export function Wordmark({
  variant = "cream",
  size = "lg",
  className,
}: WordmarkProps) {
  const s = SIZES[size];
  const main = variant === "dark" ? "text-cream" : "text-ink";

  return (
    <div className={`text-center ${main} ${className ?? ""}`}>
      <div className={`flex items-center justify-center ${s.gap}`}>
        <span className={`block h-px bg-gold ${s.rule}`} />
        <span
          className={`font-display ${s.small} tracking-[0.45em] uppercase font-medium leading-none`}
        >
          The
        </span>
        <span className={`block h-px bg-gold ${s.rule}`} />
      </div>

      <h2
        className={`font-display ${s.big} tracking-[0.02em] uppercase font-medium leading-[1.05] my-[0.18em]`}
      >
        Poly Garden
      </h2>

      <div className={`flex items-center justify-center ${s.gap}`}>
        <span className={`block h-px bg-gold ${s.rule}`} />
        <span
          className={`font-display ${s.small} tracking-[0.45em] uppercase font-medium leading-none`}
        >
          Sugar
        </span>
        <span className={`block h-px bg-gold ${s.rule}`} />
      </div>
    </div>
  );
}
