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

  const [showComparison, setShowComparison] = useState(false);



  // Use localized schedules from content

  const schedules = t.solutionSchedules;



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



  // Animation Loop Logic

  useEffect(() => {

    if (activeStep === 0) {

      setShowComparison(true); // Always show "final/normal" state when back on track

      return;

    }



    const interval = setInterval(() => {

      setShowComparison((prev) => !prev);

    }, 3000);



    return () => clearInterval(interval);

  }, [activeStep]);



    // Determine which schedule to show



    // If activeStep is 0 (Back on track), show schedule[0] (which is the result with "On Track" tags).



    // If activeStep > 0, toggle between clean schedule[0] (Original) and schedule[activeStep] (Adjusted).



    const originalSchedule = schedules[0].map((item: any) => ({ ...item, tag: undefined, oldTime: undefined }));



    



    const currentSchedule = activeStep === 0 



      ? schedules[0] 



      : (showComparison ? schedules[activeStep] : originalSchedule);



  



    // Helper to get current text for AI bubble

  const getCurrentText = () => {

    if (activeStep === 0) {

      return {

        summary: t.lang === "zh-tw" ? "一切重回正軌。" : "Everything is back on track.",

        reason: t.lang === "zh-tw" ? "你的完美節奏已恢復，我隨時待命。" : "Your perfect rhythm is restored. I'm standing by.",

      };

    }

    const item = t.solution.items[activeStep - 1];

    return item ? { summary: item.summary, reason: item.reason } : { summary: "", reason: "" };

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

          <div className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center overflow-hidden pb-20">

            {/* Phone + AI Wrapper - Keeps them anchored together */}

            <div className="relative">

                {/* Phone Display - Centered */}

                <div className="relative w-[280px] h-[540px] md:w-[340px] md:h-[680px] bg-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] border-[8px] md:border-[10px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 z-10">

                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 md:w-32 md:h-7 bg-slate-800 rounded-b-xl md:rounded-b-2xl z-20" />

                  

                  {/* Phone Content (Light Mode) */}

                  <div className="absolute inset-0 bg-slate-50 p-6 pt-12 md:p-8 md:pt-14 flex flex-col">

                    <div className="flex justify-between items-center mb-4 md:mb-6">

                      <div>

                        <h4 className="font-bold text-lg md:text-xl text-slate-900">{t.solution.today}</h4>

                        <p className="text-xs md:text-sm text-slate-500">{t.solution.date}</p>

                      </div>

                      

                      {/* State Indicator */}

                      <AnimatePresence mode="wait">

                        <motion.div

                          key={showComparison ? "adjusted" : "original"}

                          initial={{ opacity: 0, y: -5 }}

                          animate={{ opacity: 1, y: 0 }}

                          exit={{ opacity: 0, y: 5 }}

                          className={clsx(

                            "px-2 py-1 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wider border",

                            showComparison 

                              ? "bg-indigo-100 text-indigo-700 border-indigo-200" 

                              : "bg-slate-100 text-slate-500 border-slate-200"

                          )}

                        >

                          {showComparison || activeStep === 0 ? t.solution.labelAdjusted : t.solution.labelOriginal}

                        </motion.div>

                      </AnimatePresence>

                    </div>

                    

                    <div className="flex-1 space-y-3 md:space-y-4 relative overflow-hidden">

                      <AnimatePresence mode="wait">

                        <motion.div

                           key={showComparison ? `step-${activeStep}-after` : `step-${activeStep}-before`}

                           initial={{ opacity: 0, x: 10 }}

                           animate={{ opacity: 1, x: 0 }}

                           exit={{ opacity: 0, x: -10 }}

                           transition={{ duration: 0.3 }}

                           className="space-y-3 md:space-y-4"

                        >

                          {currentSchedule

                            ? currentSchedule.map((item: any, i: number) => (

                                <div

                                  key={`${activeStep}-${i}`}

                                  className={clsx(

                                    "p-3 md:p-4 rounded-xl md:rounded-2xl border-l-[4px] md:border-l-[6px] shadow-sm relative group/task transition-colors duration-300",

                                    item.type === "work" && "bg-white border-indigo-500 shadow-indigo-100",

                                    item.type === "meeting" && "bg-indigo-50 border-indigo-400",

                                    item.type === "break" && "bg-emerald-50 border-emerald-400",

                                    item.type === "admin" && "bg-slate-100 border-slate-400",

                                    item.type === "urgent" && "bg-red-50 border-red-500",

                                    item.type === "focus" && "bg-slate-800 border-slate-700 text-white"

                                  )}

                                >

                                  <div className="flex justify-between items-center mb-1">

                                    <div className="flex items-center gap-1.5">

                                      {item.oldTime && (

                                        <span className="text-[10px] md:text-xs font-mono text-slate-400/60 line-through">

                                          {item.oldTime}

                                        </span>

                                      )}

                                      <span className={clsx("text-xs md:text-sm font-mono", item.type === "focus" ? "text-slate-400" : "text-slate-500")}>

                                        {item.time}

                                      </span>

                                    </div>

                                    <span className={clsx("text-xs md:text-sm font-mono", item.type === "focus" ? "text-slate-500" : "text-slate-400")}>

                                      {item.duration}

                                    </span>

                                  </div>

                                  <p className={clsx("font-semibold text-sm md:text-base", item.type === "focus" ? "text-slate-100" : "text-slate-900")}>

                                    {item.task}

                                  </p>



                                  {item.tag && (

                                    <div className={clsx(

                                      "absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-[8px] md:text-[10px] font-bold uppercase tracking-wider",

                                      item.type === "focus" ? "bg-white/10 text-white" : "bg-indigo-500/10 text-indigo-600"

                                    )}>

                                      {item.tag}

                                    </div>

                                  )}

                                </div>

                              ))

                            : null}

                        </motion.div>

                      </AnimatePresence>

                    </div>

                    

                    <div className="absolute bottom-8 right-8 w-12 h-12 md:w-14 md:h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 hover:scale-110 transition-transform cursor-pointer">

                      <Clock className="w-5 h-5 md:w-6 md:h-6" />

                    </div>

                  </div>

                </div>

                {/* AI Companion & Speech Bubble - Overlapping Bottom Left */}
                <div className="absolute bottom-[-30px] left-[-30px] md:bottom-[20px] md:left-[-160px] lg:left-[-200px] z-30 flex items-end gap-[-10px] pointer-events-none w-[300px] md:w-[500px]">
                    {/* AI Image - Frameless & Larger */}
                    <div className="relative shrink-0 w-32 h-32 md:w-56 md:h-56 transition-all duration-500 drop-shadow-2xl z-20">
                       <Image 
                         src="/mentor/Zoe.png" 
                         alt="Zoe" 
                         fill 
                         className="object-contain object-bottom transform scale-110"
                         sizes="(max-width: 768px) 128px, 224px"
                       />
                    </div>
                    
                    {/* Speech Bubble */}
                    <div className="bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl md:rounded-3xl rounded-bl-none shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-200 text-slate-800 text-sm md:text-base shadow-indigo-900/20 flex-1 origin-bottom-left transition-all duration-500 mb-8 md:mb-12 relative z-10 -ml-6 md:-ml-10">
                       <AnimatePresence mode="wait">
                         <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                         >
                           <p className="font-bold text-indigo-900 mb-2 text-sm md:text-base leading-tight">
                             {currentText.summary}
                           </p>
                           <div className="h-px w-8 bg-slate-200 mb-2" />
                           <p className="font-medium text-slate-500 leading-snug text-xs md:text-sm italic">
                             &quot;{currentText.reason}&quot;
                           </p>
                         </motion.div>
                       </AnimatePresence>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



