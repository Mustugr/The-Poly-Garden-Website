"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { FlowerArt } from "@/components/FlowerArt";

export default function FAQPage() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
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
          <div className="gold-rule mb-5">{t.faq.eyebrow}</div>
          <h1 className="h-display text-5xl md:text-7xl text-ink">
            {t.faq.title}
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <ul className="divide-y divide-gold/20 border-y border-gold/20">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left hover:text-gold-deep transition-colors"
                  >
                    <span className="font-display text-xl md:text-2xl text-ink leading-snug">
                      {item.q}
                    </span>
                    <span className="text-gold flex-shrink-0 mt-1.5">
                      {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink/70 leading-relaxed text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="text-center mt-16">
            <p className="font-display italic text-xl text-ink/70 mb-6">
              Still have questions?
            </p>
            <Link href="/contact" className="btn-ghost">
              {t.nav.contact}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
