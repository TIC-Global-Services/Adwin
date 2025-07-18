'use client';
import React, { useRef } from 'react'
import { directors } from '../Contents';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const Directors = () => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const isImageInView = useInView(imageRef, { once: false, margin: '-150px 0px' });

    return (

        <div className='flex flex-col items-center justify-center text-center md:mt-0 mt-[60px] md:px-0 px-[15px] '>
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='max-w-3xl '>
                <h1 className='text-[#151414] xl:text-[42px] lg:text-[35px] md:text-[30px] text-[16px] '>
                    Leadership That Powers Us
                </h1>
                <p className='text-[#4A4A4A] md:text-[16px] text-[10px]  leading-[24px]'>
                    Our leadership combines decades of industry experience with a shared vision to transform the way India and emerging markets access clean, reliable power.
                </p>
            </motion.div>
            <div className="overflow-x-auto scroll-snap-x scrollbar-hide group md:mt-25 mt-10">
                <motion.div
                    ref={imageRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="flex space-x-5 max-w-7xl px-4"
                >
                    {directors.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[30%] sm:w-[280px] md:w-[300px] space-y-2 scroll-snap-align-start"
                        >
                            <Image src={item.image} alt={item.name} className="w-full h-auto rounded-lg" />
                            <div className="text-start text-black">
                                <h1 className="text-xl font-semibold">{item.name}</h1>
                                <p className="text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>

    )
}

export default Directors