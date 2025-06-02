'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/BookCard';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';

// Sample book data - replace with actual data from your database
const sampleBooks = [
  {
    id: '1',
    title: 'Book Title 1',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/book1.jpg',
    price: 19.99,
    description: 'A captivating story that will keep you engaged from start to finish.',
  },
  // Add more books here
];

function BooksPageContent() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'fiction', 'non-fiction', 'gospel'];

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 bg-earth-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-earth-200 via-earth-100 to-green-100 border-b-2 border-earth-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-earth-800 font-heading drop-shadow-lg">
                Books
              </h1>
              <p className="text-xl text-earth-700 max-w-2xl mx-auto font-body">
                Discover the inspiring works of Sadra Madonna Lindsay
              </p>
            </motion.div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-20 bg-earth-100 border-b-2 border-earth-200">
          <div className="container mx-auto px-4">
            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors font-heading text-earth-700 border-2 border-earth-300 shadow-sm ${
                    selectedCategory === category
                      ? 'bg-rust-400 text-white border-rust-600'
                      : 'bg-earth-200 hover:bg-earth-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Books Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {sampleBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BookCard
                    {...book}
                    onAddToCart={() => addItem(book)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Book */}
        <section className="py-20 bg-green-100 border-t-2 border-green-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title text-green-700">Featured Book</h2>
              <div className="card p-6 bg-green-50 border border-green-200">
                <p className="text-green-700 text-center font-body">
                  Featured book coming soon!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function BooksPage() {
  return (
    <CartProvider>
      <BooksPageContent />
    </CartProvider>
  );
} 