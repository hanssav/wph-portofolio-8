'use client';

import { Shapes } from '@/components/container';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function VerticalLines() {
  const [count, setCount] = useState(0);

  const GAP = 332;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const lineCount = Math.ceil(screenWidth / GAP);
    setCount(lineCount);
  }, []);

  return (
    <div className='base-container pointer-events-none absolute inset-0 hidden md:block lg:left-[26%]'>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.8 },
          }}
          className={cn(
            'absolute top-0 bottom-0 w-px border-r border-neutral-800'
          )}
          style={{
            left: `${i * GAP}px`,
          }}
        />
      ))}
    </div>
  );
}

const SectionEffect = () => {
  return (
    <>
      <VerticalLines />
      <Shapes className='bottom-1/4 left-0 z-20 md:bottom-0' />
    </>
  );
};

export default SectionEffect;
