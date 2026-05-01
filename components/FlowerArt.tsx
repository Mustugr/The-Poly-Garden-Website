/**
 * Renders one of the brand's botanical line-art PNGs as a CSS mask, painted in
 * any brand color via `tone`. Because the PNG is used as a mask (not an <img>),
 * the same asset can be tinted gold on cream sections, cream-light on noir
 * sections, etc., and never carries a visible bounding box.
 *
 * Assets live in /public/flowers/ and are processed once from the raw 6000×6000
 * source PNGs in /branding-source/flowers-raw/ via `scripts/process-flowers.mjs`.
 */

type FlowerName =
  | "sweet-pea-garland"
  | "magnolia-spray"
  | "magnolia-pair"
  | "peonies-horizontal"
  | "floral-branch-tall";

type Tone =
  | "gold"
  | "gold-light"
  | "gold-deep"
  | "cream"
  | "cream-soft"
  | "ink"
  | "noir";

// Aspect ratio (width / height) of each processed PNG. Used to set the
// container's aspect-ratio so consumers only need to specify width.
const ASPECT: Record<FlowerName, number> = {
  "sweet-pea-garland": 1600 / 733,
  "magnolia-spray": 1600 / 985,
  "magnolia-pair": 1502 / 1600,
  "peonies-horizontal": 1600 / 949,
  "floral-branch-tall": 929 / 1600,
};

const TONE_VAR: Record<Tone, string> = {
  gold: "var(--color-gold)",
  "gold-light": "var(--color-gold-light)",
  "gold-deep": "var(--color-gold-deep)",
  cream: "var(--color-cream)",
  "cream-soft": "var(--color-cream-soft)",
  ink: "var(--color-ink)",
  noir: "var(--color-noir)",
};

type FlowerArtProps = {
  name: FlowerName;
  tone?: Tone;
  flip?: "x" | "y" | "both";
  rotate?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function FlowerArt({
  name,
  tone = "gold",
  flip,
  rotate,
  opacity,
  className,
  style,
}: FlowerArtProps) {
  const url = `/flowers/${name}.png`;
  const aspectRatio = String(ASPECT[name]);
  const transforms: string[] = [];
  if (flip === "x") transforms.push("scaleX(-1)");
  if (flip === "y") transforms.push("scaleY(-1)");
  if (flip === "both") transforms.push("scale(-1, -1)");
  if (rotate !== undefined) transforms.push(`rotate(${rotate}deg)`);

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        backgroundColor: TONE_VAR[tone],
        aspectRatio,
        opacity,
        transform: transforms.length ? transforms.join(" ") : undefined,
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        ...style,
      }}
    />
  );
}
