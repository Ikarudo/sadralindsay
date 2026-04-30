'use client';

import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import BookCard from '@/components/BookCard';

const sampleBooks = [
  {
    id: '1',
    title: 'Biblically Guided Planner',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/GuidedPlanner.jpg',
    price: 60.00,
    description: [
      'A faith-based strategic planner that helps individuals redeem time and plan purposefully, blending biblical wisdom with practical strategies and offering a scriptural blueprint for success in business and life.',
      'Educational resource with sound planning strategies, including an annual performance review guide.',
      'Features a monthly bill organizer for budgeting and a vision boarding section for goal setting.',
    ],
  },
  {
    id: '2',
    title: 'Biblically Guided Journal',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/guidedjournal.png',
    price: 35.00,
    description: [
      'A teaching tool for purposeful living, emphasizing gratitude\'s impact on life outcomes and promoting reflection, acceptance, and appreciation of all life stages with a balanced perspective.',
      'Guides readers to approach life with grace, addressing underexplored aspects of personal journaling.',
      'Provides dedicated spaces for journaling and expressing insights on covered areas.',
    ],
  },
  {
    id: '3',
    title: 'An Inspired Poetic Memoir',
    author: 'Sadra Madonna Lindsay',
    coverImage: '/poeticmemoir.png',
    price: 15.00,
    description: [
      'A Life guiding tool which focuses on five specific areas of life and living',
      'Focuses on reflection and appreciating life\'s moments',
      'Promotes acceptance and appreciation of all life stages'
    ],
  },
];

function BooksPageContent() {
  const { addItem } = useCart();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#020617]">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/aboutbookspic.jpg"
              alt="Bookstore Background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/20 via-transparent to-[#0F172A]/40" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="pt-20"
            >
              <h1 className="font-['Oswald'] font-bold text-white uppercase text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-2xl">
                Books
              </h1>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent z-10" />
        </section>

        {/* SML Books Logo */}
        <div className="flex justify-center items-center py-10 sm:py-14 px-4">
          <Image
            src="/SMLBooksLogo.jpg"
            alt="SML Books Logo"
            width={384}
            height={384}
            className="w-56 sm:w-64 md:w-72 lg:w-80 rounded-2xl shadow-md h-auto"
            priority
          />
        </div>

        {/* About the Books Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#020617]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-['Oswald'] font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl text-center mb-10 tracking-wide">
                About the Books
              </h2>
              <div className="flex flex-col gap-10 sm:gap-14">
                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
                      <Image
                        src="/aboutbookspic2.jpg"
                        alt="About Books"
                        width={500}
                        height={300}
                        className="rounded-2xl shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#0F172A] to-[#020617] rounded-2xl p-6 sm:p-8">
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      To This Day Let Me Write:
                      When I am writing on paper, in a planner or in a journal, I feel like I am peeling from the walls of my soul. There is this sense of pulling from a part of me that could only manifest if I sit down to write. Somehow, words tend to flow differently when I write things down. The written word transcends into a greater more defined revelation to the meaning of life and existence. Consequently I am allowed greater understanding of many of life&apos;s mysteries and can in-turn enlighten someone else.
                      Written words, unlike the spoken, gives the added benefit of peace and calm as you sit to quietly to go over what was before-written, not just by yourself, but by many others. Those who would have likewise pulled from their soul and left words on paper that you could touch, feel and appreciate the intimacy of the author alone with himself, alone with his maker.
                    </p>
                  </div>
                </div>
                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl">
                      <Image
                        src="/bookstorebg.png"
                        alt="About Books 2"
                        width={500}
                        height={300}
                        className="rounded-2xl shadow-md w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 bg-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-sm border-l-4 border-[#E11D48]/40">
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                      To This Day Let Me Write is a prophetic movement where Sadra Madonna Lindsay writes from a place of speaking into the current days of this generation. It speaks to life and its various seasons and along the way helping those who might have been struggling to compose themselves along this journey. This movement inspires persons to write purposefully and with intention to their days. In this current series she has authored three books namely:
                      To This Day Let Me Write: An Inspired Poetic Memoir,
                      To This Day Let Me Write, The Biblically Guided Planner: Redeeming the Time, Planning Strategically for the Days Ahead,
                      To This Day Let Me Write, the Guided Journal: Life, Love, Gratitude and Growing in Grace: A Practical Guide to Writing your Days, Safely in the Abiding Presence of the Lord.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Books Grid Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#020617]">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Oswald'] font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl text-center mb-10 tracking-wide">
                All Books
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
