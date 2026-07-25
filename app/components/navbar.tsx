'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-enter fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-in-out ${
        isScrolled ? 'p-0' : 'p-4 md:p-6 lg:p-8'
      }`}
    >
      <div
        className={`w-full bg-[#FADDE6] px-5 py-4 md:px-8 md:py-5 lg:px-10 transition-all duration-500 ease-in-out shadow-lg ${
          isScrolled ? 'max-w-full rounded-none shadow-md' : 'max-w-6xl rounded-2xl'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="italic font-extrabold text-lg md:text-xl lg:text-2xl tracking-tight"
          >
            <span style={{ color: '#FCA0B8' }}>Annie</span>
            <span style={{ color: '#FFFFFF' }}>Bouquet.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/gallery'
                  ? pathname === '/gallery'
                  : pathname === '/' && activeHash === link.href.replace('/', '');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm lg:text-base transition-colors duration-200"
                    style={{
                      color: isActive ? '#FCA0B8' : 'rgba(0,0,0,0.7)',
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} color="#000000" /> : <Menu size={24} color="#000000" />}
          </button>
        </div>

        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 mt-5 pb-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/gallery'
                  ? pathname === '/gallery'
                  : pathname === '/' && activeHash === link.href.replace('/', '');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm transition-colors duration-200"
                    style={{
                      color: isActive ? '#FCA0B8' : 'rgba(0,0,0,0.7)',
                      fontWeight: isActive ? 700 : 400,
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}