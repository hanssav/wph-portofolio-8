import React from 'react';
import { motion, Variants } from 'motion/react';
import { SkillData } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';

const skillVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const SKillPercent: React.FC<BaseComponent> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={'initial'}
      whileInView={'animate'}
      viewport={{ once: true, amount: 'some' }}
      variants={skillVariants}
      className={cn(
        'flex-col-start lg:gap-3xl gap-xl flex-1 basis-80',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const itemsVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const barVariants: (percentage: number) => Variants = (percentage) => ({
  initial: { scaleX: 0 },
  animate: {
    scaleX: percentage / 100,
    transition: { duration: 2, ease: 'easeOut' },
  },
});

const nameVariants: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

const lineVariants: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: {
      duration: 1.9,
      ease: 'easeOut',
      // ease: [0.25, 0.1, 0.25, 1] as const, // custom cubic bezier
    },
  },
};

const percentageVariants = (id: number): Variants => ({
  initial: { opacity: 0, x: -20 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 2 + 0.2 * id,
    },
  },
});

type SkillPercentItemTypes = {
  skill: SkillData;
  id: number;
};

export const SkillPercentItems: React.FC<SkillPercentItemTypes> = ({
  skill,
  id,
}) => {
  return (
    <motion.div
      key={skill.id}
      className='lg:gap-3xl flex h-[41.4px] w-full gap-4 lg:h-16'
      variants={itemsVariants}
    >
      <div className='relative flex-1'>
        <motion.div
          className={cn(
            'bg-primary-300 absolute inset-0 z-20 overflow-hidden rounded-[12.9px] lg:rounded-3xl'
          )}
          style={{ originX: 0 }}
          variants={barVariants(skill.percentage)}
        />

        <div className='flex-start relative z-30 h-full px-[15.52px]'>
          <motion.p
            className='text-sm-semibold lg:text-lg-semibold'
            variants={nameVariants}
          >
            {skill.name}
          </motion.p>
        </div>
        <motion.span
          className='absolute top-1/2 z-10 w-full border-t border-neutral-800'
          style={{ originX: 0 }}
          variants={lineVariants}
        />
      </div>
      <motion.p
        className='text-sm-semibold lg:text-xl-semibold flex-center text-white'
        variants={percentageVariants(id)}
      >
        {skill.percentage}%
      </motion.p>
    </motion.div>
  );
};
