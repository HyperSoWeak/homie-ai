"use client";

import { Content } from "@/types/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Clock } from "lucide-react";

interface SolutionSectionProps {
  t: Content;
}

export default function SolutionSection({ t }: SolutionSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Mock schedule data for different states
  const schedules = [
    // 0: Normal
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

  // Mobile Scroll Logic
  const { scrollYProgress: mobileScrollY } = useScroll({
    target: mobileContainerRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal scroll distance: 4 steps * (280px card + 16px gap) = 1184px
  const mobileX = useTransform(mobileScrollY, [0, 1], ["0px", "-1184px"]);

  useEffect(() => {
    return mobileScrollY.on("change", (latest) => {
      // 0-0.2: Step 1, 0.2-0.4: Step 2, etc.
      // Total 5 steps (indices 1, 2, 3, 4, 0)
      if (latest < 0.2) setActiveStep(1);
      else if (latest < 0.4) setActiveStep(2);
      else if (latest < 0.6) setActiveStep(3);
      else if (latest < 0.8) setActiveStep(4);
      else setActiveStep(0);
    });
  }, [mobileScrollY]);

  const handleStepEnter = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section ref={containerRef} className="relative bg-slate-950 py-24">
      {/* Background Ambience - Moved to absolute container to allow sticky children */}
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

        {/* Mobile View: Vertical Scroll-Driven Horizontal Reel */}
        <div className="lg:hidden relative h-[300vh]" ref={mobileContainerRef}>
          <div className="sticky top-20 h-[calc(100vh-100px)] flex flex-col justify-start gap-8 overflow-hidden pt-4">
            {/* Static Phone Display */}
            <div className="flex justify-center flex-shrink-0">
              <div className="relative w-[280px] h-[540px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-xl z-20" />
                <div className="absolute inset-0 bg-slate-950 p-6 pt-12 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="font-bold text-lg text-white">Today</h4>
                      <p className="text-xs text-slate-500">Wed, Jan 3</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 relative overflow-hidden">
                    {schedules[activeStep]
                      ? schedules[activeStep].map((item, i) => (
                          <motion.div
                            layout
                            key={`${activeStep}-${i}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className={clsx(
                              "p-3 rounded-xl border-l-[4px] shadow-sm",
                              item.type === "work" && "bg-slate-900 border-indigo-500",
                              item.type === "meeting" && "bg-indigo-900/10 border-indigo-400",
                              item.type === "break" && "bg-emerald-900/10 border-emerald-400",
                              item.type === "admin" && "bg-slate-900 border-slate-500",
                              item.type === "urgent" && "bg-red-900/10 border-red-500",
                              item.type === "focus" && "bg-slate-800 border-slate-700"
                            )}
                          >
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-mono text-slate-400">{item.time}</span>
                              <span className="text-xs font-mono text-slate-500">
                                {item.duration}
                              </span>
                            </div>
                            <p className="font-semibold text-sm text-slate-200">{item.task}</p>
                          </motion.div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll-Driven Horizontal Track */}
            <motion.div style={{ x: mobileX }} className="flex gap-4 px-6 w-max">
              {t.solution.items.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex-shrink-0 w-[280px] text-left p-5 rounded-2xl border transition-all duration-500",
                    activeStep === index + 1
                      ? "bg-slate-800 border-indigo-500 shadow-lg scale-105"
                      : "bg-slate-900/50 border-slate-800 opacity-70"
                  )}
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span
                      className={clsx(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border shrink-0",
                        activeStep === index + 1
                          ? "bg-indigo-500 border-indigo-500 text-white"
                          : "border-slate-600 text-slate-500"
                      )}
                    >
                      {index + 1}
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 pl-8 leading-relaxed">{item.desc}</p>
                </div>
              ))}
              <div
                className={clsx(
                  "flex-shrink-0 w-[280px] text-left p-5 rounded-2xl border transition-all duration-500",
                  activeStep === 0
                    ? "bg-slate-800 border-emerald-500 shadow-lg scale-105"
                    : "bg-slate-900/50 border-slate-800 opacity-70"
                )}
              >
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Clock
                    className={clsx(
                      "w-5 h-5 shrink-0",
                      activeStep === 0 ? "text-emerald-500" : "text-slate-500"
                    )}
                  />
                  {t.lang === "zh-tw" ? "回歸正軌" : "Back on track"}
                </h3>
                <p className="text-sm text-slate-400 pl-8">
                  {t.lang === "zh-tw"
                    ? "Homie 恢復您的最佳節奏。"
                    : "Homie restores your optimal rhythm."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop View: Split Screen Scrollytelling */}
        <div className="hidden lg:flex flex-row gap-24 relative">
          {/* Left: Sticky Phone */}
          <div className="w-1/2 h-[800px] sticky top-32 flex items-start justify-center">
            <div className="relative w-[340px] h-[680px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-2xl z-20" />
              <div className="absolute inset-0 bg-slate-950 p-8 pt-14 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="font-bold text-xl text-white">Today</h4>
                    <p className="text-sm text-slate-500">Wed, Jan 3</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                  </div>
                </div>
                <div className="flex-1 space-y-4 relative">
                  {schedules[activeStep]
                    ? schedules[activeStep].map((item, i) => (
                        <motion.div
                          layout
                          key={`${activeStep}-${i}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          className={clsx(
                            "p-4 rounded-2xl border-l-[6px] shadow-lg",
                            item.type === "work" && "bg-slate-900 border-indigo-500",
                            item.type === "meeting" && "bg-indigo-900/10 border-indigo-400",
                            item.type === "break" && "bg-emerald-900/10 border-emerald-400",
                            item.type === "admin" && "bg-slate-900 border-slate-500",
                            item.type === "urgent" && "bg-red-900/10 border-red-500",
                            item.type === "focus" && "bg-slate-800 border-slate-700"
                          )}
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-sm font-mono text-slate-400">{item.time}</span>
                            <span className="text-sm font-mono text-slate-500">
                              {item.duration}
                            </span>
                          </div>
                          <p className="font-bold text-base text-slate-100">{item.task}</p>
                        </motion.div>
                      ))
                    : null}
                </div>
                <div className="absolute bottom-8 right-8 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform cursor-pointer">
                  <Clock className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrollable Triggers */}
          <div className="w-1/2 py-[20vh] space-y-[40vh] pb-[80vh]">
            {t.solution.items.map((item, index) => (
              <StepTrigger
                key={index}
                index={index}
                onEnter={() => handleStepEnter(index + 1)}
                title={item.title}
                desc={item.desc}
              />
            ))}
            <StepTrigger
              index={4}
              onEnter={() => handleStepEnter(0)}
              title={t.lang === "zh-tw" ? "回歸正軌" : "Back on track"}
              desc={
                t.lang === "zh-tw"
                  ? "Homie 恢復您的最佳節奏。"
                  : "Homie restores your optimal rhythm."
              }
              isLast
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepTrigger({
  index,
  onEnter,
  title,
  desc,
  isLast,
}: {
  index: number;
  onEnter: () => void;
  title: string;
  desc: string;
  isLast?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0 && latest < 1) {
        onEnter();
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, onEnter]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "p-8 rounded-3xl transition-colors duration-500 border border-transparent",
        "hover:bg-slate-900 hover:border-slate-800 shadow-sm"
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-500">
          {isLast ? <Clock className="w-5 h-5" /> : index + 1}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-xl text-slate-400 pl-14">{desc}</p>
    </motion.div>
  );
}
