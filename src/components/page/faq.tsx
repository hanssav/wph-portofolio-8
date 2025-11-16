import { FAQ, FAQ_DATA, FAQ_SECTION } from '@/lib/constants/pages';
import React from 'react';
import { Mapper, Section } from '../container';
import SparkleIcon from '../ui/sparkle';

type SeparatorItem = {
  isSeparator: true;
  id: string;
};

type GridItem = FAQ | SeparatorItem;

const FaqSection = () => {
  const { subTitle, title, id } = FAQ_SECTION;

  const itemsWithSeparators: GridItem[] = [];

  FAQ_DATA.forEach((faq, idx) => {
    itemsWithSeparators.push(faq);
    // Add separator marker after each item except the last
    if (idx < FAQ_DATA.length - 1) {
      itemsWithSeparators.push({ isSeparator: true, id: `sep-${idx}` });
    }
  });

  return (
    <Section.Root
      id={id}
      title={title}
      subTitle={subTitle}
      className='content-container flex-col'
    >
      <Mapper
        data={itemsWithSeparators}
        className='base-container grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-8'
      >
        {(item, idx) => {
          // Render separator lines
          if ('isSeparator' in item && item.isSeparator) {
            const isVertical = Math.floor(idx / 2) % 2 === 0;

            return (
              <React.Fragment key={item.id}>
                {/* Mobile: horizontal line */}
                <div className='flex items-center py-2 md:hidden'>
                  <div className='h-px w-full bg-neutral-800' />
                </div>

                {/* Desktop: vertical or horizontal line */}
                {isVertical ? (
                  <div className='hidden items-center justify-center md:flex'>
                    <div className='h-full w-px bg-neutral-800' />
                  </div>
                ) : (
                  <div className='hidden py-2 md:col-span-3 md:block'>
                    <div className='h-px w-full bg-neutral-800' />
                  </div>
                )}
              </React.Fragment>
            );
          }

          // Render FAQ item
          const faq = item as FAQ;
          return (
            <div key={idx} className='space-y-md lg:space-y-3xl'>
              <div className='gap-lg flex'>
                <SparkleIcon className='size-6 md:size-8' />
                <h1 className='title text-lg-bold lg:text-display-xs-bold'>
                  {faq.question}
                </h1>
              </div>
              <p className='desc text-sm-medium lg:text-md-medium'>
                {faq.answer}
              </p>
            </div>
          );
        }}
      </Mapper>
    </Section.Root>
  );
};

export default FaqSection;
