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
  Shield,
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
                className="flex items-center text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 mr-2" />
                {lang === "en" ? "繁體中文" : "English"}
              </button>
              <button className="btn-primary">{t.nav.cta}</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-slate-900 cursor-pointer"
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
                className="flex items-center w-full px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md cursor-pointer"
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

      {/* Problem Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.problem.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            {t.problem.items.map((item, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group ${
                  index < 2 ? "md:col-span-6" : "md:col-span-4"
                }`}
              >
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-medium mb-6 border border-green-100">
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Smart Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {t.solution.title}
              </h2>
              <p className="text-xl text-slate-600 mb-8">{t.solution.subtitle}</p>
              <div className="space-y-6">
                {t.solution.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-200 to-blue-100 rounded-[2.5rem] transform rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 backdrop-blur-xl">
                <div className="space-y-6">
                  {/* Mock UI Elements */}
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="h-3 w-32 bg-slate-200 rounded-full mb-2"></div>
                        <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-10 w-24 bg-slate-50 rounded-xl border border-slate-100"></div>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-sky-50 rounded-2xl border border-sky-100 shadow-sm scale-105 transform transition-transform">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-sky-600" />
                      </div>
                      <div>
                        <div className="h-3 w-40 bg-sky-200 rounded-full mb-2"></div>
                        <div className="h-2 w-24 bg-sky-100 rounded-full"></div>
                      </div>
                    </div>
                    <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center text-sky-600 shadow-sm">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm opacity-60">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-slate-400" />
                      </div>
                      <div>
                        <div className="h-3 w-36 bg-slate-200 rounded-full mb-2"></div>
                        <div className="h-2 w-16 bg-slate-100 rounded-full"></div>
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
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 text-sky-400 text-sm font-medium mb-8 border border-slate-700">
            <Zap className="w-4 h-4 mr-2" />
            Dynamic Intelligence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            {t.dynamicScheduling.title}
          </h2>
          <p className="text-xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            {t.dynamicScheduling.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {t.dynamicScheduling.items.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-all duration-300 text-left"
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-sky-500/20 group-hover:scale-110 transition-all duration-300">
                  {index === 0 && <BarChart3 className="w-6 h-6 text-sky-400" />}
                  {index === 1 && <RefreshCw className="w-6 h-6 text-sky-400" />}
                  {index === 2 && <Brain className="w-6 h-6 text-sky-400" />}
                  {index === 3 && <Shield className="w-6 h-6 text-sky-400" />}
                  {index === 4 && <Zap className="w-6 h-6 text-sky-400" />}
                </div>
                <p className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-sky-500 to-blue-600">
            <div className="px-8 py-4 bg-slate-900 rounded-full">
              <p className="text-xl font-medium bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                {t.dynamicScheduling.footer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.features.title}</h2>
          </div>
          <div className="space-y-24">
            {t.features.items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-20`}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="aspect-video bg-slate-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-50"></div>
                      {index === 0 && (
                        <div className="grid grid-cols-3 gap-4 p-8 w-full opacity-80">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="h-32 bg-white rounded-xl shadow-sm border border-slate-100 animate-pulse"
                              style={{ animationDelay: `${i * 200}ms` }}
                            ></div>
                          ))}
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex flex-col gap-4 w-3/4">
                          <div className="bg-white p-4 rounded-xl rounded-tl-none shadow-sm border border-slate-100 self-start">
                            <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                            <div className="h-2 w-32 bg-slate-100 rounded"></div>
                          </div>
                          <div className="bg-sky-500 p-4 rounded-xl rounded-tr-none shadow-sm self-end text-white">
                            <div className="h-2 w-28 bg-white/40 rounded mb-2"></div>
                            <div className="h-2 w-20 bg-white/20 rounded"></div>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="w-full px-12">
                          <div className="flex items-end gap-2 h-32">
                            <div className="w-1/4 bg-sky-200 rounded-t-lg h-[40%]"></div>
                            <div className="w-1/4 bg-sky-300 rounded-t-lg h-[70%]"></div>
                            <div className="w-1/4 bg-sky-400 rounded-t-lg h-[50%]"></div>
                            <div className="w-1/4 bg-sky-500 rounded-t-lg h-[90%]"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 text-sky-600 mb-6">
                    {index === 0 && <Brain className="w-8 h-8" />}
                    {index === 1 && <MessageCircle className="w-8 h-8" />}
                    {index === 2 && <BarChart3 className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {t.companions.title}
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {t.companions.items.map((companion, index) => (
              <div
                key={index}
                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] bg-white rounded-3xl border border-slate-100 hover:border-sky-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl font-bold text-sky-600 group-hover:bg-sky-50 transition-colors">
                      {companion.name[0]}
                    </div>
                    <span className="px-4 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-bold uppercase tracking-wider group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
                      AI Companion
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{companion.name}</h3>
                  <p className="text-sm font-bold text-sky-600 uppercase tracking-wide mb-4">
                    {companion.role}
                  </p>
                  <p className="text-slate-600 mb-8 text-sm leading-relaxed min-h-[80px]">
                    {companion.desc}
                  </p>
                  <div className="relative p-6 bg-slate-50 rounded-2xl group-hover:bg-sky-50/50 transition-colors">
                    <div className="absolute top-4 left-4 text-sky-200 text-4xl font-serif leading-none">
                      &quot;
                    </div>
                    <p className="relative z-10 text-slate-600 italic text-sm text-center pt-2">
                      {companion.quote}
                    </p>
                  </div>
                </div>
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
