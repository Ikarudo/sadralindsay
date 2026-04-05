'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  const cartCount = items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const { user, loading: userLoading } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: './#about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/music', label: 'Music' },
    { href: '/store', label: 'Store' },
    { href: './#connect', label: 'Connect' },
  ];

  const isActive = (href: string) => {
    return (
      (href === '/' && pathname === '/') ||
      (href === '/music' && pathname === '/music') ||
      (href === '/books' && pathname === '/books') ||
      (href === '/store' && pathname === '/store')
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/SML Logo TBG.svg"
              alt="SML Logo"
              fill
              className={`object-contain transition-all duration-300 ${isScrolled ? 'brightness-0' : ''}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300 relative
                  ${isScrolled
                    ? (isActive(link.href) ? 'text-[#E97B4A]' : 'text-[#2d2d2d] hover:text-[#E97B4A]')
                    : (isActive(link.href) ? 'text-[#E97B4A]' : 'text-white hover:text-[#E97B4A]')
                  }
                `}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E97B4A]" />
                )}
              </Link>
            ))}

            {/* Cart */}
            <Link
              href="/cart"
              className={`relative font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase px-4 py-2 transition-all duration-300
                ${isScrolled ? 'text-[#2d2d2d] hover:text-[#E97B4A]' : 'text-white hover:text-[#E97B4A]'}
              `}
            >
              <FaShoppingCart className="inline-block mb-0.5 mr-1" />
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E97B4A] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">{cartCount}</span>
              )}
            </Link>

            {/* CTA Button - Sign In / Profile */}
            {!userLoading && user ? (
              <Link
                href="/profile"
                className="ml-3 px-6 py-2.5 rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:shadow-[#E97B4A]/30"
              >
                Profile
              </Link>
            ) : (
              <Link
                href="/signin"
                className="ml-3 px-6 py-2.5 rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300 hover:shadow-lg hover:shadow-[#E97B4A]/30"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] transition-all duration-300 ${isScrolled ? 'bg-[#2d2d2d]' : 'bg-white'} ${isMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
            <span className={`block w-6 h-[2px] mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-[#2d2d2d]' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-[#2d2d2d]' : 'bg-white'} ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-b-2xl shadow-xl py-4 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase px-4 py-3 transition-colors duration-300
                  ${isActive(link.href) ? 'text-[#E97B4A]' : 'text-[#2d2d2d] hover:text-[#E97B4A]'}
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="block font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase px-4 py-3 text-[#2d2d2d] hover:text-[#E97B4A] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaShoppingCart className="inline-block mb-0.5 mr-1" />
              Cart
              {cartCount > 0 && (
                <span className="ml-2 bg-[#E97B4A] text-white text-[10px] rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
              )}
            </Link>
            <div className="px-4 pt-2 pb-1">
              {!userLoading && user ? (
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  href="/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 rounded-full font-['Oswald'] font-semibold text-sm tracking-[0.15em] uppercase bg-[#E97B4A] text-white hover:bg-[#D4622E] transition-all duration-300"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
