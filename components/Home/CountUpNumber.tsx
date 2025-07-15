'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NumberFlow, { useCanAnimate } from '@number-flow/react';

interface StatItem {
  number: number;
  static: string;
  description: string;
}

const contents: StatItem[] = [
  { number: 30, static: '+', description: 'Years' },
  { number: 8, static: '+', description: 'International Markets' },
  { number: 2500, static: '+', description: 'Dealers in India' },
  { number: 3.5, static: 'M+', description: 'Batteries Sold' },
  { number: 75000, static: '+', description: 'Batteries Manufactured Monthly' },
  { number: 32.5, static: '', description: 'Acres of Manufacturing Land' },
];

const MotionNumberFlow = motion.create(NumberFlow);

const StatCard: React.FC<{
  item: StatItem;
  index: number;
  triggerAnimation: boolean;
}> = ({ item, index, triggerAnimation }) => {
  const canAnimate = useCanAnimate();
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      // Reset to 0 first
      setCurrentValue(0);

      // Start animation after a delay based on index
      const timer = setTimeout(() => {
        setCurrentValue(item.number);
      }, index * 200);

      return () => clearTimeout(timer);
    } else {
      // Reset when not triggered
      setCurrentValue(0);
    }
  }, [triggerAnimation, item.number, index]);

  return (
    <motion.div
      className="bg-white rounded-lg  text-start px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 1.5,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="md:text-3xl text-2xl font-bold text-[#191919] md:mb-2 flex items-center justify-start">
        <MotionNumberFlow
          key={`${triggerAnimation}-${index}`} // Force re-render on trigger change
          value={currentValue}
          className="font-bold"
          format={item.number % 1 !== 0 ?
            { minimumFractionDigits: 1, maximumFractionDigits: 1 } :
            { notation: item.number >= 1000 ? 'compact' : 'standard' }
          }
          layout={canAnimate}
          layoutRoot={canAnimate}
          transition={{
            layout: { duration: 1.2, bounce: 0, type: 'spring' }
          }}
        />
        <motion.span
          className="text-[#005F20] ml-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: currentValue > 0 ? 1 : 0, scale: currentValue > 0 ? 1 : 0.8 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {item.static}
        </motion.span>

      </div>
      <motion.p
        className="text-[#4E4E4E] font-medium md:text-lg text-sm "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: triggerAnimation ? 1 : 0, y: triggerAnimation ? 0 : 10 }}
        transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
      >
        {item.description}
      </motion.p>
    </motion.div>
  );
};

const CountUpNumber: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-50px 0px' });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) {
      // Force re-trigger animation by changing key
      setAnimationKey(prev => prev + 1);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto py-8 ">
      <motion.div
        className="grid md:grid-cols-3 grid-cols-2  md:gap-6 gap-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {contents.map((item, index) => (
          <StatCard
            key={`${animationKey}-${index}`} // Force re-render with new key
            item={item}
            index={index}
            triggerAnimation={isInView}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CountUpNumber;