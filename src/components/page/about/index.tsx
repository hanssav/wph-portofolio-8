import { Mapper, Shapes } from '../../container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ABOUT_IMAGE, ABOUT_SECTION } from '@/lib/constants/pages';
import { motion } from 'motion/react';
import { childTextAnimation, textAnimation } from '@/lib/constants/animation';

const AboutSection = () => {
  const { desc, subTitle, title } = ABOUT_SECTION;
  const highlight = 'HIGH-PERFORMANCE WEB';
  const parts = title.split(highlight);

  return (
    <section className='py-section relative flex flex-col text-center'>
      <Shapes className='bottom-0 -left-6 z-20 -translate-y-4/5 rotate-90' />

      <motion.div
        {...textAnimation}
        className='base-container space-y-xl lg:space-y-7xl relative z-30'
      >
        <motion.div className='lg:space-y-xl mx-auto max-w-[871px]'>
          <motion.p variants={childTextAnimation} className='sub-title'>
            {subTitle}
          </motion.p>
          <motion.h1 variants={childTextAnimation} className='title'>
            {parts[0]}
            <span className='text-primary inline md:block'>{highlight}</span>
            {parts[1]}
          </motion.h1>
        </motion.div>
        <motion.div className='mx-auto lg:max-w-[996px]'>
          <motion.p variants={childTextAnimation} className='desc'>
            {desc}
          </motion.p>
        </motion.div>
      </motion.div>

      <Mapper
        data={ABOUT_IMAGE}
        className={cn(
          'relative z-50 mt-10 flex flex-col items-center gap-6 md:z-10 md:overflow-hidden',
          'min-h-72 sm:min-h-[380px] md:min-h-[480px]',
          'lg:absolute lg:inset-0 lg:z-10 lg:block lg:min-h-0'
        )}
      >
        {(item, idx) => (
          <motion.div
            key={idx}
            className={cn(
              'relative z-50 overflow-hidden rounded-lg transition-all duration-300 md:z-10',
              item.size,
              item.position
            )}
            {...item.animation}
          >
            <Image
              src={item.images}
              fill
              alt={item.name}
              priority
              className='object-contain'
            />
          </motion.div>
        )}
      </Mapper>
    </section>
  );
};

export default AboutSection;
