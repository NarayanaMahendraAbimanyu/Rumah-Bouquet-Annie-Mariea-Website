'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize, Minimize, X } from 'lucide-react';
import AnimatedWords from '../components/AnimatedWords';

const bouquets = [
  '/images/bouquets/flower-bouquet-1.png',
  '/images/bouquets/flower-bouquet-2.png',
  '/images/bouquets/flower-bouquet-3.png',
  '/images/bouquets/graduation-bouquet-1.png',
  '/images/bouquets/money-bouquet-1.png',
  '/images/bouquets/snack-bouquet-1.png',
  '/images/bouquets/snack-bouquet-2.png',
];

export default function GalleryPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDownload = (src: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop() || 'bouquet.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closePopup = () => {
    setSelected(null);
    setIsFullscreen(false);
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#EFEFEF] min-h-screen">
      <div className="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-36 lg:pb-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedWords
            text="Gallery Bouquet"
            el="h1"
            className="font-bold italic text-2xl md:text-4xl lg:text-5xl text-[#FCA0B8] text-center"
            stagger={0.35}
          />

          <AnimatedWords
            text="Koleksi bouquet yang pernah kami buat"
            el="p"
            className="mt-3 text-center text-black/70 text-sm md:text-base"
            stagger={0.06}
          />

          <div className="mt-10 md:mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-5 [column-fill:balance]">
            {bouquets.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(src)}
                className="group relative mb-4 md:mb-5 break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Bouquet"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={closePopup}
            className={`fixed inset-0 z-100 bg-black/70 flex items-center justify-center ${
              isFullscreen ? 'p-0' : 'p-4 md:p-10'
            }`}
          >
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className={`relative bg-white overflow-hidden flex items-center justify-center transition-all duration-500 ease-in-out ${
                isFullscreen
                  ? 'w-screen h-screen rounded-none max-w-none max-h-none'
                  : 'rounded-2xl max-w-md w-full max-h-[85vh]'
              }`}
            >
              <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                <button
                  onClick={() => handleDownload(selected)}
                  className="group/btn w-10 h-10 rounded-full bg-white/90 hover:bg-[#FCA0B8] flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                  aria-label="Download"
                >
                  <Download size={18} className="text-black group-hover/btn:text-white transition-colors duration-200" />
                </button>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="group/btn w-10 h-10 rounded-full bg-white/90 hover:bg-[#FCA0B8] flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                  aria-label="Fullscreen"
                >
                  {isFullscreen ? (
                    <Minimize size={18} className="text-black group-hover/btn:text-white transition-colors duration-200" />
                  ) : (
                    <Maximize size={18} className="text-black group-hover/btn:text-white transition-colors duration-200" />
                  )}
                </button>
                <button
                  onClick={closePopup}
                  className="group/btn w-10 h-10 rounded-full bg-white/90 hover:bg-[#FCA0B8] flex items-center justify-center shadow-md transition-colors duration-200 cursor-pointer"
                  aria-label="Close"
                >
                  <X size={18} className="text-black group-hover/btn:text-white transition-colors duration-200" />
                </button>
              </div>

              <Image
                src={selected}
                alt="Bouquet full view"
                width={800}
                height={1000}
                className={`w-full h-auto object-contain transition-all duration-500 ${
                  isFullscreen ? 'max-h-screen' : 'max-h-[85vh]'
                }`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}