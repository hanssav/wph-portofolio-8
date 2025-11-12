import { IMAGES, SHAPE_DATAS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Mapper, Shapes } from '../container';

const HeroSection = () => {
  return (
    <div className='relative overflow-hidden border-b border-neutral-800'>
      {/* Shape and border */}
      <div
        className={cn(
          'absolute top-0 bottom-0 left-[375px] hidden w-[332px]',
          'border-x border-neutral-800 md:block'
        )}
      />
      <Shapes className='bottom-50 left-0 z-20 md:bottom-0' />

      <section
        className={cn(
          'base-container relative flex w-full flex-col gap-10 py-10',
          'md:h-[881px]',
          'mx-auto lg:flex-row'
        )}
      >
        {/* Text Content */}
        <div
          className={cn(
            'z-0 flex w-full flex-col gap-10 pt-20',
            'md:absolute md:top-1/2 md:z-30 md:max-w-[700px]',
            'md:-translate-y-1/2 md:gap-12 md:pt-0',
            'md:px-0 lg:max-w-[807px] lg:gap-[60px]'
          )}
        >
          <div className='gap-xl flex flex-col'>
            <span className='flex-start gap-xl'>
              <div
                className={cn(
                  'w-full min-w-[21px] flex-1 border border-t border-white',
                  'max-w-20 md:max-w-[80px] lg:max-w-[114px]'
                )}
              />
              <h4 className='text-md-medium md:text-lg-medium lg:text-xl-medium'>
                Hi, I am Handi Irawan Frontend Developer
              </h4>
            </span>

            <h1
              className={cn(
                'text-display-lg-bold md:text-display-xl-extrabold',
                'lg:text-display-3xl-extrabold md:text-[56px] lg:text-[80px]'
              )}
            >
              BUILDING FAST & <span className='text-primary'>INTERACTIVE</span>{' '}
              WEB EXPERIENCES.
            </h1>

            <p
              className={cn(
                'text-lg-medium md:text-lg-medium lg:text-xl-medium text-neutral-400',
                'md:max-w-[500px] lg:max-w-[597px]'
              )}
            >
              Bridging creativity and functionality to deliver stunning,
              user-friendly web applications
            </p>
          </div>

          <Button className='w-full py-2 md:max-w-[250px] lg:max-w-[300px]'>
            <span className='text-sm-bold md:text-sm-bold lg:text-md-bold'>
              Hire Me
            </span>
          </Button>
        </div>
      </section>

      {/* IMAGE CONTAINER */}
      <div className='relative z-0 flex md:absolute md:top-0 md:right-0 md:bottom-0 md:z-10'>
        <div
          className={cn(
            'h-full min-h-[513px] w-screen overflow-hidden',
            'w-[45.90vw] md:relative md:h-[881px]'
          )}
        >
          <Image
            src={IMAGES.PHOTOS}
            alt="handi's-photo"
            fill
            className='object-cover grayscale'
          />

          <div className='absolute bottom-0 z-30 w-full px-4 py-10'>
            <Card
              className={cn(
                'relative left-1/2 w-full -translate-x-1/2 md:w-[70%] lg:w-[47.82%]'
              )}
            >
              <CardContent className='space-y-md lg:p-2xl'>
                <h1 className='text-display-xs-bold lg:text-display-xl'>5.0</h1>

                <Mapper
                  data={Array.from({ length: 5 })}
                  className='flex-start gap-2'
                >
                  {(_, idx) => (
                    <Star
                      key={idx}
                      color='#F3993F'
                      fill='#F3993F'
                      size={20}
                      className='lg:size-[22px]'
                    />
                  )}
                </Mapper>

                <p className='text-md-semibold lg:text-xl-semibold'>
                  Many Client Trust with me
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Blur / Overlay */}
          <div
            className={cn(
              'from-primary to-primary/40 absolute top-0 right-0 h-full',
              'w-1/2 bg-linear-to-b mix-blend-color'
            )}
          />
          <div className='absolute inset-0 bg-linear-to-b from-black/60 to-black' />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
