"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import {
  Calendar,
  Clock,
  Zap,
  Brain,
  MessageCircle,
  BarChart3,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Globe,
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh-tw">("zh-tw");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = content[lang];

  const toggleLang = () => {
    setLang(lang === "en" ? "zh-tw" : "en");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Homie
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={toggleLang}
                className="flex items-center text-slate-600 hover:text-sky-600 transition-colors"
              >
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "中文" : "English"}
              </button>
              <button className="btn-primary">{t.nav.cta}</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <button
                onClick={toggleLang}
                className="flex items-center w-full px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md"
              >
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "Switch to Chinese" : "Switch to English"}
              </button>
              <button className="w-full btn-primary">{t.nav.cta}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-sky-500 mr-2"></span>
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

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.problem.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.problem.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                {t.solution.title}
              </h2>
              <p className="text-xl text-slate-600 mb-8">{t.solution.subtitle}</p>
              <div className="space-y-6">
                {t.solution.items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-blue-50 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <div className="space-y-4">
                  {/* Mock UI Elements */}
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="h-2.5 w-24 bg-slate-200 rounded mb-2"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-20 bg-white rounded-lg border border-slate-200"></div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-sky-50 rounded-xl border border-sky-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-sky-600" />
                      </div>
                      <div>
                        <div className="h-2.5 w-32 bg-sky-200 rounded mb-2"></div>
                        <div className="h-2 w-20 bg-sky-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-sky-600">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 opacity-60">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <div className="h-2.5 w-28 bg-slate-200 rounded mb-2"></div>
                        <div className="h-2 w-12 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Scheduling Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t.dynamicScheduling.title}</h2>
          <p className="text-xl text-slate-300 mb-12">{t.dynamicScheduling.subtitle}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.dynamicScheduling.items.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-500 transition-colors"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-medium text-sky-400">{t.dynamicScheduling.footer}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t.features.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.items.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center mb-6">
                  {index === 0 && <Brain className="w-7 h-7 text-sky-600" />}
                  {index === 1 && <MessageCircle className="w-7 h-7 text-sky-600" />}
                  {index === 2 && <BarChart3 className="w-7 h-7 text-sky-600" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">{t.companions.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.companions.items.map((companion, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg transition-all"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{companion.name}</h3>
                  <p className="text-sm font-medium text-sky-600 uppercase tracking-wide">
                    {companion.role}
                  </p>
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{companion.desc}</p>
                <blockquote className="pl-4 border-l-2 border-sky-200 italic text-slate-500 text-sm">
                  &quot;{companion.quote}&quot;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">{t.footer.text}</h2>
          <button className="btn-primary text-lg px-10 py-4 shadow-xl shadow-sky-200">
            {t.footer.cta}
          </button>
          <div className="mt-16 text-slate-400 text-sm">
            © {new Date().getFullYear()} Homie AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
