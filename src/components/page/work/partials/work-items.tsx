import React from 'react';
import WorkCard from './work-card';
import { WorkType } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'motion/react';

const cardVariants = (isEven: boolean): Variants => ({
  initial: {
    opacity: 0,
    x: isEven ? 50 : -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

const timelineVariants: Variants = {
  initial: {
    opacity: 0,
    scaleY: 0,
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const badgeVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

interface WorkItemsProps {
  work: WorkType;
  id: number;
  dataLength: number;
}

const WorkItems: React.FC<WorkItemsProps> = ({ work, id, dataLength }) => {
  const isEven = id % 2 === 0;
  const isFirst = id === 0;
  const isLast = id === dataLength - 1;

  const getLineHeight = () => {
    if (isLast) return 'h-1/2';
    return 'h-[calc(100%+4rem)] lg:h-[calc(100%+7rem)]';
  };

  const leftVariants = cardVariants(false);
  const rightVariants = cardVariants(true);
  const mobileVariants = cardVariants(isEven);

  return (
    <React.Fragment key={id}>
      {/* Left column - desktop only */}
      <motion.div
        variants={leftVariants}
        className='hidden lg:block lg:justify-self-start'
      >
        <WorkCard work={work} className={cn(isEven && 'invisible')} />
      </motion.div>

      {/* Center timeline */}
      <div
        className={cn(
          'group relative mb-4 last:mb-0 nth-last-2:mb-0 md:mb-8',
          '[&:nth-last-child(2)>.line-decoration]:h-1/2'
        )}
      >
        {/* Timeline line */}
        <motion.div
          variants={timelineVariants}
          className={cn(
            'line-decoration absolute left-1/2 w-px origin-top -translate-x-1/2 bg-neutral-800',
            isFirst ? 'top-1/2' : 'top-0',
            getLineHeight()
          )}
        />

        {/* Number badge */}
        <motion.span
          variants={badgeVariants}
          className={cn(
            'flex-center absolute inset-x-0 top-1/2 -translate-y-1/2',
            'aspect-square size-[40px] rounded-full p-2 lg:size-[48px]',
            'text-primary-200 bg-background border border-neutral-800',
            'lg:text-md z-20 text-sm font-bold'
          )}
        >
          {id + 1}
        </motion.span>
      </div>

      {/* Right column - desktop only */}
      <motion.div
        variants={rightVariants}
        className='hidden lg:block lg:justify-self-end'
      >
        <WorkCard work={work} className={cn(!isEven && 'invisible')} />
      </motion.div>

      {/* Mobile view */}
      <motion.div variants={mobileVariants} className='lg:hidden'>
        <WorkCard work={work} />
      </motion.div>
    </React.Fragment>
  );
};

export default WorkItems;
