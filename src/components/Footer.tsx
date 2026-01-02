"use client";

import { Content } from "@/types/content";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

interface FooterProps {
  t: Content;
}

export default function Footer({ t }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-white py-32 overflow-hidden">
      {/* Background Aura (Dark & Calm) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-3xl md:text-5xl font-bold mb-12 leading-tight"
        >
          {t.footer.text}
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-2 mx-auto"
        >
          {t.footer.cta}
          <ArrowUp className="w-5 h-5" />
        </motion.button>
        
        <div className="mt-24 pt-8 border-t border-white/10 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Homie AI. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}