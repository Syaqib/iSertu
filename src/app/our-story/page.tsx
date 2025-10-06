"use client";

import { useTranslation } from "react-i18next";

export default function OurStoryPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('navbar.ourStory')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our journey and the story behind our mission.
          </p>
        </div>

        {/* Content Coming Soon */}
        <div className="bg-gray-50 rounded-lg p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Content Coming Soon
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We&apos;re working hard to bring you our complete story. Check back soon for updates about our journey, mission, and the people behind our products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
