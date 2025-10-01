"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const router = useRouter();
  const brandsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBrandClick = (brand: string) => {
    setIsBrandsOpen(false);
    const routes = {
      'VLSkin': '/products/vlskin-bodywash-500ml',
      'VLScent': '/products/vlscent-natural-sanitizer-200ml',
      'VLSartu': '/products/vlsartu-liquid-clay-1000ml'
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
    };

    if (isBrandsOpen || isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBrandsOpen, isLanguageOpen]);

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

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-8">
              {/* Language Toggle */}
              <div className="relative" ref={languageRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
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
                  <div className="absolute top-full left-0 mt-2 w-20 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
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
                onClick={scrollToProducts}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.products')}
              </button>
              
              {/* Brands Dropdown */}
              <div className="relative" ref={brandsRef}>
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
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
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg p-6 z-50 border border-gray-200">
                    <div className="grid grid-cols-3 gap-6">
                      {/* VLSkin */}
                      <button
                        onClick={() => handleBrandClick('VLSkin')}
                        className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                      >
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-24 w-28 rounded-lg mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <span className="text-blue-600 text-sm font-semibold">VLSkin</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">VLSkin</span>
                      </button>
                      
                      {/* VLScent */}
                      <button
                        onClick={() => handleBrandClick('VLScent')}
                        className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                      >
                        <div className="bg-gradient-to-br from-green-100 to-green-200 h-24 w-28 rounded-lg mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <span className="text-green-600 text-sm font-semibold">VLScent</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">VLScent</span>
                      </button>
                      
                      {/* VLSartu */}
                      <button
                        onClick={() => handleBrandClick('VLSartu')}
                        className="flex flex-col items-center p-4 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                      >
                        <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-24 w-28 rounded-lg mb-3 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <span className="text-purple-600 text-sm font-semibold">VLSartu</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700 text-center">VLSartu</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {t('navbar.about')}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {/* Mobile Logo */}
              <div className="flex justify-center mb-4">
                <Link 
                  href="/" 
                  className="hover:opacity-80 transition-opacity duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/images/VLSme-Logo.png"
                    alt="VLSme Logo"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
              
              <button
                onClick={() => {
                  scrollToProducts();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                {t('navbar.products')}
              </button>
              
              {/* Mobile Language Toggle */}
              <div className="px-3 py-2">
                <div className="text-gray-700 text-base font-medium mb-2">Language</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      handleLanguageChange('en');
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      i18n.language === 'en' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => {
                      handleLanguageChange('bm');
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                      i18n.language === 'bm' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    BM
                  </button>
                </div>
              </div>
              
              {/* Mobile Brands Section */}
              <div className="px-3 py-2">
                <div className="text-gray-700 text-base font-medium mb-4">{t('navbar.brands')}</div>
                <div className="grid grid-cols-3 gap-4">
                  {/* VLSkin */}
                  <button
                    onClick={() => {
                      handleBrandClick('VLSkin');
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center p-3 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                  >
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-16 w-20 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                      <span className="text-blue-600 text-xs font-semibold">VLSkin</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">VLSkin</span>
                  </button>
                  
                  {/* VLScent */}
                  <button
                    onClick={() => {
                      handleBrandClick('VLScent');
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center p-3 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                  >
                    <div className="bg-gradient-to-br from-green-100 to-green-200 h-16 w-20 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                      <span className="text-green-600 text-xs font-semibold">VLScent</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">VLScent</span>
                  </button>
                  
                  {/* VLSartu */}
                  <button
                    onClick={() => {
                      handleBrandClick('VLSartu');
                      setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-center p-3 hover:scale-105 transition-transform duration-200 hover:bg-gray-50 rounded-lg group"
                  >
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-16 w-20 rounded-lg mb-2 flex items-center justify-center shadow-sm">
                      <span className="text-purple-600 text-xs font-semibold">VLSartu</span>
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">VLSartu</span>
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
