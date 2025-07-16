import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface HeroProps {
  mediaType: 'video' | 'image';
  mediaSrc: string | StaticImageData;
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const DynamicHero: React.FC<HeroProps> = ({
  mediaType,
  mediaSrc,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="p-4">
      <div
        id="Home-section"
        className="relative h-[100dvh] lg:h-[97dvh] xl:h-[96.5dvh] w-full overflow-hidden rounded-[16px]"
      >
        <div className=' h-dvh lg:h-[97dvh] w-full bg-black/50 rounded-2xl absolute inset-0 z-50'>

        </div>
        {/* Background Media */}
        {mediaType === 'video' ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src={typeof mediaSrc === 'string' ? mediaSrc : mediaSrc.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={mediaSrc}
            alt={title}
            fill
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            priority
          />
        )}

        {/* Hero Content */}
        <div className="relative h-full flex flex-col justify-end px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-12 xl:py-14 items-start text-white space-y-4 z-50">
          <div className="text-left">
            <h1 className="text-[28px] leading-[34px] sm:text-[36px] sm:leading-[44px] md:text-[48px] md:leading-[58px] lg:text-[58px] lg:leading-[70px] xl:text-[68px] xl:leading-[84px] font-archivo font-normal">
              {title}
              {subtitle && (
                <>
                  <br />
                  <span className="font-bold">{subtitle}</span>
                </>
              )}
            </h1>
          </div>
          {description && (
            <p className="text-[14px] leading-[20px] sm:text-[14px] sm:leading-[22px] md:text-[15px] md:leading-[23px] lg:text-[16px] lg:leading-[24px] xl:text-[16px] xl:leading-[24px] font-open-sans text-left w-full max-w-[300px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <div className="flex flex-row gap-4 mt-4">
              <Link
                href={buttonLink}
                className="bg-[#005F20] text-white w-[130px] h-[48px] sm:w-[140px] sm:h-[50px] md:w-[150px] md:h-[52px] lg:w-[155px] lg:h-[54px] xl:w-[159px] xl:h-[56px] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[16px] flex items-center justify-center font-medium rounded-[8px] hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicHero;