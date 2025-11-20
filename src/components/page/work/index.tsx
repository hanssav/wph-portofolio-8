'use client';

import { WORK_DATA, WORK_SECTION } from '@/lib/constants/pages';
import { Section, Shapes } from '../../container';
import { WorkItems, WorkItemWrapper } from './partials';
import React from 'react';

type OnAnimateType = 'start' | 'completed';
export type AnimateType = Record<number, OnAnimateType>;

const WorkSection = () => {
  const { subTitle, title, id } = WORK_SECTION;
  const [isAnimate, setIsAnimate] = React.useState<AnimateType>({});

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='content-container relative flex-col'
    >
      <Shapes className='-right-6 bottom-0 left-auto z-20 -rotate-90' />

      <WorkItemWrapper>
        {WORK_DATA.map((work, idx) => (
          <WorkItems
            key={idx}
            work={work}
            id={idx}
            dataLength={WORK_DATA.length}
            isAnimate={isAnimate}
            setIsAnimate={setIsAnimate}
          />
        ))}
      </WorkItemWrapper>
    </Section.Root>
  );
};

export default WorkSection;
