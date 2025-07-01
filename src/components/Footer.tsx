import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-earth-100 border-t-[6px] border-earth-200 pt-6 sm:pt-8 md:pt-[26px]">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mb-4 sm:mb-6">
          <motion.a
            href="https://www.instagram.com/sadramadonna/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #E1306C' }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-600"
          >
            <FaInstagram size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@sadramadonna8549"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            whileHover={{ scale: 1.2, rotate: 8, boxShadow: '0 0 16px #FF0000' }}
            whileTap={{ scale: 0.95 }}
            className="text-red-600"
          >
            <FaYoutube size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </motion.a>
          <motion.a
            href="https://www.tiktok.com/@sadramadonna"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #010101' }}
            whileTap={{ scale: 0.95 }}
            className="text-black"
          >
            <FaTiktok size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/SadraMadonna/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            whileHover={{ scale: 1.2, rotate: 8, boxShadow: '0 0 16px #1877F3' }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-700"
          >
            <FaFacebook size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
          </motion.a>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-earth-500 mb-2 sm:mb-3 text-center">Listen on</span>
          <div className="flex gap-6 sm:gap-8 md:gap-10">
            <motion.a
              href="https://open.spotify.com/album/4K1uoz0QbmSbAXdkmlrQ33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #1DB954' }}
              whileTap={{ scale: 0.95 }}
              className="text-green-500"
            >
              <FaSpotify size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
            </motion.a>
            <motion.a
              href="https://music.apple.com/ru/artist/sadra-madonna-lindsay/1017438133"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple Music"
              whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #FA57C1' }}
              whileTap={{ scale: 0.95 }}
              className="text-pink-400"
            >
              <FaApple size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
            </motion.a>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 text-xs text-earth-400 text-center px-4">
          &copy; {new Date().getFullYear()} Sadra Madonna Lindsay. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 