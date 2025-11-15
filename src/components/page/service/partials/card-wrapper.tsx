import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export const ServiceCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        'gap-3xl grid grid-cols-1',
        'lg:gap-5xl lg:grid-cols-3',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
