import { SectionData } from '@/types';

export const SERVICE_SECTION: SectionData = {
  id: 'service',
  title: 'MY SERVICE EXPERTISE',
  subTitle: 'SERVICE',
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
    title: 'Custom Website Development',
    description: `Building responsive, fast, and scalable websites tailored to your needs.`,
  },
  {
    id: '02',
    title: 'Web Performance Optimization',
    description: `Enhancing website speed, SEO, and overall performance for better results.`,
  },
  {
    id: '03',
    title: 'Website Maintenance & Debugging',
    description: `Fixing bugs, improving UI, and ensuring smooth performance over time.`,
  },
];
