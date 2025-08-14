"use client";

import React, { useRef, useMemo, useState, JSX } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import {
  WorkBgIcon1,
  WorkBgIcon2,
  WorkBgIcon3,
  WorkBgIcon4,
  WorkBgIcon5,
  WorkIcon1,
  WorkIcon2,
  WorkIcon3,
  WorkIcon4,
  WorkIcon5,
} from "@/components/Reusable/icons";

// Types
interface ExpertiseItem {
  title: string | JSX.Element;
  description: string;
  icon?: StaticImageData | string;
  bgIcon?: StaticImageData | string;
  iconWhite?: StaticImageData | string;
}

interface CardProps {
  item: ExpertiseItem;
  isInView: boolean;
  index: number;
  totalItems: number;
}

// Constants
const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    title: "What We're",
    description: "Working On",
  },
  {
    icon: WorkIcon1,
    bgIcon: WorkBgIcon1,
    title: (
      <>
        Improving lithium battery <span className="text-[#005F20]">efficiency and safety</span>
      </>
    ),
    description:"",
  },
  {
    icon: WorkIcon2,
    bgIcon: WorkBgIcon2,
    title: (
      <>
        <span className="text-[#005F20]">Smart battery</span> designs with IoT capabilities
      </>
    ),
    description:
      "",
  },
  {
    icon: WorkIcon3,
    bgIcon: WorkBgIcon3,
    title: (
      <>
        Long-life deep cycle batteries for <span className="text-[#005F20]">solar applications</span>
      </>
    ),
    description:
      "",
  },
  {
    icon: WorkIcon4,
    bgIcon: WorkBgIcon4,
    title: (
      <>
        High-capacity innovations like <span className="text-[#005F20]">300Ah and 500Ah systems</span>
      </>
    ),
    description:
      "",
  },
  {
    icon: WorkIcon5,
    bgIcon: WorkBgIcon5,
    title: (
      <>
        Thermal management for <span className="text-[#005F20]">Indian climate conditions</span>
      </>
    ),
    description:
      "",
  },
];

// Animation configurations - optimized and consolidated
const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants,

  card: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as Variants,

  cardHover: {
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" },
  },

  iconHover: {
    scale: 1.1,
    transition: { duration: 0.2, ease: "easeOut" },
  },

  header: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },

  fadeIn: (delay = 0) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay, duration: 0.8 },
  }),

  cardContent: (delay = 0.2) => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay, duration: 0.5 },
  }),
} as const;

// Utility functions
const getCardClasses = (index: number, totalItems: number): string => {
  const baseClasses =
    "";

  if (index === 0) return `${baseClasses} justify-start hidden md:flex md:pl-0 md:py-8 pl-4 py-4 rounded-[20px] md:h-[352px] flex flex-col transition-colors duration-300 overflow-hidden `;
  if (index === totalItems - 1)
    return `${baseClasses} justify-between col-span-2 md:col-span-1  bg-[#F4F5F7] md:pl-8 md:py-8 pl-4 py-4 rounded-[20px] md:h-[352px] flex flex-col transition-colors duration-300 overflow-hidden`;
  return `${baseClasses} justify-between group bg-[#F4F5F7] md:pl-8 md:py-8 pl-4 py-4 rounded-[20px] md:h-[352px] flex flex-col transition-colors duration-300 overflow-hidden `;
};

// Card Component
const Card: React.FC<CardProps> = React.memo(
  ({ item, isInView, index, totalItems }) => {
    const cardClasses = useMemo(
      () => getCardClasses(index, totalItems),
      [index, totalItems]
    );

    const isHeaderCard = index === 0;

    return (
      <motion.div
        variants={ANIMATIONS.card}
        whileHover={ANIMATIONS.cardHover}
        className={cardClasses}
      >
        {isHeaderCard ? (
          <>
            <motion.h1
              className="text-[42px] leading-[49px] font-regular text-[#1F1E1D]   "
              {...ANIMATIONS.fadeIn(0.3)}
              animate={
                isInView
                  ? ANIMATIONS.fadeIn(0.3).animate
                  : ANIMATIONS.fadeIn(0.3).initial
              }
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-[42px] leading-[49px]  text-[#005F20]"
              {...ANIMATIONS.fadeIn(0.5)}
              animate={
                isInView
                  ? ANIMATIONS.fadeIn(0.5).animate
                  : ANIMATIONS.fadeIn(0.5).initial
              }
            >
              {item.description}
            </motion.p>
          </>
        ) : (
          <>
            <motion.div
              className="md:mb-6 mb-3 "
              whileHover={ANIMATIONS.iconHover}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={typeof item.title === 'string' ? item.title : 'Expertise item'}
                  className="md:w-[39px] md:h-[50px] w-[20px] h-[20px] object-contain"
                />
              )}
              {item.bgIcon && (
                <Image
                  src={item.bgIcon}
                  alt={typeof item.title === 'string' ? item.title : 'Expertise item'}
                  className="md:w-[80px] w-[55px] ml-auto "
                />
              )}{" "}
            </motion.div>
            <div className="md:w-full pr-10">
              <motion.h3
                className="md:text-[20px] text-[16px] font-semibold text-black    md:mb-3"
                {...ANIMATIONS.cardContent()}
                animate={
                  isInView
                    ? ANIMATIONS.cardContent().animate
                    : ANIMATIONS.cardContent().initial
                }
              >
                {item.title}
              </motion.h3>
              {/* <motion.p
                className="md:text-[16px] text-[10px] text-black "
                {...ANIMATIONS.cardContent(0.3)}
                animate={
                  isInView
                    ? ANIMATIONS.cardContent(0.3).animate
                    : ANIMATIONS.cardContent(0.3).initial
                }
              >
                {item.description}
              </motion.p> */}
            </div>
          </>
        )}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Mobile Header Component
const MobileHeader: React.FC<{ isHeaderInView: boolean }> = React.memo(
  ({ isHeaderInView }) => (
    <motion.div
      className="mb-8 pt-40  text-center md:hidden"
      initial={ANIMATIONS.header.initial}
      animate={
        isHeaderInView ? ANIMATIONS.header.animate : ANIMATIONS.header.initial
      }
      transition={ANIMATIONS.header.transition}
    >
      <h1 className="text-[24px] font-heading text-[#1F1E1D] mb-2">
        Areas of Expertise
      </h1>
      <p className="text-[16px] text-[#3F4348]">
        Delivering Precision, Performance & Reliability
      </p>
    </motion.div>
  )
);

MobileHeader.displayName = "MobileHeader";

// Main Component
const Expertise: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-50px" });

  return (
    <div className="max-w-8xl mx-auto md:px-15 px-[30px] md:-mt-0 -mt-50 md:pb-20 pb-5">
      <div ref={headerRef}>
        <MobileHeader isHeaderInView={isHeaderInView} />
      </div>

      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-8 gap-4"
        variants={ANIMATIONS.container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {EXPERTISE_DATA.map((item, index) => (
          <Card
            key={`expertise-${index}`}
            item={item}
            isInView={isInView}
            index={index}
            totalItems={EXPERTISE_DATA.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Expertise;