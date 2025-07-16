"use client";
import React from 'react';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import { AboutJourney } from '../Reusable/icons';

const Journey = () => {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="py-16 px-4 md:px-8 lg:px-12 xl:px-16 ">
            <div className="max-w-8xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2  items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    {/* Content Section */}
                    <motion.div
                        className="space-y-6 lg:space-y-8 "
                        variants={itemVariants}
                    >
                        {/* Title */}
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-[42px]  leading-tight lg:leading-[49px] text-[#151414] mb-6"
                            variants={itemVariants}
                        >
                            From Panel to Power – Our Journey
                        </motion.h1>

                        {/* Description Paragraphs */}
                        <motion.div className="space-y-4 lg:space-y-6" variants={itemVariants}>
                            <motion.p
                                className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed"
                                variants={itemVariants}
                            >
                                Adwin Power is part of the diversified Unique Group, established in 1995. With interests across plywood, wooden panels, fertilizers, cement, MDF, particle boards, and LED lighting, the Group has grown into a trusted name in Indian industry.
                            </motion.p>

                            <motion.p
                                className="text-[#4A4A4A] text-base md:text-[20px] leading-relaxed"
                                variants={itemVariants}
                            >
                                In 2010, Unique Energos Pvt. Ltd. was founded as a dedicated vertical to power India's growing energy needs. Our 32.5-acre manufacturing facility in Yamuna Nagar, Haryana is equipped with cutting-edge technology and infrastructure to produce:
                            </motion.p>
                        </motion.div>

                        {/* Product List */}
                        <motion.div variants={itemVariants}>
                            <motion.ul
                                className="space-y-3 mt-6"
                                variants={containerVariants}
                            >
                                {[
                                    "Lead-Acid Products",
                                    "Lithium Products",
                                    "Solar Powered Products",
                                    "LED Lighting (Ozoro by Adwin)"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-center text-[#151414] text-base md:text-lg font-medium"
                                        variants={itemVariants}

                                    >

                                        {item}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>



                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        className="flex justify-center lg:justify-end "
                        variants={imageVariants}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0  rounded-2xl transform rotate-3 scale-105 opacity-20"
                                animate={{ rotate: [3, -3, 3] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <Image
                                src={AboutJourney}
                                alt="Our Journey - Adwin Power Manufacturing Facility"
                                className="relative z-10 h-[400px] md:h-[500px] lg:h-[612px] w-auto object-cover "
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;