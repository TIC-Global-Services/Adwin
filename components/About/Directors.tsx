'use client';
import React, { useRef } from 'react'
import { directors } from './Contents';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const Directors = () => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);
  
    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const isImageInView = useInView(imageRef, { once: false, margin: '-150px 0px' });

    return (

        <div className='flex flex-col items-center justify-center text-center'>
            <motion.div
             ref={titleRef}
             initial={{ opacity: 0, y: 30 }}
             animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, ease: "easeOut" }}
              className='max-w-3xl '>
                <h1 className='text-[#151414] text-[42px]'>
                    Leadership That Powers Us
                </h1>
                <p className='text-[#4A4A4A] text-[16px] leading-[24px]'>
                    Our leadership combines decades of industry experience with a shared vision to transform the way India and emerging markets access clean, reliable power.
                </p>
            </motion.div>
            <motion.div ref={imageRef}
                initial={{ opacity: 0, y: 30 }}
          animate={isImageInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className='flex flex-row space-x-5 max-w-7xl mx-auto w-full mt-10'>
                {directors.map((item, index) => (
                    <div key={index} className='flex flex-col space-y-2'>
                        <Image src={item.image} alt={item.name} />
                        <div className='text-start text-black'>
                            <h1 className='text-2xl font-semibold'>{item.name}</h1>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

    )
}

export default Directors