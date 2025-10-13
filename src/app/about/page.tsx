"use client";

import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                {t('navbar.aboutVLS')}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

        {/* Main Content - Clean Single Card */}
        <div className="bg-white rounded-2xl p-6 md:p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
              {t('pages.aboutUs.title')}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-8 text-center">
              {t('pages.aboutUs.description')}
            </p>

            <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-8 md:mb-12">
              <p className="text-lg text-gray-700 text-center italic">
                &quot;{t('pages.aboutUs.philosophy')}&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">{t('pages.aboutUs.vision.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('pages.aboutUs.vision.description')}
                </p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">{t('pages.aboutUs.mission.title')}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('pages.aboutUs.mission.description')}
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-8 md:mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 md:p-8 text-white">
                <h3 className="text-xl font-medium mb-4">{t('pages.aboutUs.missionStatement.title')}</h3>
                <p className="text-lg italic">
                  &quot;{t('pages.aboutUs.missionStatement.quote')}&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

