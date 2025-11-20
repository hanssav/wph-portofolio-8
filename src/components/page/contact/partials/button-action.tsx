'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { cn } from '@/lib/utils';

const MotionButton = motion.create(Button);

const buttonVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.04, opacity: 0.95 },
  tap: { scale: 1, opacity: 0.9 },
};

type ButtonActionProps = React.ComponentProps<typeof MotionButton> & {
  children: React.ReactNode;
};

const ButtonAction = React.forwardRef<HTMLButtonElement, ButtonActionProps>(
  ({ children, 'aria-label': ariaLabel, ...props }, ref) => {
    const computedAriaLabel =
      typeof children === 'string' ? undefined : ariaLabel;

    return (
      <MotionButton
        ref={ref}
        className={cn('w-full', props.className)}
        variants={buttonVariants}
        aria-label={computedAriaLabel}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
        {...props}
      >
        {children}
      </MotionButton>
    );
  }
);

export default ButtonAction;
