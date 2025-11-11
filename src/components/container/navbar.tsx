'use client';
import { navItems } from '@/lib/constants';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(12,13,13,0', 'rgba(12,13,13,0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='base-container flex-between h-16 gap-8 border-b border-neutral-800'>
        <div className='flex-start flex-1 gap-2'>
          <div className='border-top w-full max-w-6 border border-white md:max-w-10' />
          <h1 className='text-primary text-xl-bold'>Handi Irawan.</h1>
        </div>
        <nav>
          <NavList className='md:flex-start hidden flex-row' />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <SheetTrigger asChild>
                <Button
                  variant={'ghost'}
                  size={'icon'}
                  className='cursor-pointer md:hidden'
                >
                  {isOpen ? <X /> : <MenuIcon />}
                </Button>
              </SheetTrigger>
            </SheetTrigger>
            <SheetContent className='base-container mt-20 border border-t border-neutral-800'>
              <NavList />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;

const NavList: React.FC<{ className?: string }> = ({ className }) => (
  <ul className={cn('flex flex-col gap-8 py-4', className)}>
    {navItems.map(({ href, label }) => (
      <li key={href}>
        <Link className='text-md-regular' href={href}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='white'
    strokeWidth='2'
    className={className}
  >
    <line x1='3' y1='6' x2='21' y2='6' />
    <line x1='3' y1='12' x2='21' y2='12' />
    <line x1='9' y1='18' x2='21' y2='18' />
  </svg>
);
