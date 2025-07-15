"use client";
import React, { useRef } from 'react';
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

  const renderCard = (product: Product, index: number) => {
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
        className="rounded-lg border border-[#CFCFCF]  transition-shadow duration-300 overflow-hidden group h-[369px]"
      >
        <div className="block h-full p-8">
          <div className=" flex flex-col h-full justify-between">
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

  return (
    <div className='mt-[180px]'>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-row w-full justify-between items-start max-w-5xl mx-auto"
      >
        <h1 className="font-archivo text-[18px] text-[#4A4A4A] font-regular">
          Our Products & Services
        </h1>
        <p className="text-[#151414] font-light text-[36px] leading-[46px]">
          At Adwin, we deliver comprehensive<br /> energy solutions across
        </p>
      </motion.div>

      <motion.div>
        <div className="container mx-auto px-24 mt-40 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsContent.map((product: Product, index: number) => (
              <div key={index}>
                {renderCard(product, index)}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Products;