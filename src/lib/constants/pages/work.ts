import { SectionData } from '@/types';
import { ICONS } from '../asset.constants';

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
    year: '2022 – 2024',
    title: 'Frontend Developer | PT OVERO DIGITAL GLOBAL',
    description: `Engineered 10+ core modules for bank account creation and multi-level approval workflows, handling sensitive data with 100% business logic accuracy. Constructed 20+ robust and responsive UI pages using Next.js and Ant Design. Integrated Context API for centralized state management, reducing data inconsistency by an estimated 40%. Sustained 90%+ code reliability by implementing comprehensive unit tests with Jest and React Testing Library.`,
    img: ICONS.COMPANY[1],
  },
  {
    year: '2019 – 2024',
    title: 'Web Developer (Freelance) | PT NARENDRA WIJAYA SUNAR MULYA GROUP',
    description: `Delivered professional company profile websites and high-impact sales pages, ensuring enhanced performance and mobile responsiveness for corporate clients. Streamlined the transition from marketing requirements to technical delivery, cutting development time by 15% through standardized WordPress workflows.`,
    img: ICONS.COMPANY[2],
  },
  {
    year: '2020 – 2021',
    title: 'Web Developer & Online Marketing | SAMARA GROUP',
    description: `Launched a comprehensive corporate blog and 4 targeted marketing landing pages, significantly increasing the company's online visibility and brand awareness. Integrated digital marketing strategies into web development, resulting in improved lead conversion rates and contributing to a noticeable increase in sales revenue. Customized web functionalities for various internal projects, achieving a high user satisfaction rate by enhancing UI engagement and navigation flow.`,
    img: ICONS.COMPANY[3],
  },
];
