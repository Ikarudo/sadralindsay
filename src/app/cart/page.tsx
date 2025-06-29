'use client';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();
  const shippingCharge = 15.00;
  const subtotal = total;
  const finalTotal = subtotal + shippingCharge;

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100 pt-20">
        <div className="container mx-auto px-4 py-12 min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-heading mb-8 text-earth-900 text-center">Your Cart</h1>
            
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-md mx-auto border-2 border-rust-200">
                  <div className="text-lg text-earth-600 mb-6">Your cart is empty.</div>
                  <Link href="/books">
                    <button className="block w-full px-8 py-3 bg-[#ee8d5a] text-black border-2 border-black rounded-full font-bold text-lg md:text-xl text-center shadow-lg hover:bg-green-700 transition-colors duration-200">
                      Back to Books
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto border-2 border-rust-200">
                <div className="divide-y divide-earth-200">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col md:flex-row items-start md:items-center gap-6 py-6"
                    >
                      <div className="relative w-24 h-32 flex-shrink-0">
                        <Image 
                          src={item.coverImage} 
                          alt={item.title} 
                          fill 
                          className="object-cover rounded-lg border-2 border-rust-200 shadow-md" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg md:text-xl font-bold text-earth-900 mb-2 font-serif">{item.title}</h2>
                        <div className="text-[20px] font-extrabold text-black mb-4">${item.price.toFixed(2)} USD</div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 bg-earth-200 text-earth-900 rounded-lg hover:bg-earth-300 disabled:opacity-50 font-bold border border-earth-300 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="w-12 text-center font-bold text-lg bg-white border border-earth-300 rounded-lg py-1">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 bg-earth-200 text-earth-900 rounded-lg hover:bg-earth-300 font-bold border border-earth-300 transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 font-bold border border-red-300 hover:border-red-500 px-4 py-1 rounded-lg transition-colors"
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
                  className="border-t-2 border-rust-200 pt-6 mt-8"
                >
                  {/* Cost Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <div className="text-lg text-earth-700">Subtotal:</div>
                      <div className="text-lg font-bold text-earth-900">${subtotal.toFixed(2)} USD</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-lg text-earth-700">Shipping:</div>
                      <div className="text-lg font-bold text-earth-900">${shippingCharge.toFixed(2)} USD</div>
                    </div>
                    <div className="border-t border-earth-300 pt-3">
                      <div className="flex justify-between items-center">
                        <div className="text-xl font-bold text-earth-900">Total:</div>
                        <div className="text-2xl font-extrabold text-black">${finalTotal.toFixed(2)} USD</div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full px-8 py-3 bg-[#ee8d5a] text-black border-2 border-black rounded-full text-lg md:text-xl font-bold hover:bg-green-700 transition-colors duration-200 shadow-lg">
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