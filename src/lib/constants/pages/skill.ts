import { SectionData } from '@/types';
import { ICONS } from '../asset.contants';

export const SKILL_SECTION: SectionData = {
  id: 'skills',
  subTitle: 'SKILLS',
  title: 'SKILLS THAT BRING IDEAS TO LIFE',
  desc: '',
};

export type SkillsLogoType = {
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
