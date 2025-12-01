import { Content } from "@/types/content";
import { BarChart3, Brain, RefreshCw, Shield, Zap } from "lucide-react";

interface DynamicSchedulingSectionProps {
  t: Content;
}

export default function DynamicSchedulingSection({ t }: DynamicSchedulingSectionProps) {
  return (
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
  );
}
