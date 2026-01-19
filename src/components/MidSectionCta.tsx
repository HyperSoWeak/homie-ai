"use client";

import { Content } from "@/types/content";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";

interface MidSectionCtaProps {
  t: Content;
}

export default function MidSectionCta({ t }: MidSectionCtaProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          {t.midSectionCta.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          {t.midSectionCta.subtitle}
        </motion.p>

        <div className="relative inline-block group">
          {/* Button Glow & Particles - Always Visible */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
             <div className="absolute inset-0 bg-indigo-500/30 blur-[50px] rounded-full animate-pulse" />
             <ParticleBackground color="rgba(129, 140, 248, 0.8)" />
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group relative inline-flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-indigo-500/20 transition-all overflow-hidden z-10"
          >
            <span className="relative z-10">{t.midSectionCta.cta}</span>
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
