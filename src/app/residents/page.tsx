import type { Metadata } from 'next';
import { ResidentsCatalog } from '@/components/residents/ResidentsCatalog';

export const metadata: Metadata = {
  title: 'Our Residents | Serviced 1-Bedroom Apartments',
  description: 'Explore our 6 serviced 1-bedroom apartments arranged across 3 tiers in Kicukiro, Kigali. Fully furnished with fiber Wi-Fi and separate staircase entries.',
};

export default function ResidentsPage() {
  return (
    <>
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/residences/residence-facade.jpg"
          alt="Our Residents"
        />
        <div className="page-banner-content">
          <h1>Our Residents</h1>
          <p>
            Fully furnished 2-bedroom apartments and single rooms tailored for comfort, privacy, and productivity.
          </p>
        </div>
      </div>

      <ResidentsCatalog />
    </>
  );
}
