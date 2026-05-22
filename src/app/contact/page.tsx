"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">
            {t("contact.title")}
          </h1>
          <div
            className="w-16 h-1 mx-auto"
            style={{ backgroundColor: "#694900" }}
          />
        </div>

        <div className="bg-white rounded-xl p-12 shadow-sm border border-gray-100">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-6">
              {t("contact.manufacturedBy")}
            </h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/images/VLSme-Logo.png"
                alt="VLSme Logo"
                width={1080}
                height={1080}
                className="h-36 w-auto object-contain"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">
                  {t("contact.company")}:
                </span>
                <br />
                {t("contact.companyName")}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">
                  {t("contact.address")}:
                </span>
                <br />
                {t("contact.addressLine1")}
                <br />
                {t("contact.addressLine2")}
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">
                  {t("contact.phone")}:
                </span>{" "}
                {t("contact.phoneNumber")}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                {t("contact.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
