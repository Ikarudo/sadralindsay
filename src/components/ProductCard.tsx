'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  title: string;
  category: string;
  coverImage: string;
  price: number;
  description: string | string[];
  onAddToCart: (quantity: number) => void;
}

export default function ProductCard({
  title,
  category,
  coverImage,
  price,
  description,
  onAddToCart,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-earth-800 mb-4 text-sm md:text-base font-sans space-y-1">
          {description.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-rust-600 font-bold mr-2 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p className="text-earth-800 mb-4 text-base md:text-lg font-sans line-clamp-3">{description}</p>
    );
  };

  return (
    <div
      className="card p-4 md:p-6 bg-earth-100/95 shadow-xl rounded-xl border-2 border-rust-200 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={coverImage}
        alt={title}
        width={300}
        height={400}
        className="rounded-lg shadow-lg mb-4 w-full h-auto max-w-xs md:max-w-full"
      />
      <h3 className="text-lg md:text-xl font-bold text-earth-800 mb-2 font-serif">{title}</h3>
      <p className="text-earth-700 mb-2 text-base md:text-lg font-sans capitalize">{category}</p>
      {renderDescription()}
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2 font-semibold text-earth-900">Qty:</label>
        <input
          id="quantity"
          type="number"
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 px-2 py-1 border border-rust-300 rounded focus:outline-none focus:ring-2 focus:ring-rust-400 text-center bg-white font-bold"
        />
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <div className="text-[24px] md:text-[24px] font-extrabold text-black mb-2">${price.toFixed(2)} USD</div>
        <button
          onClick={() => onAddToCart(quantity)}
          className="block w-full px-8 py-3 bg-[#ee8d5a] text-black border-2 border-black rounded-full font-bold text-lg md:text-xl text-center shadow-lg hover:bg-green-700 transition-colors duration-200 mt-2 mb-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
} 