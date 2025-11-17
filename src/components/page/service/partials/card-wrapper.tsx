import { cn } from '@/lib/utils';
import { motion, type Variants } from 'motion/react';
import React from 'react';

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.8,
    },
  },
};

const itemWrapperVariants: Variants = {
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

export const ServiceCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
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
