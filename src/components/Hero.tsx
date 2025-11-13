"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

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

  // Show loading state until i18n is ready
  if (!isReady) {
    return (
      <section style={{ backgroundColor: '#f0e7d3' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="h-16 rounded-lg mb-6 mx-auto max-w-md animate-pulse" style={{ backgroundColor: '#694900' }}></div>
            <div className="h-6 rounded-lg mb-8 mx-auto max-w-2xl animate-pulse" style={{ backgroundColor: '#694900' }}></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="h-12 bg-white rounded-lg w-32 animate-pulse"></div>
              <div className="h-12 rounded-lg w-32 animate-pulse" style={{ backgroundColor: '#694900' }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section style={{ backgroundColor: '#f0e7d3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#694900' }}>
            {t('hero.title')}
            {t('hero.subtitle') && <span className="block">{t('hero.subtitle')}</span>}
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-justify" style={{ color: '#694900' }}>
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg"
              style={{ color: '#694900' }}
              aria-label="Explore our products and start your wellness journey"
            >
              {t('hero.shopNow')}
            </Link>
            <Link
              href="/about"
              className="border-2 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ 
                borderColor: '#694900',
                color: '#694900',
                '--hover-bg': '#694900',
                '--hover-text': '#f0e7d3'
              } as React.CSSProperties & { '--hover-bg': string; '--hover-text': string }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#694900';
                e.currentTarget.style.color = '#f0e7d3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#694900';
              }}
              aria-label="Learn more about our company and mission"
            >
              {t('hero.learnMore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
