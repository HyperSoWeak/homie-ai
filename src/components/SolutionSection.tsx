"use client";

import { Content } from "@/types/content";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Clock } from "lucide-react";
import Image from "next/image";

interface SolutionSectionProps {
  t: Content;
}

export default function SolutionSection({ t }: SolutionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  // Mock schedule data for different states
  const schedules = [
    // 0: Normal (Back on track)
    [
      { time: "9:00", task: "Deep Work", type: "work", duration: "2h" },
      { time: "11:00", task: "Team Sync", type: "meeting", duration: "1h" },
      { time: "12:00", task: "Lunch", type: "break", duration: "1h" },
      { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
    ],
    // 1: Overslept
    [
      { time: "10:30", task: "Quick Sync", type: "meeting", duration: "30m" },
      { time: "11:00", task: "Deep Work", type: "work", duration: "1.5h" },
      { time: "12:30", task: "Quick Lunch", type: "break", duration: "30m" },
      { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
    ],
    // 2: Anxious
    [
      { time: "9:00", task: "Email Triage", type: "admin", duration: "45m" },
      { time: "9:45", task: "Walk", type: "break", duration: "15m" },
      { time: "10:00", task: "Focus Time", type: "work", duration: "1h" },
      { time: "11:00", task: "Team Sync", type: "meeting", duration: "1h" },
    ],
    // 3: Unexpected
    [
      { time: "9:00", task: "Client Emergency", type: "urgent", duration: "1h" },
      { time: "10:00", task: "Deep Work", type: "work", duration: "1.5h" },
      { time: "11:30", task: "Team Sync", type: "meeting", duration: "30m" },
    ],
    // 4: Heavy Week
    [
      { time: "9:00", task: "NO MEETINGS", type: "focus", duration: "3h" },
      { time: "12:00", task: "Lunch", type: "break", duration: "1h" },
      { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
    ],
  ];

  // Scroll Logic
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Combined Scroll Logic
  useEffect(() => {
    const handleScroll = (latest: number) => {
      if (latest < 0.2) setActiveStep(1);
      else if (latest < 0.4) setActiveStep(2);
      else if (latest < 0.6) setActiveStep(3);
      else if (latest < 0.8) setActiveStep(4);
      else setActiveStep(0);
    };

    const unsubscribe = scrollYProgress.on("change", handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  // Helper to get current text for AI bubble
  const getCurrentText = () => {
    if (activeStep === 0) {
      return {
        title: t.lang === "zh-tw" ? "回歸正軌" : "Back on track",
        desc: t.lang === "zh-tw" ? "Homie 恢復您的最佳節奏。" : "Homie restores your optimal rhythm.",
      };
    }
    // activeStep is 1-based index in items array (0 -> item 0)
    const item = t.solution.items[activeStep - 1];
    return item ? { title: item.title, desc: item.desc } : { title: "", desc: "" };
  };

  const currentText = getCurrentText();

  return (
    <section ref={containerRef} className="relative bg-slate-950 py-16 md:py-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            {t.solution.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t.solution.subtitle}
          </motion.p>
        </div>

        {/* Unified Scroll-Driven Layout (Mobile & Desktop) */}
        <div className="relative h-[300vh]" ref={scrollContainerRef}>
           {/* We use mobileContainerRef for both now as layout is unified. 
               We can keep desktopScrollY hook for larger screens if needed, 
               but effectively we just need one scroll tracker if the height is same.
               To be safe, we'll keep the refs logic but apply the layout to both.
           */}
           
          <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center overflow-hidden pb-20">
            {/* Phone Display - Centered */}
            <div className="relative w-[280px] h-[540px] md:w-[340px] md:h-[680px] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] border-[8px] md:border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 md:w-32 md:h-7 bg-slate-800 rounded-b-xl md:rounded-b-2xl z-20" />
              
              {/* Phone Content (Light Mode) */}
              <div className="absolute inset-0 bg-slate-50 p-6 pt-12 md:p-8 md:pt-14 flex flex-col">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-slate-900">Today</h4>
                    <p className="text-xs md:text-sm text-slate-500">Wed, Jan 3</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-3 md:space-y-4 relative overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    {schedules[activeStep]
                      ? schedules[activeStep].map((item, i) => (
                          <motion.div
                            layout
                            key={`${activeStep}-${i}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={clsx(
                              "p-3 md:p-4 rounded-xl md:rounded-2xl border-l-[4px] md:border-l-[6px] shadow-sm",
                              // Light Mode Styles
                              item.type === "work" && "bg-white border-indigo-500 shadow-indigo-100",
                              item.type === "meeting" && "bg-indigo-50 border-indigo-400",
                              item.type === "break" && "bg-emerald-50 border-emerald-400",
                              item.type === "admin" && "bg-slate-100 border-slate-400",
                              item.type === "urgent" && "bg-red-50 border-red-500",
                              item.type === "focus" && "bg-slate-800 border-slate-700 text-white" // Keep focus dark for contrast? Or make it light? Let's keep focus distinct.
                            )}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className={clsx("text-xs md:text-sm font-mono", item.type === "focus" ? "text-slate-400" : "text-slate-500")}>{item.time}</span>
                              <span className={clsx("text-xs md:text-sm font-mono", item.type === "focus" ? "text-slate-500" : "text-slate-400")}>
                                {item.duration}
                              </span>
                            </div>
                            <p className={clsx("font-semibold text-sm md:text-base", item.type === "focus" ? "text-slate-100" : "text-slate-900")}>{item.task}</p>
                          </motion.div>
                        ))
                      : null}
                  </AnimatePresence>
                </div>
                
                <div className="absolute bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform cursor-pointer">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
            </div>

            {/* AI Companion & Speech Bubble - Bottom Left (Unified) */}
            <div className="absolute bottom-8 left-6 md:left-12 z-30 flex items-end gap-4 pointer-events-none max-w-[90%] md:max-w-xl">
                {/* AI Image - Larger on Desktop */}
                <div className="relative shrink-0 w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-2xl bg-indigo-100 transition-all duration-500">
                   <Image 
                     src="/mentor/Zoe.png" 
                     alt="Zoe" 
                     fill 
                     className="object-cover"
                     sizes="(max-width: 768px) 80px, 128px"
                   />
                </div>
                
                {/* Speech Bubble */}
                <div className="bg-white/95 backdrop-blur-md p-5 md:p-6 rounded-3xl rounded-bl-none shadow-2xl border border-slate-100 text-slate-800 text-sm md:text-lg shadow-indigo-900/20 flex-1 origin-bottom-left transition-all duration-500">
                   <AnimatePresence mode="wait">
                     <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                     >
                       <p className="font-bold text-indigo-900 mb-1 md:mb-2 text-base md:text-xl">{currentText.title}</p>
                       <p className="font-medium text-slate-600 leading-snug md:leading-relaxed">{currentText.desc}</p>
                     </motion.div>
                   </AnimatePresence>
                </div>
            </div>
          </div>
        </div>
        
        {/* Invisible Triggers Overlay - Drives the scroll interaction for the single unified layout */}
        {/* We need to make sure this overlay sits on top of the 'h-[300vh]' container logic-wise but doesn't block clicks? 
            Actually, the sticky container is inside the relative h-[300vh].
            We just need the scroll to happen. The content inside sticky doesn't scroll.
            So we don't need explicit trigger divs if we use useScroll mapped to the container progress.
            The current logic uses `mobileScrollY` (mapped to `mobileContainerRef`) to drive `activeStep`.
            Since we unified the layout into `mobileContainerRef`, it should work for both.
        */}

      </div>
    </section>
  );
}



