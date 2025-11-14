import { IMAGES } from '@/lib/constants';
import { SectionData } from '@/types';
import { Mapper } from '../container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const SECTION: SectionData = {
  subTitle: 'WORKING',
  title: 'WHY CHOOSE ME?',
  desc: '',
};

export type WorkingWithMeType = {
  title: string;
  img: string;
  data: string[];
};

export const WORKING_WITH_ME_DATA: WorkingWithMeType[] = [
  {
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

const SparkleIcon: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill = '#88dd0e',
}) => {
  const points = [];
  const centerX = 12;
  const centerY = 12;
  const outerRadius = 10;
  const innerRadius = 4;
  const numPoints = 10;

  for (let i = 0; i < numPoints * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / numPoints - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <svg viewBox='0 0 24 24' fill={fill} className={cn('h-6 w-6', className)}>
      <polygon points={points.join(' ')} />
    </svg>
  );
};

const ExperienceItem: React.FC<{ skill: string; isMe: boolean }> = ({
  skill,
  isMe,
}) => {
  return (
    <div className='gap-lg pb-3xl flex w-full items-center border-b border-neutral-800'>
      <SparkleIcon
        fill={!isMe ? '#91FF0266' : '#88dd0e'}
        className='lg:size-8'
      />
      <h1
        className={cn(
          'text-md-bold lg:text-xl-bold',
          !isMe && 'text-neutral-400'
        )}
      >
        {skill}
      </h1>
    </div>
  );
};

const ExperienceSection = () => {
  const { title, subTitle } = SECTION;

  return (
    <section className='base-container py-section lg:gap-y-6xl flex flex-col gap-6 lg:items-center'>
      <div className='gap-md flex flex-col justify-center text-center'>
        <p className='sub-title'>{subTitle}</p>
        <h1 className='title'>{title}</h1>
      </div>

      <Mapper
        data={WORKING_WITH_ME_DATA}
        className='lg:gap-8xl flex w-full flex-col gap-12 lg:flex-row'
      >
        {(item, idx) => {
          return (
            <div
              className='gap-3xl flex flex-1 basis-80 flex-col items-center lg:gap-8'
              key={idx}
            >
              <h1 className='text-xl-bold'>{item.title}</h1>
              <div className='relative size-[60px] overflow-hidden rounded-full'>
                <Image
                  src={item.img}
                  fill
                  alt={item.title}
                  priority
                  className='object-cover'
                />
              </div>
              <Mapper data={item.data}>
                {(skill) => (
                  <ExperienceItem key={skill} isMe={idx === 0} skill={skill} />
                )}
              </Mapper>
            </div>
          );
        }}
      </Mapper>

      <Button className='w-full md:max-w-60 md:p-2'>HIRE ME</Button>
    </section>
  );
};

export default ExperienceSection;

// ======================
// OTHERS ICONS
// ======================

// const SparkleIcon = () => (
//   <svg viewBox='0 0 24 24' fill='currentColor' className='h-6 w-6'>
//     <path d='M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z' />
//   </svg>
// );

// const SparkleIcon: React.FC<{ className?: string; fill?: string }> = (
//   className,
//   fill = '#88dd0e'
// ) => (
//   <svg viewBox='0 0 24 24' fill={fill} className={cn('h-6 w-6', className)}>
//     <polygon points='12,2 13.2,8.8 19.1,5.9 14.8,10.2 21.4,11.4 15.2,13.6 19.1,18.1 13.2,15.2 14.8,21.8 12,16 9.2,21.8 10.8,15.2 4.9,18.1 8.8,13.6 2.6,11.4 9.2,10.2 4.9,5.9 10.8,8.8' />
//   </svg>
// );
