"use client";
import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { certifications } from './contents';
import Image from 'next/image';

const Certifications = () => {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });

  return (
    <div className="mt-[180px] mb-[180px]">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-row w-full justify-between items-start max-w-5xl space-x-30 mx-auto "
      >
        <h1 className="font-archivo text-[18px] text-[#4A4A4A] whitespace-nowrap  font-regular">
          Our Certifications
        </h1>
        <p className="text-[#151414] font-light text-[20px] leading-[30px] ">
          At Adwin, quality is built into every process. Our manufacturing
          systems are internationally certified, ensuring that our products meet
          the highest global standards for safety, performance, and
          environmental responsibility.
        </p>
      </motion.div>

      <div className="flex flex-row w-full justify-center  items-center max-w-5xl mx-auto mt-[100px]">
        {certifications.map((Images, index) => (
          <div key={index} className="flex flex-col items-center justify-center ">
            <Image src={Images.image} alt="Images" className="w-30 h-30" />
            <p className="text-[#151414] font-light text-[16px] leading-[24px] mt-[10px] text-center">
              {Images.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications