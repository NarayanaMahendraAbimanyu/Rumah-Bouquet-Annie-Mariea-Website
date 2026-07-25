'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedWords from './AnimatedWords';
import Counter from './Counter';

export default function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.55, x: -24 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full aspect-square max-w-sm mx-auto lg:mx-0 bg-[#FADDE6] rounded-[2.5rem] flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-3/4 h-3/4">
            <Image
              src="/images/bouquets/money-bouquet-1-removebg-preview.png"
              alt="Tentang Rumah Bouquet Annie Mariea"
              fill
              className="object-contain drop-shadow-xl"
            />
          </div>
        </motion.div>

        <div className="text-center lg:text-left">
          <AnimatedWords
            text="Tentang Kami"
            el="h1"
            className="font-bold text-2xl md:text-3xl lg:text-4xl mt-7 text-black"
            highlightRange={[1, 1]}
            highlightClassName="font-bold italic text-[#FCA0B8]"
            stagger={0.15}
          />

          <AnimatedWords
            text={"Berawal dari ruang hangat di rumah kami, Rumah Bouquet Annie Mariea  hadir untuk merayakan setiap momen berharga Anda. Kami percaya bahwa seikat rangkaian bunga bukan sekadar hadiah, melainkan simbol kasih sayang, apresiasi, dan kebahagiaan yang tak terucapkan. \nKarena setiap pesanan dirangkai langsung secara handmade dari rumah dengan penuh ketelitian dan cinta, kami memastikan setiap detail bunga terasa personal, rapi, dan istimewa. Dibuat khusus untuk menemani momen kelulusan, ulang tahun, anniversary, hingga sejuta rasa manis untuk orang tersayang. Kami siap merangkai cerita terbaik Anda dalam wujud buket yang cantik."}
            el="p"
            className="mt-4 text-justify text-sm md:text-base leading-relaxed text-black/90 max-w-xl mx-auto lg:mx-0 whitespace-pre-line"
            highlightRange={[7, 10]}
            highlightClassName="font-bold italic text-[#FCA0B8]"
            stagger={0.02}
          />
        </div>
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <AnimatedWords
          text="Mengapa harus"
          el="p"
          className="font-normal text-md md:text-2xl text-black"
          stagger={0.12}
        />

        <AnimatedWords
          text="Rumah Bouquet Annie Mariea ?"
          el="h3"
          className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-[#FCA0B8] mt-2"
          italicFrom={2}
          stagger={0.1}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7}}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 bg-[#FCA0B8] rounded-3xl px-6 py-6 md:px-12 md:py-8 max-w-2xl mx-auto grid grid-cols-3 gap-4 shadow-xl"
        >
          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-2xl md:text-4xl leading-none">
              <Counter target={35} suffix="+" />
            </span>
            <span className="text-white text-xs md:text-sm mt-2 text-center">Pembeli</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-2xl md:text-4xl leading-none">
              <Counter target={15} suffix="+" />
            </span>
            <span className="text-white text-xs md:text-sm mt-2 text-center">Jenis Bouquet</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-white font-bold text-2xl md:text-4xl leading-none">
              <Counter target={50} suffix="+" />
            </span>
            <span className="text-white text-xs md:text-sm mt-2 text-center">Dipercaya</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}