import React from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';
import { Monitor } from 'lucide-react';
import { ServiceData } from '@/lib/constants/pages';

const MotionMonitor = motion(Monitor);

type CardVariantsFn = (hasAnimate: boolean, idx: number) => Variants;

const cardVariants: CardVariantsFn = (hasAnimate: boolean, idx: number) => ({
  initial: { y: 30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
      delay: hasAnimate ? 0.8 + 0.3 * idx : 0,
    },
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.3,
      delay: 0,
      staggerChildren: 0.05,
    },
  },
});

const borderVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
  },
  hover: {
    x: 5,
    borderColor: 'rgba(167, 243, 208, 0.3)',
  },
};

const iconVariants: Variants = {
  initial: { scale: 0, rotate: -90 },
  animate: {
    scale: 1,
    rotate: 0,
  },
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
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
  },
  hover: {
    x: 5,
    color: '#88dd0e',
  },
};

const descVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
  hover: {
    opacity: 0.9,
    color: '#fafafa',
  },
};

export const ServiceCardItems: React.FC<{
  service: ServiceData;
  idx: number;
}> = ({ service, idx }) => {
  const [hasAnimate, setHasAnimate] = React.useState<boolean>(true);

  return (
    <motion.div
      initial='initial'
      whileInView='animate'
      whileHover='hover'
      variants={cardVariants(hasAnimate, idx)}
      onAnimationComplete={() => setHasAnimate(false)}
      viewport={{ once: true, amount: 'some' }}
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
