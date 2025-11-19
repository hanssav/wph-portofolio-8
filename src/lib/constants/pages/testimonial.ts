import { SectionData } from '@/types';

export const TESTIMONIAL_SECTION: SectionData = {
  id: 'testimonials',
  subTitle: 'TESTIMONIALS',
  title: 'PEOPLE SAYS ABOUT ME',
  desc: '',
};

import { ICONS } from '@/lib/constants';

export type TestimonialType = {
  name: string;
  position: string;
  testimonial: string;
  feedback: string;
  img: string;
};

export const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    name: 'Thom Haye',
    position: 'Project Manager',
    testimonial: `Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!`,
    feedback: `An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!`,
    img: ICONS.COMPANY[1],
  },
  {
    name: 'Emily Carter',
    position: 'Head of Product',
    testimonial: `Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!`,
    feedback: `An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!`,
    img: ICONS.COMPANY[2],
  },
  {
    name: 'Sarah Lee',
    position: 'Engineering Manager',
    testimonial: `An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!`,
    feedback: `A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!`,
    img: ICONS.COMPANY[3],
  },
  {
    name: 'Michael Brown',
    position: 'Lead Developer',
    testimonial: `An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!`,
    feedback: `A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!`,
    img: ICONS.COMPANY[4],
  },
];
