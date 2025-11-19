import React from 'react';
import { motion, Variants } from 'motion/react';
import { BaseComponent } from '@/types';
import { cn } from '@/lib/utils';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

const itemWrapperVariants: Variants = {
  initial: { y: 30, scale: 0.85, opacity: 0 },
  inView: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FaqCards: React.FC<BaseComponent> = ({ className, children }) => {
  return (
    <motion.div
      {...baseInViewAnimation(0.2)}
      className={cn(
        'base-container grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8',
        className
      )}
    >
      {React.Children.map(children, (child: any, index) => {
        if (child?.props?.item?.isSeparator) {
          return <React.Fragment key={index}>{child}</React.Fragment>;
        }

        return (
          <motion.div key={index} variants={itemWrapperVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FaqCards;
