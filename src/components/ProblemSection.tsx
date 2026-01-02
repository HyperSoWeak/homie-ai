"use client";

import { Content } from "@/types/content";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface ProblemSectionProps {
  t: Content;
}

export default function ProblemSection({ t }: ProblemSectionProps) {
  return (
    <section className="relative py-32 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none mix-blend-overlay" />
      
      {/* The "Knot" Background Graphic (Abstract Lines) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0,30 Q25,80 50,30 T100,80" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0,70 Q25,10 50,70 T100,10" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-6 leading-tight">
            {t.problem.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {t.problem.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                "relative p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition-all duration-500 hover:shadow-md group",
                // Staggered layout effect
                index % 2 === 0 ? "md:translate-y-0" : "md:translate-y-8 lg:translate-y-12",
                index === 1 && "lg:-translate-y-8"
              )}
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity duration-300">
                <X className="w-6 h-6 text-slate-400" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 text-sm font-mono">
                  {index + 1}
                </span>
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}