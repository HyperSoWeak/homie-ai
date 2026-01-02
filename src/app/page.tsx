"use client";

import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
// import PricingSection from "@/components/PricingSection";
import CompanionsSection from "@/components/CompanionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-900 selection:text-sky-100">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <HeroSection t={t} />
      <ProblemSection t={t} />
      <SolutionSection t={t} />
      <FeaturesSection t={t} />
      {/*<PricingSection t={t} />*/}
      <CompanionsSection t={t} />
      <Footer t={t} />
    </div>
  );
}
