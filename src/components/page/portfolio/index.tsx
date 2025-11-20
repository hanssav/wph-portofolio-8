'use client';

import { PORTFOLIO_DATA, PORTOFOLIO_SECTION } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import { Section } from '../../container';
import Image from 'next/image';

import { motion, Variants } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

const childAnimation: Variants = {
  initial: { opacity: 0, y: 20 },
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const portfolioCardAnimation: Variants = {
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const imageAnimation: Variants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const titleAnimation: Variants = {
  hover: {
    x: 4,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const PortfolioSection = () => {
  const { subTitle, title, id } = PORTOFOLIO_SECTION;

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='content-container relative flex-col'
    >
      <motion.div
        {...baseInViewAnimation(0.3, 1)}
        className={cn(
          'base-container lg:gap-y-6xl md:gap-x-2xl md:gap-y-4xl gap-8',
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        )}
      >
        {PORTFOLIO_DATA.map((portfolio) => (
          <motion.div key={portfolio.id} variants={childAnimation}>
            {/* =========== CARD ==========  */}
            <motion.div
              initial='initial'
              whileHover='hover'
              variants={portfolioCardAnimation}
              className='space-y-lg group relative cursor-pointer'
            >
              <motion.div className='relative aspect-361/270 w-full overflow-hidden rounded-2xl'>
                <motion.div
                  variants={imageAnimation}
                  className='relative h-full w-full'
                >
                  <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    fill
                    className='object-cover'
                    // priority
                    fetchPriority='high'
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </motion.div>
              </motion.div>
              <motion.div
                className='pointer-events-none absolute inset-x-0 top-1/3 flex translate-y-1/2 items-center justify-center'
                variants={{
                  initial: { opacity: 0 },
                  hover: {
                    opacity: 1,
                    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                  },
                }}
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0.9 },
                    hover: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3 },
                    },
                  }}
                  className='flex h-24 w-24 items-center justify-center rounded-full bg-white'
                >
                  <motion.span
                    variants={{
                      initial: { opacity: 0 },
                      hover: {
                        opacity: 1,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className='text-lg font-bold tracking-wider text-black'
                  >
                    VISIT
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.h1
                variants={titleAnimation}
                className='title text-xl-bold lg:text-display-xs-bold'
              >
                {portfolio.title}
              </motion.h1>

              <motion.p
                className='desc text-sm-regular lg:text-md-regular'
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {portfolio.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section.Root>
  );
};

export default PortfolioSection;
