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
      className={cn('gap-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8', className)}
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
        'flex-center group relative size-20 cursor-pointer rounded-full p-[4.8px]',
        'border border-neutral-800',
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
    <div className='relative size-[40px] overflow-hidden rounded-full'>
      <Image fill src={item.src} alt={item.src} unoptimized sizes='40px' />
    </div>
  );
};
