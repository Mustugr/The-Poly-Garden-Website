"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { FloralSprig } from "@/components/FloralSprig";
import { FlowerArt } from "@/components/FlowerArt";
import { IconInstagram } from "@/components/IconInstagram";

export default function ContactPage() {
  const { t } = useLang();

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
          <div className="gold-rule mb-5">{t.contact.eyebrow}</div>
          <h1 className="h-display text-5xl md:text-7xl text-ink mb-5">
            {t.contact.title}
          </h1>
          <p className="text-ink/70 max-w-xl mx-auto text-[15px]">
            {t.contact.sub}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <ContactCard
              icon={<Mail size={20} />}
              label={t.contact.emailLabel}
              value="hello@thepolygardensugar.com"
              href="mailto:hello@thepolygardensugar.com"
            />
            <ContactCard
              icon={<Phone size={20} />}
              label={t.contact.phoneLabel}
              value="By inquiry — see order form"
              href="/order"
            />
            <ContactCard
              icon={<Clock size={20} />}
              label={t.contact.hoursLabel}
              value={t.contact.hoursValue}
            />
            <ContactCard
              icon={<MapPin size={20} />}
              label={t.contact.areaLabel}
              value={t.contact.areaValue}
            />
          </div>

          <div className="mt-14 text-center">
            <div className="text-gold flex justify-center mb-6">
              <FloralSprig size={140} />
            </div>
            <h3 className="h-display text-2xl text-ink mb-5">
              {t.contact.followLabel}
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 eyebrow text-gold-deep hover:text-gold transition-colors"
            >
              <IconInstagram size={16} />
              @thepolygardensugar
            </a>
          </div>

          <div className="mt-16 pt-12 border-t border-gold/20 text-center">
            <p className="font-display italic text-2xl text-ink/80 mb-6">
              The fastest way to start a conversation:
            </p>
            <Link href="/order" className="btn-gold">
              {t.nav.orderCta}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="bg-cream-soft border border-gold/25 p-7 hover:border-gold transition-colors group h-full">
      <div className="text-gold mb-4">{icon}</div>
      <div className="eyebrow text-ink/60 mb-1.5">{label}</div>
      <div className="font-display text-xl text-ink group-hover:text-gold-deep transition-colors break-words">
        {value}
      </div>
    </div>
  );
  return href ? (
    <Link href={href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}
