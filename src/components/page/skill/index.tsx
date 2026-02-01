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
      className='base-container flex flex-col items-center justify-center overflow-hidden py-12 lg:py-20'
    >
      <motion.div
        {...baseInViewAnimation(0.1, 0.2)}
        className='flex flex-col items-center gap-8 py-8 lg:gap-16 lg:py-16'
      >
        <Section.Content align='center'>
          <Section.SubTitle>{subTitle}</Section.SubTitle>
          <h1 className='mb-8 text-3xl font-bold text-white lg:text-5xl'>
            {title}
          </h1>
        </Section.Content>
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
