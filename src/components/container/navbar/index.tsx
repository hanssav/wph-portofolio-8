'use client';

import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';
import { MenuIcon, NavList } from './partials';
import Link from 'next/link';

const MotionButton = motion.create(Button);
const MotionMenuIcon = motion.create(MenuIcon);
const MotionXIcon = motion.create(X);

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

  const handleMenuClose = () => setIsOpen(false);

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: isOpen ? 'rgba(0,0,0,1)' : background,
        backdropFilter: backdropBlur,
      }}
      className={cn('fixed top-0 z-50 w-full border-b border-neutral-800')}
    >
      <div className='base-container flex-between h-16'>
        <div className='flex-start flex-1 cursor-pointer gap-2'>
          <div className='border-top w-full max-w-6 border border-white md:max-w-10' />
          <Link href={'#'} className='cursor-pointer'>
            <h2 className='text-primary text-xl-bold'>Handi Irawan.</h2>
          </Link>
        </div>
        <nav>
          <NavList className='md:flex-start hidden flex-row' />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <SheetTrigger asChild>
                <MotionButton
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  variant='ghost'
                  size='icon'
                  className='cursor-pointer md:hidden'
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? 'close-icon' : 'menu-icon'}
                >
                  <AnimatePresence mode='wait' initial={false}>
                    {isOpen ? (
                      <MotionXIcon
                        key='close'
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    ) : (
                      <MotionMenuIcon
                        key='menu'
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </MotionButton>
              </SheetTrigger>
            </SheetTrigger>
            <SheetContent className='base-container mt-20 border border-t border-neutral-800'>
              <NavList onItemClick={handleMenuClose} />
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
