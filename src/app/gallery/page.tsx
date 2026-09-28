import type { Metadata } from 'next';
import { GalleryCatalog } from '@/components/gallery/GalleryCatalog';

export const metadata: Metadata = {
  title: 'Visual Gallery — Suites, Living & Amenities',
  description: 'Take a virtual look through our master bedrooms, stylish living spaces, modern kitchens, and private balconies in Kigali.',
};

export default function GalleryPage() {
  return (
    <>
      <div className="page-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600"
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
