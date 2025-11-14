import { WORK_DATA, WORK_SECTION, WorkType } from '@/lib/constants/pages';
import { Mapper, Shapes } from '../container';
import { Card } from '../ui/card';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const CardContent: React.FC<{ work: WorkType; className?: string }> = ({
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
          objectFit='contain'
        />
      </div>
    </div>

    <p className='desc md:text-md-regular text-sm-regular'>
      {work.description}
    </p>
  </Card>
);

const WorkSection = () => {
  const { subTitle, title } = WORK_SECTION;

  return (
    <section className='py-section lg:gap-y-7xl relative flex flex-col items-center gap-6'>
      <Shapes className='-right-6 bottom-0 z-20 -rotate-90' />

      <div className='gap-md flex max-w-[74.35vw] flex-col justify-center text-center md:max-w-full'>
        <p className='sub-title'>{subTitle}</p>
        <h1 className='title'>{title}</h1>
      </div>

      <Mapper
        data={WORK_DATA}
        className='base-container gap-xl lg:gap-7xl grid grid-cols-[2.5rem_auto] lg:grid-cols-[auto_2.5rem_auto]'
      >
        {(work, idx) => (
          <React.Fragment key={idx}>
            <div className='hidden lg:block lg:justify-self-start'>
              {idx % 2 !== 0 ? (
                <CardContent work={work} />
              ) : (
                <CardContent work={work} className='invisible lg:block' />
              )}
            </div>

            <div
              className={cn(
                'group relative mb-4 last:mb-0 nth-last-2:mb-0 md:mb-8',
                // target child
                '[&:nth-last-child(2)>.line-decoration]:h-1/2'
              )}
            >
              <div
                className={cn(
                  'line-decoration absolute left-1/2 w-px -translate-x-1/2 bg-neutral-800',
                  // first line → start line from middle
                  idx === 0 ? 'top-1/2' : 'top-0',
                  // last array → h-1/2
                  idx === WORK_DATA.length - 1
                    ? 'h-1/2'
                    : 'h-[calc(100%+4rem)] lg:h-[calc(100%+7rem)]'
                )}
              />

              <span
                className={cn(
                  'flex-center absolute inset-x-0 top-1/2 -translate-y-1/2',
                  'aspect-square size-[40px] rounded-full p-2 lg:size-[48px]',
                  'text-primary-200 bg-background border border-neutral-800',
                  'lg:text-md z-20 text-sm font-bold'
                )}
              >
                {idx + 1}
              </span>
            </div>

            <div className='hidden lg:block lg:justify-self-end'>
              {idx % 2 === 0 ? (
                <CardContent work={work} />
              ) : (
                <CardContent work={work} className='invisible lg:block' />
              )}
            </div>

            <CardContent work={work} className='lg:hidden' />
          </React.Fragment>
        )}
      </Mapper>
    </section>
  );
};

export default WorkSection;
