"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;

const GREETINGS = [
  "Greetings!",
  "নমস্কার!",
  "नमस्ते!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "Hallo!",
  "Olá!",
  "Hej!",
  "Привет!",
  "Γεια σας!",
  "Merhaba!",
  "مرحبًا!",
  "שלום!",
  "你好!",
  "こんにちは!",
  "안녕하세요!",
  "Xin chào!",
  "Sawubona!",
  "Aloha!",
];

const CYCLE_MS = 2400;

export function AnimatedGreeting() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % GREETINGS.length);
    }, CYCLE_MS);

    return () => window.clearInterval(id);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className="text-inherit">Greetings!</span>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={GREETINGS[index]}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease }}
        className="inline-block whitespace-nowrap text-inherit"
      >
        {GREETINGS[index]}
      </motion.span>
    </AnimatePresence>
  );
}
