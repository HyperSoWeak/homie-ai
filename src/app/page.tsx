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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900 dark:selection:bg-sky-900 dark:selection:text-sky-100">
      <Navbar lang={lang} setLang={setLang} t={t} />
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
