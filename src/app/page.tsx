'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

function MainContent() {
  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/hero-bg.jpg")',
              opacity: 0.5,
            }}
          />
          
          {/* Content */}
          <div className="relative container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-earth-800">
                Sadra Madonna Lindsay
              </h1>
              <p className="text-xl md:text-2xl text-earth-700 mb-8">
                Author Gospel Recording Artist • Award Winning Author • Entrepreneur
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About</h2>
              <div className="max-w-3xl mx-auto">
                <div className="card p-8">
                  <p className="text-lg text-earth-700 leading-relaxed">
                    {/* Add biography here */}
                    Biography coming soon...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Connect Section */}
        <section id="connect" className="py-20 bg-earth-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Connect</h2>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="#"
                  className="text-earth-700 hover:text-earth-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Instagram
                </motion.a>
                <motion.a
                  href="#"
                  className="text-earth-700 hover:text-earth-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Twitter
                </motion.a>
                <motion.a
                  href="#"
                  className="text-earth-700 hover:text-earth-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Facebook
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default function Home() {
  return <MainContent />;
}
