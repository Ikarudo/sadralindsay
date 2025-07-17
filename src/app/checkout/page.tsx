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
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-earth-400 text-white px-8 py-4 rounded-full shadow-2xl z-[9999] text-lg font-semibold animate-fade-in backdrop-blur-sm border border-earth-300">
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { user, loading } = useUser();
  const { items, total, clearCart } = useCart();
  const [toast, setToast] = useState('');
  const [processing, setProcessing] = useState(false);
  const router = useRouter();
  const shippingCharge = 15.00;
  const subtotal = total;
  const finalTotal = subtotal + shippingCharge;

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
        subtotal,
        shipping: shippingCharge,
        total: finalTotal,
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
      <main className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-4 relative" style={{backgroundImage: 'url(/CheckoutBG.jpg)'}}>
        <div className="absolute inset-0 bg-earth-100 bg-opacity-30"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Header Section */}

          <div className=" bg-opacity-20 text-center mb-8 mt-[10vh] pt-[50px] backdrop-blur-lg rounded-2xl shadow-xl border border-white border-opacity-30 overflow-hidden">
            <h1 className="text-4xl font-heading font-bold text-white mb-2">
              Complete Your Order
            </h1>
            <p className="text-white text-lg">Review your items and finalize your purchase</p>
            {items.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-earth-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-earth-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-white mb-2">Your cart is empty</h2>
                <p className="text-white">Add some items to your cart to continue shopping</p>
              </div>
            ) : (
              <>
                {/* Order Items Section */}
                <div className="p-8 border-b border-earth-100">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={item.id} className="flex justify-between items-center p-4 bg-opacity-40 backdrop-blur-sm rounded-lg border border-white border-opacity-50 hover:bg-opacity-50 transition-all duration-200">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-earth-200 rounded-full flex items-center justify-center">
                            <span className="text-white font-semibold">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{item.title}</h3>
                            <p className="text-sm text-white">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-earth-200 text-white px-3 py-1 rounded-full text-sm font-medium">
                            x{item.quantity}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="p-8 bg-opacity-10 backdrop-blur-sm">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Payment Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-opacity-50 backdrop-blur-sm rounded-lg border border-white border-opacity-40">
                      <span className="text-white font-medium">Subtotal:</span>
                      <span className="text-white font-bold text-lg">${subtotal.toFixed(2)} USD</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-opacity-50 backdrop-blur-sm rounded-lg border border-white border-opacity-40">
                      <span className="text-white font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                        Shipping:
                      </span>
                      <span className="text-white font-bold text-lg">${shippingCharge.toFixed(2)} USD</span>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-earth-400 to-earth-500 rounded-lg text-white border-2 border-earth-300">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">Total:</span>
                        <span className="text-2xl font-extrabold">${finalTotal.toFixed(2)} USD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Checkout Button Section */}
                <div className="p-8">
                  <button
                    onClick={handleCheckout}
                    disabled={processing}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-earth-400 to-earth-500 hover:from-earth-500 hover:to-earth-600 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-earth-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md flex items-center justify-center space-x-2"
                  >
                    {processing ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2-2v4.01" />
                        </svg>
                        <span>Place Order</span>
                      </>
                    )}
                  </button>
                  
                  {/* Security Badge */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center text-sm text-white bg-earth-100 px-3 py-1 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Secure checkout
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </>
  );
}