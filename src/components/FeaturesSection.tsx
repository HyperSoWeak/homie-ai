import { Content } from "@/types/content";
import { BarChart3, Brain, MessageCircle } from "lucide-react";

interface FeaturesSectionProps {
  t: Content;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
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
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{item.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
