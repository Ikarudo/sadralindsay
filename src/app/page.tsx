'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { FaYoutube, FaSpotify, FaApple, FaInstagram, FaFacebook, FaTiktok, FaMusic, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  const { user } = useUser();
  const router = useRouter();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleMailingListSubscribe = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!user) {
      router.push('/signin');
      return;
    }

    setIsSubscribing(true);

    try {
      await addDoc(collection(db, 'mailingList'), {
        email: user.email,
        username: user.displayName || 'User',
        subscribedAt: serverTimestamp(),
        userId: user.uid
      });

      toast.success('Successfully subscribed to mailing list! Thank you for joining!', {
        duration: 5000,
      });
    } catch (error) {
      console.error('Error subscribing to mailing list:', error);
      toast.error('Failed to subscribe to mailing list. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const cards = [
    {
      href: '/music',
      image: '/musicpic1.png',
      label: 'Music',
    },
    {
      href: '/books',
      image: '/aboutbookspic.jpg',
      label: 'Books',
    },
    {
      href: '/store',
      image: '/GardenGoldLogo.png',
      label: 'Store',
    },
    {
      href: './#connect',
      image: '/musicpic2.png',
      label: 'Connect',
    },
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* ============ HERO SECTION ============ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Frontpagepic2.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#217a2b]/35 via-[#E97B4A]/15 to-[#1a1a1a]/50" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-4xl mx-auto pt-20"
            >
              <h1 className="font-['Oswald'] font-bold text-white uppercase leading-[0.95] tracking-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                drop-shadow-2xl mb-6">
                Discover the Gift of Faith with Sadra Lindsay
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                God created you <em>on purpose</em>, with <em>purpose</em>.
                <br className="hidden sm:block" />
                Gospel Artist. Author. Entrepreneur.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="./#about"
                  className="inline-block px-10 py-4 rounded-full font-['Oswald'] font-semibold text-base tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300 hover:shadow-xl hover:shadow-[#E97B4A]/30 hover:-translate-y-1"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* ============ CARDS SECTION ============ */}
        <section className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {cards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={card.href} className="group block text-center">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 sm:mb-6 bg-gradient-to-br from-[#E97B4A]/10 to-[#217a2b]/10 shadow-sm group-hover:shadow-xl transition-all duration-500">
                      <Image
                        src={card.image}
                        alt={card.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#E97B4A]/0 to-transparent group-hover:from-[#E97B4A]/10 transition-all duration-500" />
                    </div>
                    <h3 className="card-label text-lg sm:text-xl md:text-2xl text-[#3a3a3a] group-hover:text-[#E97B4A] transition-colors duration-300 decoration-[#E97B4A]/60">
                      {card.label}
                    </h3>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ HI FRIEND / ABOUT SECTION ============ */}
        <section id="about" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left: Green background with text */}
            <div className="bg-gradient-to-br from-[#217a2b] via-[#2a8f35] to-[#1a6622] flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-lg"
              >
                <h2 className="font-['Oswald'] font-bold text-white uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6">
                  Hi, Friend!
                </h2>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
                  I&apos;m Sadra Madonna Lindsay. Welcome to my world, where God&apos;s grace abounds and every experience is a blessing.
                </p>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8">
                  Gospel Recording Artist, Award Winning Author and Entrepreneur &mdash; committed to producing work that reflects a spirit of excellence, rooted in biblical principles, and uplifting others in faith and purpose.
                </p>
                <Link
                  href="./#who-i-am"
                  className="inline-block px-8 py-3.5 rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  Read More
                </Link>
              </motion.div>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2">
              <Image
                src="/AboutMePic.png"
                alt="Sadra Madonna Lindsay"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* ============ WHO I AM SECTION ============ */}
        <section id="who-i-am" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#faf8f6] to-[#f5f0eb]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {/* Logo */}
              <div className="flex justify-center mb-10">
                <Image
                  src="/SML Logo v1.svg"
                  alt="SML Logo"
                  width={200}
                  height={200}
                  className="w-40 sm:w-48 md:w-56 h-auto"
                />
              </div>

              <h2 className="font-['Oswald'] font-bold text-[#2d2d2d] uppercase text-3xl sm:text-4xl md:text-5xl text-center mb-10 tracking-wide">
                Who I Am
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E97B4A] mt-2.5 flex-shrink-0" />
                    <p className="text-[#444] leading-relaxed">
                      <strong className="text-[#2d2d2d]">Faith-Driven Excellence:</strong> Committed to producing work that reflects a spirit of excellence, rooted in biblical principles, and uplifting others in faith and purpose.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#217a2b] mt-2.5 flex-shrink-0" />
                    <p className="text-[#444] leading-relaxed">
                      <strong className="text-[#2d2d2d]">Strategic Stewardship:</strong> Encouraging intentional living and business success through structured, biblically guided planning.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E97B4A] mt-2.5 flex-shrink-0" />
                    <p className="text-[#444] leading-relaxed">
                      <strong className="text-[#2d2d2d]">Empowerment Through Wisdom:</strong> Providing educational and spiritual insights that equip individuals to take charge of their lives with clarity and confidence.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#217a2b] mt-2.5 flex-shrink-0" />
                    <p className="text-[#444] leading-relaxed">
                      <strong className="text-[#2d2d2d]">Purposeful Impact:</strong> Focused on inspiring transformation, guiding individuals to walk in their God-given purpose.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border-l-4 border-l-[#E97B4A]/40 border border-transparent">
                <p className="text-[#444] leading-relaxed text-sm sm:text-base">
                  Sadra Madonna Lindsay is a Minister of the Gospel, an Award Winning Gospel Recording Artist and Author, she is a wife, mother, entrepreneur, motivational speaker, Worship Leader, a student of Theology and a student of Law.
                  She is an enthusiastic creative who believes in using her talents and gifts for the furthering of the Gospel. She is married to Pastor Sherwayen Lindsay, and together they serve as Ministers within The Assemblies of the First Born Church International Jamaica.
                  She is the mother of two sons, Micah and Joshua. She stands firmly by the scripture, as written in Matt. 14:28 &quot;Lord bid me to come and I will walk upon water&quot;. She holds a Bachelor of Arts Degree in Literatures in English and Philosophy, a Bachelor of Laws Degree,
                  a Certificate in Business Administration, a Certificate in Entrepreneurship and Personal Initiative as well a Certificate in Theology. It is her desire to be a beacon to God&apos;s people, young and old. Her hope is that her works will leave an indelible mark in the hearts
                  and minds of those it reaches for generations to come.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============ CONNECT SECTION ============ */}
        <section id="connect" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1a1a1a] via-[#1e2a1e] to-[#1a1a1a]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-['Oswald'] font-bold text-white uppercase text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">
                Connect With Me
              </h2>
              <p className="text-white/60 mb-12 text-base sm:text-lg">
                Find me on your favorite platform
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
                {[
                  { name: 'YouTube', href: 'https://www.youtube.com/@sadramadonna8549', color: '#FF0000', icon: FaYoutube },
                  { name: 'Spotify', href: 'https://open.spotify.com/album/4K1uoz0QbmSbAXdkmlrQ33', color: '#1DB954', icon: FaSpotify },
                  { name: 'Apple Music', href: 'https://music.apple.com/ru/artist/sadra-madonna-lindsay/1017438133', color: '#FA57C1', icon: FaApple },
                  { name: 'Boomplay', href: 'https://www.boomplay.com/share/artist/2463934', color: '#FFDD00', icon: FaMusic },
                  { name: 'Instagram', href: 'https://www.instagram.com/sadramadonna/?hl=en', color: '#E1306C', icon: FaInstagram },
                  { name: 'Facebook', href: 'https://www.facebook.com/SadraMadonna/', color: '#1877F3', icon: FaFacebook },
                  { name: 'TikTok', href: 'https://www.tiktok.com/@sadramadonna', color: '#fff', icon: FaTiktok },
                ].map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-5 transition-all duration-300 hover:border-white/30 hover:bg-white/10 group"
                  >
                    <platform.icon size={24} style={{ color: platform.color }} />
                    <span
                      className="font-['Oswald'] font-semibold text-xs tracking-[0.1em] uppercase transition-colors duration-300"
                      style={{ color: platform.color }}
                    >
                      {platform.name}
                    </span>
                  </motion.a>
                ))}

                {/* Mailing List Button */}
                <motion.a
                  href="#"
                  onClick={handleMailingListSubscribe}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-5 transition-all duration-300 group ${
                    isSubscribing
                      ? 'border-[#E97B4A]/50 bg-[#E97B4A]/20'
                      : 'border-[#E97B4A]/30 bg-[#E97B4A]/10 hover:border-[#E97B4A]/60 hover:bg-[#E97B4A]/20'
                  }`}
                >
                  <FaEnvelope size={24} className="text-[#E97B4A]" />
                  <span className="font-['Oswald'] font-semibold text-xs tracking-[0.1em] uppercase text-[#E97B4A]">
                    {isSubscribing ? 'Subscribing...' : 'Mailing List'}
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
