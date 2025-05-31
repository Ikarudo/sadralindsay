'use client';

import Image from 'next/image';
import { useState } from 'react';

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  price: number;
  description: string;
  onAddToCart: () => void;
}

export default function BookCard({
  title,
  author,
  coverImage,
  price,
  description,
  onAddToCart,
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">by {author}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-amber-800">${price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
} 