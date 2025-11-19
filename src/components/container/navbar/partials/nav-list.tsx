import { navItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Link from 'next/link';

export const NavList: React.FC<{
  className?: string;
  onItemClick?: () => void;
}> = ({ className, onItemClick }) => (
  <ul className={cn('flex flex-col gap-8 py-4', className)}>
    {navItems.map(({ href, label }, idx) => (
      <motion.li
        key={href}
        initial={{ y: -20, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * idx }}
      >
        <motion.div initial='rest' whileHover='hover' animate='rest'>
          <Link
            className='text-md-regular hover:text-primary relative block transition-colors duration-300'
            href={href}
            onClick={onItemClick}
          >
            {label}
            <motion.span
              className='bg-primary absolute -bottom-1 left-0 z-50 hidden h-0.5 md:block'
              variants={{
                initial: { width: 0 },
                hover: { width: '100%' },
              }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </motion.li>
    ))}
  </ul>
);
