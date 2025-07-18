"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; 
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
    link: '',
    dropdown: [
      { title: 'Overview & Group Companies', link: '/about/overview' },
      { title: 'Our Journey', link: '/about/journey' },
      { title: 'In House Manufacturing and R&D Page', link: '/about/manufacturing' },
      { title: 'Research and Developement', link: '/about/research' }
    ]
  },
  { title: 'Products', link: '/products' },
  {
    title: 'Tools',
    link: '/tools',
    dropdown: [
      { title: 'Solar Calculator', link: '/tools/solar-calculator' },
      { title: 'Load Calculator', link: '/tools/load-calculator' },
    ]
  },
  { title: 'Partner with', link: '/partner-with-us' },
  { title: 'Services', link: '/service' },
  { title: 'careers', link: '/careers' },
  { title: 'Global Business', link: '/global-business' },
  { title: 'FAQ', link: '/faq' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get current pathname
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<number | null>(null);

  // Function to check if a nav item is active
  const isNavItemActive = (item: NavItem): boolean => {
    // For direct links
    if (item.link && pathname === item.link) {
      return true;
    }
    
    // For dropdown items, check if current path matches any dropdown link
    if (item.dropdown) {
      return item.dropdown.some(dropdownItem => pathname === dropdownItem.link);
    }
    
    return false;
  };

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

  const handleMobileDropdownToggle = (index: number): void => {
    setMobileActiveDropdown(mobileActiveDropdown === index ? null : index);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveDropdown(null);
  };

  return (
    <motion.nav 
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute top-8 left-1/2 transform -translate-x-1/2 w-full px-10 z-[100] rounded-2xl font-open-sans"
    >
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={Logo} alt="logo" width={1000} height={1000} className='w-[139px] h-[26px]' />
        </Link>
        
        <div className="hidden xl:flex gap-8 items-center">
          {NavbarContents.map((item: NavItem, index: number) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isActive = isNavItemActive(item);
            
            return (
              <div 
                key={item.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {hasDropdown ? (
                  // For items with dropdown, render as button
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className={`flex items-center gap-1 text-[16px] font-regular text-white transition-all duration-300 hover:bg-[#005F20] hover:px-4 hover:py-2 hover:rounded-full ${
                      isActive || activeDropdown === index ? 'bg-[#005F20] px-4 py-2 rounded-full text-white' : ''
                    }`}
                  >
                    {item.title}
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  // For items without dropdown, use Link
                  <Link 
                    href={item.link} 
                    className={`flex items-center gap-1 text-[16px] text-white font-regular transition-all duration-300 hover:bg-[#005F20] hover:px-4 hover:py-2 hover:rounded-full ${
                      isActive ? 'bg-[#005F20] text-white px-4 py-2 rounded-full' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
                
                <AnimatePresence>
                  {hasDropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[16px]  py-4 px-4 z-50 w-80 inline-block whitespace-nowrap text-center shadow-lg"
                    >
                      {item.dropdown?.map((dropdownItem: DropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.link}
                          className={`block px-4 py-2 text-sm font-medium rounded-[8px] transition-colors duration-200 mb-1 ${
                            pathname === dropdownItem.link 
                              ? 'bg-[#ECFCE8] text-[#005F20]' 
                              : 'text-gray-700 hover:bg-[#ECFCE8] hover:text-[#005F20]'
                          }`}
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

        <div className='hidden xl:flex'>
          <Link
            href="/contact"
            className={`flex items-center justify-center w-[121px] h-[44px] rounded-[8px] text-sm font-medium shadow-md transition duration-200 hover:scale-105 transition-all duration-300 ease-in-out ${
              pathname === '/contact' 
                ? 'bg-[#ECFCE8] text-[#005F20]' 
                : 'text-[#005F20] bg-white hover:bg-[#ECFCE8] hover:text-[#003C14]'
            }`}
          >
            Contact us
          </Link>
        </div>
      
        <button
          onClick={toggleMobileMenu}
          className="xl:hidden mobile-menu-button p-2 rounded-md text-white hover:text-[#005F20] hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white rounded-[16px]  mt-2 py-4 px-4 shadow-md"
          >
            <div className="space-y-2">
              {NavbarContents.map((item: NavItem, index: number) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isActive = isNavItemActive(item);
                
                return (
                  <div key={item.title} className="relative">
                    <div className="flex items-center justify-between">
                      {hasDropdown ? (
                        // For items with dropdown
                        <button
                          onClick={() => handleMobileDropdownToggle(index)}
                          className={`flex items-center justify-between py-2 px-3 text-[16px] font-medium transition-colors duration-200 flex-1 text-left w-full rounded-[6px] ${
                            isActive 
                              ? 'text-[#005F20] ' 
                              : 'text-gray-700 hover:text-[#005F20] hover:bg-[#ECFCE8]'
                          }`}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            size={16}
                            className={`transform transition-transform duration-200 ${
                              mobileActiveDropdown === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      ) : (
                        // For items without dropdown
                        <Link
                          href={item.link}
                          className={`flex items-center gap-1 py-2 px-3 text-[16px] font-medium transition-colors duration-200 w-full rounded-[6px] ${
                            isActive 
                              ? 'text-[#005F20] bg-[#ECFCE8]' 
                              : 'text-gray-700 hover:text-[#005F20] hover:bg-[#ECFCE8]'
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {hasDropdown && mobileActiveDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 space-y-1 rounded-[8px] p-2"
                        >
                          {item.dropdown?.map((dropdownItem: DropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.link}
                              className={`block px-3 py-2 text-sm font-medium rounded-[6px] transition-colors duration-200 ${
                                pathname === dropdownItem.link 
                                  ? 'bg-[#ECFCE8] text-[#005F20]' 
                                  : 'text-[#606060] hover:bg-[#ECFCE8] hover:text-[#005F20]'
                              }`}
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
              
              {/* Mobile Contact Button */}
              <div className="relative">
                <div className="flex items-center justify-between">
                  <Link
                    href="/contact"
                    className={`flex items-center gap-1 py-2 px-3 text-[16px] font-medium transition-colors duration-200 w-full rounded-[6px] ${
                      pathname === '/contact' 
                        ? 'text-[#005F20] bg-[#ECFCE8]' 
                        : 'text-gray-700 hover:text-[#005F20] hover:bg-[#ECFCE8]'
                    }`}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;