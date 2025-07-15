"use client";
import React, { useRef } from 'react'
import { BatteryTop, Model } from '../Reusable/icons';
import Image from 'next/image';
import CountUpNumber from './CountUpNumber';
import { motion, useInView } from "framer-motion";


const About = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    
    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const isContentInView = useInView(contentRef, { once: false, margin: '-100px 0px' });
    const isImageInView = useInView(imageRef, { once: false, margin: '-150px 0px' });

    return (
      <div className="md:mt-[120px] mt-[60px] relative overflow-x-hidden md:px-0 px-[15px]">
        {/* Content Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex md:flex-row flex-col w-full justify-between md:items-start items-center xl:max-w-5xl lg:max-w-4xl mx-auto "
        >
          <h1 className="font-archivo text-[18px] text-[#4A4A4A] mb:0 mb-5 font-regular">
            About us
          </h1>
          <p className="text-[#151414] font-light xl:text-[36px] lg:text-[35px] md:text-[32px] md:leading-[40px] text-[16px] xl:leading-[46px]  md:text-start text-center">
            Delivering trusted power solutions for solar,{" "}
            <br className="hidden md:block" /> backup, and mobility across
            emerging and <br className="hidden md:block" /> established global markets.
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex lg:flex-row flex-col justify-between items-start md:mt-30 mt-10"
        >
          <Image src={Model} alt="about" className="w-auto md:h-[719px]" />

          <div className="flex flex-col md:items-start items-center  justify-start  md:mt-0 mt-10 ">
            <p className="text-[16px] text-[#191919]    ">
              Adwin has delivered over 3.5 million units across 14+ Indian
              states and international markets like Nepal, UAE, Nigeria, and
              many more. Serving homes and businesses, we continue to grow our
              presence. We're entering new regions in Africa and the Middle
              East, targeting Egypt, Uganda, and more.
            </p>

            <CountUpNumber />

            <button className="bg-[#005F20] w-[175px] h-[56px] rounded-[8px]">
              More About us
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-0 right-0"
        >
          <Image src={BatteryTop} alt="about" className="w-[557px] h-[188px] hidden lg:block" />
        </motion.div>
      </div>
    );
}

export default About