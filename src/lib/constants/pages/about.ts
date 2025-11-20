import { SectionData } from '@/types';
import { IMAGES } from '../asset.contants';
import { MotionProps } from 'motion/react';

export const ABOUT_SECTION: SectionData = {
  id: 'about-me',
  title: 'CRAFTING SEAMLESS HIGH-PERFORMANCE WEB EXPERIENCES',
  desc: `I love turning designs into interactive, high-performance websites. 
  With a keen eye for detail and a deep understanding of frontend technologies,
   I create smooth and visually appealing user experiences.`,
  subTitle: 'ABOUT ME',
};

type AboutImageType = {
  images: string;
  name: string;
  position: string;
  size?: string;
  imageSizes: string;
  animation?: Partial<MotionProps>;
};

export const figure8Animation: Partial<MotionProps> = {
  animate: {
    x: [0, 12, 20, 12, 0, -12, -20, -12, 0],
    y: [0, -12, -40, -70, -40, -12, 0],
    rotate: [0, 3, 6, 3, 0, -3, -6, -3, 0],
    scale: [1, 1.03, 1.06, 1.03, 1, 1.03, 1.06, 1.03, 1],
  },
  transition: {
    duration: 18,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: [0.42, 0, 0.58, 1], // cubic-bezier easeInOut
  },
};

export const orbitAnimation: Partial<MotionProps> = {
  animate: {
    x: [0, 10, 20, 10, 0, -10, -20, -10, 0],
    y: [0, -25, -45, -60, -45, -25, 0],
    rotate: [0, 6, 12, 6, 0, -6, -12, -6, 0],
  },
  transition: {
    duration: 16,
    repeat: Infinity,
    repeatType: 'mirror',
    ease: 'easeInOut',
  },
};

export const waveAnimation: Partial<MotionProps> = {
  animate: {
    y: [0, -15, -25, -35, -25, -15, 0, 15, 25, 15, 0],
    x: [0, 6, 12, 6, 0, -6, -12, -6, 0],
    rotate: [0, 3, 7, 3, 0, -3, -7, -3, 0],
    scale: [1, 1.02, 1.04, 1.02, 1, 1.02, 1.04, 1.02, 1],
  },
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: [0.42, 0, 0.58, 1],
  },
};

export const ABOUT_IMAGE: AboutImageType[] = [
  {
    images: IMAGES.PORTFOLIO[3],
    name: 'portfolio-1',
    position: `
      absolute left-[calc(50%-80px)] -translate-x-1/2
      sm:left-[15%] sm:translate-x-0 sm:top-4
      md:left-[10%] md:top-8
      lg:left-[calc(50%-450px)] lg:top-10
    `,
    size: `
      min-h-[127px] min-w-[170px]
      sm:w-[200px] sm:h-[150px]
      md:w-[260px] md:h-[195px]
      lg:w-[238px] lg:h-[178px]
    `,
    imageSizes: `
      (min-width: 1024px) 238px,
      (min-width: 768px) 260px,
      (min-width: 640px) 200px,
      170px
    `,
    animation: waveAnimation,
  },
  {
    images: IMAGES.PORTFOLIO[1],
    name: 'portfolio-2',
    position: `
      absolute top-[45px] left-[calc(50%+90px)] -translate-x-1/2
      sm:left-auto sm:right-[15%] sm:translate-x-0 sm:top-8
      md:right-[10%] md:top-12
      lg:top-24 lg:left-[calc(50%+300px)] lg:right-auto
    `,
    size: `
      min-h-[99px] min-w-[134px]
      sm:w-[180px] sm:h-[135px]
      md:w-[240px] md:h-[180px]
      lg:w-[250px] lg:h-[187px]
    `,
    imageSizes: `
      (min-width: 1024px) 250px,
      (min-width: 768px) 240px,
      (min-width: 640px) 180px,
      134px
    `,
    animation: figure8Animation,
  },
  {
    images: IMAGES.PORTFOLIO[2],
    name: 'portfolio-3',
    position: `
      absolute top-[164px] left-[calc(50%)] -translate-x-1/2
      sm:top-[190px]
      md:top-[250px]
      lg:top-[calc(50%)] lg:left-[calc(50%+200px)]
    `,
    size: `
      min-w-[132.5px] min-h-[100px]
      sm:w-[190px] sm:h-[143px]
      md:w-[250px] md:h-[188px]
      lg:w-[117px] lg:h-[88px]
    `,
    imageSizes: `
      (min-width: 1024px) 117px,
      (min-width: 768px) 250px,
      (min-width: 640px) 190px,
      132.5px
    `,
    animation: orbitAnimation,
  },
];
