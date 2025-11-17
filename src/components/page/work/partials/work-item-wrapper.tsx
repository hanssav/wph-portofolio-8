import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';
import React from 'react';
import { motion } from 'motion/react';

type WorkItemWrapperType = BaseComponent;

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const WorkItemWrapper: React.FC<WorkItemWrapperType> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.1 }}
      className={cn(
        'base-container gap-xl lg:gap-7xl grid grid-cols-[2.5rem_auto] lg:grid-cols-[auto_3rem_auto]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default WorkItemWrapper;
