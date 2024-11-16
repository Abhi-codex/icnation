"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

import autoImage from '../../assets/Auto.jpg';
import icnImage from '../../assets/Icn.jpg';
import privateImage from '../../assets/Private.jpg';

const backgroundImages = [
  `url(${autoImage})`,
  `url(${icnImage})`,
  `url(${privateImage})`,
  // Add more images if needed
];

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--slate-900)", "var(--gray-800)", "var(--slate-900)"];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 p-12"
      ref={ref}
    >
      <div className="relative flex items-start px-4 mb-30">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-xl text-slate-300 mt-10 items-center"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          key={activeCard} 
          initial={{ opacity:0 }}
          animate={{opacity:1}}
          exit={{ opacity:0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          style={{
            backgroundImage: backgroundImages[activeCard],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={cn(
            "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
