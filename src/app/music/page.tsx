'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

export default function MusicPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-earth-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-earth-800">
                Music
              </h1>
              <p className="text-xl text-earth-700 max-w-2xl mx-auto">
                Experience the soulful sounds of Sadra Madonna Lindsay's gospel music
              </p>
            </motion.div>
          </div>
        </section>

        {/* Latest Releases */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title">Latest Releases</h2>
              <div className="card p-6">
                <div className="bg-earth-100 p-4 rounded-lg">
                  <p className="text-earth-600 text-center">
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
        <section className="py-20 bg-earth-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title">Music Videos</h2>
              <div className="card p-6">
                <div className="bg-earth-100 p-4 rounded-lg">
                  <p className="text-earth-600 text-center">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="section-title">Upcoming Events</h2>
              <div className="card p-6">
                <p className="text-earth-600 text-center">
                  Stay tuned for upcoming performances and events!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 