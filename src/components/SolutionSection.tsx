"use client";

import { Content } from "@/types/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

interface SolutionSectionProps {
  t: Content;
}

export default function SolutionSection({ t }: SolutionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-orange-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden py-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 dark:bg-sky-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div style={{ opacity, y }}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.solution.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              {t.solution.subtitle}
            </p>

            <div className="space-y-8">
              {t.solution.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <h3 className={clsx(
                    "text-2xl font-semibold mb-2 transition-colors",
                    index === 0 && "text-indigo-600 dark:text-indigo-400",
                    index === 1 && "text-sky-600 dark:text-sky-400",
                    index === 2 && "text-teal-600 dark:text-teal-400",
                    index === 3 && "text-amber-600 dark:text-amber-400"
                  )}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 border-l-2 border-slate-200 dark:border-slate-800 pl-4 group-hover:border-slate-400 dark:group-hover:border-slate-600 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual: The Untangling */}
          <div className="relative h-[600px] hidden lg:block">
             <motion.div 
               style={{ opacity }}
               className="absolute inset-0 flex items-center justify-center"
             >
               {/* Abstract "Untangling" Visual - CSS Shapes */}
               <div className="relative w-full h-full">
                 {/* Chaos becoming Order */}
                 <motion.div
                   animate={{ 
                     top: ["40%", "20%", "40%"],
                     left: ["40%", "20%", "40%"],
                     rotate: [0, 10, 0]
                   }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute w-64 h-64 bg-indigo-500/10 backdrop-blur-3xl rounded-full mix-blend-multiply dark:mix-blend-overlay"
                 />
                 <motion.div
                    animate={{ 
                     top: ["30%", "50%", "30%"],
                     right: ["30%", "20%", "30%"],
                     rotate: [0, -10, 0]
                   }}
                   transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute w-72 h-72 bg-sky-500/10 backdrop-blur-3xl rounded-full mix-blend-multiply dark:mix-blend-overlay"
                 />
                 
                 {/* Floating Cards (Mock UI) */}
                 <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="absolute top-1/4 left-10 w-64 p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50"
                 >
                    <div className="h-2 w-1/3 bg-slate-200 dark:bg-slate-700 rounded mb-2"/>
                    <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"/>
                 </motion.div>

                 <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="absolute top-1/2 right-10 w-72 p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 dark:border-slate-700/50 z-10"
                 >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                             <motion.div 
                               animate={{ scale: [1, 1.2, 1] }}
                               transition={{ duration: 2, repeat: Infinity }}
                               className="w-3 h-3 bg-emerald-500 rounded-full"
                             />
                        </div>
                        <div>
                            <div className="h-2.5 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-1.5"/>
                            <div className="h-2 w-16 bg-slate-100 dark:bg-slate-800 rounded"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-10 w-full bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg"/>
                        <div className="h-10 w-full bg-slate-50 dark:bg-slate-700/10 rounded-lg"/>
                    </div>
                 </motion.div>

                 <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute bottom-1/4 left-20 w-56 p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50"
                 >
                    <div className="h-2 w-1/2 bg-slate-200 dark:bg-slate-700 rounded mb-2"/>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded"/>
                 </motion.div>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}