"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const brandsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  // Ensure i18n is ready and hydrated before rendering
  useEffect(() => {
    if (i18n.isInitialized) {
      // Add a small delay to ensure hydration is complete
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [i18n.isInitialized]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProductsClick = () => {
    router.push('/products');
  };

  const handleBrandClick = (productSlug: string) => {
    setIsBrandsOpen(false);
    router.push(`/products/${productSlug}`);
    };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsLanguageOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brandsRef.current && !brandsRef.current.contains(event.target as Node)) {
        setIsBrandsOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (mobileLanguageRef.current && !mobileLanguageRef.current.contains(event.target as Node)) {
        setIsMobileLanguageOpen(false);
      }
    };

    if (isBrandsOpen || isLanguageOpen || isMobileLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBrandsOpen, isLanguageOpen, isMobileLanguageOpen]);

  // Show loading state until i18n is ready
  if (!isReady) {
    return (
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/images/VLSme-Logo.png"
                alt="VLSme Logo"
                width={1080}
                height={1080}
                className="h-24 w-auto"
              />
            </Link>

            {/* Mobile Language Toggle Loading */}
            <div className="md:hidden flex items-center">
              <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Desktop Navigation Loading */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-baseline space-x-8">
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>

            <div className="hidden md:block w-24"></div>
            <div className="md:hidden">
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 relative">
          {/* Logo and Language Toggle */}
          <div className="flex items-center space-x-2 flex-shrink-0 min-w-[180px]">
          <Link 
            href="/" 
              className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          >
              <Image
                src="/images/VLSme-Logo.png"
                alt="VLSme Logo"
                width={1080}
                height={1080}
                className="h-20 md:h-24 w-auto"
              />
          </Link>

            {/* Desktop Language Toggle - Left side */}
            <div className="hidden md:flex items-center">
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="text-gray-700 hover:text-[#694900] px-1 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
                >
                  {i18n.language === 'en' ? 'EN' : 'BM'}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLanguageOpen && (
                  <div className="absolute top-full left-0 mt-1 w-20 dropdown-menu z-50 dropdown-enter">
                    <button
                      onClick={() => handleLanguageChange('en')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg ${
                        i18n.language === 'en' ? 'text-[#694900]' : 'text-gray-700'
                      }`}
                      style={i18n.language === 'en' ? { backgroundColor: '#f0e7d3' } : {}}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('bm')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 last:rounded-b-lg ${
                        i18n.language === 'bm' ? 'text-[#694900]' : 'text-gray-700'
                      }`}
                      style={i18n.language === 'bm' ? { backgroundColor: '#f0e7d3' } : {}}
                    >
                      BM
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Language Toggle - Visible on top navbar (right side) */}
          <div className="md:hidden flex items-center">
            <div className="relative" ref={mobileLanguageRef}>
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                className="text-gray-700 hover:text-[#694900] px-4 py-3 text-sm font-medium transition-colors duration-200 flex items-center gap-2 min-h-[44px] min-w-[44px] touch-manipulation"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {i18n.language === 'en' ? 'EN' : 'BM'}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileLanguageOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
                {isMobileLanguageOpen && (
                  <div className="absolute top-full right-0 mt-1 w-24 dropdown-menu z-50 dropdown-enter">
                  <button
                    onClick={() => {
                      handleLanguageChange('en');
                      setIsMobileLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 first:rounded-t-lg min-h-[44px] touch-manipulation ${
                      i18n.language === 'en' ? 'text-[#694900]' : 'text-gray-700'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent', ...(i18n.language === 'en' ? { backgroundColor: '#f0e7d3' } : {}) }}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      handleLanguageChange('bm');
                      setIsMobileLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 last:rounded-b-lg min-h-[44px] touch-manipulation ${
                      i18n.language === 'bm' ? 'text-[#694900]' : 'text-gray-700'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent', ...(i18n.language === 'bm' ? { backgroundColor: '#f0e7d3' } : {}) }}
                  >
                    BM
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation - Centered with different spacing for EN/BM */}
          <div className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 ${i18n.language === 'bm' ? 'max-w-[calc(100%-230px)]' : 'max-w-[calc(100%-200px)]'}`}>
            <div className={`flex items-center whitespace-nowrap ${i18n.language === 'bm' ? 'space-x-2' : 'space-x-3'}`}>
              <button
                onClick={handleProductsClick}
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.products')}
              </button>
              
              {/* Brands Dropdown */}
              <div className="relative" ref={brandsRef}>
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
                >
                  {t('navbar.brands')}
                  <svg
                    className={`w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isBrandsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBrandsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 dropdown-menu p-2 z-50 dropdown-enter">
                    <div className="flex flex-col gap-1">
                      {/* VLSuper */}
                      <button
                        onClick={() => handleBrandClick('vlsuper-sertu-liquid-clay-500ml')}
                        className="text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        VLSuper
                      </button>
                      
                      {/* VLSkin */}
                      <button
                        onClick={() => handleBrandClick('vlskin-bodywash-500ml')}
                        className="text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        VLSkin
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/our-technology"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.ourTechnology')}
              </Link>
              <Link
                href="/our-clay"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.ourClay')}
              </Link>
              <Link
                href="/events-gallery"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.eventsGallery')}
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.news')}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.aboutVLS')}
              </Link>
              <Link
                href="/our-story"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.ourStory')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#694900] px-1 py-2 text-xs md:text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>


          {/* Right side spacer for balance */}
          <div className="hidden md:block w-24"></div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#694900] focus:outline-none focus:ring-2 focus:ring-[#694900] focus:ring-offset-2 p-2"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <div className="md:hidden fixed left-0 right-0 top-14 animate-in slide-in-from-top-2 duration-300 z-40">
              <div className="w-full pt-0.5 pb-1 space-y-0.5 bg-white shadow-lg">
              
              <button
                onClick={() => {
                  handleProductsClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium w-full text-left"
              >
                {t('navbar.products')}
              </button>
              
              {/* Mobile Brands Section */}
              <div className="px-3 py-2">
                  <div className="text-gray-700 text-base font-medium mb-2 px-1">{t('navbar.brands')}</div>
                  <div className="flex flex-col gap-1">
                    {/* VLSuper */}
                  <button
                    onClick={() => {
                        handleBrandClick('vlsuper-sertu-liquid-clay-500ml');
                      setIsMenuOpen(false);
                    }}
                      className="text-left px-4 py-2 text-base hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full"
                  >
                      VLSuper
                  </button>
                  
                    {/* VLSkin */}
                  <button
                    onClick={() => {
                        handleBrandClick('vlskin-bodywash-500ml');
                      setIsMenuOpen(false);
                    }}
                      className="text-left px-4 py-2 text-base hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full"
                    >
                      VLSkin
                  </button>
                </div>
              </div>
              
              <Link
                href="/our-technology"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.ourTechnology')}
              </Link>
              <Link
                href="/our-clay"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.ourClay')}
              </Link>
              <Link
                href="/events-gallery"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.eventsGallery')}
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.news')}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.aboutVLS')}
              </Link>
              <Link
                href="/our-story"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.ourStory')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#694900] block px-4 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
