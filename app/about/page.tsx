"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { FloralSprig } from "@/components/FloralSprig";
import { FlowerArt } from "@/components/FlowerArt";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-cream-soft text-center overflow-hidden">
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
          flip="both"
          className="absolute -bottom-2 -right-4 w-[160px] md:w-[220px] pointer-events-none"
        />

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="gold-rule mb-5">{t.about.eyebrow}</div>
          <h1 className="h-display text-5xl md:text-7xl text-ink mb-5">
            {t.about.title}
          </h1>
          <p className="font-display italic text-2xl text-ink/70">
            {t.about.sub}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[4/5] relative">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80"
                alt="Ivelisse at work in her cake studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -inset-3 border border-gold/30 -z-10" />
          </div>

          <div className="order-1 md:order-2">
            <div className="text-gold mb-6">
              <FloralSprig size={120} />
            </div>
            <p className="text-ink/80 leading-relaxed mb-5 text-[15px]">
              {t.about.body1}
            </p>
            <p className="text-ink/80 leading-relaxed mb-5 text-[15px]">
              {t.about.body2}
            </p>
            <p className="text-ink/80 leading-relaxed text-[15px]">
              {t.about.body3}
            </p>
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="font-display text-2xl text-ink mb-1">
                Ivelisse Schuwerer
              </p>
              <p className="eyebrow text-gold">Founder & Cake Artist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-cream-deep/30 relative overflow-hidden">
        <FlowerArt
          name="magnolia-spray"
          tone="gold-deep"
          opacity={0.3}
          className="absolute top-0 right-0 w-[260px] md:w-[380px] pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10">
            {t.about.values.map((v, i) => (
              <div key={i} className="text-center">
                <div className="h-px w-10 bg-gold mx-auto mb-5" />
                <h3 className="h-display text-2xl text-ink mb-3">{v.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Link href="/order" className="btn-gold">
            {t.nav.orderCta}
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
