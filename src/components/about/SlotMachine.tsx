"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuShuffle } from "react-icons/lu";

type Props = {
  sentence: string[];
};

export default function SlotMachine({ sentence }: Props) {
  const [count, setCount] = useState(0);
  const [curIndex, setCurIndex] = useState(0);
  const textList = Array(10).fill(sentence).flat();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurIndex((prev) => {
        return prev < textList.length - 1 - count ? prev + 1 : prev;
      });
    }, 10 * (curIndex + 1) * 0.7);
    return () => clearInterval(interval);
  }, [curIndex, count, textList.length]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: "-50%", opacity: 0 },
    animate: ({ isLast }) => ({
      scaleY: 1,
      y: 0,
      opacity: 1,
      filter: isLast ? undefined : "blur(1.5px)",
    }),
    exit: { scaleY: 0.3, y: "50%", opacity: 0 },
  };
  function handleClick() {
    setCurIndex(0);
    setCount((prev) => {
      return prev < sentence.length - 1 ? prev + 1 : 0;
    });
  }

  return (
    <div className="flex items-center w-auto min-w-0 max-w-full selection:bg-brown_color border-b overflow-hidden">
      <span className="md:text-xl sm:text-base text-sm text-stone-600 mr-2">
        I am 
      </span>
      <AnimatePresence mode="popLayout">
        {textList.map((text, i) => {
          const isLast = i === textList.length - 1 - count;
          return (
            i === curIndex && (
              <motion.p
                className="overflow-hidden whitespace-nowrap text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-600 w-auto min-w-0 max-w-full inline-block  relative -top-0.5"
                key={text}
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: isLast ? 0.1 : 0.01,
                  ease: isLast ? "easeInOut" : "linear",
                }}
              >
                {text}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <motion.button
        className="ml-1 md:text-base text-xs text-stone-600"
        onClick={handleClick}
        whileTap={{ scale: 0.9, scaleY: 1 }}
        whileHover={{ scaleY: -1 }}
      >
        <LuShuffle />
      </motion.button>
    </div>
  );
}
