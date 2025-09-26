"use client";

import { useCart, CartItem } from "@/context/CartContext";
import QuantityInput from "@/components/QuantityInput";
import Link from "next/link";

export default function CartSummary() {
  const { items, setQuantity, removeItem, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Cart</h2>
        <div className="text-center py-8">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m0 0l1.5-6M7 13l1.5 6"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
          <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart.</p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Your Cart</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.slug} className="px-6 py-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">
                  <Link
                    href={`/products/${item.slug}`}
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <QuantityInput
                  value={item.qty}
                  onChange={(qty) => setQuantity(item.slug, qty)}
                  className="w-24"
                />
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.slug)}
                  className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
          <span>Subtotal:</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Shipping and taxes calculated at checkout
        </p>
      </div>
    </div>
  );
}
