"use client";

import { useTranslation } from "react-i18next";

export default function OurStoryPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                {t('navbar.ourStory')}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

        {/* Our Story Content - Clean Single Card */}
        <div className="bg-white rounded-2xl p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              Our Journey
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From humble beginnings, our journey began with a simple question: <em className="text-blue-600">Can nature cleanse as powerfully as it heals?</em>
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Driven by this curiosity, we discovered the remarkable properties of <strong className="text-gray-900">clay water enzyme technology</strong> — a natural formulation with powerful cleansing, antibacterial, and purifying effects. What started as an idea became a mission: to create safe, effective, and environmentally respectful products for everyday life.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              From the first batch of clay water to a full range of multipurpose cleaners, body care, and surface solutions — our story is one of <strong className="text-gray-900">science, sustainability, and sincerity</strong>.
            </p>

            <div className="bg-blue-50 rounded-xl p-8">
              <p className="text-lg text-gray-700 italic">
                &quot;We believe in <strong>purity without compromise</strong> — in going back to the earth, and forward with purpose.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
