import { Shapes } from '@/components/container';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const SectionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.8 },
        }}
        className={cn(
          'absolute top-0 bottom-0 left-[375px] hidden w-[332px]',
          'border-x border-neutral-800 md:block'
        )}
      />
      <Shapes className='bottom-1/4 left-0 z-20 md:bottom-0' />
    </>
  );
};

export default SectionEffect;
