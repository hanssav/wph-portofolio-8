import { Button } from '../../ui/button';
import { IMAGES } from '@/lib/constants';
import { Shapes } from '../../container';
import { motion, Variants } from 'motion/react';
import {
  BackgroundImage,
  ContentImage,
  FormContact,
  FormField,
} from './partials';
import { CONTACT_SECTION, FORM_FIELDS } from '@/lib/constants/pages/contact';

const formItemVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2 + custom * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export const buttonVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.04, opacity: 0.95 },
  tap: { scale: 1, opacity: 0.9 },
};

const MotionButton = motion.create(Button);

const ContactSection = () => {
  const { title, subTitle, id } = CONTACT_SECTION;

  const imgData = {
    src: IMAGES.PHOTOS,
    alt: 'photo-profile',
  };

  const contentImageData = {
    name: 'Handi Irawan',
    status: 'Available for Work',
  };

  return (
    <section
      id={id}
      className='relative pb-10 md:border-t md:border-neutral-800 md:py-20 lg:py-[120px]'
    >
      <Shapes className='right-0 -bottom-10 left-auto z-20' />
      <Shapes className='top-0 left-0 z-20 rotate-180' />

      <div className='base-container gap-3xl flex flex-wrap overflow-hidden lg:gap-[122px]'>
        <div className='flex-1 basis-80 overflow-hidden'>
          <BackgroundImage imageData={imgData}>
            <ContentImage contentImage={contentImageData} />
          </BackgroundImage>
        </div>

        <FormContact>
          <motion.div
            className='gap-md flex flex-col'
            variants={formItemVariants}
            custom={0}
          >
            <p className='sub-title'>{subTitle}</p>
            <h1 className='title'>{title}</h1>
          </motion.div>

          <div className='space-y-xl lg:space-y-3xl'>
            {FORM_FIELDS.map((field, idx) => (
              <FormField field={field} idx={idx} key={idx} />
            ))}

            <motion.div
              variants={formItemVariants}
              custom={FORM_FIELDS.length + 1}
            >
              <MotionButton
                className='w-full'
                variants={buttonVariants}
                initial='initial'
                whileHover='hover'
                whileTap='tap'
              >
                Send Message
              </MotionButton>
            </motion.div>
          </div>
        </FormContact>
      </div>
    </section>
  );
};

export default ContactSection;
