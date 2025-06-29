'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';
import Image from 'next/image';
import BookCard from '@/components/BookCard';

// Sample book data - replace with actual data from your database
const sampleBooks = [
  {
    id: '1',
    title: 'Biblically Guided Planner',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/GuidedPlanner.jpg',
    price: 60.00,
    description: 'The Faith-Based Strategic Planner helps individuals plan purposefully by blending biblical wisdom with practical strategies. Guided by scripture, it provides a blueprint for success in business and life, featuring planning strategies, an annual performance review guide, a monthly bill organizer for budgeting, and a vision boarding section for goal setting.',
  },
  {
    id: '2',
    title: 'Biblically Guided Journal',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/guidedjournal.png',
    price: 35.00,
    description: 'This teaching tool fosters purposeful living by highlighting gratitude\'s role in life outcomes and encouraging reflection on life\'s moments. Guided by grace, it explores unique aspects of personal journaling, promotes acceptance of all life stages, and encourages a balanced view of experiences, with spaces for journaling and expressing insights.',
  },
  {
    id: '3',
    title: 'An Inspired Poetic Memoir',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/PoeticMemoir.png',
    price: 15.00,
    description: 'The Life Guiding Tool focuses on five key areas of life, promoting reflection and appreciation of life\'s moments while encouraging acceptance and appreciation of all life stages.',
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
          <div className="container mx-auto px-2 sm:px-4 relative z-10 flex flex-col items-center justify-center h-full min-h-[60vh] md:min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-16 md:pt-0"
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center break-words max-w-full"

              >
                Books
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* SML Books Logo */}
        <div className="flex justify-center items-center mt-[65px] my-8">
          <img
            src="/SMLBooksLogo.jpg"
            alt="SML Books Logo"
            className="w-[280px] md:w-[360px] border-[3px] border-earth-700 rounded-lg shadow-sm bg-white"
            style={{ maxWidth: '80vw', height: 'auto' }}
          />
        </div>

        {/* Intro/Overview Section */}
        <section className="py-10 md:py-20 bg-earth-100 border-b-4 border-rust-300">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="section-title !text-black mb-8 md:mb-10">About the Books</h2>
              <div className="flex flex-col gap-10 md:gap-16">
                {/* Section 1: Image Left, Text Right */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/aboutbookspic2.jpg"
                      alt="About Books"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2 border border-black p-3 sm:p-4 md:p-8 bg-cream">
                    <p className="text-base md:text-lg text-earth-800">
                      To This Day Let Me Write:         
                      When I am writing on paper, in a planner or in a journal, I feel like I am peeling from the walls of my soul. There is this sense of pulling from a part of me that could only manifest if I sit down to write. Somehow, words tend to flow differently when I write things down. The written word transcends into a greater more defined revelation to the meaning of life and existence. Consequently I am allowed greater understanding of many of life's mysteries and can in-turn enlighten someone else.
                      Written words, unlike the spoken, gives the added benefit of peace and calm as you sit to quietly to go over what was before-written, not just by yourself, but by many others. Those who would have likewise pulled from their soul and left words on paper that you could touch, feel and appreciate the intimacy of the author alone with himself, alone with his maker.
                    </p>
                  </div>
                </div>
                {/* Section 2: Image Right, Text Left */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <Image
                      src="/bookstorebg.png"
                      alt="About Books 2"
                      width={500}
                      height={300}
                      className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-full"
                    />
                  </div>
                  <div className="w-full md:w-1/2 border border-black p-3 sm:p-4 md:p-8 bg-cream">
                    <p className="text-base md:text-lg text-earth-800">
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
          <br /> <br /> <br /> <br /> <br />
        </section>
    

        {/* Books Grid Section */}
        <section className="py-10 md:py-20 bg-green-300">
          <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title !text-black">All Books</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleBooks.map((book) => (
                  <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    price={book.price}
                    description={book.description}
                    onAddToCart={(quantity) => {
                      addItem({
                        id: book.id,
                        title: book.title,
                        price: book.price,
                        coverImage: book.coverImage,
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

export default BooksPageContent; 