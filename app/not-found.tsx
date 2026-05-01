import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "@/components/Wordmark";
import { Monogram } from "@/components/Monogram";
import { FlowerArt } from "@/components/FlowerArt";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-cream-soft overflow-hidden py-24 md:py-32">
      <FlowerArt
        name="floral-branch-tall"
        tone="gold-deep"
        opacity={0.45}
        className="absolute -top-2 -left-4 w-[160px] md:w-[240px] pointer-events-none"
      />
      <FlowerArt
        name="floral-branch-tall"
        tone="gold-deep"
        opacity={0.45}
        flip="both"
        className="absolute -bottom-2 -right-4 w-[160px] md:w-[240px] pointer-events-none"
      />

      <div className="relative max-w-xl mx-auto px-6 text-center">
        <div className="mx-auto w-full max-w-[320px]">
          <Wordmark variant="cream" size="sm" />
        </div>
        <div className="mt-6 flex justify-center text-gold-deep">
          <Monogram variant="PGS" size={56} />
        </div>

        <p className="font-script text-4xl md:text-5xl text-gold-deep mt-6">
          page not found
        </p>

        <h1 className="h-display text-4xl md:text-5xl text-ink mt-6 mb-4 leading-tight">
          We can&rsquo;t find that page.
        </h1>
        <p className="text-ink/70 leading-relaxed mb-10 text-[15px]">
          The link may be old, or the page may have moved. Head back to the
          garden and find your way from there.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="btn-gold">
            Back to home
            <ArrowRight size={14} />
          </Link>
          <Link href="/gallery" className="btn-ghost">
            Browse the gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
