import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Shape: React.FC<{
  position: 'top' | 'bottom';
  className?: string;
  index?: number;
}> = ({ position = 'top', className, index = 0 }) => {
  const align = { top: 'self-start', bottom: 'self-end' };
  const isTop = position === 'top';
  const delay = isTop ? 0.4 : index * 0.15;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1],
        scale: [0, 1.2, 1],
      }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={cn(
        'relative size-[35px] bg-[#1D3300] md:size-[46px]',
        align[position],
        className
      )}
    >
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.9, 1, 0.9],
        }}
        transition={{
          delay: delay + 0.8,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 bg-[#2D4700]'
      />

      {/* Glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          delay: delay + 0.8,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='absolute inset-0 shadow-[0_0_20px_rgba(45,71,0,0.8)] blur-sm'
      />
    </motion.div>
  );
};

export default Shape;
