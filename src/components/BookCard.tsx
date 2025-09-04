'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  price: number;
  description: string | string[];
  onAddToCart: (quantity: number) => void;
}

export default function BookCard({
  title,
  author,
  coverImage,
  price,
  description,
  onAddToCart,
}: BookCardProps) {
  // removed unused hover state
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-earth-800 mb-4 text-xs sm:text-sm md:text-base font-sans space-y-1 leading-relaxed">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-rust-600 font-bold mr-2 mt-1 flex-shrink-0">•</span>
              <span className="text-sm sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-earth-800 mb-4 text-sm sm:text-base md:text-lg font-sans line-clamp-3 leading-relaxed">{description}</p>
    );
  };

  return (
    <div
      className="card p-3 sm:p-4 md:p-6 bg-earth-100/95 shadow-xl rounded-xl border-2 border-rust-200 flex flex-col h-full"
    >
      {/* Image Container - Centered on all devices */}
      <div className="flex justify-center items-center mb-3 sm:mb-4">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full">
          <Image
            src={coverImage}
            alt={title}
            width={300}
            height={400}
            className="rounded-lg shadow-lg w-full h-auto object-contain"
          />
        </div>
      </div>
      
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-earth-800 mb-2 font-serif text-center sm:text-left">{title}</h3>
      <p className="text-earth-700 mb-2 text-sm sm:text-base md:text-lg font-sans text-center sm:text-left">by {author}</p>
      
      {renderDescription()}
      
      <div className="flex items-center justify-center sm:justify-start mb-4">
        <label htmlFor="quantity" className="mr-2 font-semibold text-earth-900 text-sm sm:text-base">Qty:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border border-rust-300 rounded focus:outline-none focus:ring-2 focus:ring-rust-400 text-center bg-white font-bold text-sm sm:text-base"
        />
      </div>
      
      <div className="flex flex-col gap-2 mt-auto">
        <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-black mb-2 text-center sm:text-left">${price.toFixed(2)} USD</div>
        <button
          onClick={() => onAddToCart(quantity)}
          className="block w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#ee8d5a] text-black border-2 border-black rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl text-center shadow-lg hover:bg-green-700 transition-colors duration-200 mt-2 mb-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 