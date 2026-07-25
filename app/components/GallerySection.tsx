'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedWords from './AnimatedWords';

const bouquets = [
  '/images/bouquets/flower-bouquet-1-removebg-preview.png',
  '/images/bouquets/flower-bouquet-2-removebg-preview.png',
  '/images/bouquets/flower-bouquet-3-removebg-preview.png',
  '/images/bouquets/graduation-bouquet-1-removebg-preview.png',
  '/images/bouquets/money-bouquet-1-removebg-preview.png',
  '/images/bouquets/snack-bouquet-1-removebg-preview.png',
  '/images/bouquets/snack-bouquet-2-removebg-preview.png',
];

const loopBouquets = [...bouquets, ...bouquets];

export default function GallerySection() {
  return (
    <div className="max-w-6xl mx-auto text-center">
      <AnimatedWords
        text="Gallery"
        el="h1"
        className="font-bold italic text-4xl text-[#FCA0B8]"
        stagger={0.15}
      />

      <div className="mt-10 md:mt-14 relative w-full overflow-hidden [mask-:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex items-center gap-6 md:gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          {loopBouquets.map((src, i) => (
            <div key={i} className="w-28 md:w-40 lg:w-48 shrink-0">
              <Image
                src={src}
                alt="Bouquet"
                width={220}
                height={280}
                className="w-full h-auto drop-shadow-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <Link href="/gallery">
        <button className="group mt-10 md:mt-14 inline-flex items-center gap-1.5 bg-[#FCA0B8] text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base transition-transform duration-300 hover:scale-105">
          <span>Lihat lebih banyak</span>
          <span className="inline-flex">
            <span>&gt;</span>
            <span className="w-0 opacity-0 group-hover:w-2.5 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
              &gt;
            </span>
          </span>
        </button>
      </Link>
    </div>
  );
}