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
                src="/Frontpagepic2.png"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full flex flex-col items-center justify-center pt-16 md:pt-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white drop-shadow-xl tracking-tight text-center mb-4">
                Sadra Madonna Lindsay
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl font-body text-white drop-shadow-lg text-center">
                Gospel Artist • Author • Entrepreneur
              </p>
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
              className="max-w-5xl mx-auto"
            >
              <h2 className="section-title !text-black mb-10">Learn About Me</h2>
              <div className="flex flex-col mt-[50px] md:flex-row items-center md:items-start gap-10 md:gap-16">
                {/* Left: About Me Image */}
                
                <div className="flex-1 w-100 md:w-1/2 flex justify-center mt-[100px] items-center">
                  <Image
                    src="/AboutMePic.png"
                    alt="About Me"
                    width={420}
                    height={600}
                    className="object-contain rounded-xl shadow-none border-none bg-transparent max-h-[900px] w-auto"
                  />
                </div>
                {/* Right: All text content */}
                <div className="flex-1 w-full md:w-1/2 text-left">
                  <p className="text-2xl font-bold text-pink-700 mb-6">Hi Everyone!</p>
                  <p className="text-base sm:text-lg md:text-xl text-earth-800 mb-6">
                    I'm Sadra Madonna Lindsay. Welcome to my world, where God's grace abounds and every experience is a blessing.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-earth-800 mb-6">
                    My Career: <span className="font-normal text-earth-800">Gospel Recording Artist, Award Winning Author and Entrepreneur.</span>
                  </p>
                  <ul className="space-y-4 mb-8 list-none p-0">
                    <li className="text-base sm:text-lg text-earth-700">Faith-Driven Excellence: Committed to producing work that reflects a spirit of excellence, rooted in biblical principles, and uplifting others in faith and purpose.</li>
                    <li className="text-base sm:text-lg text-earth-700">Strategic Stewardship: Encouraging intentional living and business success through structured, biblically guided planning that helps individuals maximise their time and resources.</li>
                    <li className="text-base sm:text-lg text-earth-700">Empowerment Through Wisdom: Providing educational and spiritual insights that equip individuals to take charge of their lives with clarity, confidence, and divine direction.</li>
                  </ul>
                   </div>
              </div>
               <p className="text-base sm:text-lg text-earth-700">Integrity & Authenticity: Upholding truth, transparency, and genuine connection in every aspect of work, ensuring that teachings and creative outputs align with Christian values.</p>
               <p className="text-base sm:text-lg text-earth-700">Purposeful Impact: Focused on inspiring transformation, guiding individuals to walk in their God-given purpose, and making a meaningful difference in both faith and business communities.</p>      
            </motion.div>
          </div>
          <div className='container mx-auto px-2 sm:px-4 mt-10 max-w-5xl'>
            <h3 className="text-xl sm:text-2xl text-center md:text-[28px] font-semibold text-earth-700 mb-2">Who I Am</h3>
                  <p className="text-earth-600 leading-relaxed text-base sm:text-lg">
                    Sadra Madonna Lindsay is a Minister of the Gospel, an Award Winning Gospel Recording Artist and Author, she is a wife, mother, entrepreneur, motivational speaker, Worship Leader, a student of Theology and a student of Law. 
                    She is an enthusiastic creative who believes in using her talents and gifts for the furthering of the Gospel. She is married to Pastor Sherwayen Lindsay, and together they serve as Ministers within The Assemblies of the First Born Church International Jamaica. 
                    She is the mother of two sons, Micah and Joshua. She stands firmly by the scripture, as written in Matt. 14:28 "Lord bid me to come and I will walk upon water". She holds a Bachelor of Arts Degree in Literatures in English and Philosophy, a Bachelor of Laws Degree, 
                    a Certificate in Business Administration, a Certificate in Entrepreneurship and Personal Initiative as well a Certificate in Theology. It is her desire to be a beacon to God's people, young and old. Her hope is that her works will leave an indelible mark in the hearts 
                    and minds of those it reaches for generations to come.
                  </p>
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
