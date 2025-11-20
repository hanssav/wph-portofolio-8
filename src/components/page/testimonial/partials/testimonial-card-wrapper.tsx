import { BaseComponent } from '@/types';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

type TestimonialCardsProps = BaseComponent;

const itemWrapperVariants: Variants = {
  initial: { scale: 0.85, opacity: 0 },
  inView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  className,
  children,
}) => {
  return (
    <motion.div
      {...baseInViewAnimation()}
      className={cn(
        'base-container md:gap-3xl lg:gap-5xl grid grid-cols-1 gap-4 md:grid-cols-2',
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

export default TestimonialCards;
