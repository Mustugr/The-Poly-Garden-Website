"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Monogram";
import { useLang } from "./LanguageProvider";
import type { Language } from "@/lib/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: Array<{ href: string; label: string }> = [
    { href: "/", label: t.nav.home },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/about", label: t.nav.about },
    { href: "/faq", label: t.nav.faq },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-gold/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-gold">
            <Monogram variant="PGS" size={36} />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[15px] tracking-[0.18em] text-ink uppercase">
              The Poly Garden
            </span>
            <span className="font-display text-[10px] tracking-[0.5em] text-gold uppercase mt-0.5">
              Sugar
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="eyebrow text-ink hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <div className="hidden md:block">
            <Link href="/order" className="btn-gold">
              {t.nav.orderCta}
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-gold/20 mt-3">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-ink hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 self-start"
            >
              {t.nav.orderCta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: Language;
  setLang: (l: Language) => void;
}) {
  return (
    <div className="flex items-center text-[11px] tracking-[0.2em] uppercase border border-gold/40 rounded-full overflow-hidden">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "en" ? "bg-gold text-cream" : "text-ink hover:bg-gold/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className={`px-3 py-1.5 transition-colors ${
          lang === "es" ? "bg-gold text-cream" : "text-ink hover:bg-gold/10"
        }`}
      >
        ES
      </button>
    </div>
  );
}
