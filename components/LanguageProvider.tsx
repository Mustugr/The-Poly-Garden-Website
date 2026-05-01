"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { dictionary, type Dict, type Language } from "@/lib/i18n";

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved =
      (typeof window !== "undefined" &&
        (localStorage.getItem("pgs-lang") as Language)) ||
      null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
      return;
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language.toLowerCase().startsWith("es")
    ) {
      setLangState("es");
    }
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("pgs-lang", l);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: dictionary[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
