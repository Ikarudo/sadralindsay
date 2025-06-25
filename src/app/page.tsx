'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple } from 'react-icons/fa';
// import { SiBoomplay } from 'react-icons/si'; // SiBoomplay does not exist
import { SiJoomla } from 'react-icons/si'; // Example replacement, or remove if not needed
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-earth-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-rust-200 via-earth-100 to-green-100">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 ">
            <div className="relative w-full h-full">
              <Image
                src="/Frontpagepic2.jpg"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-rust-500/60" /> {/* Terracotta overlay for warmth */}
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
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center break-words max-w-full">
                Sadra Madonna Lindsay
              </h1>
            </motion.div>
          </div>
        </section>
        {/* Accent Bar */}
        <div className="w-full h-4 bg-rust-400" />

        {/* About Section */}
        <section id="about" className="py-10 md:py-20 bg-earth-100 border-b-4 border-rust-300">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title !text-black">Learn About Me</h2>
              <div className="flex justify-center my-6">
                <img
                  src="/SML Logo V1.svg"
                  alt="SML Logo V1"
                  style={{ width: '180px', height: '180px', objectFit: 'contain' }}
                  className="rounded mx-auto drop-shadow-lg border-4 border-earth-300 bg-earth-100"
                  draggable="false"
                  onError={(e) => { e.currentTarget.src = '/SML Logo V1.png'; }}
                />
              </div>

              <br /> <br /> <br />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-base sm:text-lg md:text-xl text-center font-medium mb-8 text-earth-800 font-body"
              >
                Hi Everyone! I'm Sadra Madonna Lindsay. Welcome to my world, where God's grace abounds and every experience is a blessing.
              </motion.p>
              <br />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="card p-4 sm:p-8 md:p-10 bg-earth-100/95 shadow-xl rounded-xl border-2 border-rust-200"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-base sm:text-xl font-semibold text-earth-700 mb-6 text-center"
                >
                  My Career: <span className="font-normal text-earth-800">Gospel Recording Artist, Award Winning Author and Entrepreneur.</span>
                </motion.p>
                <div className="space-y-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-earth-50 rounded-lg p-5 shadow-sm border border-earth-100"
                  >
                    <span className="block font-semibold text-earth-800 mb-1 text-center text-[18px]">Faith-Driven Excellence</span>
                    <span className="text-earth-700">Committed to producing work that reflects a spirit of excellence, rooted in biblical principles, and uplifting others in faith and purpose.</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-earth-50 rounded-lg p-5 shadow-sm border border-earth-100"
                  >
                    <span className="block font-semibold text-earth-800 mb-1 text-center text-[18px]">Strategic Stewardship</span>
                    <span className="text-earth-700">Encouraging intentional living and business success through structured, biblically guided planning that helps individuals maximise their time and resources.</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-earth-50 rounded-lg p-5 shadow-sm border border-earth-100"
                  >
                    <span className="block font-semibold text-earth-800 mb-1 text-center text-[18px]">Empowerment Through Wisdom</span>
                    <span className="text-earth-700">Providing educational and spiritual insights that equip individuals to take charge of their lives with clarity, confidence, and divine direction.</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-earth-50 rounded-lg p-5 shadow-sm border border-earth-100"
                  >
                    <span className="block font-semibold text-earth-800 mb-1 text-center text-[18px]">Integrity & Authenticity</span>
                    <span className="text-earth-700">Upholding truth, transparency, and genuine connection in every aspect of work, ensuring that teachings and creative outputs align with Christian values.</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-earth-50 rounded-lg p-5 shadow-sm border border-earth-100"
                  >
                    <span className="block font-semibold text-earth-800 mb-1 text-center text-[18px]">Purposeful Impact</span>
                    <span className="text-earth-700">Focused on inspiring transformation, guiding individuals to walk in their God-given purpose, and making a meaningful difference in both faith and business communities.</span>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  viewport={{ once: true }}
                >

                  <br /> <br />

                  <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold text-earth-700 mb-2 text-center">Who I Am</h3>
                  <p className="text-earth-600 leading-relaxed text-base sm:text-lg">
                    Sadra Madonna Linday is a Minister of the Gospel, an Award Winning Gospel Recording Artist and Author, she is a wife, mother, entrepreneur, motivational speaker, Worship Leader, a student of Theology and a student of Law. 
                    She is an enthusiastic creative who believes in using her talents and gifts for the furthering of the Gospel. She is married to Pastor Sherwayen Lindsay, and together they serve as Ministers within The Assemblies of the First Born Church International Jamaica. 
                    She is the mother of two sons, Micah and Joshua. She stands firmly by the scripture, as written in Matt. 14:28 "Lord bid me to come and I will walk upon water". She holds a Bachelor of Arts Degree in Literatures in English and Philosophy, a Bachelor of Laws Degree, 
                    a Certificate in Business Administration, a Certificate in Entrepreneurship and Personal Initiative as well a Certificate in Theology. It is her desire to be a beacon to God's people, young and old. Her hope is that her works will leave an indelible mark in the hearts 
                    and minds of those it reaches for generations to come.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="py-10 md:py-20 bg-green-300 border-t-4 border-rust-400">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title !text-black">Connect With Me</h2>
              <div className="card p-4 sm:p-6 border-2 border-rust-300">
                <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-auto">
                  <motion.a
                    href="https://www.youtube.com/@sadramadonna8549"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#E53E3E' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-red-600 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Listen on YouTube
                  </motion.a>
                  <motion.a
                    href="https://open.spotify.com/album/4K1uoz0QbmSbAXdkmlrQ33"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#1DB954' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-green-600 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Listen on Spotify
                  </motion.a>
                  <motion.a
                    href="https://music.apple.com/ru/artist/sadra-madonna-lindsay/1017438133"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#FA57C1' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-pink-500 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Listen on Apple Music
                  </motion.a>
                  <motion.a
                    href="https://www.boomplay.com/share/artist/2463934"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#FFDD00' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-yellow-500 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Listen on Boomplay
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/sadramadonna/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#E1306C' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-pink-600 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Add me on Instagram
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/SadraMadonna/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#1877F3' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-blue-700 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Add me on Facebook
                  </motion.a>
                  <motion.a
                    href="https://www.tiktok.com/@sadramadonna"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#010101' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-black font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Follow on TikTok
                  </motion.a>
                    <motion.a
                    href="mailto:sadramadonnalindsay@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 6, color: '#1877F3' }}
                    whileTap={{ scale: 0.97 }}
                    className="block text-lg text-earth-100 hover:text-red-600 font-medium py-2 px-3 rounded transition-colors duration-200 cursor-pointer"
                  >
                    Send Me an Email
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
