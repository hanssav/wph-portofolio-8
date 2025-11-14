import { PORTFOLIO_DATA, PORTOFOLIO_SECTION } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import { Mapper } from '../container';
import Image from 'next/image';

const PortfolioSection = () => {
  const { subTitle, title } = PORTOFOLIO_SECTION;
  return (
    <section className='py-section lg:gap-y-7xl relative flex flex-col items-center gap-6'>
      <div className='gap-md flex max-w-[74.35vw] flex-col justify-center text-center md:max-w-full'>
        <p className='sub-title'>{subTitle}</p>
        <h1 className='title'>{title}</h1>
      </div>

      <Mapper
        data={PORTFOLIO_DATA}
        className={cn(
          'base-container lg:gap-y-6xl md:gap-x-2xl md:gap-y-4xl gap-8',
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        )}
      >
        {(portfolio) => (
          <div className='space-y-lg' key={portfolio.id}>
            <div className='relative aspect-361/270 w-full overflow-hidden rounded-2xl'>
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                fill
                className='object-cover'
                priority
              />
            </div>

            <h1 className='title text-xl-bold lg:text-display-xs-bold'>
              {portfolio.title}
            </h1>
            <p className='desc text-sm-regular lg:text-md-regular'>
              {portfolio.description}
            </p>
          </div>
        )}
      </Mapper>
    </section>
  );
};

export default PortfolioSection;
