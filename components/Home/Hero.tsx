import React from 'react';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className='p-[15px]'>
      <div id="Home-section" className="relative h-[100dvh] lg:h-[97dvh]  xl:h-[96.5dvh] w-full overflow-hidden rounded-[16px]">
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
        <div className="relative z-10 h-full flex flex-col justify-end px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-10 xl:px-10 xl:py-10 items-start text-white space-y-2 text-center">
          <h1 className="text-[28px] leading-[34px] sm:text-[36px] sm:leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[70px] xl:text-[68px] xl:leading-[84px] font-archivo font-regular text-left">
            Powering Progress, <br />
            <span className='text-[28px] leading-[34px] sm:text-[36px] sm:leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[70px] xl:text-[68px] xl:leading-[84px] font-archivo font-bold'>
              Driving Change
            </span>
          </h1>
          <p className="text-[14px] leading-[20px] sm:text-[14px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px] xl:text-[16px] xl:leading-[24px] font-open-sans text-left w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
            Built with breakthrough engineering and a legacy of trust. Explore Adwin's cutting-edge solutions across power storage, electric mobility, and energy-efficient lighting.
          </p>
          <div className="flex flex-row gap-4 mt-4">
            <Link
              href="#"
              className="bg-[#005F20] text-white w-[130px] h-[48px] sm:w-[140px] sm:h-[50px] md:w-[150px] md:h-[52px] lg:w-[155px] lg:h-[54px] xl:w-[159px] xl:h-[56px] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] flex items-center justify-center font-medium rounded-[8px] hover:scale-105 transition-all duration-300 ease-in-out"
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