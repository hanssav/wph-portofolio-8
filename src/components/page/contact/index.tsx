'use client';

import { Shapes } from '../../container';
import { motion, Variants } from 'motion/react';
import {
  BackgroundImage,
  ButtonAction,
  ContentImage,
  FormContact,
  FormField,
  ModalContent,
} from './partials';
import {
  CONTACT_SECTION,
  contentImageData,
  FORM_FIELDS,
  imgData,
  MESSAGE,
} from '@/lib/constants/pages/contact';

import { Dialog } from '@/components/ui/dialog';
import React from 'react';

const MotionDialog = motion.create(Dialog);

export const formItemVariants: Variants = {
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

const ContactSection = () => {
  const { title, subTitle, id } = CONTACT_SECTION;

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(MESSAGE.SUCCESS);

  const onSendMessage = async () => {
    setLoading(true);

    try {
      const isSuccess = Math.floor(Math.random() * 2);
      setMessage(isSuccess ? MESSAGE.SUCCESS : MESSAGE.FAILED);

      await new Promise((resolve) => setTimeout(resolve, 2000));
      setOpen(true);
    } finally {
      setLoading(false);
    }
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

            <MotionDialog
              open={open}
              onOpenChange={setOpen}
              variants={formItemVariants}
              custom={FORM_FIELDS.length + 1}
            >
              <ButtonAction onClick={onSendMessage}>
                {loading ? 'Sending... ' : 'Send Message'}
              </ButtonAction>

              <ModalContent onSendMessage={onSendMessage} message={message} />
            </MotionDialog>
          </div>
        </FormContact>
      </div>
    </section>
  );
};

export default ContactSection;
