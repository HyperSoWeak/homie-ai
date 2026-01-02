"use client";

import { Content } from "@/types/content";
import { RotateCw, AlertTriangle, Calendar, BrainCircuit, UserX, LayoutGrid } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import clsx from "clsx";

interface ProblemSectionProps {
  t: Content;
}

// Map icons to the 6 problems
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
    <section className="relative py-32 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Top Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span>The Friction</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {t.problem.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.problem.items.map((item, index) => (
            <SpotlightCard key={index} index={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({ index, title, desc }: { index: number; title: string; desc: string }) {
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
      className="group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl p-8 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(248, 113, 113, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-50 dark:group-hover:bg-red-900/20 group-hover:border-red-100 dark:group-hover:border-red-800 transition-all duration-300">
          <Icon className="w-6 h-6 text-slate-400 group-hover:text-red-500 dark:text-slate-500 dark:group-hover:text-red-400 transition-colors" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
