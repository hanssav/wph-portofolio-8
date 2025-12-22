import { SectionData } from '@/types';
import { ICONS, IMAGES } from '../asset.constants';

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

export type MessageItem = {
  id: string;
  icon: string;
  title: string;
  desc: string;
  label: string;
};

export type MessageType = {
  SUCCESS: MessageItem;
  FAILED: MessageItem;
};

export const MESSAGE = {
  SUCCESS: {
    id: 'success',
    icon: ICONS.MESSAGE.SUCCESS,
    title: 'Message Sent Successfully!',
    desc: 'Thank you for reaching out. I’ll get back to you as soon as possible',
    label: 'Back To Home',
  },
  FAILED: {
    id: 'failed',
    icon: ICONS.MESSAGE.FAILED,
    title: 'Message not sent!',
    desc: 'Something went wrong on our end. Please try again in a moment',
    label: 'Try Again',
  },
};

export const imgData = {
  src: IMAGES.PHOTOS,
  alt: 'photo-profile',
};

export const contentImageData = {
  name: 'Handi Irawan',
  status: 'Open for Opportunities',
};
