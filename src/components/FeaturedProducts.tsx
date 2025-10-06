"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useTranslation } from "react-i18next";

export default function FeaturedProducts() {
  const { t } = useTranslation();
  // Show all products in featured section
  const featuredProducts = products;

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('products.featured')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('products.featuredDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
