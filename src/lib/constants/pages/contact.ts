import { SectionData } from '@/types';

export const CONTACT_SECTION: SectionData = {
  id: 'contact',
  title: "LET'S GET IN TOUCH",
  subTitle: 'CONTACT',
  desc: '',
};

export type FormFieldType = {
  id: string;
  label: string;
  placeholder: string;
  autocomplete?: string;
  className?: string;
} & (
  | {
      type: 'text' | 'email';
    }
  | {
      type: 'textarea';
    }
);

export const FORM_FIELDS: FormFieldType[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'enter your name',
    autocomplete: 'name',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'enter your email',
    autocomplete: 'email',
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'enter your message',
    autocomplete: 'off',
    className: 'min-h-[120px] lg:min-h-[180px]',
  },
];
