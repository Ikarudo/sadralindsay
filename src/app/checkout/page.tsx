'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { sendOrderConfirmationEmails } from '@/services/emailService';

// Toast component
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg z-[9999] text-base font-semibold animate-fade-in">
      {message}
    </div>
  );
}

export default function CheckoutPage() {
  const { user, loading } = useUser();
  const { items, total, clearCart } = useCart();
  const [toast, setToast] = useState('');
  const [processing, setProcessing] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');
  const router = useRouter();
  const shippingCharge = 15.0;
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
      // Create order object for Firebase
      const order = {
        items: items.map(({ id, title, quantity, price }) => ({ id, title, quantity, price })),
        subtotal,
        shipping: shippingCharge,
        total: finalTotal,
        createdAt: Timestamp.now(),
      };
      
      // Save order to Firebase
      const ordersRef = collection(db, 'users', user.uid, 'orders');
      const orderDoc = await addDoc(ordersRef, order);
      
      // Send confirmation emails via EmailJS
      setEmailStatus('sending');
      
      const orderDateStr = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      
      const emailSuccess = await sendOrderConfirmationEmails(
        user.email || '',
        user.displayName || user.email?.split('@')[0] || 'Customer',
        items,
        subtotal,
        shippingCharge,
        finalTotal,
        orderDoc.id,
        orderDateStr
      );
      
      if (emailSuccess) {
        setEmailStatus('sent');
        setToast('Order placed successfully! Confirmation emails sent.');
      } else {
        setEmailStatus('failed');
        setToast('Order placed successfully! Email delivery may be delayed.');
      }
      
      clearCart();
      setTimeout(() => {
        setToast('');
        router.push('/');
      }, 3000);
    } catch (err) {
      console.error('Checkout error:', err);
      setToast('Failed to place order. Please try again.');
      setTimeout(() => setToast(''), 3000);
    } finally {
      setProcessing(false);
    }
  };

  if (!user) return null;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#F7E1C3] py-12 px-4">
        <div className="max-w-3xl mx-auto mt-25 mb-10 " >
          <div className="bg-white rounded-xl shadow-md p-8 border-3 border-black">
            <h1 className="text-3xl font-bold font-serif text-gray-900 mb-2 text-center">
              Complete Your Order
            </h1>
            <p className="text-gray-700 text-center mb-8">
              Review your items and finalize your purchase
            </p>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Your cart is empty
                </h2>
                <p className="text-gray-600">
                  Add some items to your cart to continue shopping
                </p>
              </div>
            ) : (
              <>
                {/* Order Summary */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center text-gray-900 font-medium">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <span className="text-gray-800 font-medium">
                          x{item.quantity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payment Details */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                    Payment Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Subtotal:</span>
                      <span className="text-gray-900 font-semibold">
                        ${subtotal.toFixed(2)} USD
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">Shipping:</span>
                      <span className="text-gray-900 font-semibold">
                        ${shippingCharge.toFixed(2)} USD
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-orange-100 rounded-lg">
                      <span className="text-gray-900 font-bold text-lg">Total:</span>
                      <span className="text-gray-900 font-extrabold text-xl">
                        ${finalTotal.toFixed(2)} USD
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Confirmation Note */}
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900 mb-1">Email Confirmation</h3>
                      <p className="text-sm text-blue-700">
                        After placing your order, you&apos;ll receive a confirmation email with payment instructions. 
                        A copy will also be sent to our business team for processing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={processing}
                  className="w-full py-4 rounded-lg bg-[#EA8C55] hover:bg-[#157419] text-white font-bold text-lg transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {processing ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span>
                        {emailStatus === 'sending' ? 'Sending Confirmation Emails...' : 'Processing...'}
                      </span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2-2v4.01"
                        />
                      </svg>
                      <span>Place Order</span>
                    </>
                  )}
                </button>

                {/* Email Status Indicator */}
                {emailStatus === 'sending' && (
                  <div className="mt-4 text-center text-sm text-blue-600">
                    <svg className="animate-spin w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sending confirmation emails...
                  </div>
                )}
                {emailStatus === 'sent' && (
                  <div className="mt-4 text-center text-sm text-green-600">
                    <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Confirmation emails sent successfully!
                  </div>
                )}
                {emailStatus === 'failed' && (
                  <div className="mt-4 text-center text-sm text-orange-600">
                    <svg className="w-4 h-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Order placed but email delivery may be delayed
                  </div>
                )}

                {/* Security Note */}
                <div className="mt-4 text-center text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 inline-block mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Secure checkout
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
