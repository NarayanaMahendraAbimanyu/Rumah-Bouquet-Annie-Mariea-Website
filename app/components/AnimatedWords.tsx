'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedWordsProps {
  text: string;
  el?: React.ElementType;
  className?: string;
  italicFrom?: number;
  highlightRange?: [number, number];
  highlightClassName?: string;
  stagger?: number;
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.1,
    },
  }),
};

const word: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AnimatedWords({
  text,
  el: Tag = 'p',
  className = '',
  italicFrom,
  highlightRange,
  highlightClassName = '',
  stagger = 0.1,
}: AnimatedWordsProps) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        custom={stagger}
        className="inline-block"
      >
        {words.map((w, i) => {
          const isItalic = italicFrom !== undefined && i >= italicFrom;
          const isHighlighted =
            highlightRange !== undefined && i >= highlightRange[0] && i <= highlightRange[1];

          return (
            <motion.span
              key={i}
              variants={word}
              className={`inline-block mr-[0.28em] will-change-transform ${
                isItalic ? 'italic' : ''
              } ${isHighlighted ? highlightClassName : ''}`}
            >
              {w}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}