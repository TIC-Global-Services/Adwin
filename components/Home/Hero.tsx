import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='p-[15px] '>
    
    <div id="Home-section" className="relative h-[96.5dvh]  w-full overflow-hidden rounded-[16px]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-10 py-10 items-start text-white px-4 space-y-2 text-center">
        <h1 className="text-[68px] leading-[84px] font-archivo font-regular text-left">
        Powering Progress, <br /><span className='text-[68px] leading-[84px] font-archivo font-bold '>Driving Change
            </span> 
        </h1>
        <p className="text-[16px] leading-[24px] font-open-sans text-left w-full max-w-[560px]">
        Built with breakthrough engineering and a legacy of trust. Explore Adwin’s cutting-edge solutions across power storage, electric mobility, and energy-efficient lighting.
        </p>
        <div className="flex flex-row gap-4 mt-4">
          <Link
            href="#"
            className="bg-[#005F20] text-white  w-[159px] h-[56px] text-[16px] flex items-center justify-center font-medium rounded-[8px] hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Know more
          </Link>

        </div>
      </div>
    </div>
    </div>

  );
};

export default Hero;
