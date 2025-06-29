'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { db } from '@/lib/firebase';
import { useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  coverImage: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getSessionId() {
  if (typeof window === 'undefined') return '';
  let sessionId = sessionStorage.getItem('sml_session_id');
  if (!sessionId) {
    sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    sessionStorage.setItem('sml_session_id', sessionId);
  }
  return sessionId;
}

export function useSessionId() {
  return getSessionId();
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const sessionId = getSessionId();

  // Load cart from Firestore on mount
  useEffect(() => {
    async function loadCart() {
      if (!sessionId) return;
      const cartRef = doc(db, 'carts', sessionId);
      const cartSnap = await getDoc(cartRef);
      if (cartSnap.exists()) {
        setItems(cartSnap.data().items || []);
      }
    }
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  // Save cart to Firestore on change
  useEffect(() => {
    if (!sessionId) return;
    const cartRef = doc(db, 'carts', sessionId);
    setDoc(cartRef, { items }, { merge: true });
  }, [items, sessionId]);

  const addItem = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((i) => i.id === item.id);
      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...currentItems, { ...item, quantity }];
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 