"use client";

import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                {t('navbar.about')}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

        {/* Main Content - Clean Single Card */}
        <div className="bg-white rounded-2xl p-16 shadow-sm border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">
              About Our Mission
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center">
              We are a <strong className="text-gray-900">Malaysian-based team</strong> dedicated to delivering innovative hygiene and wellness solutions powered by <strong className="text-gray-900">clay water enzyme technology</strong>. Rooted in science and nature, we develop multipurpose products that are gentle, safe for all, and aligned with modern sustainable lifestyles. Our flagship brands include <strong className="text-gray-900">VLSkin</strong> and <strong className="text-gray-900">VLSuper</strong> — serving homes, communities, and industries.
            </p>

            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <p className="text-lg text-gray-700 text-center italic">
                &quot;We believe purity shouldn&apos;t come at the cost of health or the environment. That&apos;s why we go back to the earth — and forward with technology.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a global pioneer in clay-based and enzyme-driven innovations for hygiene, wellness, and sustainable living.
                </p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To harness the natural power of clay and enzyme technology, creating safe, effective, and environmentally friendly products that promote Halal-conscious and sustainable lifestyles for the wellbeing of people, pets, and the planet.
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-medium mb-4">Our Mission Statement</h3>
                <p className="text-lg italic">
                  &quot;To provide natural purity in every drop, rooted in tradition and enhanced by science.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

