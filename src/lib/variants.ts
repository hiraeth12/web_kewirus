// src/lib/variants.ts
// Reusable Framer Motion variants for animations across the site
import { Variants } from 'framer-motion';

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0,
    },
  },
};

export const fadeIn = (direction = 'up', delay = 0): Variants => {
  const distance = 20;
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 16,
        delay,
      },
    },
  };
};

// Enhanced scroll animation with both scroll-in and scroll-out
export const scrollFadeIn = (direction = 'up', delay = 0): Variants => {
  const distance = 20;
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 18,
        mass: 0.8,
        delay,
      },
    },
    exit: {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? -distance : direction === 'down' ? distance : 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };
};

// Scroll scale animation
export const scrollScale = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      mass: 0.8,
      delay,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
});

// Stagger container with scroll support
export const scrollStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
      ease: 'easeIn',
    },
  },
};

export const slideIn = (from = 'left', distance = 100, delay = 0): Variants => ({
  hidden: { opacity: 0, x: from === 'left' ? -distance : from === 'right' ? distance : 0, y: from === 'up' ? -distance : from === 'down' ? distance : 0 },
  show: { opacity: 1, x: 0, y: 0, transition: { type: 'spring', stiffness: 140, delay } },
});

export const floatY: Variants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

const variants = { staggerContainer, fadeIn, scrollFadeIn, scrollScale, scrollStagger, slideIn, floatY };

export default variants;
