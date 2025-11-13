"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header Section */}
      <div className="relative h-[328px] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/product_page.png"
            alt="Products Background"
            fill
            className="object-cover object-center brightness-90"
            priority
          />
          {/* Subtle gradient overlay instead of dark black */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white drop-shadow-md">
            <h1 className="text-4xl font-bold">
              {t("pages.products.title")}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction Paragraph */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            {t('pages.products.description')}
          </p>
        </div>

        {/* Products Grid - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
