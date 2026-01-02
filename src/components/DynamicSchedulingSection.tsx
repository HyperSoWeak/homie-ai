"use client";

import { Content } from "@/types/content";
import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import clsx from "clsx";
import { Clock } from "lucide-react";

interface DynamicSchedulingSectionProps {
  t: Content;
}

export default function DynamicSchedulingSection({ t }: DynamicSchedulingSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    // 1: Overslept (Everything Compressed)
    [
      { time: "10:30", task: "Quick Sync", type: "meeting", duration: "30m" }, // Compressed
      { time: "11:00", task: "Deep Work", type: "work", duration: "1.5h" }, // Moved
      { time: "12:30", task: "Quick Lunch", type: "break", duration: "30m" }, // Shortened
      { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
    ],
    // 2: Anxious (Lighter Load)
    [
      { time: "9:00", task: "Email Triage", type: "admin", duration: "45m" }, // Low energy
      { time: "9:45", task: "Walk", type: "break", duration: "15m" },
      { time: "10:00", task: "Focus Time", type: "work", duration: "1h" },
      { time: "11:00", task: "Team Sync", type: "meeting", duration: "1h" },
    ],
    // 3: Unexpected Request (Reordered)
    [
      { time: "9:00", task: "Client Emergency", type: "urgent", duration: "1h" }, // Inserted
      { time: "10:00", task: "Deep Work", type: "work", duration: "1.5h" }, // Pushed
      { time: "11:30", task: "Team Sync", type: "meeting", duration: "30m" }, // Shortened
    ],
    // 4: Heavy Week (Protected)
    [
      { time: "9:00", task: "NO MEETINGS", type: "focus", duration: "3h" }, // Protected block
      { time: "12:00", task: "Lunch", type: "break", duration: "1h" },
      { time: "13:00", task: "Project Review", type: "work", duration: "1.5h" },
    ],
  ];

  const handleStepEnter = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section ref={containerRef} className="relative bg-slate-50 dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t.dynamicScheduling.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t.dynamicScheduling.subtitle}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 relative">
          {/* Left: Sticky Phone Demo */}
          <div className="w-full lg:w-1/2 h-[450px] sm:h-[600px] lg:h-[800px] sticky top-16 lg:top-24 flex items-center justify-center z-30 pointer-events-none lg:pointer-events-auto">
            <div className="relative w-[280px] sm:w-[320px] h-[500px] sm:h-[640px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden scale-[0.8] sm:scale-90 lg:scale-100">
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-6 bg-slate-800 rounded-b-xl z-20" />

              {/* Phone Screen */}
              <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 p-6 pt-12 flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-bold text-lg dark:text-white">Today</h4>
                    <p className="text-xs text-slate-500">Wed, Jan 3</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800" />
                </div>

                {/* Liquid Calendar Items */}
                <div className="flex-1 space-y-3 relative">
                  {schedules[activeStep]
                    ? schedules[activeStep].map((item, i) => (
                        <motion.div
                          layout
                          key={`${activeStep}-${i}`} // Force re-render for layout animation if needed, or use consistent keys for fluid morph
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={clsx(
                            "p-4 rounded-2xl border-l-4 shadow-sm",
                            item.type === "work" && "bg-white dark:bg-slate-800 border-indigo-500",
                            item.type === "meeting" &&
                              "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-400",
                            item.type === "break" &&
                              "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400",
                            item.type === "admin" &&
                              "bg-slate-100 dark:bg-slate-800 border-slate-400",
                            item.type === "urgent" && "bg-red-50 dark:bg-red-900/20 border-red-500",
                            item.type === "focus" &&
                              "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900"
                          )}
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-xs font-mono opacity-70">{item.time}</span>
                            <span className="text-xs font-mono opacity-50">{item.duration}</span>
                          </div>
                          <p className="font-semibold text-sm mt-1">{item.task}</p>
                        </motion.div>
                      ))
                    : null}
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scrollable Triggers */}
          <div className="w-full lg:w-1/2 space-y-[30vh] lg:space-y-[40vh] py-[10vh] lg:py-[20vh] relative z-10">
            {t.solution.items.map((item, index) => (
              <StepTrigger
                key={index}
                index={index} // Shift index by 1 because 0 is "Normal" state
                onEnter={() => handleStepEnter(index + 1)}
                title={item.title}
                desc={item.desc}
              />
            ))}
            <StepTrigger
              index={4}
              onEnter={() => handleStepEnter(0)} // Reset
              title="Back on track"
              desc="Homie restores your optimal rhythm."
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
        "p-8 rounded-3xl transition-colors duration-500",
        "hover:bg-white dark:hover:bg-slate-800 shadow-sm"
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">
          {isLast ? <Clock className="w-5 h-5" /> : index + 1}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-xl text-slate-600 dark:text-slate-400 pl-14">{desc}</p>
    </motion.div>
  );
}
