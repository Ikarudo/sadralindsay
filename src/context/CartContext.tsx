'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { db } from '@/lib/firebase';
import { useEffect } from 'react';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { useUser } from './UserContext';
// removed unused collection/addDoc imports
import { useRef } from 'react';

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
  const [hasLoaded, setHasLoaded] = useState(false);
  const sessionId = getSessionId();
  const { user } = useUser();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Real-time cart sync with Firestore (onSnapshot)
  useEffect(() => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    let cartRef;
    if (user) {
      cartRef = doc(db, 'users', user.uid, 'cart', 'current');
    } else {
      cartRef = doc(db, 'carts', sessionId);
    }
    // Subscribe to real-time updates
    unsubscribeRef.current = onSnapshot(
      cartRef,
      (cartSnap) => {
        if (cartSnap.exists()) {
          const data = cartSnap.data();
          setItems(data.items || []);
          setHasLoaded(true);
          console.log('[Cart] Loaded from Firestore:', data);
        } else {
          setItems([]);
          setHasLoaded(true);
          console.log('[Cart] No cart found in Firestore, set to empty.');
        }
      },
      (error) => {
        console.error('[Cart] Firestore onSnapshot error:', error);
      }
    );
    return () => {
      if (unsubscribeRef.current) unsubscribeRef.current();
    };
    
  }, [user, sessionId]);

  // Migrate session cart to user cart on login
  useEffect(() => {
    async function migrateCart() {
      if (user && sessionId) {
        try {
          const sessionCartRef = doc(db, 'carts', sessionId);
          const sessionCartSnap = await getDoc(sessionCartRef);
          if (sessionCartSnap.exists()) {
            const sessionItems = sessionCartSnap.data().items || [];
            if (sessionItems.length > 0) {
              const userCartRef = doc(db, 'users', user.uid, 'cart', 'current');
              await setDoc(
                userCartRef,
                {
                  items: sessionItems,
                  total: sessionItems.reduce(
                    (sum: number, item: { price: number; quantity: number }) =>
                      sum + item.price * item.quantity,
                    0
                  ),
                }
              );
              setItems(sessionItems);
              await setDoc(sessionCartRef, { items: [] }); // Clear session cart
              console.log('[Cart] Migrated session cart to user cart:', sessionItems);
            }
          }
        } catch (err) {
          console.error('[Cart] Error migrating cart:', err);
        }
      }
    }
    migrateCart();
    
  }, [user]);

  // Debounced save cart to Firestore on change
  useEffect(() => {
    if (!hasLoaded) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        // Save all properties needed for CartItem
        const cartData = {
          items: items.map(({ id, title, price, quantity, coverImage }) => ({ id, title, price, quantity, coverImage })),
          total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        };
        if (user) {
          const cartRef = doc(db, 'users', user.uid, 'cart', 'current');
          await setDoc(cartRef, cartData, { merge: true });
          console.log('[Cart] Saved to Firestore (user):', cartData);
        } else if (sessionId) {
          const cartRef = doc(db, 'carts', sessionId);
          await setDoc(cartRef, cartData, { merge: true });
          console.log('[Cart] Saved to Firestore (session):', cartData);
        }
      } catch (err) {
        console.error('[Cart] Error saving cart to Firestore:', err);
      }
    }, 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [items, user, sessionId, hasLoaded]);

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