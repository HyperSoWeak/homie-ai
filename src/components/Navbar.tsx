import { Content } from "@/types/content";
import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface NavbarProps {
  lang: "en" | "zh-tw";
  setLang: (lang: "en" | "zh-tw") => void;
  t: Content;
}

export default function Navbar({ lang, setLang, t }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangSelect = (selectedLang: "en" | "zh-tw") => {
    setLang(selectedLang);
  };

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo_white.png" : "/logo_black.png";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm"
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Image
                  src={logoSrc}
                  alt="Homie Logo"
                  width={100}
                  height={28}
                  className="w-auto h-7 opacity-90 group-hover:opacity-100 transition-opacity"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "zh-tw" : "en")}
                className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 mr-2 opacity-70" />
                <span className="tracking-wide">{lang === "en" ? "繁體中文" : "English"}</span>
              </button>

              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
              <ThemeToggle />

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-slate-500/20 dark:hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                {t.nav.cta}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-800 dark:text-slate-200 cursor-pointer"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="w-full max-w-sm px-6 space-y-8 flex flex-col items-center">
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex items-center bg-slate-100 dark:bg-slate-800/50 p-1 rounded-full">
                  <button
                    onClick={() => handleLangSelect("en")}
                    className={clsx(
                      "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      lang === "en"
                        ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                    )}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLangSelect("zh-tw")}
                    className={clsx(
                      "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      lang === "zh-tw"
                        ? "bg-white dark:bg-slate-700 shadow-sm text-slate-900 dark:text-white"
                        : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300"
                    )}
                  >
                    繁體中文
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 300);
                }}
                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95"
              >
                {t.nav.cta}
              </button>

              <div className="pt-8 opacity-50">
                <Image
                  src={logoSrc}
                  alt="Homie Logo"
                  width={80}
                  height={24}
                  className="w-auto h-6 grayscale"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
