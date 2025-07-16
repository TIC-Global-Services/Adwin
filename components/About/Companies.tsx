"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CompanyLogos, companiesContent } from './Contents';
import Image from 'next/image';
import { Company } from '../Reusable/icons';

const Companies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allContentShown, setAllContentShown] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Change content based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        companiesContent.length - 1,
        Math.floor(latest * companiesContent.length)
      );
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
      
      // Check if all content has been shown
      if (newIndex === companiesContent.length - 1 && latest >= 0.99) {
        setAllContentShown(true);
      } else {
        setAllContentShown(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, currentIndex]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Pinned container that moves up after all content is shown */}
      <motion.div 
        className="sticky top-0 h-screen flex flex-col justify-center"
        animate={{
          y: allContentShown ? -100 : 0,
          transition: { duration: 0.5 }
        }}
      >
        <motion.div className='flex flex-col space-y-10 items-center justify-center'>
          <h1 className='text-[42px] text-[#151414] leading-[42px]'>
            Group Companies
          </h1>
          <div className='flex flex-row justify-between w-full max-w-4xl'>
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
        <motion.div className='mt-40'>
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={Company}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            
            <div className="absolute left-[35%] inset-0 flex items-center justify-center">
              <div className="bg-[#F3FEF7] p-5 w-[500px] h-full flex items-center justify-center border border-white border-opacity-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-2xl text-center"
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
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Companies;