import type { Metadata } from 'next';
import { ResidencesCatalog } from '@/components/residences/ResidencesCatalog';

export const metadata: Metadata = {
  title: 'Our Residences — Serviced Apartments & Rooms',
  description: 'Explore our luxury 2-bedroom executive apartments and deluxe single rooms in Kicukiro, Kigali. Fully furnished with fiber Wi-Fi and modern amenities.',
};

export default function ResidencesPage() {
  return (
    <>
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1600"
          alt="Our Residences"
        />
        <div className="page-banner-content">
          <h1>Our Residences</h1>
          <p>
            Fully furnished 2-bedroom apartments and single rooms tailored for comfort, privacy, and productivity.
          </p>
        </div>
      </div>

      <ResidencesCatalog />
    </>
  );
}
