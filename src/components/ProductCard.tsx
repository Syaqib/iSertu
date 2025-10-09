"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation();
  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
      {/* Product Image */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center hidden">
          <div className="text-gray-400 text-sm font-medium">{t('products.productImage')}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
          {t(`products.${product.slug}.name`)}
        </h3>
        <div className="flex-grow flex flex-col justify-end">
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {t(`products.${product.slug}.shortDescription`)}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              RM{product.price.toFixed(2)}
            </span>
            <Link
              href={`/products/${product.slug}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label={`View details for ${product.name}`}
            >
              {t('products.view')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
