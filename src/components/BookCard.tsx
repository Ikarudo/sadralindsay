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
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-[#555] mb-4 text-xs sm:text-sm space-y-1.5 leading-relaxed">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E97B4A] mt-1.5 mr-2 flex-shrink-0" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-[#555] mb-4 text-sm line-clamp-3 leading-relaxed">{description}</p>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-400 p-4 sm:p-5 flex flex-col h-full group">
      {/* Image */}
      <div className="flex justify-center items-center mb-4 overflow-hidden rounded-xl bg-[#faf8f6]">
        <Image
          src={coverImage}
          alt={title}
          width={300}
          height={400}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-base sm:text-lg font-bold text-[#2d2d2d] mb-1 text-center sm:text-left">{title}</h3>
      <p className="text-[#888] mb-3 text-sm text-center sm:text-left">by {author}</p>

      {renderDescription()}

      <div className="flex items-center justify-center sm:justify-start mb-4">
        <label htmlFor="quantity" className="mr-2 font-medium text-[#2d2d2d] text-sm">Qty:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          className="w-14 px-2 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E97B4A]/40 text-center bg-white font-semibold text-sm"
        />
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        <div className="text-xl font-bold text-[#E97B4A] mb-1 text-center sm:text-left">${price.toFixed(2)} USD</div>
        <button
          onClick={() => onAddToCart(quantity)}
          className="w-full px-6 py-3 bg-[#E97B4A] text-white rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.1em] uppercase hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:shadow-[#E97B4A]/30"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
