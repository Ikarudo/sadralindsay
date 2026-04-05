'use client';

import { FaInstagram, FaYoutube, FaTiktok, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const footerLinksLeft = [
    { href: '/', label: 'Home' },
    { href: './#about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/music', label: 'Music' },
  ];

  const footerLinksRight = [
    { href: '/store', label: 'Store' },
    { href: './#connect', label: 'Connect' },
    { href: '/cart', label: 'Cart' },
  ];

  const socialLinks = [
    { href: 'https://www.facebook.com/SadraMadonna/', icon: FaFacebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/sadramadonna/?hl=en', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.youtube.com/@sadramadonna8549', icon: FaYoutube, label: 'YouTube' },
    { href: 'https://www.tiktok.com/@sadramadonna', icon: FaTiktok, label: 'TikTok' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#111] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Logo + Nav Links */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-8">
              <Link href="/" className="inline-block">
                <Image
                  src="/SML Logo TBG.svg"
                  alt="SML Logo"
                  width={60}
                  height={60}
                  className="w-14 h-14 brightness-0 invert"
                />
              </Link>
            </div>

            {/* Nav Links in two columns */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-0 max-w-sm">
              <div className="space-y-0">
                {footerLinksLeft.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase text-white/80 hover:text-[#E97B4A] transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-0">
                {footerLinksRight.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase text-white/80 hover:text-[#E97B4A] transition-colors duration-300 py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="font-['Oswald'] font-bold text-lg tracking-[0.1em] uppercase mb-4">
              Stay Connected
            </h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Stay up to date on the latest features and releases by following on social media.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-[#E97B4A] hover:bg-[#E97B4A]/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Sadra Madonna Lindsay. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
