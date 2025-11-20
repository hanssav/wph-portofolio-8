'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { TestimonialType } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { motion } from 'motion/react';

interface TestimonialCardItemProps {
  testimonial: TestimonialType;
  idx: number;
}

const MotionCard = motion.create(Card);

const TestimonialCardItem: React.FC<TestimonialCardItemProps> = ({
  testimonial,
  idx,
}) => {
  return (
    <MotionCard
      key={idx}
      className={cn('lg:gap-lg gap-3 rounded-2xl p-4 md:rounded-3xl md:p-6')}
    >
      <div className='gap-xs flex justify-between'>
        <div className='gap-xs flex flex-col'>
          <h1 className='title text-lg-bold md:text-xl-bold'>
            {testimonial.name}
          </h1>
          <p className='desc text-md-regular md:text-lg-regular'>
            {testimonial.position}
          </p>
        </div>

        <div className='relative h-8 w-[76px] overflow-hidden lg:h-12 lg:w-[114px]'>
          <Image
            fill
            src={testimonial.img}
            alt={testimonial.name}
            priority
            fetchPriority='high'
            className='object-contain'
          />
        </div>
      </div>

      <div className='flex-start gap-2'>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            color='#F3993F'
            fill='#F3993F'
            className='size-[14.27px] lg:size-[22.83px]'
          />
        ))}
      </div>

      <p className='md:text-md-medium text-lg-regular'>
        {testimonial.testimonial}
      </p>
    </MotionCard>
  );
};

export default TestimonialCardItem;
