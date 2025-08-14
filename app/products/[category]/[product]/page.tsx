"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { ProductsData } from "@/data/Products";
import Image from "next/image";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoArrowUp, IoArrowDown } from "react-icons/io5";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProductDetail {
  id: number;
  name: string;
  desc: string;
  benefits: string[];
  Image?: any;
}

interface Product {
  mainImage?: any;
  name: string;
  Heroimage?: any;
  desc: string;
  descImage?: any;
  featureImage?: any;
  features?: Array<{ image: any; name: string }>;
  details?: ProductDetail[];
}

interface Category {
  id: number;
  title: string;
  product?: Product;
  products?: Product[];
}

const createSlug = (text: string): string => {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

const findCategoryBySlug = (slug: string): Category | null => {
  return (
    ProductsData.find((category) => createSlug(category.title) === slug) || null
  );
};

const findProductInCategory = (
  category: Category,
  productSlug?: string
): Product | null => {
  // If no product slug provided, return the single product or first product from array
  if (!productSlug) {
    if (category.product) {
      return category.product;
    }
    if (category.products && category.products.length > 0) {
      return category.products[0];
    }
    return null;
  }

  // If product slug provided, find matching product
  if (category.product && createSlug(category.product.name) === productSlug) {
    return category.product;
  }

  if (category.products) {
    return (
      category.products.find(
        (product) => createSlug(product.name) === productSlug
      ) || null
    );
  }

  return null;
};

const ProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState<
    Record<number, boolean>
  >({});

  const toggleBenefits = (id: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Clean up any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Create new animations
      const images = gsap.utils.toArray(".image") as Element[];

      images.forEach((img: Element) => {
        gsap.fromTo(
          img,
          {
            clipPath: "inset(0 100% 0 0 round 8px)",
          },
          {
            clipPath: "inset(0 0% 0 0 round 8px)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
              markers: false, // Set to true for debugging
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }

    return () => {
      // Clean up on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [product]);

  useEffect(() => {
    const categorySlug = params.category as string;
    const productSlug = params.product as string;

    if (!categorySlug) {
      setError("Category not specified");
      setLoading(false);
      return;
    }

    const foundCategory = findCategoryBySlug(categorySlug);
    console.log("Debug - Found category:", foundCategory);

    if (!foundCategory) {
      setError(`Category "${categorySlug}" not found`);
      setLoading(false);
      return;
    }

    const foundProduct = findProductInCategory(foundCategory, productSlug);
    console.log("Debug - Found product:", foundProduct);

    if (!foundProduct) {
      setError(`Product not found in category "${foundCategory.title}"`);
      setLoading(false);
      return;
    }

    setCategory(foundCategory);
    setProduct(foundProduct);
    setError("");
    setLoading(false);
  }, [params]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !category || !product) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          Error: {error || "Product not found"}
        </h1>
        <p className="text-gray-600 mb-4">Available categories:</p>
        <ul className="mb-6 text-sm text-gray-500">
          {ProductsData.map((cat) => (
            <li key={cat.id}>
              • {cat.title} (slug: {createSlug(cat.title)})
            </li>
          ))}
        </ul>
        <button
          onClick={() => router.push("/products")}
          className="bg-[#005F20] text-white px-4 py-2 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className=" ">
      {/* Breadcrumb */}
      {/* <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <button
              onClick={() => router.push("/")}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Home
            </button>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <button
              onClick={() => router.push("/products")}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Products
            </button>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav> */}

      {/* Product Selector for Multiple Products */}
     

      {/* Product Header */}
      <div className="">
        {/* Hero Section */}
        <div className="p-4">
          <div className="relative w-full h-[96dvh] mb-12 ">
            {product.mainImage ? (
              <Image
                src={product.mainImage}
                alt={product.name}
                fill
                className="object-cover rounded-xl "
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
            <span className="absolute bottom-10 left-12  text-[68px] text-white  tracking-wide">
              {category.title}
            </span>
          </div>
        </div>
        {category.products && category.products.length > 1 && (
        <div className="mb-15">
          <div className="text-center">
            {/* <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {category.title}
            </h2> 
            <p className="text-gray-600">Select a product to view details</p>*/}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {category.products.map((categoryProduct, index) => (
              <button
                key={index}
                onClick={() => {
                  const newSlug = createSlug(categoryProduct.name);
                  router.push(
                    `/products/${createSlug(category.title)}/${newSlug}`
                  );
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  categoryProduct.name === product.name
                    ? "bg-[#ECFCE8] text-[#005F20] cursor-pointer transform hover:scale-105"
                    : "bg-[#F8F8F8] text-[#4A4A4A]  cursor-pointer hover:scale-105"
                }`}
              >
                {categoryProduct.name}
              </button>
            ))}
          </div>
        </div>
      )}


        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 justify-center items-center max-w-8xl mx-auto md:px-15">
          <div className="space-y-6 ">
            <div>
              {/* <div className="flex items-center  gap-2 mb-2">
                {category.products && category.products.length > 1 && (
                  <span className="bg-[#005F20] text-white text-xs px-2 py-1 rounded-full">
                    {category.products.findIndex(
                      (p) => p.name === product.name
                    ) + 1}{" "}
                    of {category.products.length}
                  </span>
                )}
              </div> */}
              <h1 className="text-4xl font-bold mb-2 text-gray-900">
                {product.name}
              </h1>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.desc}
            </p>
          </div>

          {/* Image */}
          <Image src={product.descImage} alt="New" />
        </div>
        <div className="relative h-[461px] w-full">
          <Image
            src={product.featureImage}
            alt="new"
            className="w-full h-full object-cover"
          />
          {product.features && product.features.length > 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full px-4">
                <ul className="flex justify-between items-center w-full">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex flex-col items-center flex-1 "
                    >
                      {feature.image && (
                        <Image
                          src={feature.image}
                          alt={feature.name}
                          width={55}
                          height={55}
                          className="mb-2"
                        />
                      )}
                      <span className="text-white text-center w-[226px] text-[26px]">
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

       
      {/* Product Details */}
      <div className="max-w-8xl mx-auto  py-20">
        {product.details && product.details.length > 0 && (
          <div className="space-y-16">
            {/* Section Title */}

            {product.details.map((detail) => {
              const isExpanded = expandedSections[detail.id];
              const containerHeight = isExpanded ? "auto" : "h-[296px]";

              return (
                <div
                  key={detail.id}
                  className="grid lg:grid-cols-2 gap-12 items-stretch  px-15 mx-auto justify-center "
                >
                  {/* Left Side - Text */}
                  <div
                    className={`space-y-6 bg-[#F8F9F9] px-4 py-5 flex flex-col relative ${containerHeight}`}
                  >
                    {/* Top content */}
                    <div>
                      <div className="flex flex-row justify-between gap-5 mt-3">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {detail.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed max-w-sm">
                          {detail.desc}
                        </p>
                      </div>

                      {detail.benefits?.length > 0 && (
                        <>
                          {!isExpanded && (
                            <div className="absolute bottom-10 left-5">
                              <button
                                onClick={() => toggleBenefits(detail.id)}
                                className="flex items-center gap-1 text-[#151414] text-[14px] font-medium hover:underline cursor-pointer"
                              >
                                Know More
                                <IoArrowDown size={14} />
                              </button>
                            </div>
                          )}
                          {isExpanded && (
                            <div className="py-4 mt-3">
                              <ul className="space-y-2 w-[380px] ml-auto">
                                <h4 className="text-lg font-medium mb-3 text-gray-900">
                                  Benefits
                                </h4>
                                {detail.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-gray-700 text-[13px] leading-relaxed">
                                      • {benefit}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                              <div className="absolute bottom-5 left-3">
                                <button
                                  onClick={() => toggleBenefits(detail.id)}
                                  className="flex items-center gap-1 text-[#151414] font-medium hover:underline transition-colors cursor-pointer"
                                >
                                  Show Less
                                  <IoArrowUp size={14} />
                                </button>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Image */}
                  <div className={`flex ${containerHeight}`}>
                    {detail.Image ? (
                      <Image
                        src={detail.Image}
                        alt={detail.name}
                        width={600}
                        height={400}
                        className="image w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">
                          No Image Available
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Back to Products */}
      <div className="text-center py-10 border-gray-200">
        <button
          onClick={() => router.push("/products")}
          className="bg-[#005F20] text-white px-8 py-3 rounded-lg hover:bg-[#004A1A] transition-colors duration-200 font-medium cursor-pointer"
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
