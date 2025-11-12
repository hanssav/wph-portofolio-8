import { Mapper } from '../container';
import { Monitor } from 'lucide-react';
import { SectionData } from '@/types';
import { cn } from '@/lib/utils';

const SECTION: SectionData = {
  title: 'MY SERVICE EXPERTISE',
  subTitle: 'SERVICE',
  desc: `Creating modern, intuitive, and visually consistent web experiences 
    that align with industry trends and user expectations.`,
};

export type ServiceData = {
  id: string;
  title: string;
  description: string;
};

export const SERVICE_DATAS: ServiceData[] = [
  {
    id: '01',
    title: 'Custom Website Development',
    description: `Building responsive, fast, and scalable websites tailored to your needs.`,
  },
  {
    id: '02',
    title: 'Web Performance Optimization',
    description: `Enhancing website speed, SEO, and overall performance for better results.`,
  },
  {
    id: '03',
    title: 'Website Maintenance & Debugging',
    description: `Fixing bugs, improving UI, and ensuring smooth performance over time.`,
  },
];

const ServiceSection = () => {
  const { desc, subTitle, title } = SECTION;
  return (
    <section
      className={cn(
        'base-container py-section flex flex-col',
        'gap-3xl md:gap-5xl lg:gap-7xl'
      )}
    >
      {/* TEXT */}
      <div
        className={cn(
          'gap-xl lg:gap-7xl flex flex-col lg:flex-row',
          'lg:flex-between'
        )}
      >
        <div
          className={cn(
            'gap-md flex flex-1 flex-col',
            'md:text-center lg:text-start'
          )}
        >
          <p className='sub-title'>{subTitle}</p>
          <h1 className='title'>{title}</h1>
        </div>
        <p className={`desc flex-1 md:text-center lg:text-right`}>{desc}</p>
      </div>

      <Mapper
        data={SERVICE_DATAS}
        className={cn('gap-3xl grid grid-cols-1', 'lg:gap-5xl lg:grid-cols-3')}
      >
        {(service, idx) => (
          <div key={idx} className={`gap-xl md:gap-3xl flex flex-col`}>
            <div className='pb-lg border-b border-neutral-800'>
              <p className='text-md-semibold md:text-xl-semibold text-neutral-400'>
                {service.id}
              </p>
            </div>
            <Monitor size={24} className='text-primary-200 lg:size-8' />

            <h1 className='text-xl-semibold md:text-display-sm-semibold text-neutral-25'>
              {service.title}
            </h1>
            <p className='desc'>{service.description}</p>
          </div>
        )}
      </Mapper>
    </section>
  );
};

export default ServiceSection;
