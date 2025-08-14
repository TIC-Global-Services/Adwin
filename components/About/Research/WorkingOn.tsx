"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { WorkingOnContents } from "../Contents";

const WorkingOn = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    once: false,
    margin: "-50px 0px",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // The currently displayed index is either the hovered one or the active one
  const displayedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Calculate image position based on index
  const getImagePosition = (index: number) => {
    const totalItems = WorkingOnContents.length;
    if (totalItems <= 1) return 0;
    
    // Map index to position: first item = -100px, middle items = 0px, last item = 100px
    const step = 200 / (totalItems - 1); // 200px total range divided by steps
    return -100 + (index * step);
  };

  return (
    <div className="flex flex-col items-center justify-between text-center max-w-8xl mx-auto md:py-10 py-10">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mb-2 md:px-0 px-[15px]"
      >
        <h1 className="text-[#151414] xl:text-[42px] lg:text-[35px] md:text-[30px] text-[16px]">
          Where We Build
        </h1>
      </motion.div>

      {/* Desktop version */}
      <div className="w-full hidden md:block p-5">
       
        <div className="flex flex-row-reverse w-full gap-5 md:py-20">
          {/* Content List */}
          <div className="w-1/2 flex flex-col justify-between">
            <div>
              {WorkingOnContents.map((item, index) => (
                <motion.div
                  key={index}
                  className={`py-8 border-b border-[#DDD8D8] cursor-pointer group transition-all duration-500 ease-out ${
                    displayedIndex === index ? "bg-transparent" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                      <motion.h2 
                        className={`text-[#151414] text-xl text-left  transition-all duration-500 ease-out ${
                          displayedIndex === index 
                            ? "text-[#005F20] pl-5 font-bold" 
                            : "hover:text-[#005F20] hover:pl-5 hover:font-bold"
                        }`}
                        initial={{ x: 0 }}
                        animate={{ 
                          x: displayedIndex === index ? 20 : 0,
                          color: displayedIndex === index ? "#005F20" : "#151414"
                        }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {item.name}
                      </motion.h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Display with Animated Position */}
          <div className="w-1/2 flex justify-center items-center relative min-h-[600px]">
            <motion.div 
              className="w-[320px] h-[340px] relative"
              animate={{ 
                y: getImagePosition(displayedIndex),
                scale: hoveredIndex !== null ? 1.05 : 1
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
                damping: 20
              }}
            >
              <motion.div
                key={displayedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full relative"
              >
                <Image
                  src={WorkingOnContents[displayedIndex]?.image || "/file.svg"}
                  alt={WorkingOnContents[displayedIndex]?.name || "Facility image"}
                  fill
                  className="object-cover rounded-3xl shadow-lg transition-all duration-300 ease-out hover:shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden p-5">
        <h1 className="text-[#151414] text-[16px] text-center mb-4">
          Where We <span className="text-[#005F20]">Build</span>
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {WorkingOnContents.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-2 ${
                index === 2 ? "col-span-2" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image || "/file.svg"}
                  alt="Build Image"
                  width={500}
                  height={250}
                  className="object-cover h-[250px] w-full transition-transform duration-500 ease-out "
                />
                <motion.div
                  className="absolute inset-0 bg-[#005F20] opacity-0 transition-opacity duration-400 ease-out"
                  whileHover={{ opacity: 0.1 }}
                />
              </div>
              <h2 className="text-[#151414] text-[12px] text-left font-medium">
                {item.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingOn;