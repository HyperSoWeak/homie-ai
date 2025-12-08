"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900 dark:selection:text-sky-100">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <div className="pt-20">
        <PricingSection t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}
