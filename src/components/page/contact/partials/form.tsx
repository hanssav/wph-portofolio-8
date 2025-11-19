import React from 'react';
import { motion, Variants } from 'motion/react';
import { BaseComponent } from '@/types';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { FormFieldType } from '@/lib/constants/pages/contact';

const formContainerVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const FormContact: React.FC<BaseComponent> = ({ children }) => {
  return (
    <motion.div
      className='gap-3xl lg:gap-6xl flex flex-1 basis-80 flex-col'
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-100px' }}
      variants={formContainerVariants}
    >
      {children}
    </motion.div>
  );
};

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

const FormField: React.FC<{ field: FormFieldType; idx: number }> = ({
  field,
  idx,
}) => {
  return (
    <motion.div
      key={field.id}
      className='space-y-2'
      variants={formItemVariants}
      custom={idx + 1}
    >
      <label className='form-label block' htmlFor={field.id}>
        {field.label}
      </label>

      {field.type === 'textarea' ? (
        <Textarea
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          className={field.className}
          autoComplete={field.autocomplete}
        />
      ) : (
        <Input
          id={field.id}
          name={field.id}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autocomplete}
        />
      )}
    </motion.div>
  );
};

export { FormContact, FormField };
