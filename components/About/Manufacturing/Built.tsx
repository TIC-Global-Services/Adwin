"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { LuArrowUpRight } from "react-icons/lu";
import { BuildContents } from '../Contents';

const Built = () => {
    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // The currently displayed index is either the hovered one or the active one
    const displayedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

    return (
        <div className='flex flex-col items-center justify-between text-center max-w-7xl mx-auto py-20'>
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className='max-w-3xl mb-12'
            >
                <h1 className='text-[#151414] text-[42px]'>
                    Built on In-House <span className='text-[#005F20]'>Manufacturing</span> 
                </h1>
                <p className='text-[#4A4A4A] text-[16px] leading-[24px]'>
                    At Adwin, we believe that quality starts from within. That's why we manufacture everything in-house from design to testing across our certified facilities. This gives us full control over quality, speed, and innovation, helping us stay ahead in the battery and energy storage industry.
                </p>
            </motion.div>

            <div className='flex w-full space-x-30 py-20'>
                {/* Content List */}
                <div className='w-1/2 pr-8 flex flex-col justify-between'>
                    <h1 className='text-[#151414] text-[44px] text-start'>
                        Where We Build
                    </h1>
                    <div>
                        {BuildContents.map((item, index) => (
                            <motion.div 
                                key={index}
                                className={`py-8 border-b border-[#DDD8D8] cursor-pointer group ${displayedIndex === index ? 'bg-transparent' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <h2 className='text-[#151414] text-xl text-left font-semibold'>{item.name}</h2>
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ 
                                                opacity: displayedIndex === index ? 1 : 0,
                                                height: displayedIndex === index ? 'auto' : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className='text-[#4A4A4A] mt-2 text-left overflow-hidden'
                                        >
                                            {item.description}
                                        </motion.p>
                                    </div>
                                    <LuArrowUpRight className='text-[#151414] text-xl mt-1' />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Image Display */}
                <div className='w-1/2 h-[532px] relative'>
                    <Image
                        src={BuildContents[displayedIndex]?.image || '/file.svg'}
                        alt={BuildContents[displayedIndex]?.name || "Facility image"}
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    );
};

export default Built;