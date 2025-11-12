"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import ClayWaterEnzyme from "@/components/ClayWaterEnzyme";

export default function OurTechnologyPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <div className="relative h-[328px] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg2.png"
            alt="Our Technology Background"
            fill
            className="object-cover object-center brightness-90"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white drop-shadow-md">
            <h1 className="text-5xl font-bold mb-4">
              {t("pages.ourTechnology.heroTitle")}
            </h1>
          </div>
        </div>
      </div>

      {/* Clay Water Enzyme Section */}
      <ClayWaterEnzyme />
    </div>
  );
}
