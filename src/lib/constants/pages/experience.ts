import { SectionData } from '@/types';
import { IMAGES } from '../asset.contants';

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
      'React Expert',
      'Precise Website Implementation',
      'TypeScript Proficiency',
      'Clean, Maintainable Code',
      'Responsive Website Development',
      'UI Design Proficiency (Figma)',
    ],
  },
  {
    id: 'others',
    title: 'ANOTHER TALENT',
    img: IMAGES.PHOTOS,
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
