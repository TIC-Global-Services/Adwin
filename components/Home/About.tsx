"use client";
import React, { useRef } from 'react';
import { BatteryTop, Model } from '../Reusable/icons';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import CountUpNumber from './CountUpNumber';

const About = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const isContentInView = useInView(contentRef, { once: false, margin: '-100px 0px' });
    const isImageInView = useInView(imageRef, { once: false, margin: '-150px 0px' });

    return (
      <div className="relative mx-auto  px-4 lg:px-20 md:pt-20 pt-10 md:pb-0 pb-10 ">
        {/* Content Section */}
      
        <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex md:flex-row flex-col w-full justify-between md:items-start items-center max-w-7xl mx-auto"
      >
        <h1 className="font-archivo md:text-[28px] text-[18px] text-[#4A4A4A] font-regular">
        About us
        </h1>
        <p className="text-[#151414] font-light xl:text-[36px] lg:text-[35px] md:text-[32px] md:leading-[40px] text-[16px] xl:leading-[46px] md:text-start text-center md:mt-0 mt-3">
        Delivering trusted power solutions for<br />solar, backup, and mobility across <br /> emerging and established global markets.
        </p>
      </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col lg:flex-row justify-between items-center md:mt-20 mt-10 md:space-x-10"
        >
          <div className="w-full lg:w-1/2 relative flex items-end justify-end">
            <Image 
              src={Model} 
              alt="About Adwin" 
              className=" md:max-w-2xl h-auto object-contain"
              priority
            />
            <div className='md:hidden absolute bottom-0 bg-gradient-to-t from-white via-white/50 to-white/0 h-[20dvh] w-full'></div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left md:mt-0 mt-10 ">
            <p className="text-base md:text-lg text-[#191919] max-w-prose">
              Adwin has delivered over 3.5 million units across 14+ Indian states and international markets like Nepal, UAE, Nigeria, and many more. Serving homes and businesses, we continue to grow our presence. We're entering new regions in Africa and the Middle East, targeting Egypt, Uganda, and more.
            </p>

            <CountUpNumber />

            <button className="bg-[#005F20] text-white font-medium w-44 h-14 rounded-lg hover:bg-[#007a2a] transition-colors duration-300">
              More About us
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="hidden lg:block absolute bottom-0 right-0"
        >
          <Image 
            src={BatteryTop} 
            alt="Battery decoration" 
            className="w-[400px] h-auto object-contain"
          />
        </motion.div>
      </div>
    );
}

export default About;