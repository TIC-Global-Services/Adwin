import React from 'react'
import { ArrowRight, FooterBuilding, GreenLogo } from '../Reusable/icons'
import Image from 'next/image'

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about/overview' },
    { name: 'Products', href: '/products' },
    { name: 'Tools', href: '/tools' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Global Business', href: '/global-business' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },


  ]

  const contactInfo = [
    { title: 'Email Us', content: 'info.adwin@gmail.com' },
    { title: 'Location', content: '174 Street Charleston, New York' },
    { title: 'Call Us Now', content: '(+880) 89993 88750' }
  ]

  const linkClasses = "text-[#4E4E4E] hover:text-[#005F20] transition-colors duration-200"
  const headingClasses = "mb-2 text-[#4E4E4E] text-[14px]"
  const contentClasses = "text-[#4E4E4E] md:text-[20px] md:font-semibold"

  return (
    <footer className="md:h-[550px] bg-[#F8F9FA] flex md:flex-row flex-col justify-between items-start md:px-[80px] px-[20px] md:py-20 py-14 relative overflow-x-hidden">
      <Image
        src={GreenLogo}
        alt="Company Logo"
        width={170}
        height={31}
        className="w-[170px] h-[31px] md:mb-0 mb-10"
      />
      
      <div className="flex flex-col justify-center items-start gap-1 md:mb-0 mb-10">
        <h3 className="mb-4 text-[#4E4E4E] text-[18px]">Main Pages</h3>
        <ul className="md:space-y-3 space-y-2">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className={linkClasses}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex flex-col justify-center items-start gap-1 md:space-y-5 space-y-3 md:mb-0 mb-10">
        {contactInfo.map((info, index) => (
          <div key={index}>
            <h3 className={headingClasses}>{info.title}</h3>
            <p className={contentClasses}>{info.content}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col justify-center items-start gap-1 md:mb-0 mb-30">
        <h3 className="md:mb-4 mb-2 text-[#4E4E4E] md:text-[18px] text-[14px]">Email Address</h3>
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
                width={36}
                height={36}
                className="w-[36px] h-[36px]"
              />
            </div>
          </div>
          <p className="mt-3 md:text-center text-start text-[#4E4E4E] text-sm">
            Stay Tuned And Subscribe to Our <br /> Newsletter.
          </p>
        </div>
      </div>
      
      <Image 
        src={FooterBuilding} 
        alt="Building Footer" 
        width={160}
        height={200}
        className="absolute bottom-0 md:w-40 w-30" 
      />
    </footer>
  )
}

export default Footer
