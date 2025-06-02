'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20 bg-earth-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-green-100 via-earth-100 to-earth-200 border-b-2 border-green-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-800 font-heading drop-shadow-lg">
                Music
              </h1>
              <p className="text-xl text-green-700 max-w-2xl mx-auto font-body">
                Experience the soulful sounds of Sadra Madonna Lindsay's gospel music
              </p>
            </motion.div>
          </div>
        </section>

        {/* Latest Releases */}
        <section className="py-20 bg-earth-100 border-b-2 border-earth-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title text-earth-700">Latest Releases</h2>
              <div className="card p-6 bg-earth-50 border border-earth-200">
                <div className="bg-earth-100 p-4 rounded-lg">
                  <p className="text-earth-600 text-center font-body">
                    Spotify integration coming soon. Please check back later!
                  </p>
                  {/* Replace with actual Spotify embed when available */}
                  {/* <iframe
                    src="https://open.spotify.com/embed/artist/YOUR_SPOTIFY_ID"
                    width="100%"
                    height="380"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Music Videos */}
        <section className="py-20 bg-green-100 border-b-2 border-green-200">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title text-green-700">Music Videos</h2>
              <div className="card p-6 bg-green-50 border border-green-200">
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-700 text-center font-body">
                    Music videos coming soon. Please check back later!
                  </p>
                  {/* Replace with actual YouTube embed when available */}
                  {/* <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-earth-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title text-earth-700">Upcoming Events</h2>
              <div className="card p-6 bg-earth-50 border border-earth-200">
                <p className="text-earth-600 text-center font-body">
                  Stay tuned for upcoming performances and events!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 