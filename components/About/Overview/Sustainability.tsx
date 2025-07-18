'use client';
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import { SustanabilityContents } from '../Contents';

const Sustainability = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });

  return (
    <div className='flex flex-col justify-center items-center text-center md:mb-50 md:mt-50 mt-15 mb-20 overflow-x-hidden'>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='max-w-3xl '>
        <h1 className='text-[#151414] xl:text-[42px] lg:text-[35px] md:text-[30px] text-[16px] '>
          Sustainability Commitment
        </h1>
        <p className='text-[#4A4A4A] md:text-[16px] text-[10px]  leading-[24px]'>
          We believe in responsible manufacturing. Our processes follow eco-friendly protocols and energy efficiency measures, with certifications in
        </p>
      </motion.div>
      
      <div className='hidden md:block'>
        <div className="flex flex-row w-full justify-center  items-center max-w-7xl mx-auto mt-[100px]">
          {SustanabilityContents.map((Images, index) => (
            <div key={index} className="flex flex-col items-center justify-center ">
              <Image src={Images.image} alt="Images" className="w-30 h-30" />
              <p className="text-[#151414] font-light text-[16px] leading-[24px] mt-[10px] text-center">
                {Images.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full mt-8">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-[15px] w-max">
            {SustanabilityContents.map((Images, index) => (
              <div key={index} className="flex-shrink-0 w-[180px] p-2">
                <div className=" mb-2 overflow-hidden rounded-md">
                  <Image
                    src={Images.image}
                    alt="new"
                    className="w-28 h-28 "
                  />
                </div>
                <div className="text-start">
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">
                    {Images.content}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability