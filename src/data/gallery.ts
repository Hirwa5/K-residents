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
    title: 'Living Room Lounge',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    alt: 'Living Room Lounge with comfortable seating and warm natural light',
  },
  {
    id: 'gallery-2',
    title: 'Master Bedroom Suite',
    category: 'bedroom',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600',
    alt: 'Master Bedroom Suite featuring premium queen bed and minimalist decor',
  },
  {
    id: 'gallery-3',
    title: 'Modern Gourmet Kitchen',
    category: 'amenities',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1600',
    alt: 'Fully equipped modern kitchen with state-of-the-art appliances',
  },
  {
    id: 'gallery-4',
    title: 'Clean En-Suite Bathroom',
    category: 'amenities',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
    alt: 'Sparkling clean en-suite bathroom with glass shower stall',
  },
  {
    id: 'gallery-5',
    title: 'Private Balcony View',
    category: 'exterior',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600',
    alt: 'Scenic private balcony view overlooking Kigali hills',
  },
  {
    id: 'gallery-6',
    title: 'Afro-Chic Interior Art',
    category: 'living',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=900',
    fullImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    alt: 'Handcrafted Rwandan artistic patterns and warm wood finishes',
  },
];
