import React from 'react';
import { motion, Variants } from 'motion/react';
import { BaseComponent } from '@/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { SkillsLogoType } from '@/lib/constants/pages';

const mapperVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const SkillLogo: React.FC<BaseComponent> = ({ children, className }) => {
  return (
    <motion.div
      initial='initial'
      whileInView='animate'
      variants={mapperVariant}
      viewport={{ once: true, amount: 'some' }}
      className={cn('gap-3xl grid grid-cols-4', className)}
    >
      {children}
    </motion.div>
  );
};

const childMapperVariant: Variants = {
  initial: { y: 30, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
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
        borderColor: 'transparent',
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
        'flex-center group relative size-12 cursor-pointer rounded-full p-[4.8px]',
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
    <div className='relative size-[26.24px] overflow-hidden rounded-full'>
      <Image fill src={item.src} alt={item.src} priority fetchPriority='high' />
    </div>
  );
};
