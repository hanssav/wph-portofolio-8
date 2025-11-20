'use client';

import { FAQ, FAQ_DATA, FAQ_SECTION } from '@/lib/constants/pages';
import { Section } from '../../container';
import { FaqCards, FaqItem } from './partials';

type SeparatorItem = {
  isSeparator: true;
  id: string;
};

export type GridItem = FAQ | SeparatorItem;

const FaqSection = () => {
  const { subTitle, title, id } = FAQ_SECTION;

  const itemsWithSeparators: GridItem[] = [];

  FAQ_DATA.forEach((faq, idx) => {
    itemsWithSeparators.push(faq);
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
      <FaqCards>
        {itemsWithSeparators.map((item, idx) => (
          <FaqItem key={idx} item={item} idx={idx} />
        ))}
      </FaqCards>
    </Section.Root>
  );
};

export default FaqSection;
