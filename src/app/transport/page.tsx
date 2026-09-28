import type { Metadata } from 'next';
import { TransportCatalog } from '@/components/transport/TransportCatalog';

export const metadata: Metadata = {
  title: 'Airport & City Transport — Kigali International Airport',
  description: 'Private airport pickups and seamless city chauffeur transfers around Kigali. Just 5 minutes from Kigali International Airport (KGL).',
};

export default function TransportPage() {
  return (
    <>
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1600"
          alt="Airport & City Transport"
        />
        <div className="page-banner-content">
          <h1>Airport & City Transport</h1>
          <p>
            Enjoy private airport pick-ups and personalized transport around Kigali with experienced local drivers for ultimate peace of mind.
          </p>
        </div>
      </div>

      <TransportCatalog />
    </>
  );
}
