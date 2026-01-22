"use client";

import { Content } from "@/types/content";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import { Quote } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

interface CompanionsSectionProps {
  t: Content;
}

const companionColors: Record<string, string> = {
  Kai: "from-indigo-500/20 to-blue-500/20 border-indigo-800",
  Luna: "from-purple-500/20 to-fuchsia-500/20 border-purple-800",
  Max: "from-orange-500/20 to-amber-500/20 border-orange-800",
  Sage: "from-emerald-500/20 to-teal-500/20 border-emerald-800",
  Zoe: "from-rose-500/20 to-pink-500/20 border-rose-800",
};

const companionGlows: Record<string, string> = {
  Kai: "shadow-indigo-500/20",
  Luna: "shadow-purple-500/20",
  Max: "shadow-orange-500/20",
  Sage: "shadow-emerald-500/20",
  Zoe: "shadow-rose-500/20",
};

const companionText: Record<string, string> = {
  Kai: "text-indigo-400",
  Luna: "text-purple-400",
  Max: "text-orange-400",
  Sage: "text-emerald-400",
  Zoe: "text-rose-400",
};

const particleColors: Record<string, string> = {
  Kai: "rgba(99, 102, 241, 0.6)", // Indigo
  Luna: "rgba(168, 85, 247, 0.6)", // Purple
  Max: "rgba(249, 115, 22, 0.6)", // Orange
  Sage: "rgba(16, 185, 129, 0.6)", // Emerald
  Zoe: "rgba(244, 63, 94, 0.6)", // Rose
};

type Companion = Content["companions"]["items"][number];

export default function CompanionsSection({ t }: CompanionsSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            {t.companions.title}
          </motion.h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-6">
          {t.companions.items.map((companion, index) => (
            <CompanionCard key={index} companion={companion} index={index} />
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-4 px-4 -mx-4 pb-8 snap-x snap-mandatory no-scrollbar">
          {t.companions.items.map((companion, index) => (
            <MobileCompanionCard key={index} companion={companion} />
          ))}
          {/* Spacer for right padding */}
          <div className="w-2 shrink-0" />
        </div>
      </div>
    </section>
  );
}

function CompanionCard({ companion, index }: { companion: Companion; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={clsx(
        "group relative h-[500px] rounded-3xl border backdrop-blur-sm overflow-hidden",
        companionColors[companion.name],
        companionGlows[companion.name],
        "bg-slate-900/40"
      )}
    >
      {/* Image / Avatar */}
      <div className="absolute top-0 left-0 w-full h-3/5 overflow-hidden">
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-b opacity-20 group-hover:opacity-30 transition-opacity duration-500",
            companionColors[companion.name]
          )}
        />
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
          <ParticleBackground color={particleColors[companion.name]} />
          <Image
            src={`/mentor/${companion.name}.png`}
            alt={companion.name}
            fill
            className="object-cover object-top opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 relative z-10 translate-y-4"
            sizes="(max-width: 1200px) 20vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 p-6 flex flex-col justify-end bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent z-30">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold text-white mb-1">{companion.name}</h3>
          <p
            className={clsx(
              "text-xs font-bold uppercase tracking-wider mb-4",
              companionText[companion.name]
            )}
          >
            {companion.role}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
            {companion.desc}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <p className="text-xs italic text-slate-400">&quot;{companion.quote}&quot;</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileCompanionCard({ companion }: { companion: Companion }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "relative shrink-0 w-[85vw] max-w-[320px] snap-center rounded-[2.5rem] border overflow-hidden bg-slate-900/60 backdrop-blur-md flex flex-col",
        companionColors[companion.name]
      )}
    >
      {/* Image Header */}
      <div className="relative h-64 w-full shrink-0">
        <div
          className={clsx(
            "absolute inset-0 bg-gradient-to-b opacity-30",
            companionColors[companion.name]
          )}
        />
        <ParticleBackground color={particleColors[companion.name]} />
        <Image
          src={`/mentor/${companion.name}.png`}
          alt={companion.name}
          fill
          className="object-cover object-top relative z-10 translate-y-4"
          sizes="(max-width: 768px) 85vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-20" />
      </div>

      {/* Content Body */}
      <div className="flex-1 p-8 pt-2 flex flex-col relative z-30">
        <h3 className="text-2xl font-bold text-white mb-1">{companion.name}</h3>
        <p
          className={clsx(
            "text-xs font-bold uppercase tracking-wider mb-4",
            companionText[companion.name]
          )}
        >
          {companion.role}
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">{companion.desc}</p>

        <div className="mt-auto pt-4 border-t border-slate-800/50">
          <div className="flex gap-3">
            <Quote className={clsx("w-4 h-4 shrink-0 mt-0.5", companionText[companion.name])} />
            <p className="text-sm italic text-slate-400">{companion.quote}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
