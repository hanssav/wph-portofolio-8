'use client';

import { SKILL_SECTION, SKILLS_DATA, SKILLS_LOGO } from '@/lib/constants/pages';
import { SkillImage, SkillLogo, SkillLogoItem } from './partials/skill-logo';
import { SKillPercent, SkillPercentItems } from './partials/skill-percent';
import { Section } from '@/components/container';

const SkillsSection = () => {
  const { title, subTitle, id } = SKILL_SECTION;
  return (
    <Section.Root
      id={id}
      className='base-container flex flex-wrap overflow-hidden lg:gap-[58px]'
    >
      <div className='flex-col-start flex-1 basis-80 gap-6 lg:gap-14'>
        <Section.Content align='start'>
          <Section.SubTitle>{subTitle}</Section.SubTitle>
          <Section.Title> {title}</Section.Title>
        </Section.Content>
        <SkillLogo>
          {SKILLS_LOGO.map((item) => (
            <SkillLogoItem key={item.id}>
              <SkillImage item={item} />
            </SkillLogoItem>
          ))}
        </SkillLogo>
      </div>
      <SKillPercent>
        {SKILLS_DATA.map((skill, idx) => (
          <SkillPercentItems skill={skill} id={idx} key={skill.id} />
        ))}
      </SKillPercent>
    </Section.Root>
  );
};

export default SkillsSection;
