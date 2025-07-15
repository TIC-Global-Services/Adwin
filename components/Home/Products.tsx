"use client";
import React, { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { productsContent } from './contents';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ImageProduct {
  image: StaticImageData;
  name?: never;
  description?: never;
  link?: never;
  bg?: never;
  text?: never;
}

interface TextProduct {
  name: string;
  description: string;
  link: string;
  bg?: string;
  text?: string;
  image?: never;
}

type Product = ImageProduct | TextProduct;

const Products: React.FC = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: false, margin: '-50px 0px' });
  const [showAll, setShowAll] = useState(false);

  // Desktop card component with hooks
  const DesktopCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
    const isImageOnly = index % 2 === 0;
    const cardRef = useRef<HTMLDivElement>(null);
    const isCardInView = useInView(cardRef, { once: false, margin: '-100px 0px' });

    if (isImageOnly) {
      return (
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isCardInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: index * 0.1 
          }}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
        >
          <div className="relative h-64 overflow-hidden h-[369px]">
            <Image
              src={product.image || "/file.svg"}
              alt="Product Image"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 h-[369px]"
            />
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isCardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut",
          delay: index * 0.1 
        }}
        style={{ backgroundColor: product.bg }}
        className="rounded-lg border border-[#CFCFCF] transition-shadow duration-300 overflow-hidden group h-[369px]"
      >
        <div className="block h-full p-8">
          <div className="flex flex-col h-full justify-between">
            <h3
              style={{ color: product.text }}
              className="text-[#151414] text-[32px] font-semibold mb-8 transition-colors"
            >
              {product.name}
            </h3>
            <div className="flex flex-col items-start">
              <p
                style={{ color: product.text }}
                className="text-[#4A4A4A] text-[14px] leading-relaxed mb-4"
              >
                {product.description}
              </p>
              <Link
                style={{ color: product.text }}
                href={product.link || "#"}
                className="text-[#131313] font-medium text-sm hover:underline underline-offset-2 hover:text-[#005F20]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Mobile card component without hooks
  const MobileCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
    const isImageOnly = index % 2 === 0;

    if (isImageOnly) {
      return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
          <div className="relative h-64 overflow-hidden md:h-[369px] h-[202px]">
            <Image
              src={product.image || "/file.svg"}
              alt="Product Image"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 md:h-[369px] h-[202px]"
            />
          </div>
        </div>
      );
    }

    return (
      <div
        style={{ backgroundColor: product.bg }}
        className="rounded-lg border border-[#CFCFCF] transition-shadow duration-300 overflow-hidden group md:h-[369px] h-[202px]"
      >
        <div className="block h-full md:p-8 p-4">
          <div className="flex flex-col h-full justify-between">
            <h3
              style={{ color: product.text }}
              className="text-[#151414] md:text-[32px] text-[16px] font-semibold mb-8 transition-colors"
            >
              {product.name}
            </h3>
            <div className="flex flex-col items-start">
              <p
                style={{ color: product.text }}
                className="text-[#4A4A4A] md:text-[14px] text-[10px] leading-relaxed mb-4"
              >
                {product.description}
              </p>
              <Link
                style={{ color: product.text }}
                href={product.link || "#"}
                className="text-[#131313] font-medium md:text-[14px] text-[10px] hover:underline underline-offset-2 hover:text-[#005F20]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleViewMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="md:mt-[180px] mt-[80px] overflow-x-hidden md:px-0 px-[15px] md:py-20 py-5 bg-[#F6F6F6]">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex md:flex-row flex-col w-full justify-between md:items-start items-center max-w-5xl mx-auto"
      >
        <h1 className="font-archivo text-[18px] text-[#4A4A4A] font-regular">
          Our Products & Services
        </h1>
        <p className="text-[#151414] font-light xl:text-[36px] lg:text-[35px] md:text-[32px] md:leading-[40px] text-[16px] xl:leading-[46px] md:text-start text-center md:mt-0 mt-3">
          At Adwin, we deliver comprehensive
          <br /> energy solutions across
        </p>
      </motion.div>

      <motion.div>
        {/* Desktop Layout */}
        <div className="hidden md:block container mx-auto px-24 md:mt-40 mt-0 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsContent.map((product: Product, index: number) => (
              <div key={index}>
                <DesktopCard product={product} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden container mx-auto px-4 md:mt-20 py-8">
          <div className="grid grid-cols-2 gap-4">
            {productsContent
              .slice(0, showAll ? productsContent.length : 4)
              .map((product: Product, index: number) => (
                <div key={index}>
                  <MobileCard product={product} index={index} />
                </div>
              ))}
          </div>

          {productsContent.length > 4 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleViewMore}
                className="text-[#191919] text-lg font-medium transition-colors duration-300 flex items-center gap-2"
              >
                {showAll ? "View Less" : "View More"}
                {showAll ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18,15 12,9 6,15"></polyline>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Products;