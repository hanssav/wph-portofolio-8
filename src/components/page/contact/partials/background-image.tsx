import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';

const imageVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

type BackgroundImageType = {
  imageData: { src: string; className?: string; alt: string };
} & BaseComponent;

const BackgroundImage: React.FC<BackgroundImageType> = ({
  children,
  imageData,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        'relative w-full overflow-hidden',
        'aspect-100/152',
        'lg:aspect-auto lg:h-full',
        className
      )}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-100px' }}
      variants={imageVariants}
    >
      <Image
        src={imageData.src}
        alt={imageData.alt}
        fill
        priority
        sizes='(max-width: 1024px) 100vw, 50vw'
        fetchPriority='high'
        className={cn('object-cover grayscale', imageData.className)}
      />

      <motion.div
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, margin: '-100px' }}
        variants={overlayVariants}
        className='absolute inset-0 z-10 bg-linear-to-b from-black/60 to-black'
      />
      {children}
    </motion.div>
  );
};

export default BackgroundImage;
