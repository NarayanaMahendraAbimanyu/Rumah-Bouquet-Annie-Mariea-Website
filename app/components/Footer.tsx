'use client';

import Link from 'next/link';
import { ArrowUp } from 'lucide-react';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.28c1.4.77 2.99 1.19 4.79 1.19h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.86 14.29c-.24.68-1.4 1.32-1.93 1.35-.5.03-1 .23-3.37-.7-2.85-1.13-4.68-4.02-4.82-4.2-.14-.18-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.37-.22.61-.13.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.11.07.66-.17 1.34z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#ffffff" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="#ffffff">
      <path d="M13.5 22v-8.5h2.85l.43-3.32H13.5V8.05c0-.96.27-1.62 1.64-1.62h1.76V3.47C16.6 3.4 15.55 3.3 14.33 3.3c-2.53 0-4.27 1.55-4.27 4.38v2.5H7.2v3.32h2.86V22h3.44z" />
    </svg>
  );
}

const footerLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About Us', href: '/#about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#FADDE6] px-6 lg:px-16 pt-14 pb-10 md:pt-16 md:pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="italic font-extrabold text-lg md:text-xl">
            <span className="text-[#FCA0B8]">Annie</span>
            <span className="text-white">Bouquet.</span>
          </p>

          <p className="mt-4 text-white/90 text-sm leading-relaxed max-w-sm">
            Punya ide bouquet sendiri? Atau bingung mau konsep seperti apa? Tenang, di{' '}
            <span className="font-bold italic text-[#FCA0B8]">Rumah Bouquet Annie Mariea</span>{' '}
            kamu bebas request warna, isi, dan tema sesuai selera!
          </p>

          <div className="flex items-center gap-3 mt-5">
            <span className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center">
              <WhatsAppIcon />
            </span>
            <span className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center">
              <InstagramIcon />
            </span>
            <span className="w-9 h-9 rounded-full bg-white/40 flex items-center justify-center">
              <FacebookIcon />
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-7 inline-flex items-center gap-2 border-2 border-[#FCA0B8] text-[#FCA0B8] font-bold text-sm px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-[#FCA0B8] hover:text-white ease-in-out"
          >
            <ArrowUp size={16} />
            Back to top
          </button>
        </div>

        <div>
          <p className="font-bold text-white text-base">Info</p>
          <ul className="mt-4 flex flex-col gap-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/90 text-sm hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-5 md:mt-12 text-center font-bold text-white text-xs md:text-sm">
        Copyright 2022 © Rumah Bouqueut Annie Mariea
      </p>
    </footer>
  );
}