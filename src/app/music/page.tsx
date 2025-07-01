'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Carousel from '@/components/Carousel';

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100 border-b-4 border-rust-400">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full min-h-screen">
              <Image
                src="/musicpic1.png"
                alt="Music Hero Background"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
          {/* Hero Content */}
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 flex flex-col items-center justify-center h-full min-h-[40vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-20 md:pt-0 px-4"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading text-white drop-shadow-xl tracking-tight mb-4 text-center break-words max-w-full leading-tight">
                Check Out My Music!
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif text-white drop-shadow-lg max-w-2xl text-center leading-relaxed">
                Experience the soulful sounds of Sadra Madonna Lindsay's gospel music.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* Music Videos Section - Carousel */}
        <section className="flex items-center justify-center min-h-[75vh] py-8 sm:py-12 md:py-16 bg-earth-100">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="section-title !text-black mb-6 sm:mb-8 font-cursive text-center">Featured Songs</h2>
              <Carousel
                items={[
                  {
                    title: "Breathe It's Gonna Be Okay",
                    videoUrl: 'https://www.youtube.com/embed/n4oBav8yVn4',
                    description:
                      "A song of comfort and hope, reminding us to trust in God's timing and breathe through life's storms.",
                    bgColor: 'bg-green-300 md:bg-[#ef8d5c]',
                    side: 'left',
                  },
                  {
                    title: 'Thank you',
                    videoUrl: 'https://www.youtube.com/embed/hXDyrCGqMoE',
                    description:
                      'A heartfelt expression of gratitude for blessings received and the journey of faith.',
                    bgColor: 'bg-[#c23c03] md:bg-green-300',
                    side: 'right',
                  },
                  {
                    title: 'Our Father',
                    videoUrl: 'https://www.youtube.com/embed/-q8OXRDh7zU',
                    description:
                      'A soulful rendition of the Lords Prayer, celebrating faith and connection to the divine.',
                    bgColor: 'bg-[#c23c03] md:bg-[#ef8d5c]',
                    side: 'left',
                  },
                  {
                    title: 'Oceans Where My Feet Fall',
                    videoUrl: 'https://www.youtube.com/embed/thXJSOgEvi4',
                    description:
                      'A moving anthem about stepping out in faith, even when the path is uncertain.',
                    bgColor: 'bg-green-300 md:bg-green-300',
                    side: 'right',
                  },
                ]}
              />
            </motion.div>
          </div>
        </section>

        {/* Music Career Section with musicpic2.png */}
        <section className="py-12 sm:py-16 md:py-20 bg-green-300 border-t-4 border-rust-400">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 max-w-[1100px]">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
                <Image
                  src="/musicpic2.png"
                  alt="Sadra singing"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg border-4 border-black bg-earth-100 object-cover w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="card p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-rust-300 bg-earth-100 w-full text-left">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-heading text-black mb-4 text-left"
                >
                  A Life in Gospel Music
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-lg text-black font-body text-left leading-relaxed"
                >
                  Sadra Madonna Lindsay has touched countless lives through her powerful voice and heartfelt lyrics.
                   Her journey as a gospel singer is marked by faith, resilience, and a passion for sharing the message of hope and love. 
                   Each song is a testament to her devotion and her desire to uplift and inspire listeners around the world.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}