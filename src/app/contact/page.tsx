"use client";

import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Trusted Agency Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('contact.trustedAgency')}
          </h2>
          <div className="flex justify-center">
            <img
              src="/images/SVS.png"
              alt="SVS Logo"
              className="h-24 w-auto object-contain"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contact.companyInfo')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('contact.companyName')}
                  </h3>
                  <p className="text-gray-600">Seven Value Solution</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    B-01-09, Savanna Lifestyle Retail,<br />
                    Jalan BBL 2, Southville City,<br />
                    43800 Dengkil, Selangor,<br />
                    MALAYSIA
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                {t('contact.contactDetails')}
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {t('contact.telephone')}
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600">+6011 3960 4278</p>
                    <p className="text-gray-600">+6017 358 4920</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('contact.additionalInfo')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>
      </div>
    </div>
  );
}
