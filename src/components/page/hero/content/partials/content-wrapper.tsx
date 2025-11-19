import React from 'react';
import { motion, MotionProps } from 'motion/react';
import { cn } from '@/lib/utils';

const ContentWrapper: React.FC<{
  children: React.ReactNode;
  containerAnimation: Partial<MotionProps>;
}> = ({ children, containerAnimation }) => {
  return (
    <motion.div
      {...containerAnimation}
      className={cn(
        'z-0 flex w-full flex-col gap-10 pt-20',
        'md:absolute md:top-1/2 md:z-30 md:max-w-[700px]',
        'md:-translate-y-1/2 md:gap-12 md:pt-0',
        'md:px-0 lg:max-w-[807px] lg:gap-[60px]'
      )}
    >
      {children}
    </motion.div>
  );
};

export default ContentWrapper;
