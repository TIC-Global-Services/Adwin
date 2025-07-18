"use client";
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const dottedLineRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationsRef = useRef<any[]>([]);
  
  // Refs for each milestone point
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const beginningRef = useRef<HTMLDivElement | null>(null);
  const whatsAheadRef = useRef<HTMLDivElement | null>(null);
  const milestoneOneRef = useRef<HTMLDivElement | null>(null);
  const q3Ref = useRef<HTMLDivElement | null>(null);
  const year2026Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Cleanup function
    const cleanup = () => {
      // Kill all animations created by this component
      animationsRef.current.forEach(animation => {
        if (animation && animation.kill) {
          animation.kill();
        }
      });
      animationsRef.current = [];

      // Kill ScrollTrigger instances for this container
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === containerRef.current || 
            trigger.trigger === titleRef.current ||
            trigger.trigger === beginningRef.current ||
            trigger.trigger === whatsAheadRef.current ||
            trigger.trigger === milestoneOneRef.current ||
            trigger.trigger === q3Ref.current ||
            trigger.trigger === year2026Ref.current) {
          trigger.kill();
        }
      });
    };

    const initializeAnimations = () => {
      if (!dottedLineRef.current || !containerRef.current) return;

      // Get all glow elements (both circles and lines)
      const glowCircles = dottedLineRef.current.querySelectorAll('.glow-circle');
      const glowLines = dottedLineRef.current.querySelectorAll('.glow-line');
      
      // Set initial state - all glow elements invisible
      gsap.set([...glowCircles, ...glowLines], { opacity: 0 });

      // Create a timeline for the glow animation
      const glowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
          onRefresh: () => {
            // Ensure elements are properly set on refresh
            gsap.set([...glowCircles, ...glowLines], { opacity: 0 });
          }
        }
      });

      // Create sequence: circle -> line -> circle -> line...
      const totalSteps = glowCircles.length + glowLines.length;
      let stepIndex = 0;
      
      // Animate in sequence: circle -> line -> circle -> line...
      for (let i = 0; i < Math.max(glowCircles.length, glowLines.length); i++) {
        // Animate circle first
        if (glowCircles[i]) {
          const progress = stepIndex / totalSteps;
          glowTimeline.to(glowCircles[i], {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }, progress);
          stepIndex++;
        }
        
        // Then animate corresponding line
        if (glowLines[i]) {
          const progress = stepIndex / totalSteps;
          glowTimeline.to(glowLines[i], {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }, progress);
          stepIndex++;
        }
      }

      animationsRef.current.push(glowTimeline);

      // Initialize text animations for milestone points
      const milestoneElements = [
        { ref: titleRef, delay: 0 },
        { ref: beginningRef, delay: 0.1 },
        { ref: whatsAheadRef, delay: 0.2 },
        { ref: milestoneOneRef, delay: 0.3 },
        { ref: q3Ref, delay: 0.4 },
        { ref: year2026Ref, delay: 0.5 }
      ];

      milestoneElements.forEach(({ ref, delay }) => {
        if (ref.current) {
          // Set initial state - invisible and slightly moved down
          gsap.set(ref.current, {
            opacity: 0,
            y: 50,
            scale: 0.95
          });

          // Create scroll-triggered animation
          const animation = gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              end: "top 65%",
              toggleActions: "play none none reverse",
              once: false,
              invalidateOnRefresh: true
            }
          });

          animationsRef.current.push(animation);
        }
      });
    };

    // Multiple initialization attempts to ensure it works
    const timeouts: NodeJS.Timeout[] = [];
    
    // Immediate attempt
    timeouts.push(setTimeout(initializeAnimations, 0));
    
    // Backup attempts
    timeouts.push(setTimeout(initializeAnimations, 100));
    timeouts.push(setTimeout(initializeAnimations, 300));
    
    // Final attempt with refresh
    timeouts.push(setTimeout(() => {
      initializeAnimations();
      ScrollTrigger.refresh();
    }, 500));

    // Handle window load
    const handleLoad = () => {
      setTimeout(() => {
        initializeAnimations();
        ScrollTrigger.refresh();
      }, 100);
    };

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    // Add event listeners
    window.addEventListener('load', handleLoad);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup function
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cleanup();
    };
  }, []); 

  return (
    <div
      ref={containerRef}
      id="journey-section"
      className="relative bg-transparent w-full py-8 px-4 overflow-hidden"
      style={{ height: '300vh', minHeight: '300vh' }}
    >
      {/* Title */}
      <h1 
        ref={titleRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold text-center mb-16"
      >
        Journey
      </h1>

      {/* SVG Glowing Line */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full h-full">
        <svg
          ref={dottedLineRef}
          width="100%"
          height="100%"
          viewBox="0 0 100 320"
          preserveAspectRatio="xMidYMin meet"
          className="overflow-visible"
          style={{ pointerEvents: "none" }}
        >
          {/* Define gradient and glow effect */}
          <defs>
            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
       
              <stop offset="100%" stopColor="#005F20" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#134408" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="0" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Static inactive background pattern */}
          <g opacity="0.3">
            {Array.from({ length: 25 }).map((_, i) => {
              const y = 15 + i * 12;
              const isCircle = i % 2 === 0;
              
              if (isCircle) {
                return (
                  <circle
                    key={`bg-circle-${i}`}
                    cx="50"
                    cy={y}
                    r="1.8"
                    fill="#2a2a2a"
                    stroke="#2a2a2a"
                    strokeWidth="0.5"
                  />
                );
              } else {
                return (
                  <line
                    key={`bg-line-${i}`}
                    x1="50"
                    y1={y - 8}
                    x2="50"
                    y2={y + 8}
                    stroke="#2a2a2a"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                );
              }
            })}
          </g>
          
          {/* Animated flowing glow elements */}
          <g>
            {Array.from({ length: 25 }).map((_, i) => {
              const y = 15 + i * 12;
              const isCircle = i % 2 === 0;
              
              if (isCircle) {
                return (
                  <circle
                    key={`glow-circle-${i}`}
                    className="glow-circle"
                    cx="50"
                    cy={y}
                    r="2"
                    fill="url(#glowGradient)"
                    filter="url(#strongGlow)"
                    opacity="0"
                  />
                );
              } else {
                return (
                  <line
                    key={`glow-line-${i}`}
                    className="glow-line"
                    x1="50"
                    y1={y - 8}
                    x2="50"
                    y2={y + 8}
                    stroke="url(#glowGradient)"
                    strokeWidth="1"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    opacity="0"
                  />
                );
              }
            })}
          </g>
        </svg>
      </div>

      <div 
        ref={beginningRef}
        className="absolute top-[22%] left-0 w-full flex justify-center items-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:max-w-6xl max-w-4xl w-full">
          <span className="text-[#FFFDFA] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center md:text-right md:flex-1">
            Adwin
          </span>
          
          <span className="text-[#BEBCBA] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-center md:text-left md:flex-1">
            Founded in 2024, Adwin
          </span>
        </div>
      </div>

      
      <div 
        ref={whatsAheadRef}
        className="absolute top-[38%] left-0 w-full flex justify-center items-center px-4"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-8 xl:max-w-6xl max-w-4xl w-full">
          <span className="text-[#FFFDFA] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center md:text-left md:flex-1">
            Adwin
          </span>
         
          <span className="text-[#BEBCBA] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-center md:text-right md:flex-1">
            Adwin
          </span>
        </div>
      </div>

      {/* Milestone One */}
      <div 
        ref={milestoneOneRef}
        className="absolute top-[54%] left-0 w-full flex justify-center items-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:max-w-6xl max-w-4xl w-full">
          <span className="text-[#FFFDFA] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center md:text-right md:flex-1">
           Adwin
          </span>
         
          <span className="text-[#BEBCBA] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-center md:text-left md:flex-1">
           Adwin
          </span>
        </div>
      </div>

    
      <div 
        ref={q3Ref}
        className="absolute top-[70%] left-0 w-full flex justify-center items-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:max-w-6xl max-w-4xl w-full">
          <span className="text-[#FFFDFA] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center md:text-right md:flex-1">
          Adwin
          </span>
          <span className="text-[#BEBCBA] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-center md:text-left md:flex-1">
        Adwin
          </span>
        </div>
      </div>

      {/* 2026 */}
      <div 
        ref={year2026Ref}
        className="absolute top-[86%] left-0 w-full flex justify-center items-center px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:max-w-6xl max-w-4xl w-full">
          <span className="text-[#FFFDFA] xl:text-[24px] lg:text-[20px] md:text-[18px] text-[16px] font-semibold text-center md:text-right md:flex-1">
            2015
          </span>
          <span className="text-[#BEBCBA] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] text-center md:text-left md:flex-1">
            Adwin
          </span>
        </div>
      </div>
    </div>
  );
}

export default Journey;