"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DynamicSchedulingSection from "@/components/DynamicSchedulingSection";
import FeaturesSection from "@/components/FeaturesSection";
import CompanionsSection from "@/components/CompanionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh-tw">("zh-tw");
  const t = content[lang];

  const toggleLang = () => {
    setLang(lang === "en" ? "zh-tw" : "en");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      <Navbar lang={lang} toggleLang={toggleLang} t={t} />
      <HeroSection t={t} />
      <ProblemSection t={t} />
      <SolutionSection t={t} />
      <DynamicSchedulingSection t={t} />
      <FeaturesSection t={t} />
      <CompanionsSection t={t} />
      <Footer t={t} />
    </div>
  );
}
