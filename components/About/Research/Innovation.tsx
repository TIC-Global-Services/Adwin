"use client";
import { InnovationImage, InnovationImage2 } from '@/components/Reusable/icons'
import React, { useRef } from 'react'
import Image from 'next/image'
import { InnovationContents } from '../Contents'
import { motion, useInView } from 'framer-motion'

const Innovation = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);

    // Create individual refs for each content item with proper typing
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const isImageInView = useInView(imageRef, { once: false, margin: '-100px 0px' });
    const isContainerInView = useInView(containerRef, { once: false, margin: '-150px 0px' });
    const isLeftImageInView = useInView(leftImageRef, { once: false, margin: '-100px 0px' });

    // Initialize the refs array with proper length
    if (itemRefs.current.length !== InnovationContents.length) {
        itemRefs.current = Array(InnovationContents.length).fill(null);
    }

    const itemInViewStates = InnovationContents.map((_, index) => {
        // Create a ref object for useInView
        const itemRef = { current: itemRefs.current[index] };
        return useInView(itemRef, { once: false, margin: '-80px 0px' });
    });

    // Set up ref array for content items
    const setItemRef = (el: HTMLDivElement | null, index: number) => {
        itemRefs.current[index] = el;
    };
    
    return (
        <div className='mb-40'>
            <div className="max-w-8xl mx-auto px-15 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[342px] gap-6">

                    {/* Text Section */}
                    <motion.div
                        ref={titleRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full md:w-[40%] max-w-md"
                    >
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="text-[#000000] text-[32px] md:text-[42px] leading-tight mb-4"
                        >
                            Driving Innovation in Energy Storage
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 30 }}
                            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="text-[#4A4A4A] text-[16px] leading-relaxed"
                        >
                            Innovation is at the core of everything we do at Adwin. Our in-house Research and Development Lab focuses on creating energy solutions that are smarter, safer, and more efficient whether it's for home backup, electric vehicles, or solar integration.
                            Our R&D lab is located inside our Yamuna Nagar plant and is equipped with advanced tools for both chemical analysis and electrical performance testing.
                        </motion.p>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        ref={imageRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-[60%]"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={isImageInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        >
                            <Image
                                src={InnovationImage}
                                alt="Alternative Image"
                                className="w-full h-[250px] md:h-[342px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                ref={containerRef}
                initial={{ opacity: 0 }}
                animate={isContainerInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className='flex flex-col lg:flex-row items-center lg:items-start h-auto lg:h-[691px] w-full max-w-8xl px-15 mx-auto mt-30 gap-x-10 gap-y-8'
            >
                {/* Left Image Section */}
                <motion.div 
                    ref={leftImageRef}
                    initial={{ x: -80, opacity: 0 }}
                    animate={isLeftImageInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='w-full lg:w-[30%] order-2 lg:order-1'
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={isLeftImageInView ? { scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <Image 
                            src={InnovationImage2} 
                            alt="Innovation" 
                            className='h-[400px] lg:h-[691px] w-full object-cover' 
                        />
                    </motion.div>
                </motion.div>

                {/* Right Content Section */}
                <div className='w-full lg:w-[70%] flex flex-col justify-between h-auto lg:h-[691px] order-1 lg:order-2'>
                    {InnovationContents.map((item, index) => {
                        const isItemInView = itemInViewStates[index];
                        return (
                            <motion.div
                                key={index}
                                ref={(el) => setItemRef(el, index)}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isItemInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: "easeOut",
                                    delay: 0.1 * index
                                }}
                                className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-25 h-auto sm:h-[119.75px] border-b border-[#E6E6E6] py-4 sm:py-0'
                            >
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={isItemInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ 
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.1 * index + 0.2
                                    }}
                                    className='flex-shrink-0'
                                >
                                    <Image src={item.icon} alt='Icons' className='w-[34px] h-[34px]' />
                                </motion.div>
                                <div className='flex flex-col justify-center space-y-1 flex-1'>
                                    <motion.h1 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isItemInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut",
                                            delay: 0.1 * index + 0.3 
                                        }}
                                        className='text-[18px] sm:text-[20px] text-[#191919] font-bold'
                                    >
                                        {item.name}
                                    </motion.h1>
                                    <motion.p 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isItemInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ 
                                            duration: 0.6, 
                                            ease: "easeOut",
                                            delay: 0.1 * index + 0.4 
                                        }}
                                        className='text-[#191919] text-[14px] sm:text-[16px] leading-relaxed'
                                    >
                                        {item.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    )
}

export default Innovation