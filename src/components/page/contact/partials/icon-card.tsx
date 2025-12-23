'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

const MotionButton = motion.create(Button);

const IconCard: React.FC<{ icon: LucideIcon; label: string; href: string }> = ({
  icon,
  label,
  href,
}) => {
  const Icon = icon;

  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
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
    </a>
  );
};

export default IconCard;
