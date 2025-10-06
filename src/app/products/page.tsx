"use client";

import { useTranslation } from "react-i18next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductsPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-4xl font-light text-gray-900 mb-6">
                {t('navbar.products')}
              </h1>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

        {/* Introduction - Single Clean Paragraph */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-light text-gray-900 mb-8 text-center">
              Where Nature Meets Innovation — And Wellness Begins
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              In a world filled with synthetic solutions, we choose to return to the earth — to rediscover the cleansing power of natural clay, enhanced by science. At the heart of every product is <strong className="text-gray-900">Clay Water Enzyme</strong> technology, extracted through a refined process that unlocks natural antibacterial, detoxifying, and purifying properties. This isn&apos;t just about cleanliness — it&apos;s about restoring balance to skin, surfaces, and the way we live. Free from harsh chemicals, every formulation is designed to be safe for daily use, effective in cleansing, and friendly to both humans and the environment. From body washes to multipurpose cleaners, our range is crafted with purpose: <strong className="text-blue-600">to care, to cleanse, to protect</strong> — delivering natural purity, powered by nature, perfected by innovation.
            </p>
          </div>
        </div>

        {/* Products Grid - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
