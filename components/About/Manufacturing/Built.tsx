"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { BuildContents } from "../Contents";

const Built = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    once: false,
    margin: "-50px 0px",
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // The currently displayed index is either the hovered one or the active one
  const displayedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  return (
    <div className="flex flex-col items-center justify-between text-center max-w-7xl mx-auto md:py-20 py-10">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mb-12 md:px-0 px-[15px]"
      >
        <h1 className="text-[#151414] xl:text-[42px] lg:text-[35px] md:text-[30px] text-[16px] ">
          Built on In-House{" "}
          <span className="text-[#005F20]">Manufacturing</span>
        </h1>
        <p className="text-[#4A4A4A] md:text-[16px] text-[12px]  md:leading-[24px] leading-[18px] md:mt-0 mt-2">
          At Adwin, we believe that quality starts from within. That's why we
          manufacture everything in-house from design to testing across our
          certified facilities. This gives us full control over quality, speed,
          and innovation, helping us stay ahead in the battery and energy
          storage industry.
        </p>
      </motion.div>
      {/* Desktop version */}
      <div className="w-full hidden md:block p-5">
        <div className=" flex flex-row w-full space-x-30 md:py-20">
          {/* Content List */}
          <div className="w-1/2 pr-8 flex flex-col justify-between">
            <h1 className="text-[#151414] text-[44px] text-start">
              Where We Build
            </h1>
            <div>
              {BuildContents.map((item, index) => (
                <motion.div
                  key={index}
                  className={`py-8 border-b border-[#DDD8D8] cursor-pointer group ${
                    displayedIndex === index ? "bg-transparent" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-[#151414] text-xl text-left font-semibold">
                        {item.name}
                      </h2>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: displayedIndex === index ? 1 : 0,
                          height: displayedIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-[#4A4A4A] mt-2 text-left overflow-hidden"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                    <LuArrowUpRight className="text-[#151414] text-xl mt-1" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image Display */}
          <div className="w-1/2 h-[532px] relative">
            <Image
              src={BuildContents[displayedIndex]?.image || "/file.svg"}
              alt={BuildContents[displayedIndex]?.name || "Facility image"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden p-5">
        <h1 className="text-[#151414] text-[16px] text-center mb-4">
          Where We <span className="text-[#005F20]">Build</span>
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {BuildContents.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 ${
                index === 2 ? "col-span-2" : ""
              }`}
            >
              <Image
                src={item.image || "/file.svg"}
                alt="Build Image"
                width={500}
                height={250}
                className="object-cover h-[250px] w-full"
              />
              <h2 className="text-[#151414] text-[12px] text-left font-semibold">
                {item.name}
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="text-[#4A4A4A] text-left text-[10px]"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Built;
