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

const MotionCard = motion(Card);
const MotionMapper = motion(Mapper);
const MotionStarIcon = motion(Star);

const starIconVariant: Variants = {
  initial: { scale: 0, opacity: 0, rotate: -90 },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.1, 0.64, 1],
    },
  },
};

const mapperVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 1.8,
    },
  },
};

const h1Variant: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.8,
      ease: [0.34, 1.1, 0.64, 1],
    },
  },
};

const cardVariant: Variants = {
  initial: { y: 80, opacity: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const HeroImage = () => {
  return (
    <BackgroundImage imageData={imageData}>
      <MotionCard
        initial='initial'
        animate='animate'
        variants={cardVariant}
        className={cn(
          'relative left-1/2 -translate-x-1/2 md:w-[70%] lg:w-[47.82%]',
          'space-y-md lg:p-2xl w-full px-6'
        )}
      >
        <motion.h1
          initial='initial'
          animate='animate'
          variants={h1Variant}
          className='text-display-xs-bold lg:text-display-xl'
        >
          5.0
        </motion.h1>
        <MotionMapper
          data={Array.from({ length: 5 })}
          className='flex-start gap-2'
          initial='initial'
          animate='animate'
          variants={mapperVariant}
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
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 2.8, duration: 0.8 },
          }}
          className='text-md-semibold lg:text-xl-semibold'
        >
          Many Client Trust with me
        </motion.p>
      </MotionCard>
    </BackgroundImage>
  );
};

export default HeroImage;
