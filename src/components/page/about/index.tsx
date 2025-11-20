'use client';

import { Mapper, Section, Shapes } from '../../container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ABOUT_IMAGE, ABOUT_SECTION } from '@/lib/constants/pages';
import { motion } from 'motion/react';

const AboutSection = () => {
  const { desc, subTitle, title, id } = ABOUT_SECTION;
  const highlight = 'HIGH-PERFORMANCE WEB';
  const parts = title.split(highlight);

  return (
    <Section.Root id={id} className='relative flex-col text-center'>
      <div className='base-container space-y-xl lg:space-y-7xl z-30'>
        <Section.Content className='lg:space-y-xl'>
          <Section.SubTitle>{subTitle}</Section.SubTitle>
          <Section.Title>
            {parts[0]}
            <span className='text-primary inline md:block'>{highlight}</span>
            {parts[1]}
          </Section.Title>
        </Section.Content>
        <motion.div className='mx-auto lg:max-w-[996px]'>
          <Section.Desc>{desc}</Section.Desc>
        </motion.div>
      </div>
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
              sizes={item.imageSizes}
              priority
              fetchPriority='high'
              className='object-contain'
            />
          </motion.div>
        )}
      </Mapper>
      <Shapes className='bottom-0 -left-6 z-20 -translate-y-4/5 rotate-90' />
    </Section.Root>
  );
};

export default AboutSection;
