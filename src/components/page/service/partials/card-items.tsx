'use client';

import React from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { Monitor } from 'lucide-react';
import { ServiceData } from '@/lib/constants/pages';

const MotionMonitor = motion.create(Monitor);

const cardVariants: Variants = {
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
    },
  },
};

const borderVariants: Variants = {
  hover: {
    x: 5,
    borderColor: 'rgba(167, 243, 208, 0.3)',
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.15,
    rotate: 10,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};

const titleVariants: Variants = {
  hover: {
    x: 5,
    color: '#88dd0e',
  },
};

const descVariants: Variants = {
  hover: {
    opacity: 0.9,
    color: '#fafafa',
  },
};

export const ServiceCardItems: React.FC<{
  service: ServiceData;
  idx: number;
}> = ({ service, idx }) => {
  return (
    <motion.div
      id={idx.toString()}
      variants={cardVariants}
      whileHover='hover'
      className={cn(
        'gap-xl md:gap-3xl group flex cursor-pointer flex-col',
        'relative'
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        variants={{
          hover: {
            opacity: 1,
            transition: { duration: 0.3 },
          },
        }}
        className='absolute inset-0 -z-10 rounded-xl'
      />

      <motion.div
        variants={borderVariants}
        className='pb-lg border-b border-neutral-800'
      >
        <p className='text-md-semibold md:text-xl-semibold hover:text-primary-200 text-neutral-400'>
          {service.id}
        </p>
      </motion.div>

      <MotionMonitor
        variants={iconVariants}
        size={24}
        className='text-primary-200 lg:size-8'
      />

      <motion.h1
        variants={titleVariants}
        className='text-xl-semibold md:text-display-sm-semibold text-neutral-25'
      >
        {service.title}
      </motion.h1>

      <motion.p variants={descVariants} className='desc'>
        {service.description}
      </motion.p>
    </motion.div>
  );
};
