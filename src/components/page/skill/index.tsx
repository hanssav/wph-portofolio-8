'use client';

import { SKILL_SECTION, SKILLS_LOGO } from '@/lib/constants/pages';
import { SkillImage, SkillLogo, SkillLogoItem } from './partials/skill-logo';
import { Section } from '@/components/container';
import { motion } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

const SkillsSection = () => {
  const { title, subTitle, id } = SKILL_SECTION;

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='base-container flex flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20'
    >
      <motion.div
        {...baseInViewAnimation(0.1, 0.2)}
        className='flex w-full flex-col items-center gap-6 px-4 py-6 sm:gap-8 sm:px-6 sm:py-8 md:gap-12 md:px-8 md:py-12 lg:gap-16 lg:py-16'
      >
        <SkillLogo>
          {SKILLS_LOGO.map((item) => (
            <SkillLogoItem key={item.id}>
              <SkillImage item={item} />
            </SkillLogoItem>
          ))}
        </SkillLogo>
      </motion.div>
    </Section.Root>
  );
};

export default SkillsSection;
