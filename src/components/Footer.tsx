import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full bg-earth-100 border-t-[6px] border-earth-200 pt-[16px]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10 mb-4">
          <motion.a
            href="https://www.instagram.com/sadramadonna/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #E1306C' }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-600"
          >
            <FaInstagram size={36} />
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
            <FaYoutube size={36} />
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
            <FaTiktok size={36} />
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
            <FaFacebook size={36} />
          </motion.a>
        </div>
        <div className="flex flex-col items-center">
          <span className="uppercase text-xs tracking-widest text-earth-500 mb-2">Listen on</span>
          <div className="flex gap-10">
            <motion.a
              href="https://open.spotify.com/album/4K1uoz0QbmSbAXdkmlrQ33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify"
              whileHover={{ scale: 1.2, rotate: -8, boxShadow: '0 0 16px #1DB954' }}
              whileTap={{ scale: 0.95 }}
              className="text-green-500"
            >
              <FaSpotify size={36} />
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
              <FaApple size={36} />
            </motion.a>
            {/* Boomplay icon is not available in react-icons, so you may add a placeholder or custom SVG if needed */}
            {/* <motion.a ...> ... </motion.a> */}
          </div>
        </div>
        <div className="mt-6 text-xs text-earth-400 text-center">
          &copy; {new Date().getFullYear()} Sadra Madonna Lindsay. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 