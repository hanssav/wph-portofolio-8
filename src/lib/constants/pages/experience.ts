import { SectionData } from '@/types';
import { IMAGES } from '../asset.constants';

export const EXPERIENCE_SECTION: SectionData = {
  id: 'working',
  subTitle: 'WORKING',
  title: 'WHY CHOOSE ME?',
  desc: '',
};

export type ExperienceDataType = {
  id: string;
  title: string;
  img: string;
  data: string[];
};

export const EXPERIENCE_DATA: ExperienceDataType[] = [
  {
    id: 'me',
    title: 'WORKING WITH ME',
    img: IMAGES.PHOTOS,
    data: [
      'Scalable & High-Performance Code',
      'Pixel-Perfect Design Implementation',
      'Advanced React & Next.js Expertise',
      'Clean, Testable & Maintainable Code',
      'Seamless Cross-Platform Experiences',
      'Modern UI/UX with Motion & Animation',
    ],
  },
  {
    id: 'others',
    title: 'ANOTHER TALENT',
    img: IMAGES.AVATAR_UNKNOWN,
    data: [
      'Basic React Knowledge',
      'Inconsistent Design Translation',
      'Little to No TypeScript Knowledge',
      'Unstructured Code',
      'Inconsistent Responsiveness',
      'No Design Skills',
    ],
  },
];
