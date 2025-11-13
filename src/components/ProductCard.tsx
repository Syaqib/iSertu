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
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
        <div className="w-full h-full flex items-center justify-center hidden" style={{ backgroundColor: '#f0e7d3' }}>
          <div className="text-gray-400 text-sm font-medium">{t('products.productImage')}</div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-900 text-lg mb-1">
          <span className="font-bold">{t(`products.${product.slug}.name`).substring(0, 2)}</span>
          {t(`products.${product.slug}.name`).substring(2)}
        </h3>
        {t(`products.${product.slug}.nameSubtitle`) && (
          <p className="text-gray-700 text-sm mb-2 font-medium">
            {t(`products.${product.slug}.nameSubtitle`)}
          </p>
        )}
        <div className="flex-grow flex flex-col justify-end">
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 text-justify">
            {t(`products.${product.slug}.shortDescription`)}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900">
              RM{product.price.toFixed(2)}
            </span>
            <Link
              href={`/products/${product.slug}`}
              className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: '#694900', '--hover-bg': '#755a1a' } as React.CSSProperties & { '--hover-bg': string }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#755a1a'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#694900'; }}
              onFocus={(e) => { 
                e.currentTarget.style.outlineColor = '#694900';
                e.currentTarget.style.outlineWidth = '2px';
              }}
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
