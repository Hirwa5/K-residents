import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { ExperienceSection } from '@/components/home/ExperienceSection';
import { TeaserCards } from '@/components/home/TeaserCards';
import { AmenitiesGrid } from '@/components/home/AmenitiesGrid';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <ExperienceSection />
      <TeaserCards />
      <AmenitiesGrid />
      <FaqAccordion />
    </>
  );
}
