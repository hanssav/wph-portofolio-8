'use client';

import { SERVICE_DATAS, SERVICE_SECTION } from '@/lib/constants/pages';
import { ServiceCard, ServiceCardItems } from './partials';
import { Section } from '@/components/container';

const ServiceSection = () => {
  const { desc, subTitle, title, id } = SERVICE_SECTION;

  return (
    <Section.Root id={id} className='base-container flex-col'>
      <div className='content-container flex flex-wrap overflow-hidden'>
        <Section.Content align='start' className='flex-1 basis-80'>
          <Section.SubTitle>{subTitle}</Section.SubTitle>
          <Section.Title> {title}</Section.Title>
        </Section.Content>
        <Section.Desc className='flex-1 basis-80 lg:text-right'>
          {desc}
        </Section.Desc>
      </div>
      <ServiceCard className=''>
        {SERVICE_DATAS.map((service, idx) => (
          <ServiceCardItems idx={idx} service={service} key={idx} />
        ))}
      </ServiceCard>
    </Section.Root>
  );
};

export default ServiceSection;
