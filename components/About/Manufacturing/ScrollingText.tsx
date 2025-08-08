"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapBg } from "@/components/Reusable/icons";
import Image from "next/image";

const words = [
  {title:'80,000 batteries', desc:'produced every month'},
  {title:'500+ skilled engineers', desc:'and technicians'},
  {title:'Fully automated production', desc:'lines and ERP-integrated systems'},
  {title:'Dedicated R&D & QA labs', desc:'within the facility'}
];

const ScrollingText = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={MapBg}
          alt='Map'
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Content Container - Perfect Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWordIndex}
              initial={{
                opacity: 0,
                y: 250, // Start from bottom (fixed distance)
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                y: 0, // Perfect center
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: -250, 
                scale: 0.9
              }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="text-center"
            >
              {/* Main statistic */}
              <h2 className="text-4xl md:text-6xl lg:text-[44px] font-bold text-white  leading-tight">
                {words[currentWordIndex].title}
              </h2>

              {/* Description */}
              <p className="text-xl md:text-2xl lg:text-[44px] text-white  font-medium max-w-3xl mx-auto leading-relaxed">
                {words[currentWordIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScrollingText;