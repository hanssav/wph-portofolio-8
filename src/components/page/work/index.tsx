import { WORK_DATA, WORK_SECTION } from '@/lib/constants/pages';
import { Section, Shapes } from '../../container';
import { WorkItems, WorkItemWrapper } from './partials';

const WorkSection = () => {
  const { subTitle, title, id } = WORK_SECTION;

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
            work={work}
            id={idx}
            key={idx}
            dataLength={WORK_DATA.length}
          />
        ))}
      </WorkItemWrapper>
    </Section.Root>
  );
};

export default WorkSection;
