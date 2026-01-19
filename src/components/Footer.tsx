"use client";

import { Content } from "@/types/content";
import { ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";

interface FooterProps {
  t: Content;
}

export default function Footer({ t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white py-32 overflow-hidden border-t border-slate-900">
      {/* Background Aura (Dark & Calm) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="text-sm text-slate-300 font-medium">Homie AI</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-12 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400"
        >
          {t.footer.text}
        </motion.h2>

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
            <span className="relative z-10">{t.footer.cta}</span>
            <ArrowUp className="w-5 h-5 relative z-10 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        <div className="mt-32 pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Homie AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
