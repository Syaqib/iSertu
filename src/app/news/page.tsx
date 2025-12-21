"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function NewsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-6">
            {t('navbar.news')}
          </h1>
          <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#694900' }}></div>
        </div>

        {/* Main Content - Image Display */}
        <div className="bg-white rounded-2xl p-6 md:p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-gray-900 mb-4">
                {t('pages.news.latestNews')}
              </h2>
            </div>
            
            {/* Image Container */}
            <div className="relative w-full" style={{ aspectRatio: '863/1080' }}>
              <Image
                src="/images/Poster VLS.jpeg"
                alt={t('pages.news.latestNews')}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, 863px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

