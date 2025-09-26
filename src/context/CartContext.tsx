"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  price: number;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (slug: string) => void;
  setQuantity: (slug: string, qty: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "isertu-cart";

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    }
  }, [items, isLoaded]);

  const addItem = (item: Omit<CartItem, "qty">) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.slug === item.slug);
      
      if (existingItem) {
        // If item exists, increment quantity
        return prevItems.map(i =>
          i.slug === item.slug
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      } else {
        // If item doesn't exist, add it with qty 1
        return [...prevItems, { ...item, qty: 1 }];
      }
    });
  };

  const removeItem = (slug: string) => {
    setItems(prevItems => prevItems.filter(item => item.slug !== slug));
  };

  const setQuantity = (slug: string, qty: number) => {
    if (qty <= 0) {
      removeItem(slug);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.slug === slug
          ? { ...item, qty: Math.min(qty, 99) } // Max 99 items
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.qty, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.qty), 0);
  };

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
