import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';
import { motion } from 'motion/react';
import React from 'react';

const ImageWrapper: React.FC<BaseComponent> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        'relative z-10 mt-10 flex flex-col items-center gap-6 overflow-hidden',
        'min-h-72 sm:min-h-[380px] md:min-h-[480px]',
        'lg:absolute lg:inset-0 lg:z-10 lg:block lg:min-h-0',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ImageWrapper;
