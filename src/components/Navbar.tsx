import { Content } from "@/types/content";
import { Globe, Menu, X, ChevronDown, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
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
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLangSelect = (selectedLang: "en" | "zh-tw") => {
    setLang(selectedLang);
    setIsLangDropdownOpen(false);
  };

  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/logo_white.png" : "/logo_black.png";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50"
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
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
              >
                <Globe className="w-4 h-4 mr-2 opacity-70" />
                <span className="uppercase tracking-wider text-xs">
                  {lang}
                </span>
                <ChevronDown
                  className={clsx(
                    "w-3 h-3 ml-1 transition-transform opacity-50",
                    isLangDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 py-1 overflow-hidden"
                  >
                    {[
                      { code: "en", label: "English" },
                      { code: "zh-tw", label: "繁體中文" },
                    ].map((l) => (
                      <button
                        key={l.code}
                        onClick={() =>
                          handleLangSelect(l.code as "en" | "zh-tw")
                        }
                        className={clsx(
                          "w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors",
                          lang === l.code
                            ? "text-sky-600 dark:text-sky-400 font-medium"
                            : "text-slate-600 dark:text-slate-400"
                        )}
                      >
                        {l.label}
                        {lang === l.code && (
                          <Check className="w-3 h-3" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
            <ThemeToggle />

            <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-slate-500/20 dark:hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300">
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 dark:text-slate-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-6 flex flex-col items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLangSelect("en")}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm transition-colors",
                    lang === "en"
                      ? "bg-slate-100 dark:bg-slate-800 font-semibold"
                      : "text-slate-500"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => handleLangSelect("zh-tw")}
                  className={clsx(
                    "px-4 py-2 rounded-lg text-sm transition-colors",
                    lang === "zh-tw"
                      ? "bg-slate-100 dark:bg-slate-800 font-semibold"
                      : "text-slate-500"
                  )}
                >
                  繁體中文
                </button>
              </div>
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
                className="w-full max-w-xs bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-3 rounded-full font-semibold"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}