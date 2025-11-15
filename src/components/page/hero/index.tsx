import { cn } from '@/lib/utils';
import { BlurEffect } from './image/partials';
import HeroContent from './content';
import HeroImage from './image';
import SectionEffect from './section-effect';

const HeroSection = () => {
  return (
    <section className='relative overflow-hidden border-b border-neutral-800'>
      <SectionEffect />
      <div
        className={cn(
          'base-container relative flex w-full flex-col gap-10 py-10',
          'md:h-[881px]',
          'mx-auto lg:flex-row'
        )}
      >
        <HeroContent />
      </div>
      <div
        className={cn(
          'relative z-0 flex',
          'md:absolute md:top-0 md:right-0 md:bottom-0 md:z-10'
        )}
      >
        <HeroImage />

        <BlurEffect />
      </div>
    </section>
  );
};

export default HeroSection;
