"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { JourneyContents } from "@/components/About/Contents";
import Image, { StaticImageData } from "next/image";
import DynamicHero from "@/components/Reusable/DynamicHero";
import { ManufacturingHero } from "@/components/Reusable/icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CircleElementProps {
  index: number;
  year: string;
  description: string;
  imageUrl: string | StaticImageData;
  isLeftAlign: boolean;
}

interface LineElementProps {
  index: number;
}

const CircleElement: React.FC<CircleElementProps> = ({
  index,
  year,
  description,
  imageUrl,
  isLeftAlign,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !circleRef.current ||
      !contentRef.current ||
      !imageRef.current
    )
      return;

    // Initial setup - set elements to start from bottom with opacity 0
    gsap.set([contentRef.current, imageRef.current], {
      y: 30,
      opacity: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Scale and opacity based on progress for circle
          gsap.set(circleRef.current, {
            scale: 0.2 + progress * 0.5,
            opacity: 0.4 + progress * 0.7,
          });

          // Animate content and image from bottom
          gsap.set([contentRef.current, imageRef.current], {
            y: 30 - progress * 30,
            opacity: progress,
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    
    <div
      ref={containerRef}
      className="flex items-center justify-center h-18 relative"
    >
      {/* Content positioned based on alignment */}
    
      {isLeftAlign ? (
        <>
          {/* Image on left side of circle */}
          <div
            ref={imageRef}
            className="absolute right-full flex items-center md:mr-4 mr-1"
          >
            <div className="md:w-[300px] md:h-[100px] w-35 h-[110px] relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={imageUrl}
                alt={`Journey milestone for ${year}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="300px"
                priority={index < 4}
              />
            </div>
          </div>

          {/* Content on right side of circle */}
          <div
            ref={contentRef}
            className="absolute left-full flex items-center md:ml-4 ml-1"
          > 
            <div className="text-left md:w-[220px] w-[90px]">
              <div className="md:text-[20px] text-[14px]  font-bold text-[#005F20]">{year}</div>
              <div className="md:text-[16px] text-[10px] text-gray-600 mt-1">{description}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Content on left side of circle */}
          <div
            ref={contentRef}
            className="absolute right-full flex items-center md:mr-4 mr-1"
          >
            <div className="text-right md:w-[220px] w-[90px]">
              <div className="md:text-[20px] text-[14px]  font-bold text-[#005F20]">{year}</div>
              <div className="md:text-[16px] text-[10px] text-gray-600 mt-1">{description}</div>
            </div>
          </div>

          {/* Image on right side of circle */}
          <div
            ref={imageRef}
            className="absolute left-full flex items-center md:ml-4 ml-1"
          >
            <div className="md:w-[300px] md:h-[100px] w-35 h-[110px] relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={imageUrl}
                alt={`Journey milestone for ${year}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="300px"
                priority={index < 4}
              />
            </div>
          </div>
        </>
      )}

      {/* Original circle - unchanged */}
      <div
        ref={circleRef}
        className="w-8 h-8 bg-[#005F20] rounded-full shadow-lg relative z-10"
        style={{ scale: "0.5", opacity: "0.4" }}
      ></div>
    </div>
  );
};

const LineElement: React.FC<LineElementProps> = ({ index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !progressLineRef.current) return;

    // animation for line
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    tl.fromTo(
      progressLineRef.current,
      { height: "0%" },
      { height: "100%", duration: 1, ease: "none" }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center h-40">
      <div className="relative h-44">
        {/* Inactive bg line */}
        <div className="w-1 h-full bg-[#E8E8E8] rounded-full"></div>

        {/* Active progress line */}
        <div
          ref={progressLineRef}
          className="absolute top-0 left-0 w-1 bg-[#005F20] rounded-full"
          style={{ height: "0%" }}
        ></div>
      </div>
    </div>
  );
};

const page: React.FC = () => {
  //  array of 23 elements (12 circles + 11 lines alternating)
  const elements = Array.from({ length: 23 }, (_, index) => ({
    type: index % 2 === 0 ? "circle" : "line",
    index: index,
  }));

  return (
    <div>
      <DynamicHero
        mediaType="image"
        mediaSrc={ManufacturingHero}
        title="Our"
        addLineBreak={false}
        subtitle="Journey"
      />

      <div className="flex lg:flex-row flex-col justify-center w-full">
        <div className="flex-1">
          <div className="sticky top-5 flex justify-center items-start">
            <h1 className="lg:text-[28px] text-[15px] font-semibold md:text-start text-center md:px-0 px-5 lg:pl-10 mt-30  text-black max-w-xl">
              From humble beginnings to milestones, our journey is driven by passion and purpose
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <div className="min-h-screen w-full max-w-full  md:py-30 py-20 md:mt-10">
            {/* Alternating pattern container */}
            <div className="w-full max-w-[150px] mx-auto md:px-8 px-10">
              {elements.map((element, index) => (
                <div key={index} className="w-full">
                  {element.type === "circle" ? (
                    <CircleElement
                      index={index}
                      year={
                        JourneyContents[Math.floor(index / 2)]?.year || "2025"
                      }
                      description={
                        JourneyContents[Math.floor(index / 2)]?.content ||
                        "Description"
                      }
                      imageUrl={JourneyContents[Math.floor(index / 2)]?.image}
                      isLeftAlign={Math.floor(index / 2) % 2 === 0}
                    />
                  ) : (
                    <LineElement index={index} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
