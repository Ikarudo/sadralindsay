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
      <main className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/musicpic1.png"
              alt="Music Hero Background"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#E97B4A]/30 via-transparent to-[#1a1a1a]/60" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col justify-center space-y-6 lg:space-y-8 text-center lg:text-left"
              >
                <div>
                  <h1 className="font-['Oswald'] font-bold text-white uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight drop-shadow-2xl">
                    Check Out
                  </h1>
                  <h1 className="font-cursive text-white text-5xl sm:text-6xl lg:text-7xl -mt-2 transform -rotate-2 drop-shadow-lg">
                    My Music!
                  </h1>
                </div>
                <div className="w-24 h-1 bg-[#E97B4A] rounded-full mx-auto lg:mx-0" />
              </motion.div>
              <div className="hidden lg:block" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* Featured Songs Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="font-cursive text-[#E97B4A] text-5xl sm:text-6xl md:text-7xl mb-2 transform -rotate-2">
                  Featured
                </h2>
                <h2 className="font-['Oswald'] font-bold text-[#217a2b] uppercase text-4xl sm:text-5xl md:text-6xl -mt-2 tracking-wide">
                  Songs
                </h2>
              </motion.div>

              <div className="flex justify-center items-center mt-8 space-x-4">
                <div className="w-12 h-1 bg-[#E97B4A] rounded-full" />
                <div className="w-4 h-4 bg-[#217a2b] rounded-full" />
                <div className="w-12 h-1 bg-[#E97B4A] rounded-full" />
              </div>
            </div>

            <Carousel
              items={[
                {
                  title: "Breathe It's Gonna Be Okay",
                  videoUrl: 'https://www.youtube.com/embed/n4oBav8yVn4',
                  description: "A song of comfort and hope, reminding us to trust in God's timing and breathe through life's storms.",
                  bgColor: 'bg-[#217a2b]',
                  side: 'left',
                },
                {
                  title: 'Thank you',
                  videoUrl: 'https://www.youtube.com/embed/hXDyrCGqMoE',
                  description: 'A heartfelt expression of gratitude for blessings received and the journey of faith.',
                  bgColor: 'bg-[#E97B4A]',
                  side: 'right',
                },
                {
                  title: 'Our Father',
                  videoUrl: 'https://www.youtube.com/embed/-q8OXRDh7zU',
                  description: 'A soulful rendition of the Lords Prayer, celebrating faith and connection to the divine.',
                  bgColor: 'bg-[#E97B4A]',
                  side: 'left',
                },
                {
                  title: 'Oceans Where My Feet Fall',
                  videoUrl: 'https://www.youtube.com/embed/thXJSOgEvi4',
                  description: 'A moving anthem about stepping out in faith, even when the path is uncertain.',
                  bgColor: 'bg-[#217a2b]',
                  side: 'right',
                },
              ]}
            />
          </div>
        </section>

        {/* Music Career Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-[#217a2b] via-[#2a8f35] to-[#1a6622] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#E97B4A] rounded-full opacity-10" />
            <div className="absolute top-1/2 -right-20 w-48 sm:w-60 h-48 sm:h-60 bg-white opacity-5 rounded-full" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 flex justify-center"
              >
                <div className="relative max-w-sm w-full">
                  <Image
                    src="/musicpic2.png"
                    alt="Sadra singing"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="text-center lg:text-left">
                  <h3 className="font-['Oswald'] font-bold text-white uppercase text-4xl sm:text-5xl md:text-6xl tracking-wide leading-tight">
                    A Life In
                  </h3>
                  <h3 className="font-cursive text-[#E97B4A] text-5xl sm:text-6xl md:text-7xl -mt-2 transform rotate-1">
                    Gospel Music
                  </h3>
                </div>

                <div className="flex justify-center lg:justify-start items-center space-x-3 mt-4">
                  <div className="w-16 h-1 bg-[#E97B4A] rounded-full" />
                  <div className="w-3 h-3 bg-white rounded-full" />
                  <div className="w-10 h-1 bg-[#E97B4A] rounded-full" />
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto lg:mx-0">
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    Sadra Madonna Lindsay has touched countless lives through her powerful voice and heartfelt lyrics.
                    Her journey as a gospel singer is marked by faith, resilience, and a passion for sharing the message of hope and love.
                    Each song is a testament to her devotion and her desire to uplift and inspire listeners around the world.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
