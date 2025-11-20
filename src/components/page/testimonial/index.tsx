'use client';

import { TESTIMONIAL_DATA, TESTIMONIAL_SECTION } from '@/lib/constants/pages';
import { Section } from '../../container';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { TestimonialCardItem, TestimonialCards } from './partials';
import { motion, MotionProps } from 'motion/react';
import React from 'react';

const MotionButton = motion.create(Button);

const buttonAnimation = (delay: number, isIntroDone: boolean): MotionProps => ({
  initial: { opacity: 0, scale: 0.85 },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: isIntroDone ? 0 : delay * 0.8,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },

  whileHover: { scale: 1.1, transition: { duration: 0.15 } },
  whileTap: { scale: 0.95, transition: { duration: 0.1 } },
  viewport: { once: true },
});

const TestimonialSection = () => {
  const { subTitle, title, id } = TESTIMONIAL_SECTION;
  const [isIntroDone, setIsIntroDone] = React.useState(false);

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='content-container flex-col'
    >
      <div className='space-y-5xl'>
        <TestimonialCards>
          {TESTIMONIAL_DATA.map((testimonial, idx) => (
            <TestimonialCardItem idx={idx} testimonial={testimonial} />
          ))}
        </TestimonialCards>

        <motion.div className='flex-center gap-xl'>
          <MotionButton
            variant='outline'
            className='aspect-square size-[48px] md:size-14'
            {...buttonAnimation(1, isIntroDone)}
            onAnimationComplete={() => setIsIntroDone(true)}
            aria-label='arrow-left-button'
          >
            <ArrowLeft className='size-4 text-neutral-800 md:size-6' />
          </MotionButton>

          <MotionButton
            variant='outline'
            className='aspect-square size-[48px] md:size-14'
            {...buttonAnimation(1.2, isIntroDone)}
            onAnimationComplete={() => setIsIntroDone(true)}
            aria-label='arrow-right-button'
          >
            <ArrowRight className='text-primary size-4 md:size-6' />
          </MotionButton>
        </motion.div>
      </div>
    </Section.Root>
  );
};

export default TestimonialSection;
