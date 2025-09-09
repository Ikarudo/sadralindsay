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
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full">
              <Image
                src="./musicpic1.png"
                alt="Music Hero Background"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-rust-400/60 via-transparent to-green-300/40" />
            </div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
              {/* Left side - Title */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col justify-center space-y-8"
              >
                <div  className="relative ml-[80px]">
                  <h1 className="text-[100px] font-heading mb-[4px] text-white leading-none">
                    CHECK
                  </h1>
                  <h1 className="text-[100px] font-heading mb-[15px] text-white leading-none -mt-4">
                    OUT
                  </h1>
                  <h1 className="text-[120px] font-cursive  text-white leading-none -mt-8 transform -rotate-2">
                    My Music!
                  </h1>
                </div>
                
                <div className="w-32 h-1 bg-rust-400 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 bg-rust-400 transform -skew-y-1" />
          <div className="relative h-16 bg-earth-100" />
        </div>

        {/* Featured Songs Section */}
        <section className="py-20 bg-earth-100 relative">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block"
              >
                <h2 className="text-6xl sm:text-7xl md:text-8xl font-cursive text-rust-400 mb-4 transform -rotate-1">
                  Featured
                </h2>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading text-green-300 -mt-6 transform rotate-1">
                  SONGS
                </h2>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="flex justify-center items-center mt-8 space-x-6">
                <div className="w-16 h-2 bg-rust-400 rounded-full" />
                <div className="w-8 h-8 bg-green-300 rounded-full" />
                <div className="w-16 h-2 bg-rust-400 rounded-full" />
              </div>
            </div>
            
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
          </div>
        </section>

        {/* Music Career Section */}
        <section className=" rounded-t-[60px] relative py-20 bg-green-300">
          {/* Background geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-rust-400 rounded-full opacity-20" />
            <div className="absolute top-1/2 -right-20 w-60 h-60 bg-earth-100 opacity-20" />
            <div className="absolute -bottom-20 left-1/3 w-80 h-40 bg-rust-300 opacity-20 transform rotate-45" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2 relative"
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-6 bg-rust-400 transform rotate-3" />
                  <div className="absolute -inset-4 bg-earth-100 transform -rotate-2" />
                  
                  <div className="relative">
                    <Image
                      src="./musicpic2.png"
                      alt="Sadra singing"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover border-8 border-rust-400"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-8"
              >
                <div className="space-y-4">
                  <h3 className="text-5xl sm:text-6xl md:text-7xl font-heading text-rust-400 leading-tight">
                    A LIFE IN
                  </h3>
                  <h3 className="text-6xl sm:text-7xl md:text-8xl font-cursive text-rust-300 -mt-4 transform rotate-1">
                    Gospel Music
                  </h3>
                  
                  <div className="flex items-center space-x-4 mt-6">
                    <div className="w-20 h-1 bg-rust-400" />
                    <div className="w-4 h-4 bg-rust-400 rounded-full" />
                    <div className="w-12 h-1 bg-rust-400" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-earth-100 transform rotate-1" />
                  <div className="relative bg-earth-100 p-8 border-4 border-rust-400 transform -rotate-1">
                    <p className="text-lg sm:text-xl text-rust-500 font-body leading-relaxed">
                      Sadra Madonna Lindsay has touched countless lives through her powerful voice and heartfelt lyrics.
                      Her journey as a gospel singer is marked by faith, resilience, and a passion for sharing the message of hope and love.
                      Each song is a testament to her devotion and her desire to uplift and inspire listeners around the world.
                    </p>
                  </div>
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