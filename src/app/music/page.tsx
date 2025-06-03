'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100 border-b-4 border-rust-400">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute w-full h-full min-h-[80vh]">
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
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full min-h-[40vh]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center pt-24 md:pt-0"
            >
              <h1 className="text-5xl md:text-7xl font-cursive text-white drop-shadow-xl tracking-tight mb-6">
                Music
              </h1>
              <p className="text-xl md:text-2xl font-body text-white drop-shadow-lg max-w-2xl mx-auto">
                Experience the soulful sounds of Sadra Madonna Lindsay's gospel music.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* Music Videos Section - Stacked Cards */}
        <section className="py-20 bg-earth-100 border-b-4 border-green-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <br /> <br /> <br /> <br />
              <h2 className="section-title text-green-700">Featured Songs</h2>
              <div className="flex flex-col gap-8 relative">
                {/* Song 1 */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 !bg-green-300 border-2 border-green-400 shadow-2xl rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-stretch md:ml-0 md:mr-32 relative overflow-hidden"
                  style={{ maxWidth: '900px', marginLeft: '0', marginRight: 'auto' }}
                >
                  <div className="absolute left-0 top-0 h-full w-2 bg-rust-400 rounded-l-2xl" />
                  <div className="flex-1 z-10">
                    <h3 className="text-2xl font-heading !text-white mb-4 text-center md:text-left">Breathe It's Gonna Be Okay</h3>
                    <div className="aspect-w-16 aspect-h-9 w-full h-[320px] rounded-lg overflow-hidden mb-2">
                      <iframe
                        src="https://www.youtube.com/embed/n4oBav8yVn4"
                        title="Breathe It's Gonna Be Okay"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
                {/* Song 2 */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card p-6 !bg-green-300 border-2 border-rust-400 shadow-2xl rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-stretch md:mr-0 md:ml-32 relative overflow-hidden"
                  style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: '0' }}
                >
                  <div className="absolute right-0 top-0 h-full w-2 bg-green-400 rounded-r-2xl" />
                  <div className="flex-1 z-10">
                    <h3 className="text-2xl font-heading !text-white mb-4 text-center md:text-right">Thank you</h3>
                    <div className="aspect-w-16 aspect-h-9 w-full h-[320px] rounded-lg overflow-hidden mb-2">
                      <iframe
                        src="https://www.youtube.com/embed/hXDyrCGqMoE"
                        title="Thank you"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
                {/* Song 3 */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="card p-6 !bg-green-300 border-2 border-green-400 shadow-2xl rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-stretch md:ml-0 md:mr-32 relative overflow-hidden"
                  style={{ maxWidth: '900px', marginLeft: '0', marginRight: 'auto' }}
                >
                  <div className="absolute left-0 top-0 h-full w-2 bg-rust-400 rounded-l-2xl" />
                  <div className="flex-1 z-10">
                    <h3 className="text-2xl font-heading !text-white mb-4 text-center md:text-left">Our Father</h3>
                    <div className="aspect-w-16 aspect-h-9 w-full h-[320px] rounded-lg overflow-hidden mb-2">
                      <iframe
                        src="https://www.youtube.com/embed/-q8OXRDh7zU"
                        title="Our Father"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
                {/* Song 4 */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="card p-6 !bg-green-300 border-2 border-rust-400 shadow-2xl rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-stretch md:mr-0 md:ml-32 relative overflow-hidden"
                  style={{ maxWidth: '900px', marginLeft: 'auto', marginRight: '0' }}
                >
                  <div className="absolute right-0 top-0 h-full w-2 bg-green-400 rounded-r-2xl" />
                  <div className="flex-1 z-10">
                    <h3 className="text-2xl font-heading !text-white mb-4 text-center md:text-right">Oceans Where My Feet Fall</h3>
                    <div className="aspect-w-16 aspect-h-9 w-full h-[320px] rounded-lg overflow-hidden mb-2">
                      <iframe
                        src="https://www.youtube.com/embed/thXJSOgEvi4"
                        title="Oceans Where My Feet Fall"
                        frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Music Career Section with musicpic2.png */}
        <section className="py-20 bg-green-100 border-t-4 border-rust-400">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/musicpic2.png"
                alt="Sadra singing"
                width={400}
                height={400}
                className="rounded-xl shadow-lg border-4 border-green-300 bg-earth-100 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 pr-[160px]">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-heading text-green-800 mb-4 text-center md:text-left"
              >
                A Life in Gospel Music
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-green-700 font-body text-center md:text-left"
              >
                Sadra Madonna Lindsay has touched countless lives through her powerful voice and heartfelt lyrics. Her journey as a gospel singer is marked by faith, resilience, and a passion for sharing the message of hope and love. Each song is a testament to her devotion and her desire to uplift and inspire listeners around the world.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 