import { SectionData } from '@/types';

export const SERVICE_SECTION: SectionData = {
  id: 'expertise',
  title: 'MY CORE EXPERTISE',
  subTitle: 'EXPERTISE',
  desc: `Creating modern, intuitive, and visually consistent web experiences 
    that align with industry trends and user expectations.`,
};

export type ServiceData = {
  id: string;
  title: string;
  description: string;
};

export const SERVICE_DATAS: ServiceData[] = [
  {
    id: '01',
    title: 'Frontend Web Development',
    description: `Building scalable, high-performance web applications using React.js and Next.js with a focus on modern architecture and best practices.`,
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description: `Creating robust cross-platform mobile applications for iOS and Android using React Native, ensuring a native-like user experience.`,
  },
  {
    id: '03',
    title: 'Interactive UI/UX Implementation',
    description: `Translating designs into pixel-perfect, responsive interfaces with immersive animations using Framer Motion and Tailwind CSS.`,
  },
  // {
  //   id: '04',
  //   title: 'Performance Optimization',
  //   description: `Enhancing application speed, load times, and Core Web Vitals to ensure a smooth and efficient user experience.`,
  // },
];
