import { LayoutWrapper } from '@/components/container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { IMAGES } from '@/lib/constants/assets';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <LayoutWrapper className='relative space-y-10'>
      <section className='base-container relative mt-20 flex h-[983px] w-full flex-col gap-10 py-10 md:mt-32 md:h-[800px] lg:mt-[221px] lg:h-auto lg:flex-row'>
        <div className='relative z-30 flex w-full flex-col gap-10 md:gap-12 lg:max-w-[807px] lg:gap-[60px]'>
          <div className='gap-xl flex flex-col'>
            <span className='flex-start gap-xl'>
              <div className='w-full max-w-20 min-w-[21px] flex-1 border border-t border-white md:max-w-[80px] lg:max-w-[114px]' />
              <h4 className='text-md-medium md:text-lg-medium lg:text-xl-medium'>
                Hi, I am Handi Irawan Frontend Developer
              </h4>
            </span>
            <h1 className='text-display-lg-bold md:text-display-xl-extrabold lg:text-display-3xl-extrabold md:text-[56px] lg:text-[80px]'>
              BUILDING FAST & <span className='text-primary'>INTERACTIVE</span>{' '}
              WEB EXPERIENCES.
            </h1>
            <p className='text-lg-medium md:text-lg-medium lg:text-xl-medium text-neutral-400 md:max-w-[500px] lg:max-w-[597px]'>
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
        <div className='absolute right-0 bottom-0 z-10 md:fixed md:top-0 md:right-0'>
          <div className='relative h-full min-h-[513px] w-screen min-w-[393px] overflow-hidden md:h-[700px] md:w-[550px] lg:h-[881px] lg:w-[661px]'>
            <Image
              src={IMAGES.PHOTOS}
              alt="handi's-photo"
              fill
              className='object-cover grayscale'
            />
            <div className='base-container absolute bottom-0 z-30 w-full'>
              <Card className='relative left-1/2 w-full -translate-x-1/2 lg:w-[316px]'>
                <CardContent className='space-y-md lg:p-2xl'>
                  <h1 className='text-display-xs-bold md:text-display-xl'>
                    5.0
                  </h1>
                  <div className='flex-start gap-2'>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        color='#F3993F'
                        fill='#F3993F'
                        size={20}
                        className='lg:size-8'
                      />
                    ))}
                  </div>
                  <p className='text-md-semibold'>Many Client Trust with me</p>
                </CardContent>
              </Card>
            </div>
            <div className='from-primary to-primary/40 absolute top-0 right-0 h-full w-1/2 bg-linear-to-b mix-blend-color' />
            <div className='absolute inset-0 bg-linear-to-b from-black/60 to-black' />
          </div>
        </div>
      </section>
      <section className='base-container'>next container</section>
    </LayoutWrapper>
  );
}
