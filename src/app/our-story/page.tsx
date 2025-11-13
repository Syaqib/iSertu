"use client";

import { useTranslation } from "react-i18next";

export default function OurStoryPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                {t('navbar.ourStory')}
              </h1>
              <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#694900' }}></div>
            </div>

        {/* Our Story Content - Clean Single Card */}
        <div className="bg-white rounded-2xl p-6 md:p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              {t('pages.ourStory.title')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 text-justify">
              {t('pages.ourStory.subtitle')} <em style={{ color: '#694900' }}>{t('pages.ourStory.question')}</em>
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 text-justify">
              {t('pages.ourStory.discovery')} <strong className="text-gray-900">{t('pages.ourStory.technology')}</strong> {t('pages.ourStory.effects')}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 text-justify">
              {t('pages.ourStory.journey')} <strong className="text-gray-900">{t('pages.ourStory.values')}</strong>.
            </p>

            <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: '#f0e7d3' }}>
              <p className="text-lg text-gray-700 italic">
                &quot;{t('pages.ourStory.belief')}&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
