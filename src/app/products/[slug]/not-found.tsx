"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 rounded-md text-white font-medium transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: '#694900' }}
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}

