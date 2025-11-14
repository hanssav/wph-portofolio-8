import React from 'react';
import Navbar from './navbar';
import { cn } from '@/lib/utils';

type LayoutWrapperProps = {
  className?: string;
  children: React.ReactNode;
};
const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn('bg-background text-foreground w-full', className)}>
      <Navbar />
      {children}
      <footer className='flex-center border-t border-neutral-800 px-2 py-5 lg:py-[25px]'>
        <p className='desc md:text-md-regular text-xs-regular'>
          © 2025 Edwin Anderson. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LayoutWrapper;
