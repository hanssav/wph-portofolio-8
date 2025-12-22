import { SectionData } from '@/types';
import { ICONS } from '../asset.constants';

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
  { id: 1, name: 'React.js', percentage: 95 },
  { id: 2, name: 'Next.js', percentage: 95 },
  { id: 3, name: 'React Native', percentage: 80 },
  { id: 4, name: 'TypeScript', percentage: 90 },
  { id: 5, name: 'Redux Toolkit', percentage: 85 },
  { id: 6, name: 'TanStack Query', percentage: 90 },
  { id: 7, name: 'Tailwind CSS', percentage: 95 },
  { id: 8, name: 'Framer Motion', percentage: 80 },
];
