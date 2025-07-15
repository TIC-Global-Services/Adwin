"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from '../Reusable/icons';

interface DropdownItem {
  title: string;
  link: string;
}

interface NavItem {
  title: string;
  link: string;
  dropdown?: DropdownItem[];
}

const NavbarContents: NavItem[] = [
  { title: 'Home', link: '/' },
  {
    title: 'About us',
    link: '/about',
    dropdown: [
      { title: 'Overview & Group Companies', link: '/about/overview' },
      { title: 'Our Journey', link: '/about/journey' },
      { title: 'In House Manufacturing and R&D Page', link: '/about/Manufacturing' },
      { title: 'Research and Developement', link: '/about/research' }
    ]
  },
  { title: 'Products', link: '/products' },
  {
    title: 'Tools',
    link: '/tools',
    // dropdown: [
    //   { title: 'Solar Calculator', link: '/tools/solar-calculator' },
    //   { title: 'Load Calculator', link: '/tools/load-calculator' },
  
    // ]
  },
  { title: 'Partner with', link: '/partner' },
  { title: 'Services', link: '/service' },
  { title: 'careers', link: '/careers' },
  { title: 'Global Business', link: '/global' },
  { title: 'FAQ', link: '/faq' },
  // { title: 'Contact Us', link: '/contact' },
];

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMouseEnter = (index: number): void => {
    if (NavbarContents[index].dropdown) {
      setActiveDropdown(index);
    }
  };

  const handleMouseLeave = (): void => {
    setActiveDropdown(null);
  };

  return (

    <motion.nav 
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full px-10 z-[100] rounded-2xl  font-open-sans"
    >
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={Logo} alt="logo" width={1000} height={1000} className='w-[139px] h-[26px]' />
        </Link>
        
        <div className="hidden lg:flex gap-8 items-center">
          {NavbarContents.map((item: NavItem, index: number) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            
            return (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.link} 
                  className="flex items-center gap-1  text-[16px] font-regular transition-all duration-300 hover:bg-[#005F20] hover:px-4 hover:py-2 hover:rounded-full"
                >
                  {item.title}
                  {hasDropdown && <ChevronDown size={16} />}
                </Link>
                
                <AnimatePresence>
                  {hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2   mt-2  bg-white rounded-[16px] border py-4 px-4 z-50 w-80  inline-block whitespace-nowrap text-center"
                    >
                      {item.dropdown?.map((dropdownItem: DropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#ECFCE8] hover:text-[#005F20] rounded-[8px] transition-colors duration-200 mb-1"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>


        <Link
  href="/contact"
  className="flex items-center justify-center w-[121px] h-[44px] rounded-[8px] text-[#005F20] bg-white text-sm font-medium shadow-md hover:bg-[#ECFCE8] hover:text-[#003C14] transition duration-200  hover:scale-105 transition-all duration-300 ease-in-out"
>
  Contact us
</Link>

        
        
      </div>
      
      {/* Mobile Menu */}
      {/* <AnimatePresence>
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="p-4 space-y-2">
              {NavbarContents.map((item: NavItem, index: number) => (
                <div key={item.title}>
                  <Link 
                    href={item.link} 
                    className="block py-2 text-lg font-semibold hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem: DropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.link}
                          className="block py-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.nav>
  );
};

export default Navbar;