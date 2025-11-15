import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { SERVICE_DATAS, SERVICE_SECTION } from '@/lib/constants/pages';

import { ServiceCard, ServiceCardItems } from './partials';
import { childTextAnimation, textAnimation } from '@/lib/constants/animation';

const ServiceSection = () => {
  const { desc, subTitle, title } = SERVICE_SECTION;

  return (
    <section
      className={cn('base-container py-section content-container flex-start')}
    >
      <motion.div
        {...textAnimation}
        className={cn(
          'gap-xl lg:gap-7xl lg:flex-between flex flex-col lg:flex-row'
        )}
      >
        <motion.div
          className={cn(
            'gap-md flex flex-1 flex-col',
            'md:text-center lg:text-start'
          )}
        >
          <motion.p variants={childTextAnimation} className='sub-title'>
            {subTitle}
          </motion.p>
          <motion.h1 variants={childTextAnimation} className='title'>
            {title}
          </motion.h1>
        </motion.div>
        <motion.p
          variants={childTextAnimation}
          className={`desc flex-1 md:text-center lg:text-right`}
        >
          {desc}
        </motion.p>
      </motion.div>

      <ServiceCard>
        {SERVICE_DATAS.map((service, idx) => (
          <ServiceCardItems idx={idx} service={service} key={idx} />
        ))}
      </ServiceCard>
    </section>
  );
};

export default ServiceSection;
