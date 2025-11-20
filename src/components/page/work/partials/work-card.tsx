import { Card } from '@/components/ui/card';
import { WorkType } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const WorkCard: React.FC<{ work: WorkType; className?: string }> = ({
  work,
  className,
}) => (
  <Card
    className={cn('lg:gap-xl rounded-2xl p-4 md:rounded-3xl md:p-6', className)}
  >
    <div className='gap-xs flex flex-col justify-between lg:flex-row'>
      <div className='gap-xs flex flex-col'>
        <p className='desc text-sm-regular md:text-lg-regular'>{work.year}</p>
        <h1 className='title text-md-bold md:text-display-xs-bold'>
          {work.title}
        </h1>
      </div>
      <div className='relative h-8 w-[76px] overflow-hidden lg:h-12 lg:w-[114px]'>
        <Image
          fill
          src={work.img}
          alt={work.title}
          priority
          fetchPriority='high'
          className='object-contain'
        />
      </div>
    </div>

    <p className='desc md:text-md-regular text-sm-regular'>
      {work.description}
    </p>
  </Card>
);

export default WorkCard;
