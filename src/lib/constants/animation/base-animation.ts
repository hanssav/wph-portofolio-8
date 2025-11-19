import { MotionProps } from 'motion/react';

export const floatAnimation: Partial<MotionProps> = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 3, 0, -3, 0],
    scale: [1, 1.02, 1],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const figure8Animation: Partial<MotionProps> = {
  animate: {
    x: [0, 15, 0, -15, 0],
    y: [0, -15, -30, -15, 0],
    rotate: [0, 5, 0, -5, 0],
    scale: [1, 1.05, 1, 1.05, 1],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const orbitAnimation: Partial<MotionProps> = {
  animate: {
    x: [0, 20, 0, -20, 0],
    y: [0, -10, -20, -10, 0],
    rotate: [0, 10, 0, -10, 0],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: 'linear',
  },
};

export const waveAnimation: Partial<MotionProps> = {
  animate: {
    y: [0, -25, 0, 25, 0],
    x: [0, 10, 0, -10, 0],
    rotate: [0, 7, 0, -7, 0],
    scale: [1, 1.03, 1, 1.03, 1],
  },
  transition: {
    duration: 11,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const baseInViewAnimation: (
  staggerChildren?: number,
  delayChildren?: number
) => Partial<MotionProps> = (staggerChildren = 0.3, delayChildren = 0.6) => ({
  initial: 'initial',
  whileInView: 'inView',
  viewport: { once: true },
  variants: {
    initial: { opacity: 0, y: 30 },
    inView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
        delayChildren,
        staggerChildren,
      },
    },
  },
});
