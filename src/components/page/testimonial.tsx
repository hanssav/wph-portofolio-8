import { TESTIMONIAL_DATA, TESTIMONIAL_SECTION } from '@/lib/constants/pages';
import { Card } from '../ui/card';
import Image from 'next/image';
import { Mapper } from '../container';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '../ui/button';

const TestimonialSection = () => {
  const { subTitle, title } = TESTIMONIAL_SECTION;
  return (
    <section className='py-section content-container'>
      <div className='content-header-center'>
        <p className='sub-title'>{subTitle}</p>
        <h1 className='title'>{title}</h1>
      </div>

      <div className='space-y-5xl'>
        <Mapper
          data={TESTIMONIAL_DATA}
          className='base-container md:gap-3xl lg:gap-5xl grid grid-cols-1 gap-4 md:grid-cols-2'
        >
          {(testimonial, idx) => (
            <Card
              key={idx}
              className={cn(
                'lg:gap-lg gap-3 rounded-2xl p-4 md:rounded-3xl md:p-6'
              )}
            >
              <div className='gap-xs flex justify-between'>
                <div className='gap-xs flex flex-col'>
                  <h1 className='title text-lg-bold md:text-xl-bold'>
                    {testimonial.name}
                  </h1>
                  <p className='desc text-md-regular md:text-lg-regular'>
                    {testimonial.position}
                  </p>
                </div>

                <div className='relative h-8 w-[76px] overflow-hidden lg:h-12 lg:w-[114px]'>
                  <Image
                    fill
                    src={testimonial.img}
                    alt={testimonial.name}
                    priority
                    objectFit='contain'
                  />
                </div>
              </div>
              <Mapper
                data={Array.from({ length: 5 })}
                className='flex-start gap-2'
              >
                {(_, idx) => (
                  <Star
                    key={idx}
                    color='#F3993F'
                    fill='#F3993F'
                    className='size-[14.27px] lg:size-[22.83px]'
                  />
                )}
              </Mapper>
              <p className='md:text-md-medium text-lg-regular'>
                {testimonial.testimonial}
              </p>
            </Card>
          )}
        </Mapper>
        <div className='flex-center gap-xl'>
          <Button
            variant='outline'
            className='aspect-square size-[48px] md:size-14'
          >
            <ArrowLeft className='size-4 text-neutral-800 md:size-6' />
          </Button>
          <Button
            variant='outline'
            className='aspect-square size-[48px] md:size-14'
          >
            <ArrowRight className='text-primary size-4 md:size-6' />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
