"use client";
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { certifications } from './contents';
import Image from 'next/image';

const Certifications = () => {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });

  return (
    <div className="md:mt-[120px] mt-[40px] md:mb-[120px] mb-[80px] overflow-x-hidden md:px-0 px-[15px] ">

      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex md:flex-row flex-col w-full justify-between md:items-start items-center max-w-4xl mx-auto md:space-x-40"

      >
        <h1 className="font-archivo text-[28px] text-[#4A4A4A] mb:0 mb-5 font-regular whitespace-nowrap">
          Our Certifications
        </h1>
        <p className="text-[#151414] font-light xl:text-[18px] lg:text-[18px] md:text-[18px] md:leading-[20px] text-[16px] xl:leading-[29px]  md:text-start text-center">
          At Adwin, quality is built into every process. Our manufacturing
          systems are internationally certified, ensuring that our products meet
          the highest global standards for safety, performance, and
          environmental responsibility.
        </p>
      </motion.div>

      {/* desktop */}
      <div className='hidden md:block'>
        <div className="flex flex-row flex-wrap justify-center items-start gap-x-45 gap-y-12 w-full max-w-7xl mx-auto mt-[100px] px-4">
          {certifications.map((Images, index) => (
            <div key={index} className="flex flex-col items-center text-center ">
              <Image
                src={Images.image}
                alt="Images"
                className="w-30 h-30 object-contain "
              />
              <p className="text-[#151414] font-regular font-archivo text-[16px] leading-[24px] mt-4 max-w-[180px]">
                {Images.content}
              </p>
            </div>
          ))}
        </div>

      </div>


      {/* mobile */}
      <div className="md:hidden overflow-x-auto scrollbar-hide mt-8">
        <div className="flex gap-4 px-[15px]">
          {certifications.map((Images, index) => (
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

  );
}

export default Certifications