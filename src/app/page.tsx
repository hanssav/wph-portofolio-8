'use client';

import { LayoutWrapper } from '@/components/container';
import AboutSection from '@/components/page/about';
import ExperienceSection from '@/components/page/experience';
import HeroSection from '@/components/page/hero';
import PortfolioSection from '@/components/page/portfolio';
import ServiceSection from '@/components/page/services';
import SkillsSection from '@/components/page/skils';
import TestimonialSection from '@/components/page/testimonial';
import WorkSection from '@/components/page/work';

export default function Home() {
  return (
    <LayoutWrapper className='space-y-10'>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <PortfolioSection />
      <TestimonialSection />

      <section className='base-container'>next container</section>
    </LayoutWrapper>
  );
}
