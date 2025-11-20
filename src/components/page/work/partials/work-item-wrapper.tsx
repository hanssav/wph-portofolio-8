import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';
import React from 'react';
import { motion } from 'motion/react';

type WorkItemWrapperType = BaseComponent;

const WorkItemWrapper: React.FC<WorkItemWrapperType> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      // {...baseInViewAnimation(0.15, 0.3)}
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
