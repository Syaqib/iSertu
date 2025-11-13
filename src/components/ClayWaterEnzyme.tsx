"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function ClayWaterEnzyme() {
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-10 bg-gray-200 rounded-lg mb-6 mx-auto max-w-md animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-8 mx-auto max-w-3xl animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const benefits = t('clayWaterEnzyme.benefits', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('clayWaterEnzyme.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-justify">
            {t('clayWaterEnzyme.description')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
              style={{ backgroundColor: '#f0e7d3', borderColor: '#755a1a' }}
            >
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#694900' }}>
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <div className="rounded-lg p-8 text-white" style={{ backgroundColor: '#694900' }}>
            <p className="text-lg font-medium leading-relaxed text-justify">
              {t('clayWaterEnzyme.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
