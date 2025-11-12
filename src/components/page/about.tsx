import { SectionData } from '@/types';
import { Mapper, Shapes } from '../container';
import { IMAGES } from '@/lib/constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const SECTION: SectionData = {
  title: 'CRAFTING SEAMLESS HIGH-PERFORMANCE WEB EXPERIENCES',
  desc: `I love turning designs into interactive, high-performance websites. 
  With a keen eye for detail and a deep understanding of frontend technologies,
   I create smooth and visually appealing user experiences.`,
  subTitle: 'ABOUT ME',
};

type PortfolioType = {
  images: string;
  name: string;
  position: string;
  size?: string;
};

const PORTFOLIO: PortfolioType[] = [
  {
    images: IMAGES.PORTFOLIO[3],
    name: 'portfolio-1',
    position: `
      absolute left-[calc(50%-80px)] -translate-x-1/2
      sm:left-[15%] sm:translate-x-0 sm:top-4
      md:left-[10%] md:top-8
      lg:left-[calc(50%-450px)] lg:top-10
    `,
    size: `
      min-h-[127px] min-w-[170px]
      sm:w-[200px] sm:h-[150px]
      md:w-[260px] md:h-[195px]
      lg:w-[238px] lg:h-[178px]
    `,
  },
  {
    images: IMAGES.PORTFOLIO[1],
    name: 'portfolio-2',
    position: `
      absolute top-[45px] left-[calc(50%+90px)] -translate-x-1/2
      sm:left-auto sm:right-[15%] sm:translate-x-0 sm:top-8
      md:right-[10%] md:top-12
      lg:top-24 lg:left-[calc(50%+300px)] lg:right-auto
    `,
    size: `
      min-h-[99px] min-w-[134px]
      sm:w-[180px] sm:h-[135px]
      md:w-[240px] md:h-[180px]
      lg:w-[250px] lg:h-[187px]
    `,
  },
  {
    images: IMAGES.PORTFOLIO[2],
    name: 'portfolio-3',
    position: `
      absolute top-[164px] left-[calc(50%)] -translate-x-1/2
      sm:top-[190px]
      md:top-[250px]
      lg:top-[calc(50%)] lg:left-[calc(50%+200px)]
    `,
    size: `
      min-w-[132.5px] min-h-[100px]
      sm:w-[190px] sm:h-[143px]
      md:w-[250px] md:h-[188px]
      lg:w-[117px] lg:h-[88px]
    `,
  },
];

const AboutSection = () => {
  const { desc, subTitle, title } = SECTION;
  const highlight = 'HIGH-PERFORMANCE WEB';
  const parts = title.split(highlight);

  return (
    <section className='py-section relative flex flex-col text-center'>
      <Shapes className='bottom-0 -left-6 z-20 -translate-y-4/5 rotate-90' />

      <div className='base-container space-y-xl lg:space-y-7xl relative z-30'>
        <div className='lg:space-y-xl mx-auto max-w-[871px]'>
          <p className='sub-title'>{subTitle}</p>
          <h1 className='title'>
            {parts[0]}
            <span className='text-primary block'>{highlight}</span>
            {parts[1]}
          </h1>
        </div>
        <div className='mx-auto lg:max-w-[996px]'>
          <p className='desc'>{desc}</p>
        </div>
      </div>

      <Mapper
        data={PORTFOLIO}
        className={cn(
          'relative z-10 mt-10 flex min-h-72 flex-col items-center gap-6 overflow-hidden',
          'sm:min-h-[380px] md:min-h-[480px]',
          'lg:absolute lg:inset-0 lg:z-10 lg:block lg:min-h-0'
        )}
      >
        {(item, idx) => (
          <div
            key={idx}
            className={cn(
              'relative z-10 overflow-hidden transition-all duration-300',
              item.size,
              item.position
            )}
          >
            <Image
              src={item.images}
              fill
              alt={item.name}
              priority
              className='object-contain'
            />
          </div>
        )}
      </Mapper>
    </section>
  );
};

export default AboutSection;
