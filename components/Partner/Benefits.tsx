'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BenefitsImg, BrandingIcon, CoBrandIcon, LeadIcon, StockIcon } from '../Reusable/icons';
import Image from 'next/image';

const Benefits = () => {
    const benefitsContent = [
        { title: 'Priority Stock Availability', icon: StockIcon },
        { title: 'Custom Branding Options', icon: BrandingIcon },
        { title: 'Lead Referrals from Website', icon: LeadIcon },
        { title: 'Co-Branded Events & Campaigns', icon: CoBrandIcon },
    ];

    // Stagger list
    const listVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    // Slide-in benefit items
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    // Image fade-in + scale
    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <section className="px-4 md:px-20 py-12 md:py-20 bg-[#F6FDF9]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left: Title + Benefits */}
                    <motion.div
                        className="flex flex-col items-start gap-6 lg:max-w-lg w-full"
                        variants={listVariants}
                    >
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-center lg:text-left"
                            variants={itemVariants}
                        >
                            Dealer & <span className="text-[#005F20]">Distributor Benefits</span>
                        </motion.h1>

                        <motion.div
                            className="flex flex-col gap-4 w-full mt-2"
                            variants={listVariants}
                        >
                            {benefitsContent.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#005F20]/10 flex items-center justify-center">
                                        <Image src={benefit.icon} alt={benefit.title} width={24} height={24} />
                                    </div>
                                    <p className="text-lg md:text-xl font-medium text-gray-800">
                                        {benefit.title}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div
                        className="w-full flex items-center justify-center "
                        variants={imageVariants}
                    >
                        <Image
                            src={BenefitsImg}
                            alt="Benefits"
                            className=" w-3/4 aspect-square  object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Benefits;