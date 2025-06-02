'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/music', label: 'Music' },
    { href: '/books', label: 'Books' },
    { href: '/#about', label: 'About' },
    { href: '/#connect', label: 'Connect' },
  ];

  // Only highlight as active for main pages, not hash links
  const isActive = (href: string) => {
    return (
      (href === '/' && pathname === '/') ||
      (href === '/music' && pathname === '/music') ||
      (href === '/books' && pathname === '/books')
    );
  };

  // Cream/eggshell color
  const cream = '#F8F5F2';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-16 h-16 flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/SML Logo TBG.SVG"
              alt="SML Logo"
              style={{ width: '48px', height: '48px', objectFit: 'contain', display: 'block' }}
              draggable="false"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-300 ${
                  isActive(link.href) ? 'font-semibold' : ''
                }`}
                style={{
                  color: isScrolled ? '#6B4F27' : cream,
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-earth-700 transform origin-left transition-transform duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 mb-1.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? '#6B4F27' : cream }}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? '#6B4F27' : cream }}></div>
            <div className={`w-6 h-0.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? '#6B4F27' : cream }}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  isActive(link.href) ? 'font-semibold' : ''
                }`}
                style={{
                  color: isScrolled ? '#6B4F27' : cream,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 