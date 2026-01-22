"use client";

import { Content } from "@/types/content";
import { Brain, MessageCircle, Activity, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturesSectionProps {
  t: Content;
}

export default function FeaturesSection({ t }: FeaturesSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Energy Heart Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/20 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-400/20 blur-[80px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - The Core */}
        <div className="text-center mb-16 md:mb-24 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-blue-200 tracking-tight drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">
              {t.features.title}
            </h2>
            <div className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-fr">
          {/* Item 1: Brain (Large) */}
          <FeatureCard
            icon={Brain}
            title={t.features.items[0].title}
            desc={t.features.items[0].desc}
            className="lg:col-span-4 bg-indigo-50 border-indigo-100 shadow-indigo-200/20"
            titleColor="text-indigo-900"
            descColor="text-indigo-700/80"
            iconColor="text-indigo-600"
            iconBg="bg-white"
            delay={0.1}
          />

          {/* Item 2: Chat (Tall) */}
          <FeatureCard
            icon={MessageCircle}
            title={t.features.items[1].title}
            desc={t.features.items[1].desc}
            className="lg:col-span-2 lg:row-span-2 bg-sky-50 border-sky-100 shadow-sky-200/20"
            titleColor="text-sky-900"
            descColor="text-sky-700/80"
            iconColor="text-sky-600"
            iconBg="bg-white"
            delay={0.2}
          />

          {/* Item 3: Activity */}
          <FeatureCard
            icon={Activity}
            title={t.features.items[2].title}
            desc={t.features.items[2].desc}
            className="lg:col-span-2 bg-emerald-50 border-emerald-100 shadow-emerald-200/20"
            titleColor="text-emerald-900"
            descColor="text-emerald-700/80"
            iconColor="text-emerald-600"
            iconBg="bg-white"
            delay={0.3}
          />

          {/* Item 4: Layers */}
          <FeatureCard
            icon={Layers}
            title={t.features.items[3].title}
            desc={t.features.items[3].desc}
            className="lg:col-span-2 bg-amber-50 border-amber-100 shadow-amber-200/20"
            titleColor="text-amber-900"
            descColor="text-amber-700/80"
            iconColor="text-amber-600"
            iconBg="bg-white"
            delay={0.4}
          />

          {/* Item 5: Sparkles (Wide) */}
          <FeatureCard
            icon={Sparkles}
            title={t.features.items[4].title}
            desc={t.features.items[4].desc}
            className="lg:col-span-6 bg-rose-50 border-rose-100 shadow-rose-200/20"
            titleColor="text-rose-900"
            descColor="text-rose-700/80"
            iconColor="text-rose-600"
            iconBg="bg-white"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
  className = "",
  titleColor = "text-slate-900",
  descColor = "text-slate-600",
  iconColor = "text-slate-600",
  iconBg = "bg-slate-100",
  delay = 0,
}: {
  icon: any;
  title: string;
  desc: string;
  className?: string;
  titleColor?: string;
  descColor?: string;
  iconColor?: string;
  iconBg?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`
        p-8 rounded-[2.5rem] border relative group overflow-hidden flex flex-col shadow-lg
        ${className}
        hover:shadow-2xl transition-shadow duration-500
      `}
    >
      <div
        className={`
        w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110
        ${iconBg} ${iconColor}
      `}
      >
        <Icon className="w-7 h-7" />
      </div>

      <h3 className={`text-2xl font-bold mb-4 ${titleColor} transition-colors relative z-10`}>
        {title}
      </h3>

      <p className={`text-base font-medium leading-relaxed ${descColor} flex-1 relative z-10`}>
        {desc}
      </p>

      {/* Subtle light pulse on hover */}
      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
    </motion.div>
  );
}
