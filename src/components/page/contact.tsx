import { SectionData } from '@/types';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Image from 'next/image';
import { IMAGES } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Circle, Dribbble, Instagram, Linkedin } from 'lucide-react';
import { Mapper, Shapes } from '../container';

const CONTACT_SECTION: SectionData = {
  id: 'contact',
  title: 'LET’S GET IN TOUCH',
  subTitle: 'CONTACT',
  desc: '',
};

const ContactSection = () => {
  const { title, subTitle, id } = CONTACT_SECTION;
  return (
    // <Section.Root
    //   id={id}
    //   className='relative pb-10 md:border-t md:border-neutral-800 md:py-20 lg:py-[120px]'
    // >
    <div className='relative pb-10 md:border-t md:border-neutral-800 md:py-20 lg:py-[120px]'>
      <Shapes className='right-0 bottom-0 z-20' />
      <Shapes className='top-0 left-0 z-20 rotate-180' />

      <div className='base-container gap-3xl flex flex-wrap overflow-hidden lg:gap-[122px]'>
        <div className='flex-1 basis-80 overflow-hidden'>
          <div
            className={cn(
              'relative w-full overflow-hidden',
              'aspect-100/152',
              'lg:aspect-auto lg:h-full'
            )}
          >
            <Image
              src={IMAGES.PHOTOS}
              alt="handi's-photo"
              fill
              className='object-cover grayscale'
            />
            <div
              className={cn(
                'absolute bottom-0 left-1/2 z-50 -translate-x-1/2',
                'space-y-xl lg:space-y-3xl'
              )}
            >
              <Mapper
                className='lg:gap-3xl gap-xl flex'
                data={Array.from([Dribbble, Instagram, Linkedin])}
              >
                {(icon, idx) => {
                  const Icon = icon;
                  return (
                    <Button
                      key={idx}
                      variant={'outline'}
                      size={'icon'}
                      className='aspect-square size-[48px] rounded-full lg:size-[64px]'
                    >
                      <Icon className='size-5 text-white lg:size-[26px]' />
                    </Button>
                  );
                }}
              </Mapper>
              <div className='flex-center gap-xs flex-col'>
                <h1 className='title text-md-bold lg:text-xl-bold'>
                  Handi Irawan
                </h1>
                <div className='gap-lg flex-center'>
                  <Circle className='text-primary size-3' fill='#88dd0e' />
                  <p className='desc text-sm-semibold lg:text-md-semibold'>
                    Available for Work
                  </p>
                </div>
              </div>
            </div>
            <div className='absolute inset-0 bg-linear-to-b from-black/60 to-black' />
          </div>
        </div>
        <div className='gap-3xl lg:gap-6xl flex flex-1 basis-80 flex-col'>
          <div className='gap-md flex flex-col'>
            <p className='sub-title'>{subTitle}</p>
            <h1 className='title'>{title}</h1>
          </div>
          <div className='space-y-xl lg:space-y-3xl'>
            <div className='space-y-2'>
              <label className='form-label block' htmlFor='name'>
                Name
              </label>
              <Input type='input' placeholder='enter your name' name='name' />
            </div>
            <div className='space-y-2'>
              <label className='form-label block' htmlFor='email'>
                Email
              </label>
              <Input type='email' placeholder='enter your name' name='email' />
            </div>
            <div className='space-y-2'>
              <label className='form-label block' htmlFor='message'>
                Message
              </label>
              <Textarea
                placeholder='enter your message'
                name='message'
                className='min-h-[120px] lg:min-h-[180px]'
              />
            </div>
            <Button className='w-full'> Send Message </Button>
          </div>
        </div>
      </div>
    </div>
    // </Section.Root>
  );
};

export default ContactSection;
