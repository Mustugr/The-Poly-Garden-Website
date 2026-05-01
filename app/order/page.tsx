"use client";

import { useLang } from "@/components/LanguageProvider";
import { OrderForm } from "@/components/OrderForm";
import { Wordmark } from "@/components/Wordmark";
import { Monogram } from "@/components/Monogram";
import { FlowerArt } from "@/components/FlowerArt";

export default function OrderPage() {
  const { t, lang } = useLang();

  return (
    <section className="bg-cream pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Paper-style framed order form — echoes the original printed layout */}
        <div className="relative bg-cream-soft border border-gold/40 px-6 py-10 md:px-14 md:py-16 overflow-hidden">
          {/* Inner double-frame line */}
          <div className="absolute inset-3 border border-gold/25 pointer-events-none" />

          {/* Real flower line-art at top-left and bottom-right corners (mirrored) */}
          <FlowerArt
            name="floral-branch-tall"
            tone="gold-deep"
            opacity={0.85}
            className="absolute -top-6 -left-6 w-[180px] md:w-[240px] pointer-events-none"
          />
          <FlowerArt
            name="floral-branch-tall"
            tone="gold-deep"
            opacity={0.85}
            flip="both"
            className="absolute -bottom-6 -right-6 w-[180px] md:w-[240px] pointer-events-none"
          />

          {/* Header — code-built wordmark + PGS monogram + script subtitle */}
          <div className="relative text-center mb-10 md:mb-14">
            <div className="mx-auto w-full max-w-[420px]">
              <Wordmark variant="cream" size="md" />
            </div>
            <div className="mt-5 flex justify-center text-gold-deep">
              <Monogram variant="PGS" size={64} />
            </div>
            <p className="font-script text-4xl md:text-5xl text-gold-deep mt-3">
              {lang === "es" ? "Formulario de Pedido" : "Custom Order Form"}
            </p>
            <div className="mt-6 mx-auto h-px w-full max-w-md bg-gold/30" />
            <p className="text-ink/65 max-w-xl mx-auto text-[15px] leading-relaxed mt-6">
              {t.order.sub}
            </p>
          </div>

          {/* Form */}
          <div className="relative">
            <OrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
