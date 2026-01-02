"use client";

import { useState, useEffect } from "react";
import { content } from "@/lib/content";

type Lang = "en" | "zh-tw";

export function useLanguage() {
  // Initialize with a static default to match server-side rendering
  const [lang, setLang] = useState<Lang>("zh-tw");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("homie-lang") as Lang;
    if (savedLang && (savedLang === "en" || savedLang === "zh-tw")) {
      setLang(savedLang);
    }
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("homie-lang", newLang);
  };

  return { lang, setLang: handleSetLang, t: content[lang], mounted };
}