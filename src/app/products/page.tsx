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
              {t('pages.products.subtitle')}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {t('pages.products.description')}
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
