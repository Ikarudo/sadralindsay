'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { items } = useCart ? useCart() : { items: [] };
  const cartCount = items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const { user, signOut, loading: userLoading } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    if (window && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: 'Signed Out' } }));
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/music', label: 'Music' },
    { href: '/books', label: 'Books' },
    { href: '/store', label: 'Store' },
    { href: '/cart', label: 'Cart', icon: <FaShoppingCart className="inline-block mb-1 mr-1" /> },
    // Insert Checkout link if user is logged in
    ...(user ? [{ href: '/checkout', label: 'Checkout' }] : []),
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="/SML Logo TBG.SVG"
              alt="SML Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              draggable="false"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-4.5 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-300 px-4 py-2 rounded-lg font-semibold text-white bg-transparent hover:bg-earth-400 hover:text-white border border-transparent text-lg xl:text-xl ${
                  isActive(link.href) ? 'bg-earth-400 text-white border-earth-300' : 'text-earth-700'
                }`}
                style={{
                  color: isActive(link.href) ? 'white' : (isScrolled ? 'white' : cream),
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
            {/* User Auth Button */}
            {!userLoading && user ? (
              <Link
                href="/profile"
                className="ml-2 px-4 py-2 rounded-lg font-semibold text-white bg-earth-400 hover:bg-earth-500 transition-colors duration-200 border border-earth-300 text-lg xl:text-xl"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/signin"
                className="ml-2 px-4 py-2 rounded-lg font-semibold text-white bg-earth-400 hover:bg-earth-500 transition-colors duration-200 border border-earth-300 text-lg xl:text-xl"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
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
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-2 py-4 sm:py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 px-4 py-2 rounded-lg font-semibold text-white bg-transparent hover:bg-earth-400 hover:text-white border border-transparent text-lg xl:text-xl ${
                  isActive(link.href) ? 'bg-earth-400 text-white border-earth-300' : 'text-earth-700'
                }`}
                style={{
                  color: isActive(link.href) ? 'white' : (isScrolled ? 'white' : cream),
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
            {/* User Auth Button for mobile */}
            {!userLoading && user ? (
              <Link
                href="/profile"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-2 rounded-lg font-semibold text-white bg-earth-400 hover:bg-earth-500 transition-colors duration-200 border border-earth-300 text-lg xl:text-xl"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-2 rounded-lg font-semibold text-white bg-earth-400 hover:bg-earth-500 transition-colors duration-200 border border-earth-300 text-lg xl:text-xl"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 