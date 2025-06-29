'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { items } = useCart ? useCart() : { items: [] };
  const cartCount = items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
    { href: '/store', label: 'Store' },
    { href: '/cart', label: 'Cart', icon: <FaShoppingCart className="inline-block mb-1 mr-1" /> },
    { href: '/#about', label: 'About' },
    { href: '/#connect', label: 'Connect' },
  ];

  // Only highlight as active for main pages, not hash links
  const isActive = (href: string) => {
    return (
      (href === '/' && pathname === '/') ||
      (href === '/music' && pathname === '/music') ||
      (href === '/books' && pathname === '/books') ||
      (href === '/store' && pathname === '/store')
    );
  };

  // Cream/eggshell color
  const cream = '#F8F5F2';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ee8e5a] backdrop-blur-sm shadow-lg'
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
                } drop-shadow-[0_1.5px_0_rgba(0,0,0,0.85)]`}
                style={{
                  color: isScrolled ? 'white' : cream,
                  WebkitTextStroke: '0.5px #2d1a0b',
                  textShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
              >
                {link.icon}
                {link.label}
                {link.href === '/cart' && cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-amber-600 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow-lg">{cartCount}</span>
                )}
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
            <div className={`w-6 h-0.5 mb-1.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? 'white' : cream }}></div>
            <div className={`w-6 h-0.5 mb-1.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? 'white' : cream }}></div>
            <div className={`w-6 h-0.5 transition-transform duration-300 ${isScrolled ? 'bg-earth-700' : ''}`} style={{ background: isScrolled ? 'white' : cream }}></div>
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
                } drop-shadow-[0_1.5px_0_rgba(0,0,0,0.85)]`}
                style={{
                  color: isScrolled ? 'white' : cream,
                  WebkitTextStroke: '0.5px #2d1a0b',
                  textShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
                {link.href === '/cart' && cartCount > 0 && (
                  <span className="ml-2 bg-amber-600 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow-lg">{cartCount}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 