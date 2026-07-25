"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedWords from "./AnimatedWords";
import Counter from './Counter';

export default function HeroSection() {
  const orderRef = useRef<HTMLButtonElement>(null);
  const galleryRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove =
    (ref: React.RefObject<HTMLButtonElement | null>) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    };

  return (
    <section className="w-full overflow-x-hidden p-4 md:p-6 lg:p-8 pt-32 pb-5 md:pt-40 md:pb-20 lg:pt-52 lg:pb-7">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimatedWords
              text="Selamat Datang di"
              el="p"
              className="font-normal text-base md:text-lg text-black"
              stagger={0.08}
            />

            <AnimatedWords
              text="Rumah Bouquet Annie Mariea"
              el="h1"
              className="font-bold text-4xl md:text-4xl lg:text-5xl leading-tight text-[#FCA0B8]"
              italicFrom={2}
              stagger={0.1}
            />

            <AnimatedWords
              text="Punya ide bouquet sendiri? Atau bingung mau konsep seperti apa? Tenang, di Rumah Bouquet Annie Mariea kamu bebas request warna, isi, dan tema sesuai selera!"
              el="p"
              className="mt-4 text-sm md:text-base leading-relaxed text-black/70 max-w-md"
              highlightRange={[12, 15]}
              highlightClassName="font-bold italic text-[#FCA0B8] underline"
              stagger={0.035}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-4 mt-6"
            >
              <button
                ref={orderRef}
                onMouseMove={handleMouseMove(orderRef)}
                className="btn-order relative overflow-hidden font-bold text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base"
              >
                <span className="relative z-10">Order Now</span>
              </button>

              <Link href="/contact">
                <button
                  ref={galleryRef}
                  onMouseMove={handleMouseMove(galleryRef)}
                  className="btn-gallery relative overflow-hidden italic font-medium px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base border-2 border-[#FCA0B8]"
                >
                  <span className="relative z-10">Gallery</span>
                </button>
              </Link>
            </motion.div>
          </div>

          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 0, x: -80 }}
              animate={{ opacity: 1, scale: 1, rotate: -14, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 -mr-16 md:-mr-20 lg:-mr-24"
            >
              <Image
                src="/images/bouquets/flower-bouquet-2-removebg-preview.png"
                alt="Bouquet kiri"
                width={340}
                height={440}
                className="w-40 md:w-40 lg:w-80 h-auto drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              <Image
                src="/images/bouquets/flower-bouquet-1-removebg-preview.png"
                alt="Bouquet utama"
                width={380}
                height={480}
                className="w-48 md:w-52 lg:w-96 h-auto drop-shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: 0, x: 80 }}
              animate={{ opacity: 1, scale: 1, rotate: 14, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 -ml-16 md:-ml-20 lg:-ml-24"
            >
              <Image
                src="/images/bouquets/graduation-bouquet-1-removebg-preview.png"
                alt="Bouquet kanan"
                width={340}
                height={440}
                className="w-40 md:w-40 lg:w-80 h-auto drop-shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.2 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                },
              }}
              className="absolute top-0 left-0 md:-top-2 md:-left-2 lg:top-2 lg:-left-6 z-30 bg-[#FCA0B8] text-white px-4 py-2 rounded-2xl shadow-lg flex flex-col items-center leading-none"
            >
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-xl md:text-xl leading-none">
                  <Counter target={35} suffix="+" />
                </span>
                <span className="text-white text-xs md:text-sm mt-2 text-center">Pelanggan</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 1.4 },
                y: {
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                },
              }}
              className="absolute bottom-0 right-0 md:-bottom-2 md:-right-2 lg:bottom-2 lg:-right-6 z-30 bg-[#FCA0B8] text-white px-4 py-2 rounded-2xl shadow-lg flex flex-col items-center leading-none"
            >
              <div className="flex flex-col items-center">
                <span className="text-white font-bold text-xl md:text-xl leading-none">
                  <Counter target={50} suffix="+" />
                </span>
                <span className="text-white text-xs md:text-sm mt-2 text-center">Dipercaya</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
