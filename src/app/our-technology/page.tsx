"use client";

import { useTranslation } from "react-i18next";

export default function OurTechnologyPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-light text-gray-900 mb-6">
            {t('navbar.ourTechnology')}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                {t('clayWaterEnzyme.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('clayWaterEnzyme.description')}
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {t('clayWaterEnzyme.benefits', { returnObjects: true }).map((benefit: { title: string; description: string }, index: number) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12 text-white text-center">
              <p className="text-xl font-medium leading-relaxed">
                {t('clayWaterEnzyme.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
