import { MotionProps, Variants } from 'motion/react';

export const textAnimation: Partial<MotionProps> = {
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        // every child show in 0.2
        staggerChildren: 0.2,
        // delay after parent
        delayChildren: 0.3,
      },
    },
  },
  initial: 'initial',
  whileInView: 'animate',
  // amount is part of element in view to trigger animatioan,
  // 0.2 is 20% and 1 is 100%/ some | all
  viewport: { once: true, amount: 0.2 },
};

export const childTextAnimation: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ====================
// FLOW ANIMATION
// ====================

// Parent visible →
// 0.3s delayChildren →
// Child 1 animates →
// 0.2s →
// Child 2 animates →
// 0.2s →
// Child 3 animates
