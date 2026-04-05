'use client';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();
  const shippingCharge = 15.00;
  const subtotal = total;
  const finalTotal = subtotal + shippingCharge;
  const router = useRouter();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-['Oswald'] font-bold text-[#2d2d2d] uppercase text-3xl sm:text-4xl md:text-5xl tracking-wide mb-8 text-center">Your Cart</h1>

            {items.length === 0 ? (
              <div className="text-center py-12 sm:py-16">
                <div className="bg-[#faf8f6] rounded-2xl shadow-sm p-8 sm:p-10 md:p-14 max-w-md mx-auto">
                  <div className="text-base sm:text-lg text-[#666] mb-8">Your cart is empty.</div>
                  <Link href="/books">
                    <button className="w-full px-8 py-3.5 bg-[#E97B4A] text-white rounded-full font-['Oswald'] font-semibold text-base tracking-[0.1em] uppercase hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:shadow-[#E97B4A]/30">
                      Back to Shop
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-[#faf8f6] rounded-2xl shadow-sm p-4 sm:p-6 md:p-10 max-w-4xl mx-auto">
                <div className="divide-y divide-gray-100">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 py-5 sm:py-6"
                    >
                      <div className="relative w-20 h-24 sm:w-24 sm:h-32 flex-shrink-0 mx-auto sm:mx-0">
                        <Image
                          src={item.coverImage}
                          alt={item.title}
                          fill
                          className="object-cover rounded-xl shadow-sm"
                        />
                      </div>
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#2d2d2d] mb-1">{item.title}</h2>
                        <div className="text-lg sm:text-xl font-bold text-[#E97B4A] mb-4">${item.price.toFixed(2)} USD</div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-9 h-9 rounded-full bg-white text-[#2d2d2d] hover:bg-gray-100 font-bold text-lg flex items-center justify-center transition-colors shadow-sm"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="w-10 text-center font-bold text-base">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-9 h-9 rounded-full bg-white text-[#2d2d2d] hover:bg-gray-100 font-bold text-lg flex items-center justify-center transition-colors shadow-sm"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="border-t border-gray-200 pt-6 mt-6"
                >
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="text-base text-[#666]">Subtotal:</div>
                      <div className="text-base font-semibold text-[#2d2d2d]">${subtotal.toFixed(2)} USD</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-base text-[#666]">Shipping:</div>
                      <div className="text-base font-semibold text-[#2d2d2d]">${shippingCharge.toFixed(2)} USD</div>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <div className="font-['Oswald'] font-bold text-lg uppercase tracking-wide text-[#2d2d2d]">Total:</div>
                        <div className="text-xl sm:text-2xl font-bold text-[#E97B4A]">${finalTotal.toFixed(2)} USD</div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full px-8 py-3.5 bg-[#E97B4A] text-white rounded-full font-['Oswald'] font-semibold text-base tracking-[0.1em] uppercase hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:shadow-[#E97B4A]/30"
                    onClick={() => router.push('/checkout')}
                    disabled={items.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
