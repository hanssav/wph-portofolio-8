import { WORK_DATA, WORK_SECTION } from '@/lib/constants/pages';
import { Mapper } from '../container';
import { Card } from '../ui/card';
import Image from 'next/image';
import React from 'react';
import { cn } from '@/lib/utils';

const WorkSection = () => {
  const { subTitle, title } = WORK_SECTION;

  return (
    <section className='base-container py-section flex flex-col items-center gap-6'>
      <div className='gap-md flex max-w-[74.35vw] flex-col justify-center text-center md:max-w-full'>
        <p className='sub-title'>{subTitle}</p>
        <h1 className='title'>{title}</h1>
      </div>
      <Mapper data={WORK_DATA} className='gap-xl grid grid-cols-[2.5rem_auto]'>
        {(work, idx) => (
          <React.Fragment key={idx}>
            <div
              className={cn(
                'group relative mb-4 last:mb-0 nth-last-2:mb-0 md:mb-8',
                // target child
                '[&:nth-last-child(2)>.line-decoration]:h-1/2'
              )}
            >
              <div className='line-decoration absolute top-0 left-1/2 z-10 h-[calc(100%+4rem)] w-px -translate-x-1/2 bg-neutral-800 group-first:top-1/2 group-last:h-1/2' />

              <span
                className={cn(
                  'flex-center absolute inset-x-0 top-1/2 -translate-y-1/2',
                  'aspect-square rounded-full border border-neutral-800 p-2',
                  'text-primary-200 bg-background z-20 text-sm font-bold'
                )}
              >
                {idx + 1}
              </span>
            </div>

            <Card className='rounded-2xl p-4'>
              <div className='space-y-xs'>
                <p className='desc text-sm-regular'>{work.year}</p>
                <h1 className='title text-md-bold'>{work.title}</h1>
                <div className='relative h-8 w-[76px] overflow-hidden'>
                  <Image
                    fill
                    src={work.img}
                    alt={work.title}
                    priority
                    objectFit='contain'
                  />
                </div>
              </div>

              <p className='desc text-sm-regular'>{work.description}</p>
            </Card>
          </React.Fragment>
        )}
      </Mapper>
    </section>
  );
};

export default WorkSection;
