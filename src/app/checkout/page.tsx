'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-earth-400 text-white px-6 py-3 rounded-lg shadow-lg z-[9999] text-lg font-semibold animate-fade-in">
      {message}
    </div>
  );
}

export default function CheckoutPage() {
  const { user, loading } = useUser();
  const { items, total, clearCart } = useCart();
  const [toast, setToast] = useState('');
  const [processing, setProcessing] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/signin');
    }
  }, [user, loading, router]);

  const handleCheckout = async () => {
    if (!user || items.length === 0) return;
    setProcessing(true);
    try {
      const order = {
        items: items.map(({ id, title, quantity }) => ({ id, title, quantity })),
        total,
        createdAt: Timestamp.now(),
      };
      const ordersRef = collection(db, 'users', user.uid, 'orders');
      const docRef = await addDoc(ordersRef, order);
      setToast('Order placed successfully!');
      clearCart();
      setTimeout(() => {
        setToast('');
        router.push('/');
      }, 2000);
    } catch (err) {
      setToast('Failed to place order.');
      setTimeout(() => setToast(''), 2000);
    } finally {
      setProcessing(false);
    }
  };

  if (!user) return null;

  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center bg-earth-100 py-12 px-4">
        <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8 border border-earth-200">
          <h1 className="text-2xl font-heading font-bold text-earth-700 mb-6 text-center">Checkout</h1>
          {items.length === 0 ? (
            <div className="text-center text-earth-600">Your cart is empty.</div>
          ) : (
            <>
              <ul className="mb-6 divide-y divide-earth-200">
                {items.map((item) => (
                  <li key={item.id} className="py-2 flex justify-between items-center">
                    <span className="font-semibold text-earth-700">{item.title}</span>
                    <span className="text-earth-600">x{item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg text-earth-700">Total:</span>
                <span className="font-bold text-lg text-earth-700">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={processing}
                className="w-full py-2 rounded-lg bg-earth-400 hover:bg-earth-500 text-white font-semibold transition-colors duration-200 shadow-sm border border-earth-300 text-base disabled:opacity-60"
              >
                {processing ? 'Processing...' : 'Place Order'}
              </button>
            </>
          )}
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
} 