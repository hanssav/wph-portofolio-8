'use client';
import { Mapper, Section } from '../../container';
import { Button } from '../../ui/button';
import {
  EXPERIENCE_DATA,
  EXPERIENCE_SECTION,
} from '@/lib/constants/pages/experience';
import { ExperienceItem } from './partials';
import { motion, MotionProps } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

const MotionButton = motion.create(Button);

const buttonAnimation: MotionProps = {
  ...baseInViewAnimation(),
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
  whileTap: { scale: 0.98 },
};

const ExperienceSection = () => {
  const { title, subTitle, id } = EXPERIENCE_SECTION;

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='base-container flex-col lg:items-center'
    >
      <Mapper
        data={EXPERIENCE_DATA}
        className='lg:gap-8xl flex w-full flex-col gap-12 lg:flex-row'
      >
        {(item) => <ExperienceItem key={item.id} item={item} />}
      </Mapper>

      <MotionButton
        {...buttonAnimation}
        aria-label='hire-me'
        className='w-full md:max-w-60 md:p-2'
      >
        HIRE ME
      </MotionButton>
    </Section.Root>
  );
};

export default ExperienceSection;
