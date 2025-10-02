"use client";

import { useTranslation } from "react-i18next";

export default function ClayWaterEnzyme() {
  const { t } = useTranslation();

  const points = t('clayWaterEnzyme.points', { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t('clayWaterEnzyme.title')}
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('clayWaterEnzyme.description')}
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {points.map((point, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-6 max-w-4xl mx-auto shadow-xl">
            <p className="text-lg text-white font-semibold italic leading-relaxed">
              {t('clayWaterEnzyme.conclusion')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
