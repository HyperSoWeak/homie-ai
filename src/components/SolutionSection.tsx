import { Content } from "@/types/content";
import { Calendar, CheckCircle2, Clock, RefreshCw, Zap } from "lucide-react";

interface SolutionSectionProps {
  t: Content;
}

export default function SolutionSection({ t }: SolutionSectionProps) {
  return (
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
  );
}
