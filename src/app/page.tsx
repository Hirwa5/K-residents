import { HeroSlideshow } from '@/components/home/HeroSlideshow';
import { VirtualTourSection } from '@/components/home/VirtualTourSection';
import { HospitalitySection } from '@/components/home/HospitalitySection';
import { TeaserCards } from '@/components/home/TeaserCards';
import { AmenitiesGrid } from '@/components/home/AmenitiesGrid';
import { HomeCalloutBanner } from '@/components/home/HomeCalloutBanner';

export default function HomePage() {
  return (
    <>
      <HeroSlideshow />
      <VirtualTourSection />
      <HospitalitySection />
      <TeaserCards />
      <AmenitiesGrid />
      <HomeCalloutBanner />
    </>
  );
}
