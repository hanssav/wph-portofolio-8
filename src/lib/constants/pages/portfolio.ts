import { SectionData } from '@/types';
import { IMAGES } from '../asset.contants';

export const PORTOFOLIO_SECTION: SectionData = {
  id: 'portfolio',
  subTitle: 'PORTFOLIO',
  title: 'SELECTED WORK',
  desc: '',
};

export type PortfolioType = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export const PORTFOLIO_DATA: PortfolioType[] = [
  {
    id: 1,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[1],
  },
  {
    id: 2,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[2],
  },
  {
    id: 3,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[3],
  },
  {
    id: 4,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[4],
  },
  {
    id: 5,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[5],
  },
  {
    id: 6,
    title: 'Dashboard SaaS Task Management',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
    image: IMAGES.PORTOFOLIO_SECTION[6],
  },
];
