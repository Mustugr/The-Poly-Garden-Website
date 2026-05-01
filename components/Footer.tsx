"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { IconInstagram } from "./IconInstagram";
import { useLang } from "./LanguageProvider";
import { Wordmark } from "./Wordmark";
import { Monogram } from "./Monogram";
import { FlowerArt } from "./FlowerArt";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-noir text-cream/90 overflow-hidden">
      {/* Sweet pea garland — top edge floral seam */}
      <FlowerArt
        name="sweet-pea-garland"
        tone="gold-light"
        opacity={0.18}
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-[680px] max-w-[110vw] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-2 max-w-sm">
            {/* Code-built wordmark + PG monogram on dark */}
            <div className="flex items-center gap-5 mb-5">
              <div className="w-[200px]">
                <Wordmark variant="dark" size="sm" />
              </div>
              <span className="text-gold-light">
                <Monogram variant="PG" size={52} />
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2 text-gold/80 text-[11px] tracking-[0.3em] uppercase">
              <span className="h-px w-8 bg-gold/40" />
              <span>By Ivelisse Schuwerer</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="eyebrow text-gold mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-gold transition-colors">
                  {t.nav.order}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow text-gold mb-5">{t.footer.contact}</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-0.5 text-gold flex-shrink-0" />
                <a
                  href="mailto:hello@thepolygardensugar.com"
                  className="hover:text-gold transition-colors break-all"
                >
                  hello@thepolygardensugar.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-0.5 text-gold flex-shrink-0" />
                <span>(NY/NJ) — by inquiry</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-gold flex-shrink-0" />
                <span>New York · New Jersey</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-gold flex-shrink-0">
                  <IconInstagram size={14} />
                </span>
                <a href="#" className="hover:text-gold transition-colors">
                  @thepolygardensugar
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="eyebrow text-gold mb-2">{t.footer.hours}</h4>
              <p className="text-sm text-cream/70">{t.footer.hoursValue}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            © {year} The Poly Garden Sugar. {t.footer.rights}
          </p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold/60">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
}
