"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { FloralSprig } from "@/components/FloralSprig";
import { Monogram } from "@/components/Monogram";
import { Wordmark } from "@/components/Wordmark";
import { FlowerArt } from "@/components/FlowerArt";
import { LandingAnimation } from "@/components/LandingAnimation";
import { featuredCakes, cakes } from "@/lib/cakes";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <>
      <LandingAnimation />
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-cream -mt-20 pt-20">
        {/* Botanical accents — real flower line-art tinted gold */}
        <FlowerArt
          name="floral-branch-tall"
          tone="gold-deep"
          opacity={0.55}
          className="absolute top-20 -left-10 md:left-0 w-[180px] md:w-[280px] pointer-events-none"
        />
        <FlowerArt
          name="magnolia-pair"
          tone="gold-deep"
          opacity={0.55}
          flip="x"
          className="absolute bottom-0 -right-10 md:right-0 w-[200px] md:w-[300px] pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 py-20 text-center fade-up">
          <div className="gold-rule mb-7">{t.home.eyebrow}</div>

          {/* Brand lockup — wordmark + PGS monogram, all rendered in code */}
          <div className="mx-auto w-full max-w-[620px]">
            <Wordmark variant="cream" size="lg" />
            <div className="mt-8 flex justify-center text-gold-deep">
              <Monogram variant="PGS" size={96} />
            </div>
          </div>

          <div className="mt-8 flex justify-center text-gold/70">
            <FloralSprig size={140} />
          </div>

          <div className="mt-8 mx-auto max-w-xl">
            <p className="font-display text-2xl md:text-3xl text-ink/80 italic leading-snug">
              {t.home.tagline}
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/order" className="btn-gold">
              {t.home.ctaPrimary}
              <ArrowRight size={14} />
            </Link>
            <Link href="/gallery" className="btn-ghost">
              {t.home.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- STORY SPLIT ---------------- */}
      <section className="relative py-24 md:py-32 bg-cream-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=85"
                alt="Floral wedding cake"
                fill
                className="object-cover"
              />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -inset-3 border border-gold/30 -z-0 pointer-events-none" />
            {/* Small monogram badge */}
            <div className="absolute -bottom-6 -right-6 bg-cream-soft border border-gold/40 p-5 text-gold">
              <Monogram variant="PG" size={36} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 eyebrow text-gold">
              <span className="h-px w-10 bg-gold" />
              <span>{t.home.storyEyebrow}</span>
            </div>
            <h2 className="h-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
              {t.home.storyTitle}
            </h2>
            <p className="text-ink/75 leading-relaxed mb-6 text-[15px]">
              {t.home.storyBody}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 eyebrow text-gold-deep hover:text-gold transition-colors"
            >
              {t.home.storyLink}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED CAKES ---------------- */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="gold-rule mb-5">{t.home.featuredEyebrow}</div>
            <h2 className="h-display text-3xl md:text-4xl text-ink mb-4">
              {t.home.featuredTitle}
            </h2>
            <p className="text-ink/65 max-w-xl mx-auto text-[14px]">
              {t.home.featuredSub}
            </p>
            <div className="mt-5 flex justify-center text-gold/70">
              <FloralSprig size={100} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {featuredCakes.map((cake) => (
              <Link
                key={cake.id}
                href="/gallery"
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={cake.src}
                    alt={cake.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="h-display text-xl text-ink mb-1">
                  {cake.title[lang]}
                </h3>
                <p className="text-ink/60 text-[13px] leading-relaxed">
                  {cake.description[lang]}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/gallery" className="btn-ghost">
              {t.nav.gallery}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* ---------------- TESTIMONIALS ---------------- */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="gold-rule mb-5">{t.home.testimonialsEyebrow}</div>
            <h2 className="h-display text-4xl md:text-5xl text-ink">
              {t.home.testimonialsTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Our wedding cake was the most beautiful thing I have ever seen. Every petal was perfect.",
                quoteEs:
                  "Nuestro pastel de boda fue lo más hermoso que he visto. Cada pétalo perfecto.",
                name: "María & Daniel",
                event: "Wedding · 2025",
              },
              {
                quote:
                  "Ivelisse made my daughter's quinceañera unforgettable. The floral work is unreal.",
                quoteEs:
                  "Ivelisse hizo inolvidable la quinceañera de mi hija. El trabajo floral es increíble.",
                name: "Sofía R.",
                event: "Quinceañera · 2025",
              },
              {
                quote:
                  "The taste matches the look — light, fresh, and absolutely worth it. We'll be back.",
                quoteEs:
                  "El sabor está a la altura — ligero, fresco y vale cada centavo. Volveremos.",
                name: "James K.",
                event: "Birthday · 2024",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className="relative bg-cream-soft border border-gold/20 p-8"
              >
                <div className="font-display text-gold text-5xl leading-none mb-2 select-none">
                  &ldquo;
                </div>
                <blockquote className="font-display italic text-xl text-ink/85 leading-relaxed mb-6">
                  &ldquo;{lang === "es" ? t.quoteEs : t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-gold/20 pt-4">
                  <div className="font-display text-lg text-ink">{t.name}</div>
                  <div className="eyebrow text-gold mt-1">{t.event}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA BANNER ---------------- */}
      <section className="relative py-24 md:py-32 bg-noir text-cream overflow-hidden">
        {/* Botanical corner flourishes */}
        <FlowerArt
          name="floral-branch-tall"
          tone="gold-light"
          opacity={0.25}
          className="absolute top-0 -left-8 w-[180px] md:w-[260px] pointer-events-none"
        />
        <FlowerArt
          name="magnolia-pair"
          tone="gold-light"
          opacity={0.25}
          flip="x"
          className="absolute bottom-0 -right-8 w-[200px] md:w-[280px] pointer-events-none"
        />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          {/* Hero peonies + PG monogram + wordmark lockup */}
          <div className="mx-auto mb-10 w-full max-w-[520px] flex flex-col items-center">
            <FlowerArt
              name="peonies-horizontal"
              tone="gold-light"
              opacity={0.85}
              className="w-full"
            />
            <div className="-mt-2 mb-4 text-gold-light">
              <Monogram variant="PG" size={84} />
            </div>
            <Wordmark variant="dark" size="md" className="w-full max-w-[360px]" />
          </div>
          <h2 className="h-display text-4xl md:text-6xl mb-6 text-cream">
            {t.home.ctaBannerTitle}
          </h2>
          <p className="text-cream/70 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            {t.home.ctaBannerSub}
          </p>
          <Link href="/order" className="btn-gold btn-gold-solid">
            {t.home.ctaBannerButton}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
