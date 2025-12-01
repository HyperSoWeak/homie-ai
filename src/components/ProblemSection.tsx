import { Content } from "@/types/content";
import { X } from "lucide-react";

interface ProblemSectionProps {
  t: Content;
}

export default function ProblemSection({ t }: ProblemSectionProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.problem.title}</h2>
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
  );
}
