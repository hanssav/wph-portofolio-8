import React from 'react';
import WorkCard from './work-card';
import { WorkType } from '@/lib/constants/pages';
import { cn } from '@/lib/utils';
import {
  motion,
  Variants,
  useAnimationControls,
  useInView,
} from 'motion/react';
import { AnimateType } from '..';

const cardVariants = (isEven: boolean): Variants => ({
  initial: {
    opacity: 0,
    x: isEven ? 50 : -50,
  },
  inView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

const timelineVariants: Variants = {
  initial: {
    originY: 0,
    scaleY: 0,
  },
  inView: {
    scaleY: 1,
    transition: {
      delay: 0.8,
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const badgeVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

type WorkItemsProps = {
  work: WorkType;
  id: number;
  dataLength: number;
  isAnimate: AnimateType;
  setIsAnimate: React.Dispatch<React.SetStateAction<AnimateType>>;
};

const WorkItems: React.FC<WorkItemsProps> = ({
  work,
  id,
  dataLength,
  isAnimate,
  setIsAnimate,
}) => {
  const isEven = id % 2 === 0;
  const isLast = id === dataLength - 1;

  const controls = useAnimationControls();
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  const canAnimate = id === 0 || isAnimate[id - 1] === 'completed';

  React.useEffect(() => {
    if (inView && canAnimate && !hasAnimated) {
      controls.start('inView');
      setHasAnimated(true);
    }
  }, [inView, canAnimate, hasAnimated, controls]);

  const onAnimateComplete = () => {
    setIsAnimate((prev) => ({ ...prev, [id]: 'completed' }));
  };

  return (
    <React.Fragment key={id}>
      <motion.div
        initial='initial'
        animate={controls}
        variants={cardVariants(false)}
        className='hidden lg:block lg:justify-self-start'
      >
        <WorkCard work={work} className={cn(isEven && 'invisible')} />
      </motion.div>

      <div
        ref={ref}
        className={cn(
          'group relative mb-4 last:mb-0 nth-last-2:mb-0 md:mb-8',
          '[&:nth-last-child(2)>.line-decoration]:h-0'
        )}
      >
        {!isLast && (
          <motion.div
            initial='initial'
            animate={controls}
            variants={timelineVariants}
            onAnimationComplete={onAnimateComplete}
            className={cn(
              'line-decoration absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 bg-neutral-800',
              'h-[calc(100%+3rem)] lg:h-[calc(100%+5rem)]'
            )}
          />
        )}

        <motion.span
          initial='initial'
          animate={controls}
          variants={badgeVariants}
          className={cn(
            'flex-center absolute inset-x-0 top-1/2 -translate-y-1/2',
            'aspect-square size-[40px] rounded-full p-2 lg:size-[48px]',
            'text-primary-200 bg-background border border-neutral-800',
            'lg:text-md z-20 text-sm font-bold'
          )}
        >
          {id + 1}
        </motion.span>
      </div>

      <motion.div
        initial='initial'
        animate={controls}
        variants={cardVariants(true)}
        className='hidden lg:block lg:justify-self-end'
      >
        <WorkCard work={work} className={cn(!isEven && 'invisible')} />
      </motion.div>

      <motion.div
        initial='initial'
        animate={controls}
        variants={cardVariants(isEven)}
        className='lg:hidden'
      >
        <WorkCard work={work} />
      </motion.div>
    </React.Fragment>
  );
};

export default WorkItems;
