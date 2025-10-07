"use client";

import Link from "next/link";
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

  const handleBrandClick = (brand: string) => {
    setIsBrandsOpen(false);
    const routes = {
      'VLSuper': '/products/vlsartu-liquid-clay-1000ml', // Sertu and Sanitizer
      'VLSkin': '/products/vlskin-bodywash-500ml' // Soap Bar and Bodywash
    };
    router.push(routes[brand as keyof typeof routes]);
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
              <img
                src="/images/VLSme-Logo.png"
                alt="VLSme Logo"
                className="h-10 w-auto"
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
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src="/images/VLSme-Logo.png"
              alt="VLSme Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile Language Toggle - Visible on top navbar (right side) */}
          <div className="md:hidden flex items-center">
            <div className="relative" ref={mobileLanguageRef}>
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                className="text-gray-700 hover:text-blue-600 px-4 py-3 text-sm font-medium transition-colors duration-200 flex items-center gap-2 min-h-[44px] min-w-[44px] touch-manipulation"
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
                      i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      handleLanguageChange('bm');
                      setIsMobileLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 last:rounded-b-lg min-h-[44px] touch-manipulation ${
                      i18n.language === 'bm' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    BM
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-4">
              {/* Language Toggle */}
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
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
                        i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageChange('bm')}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 last:rounded-b-lg ${
                        i18n.language === 'bm' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      BM
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={handleProductsClick}
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.products')}
              </button>
              
              {/* Brands Dropdown */}
              <div className="relative" ref={brandsRef}>
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                >
                  {t('navbar.brands')}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isBrandsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isBrandsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 dropdown-menu p-6 z-50 dropdown-enter">
                    <div className="grid grid-cols-2 gap-6">
                      {/* VLSuper */}
                      <button
                        onClick={() => handleBrandClick('VLSuper')}
                        className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                      >
                        <div className="h-24 w-32 rounded-lg mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200" style={{ backgroundColor: '#838010' }}>
                          <img
                            src="/images/vlsuper_label.jpg"
                            alt="VLSuper Label"
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">VLSuper</span>
                        <span className="text-xs text-gray-500 text-center">Sertu & Sanitizer</span>
                      </button>

                      {/* VLSkin */}
                      <button
                        onClick={() => handleBrandClick('VLSkin')}
                        className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                      >
                        <div className="h-24 w-32 rounded-lg mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200" style={{ backgroundColor: '#F4DFD8' }}>
                          <img
                            src="/images/vlskin_label.jpg"
                            alt="VLSkin Label"
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">VLSkin</span>
                        <span className="text-xs text-gray-500 text-center">Soap Bar & Bodywash</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.about')}
              </Link>
              <Link
                href="/our-story"
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.ourStory')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
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
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2"
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
            <div className="md:hidden w-full animate-in slide-in-from-top-2 duration-300">
              <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 rounded-b-lg shadow-lg">
              
              <button
                onClick={() => {
                  handleProductsClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('navbar.products')}
              </button>
              
                {/* Mobile Brands Section */}
                <div className="px-3 py-2">
                  <div className="text-gray-700 text-base font-medium mb-4">{t('navbar.brands')}</div>
                  <div className="grid grid-cols-2 gap-4">
                    {/* VLSuper */}
                    <button
                      onClick={() => {
                        handleBrandClick('VLSuper');
                        setIsMenuOpen(false);
                      }}
                      className="flex flex-col items-center p-3 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                    >
                      <div className="h-16 w-24 rounded-lg mb-2 flex items-center justify-center shadow-sm" style={{ backgroundColor: '#838010' }}>
                        <img
                          src="/images/vlsuper_label.png"
                          alt="VLSuper Label"
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">VLSuper</span>
                      <span className="text-xs text-gray-500 text-center">Sertu & Sanitizer</span>
                    </button>

                    {/* VLSkin */}
                    <button
                      onClick={() => {
                        handleBrandClick('VLSkin');
                        setIsMenuOpen(false);
                      }}
                      className="flex flex-col items-center p-3 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                    >
                      <div className="h-16 w-24 rounded-lg mb-2 flex items-center justify-center shadow-sm" style={{ backgroundColor: '#F4DFD8' }}>
                        <img
                          src="/images/vlskin_label.jpg"
                          alt="VLSkin Label"
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">VLSkin</span>
                      <span className="text-xs text-gray-500 text-center">Soap Bar & Bodywash</span>
                    </button>
                  </div>
                </div>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.about')}
              </Link>
              <Link
                href="/our-story"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navbar.ourStory')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
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
