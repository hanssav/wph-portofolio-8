import { LayoutWrapper } from '@/components/container';
import AboutSection from '@/components/page/about';
import ContactSection from '@/components/page/contact';
import ExperienceSection from '@/components/page/experience';
import FaqSection from '@/components/page/faq';
import HeroSection from '@/components/page/hero';
import PortfolioSection from '@/components/page/portfolio';
import ServiceSection from '@/components/page/service';
import SkillsSection from '@/components/page/skill';
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
      <FaqSection />
      <ContactSection />
    </LayoutWrapper>
  );
}
