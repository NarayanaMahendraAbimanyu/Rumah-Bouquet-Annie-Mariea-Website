'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedWords from './AnimatedWords';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.44 1.27 4.89L2 22l5.25-1.28c1.4.77 2.99 1.19 4.79 1.19h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.86 14.29c-.24.68-1.4 1.32-1.93 1.35-.5.03-1 .23-3.37-.7-2.85-1.13-4.68-4.02-4.82-4.2-.14-.18-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.81 2 .88 2.14.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.37-.22.61-.13.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.11.07.66-.17 1.34z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff">
      <path d="M13.5 22v-8.5h2.85l.43-3.32H13.5V8.05c0-.96.27-1.62 1.64-1.62h1.76V3.47C16.6 3.4 15.55 3.3 14.33 3.3c-2.53 0-4.27 1.55-4.27 4.38v2.5H7.2v3.32h2.86V22h3.44z" />
    </svg>
  );
}

const contactList = [
  {
    Icon: WhatsAppIcon,
    label: '+62 896 6067 0803',
    href: 'https://wa.me/6289660670803',
  },
  {
    Icon: InstagramIcon,
    label: 'Anniemariea Olshop',
    href: 'https://instagram.com/anniemariea.olshop',
  },
  {
    Icon: FacebookIcon,
    label: 'Annie Mariea',
    href: 'https://facebook.com/anniemariea',
  },
];

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl mx-auto bg-[#FCA0B8] rounded-[2.5rem] px-6 py-10 md:px-12 md:py-14 flex flex-col md:grid md:grid-cols-2 gap-10 items-center"
    >
      <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
        <AnimatedWords
          text="Hubungi Kami"
          el="h2"
          className="font-bold italic text-2xl md:text-3xl text-white"
          stagger={0.12}
        />

        <div className="mt-6 md:mt-8 flex flex-col gap-4 w-full max-w-sm md:max-w-none">
          {contactList.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-4 bg-white/20 rounded-2xl px-5 py-3.5 transition-colors duration-300 hover:bg-white/30"
              >
                <span className="w-9 h-9 rounded-xl bg-white/25 flex items-center justify-center shrink-0">
                  <Icon />
                </span>
                <span className="font-bold italic text-white text-sm md:text-base">{item.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full aspect-square max-w-55 md:max-w-xs mx-auto bg-white/25 rounded-tl-2xl rounded-tr-[6rem] rounded-bl-[6rem] rounded-br-2xl flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-3/4 h-3/4">
          <Image
            src="/images/bouquets/flower-bouquet-3-removebg-preview.png"
            alt="Hubungi Rumah Bouquet Annie Mariea"
            fill
            className="object-contain drop-shadow-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}