'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total } = useCart();

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh]">
      <h1 className="text-3xl md:text-4xl font-heading mb-8 text-earth-900">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-center text-lg text-earth-600 py-16">Your cart is empty.</div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-3xl mx-auto">
          <div className="divide-y divide-earth-200">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-6 py-6">
                <div className="relative w-24 h-32 flex-shrink-0">
                  <Image src={item.coverImage} alt={item.title} fill className="object-cover rounded-lg border border-earth-200" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-earth-900 mb-1">{item.title}</h2>
                  <div className="text-earth-700 mb-2">${item.price.toFixed(2)}</div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-earth-200 text-earth-900 rounded hover:bg-earth-300 disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-earth-200 text-earth-900 rounded hover:bg-earth-300"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-xl font-bold text-earth-900">Total:</div>
            <div className="text-2xl font-extrabold text-amber-700">${total.toFixed(2)}</div>
          </div>
          <button className="mt-8 w-full bg-amber-600 text-white py-3 rounded-full text-lg font-bold hover:bg-amber-700 transition-colors shadow-lg">Checkout</button>
        </div>
      )}
    </div>
  );
} 