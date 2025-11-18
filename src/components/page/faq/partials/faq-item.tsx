import SparkleIcon from '@/components/ui/sparkle';
import { FAQ } from '@/lib/constants/pages';
import React from 'react';
import { GridItem } from '..';
import { motion, Variants } from 'motion/react';

const separatorVariants: Variants = {
  initial: { opacity: 0, scale: 0.5 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FaqItem: React.FC<{ item: GridItem; idx: number }> = ({ item, idx }) => {
  // Render separator lines
  if ('isSeparator' in item && item.isSeparator) {
    const isVertical = Math.floor(idx / 2) % 2 === 0;

    return (
      <motion.div variants={separatorVariants} className='contents'>
        {/* Mobile: horizontal line */}
        <div className='flex items-center py-2 md:hidden'>
          <div className='h-px w-full bg-neutral-800' />
        </div>

        {/* Desktop: vertical or horizontal */}
        {isVertical ? (
          <div className='hidden items-center justify-center md:flex'>
            <div className='h-full w-px bg-neutral-800' />
          </div>
        ) : (
          <div className='hidden py-2 md:col-span-3 md:block'>
            <div className='h-px w-full bg-neutral-800' />
          </div>
        )}
      </motion.div>
    );
  }

  // FAQ item (unchanged)
  const faq = item as FAQ;

  return (
    <div className='space-y-md lg:space-y-3xl'>
      <div className='gap-lg flex'>
        <SparkleIcon className='size-6 md:size-8' />
        <h1 className='title text-lg-bold lg:text-display-xs-bold'>
          {faq.question}
        </h1>
      </div>
      <p className='desc text-sm-medium lg:text-md-medium'>{faq.answer}</p>
    </div>
  );
};

export default FaqItem;
