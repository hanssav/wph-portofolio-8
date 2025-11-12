'use client';

import { LayoutWrapper } from '@/components/container';
import AboutSection from '@/components/page/about';
import HeroSection from '@/components/page/hero';
import ServiceSection from '@/components/page/services';

export default function Home() {
  return (
    <LayoutWrapper className='space-y-10'>
      <HeroSection />
      <ServiceSection />
      <AboutSection />

      <section className='base-container'>next container</section>
    </LayoutWrapper>
  );
}
