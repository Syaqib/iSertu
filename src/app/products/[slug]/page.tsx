import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get related products (exclude current product)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/products" className="hover:text-blue-600 transition-colors duration-200">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Gallery */}
        <div>
          <ProductGallery image={product.image} />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <div className="text-3xl font-bold text-blue-600 mb-4">
              ${product.price.toFixed(2)}
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />

          {/* Product Description */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Product Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Key Benefits */}
          {product.keyBenefits && product.keyBenefits.length > 0 && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Benefits
              </h2>
              <ul className="space-y-2 text-gray-600">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* How To Use */}
          {product.howToUse && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How To Use
              </h2>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.howToUse}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}
