"use client";
import React, { useRef, useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { IndustriesWeServe } from './contents';
import Image from 'next/image';

const Industries = () => {
    const titleRef = useRef(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });

    // Check scroll position and update button states
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
        }
    };

    // Scroll left function
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 455 + 24; // card width + gap
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Scroll right function
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 455 + 24; // card width + gap
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Check scroll position on mount and scroll events
    useEffect(() => {
        checkScrollPosition();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            return () => container.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    return (
        <div className="flex flex-col items-center mt-[120px] w-full overflow-x-hidden">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-row justify-between items-center w-full max-w-7xl px-4 mb-8"
            >
                <h1 className="text-[#151414] xl:text-[46px] lg:text-[42px] md:text-[36px] text-[18px] font-archivo font-semibold">
                    Industries we serve
                </h1>
                <div className="flex flex-row items-center space-x-3">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-[16.27px] transition-all duration-200 ${
                            canScrollLeft 
                                ? 'bg-[#E8E8E8] text-black hover:bg-[#d8d8d8] cursor-pointer' 
                                : 'bg-[#f5f5f5] text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`md:w-10 md:h-10 w-8 h-8 flex items-center justify-center rounded-[16.27px] transition-all duration-200 ${
                            canScrollRight 
                                ? 'bg-[#E8E8E8] text-black hover:bg-[#d8d8d8] cursor-pointer' 
                                : 'bg-[#f5f5f5] text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <MdOutlineKeyboardArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </motion.div>

            {/* Scrollable container */}
            <div className="w-full md:pl-30 md:mt-[50px] mt-[1px] px-4">
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {IndustriesWeServe.map((content, index) => (
                        <motion.div 
                            key={index} 
                            className="flex-shrink-0 relative md:w-[455px] md:h-[455px] w-[245px] h-[245px] group cursor-pointer"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image
                                src={content.image}
                                alt={content.title}
                                width={455}
                                height={455}
                                className="md:rounded-[53.68px] rounded-[30px] w-full h-full object-cover transition-transform duration-300 "
                            />
                            
                            
                            <div className="absolute  inset-0 bg-gradient-to-t  rounded-[53.68px] flex flex-col justify-start p-8 transition-all duration-300">
                                <h1 className='font-semibold text-[20px] text-white '>
                                    {content.title}
                                </h1>
                                <p className='font-regular text-[14px] text-white/90 leading-relaxed'>
                                    {content.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hide scrollbar styles */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

export default Industries;