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
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="h-16 bg-blue-500 rounded-lg mb-6 mx-auto max-w-md animate-pulse"></div>
            <div className="h-6 bg-blue-500 rounded-lg mb-8 mx-auto max-w-2xl animate-pulse"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="h-12 bg-white rounded-lg w-32 animate-pulse"></div>
              <div className="h-12 bg-blue-500 rounded-lg w-32 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
            <span className="block text-blue-200">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 shadow-lg"
              aria-label="Explore our products and start your wellness journey"
            >
              {t('hero.shopNow')}
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
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
