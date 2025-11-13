import { SectionData } from '@/types';
import { Mapper } from '../container';
import { ICONS } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'motion/react';

const SECTION: SectionData = {
  subTitle: 'SKILLS',
  title: 'SKILLS THAT BRING IDEAS TO LIFE',
  desc: '',
};

type SkillsLogoType = {
  id: number;
  src: string;
};

export const SKILLS_LOGO: SkillsLogoType[] = Object.entries(ICONS.SKILL).map(
  ([id, src]) => ({
    id: Number(id),
    src,
  })
);

export type SkillData = {
  id: number;
  name: string;
  percentage: number;
};

export const SKILLS_DATA: SkillData[] = [
  { id: 1, name: 'React JS', percentage: 50 },
  { id: 2, name: 'HTML', percentage: 80 },
  { id: 3, name: 'Tailwind CSS', percentage: 90 },
  { id: 4, name: 'HTML', percentage: 100 },
  { id: 5, name: 'Docker', percentage: 70 },
  { id: 6, name: 'Javascript', percentage: 90 },
];

const SkillsSection = () => {
  const { title, subTitle } = SECTION;
  return (
    <section className='base-container py-section flex flex-col gap-10 lg:flex-row'>
      <div className='flex-col-start flex-1 gap-6 lg:gap-14'>
        <div className='space-y-md'>
          <p className='sub-title'>{subTitle}</p>
          <h1 className='title'>{title}</h1>
        </div>
        <Mapper data={SKILLS_LOGO} className='gap-3xl grid grid-cols-4'>
          {(item) => (
            <div
              key={item.id}
              className='flex-center size-12 rounded-full border p-[4.8px]'
            >
              <div className='relative size-[26.24px] overflow-hidden rounded-full'>
                <Image fill src={item.src} alt={item.src} priority />
              </div>
            </div>
          )}
        </Mapper>
      </div>
      <Mapper
        data={SKILLS_DATA}
        className='flex-col-start lg:gap-3xl gap-xl flex-1'
      >
        {(skill) => (
          <div
            key={skill.id}
            className='lg:gap-3xl flex h-[41.4px] w-full gap-4 lg:h-16'
          >
            <div className='relative flex-1'>
              <motion.div
                className='bg-primary-300 absolute inset-0 z-20 overflow-hidden rounded-[12.9px] lg:rounded-3xl'
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: skill.percentage / 100 }}
                transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
              />

              <div className='flex-start relative z-30 h-full px-[15.52px]'>
                <motion.p
                  className='text-sm-semibold lg:text-lg-semibold'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                    delay: 0.5,
                  }}
                >
                  {skill.name}
                </motion.p>
              </div>
              <motion.span
                className='absolute top-1/2 z-10 w-full border-t border-neutral-800'
                style={{ originX: 0 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.9, ease: 'easeOut' }}
              />
            </div>
            <motion.p
              className='text-sm-semibold lg:text-xl-semibold flex-center text-white'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 2 }}
            >
              {skill.percentage}%
            </motion.p>
          </div>
        )}
      </Mapper>
    </section>
  );
};

export default SkillsSection;
