"use client";

import { Content } from "@/types/content";
import {
  RotateCw,
  AlertTriangle,
  Calendar,
  BrainCircuit,
  UserX,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import { clsx } from "clsx";

interface ProblemSectionProps {
  t: Content;
}

const icons = [
  RotateCw, // Endless Reorganizing
  AlertTriangle, // Fragile Plans
  Calendar, // Static Calendar
  BrainCircuit, // Decision Fatigue
  UserX, // Solo Struggle
  LayoutGrid, // Fragmented Tools
];

export default function ProblemSection({ t }: ProblemSectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#1e293b40,transparent)] pointer-events-none" />

      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-800 text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>{t.lang === "zh-tw" ? "隱形阻力" : "The Friction"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t.problem.title}
          </h2>
        </motion.div>

        {/* Desktop: Hover Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.problem.items.map((item, index) => (
            <SpotlightCard key={index} index={index} item={item} />
          ))}
        </div>

        {/* Mobile View: Tap to Flip */}
        <div className="md:hidden flex flex-col gap-4">
          {t.problem.items.map((item, index) => (
            <MobileCard key={index} index={index} item={item} lang={t.lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ index, item }: { index: number; item: Content["problem"]["items"][0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative border border-red-900/20 bg-slate-900 rounded-2xl p-8 hover:border-emerald-500/50 transition-colors duration-500 overflow-hidden h-[300px]"
      onMouseMove={handleMouseMove}
    >
      {/* Red Gradient (Default) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-40 transition duration-500 group-hover:opacity-0"
        style={{
          background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(239, 68, 68, 0.1),
                transparent 80%
              )
            `,
        }}
      />

      {/* Green Gradient (Hover) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(16, 185, 129, 0.15),
                transparent 80%
              )
            `,
        }}
      />

      {/* Problem Content (Visible by default, fades out on hover) */}
      <div className="absolute inset-0 p-8 flex flex-col h-full z-10 transition-all duration-500 ease-in-out opacity-100 group-hover:opacity-0 group-hover:translate-y-[-10px] pointer-events-none">
        <div className="w-12 h-12 rounded-xl bg-red-950/20 border border-red-900/30 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-red-400/60 transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 transition-colors">{item.title}</h3>

        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
      </div>

      {/* Solution Content (Hidden by default, fades in on hover) */}
      <div className="absolute inset-0 p-8 flex flex-col h-full z-10 transition-all duration-500 ease-in-out opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0">
        <div className="w-12 h-12 rounded-xl bg-emerald-900/20 border border-emerald-800 flex items-center justify-center mb-6">
          <Sparkles className="w-6 h-6 text-emerald-400" />
        </div>

        <h3 className="text-xl font-bold text-emerald-400 mb-3">{item.solutionTitle}</h3>

        <p className="text-slate-300 leading-relaxed">{item.solutionDesc}</p>
      </div>
    </motion.div>
  );
}

function MobileCard({
  index,
  item,
  lang,
}: {
  index: number;
  item: Content["problem"]["items"][0];
  lang: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      onClick={() => setIsFlipped(!isFlipped)}
      className={clsx(
        "relative rounded-2xl p-6 border transition-colors duration-500 cursor-pointer overflow-hidden",
        isFlipped
          ? "bg-slate-900 border-emerald-500/50 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]"
          : "bg-slate-900 border-red-900/20"
      )}
    >
      <motion.div layout className="relative z-10 flex items-start gap-4">
        <motion.div
          layout
          className={clsx(
            "shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-1 transition-colors duration-500",
            isFlipped
              ? "bg-emerald-900/30 text-emerald-400"
              : "bg-red-950/20 border border-red-900/30 text-red-400/60"
          )}
        >
          {isFlipped ? <Sparkles className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
        </motion.div>

        <div className="flex-1 flex flex-col justify-between min-h-[100px]">
          <motion.div
            layout
            key={isFlipped ? "solution" : "problem"}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className={clsx(
                "text-lg font-bold mb-2",
                isFlipped ? "text-emerald-400" : "text-white"
              )}
            >
              {isFlipped ? item.solutionTitle : item.title}
            </h3>
            <p
              className={clsx(
                "text-sm leading-relaxed",
                isFlipped ? "text-slate-300" : "text-slate-400"
              )}
            >
              {isFlipped ? item.solutionDesc : item.desc}
            </p>
          </motion.div>

          {/* Tap hint Badge in flow */}
          <motion.div layout className="mt-6 flex justify-end">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-800/50 px-2.5 py-1.5 rounded-lg border border-slate-700/50 shadow-sm">
              <RotateCw className="w-3 h-3" />
              <span>
                {lang === "zh-tw"
                  ? isFlipped
                    ? "點擊看問題"
                    : "點擊看解法"
                  : isFlipped
                    ? "Tap to see problem"
                    : "Tap to see solution"}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
