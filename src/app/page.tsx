"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
// import BusinessAssociates from "@/components/BusinessAssociates";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Header Section */}
      <div className="relative h-[328px] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg2.png"
            alt="Home Background"
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
            <h1 className="text-4xl font-bold mb-4">
              {t("pages.ourTechnology.heroTitle")}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Combined Mission & Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Text */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed text-justify">
                {t('home.mission.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-justify">
                {t('home.mission.paragraph2')}
              </p>
              <p className="text-lg leading-relaxed text-justify">
                {t('home.mission.paragraph3')}
              </p>
              <p className="text-lg leading-relaxed text-justify">
                {t('home.mission.paragraph4')}
              </p>
            </div>
          </div>

          {/* Featured Products */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('products.featured')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('products.featuredDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      {/* <BusinessAssociates /> */}
    </>
  );
}
