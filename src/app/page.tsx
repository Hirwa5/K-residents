import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { StatsStrip } from '@/components/home/StatsStrip';
import { TeaserCards } from '@/components/home/TeaserCards';
import { AmenitiesGrid } from '@/components/home/AmenitiesGrid';
import { FaqAccordion } from '@/components/home/FaqAccordion';

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <StatsStrip />
      <TeaserCards />
      <AmenitiesGrid />
      <FaqAccordion />
    </>
  );
}
