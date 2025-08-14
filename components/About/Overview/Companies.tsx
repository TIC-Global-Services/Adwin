"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { CompanyLogos, companiesContent } from '../Contents';
import Image from 'next/image';
import { Company, MobileCompany } from '../../Reusable/icons';

const Companies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allContentShown, setAllContentShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Check if we're in browser environment and set mobile state
  useEffect(() => {
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768; // md breakpoint
      }
      return false;
    };
    
    setIsMobile(checkIsMobile());
    
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Auto-change content for mobile every 2.5 seconds
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    
    if (isMobile) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          (prevIndex + 1) % companiesContent.length
        );
      }, 2500); // 2.5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMobile]);

  // Change content based on scroll progress for desktop only
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Only apply scroll-based changes on desktop
      if (!isMobile) {
        // Calculate index based on scroll progress
        const totalSteps = companiesContent.length;
        const stepSize = 1 / totalSteps;
        const newIndex = Math.min(
          totalSteps - 1,
          Math.floor(latest / stepSize)
        );
        
        if (newIndex !== currentIndex) {
          setCurrentIndex(newIndex);
        }
        
        // Only set allContentShown to true when we've reached the very end
        // and want to start unpinning (desktop only)
        if (latest >= 0.85) {
          setAllContentShown(true);
        } else {
          setAllContentShown(false);
        }
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, currentIndex, isMobile]);

  return (
    <div ref={containerRef} className="relative md:h-[400vh] h-auto md:py-20 py-30 ">
      {/* Pinned container - only sticky on desktop */}
      <div className="md:sticky md:top-0 h-screen">
        <motion.div 
          className="h-full flex flex-col justify-center "
          animate={{
            y: !isMobile && allContentShown ? -100 : 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <motion.div className='flex flex-col space-y-8 items-center justify-center'>
            <h1 className='text-[28px] sm:text-[35px] md:text-[42px] text-[#151414] leading-tight text-center'>
              Group Companies
            </h1>
            
            {/* Mobile: Vertical company logos */}
            <div className='flex flex-row md:hidden space-y-6 w-full max-w-sm overflow-x-auto scrollbar-hide'>
              {CompanyLogos.map((item, index) => (
                <div key={index} className='flex-shrink-0 w-[120px] p-2'>
                  <Image
                    src={item.image}
                    alt='Company Logo'
                    className='w-[80px] h-[26px] sm:w-[90px] sm:h-[29px]'
                  />
                </div>
              ))}
            </div>
            
            {/* Desktop: Horizontal company logos */}
            <div className='hidden md:flex flex-row justify-between w-full max-w-7xl'>
              {CompanyLogos.map((item, index) => (
                <div key={index} className='flex flex-row items-center'>
                  <Image
                    src={item.image}
                    alt='Company Logo'
                    className='w-[90px] h-[29px]'
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Content section */}
          <motion.div className='mt-8 md:mt-40'>
            {/* Mobile Content */}
            <div className="md:hidden">
              <div className="relative w-full h-[700px] sm:h-[500px] overflow-hidden">
                <Image
                  src={MobileCompany}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#F3FEF7] px-6 py-8 w-full max-w-sm h-[300px] flex items-center justify-center border border-white border-opacity-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full text-center"
                      >
                        <h2 className="text-[24px] sm:text-[28px] mb-4 text-[#005F20] leading-tight">
                          {companiesContent[currentIndex].title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[16px] sm:text-[18px]">
                          {companiesContent[currentIndex].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Content */}
            <div className="hidden md:block">
              <div className="relative w-full xl:h-[500px] lg:h-[400px] md:h-[300px]">
                <Image
                  src={Company}
                  alt="Background"
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute left-[35%] inset-0 flex items-center justify-center">
                  <div className="bg-[#F3FEF7] px-15 xl:w-[550px] h-full flex items-center justify-center border border-white border-opacity-20">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full max-w-2xl text-start"
                      >
                        <h2 className="text-[42px] mb-3 text-[#005F20] leading-[49px]">
                          {companiesContent[currentIndex].title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[20px]">
                          {companiesContent[currentIndex].description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Companies;