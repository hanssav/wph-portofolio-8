'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { BaseComponent } from '@/types';
import { motion } from 'motion/react';
import { childTextAnimation, textAnimation } from '@/lib/constants/animation';

type SectionWrapperType = {
  id: string;
  title?: string;
  subTitle?: string;
} & BaseComponent;

const SectionWrapper: React.FC<SectionWrapperType> = ({
  className,
  children,
  title,
  subTitle,
  id,
}) => {
  const renderContent = () => {
    if (title)
      return (
        <>
          <Content>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
          </Content>
          {children}
        </>
      );
    return children;
  };

  return (
    <motion.section
      {...textAnimation}
      id={id}
      className={cn('py-section md:gap-5xl lg:gap-7xl flex gap-10', className)}
    >
      {renderContent()}
    </motion.section>
  );
};

const contentAlign = {
  center: 'content-header-center',
  start: 'flex flex-col gap-md',
} as const;

type ContentAlignType = keyof typeof contentAlign;
type ContentType = { align?: ContentAlignType } & BaseComponent;

const Content: React.FC<ContentType> = ({
  children,
  className,
  align = 'center',
}) => {
  return (
    <motion.div className={cn('mx-auto', contentAlign[align], className)}>
      {children}
    </motion.div>
  );
};

const Title: React.FC<BaseComponent> = ({ className, children }) => {
  return (
    <motion.h1 variants={childTextAnimation} className={cn('title', className)}>
      {children}
    </motion.h1>
  );
};

const SubTitle: React.FC<BaseComponent> = ({ className, children }) => {
  return (
    <motion.p
      variants={childTextAnimation}
      className={cn('sub-title', className)}
    >
      {children}
    </motion.p>
  );
};

const Desc: React.FC<BaseComponent> = ({ children, className }) => {
  return (
    <motion.p variants={childTextAnimation} className={cn('desc', className)}>
      {children}
    </motion.p>
  );
};

export const Section = {
  Root: SectionWrapper,
  Content,
  Desc,
  Title,
  SubTitle,
};
