import { LayoutWrapper } from '@/components/container';
import AboutSection from '@/components/page/about';
import ContactSection from '@/components/page/contact';
import HeroSection from '@/components/page/hero';
import PortfolioSection from '@/components/page/portfolio';
import RelatedSection from '@/components/page/related';
import ServiceSection from '@/components/page/service';
import SkillsSection from '@/components/page/skill';
import WorkSection from '@/components/page/work';

export default function Home() {
  return (
    <LayoutWrapper className='space-y-10'>
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <PortfolioSection />
      <RelatedSection />
      <ContactSection />
    </LayoutWrapper>
  );
}
