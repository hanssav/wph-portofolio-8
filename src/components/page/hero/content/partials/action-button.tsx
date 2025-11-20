'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';

const MotionButton = motion.create(Button);

type ActionButtonType = {
  label: string;
};
const ActionButton: React.FC<ActionButtonType> = ({ label }) => {
  return (
    <MotionButton
      initial={{ y: 30, opacity: 0 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.4,
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
      className='w-full py-2 md:max-w-[250px] lg:max-w-[300px]'
    >
      <span className='text-sm-bold md:text-sm-bold lg:text-md-bold'>
        {label}
      </span>
    </MotionButton>
  );
};

export default ActionButton;
