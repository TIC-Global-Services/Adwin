import React from 'react'
import { ArrowRight, FooterBuilding, GreenLogo } from '../Reusable/icons'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="h-[394px] bg-[#F8F9FA] flex flex-row justify-between items-start px-[80px] py-20 relative">
      <Image
        src={GreenLogo}
        alt="Company Logo"
        className="w-[170px] h-[31px]"
      />
      <div className="flex flex-col justify-center items-start gap-1">
        <h3 className="mb-4 text-[#4E4E4E] text-[18px]">Main Pages</h3>
        <ul className="space-y-5">
          <li>
            <a
              href="/"
              className="text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 space-y-5">
        <div>
          <h3 className="mb-2 text-[#4E4E4E] text-[14px]">Email Us</h3>
          <p className="text-[#4E4E4E] text-[20px] font-semibold">
            info.adwin@gmail.com
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-[#4E4E4E] text-[14px]">Location</h3>
          <p className="text-[#4E4E4E] text-[20px] font-semibold">
            174 Street Charleston, New York
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-[#4E4E4E] text-[14px]">Call Us Now</h3>
          <p className="text-[#4E4E4E] text-[20px] font-semibold">
            (+880) 89993 88750
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-1'>
        <h3 className="mb-4 text-[#4E4E4E] text-[18px]">Email Address</h3>
        <div className="w-full max-w-sm mx-auto">
  <div className="relative w-full">
    <input
      type="email"
      placeholder="Enter your email..."
      className="w-full px-4 pr-14 py-3 text-sm text-black bg-[#EDF1F6] rounded-full outline-none"
    />
    <div className="absolute right-2 top-1/2 -translate-y-1/2">
      <Image
        src={ArrowRight}
        alt="Arrow"
        className="w-[36px] h-[36px]"
        width={36}
        height={36}
      />
    </div>
  </div>
  <p className="mt-3 text-center text-[#4E4E4E] text-sm">
    Stay Tuned And Subscribe to Our Newsletter.
  </p>
</div>

      </div>
      <Image src={FooterBuilding} alt='Building Footer' className='absolute bottom-0 w-40' /> 
    </footer>
  );
}

export default Footer