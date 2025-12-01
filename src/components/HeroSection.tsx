import { Content } from "@/types/content";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  t: Content;
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-8 animate-fade-in-up border border-sky-100">
        <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
        AI Schedule Team
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
        {t.hero.title}
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        {t.hero.subtitle}
      </p>
      <p className="text-lg font-medium text-sky-600 mb-10">{t.hero.tagline}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center group">
          {t.hero.cta}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
