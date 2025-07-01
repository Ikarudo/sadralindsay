'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';

// Sample product data - replace with actual data from your database
const sampleProducts = [
  {
    id: 'soap1',
    title: 'Pink Himalayan Salt Soap',
    category: 'soap',
    coverImage: '/PinkHimalyanSalt.jpg', // You'll need to add this image
    price: 9.00,
    description: [
      'Handcrafted with natural lavender essential oils',
      'Gentle on skin with moisturizing properties',
      'Perfect for daily use and relaxation',
      'Made with organic ingredients and sustainable packaging'
    ],
  },
    {
    id: 'soap2',
    title: 'Aloe Leaf of Life Soap',
    category: 'soap',
    coverImage: '/AloeLeafofLife.jpg', // You'll need to add this image
    price: 9.00,
    description: [
      'Handcrafted with natural lavender essential oils',
      'Gentle on skin with moisturizing properties',
      'Perfect for daily use and relaxation',
      'Made with organic ingredients and sustainable packaging'
    ],
  },
    {
    id: 'soap3',
    title: 'Tumeric and Aloe Soap',
    category: 'soap',
    coverImage: '/TumericandAloe.jpg', // You'll need to add this image
    price: 9.00,
    description: [
      'Handcrafted with natural lavender essential oils',
      'Gentle on skin with moisturizing properties',
      'Perfect for daily use and relaxation',
      'Made with organic ingredients and sustainable packaging'
    ],
  },
  // Add more products here
];

function StorePageContent() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'soap', 'candles', 'accessories'];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100 border-b-4 border-rust-400">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              <Image
                src="/StoreBGPic.jpg"
                alt="Store Background"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center justify-center h-full min-h-[60vh] md:min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-20 md:pt-0 px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center break-words max-w-full leading-tight">
                Store
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* Garden Gold Logo */}
        <div className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 my-6 sm:my-8 px-4">
          <img
            src="/GardenGoldLogo.jpg"
            alt="Garden Gold Logo"
            className="w-64 sm:w-72 md:w-80 lg:w-96 border-[3px] border-earth-700 rounded-lg shadow-sm bg-white"
            style={{ maxWidth: '90vw', height: 'auto' }}
          />
        </div>

        {/* Products Grid Section */}
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-green-300">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title !text-black text-center mb-8 sm:mb-10">All Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {sampleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    coverImage={product.coverImage}
                    price={product.price}
                    description={product.description}
                    onAddToCart={(quantity) => {
                      addItem({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        coverImage: product.coverImage,
                      }, quantity);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default StorePageContent; 