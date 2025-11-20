'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

const MotionButton = motion.create(Button);

const IconCard: React.FC<{ icon: LucideIcon; label: string }> = ({
  icon,
  label,
}) => {
  const Icon = icon;

  return (
    <MotionButton
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      variant={'outline'}
      size={'icon'}
      aria-label={label} // <-- accessible name
      className='aspect-square size-[48px] rounded-full lg:size-[64px]'
    >
      <Icon className='size-5 text-white lg:size-[26px]' />
    </MotionButton>
  );
};

export default IconCard;
