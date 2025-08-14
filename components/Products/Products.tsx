import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductsData } from "@/data/Products";

const createSlug = (text: string): string => {
    if (!text) return '';
    return text.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
};

const Products = () => {
    return (
        <div className="flex flex-col gap-15 p-6 max-w-8xl mx-10 py-20">
            {ProductsData.map((product, index) => (
                <div className="flex flex-col gap-5" key={index}>
                    <h2 className="text-[32px] leading-[46px] font-semibold">{product.title}</h2>
                    
                    {/* Handle single product */}
                    {product.product && (
                        <div className="bg-[#FFFFFF] border-2 border-[#F0F0F0] w-[392px] rounded-[20px] p-4 flex flex-col gap-4 items-start hover:shadow-[2px_-7px_37.5px_0px_#82978E80]">
                            {product.product.mainImage && (
                                <Image
                                    src={product.product.mainImage}
                                    alt={product.product?.name ?? ""}
                                    className="w-[360px] h-[273px] rounded-[10px]"
                                />
                            )}
                            <h2 className="text-xl font-medium py-2">{product.product?.name}</h2>
                            <Link
                                href={`/products/${createSlug(product.title)}/${createSlug(product.product.name)}`}
                                className="bg-transparent border border-[#005F20] text-[#005F20] px-4 py-2 rounded hover:bg-[#005F20] hover:text-white transition-colors"
                            >
                                View more
                            </Link>
                        </div>
                    )}
                    
                    {/* Handle multiple products */}
                    {product.products && (
                        <div className="flex gap-4 flex-wrap">
                            {product.products.map((subProduct, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="bg-[#FFFFFF] border-2 border-[#F0F0F0] w-[392px] rounded-[20px] p-4 flex flex-col gap-4 items-start hover:shadow-[2px_-7px_25.5px_0px_#82978E80]"
                                >
                                    {subProduct.mainImage && (
                                        <Image
                                            src={subProduct.mainImage}
                                            alt={subProduct?.name ?? ""}
                                            className="w-[360px] h-[273px] rounded-[10px]"
                                        />
                                    )}
                                    <h2 className="text-xl font-medium">{subProduct?.name}</h2>
                                    <Link
                                        href={`/products/${createSlug(product.title)}/${createSlug(subProduct.name)}`}
                                        className="bg-transparent border border-[#005F20] text-[#005F20] px-4 py-2 rounded hover:bg-[#005F20] hover:text-white transition-colors"
                                    >
                                        View more
                                    </Link>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Products;