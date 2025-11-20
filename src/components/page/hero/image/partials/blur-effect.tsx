'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const BlurEffect = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
        className={cn(
          'from-primary to-primary/40 absolute top-0 right-0 h-full',
          'w-1/2 bg-linear-to-b mix-blend-color'
        )}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.4,
        }}
        className='absolute inset-0 bg-linear-to-b from-black/60 to-black'
      />
    </>
  );
};

export default BlurEffect;
