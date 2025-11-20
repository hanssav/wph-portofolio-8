import React from 'react';

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MessageItem } from '@/lib/constants/pages/contact';
import Image from 'next/image';
import ButtonAction from './button-action';
import { DialogClose } from '@radix-ui/react-dialog';

type ModalContentType = {
  message: MessageItem;
  onSendMessage: () => void;
};

const ModalContent: React.FC<ModalContentType> = ({
  message,
  onSendMessage,
}) => {
  return (
    <DialogContent className='w-full md:min-w-[480px]'>
      <DialogHeader className='relativve'>
        <div className='absolute inset-x-0 mx-auto aspect-square size-[108px] -translate-y-1/2 overflow-hidden md:size-[148px]'>
          <Image
            fill
            src={message.icon}
            alt={message.title}
            priority
            fetchPriority='high'
          />
        </div>
      </DialogHeader>
      <div className='pt-8xl pb-3xl px-3xl lg:px-3xl space-y-3xl lg:pb-3xl text-center'>
        <DialogTitle>{message.title}</DialogTitle>
        <DialogDescription>{message.desc}</DialogDescription>
        <DialogClose asChild>
          <ButtonAction
            onClick={() => message.id === 'failed' && onSendMessage()}
          >
            {message.label}
          </ButtonAction>
        </DialogClose>
      </div>
    </DialogContent>
  );
};

export default ModalContent;
