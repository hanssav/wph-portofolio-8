import { MotionProps, Variants, motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import ExperienceListItem from './experience-list-item';
import { ExperienceDataType } from '@/lib/constants/pages/experience';
import { Mapper } from '@/components/container';

type CardAnimation = {
  root: MotionProps;
  child: Variants;
};

const cardAnimation = (isMe: boolean): CardAnimation => {
  const x = 50;
  const initial = { x: isMe ? x * -1 : x, opacity: 0 };

  const child: Variants = {
    initial: { ...initial, y: 10 },
    inView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const root: MotionProps = {
    initial: 'initial',
    whileInView: 'inView',
    viewport: { once: true, amount: 0.2 },
    variants: {
      initial,
      inView: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.6,
          delay: 0.5,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    },
  };

  return { root, child };
};

const ExperienceItem: React.FC<{ item: ExperienceDataType }> = ({ item }) => {
  const isMe = item.id === 'me';
  const motionCard = cardAnimation(isMe);

  return (
    <motion.div
      className='gap-3xl flex flex-1 basis-80 flex-col lg:gap-8'
      key={item.id}
      {...motionCard.root}
    >
      <motion.h1
        variants={motionCard.child}
        className='text-xl-bold text-center'
      >
        {item.title}
      </motion.h1>

      <motion.div
        variants={motionCard.child}
        className='relative inset-0 mx-auto size-[60px] overflow-hidden rounded-full'
      >
        <Image
          src={item.img}
          fill
          alt={item.title}
          priority
          className='object-cover'
          fetchPriority='high'
          sizes='60px'
        />
      </motion.div>

      <Mapper data={item.data}>
        {(skill) => (
          <motion.div variants={motionCard.child} key={skill}>
            <ExperienceListItem isMe={isMe} skill={skill} />
          </motion.div>
        )}
      </Mapper>
    </motion.div>
  );
};

export default ExperienceItem;
