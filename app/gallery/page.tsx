"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { FlowerArt } from "@/components/FlowerArt";
import { cakes, type Category } from "@/lib/cakes";

type Filter = "all" | Category;

export default function GalleryPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? cakes : cakes.filter((c) => c.category === filter);

  const filterButtons: Array<{ key: Filter; label: string }> = [
    { key: "all", label: t.gallery.filters.all },
    { key: "cake", label: t.gallery.filters.cake },
    { key: "cupcakes", label: t.gallery.filters.cupcakes },
    { key: "desserts", label: t.gallery.filters.desserts },
    { key: "floral", label: t.gallery.filters.floral },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-cream-soft text-center overflow-hidden">
        <FlowerArt
          name="floral-branch-tall"
          tone="gold-deep"
          opacity={0.45}
          className="absolute -top-2 -left-4 w-[160px] md:w-[220px] pointer-events-none"
        />
        <FlowerArt
          name="floral-branch-tall"
          tone="gold-deep"
          opacity={0.45}
          flip="x"
          className="absolute -top-2 -right-4 w-[160px] md:w-[220px] pointer-events-none"
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="gold-rule mb-5">{t.gallery.eyebrow}</div>
          <h1 className="h-display text-5xl md:text-7xl text-ink mb-5">
            {t.gallery.title}
          </h1>
          <p className="text-ink/65 max-w-xl mx-auto text-[15px] leading-relaxed">
            {t.gallery.sub}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-gold/15 bg-cream sticky top-[68px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-wrap justify-center gap-2 md:gap-3">
          {filterButtons.map((b) => {
            const active = filter === b.key;
            return (
              <button
                key={b.key}
                onClick={() => setFilter(b.key)}
                className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase border transition-all ${
                  active
                    ? "bg-ink text-cream border-ink"
                    : "border-gold/30 text-ink hover:border-gold hover:text-gold-deep"
                }`}
              >
                {b.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid — uniform 4:5 portrait, clean editorial 2/3-column layout */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((cake) => (
              <figure
                key={cake.id}
                className="group relative overflow-hidden aspect-[4/5] bg-cream-deep/30"
              >
                <Image
                  src={cake.src}
                  alt={cake.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 md:p-6">
                  <div className="text-gold text-[10px] tracking-[0.3em] uppercase mb-1">
                    {t.gallery.filters[
                      cake.category as keyof typeof t.gallery.filters
                    ] ?? cake.category}
                  </div>
                  <h3 className="h-display text-xl md:text-2xl text-cream mb-1 leading-tight">
                    {cake.title[lang]}
                  </h3>
                  <p className="text-cream/85 text-xs leading-relaxed">
                    {cake.description[lang]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-20 bg-cream-soft text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="font-display italic text-2xl md:text-3xl text-ink/85 mb-8 leading-snug">
            {lang === "es"
              ? "Inspirada por algo que viste? Cada pieza se hace nueva — adaptada a tu visión."
              : "Inspired by what you see? Every piece is built fresh — tailored to your vision."}
          </p>
          <Link href="/order" className="btn-gold">
            {t.nav.orderCta}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
