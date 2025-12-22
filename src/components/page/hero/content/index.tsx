'use client';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { ActionButton, ContentWrapper } from './partials';
import { childTextAnimation, textAnimation } from '@/lib/constants/animation';

const HeroContent = () => {
  return (
    <ContentWrapper containerAnimation={textAnimation}>
      <div className='gap-xl flex flex-col'>
        <motion.span
          variants={childTextAnimation}
          className='flex-start gap-xl'
        >
          <motion.div
            className={cn(
              'min-w-[21px] flex-1 border border-t border-white',
              'max-w-20 md:max-w-[80px] lg:max-w-[114px]'
            )}
          />
          <h2 className='text-md-medium md:text-lg-medium lg:text-xl-medium'>
            Hi, I am Handi Irawan Frontend Developer
          </h2>
        </motion.span>

        <motion.h1
          variants={childTextAnimation}
          className={cn(
            'text-display-lg-bold md:text-display-xl-extrabold',
            'lg:text-display-3xl-extrabold md:text-[56px] lg:text-[80px]'
          )}
        >
          BUILDING FAST &{' '}
          <motion.span
            className='text-primary inline-block'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
          >
            INTERACTIVE
          </motion.span>{' '}
          WEB EXPERIENCES.
        </motion.h1>

        <motion.p
          variants={childTextAnimation}
          className={cn(
            'text-lg-medium md:text-lg-medium lg:text-xl-medium',
            'text-neutral-400 md:max-w-[500px] lg:max-w-[597px]'
          )}
        >
          {/* Bridging creativity and functionality to deliver stunning,
          user-friendly web applications */}
          Specializing in React.js, Next.js, and React Native. Building
          scalable, high-performance web applications with immersive
          interactions.
        </motion.p>
      </div>

      <ActionButton label='Hire Me' />
    </ContentWrapper>
  );
};

export default HeroContent;
