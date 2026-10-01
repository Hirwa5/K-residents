import type { Metadata } from 'next';
import { GalleryCatalog } from '@/components/gallery/GalleryCatalog';

export const metadata: Metadata = {
  title: 'Visual Gallery | Suites, Living & Amenities',
  description: 'Take a virtual look through our master bedrooms, stylish living spaces, modern kitchens, and private balconies in Kigali.',
};

export default function GalleryPage() {
  return (
    <>
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/residences/living-room-lounge.jpg"
          alt="Visual Gallery"
        />
        <div className="page-banner-content">
          <h1>Visual Gallery</h1>
          <p>A look through our bedrooms, living rooms, kitchens and balconies.</p>
        </div>
      </div>

      <GalleryCatalog />
    </>
  );
}
