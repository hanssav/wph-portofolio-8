import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';
import { cn } from '@/lib/utils';
import { motion, type Variants } from 'motion/react';
import React from 'react';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const itemWrapperVariants: Variants = {
  initial: { y: 24, opacity: 0 },
  inView: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: EASE_OUT,
    },
  },
};

export const ServiceCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      {...baseInViewAnimation()}
      className={cn(
        'gap-3xl lg:gap-5xl grid grid-cols-1 lg:grid-cols-3',
        className
      )}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemWrapperVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
