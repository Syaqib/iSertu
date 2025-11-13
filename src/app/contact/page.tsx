"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

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
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: '#694900' }}></div>
        </div>

        {/* Main Content - Single Clean Card */}
        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto">
            {/* VLS Details Section */}
            <div className="text-center mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                {t('contact.manufacturedBy')}
              </h2>
              <div className="flex justify-center mb-4">
                <Image
                  src="/images/VLSme-Logo.png"
                  alt="VLSme Logo"
                  width={1080}
                  height={1080}
                  className="h-36 w-auto object-contain"
                />
              </div>
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
                    184. Jalan Nilai 7/1, Kawasan Perindustrian Nilai 7,<br />
                    71800 Nilai, Negeri Sembilan Darul Khusus
                  </p>
                </div>
              </div>
            </div>

            {/* Trusted Agency Section */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">
                {t('contact.trustedAgency')}
              </h2>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/SVS_logo.png"
                  alt="SVS Logo"
                  width={835}
                  height={857}
                  className="h-32 w-auto object-contain"
                />
              </div>
            </div>

            {/* Contact Information - Simple Layout */}
            <div className="space-y-8">
              {/* SVS Contact Details */}
              <div className="text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {t('contact.contactDetails')}
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
                      184. Jalan Nilai 7/1, Kawasan Perindustrian Nilai 7,<br />
                      71800 Nilai, Negeri Sembilan Darul Khusus
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium text-gray-900">Phone:</span> +6017 358 4920
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-600 leading-relaxed text-justify">
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
