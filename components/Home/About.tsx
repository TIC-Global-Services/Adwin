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
        <div className="mt-[120px] relative">
            {/* Content Section */}
            <motion.div
               ref={titleRef}
               initial={{ opacity: 0, y: 30 }}
               animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex flex-row w-full justify-between items-start max-w-5xl mx-auto ">
                <h1 className="font-archivo text-[18px] text-[#4A4A4A]  font-regular">
                    About us
                </h1>
                <p className="text-[#151414] font-light text-[36px] leading-[46px] ">
                Delivering trusted power solutions for solar, <br /> backup, and mobility across emerging and <br /> established global markets.
                </p>
            </motion.div>

            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className='flex flex-row justify-between items-start mt-30'>
                <Image src={Model} alt="about" className='w-auto h-[719px]' />

                <div className='flex flex-col items-start justify-start'>
                    <p className='text-[16px] text-[#191919]'>
                        Adwin has delivered over 3.5 million units across 14+ Indian states and international markets like Nepal, UAE, Nigeria, and many more. Serving homes and businesses, we continue to grow our presence. We're entering new regions in Africa and the Middle East, targeting Egypt, Uganda, and more.
                    </p>

                    <CountUpNumber />

                    <button className='bg-[#005F20] w-[175px] h-[56px] rounded-[8px]'>
                        More About us
                    </button>
                </div>
            </motion.div>

            <motion.div
                ref={imageRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                className='absolute bottom-0 right-0'>
                <Image src={BatteryTop} alt='about' className='w-[557px] h-[188px]' />
            </motion.div>
        </div>
    );
}

export default About