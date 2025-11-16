import { SKILL_SECTION, SKILLS_DATA, SKILLS_LOGO } from '@/lib/constants/pages';
import { motion } from 'motion/react';
import { childTextAnimation, textAnimation } from '@/lib/constants/animation';
import { SkillImage, SkillLogo, SkillLogoItem } from './partials/skill-logo';
import { SKillPercent, SkillPercentItems } from './partials/skill-percent';

const SkillsSection = () => {
  const { title, subTitle } = SKILL_SECTION;
  return (
    <section className='base-container py-section flex flex-col gap-10 lg:flex-row'>
      <motion.div
        {...textAnimation}
        className='flex-col-start flex-1 gap-6 lg:gap-14'
      >
        <div className='space-y-md'>
          <motion.p variants={childTextAnimation} className='sub-title'>
            {subTitle}
          </motion.p>
          <motion.h1 variants={childTextAnimation} className='title'>
            {title}
          </motion.h1>
        </div>
        <SkillLogo>
          {SKILLS_LOGO.map((item) => (
            <SkillLogoItem key={item.id}>
              <SkillImage item={item} />
            </SkillLogoItem>
          ))}
        </SkillLogo>
      </motion.div>
      <SKillPercent>
        {SKILLS_DATA.map((skill, idx) => (
          <SkillPercentItems skill={skill} id={idx} key={skill.id} />
        ))}
      </SKillPercent>
    </section>
  );
};

export default SkillsSection;
