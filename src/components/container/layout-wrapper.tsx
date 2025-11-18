import React from 'react';
import Navbar from './navbar';
import { cn } from '@/lib/utils';
import Footer from './footer';

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
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
