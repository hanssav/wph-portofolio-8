'use client';
import { ImageDataType } from '../types';
import { IMAGES } from '@/lib/constants';
import { BackgroundImage } from './partials';
import { Card } from '@/components/ui/card';
import { Mapper } from '@/components/container';
import { Star } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

const imageData: ImageDataType = {
  src: IMAGES.PHOTOS,
  title: 'photo-profile',
  className: 'object-cover grayscale',
};

const MotionCard = motion.create(Card);
const MotionMapper = motion.create(Mapper);
const MotionStarIcon = motion.create(Star);

const starIconVariant: Variants = {
  initial: { scale: 0, opacity: 0, rotate: -90 },
  enter: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.35,
      ease: [0.34, 1.1, 0.64, 1],
    },
  },
  rest: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    rotate: 10,
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const mapperVariant: Variants = {
  initial: { opacity: 1 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.6,
    },
  },
  rest: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
  hover: {
    transition: {
      delay: 0,
      delayChildren: 0,
      staggerChildren: 0.05,
    },
  },
};

const h1Variant: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.45,
      ease: [0.34, 1.1, 0.64, 1],
    },
  },
  rest: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: [0.34, 1.1, 0.64, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      delay: 0,
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const cardVariant: Variants = {
  initial: { y: 40, opacity: 0 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  rest: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  hover: {
    y: -8,
    transition: {
      delay: 0,
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const paragraphVariant: Variants = {
  initial: { opacity: 0, y: 10 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 0.8 },
  },
  rest: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
  hover: {
    y: -2,
    transition: {
      duration: 0.3,
      delay: 0,
    },
  },
};

const HeroImage = () => {
  return (
    <BackgroundImage imageData={imageData}>
      <MotionCard
        initial='initial'
        whileInView='enter'
        animate='rest'
        whileHover='hover'
        viewport={{ once: true }}
        variants={cardVariant}
        className={cn(
          'relative left-1/2 -translate-x-1/2 md:w-[70%] lg:w-[47.82%]',
          'space-y-md lg:p-2xl w-full px-6'
        )}
      >
        <motion.h1
          variants={h1Variant}
          className='text-display-xs-bold lg:text-display-xl'
        >
          5.0
        </motion.h1>
        <motion.div variants={mapperVariant}>
          <MotionMapper
            data={Array.from({ length: 5 })}
            className='flex-start gap-2'
          >
            {(_, idx) => (
              <MotionStarIcon
                key={idx}
                variants={starIconVariant}
                color='#F3993F'
                fill='#F3993F'
                size={20}
                className='lg:size-[22px]'
              />
            )}
          </MotionMapper>
        </motion.div>
        <motion.p variants={paragraphVariant}>
          Many Client Trust with me
        </motion.p>
      </MotionCard>
    </BackgroundImage>
  );
};

export default HeroImage;
