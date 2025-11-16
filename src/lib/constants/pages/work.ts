import { SectionData } from '@/types';
import { ICONS } from '../asset.contants';

export const WORK_SECTION: SectionData = {
  id: 'experience',
  subTitle: 'EXPERIENCE',
  title: 'PROFESIONAL WORK',
  desc: '',
};

export type WorkType = {
  year: string;
  title: string;
  description: string;
  img: string;
};

export const WORK_DATA: WorkType[] = [
  {
    year: '2020 - 2022',
    title: 'Frontend Developer 1',
    description: `Builds responsive and high-performance web applications with clean, 
    maintainable code. Expert in translating UI/UX designs into pixel-perfect 
    interfaces using modern frameworks. Focused on optimizing performance, 
    accessibility, and seamless user experiences.`,
    img: ICONS.COMPANY[1],
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer 2',
    description: `Builds responsive and high-performance web applications with clean, 
    maintainable code. Expert in translating UI/UX designs into pixel-perfect 
    interfaces using modern frameworks. Focused on optimizing performance, 
    accessibility, and seamless user experiences.`,
    img: ICONS.COMPANY[2],
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer 3',
    description: `Builds responsive and high-performance web applications with clean, 
    maintainable code. Expert in translating UI/UX designs into pixel-perfect 
    interfaces using modern frameworks. Focused on optimizing performance, 
    accessibility, and seamless user experiences.`,
    img: ICONS.COMPANY[3],
  },
  {
    year: '2020 - 2022',
    title: 'Frontend Developer 4',
    description: `Builds responsive and high-performance web applications with clean, 
    maintainable code. Expert in translating UI/UX designs into pixel-perfect 
    interfaces using modern frameworks. Focused on optimizing performance, 
    accessibility, and seamless user experiences.`,
    img: ICONS.COMPANY[4],
  },
];
