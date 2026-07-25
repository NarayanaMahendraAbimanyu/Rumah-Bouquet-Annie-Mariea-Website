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
    <div className="text-center">
      <div className="max-w-6xl mx-auto">
        <AnimatedWords
          text="Gallery Bouquet"
          el="h1"
          className="font-bold italic text-4xl text-[#FCA0B8]"
          stagger={0.15}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-14 relative w-screen left-1/2 ml-[-50vw] overflow-hidden"
      >
        <div className="animate-marquee flex items-center gap-8 md:gap-16 w-max">
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
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <Link href="/gallery">
          <button className="group mt-10 md:mt-14 inline-flex items-center gap-1.5 bg-[#FCA0B8] text-white font-normal px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base transition-transform duration-300 hover:scale-105">
            <span>Lihat lebih banyak</span>
            <span className="inline-flex">
              <span>&gt;</span>
              <span className="w-0 opacity-0 group-hover:w-2.5 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                &gt;
              </span>
              <span className="w-0 opacity-0 group-hover:w-2.5 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                &gt;
              </span>
            </span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
}