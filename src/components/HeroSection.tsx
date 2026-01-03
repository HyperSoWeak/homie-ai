"use client";

import { Content } from "@/types/content";
import { ArrowRight, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  t: Content;
}

export default function HeroSection({ t }: HeroSectionProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  const handleJoinWaitlist = async () => {
    if (!email) return;

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setMessage(
        t.lang === "en" ? "Please enter a valid email address." : "請輸入有效的電子郵件地址。"
      );
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setMessage("Something went wrong");
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-20"
    >
      {/* The Breathing Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-500/20 via-emerald-500/20 to-teal-500/20 blur-[80px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 sm:space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 sm:space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] text-balance">
            {t.hero.title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance font-light">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto w-full px-4 sm:px-0"
        >
          {status === "success" ? (
            <div className="bg-emerald-900/20 border border-emerald-800 text-emerald-200 px-6 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/10 min-h-[56px] sm:min-h-[64px]">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">You&apos;re on the list. We&apos;ll be in touch.</span>
            </div>
          ) : (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2rem] sm:rounded-full blur opacity-15 group-hover:opacity-25 transition duration-500" />
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-slate-900 p-1.5 rounded-[2rem] sm:rounded-full border border-slate-800 shadow-xl gap-1.5 sm:gap-0 min-h-[56px] sm:min-h-[64px]">
                <div className="flex items-center flex-1 px-4 py-1 sm:py-0">
                  <Mail className="w-4 h-4 sm:w-5 h-5 text-slate-400 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleJoinWaitlist()}
                    disabled={status === "loading"}
                    placeholder="name@example.com"
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-400 px-3 py-1.5 sm:py-2 outline-none text-sm sm:text-base"
                  />
                </div>
                <button
                  onClick={handleJoinWaitlist}
                  disabled={status === "loading" || !email}
                  className="bg-white text-slate-900 px-6 sm:px-8 py-3 rounded-[1.5rem] sm:rounded-full font-semibold transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap min-w-[120px] sm:min-w-[140px] h-[48px] sm:h-auto text-sm sm:text-base"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 sm:w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span>{t.hero.cta}</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center justify-center text-red-500 text-sm mt-4 animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-4 h-4 mr-2" />
              {message}
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm font-medium text-slate-500 tracking-widest uppercase"
        >
          {t.hero.tagline}
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-slate-600"
          />
        </div>
      </motion.div>

      {/* Bottom Fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />
    </section>
  );
}
