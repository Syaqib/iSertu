"use client";

import { useRouter } from "next/navigation";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addItem({
      id: parseInt(product.id),
      name: product.name,
      slug: product.slug,
      price: product.price,
    });
    
    // Navigate to checkout
    router.push("/checkout");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Add ${product.name} to cart`}
    >
      Add to Cart
    </button>
  );
}
