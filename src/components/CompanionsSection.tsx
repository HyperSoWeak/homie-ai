"use client";

import { Content } from "@/types/content";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CompanionsSectionProps {
  t: Content;
}


const companionColors: Record<string, string> = {
  Kai: "from-indigo-500/20 to-blue-500/20 border-indigo-200 dark:border-indigo-800",
  Luna: "from-purple-500/20 to-fuchsia-500/20 border-purple-200 dark:border-purple-800",
  Max: "from-orange-500/20 to-amber-500/20 border-orange-200 dark:border-orange-800",
  Sage: "from-emerald-500/20 to-teal-500/20 border-emerald-200 dark:border-emerald-800",
  Zoe: "from-rose-500/20 to-pink-500/20 border-rose-200 dark:border-rose-800",
};

const companionGlows: Record<string, string> = {
  Kai: "shadow-indigo-500/20",
  Luna: "shadow-purple-500/20",
  Max: "shadow-orange-500/20",
  Sage: "shadow-emerald-500/20",
  Zoe: "shadow-rose-500/20",
};

const companionText: Record<string, string> = {
  Kai: "text-indigo-600 dark:text-indigo-400",
  Luna: "text-purple-600 dark:text-purple-400",
  Max: "text-orange-600 dark:text-orange-400",
  Sage: "text-emerald-600 dark:text-emerald-400",
  Zoe: "text-rose-600 dark:text-rose-400",
};

export default function CompanionsSection({ t }: CompanionsSectionProps) {

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {t.companions.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {t.companions.items.map((companion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={clsx(
                "group relative h-[500px] rounded-3xl border backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                companionColors[companion.name],
                companionGlows[companion.name],
                "bg-white/40 dark:bg-slate-900/40"
              )}
            >
              {/* Image / Avatar */}
              <div className="absolute top-0 left-0 w-full h-3/5 overflow-hidden">
                 <div className={clsx(
                   "absolute inset-0 bg-gradient-to-b opacity-20 group-hover:opacity-30 transition-opacity",
                   companionColors[companion.name]
                 )} />
                 <Image
                    src={`/mentor/${companion.name}.png`}
                    alt={companion.name}
                    fill
                    className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full h-2/3 p-6 flex flex-col justify-end bg-gradient-to-t from-white via-white/90 to-transparent dark:from-slate-900 dark:via-slate-900/90">
                <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {companion.name}
                  </h3>
                  <p className={clsx("text-xs font-bold uppercase tracking-wider mb-4", companionText[companion.name])}>
                    {companion.role}
                  </p>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {companion.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <p className="text-xs italic text-slate-500 dark:text-slate-400">
                      &quot;{companion.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}