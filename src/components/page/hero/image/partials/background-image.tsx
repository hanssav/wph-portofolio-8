'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import { BackgroundImageType } from '../../types';

const MotionImage = motion.create(Image);

const BackgroundImage: React.FC<BackgroundImageType> = ({
  className,
  children,
  imageData,
}) => {
  return (
    <div
      className={cn(
        'h-full min-h-[513px] w-screen overflow-hidden',
        'relative w-full md:h-[881px] md:w-[45.90vw]',
        className
      )}
    >
      <MotionImage
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        src={imageData.src}
        alt={imageData.title}
        fill
        priority
        fetchPriority='high'
        style={{ transformOrigin: 'center' }}
        className={cn(imageData.className)}
        sizes='(max-width: 768px) 100vw,
           (min-width: 768px) 46vw'
      />
      <div className='absolute bottom-0 z-30 w-full px-4 py-10'>{children}</div>
    </div>
  );
};

export default BackgroundImage;
