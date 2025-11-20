'use client';

import { motion, Variants } from 'motion/react';
import { baseInViewAnimation } from '@/lib/constants/animation/base-animation';

const textVariant: Variants = {
  initial: { scale: 0.85, opacity: 0 },
  inView: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const Footer = () => {
  const title = 'Handi Irawan';
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      {...baseInViewAnimation(0.3, 0.3)}
      className='flex-center border-t border-neutral-800 px-2 py-5 lg:py-[25px]'
    >
      <motion.p
        variants={textVariant}
        className='desc md:text-md-regular text-xs-regular'
      >
        © {currentYear} {title}. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
