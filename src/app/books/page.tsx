'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/BookCard';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';
import Image from 'next/image';

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
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100 border-b-4 border-rust-400">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              <Image
                src="/aboutbookspic.jpg"
                alt="Bookstore Background"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full min-h-[60vh] md:min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-24 md:pt-0"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center whitespace-nowrap max-w-full">
                My Books
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* Intro/Overview Section */}
        <section className="py-20 bg-earth-100 border-b-4 border-rust-300">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="section-title text-rust-500 mb-10">About the Books</h2>
              <div className="flex flex-col gap-16">
                {/* Section 1: Image Left, Text Right */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/aboutbookspic2.png"
                      alt="About Books"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 border border-black p-8 bg-cream">
                    <p className="text-lg text-earth-800">
                      To This Day Let Me Write:         
                      When I am writing on paper, in a planner or in a journal, I feel like I am peeling from the walls of my soul. There is this sense of pulling from a part of me that could only manifest if I sit down to write. Somehow, words tend to flow differently when I write things down. The written word transcends into a greater more defined revelation to the meaning of life and existence. Consequently I am allowed greater understanding of many of life's mysteries and can in-turn enlighten someone else.
                      Written words, unlike the spoken, gives the added benefit of peace and calm as you sit to quietly to go over what was before-written, not just by yourself, but by many others. Those who would have likewise pulled from their soul and left words on paper that you could touch, feel and appreciate the intimacy of the author alone with himself, alone with his maker.
                    </p>
                  </div>
                </div>
                {/* Section 2: Image Right, Text Left */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/bookstorebg.png"
                      alt="About Books 2"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-1/2 border border-black p-8 bg-cream">
                    <p className="text-lg text-earth-800">
                      To This Day Let Me Write is a prophetic movement where Sadra Madonna Lindsay writes from a place of speaking into the current days of this generation. It speaks to life and its various seasons and along the way helping those who might have been struggling to compose themselves along this journey. This movement inspires persons to write purposefully and with intention to their days. In this current series she has authored three books namely: 
                      To This Day Let Me Write: An Inspired Poetic Memoir
                      To This Day Let Me Write, The Biblically Guided Planner: Redeeming the Time, Planning Strategically for the Days Ahead
                      To This Day Let Me Write, the Guided Journal: Life, Love, Gratitude and Growing in Grace: A Practical Guide to Writing your Days, Safely in the Abiding Presence of the Lord
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Books Grid Section */}
        <section className="py-20 bg-earth-100 border-b-4 border-rust-300">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="section-title text-rust-500">All Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {sampleBooks.map((book) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="card p-6 bg-earth-100/95 shadow-xl rounded-xl border-2 border-rust-200"
                  >
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      width={300}
                      height={400}
                      className="rounded-lg shadow-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-earth-800 mb-2">{book.title}</h3>
                    <p className="text-earth-700 mb-4">{book.description}</p>
                    <motion.a
                      href={`https://www.amazon.com/dp/${book.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-4 py-2 bg-rust-500 text-white rounded-lg font-medium hover:bg-rust-600 transition-colors duration-200"
                    >
                      Buy on Amazon
                    </motion.a>
                  </motion.div>
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

export default function BooksPage() {
  return (
    <CartProvider>
      <BooksPageContent />
    </CartProvider>
  );
} 