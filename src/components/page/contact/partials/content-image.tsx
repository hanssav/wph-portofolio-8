import React from 'react';
import { motion, Variants } from 'motion/react';
import IconCard from './icon-card';
import { Circle, Dribbble, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const contentVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const socialIconsVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

type ContentImageType = {
  name: string;
  status: string;
};
const ContentImage: React.FC<{ contentImage: ContentImageType }> = ({
  contentImage,
}) => {
  return (
    <motion.div
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-100px' }}
      variants={contentVariants}
      className={cn(
        'absolute bottom-0 left-1/2 z-20 w-full -translate-x-1/2 px-4 pb-10',
        'space-y-xl lg:space-y-3xl'
      )}
    >
      <motion.div
        initial='initial'
        whileInView='animate'
        viewport={{ once: true, margin: '-100px' }}
        variants={socialIconsVariants}
        className='lg:gap-3xl gap-xl flex justify-center'
      >
        {[
          { icon: Dribbble, label: 'Dribbble' },
          { icon: Instagram, label: 'Instagram' },
          { icon: Linkedin, label: 'LinkedIn' },
        ].map(({ icon, label }, idx) => (
          <IconCard key={idx} icon={icon} label={label} />
        ))}
      </motion.div>
      <div className='flex-center gap-xs flex-col'>
        <h1 className='title text-md-bold lg:text-xl-bold'>
          {contentImage.name}
        </h1>
        <div className='gap-lg flex-center'>
          <Circle className='text-primary size-3' fill='#88dd0e' />
          <p className='desc text-sm-semibold lg:text-md-semibold'>
            {contentImage.status}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentImage;
