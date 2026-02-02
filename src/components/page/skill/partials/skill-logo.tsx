'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { BaseComponent } from '@/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SkillsLogoType } from '@/lib/constants/pages';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const mapperVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const SkillLogo: React.FC<BaseComponent> = ({ children, className }) => {
  return (
    <motion.div
      initial='initial'
      whileInView='animate'
      variants={mapperVariant}
      viewport={{ once: true, amount: 0.3, margin: '0px 0px -10% 0px' }}
      className={cn('flex-center flex-wrap gap-3 sm:gap-4 md:gap-6', className)}
    >
      {children}
    </motion.div>
  );
};

const childMapperVariant: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

export const SkillLogoItem: React.FC<BaseComponent> = ({
  className,
  children,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      variants={childMapperVariant}
      whileHover={{
        scale: 1.15,
        rotate: 5,
        y: -8,
        borderColor: 'rgba(37, 43, 55, 0)',
        boxShadow:
          '0 8px 24px rgba(136, 221, 14, 0.2), 0 4px 8px rgba(136, 221, 14, 0.1)',
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.6,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        'group relative flex cursor-pointer items-center justify-center rounded-full p-1 sm:p-1.5',
        'border border-neutral-800',
        'size-16 sm:size-18 md:size-20 lg:size-24',
        className
      )}
    >
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className='bg-primary-200/20 pointer-events-none absolute inset-0 -z-10 rounded-full blur-md'
      />
      <div className='pointer-events-none'>{children}</div>
    </motion.div>
  );
};

export const SkillImage: React.FC<{ item: SkillsLogoType }> = ({ item }) => {
  return (
    <div className='relative size-8 overflow-hidden rounded-full sm:size-9 md:size-10 lg:size-[40px]'>
      <Image
        fill
        src={item.src}
        alt={item.src}
        unoptimized
        sizes='(max-width: 640px) 32px, (max-width: 768px) 36px, (max-width: 1024px) 40px, 40px'
      />
    </div>
  );
};
