"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const { getTotalItems } = useCart();
  const cartItemCount = getTotalItems();
  const router = useRouter();
  const brandsRef = useRef<HTMLDivElement>(null);

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
      'VLSkin': '/products/vlskin-kaolin-clay-bodywash',
      'VLScent': '/products/vlscent-natural-sanitizer',
      'VLSartu': '/products/vlsartu-premix-sertu-solution'
    };
    router.push(routes[brand as keyof typeof routes]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brandsRef.current && !brandsRef.current.contains(event.target as Node)) {
        setIsBrandsOpen(false);
      }
    };

    if (isBrandsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBrandsOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex-shrink-0 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            iSertu
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={scrollToProducts}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Products
              </button>
              
              {/* Brands Dropdown */}
              <div className="relative" ref={brandsRef}>
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Brands
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
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center">
            <Link
              href="/checkout"
              className="relative bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`Shopping cart with ${cartItemCount} items`}
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
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m0 0l1.5-6M7 13l1.5 6" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>

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
              <button
                onClick={() => {
                  scrollToProducts();
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Products
              </button>
              
              {/* Mobile Brands Section */}
              <div className="px-3 py-2">
                <div className="text-gray-700 text-base font-medium mb-4">Brands</div>
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
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
