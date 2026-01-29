import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';
import React from 'react';
import { motion } from 'motion/react';

type WorkItemWrapperType = BaseComponent;

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const WorkItemWrapper: React.FC<WorkItemWrapperType> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.65, ease: EASE_OUT }}
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
