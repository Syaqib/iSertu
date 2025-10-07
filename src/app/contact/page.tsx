"use client";

import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content - Single Clean Card */}
        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto">
            {/* Trusted Agency Section */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                {t('contact.trustedAgency')}
              </h2>
              <div className="flex justify-center mb-8">
                <img
                  src="/images/SVS_logo.png"
                  alt="SVS Logo"
                  className="h-24 w-auto object-contain"
                />
              </div>
            </div>

            {/* Contact Information - Simple Layout */}
            <div className="space-y-8">
              {/* Company Info */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {t('contact.companyInfo')}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Company:</span><br />
                      Seven Value Solution
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Address:</span><br />
                      B-01-09, Savanna Lifestyle Retail,<br />
                      Jalan BBL 2, Southville City,<br />
                      43800 Dengkil, Selangor, MALAYSIA
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufactured by Section */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Manufactured by
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Company:</span><br />
                      Vital Life Solution Sdn Bhd
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Address:</span><br />
                      B-01-09, Savanna Lifestyle Retail,<br />
                      Jalan BBL 2, Southville City,<br />
                      43800 Dengkil, Selangor, MALAYSIA
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {t('contact.contactDetails')}
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Phone:</span> +6011 3960 4278
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-900">Phone:</span> +6017 358 4920
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed">
                  {t('contact.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
