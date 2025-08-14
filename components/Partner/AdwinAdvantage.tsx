'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    CertifiedIcon,
    DistributionIcon,
    InnovationIcon,
    LogisticsIcon,
    SupportIcon,
} from '../Reusable/icons';
import Image from 'next/image';

const AdwinAdvantage = () => {
    const content = [
        { title: 'Certified product quality', icon: CertifiedIcon },
        { title: 'Reliable delivery and logistics', icon: LogisticsIcon },
        { title: 'Marketing and onboarding support', icon: SupportIcon },
        { title: 'Continuous product innovation', icon: InnovationIcon },
        { title: 'PAN India Distribution Network', icon: DistributionIcon },
    ];

    // Stagger container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    // Slide-up card animation
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section className="px-4 md:px-20 py-12 md:py-20">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-6  mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Title Cell */}
                <motion.div
                    className="col-span-1 sm:col-span-3 lg:col-span-1 flex items-start"
                    variants={cardVariants}
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-800">
                        The Adwin <br /><span className="text-[#005F20]">Advantage</span>
                    </h1>
                </motion.div>

                {/* Cards */}
                {content.map((item, index) => {
                    const isOdd = (index + 1) % 2 !== 0;
                    const bgColor = isOdd ? '#45B6AF' : '#E4EEEE';
                    const textColor = isOdd ? 'text-white' : 'text-gray-800';

                    return (
                        <motion.div
                            key={index}
                            className="relative w-full h-[40vh] sm:h-[50vh] rounded-xl flex flex-col justify-between p-6 cursor-pointer"
                            style={{ backgroundColor: bgColor }}
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </motion.div>

                            <motion.p
                                className={`text-base sm:text-2xl font-semibold max-w-[200px] ${textColor}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {item.title}
                            </motion.p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default AdwinAdvantage;