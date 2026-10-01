export type GalleryCategory = 'living' | 'bedroom' | 'amenities' | 'exterior';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  fullImage: string;
  alt: string;
}

export const galleryCategories: { id: 'all' | GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'living', label: 'Living Rooms' },
  { id: 'bedroom', label: 'Bedrooms' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'exterior', label: 'Exteriors' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Luxury Residence Facade',
    category: 'exterior',
    image: '/images/residences/residence-facade.jpg',
    fullImage: '/images/residences/residence-facade.jpg',
    alt: 'Modern architectural facade of KARANGWA\'S Residences',
  },
  {
    id: 'gallery-2',
    title: 'Skyline Master Suite',
    category: 'bedroom',
    image: '/images/residences/skyline-bedroom.jpg',
    fullImage: '/images/residences/skyline-bedroom.jpg',
    alt: 'Master bedroom suite with floor-to-ceiling windows and panoramic Kigali views',
  },
  {
    id: 'gallery-3',
    title: 'Executive Living Room Lounge',
    category: 'living',
    image: '/images/residences/living-room-lounge.jpg',
    fullImage: '/images/residences/living-room-lounge.jpg',
    alt: 'Designer living room lounge with smart entertainment setup and dining space',
  },
  {
    id: 'gallery-4',
    title: 'Studio Bedroom & Lounge',
    category: 'bedroom',
    image: '/images/residences/studio-bedroom-suite.jpg',
    fullImage: '/images/residences/studio-bedroom-suite.jpg',
    alt: 'Fully furnished open-plan studio suite with plush sofa and king bed',
  },
  {
    id: 'gallery-5',
    title: 'Scenic Balcony Terrace',
    category: 'exterior',
    image: '/images/residences/balcony-terrace-view.jpg',
    fullImage: '/images/residences/balcony-terrace-view.jpg',
    alt: 'Tranquil private balcony terrace overlooking picturesque views',
  },
  {
    id: 'gallery-6',
    title: 'Building Complex & Grounds',
    category: 'exterior',
    image: '/images/residences/building-exterior.jpg',
    fullImage: '/images/residences/building-exterior.jpg',
    alt: 'Contemporary residence building exterior with landscaped pathways',
  },
];
