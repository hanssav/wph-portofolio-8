import { SectionData } from '@/types';
import { IMAGES } from '../asset.constants';

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
  github?: string;
  liveDemo?: string;
};

export const PORTFOLIO_DATA: PortfolioType[] = [
  {
    id: 1,
    title: 'BBA-AJAIB Payment Portal',
    description:
      'Implemented a financial transaction bridge for Ajaib and Bank Bumi Arta, managing secure workflows from account creation to multi-level approval systems. Tech Stack: React.js, Next.js, Ant Design, Context API, Jest, React Testing Library.',
    image: IMAGES.PORTOFOLIO_SECTION[1],
    github: 'https://github.com/hanssav/BBA-AJAIB-ARSHIP',
  },
  {
    id: 2,
    title: 'WPH Restaurant App',
    description:
      'A modern feature-rich food ordering platform with Optimistic UI updates, authentication, and cart management. Built for performance and seamless user experience.',
    image: IMAGES.PORTOFOLIO_SECTION[2],
    github: 'https://github.com/hanssav/wph-restaurant-app',
    liveDemo: 'https://wph-restaurant-app.vercel.app/home',
  },
  {
    id: 3,
    title: 'Personal Portfolio Website',
    description:
      'A high-performance portfolio featuring advanced motion design and storytelling, showcasing technical expertise through interactive experiences.',
    image: IMAGES.PORTOFOLIO_SECTION[3],
    github: 'https://github.com/hanssav/wph-portofolio-8',
    liveDemo: 'https://wph-portofolio-8.vercel.app',
  },
  {
    id: 4,
    title: 'Holly Ways – Crowdfunding Platform',
    description:
      'A full-stack donation platform where users can browse social campaigns, make secure donations, and initiate fundraising efforts for community impact.',
    image: IMAGES.PORTOFOLIO_SECTION[4],
    github: 'https://github.com/hanssav/wph-social-app',
    liveDemo: 'https://wph-social-app.vercel.app/login',
  },
  {
    id: 5,
    title: 'RN Movie App',
    description:
      'A premium feature-rich movie discovery platform built with React Native, offering advanced search, detailed movie information, and a polished UI/UX.',
    image: IMAGES.PORTOFOLIO_SECTION[5],
    github: 'https://github.com/hanssav/rn-movie-app',
  },
  {
    id: 6,
    title: 'WPH Library App',
    description:
      'A comprehensive library management system featuring book borrowing flows, profile management, and an admin dashboard with Optimistic UI updates.',
    image: IMAGES.PORTOFOLIO_SECTION[7],
    github: 'https://github.com/hanssav/wph-library-app',
    liveDemo: 'https://wph-library-app.vercel.app',
  },
  {
    id: 7,
    title: 'Streaming TMDB Movie App',
    description:
      'A high-performance movie streaming discovery app leveraging the TMDB API, featuring category browsing and responsive design.',
    image: IMAGES.PORTOFOLIO_SECTION[6],
    github: 'https://github.com/hanssav/streaming-tmdb-api',
    liveDemo: 'https://streaming-tmdb-api.vercel.app/home',
  },
];
