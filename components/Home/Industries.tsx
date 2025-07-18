"use client";
import React, { useRef, useState, useEffect } from 'react';
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
        <div className="flex flex-col items-center w-full py-12 md:py-20 md:px-0 px-[15px]">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-row justify-between items-center w-full mb-8"
            >
                <h1 className="text-[#151414] text-[18px]  md:text-[36px] lg:text-[42px] xl:text-[46px] font-archivo font-semibold md:px-20">
                    Industries we serve
                </h1>
                <div className="flex flex-row items-center space-x-3 md:px-20">
                    <button
                        onClick={scrollLeft}
                        className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-[16px] transition-all duration-200 ${
                            canScrollLeft
                                ? 'bg-[#E8E8E8] text-black hover:bg-[#d8d8d8] cursor-pointer'
                                : 'bg-[#f5f5f5] text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-[16px] transition-all duration-200 ${
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
            <div className="w-full relative md:px-10">
                {/* <div className="bg-gradient-to-r from-white via-white/50 to-transparent w-[15vw] sm:w-[2vw] h-full absolute left-10 top-0 z-10 pointer-events-none" />
                <div className="bg-gradient-to-l from-white via-white/50 to-transparent w-[15vw] sm:w-[2vw] h-full absolute right-10 top-0 z-10 pointer-events-none" /> */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {IndustriesWeServe.map((content, index) => (
                        <motion.div
                            key={index}
                            className="flex-shrink-0 relative w-[245px] h-[245px] sm:w-[300px] sm:h-[300px] md:w-[455px] md:h-[455px] group cursor-pointer snap-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Image
                                src={content.image}
                                alt={content.title}
                                fill
                                className="rounded-[30px] md:rounded-[53px] w-full h-full object-cover transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[30px] md:rounded-[53px] flex flex-col justify-end p-6 md:p-8 transition-all duration-300">
                                <h1 className="font-semibold text-[16px] md:text-[20px] text-white">
                                    {content.title}
                                </h1>
                                <p className="font-normal text-[12px] md:text-[14px] text-white/90 leading-relaxed">
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
};

export default Industries;