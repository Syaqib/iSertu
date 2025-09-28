"use client";

import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">{t('about.vision')}</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed text-center italic">
              &ldquo;{t('about.visionText')}&rdquo;
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">{t('about.mission')}</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ul className="space-y-6">
              {(t('about.missionItems', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('about.commitment')}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.commitmentText')}
          </p>
        </div>
      </div>
    </div>
  );
}

