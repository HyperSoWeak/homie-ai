"use client";

import { useState, useEffect } from "react";
import { content } from "@/lib/content";

type Lang = "en" | "zh-tw";

export function useLanguage() {
  const [lang, setLang] = useState<Lang>("zh-tw");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("homie-lang") as Lang;
    if (savedLang && (savedLang === "en" || savedLang === "zh-tw")) {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("homie-lang", newLang);
  };

  // Return default content during SSR/hydration to prevent mismatch
  // But since the whole page is client-side rendered effectively for the content part,
  // we just return the current state. The flash is acceptable or we can handle it.
  // Actually, to be cleaner, we can just return the current state.

  return { lang, setLang: handleSetLang, t: content[lang], mounted };
}
