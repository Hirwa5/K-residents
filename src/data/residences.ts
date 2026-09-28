export interface ResidenceUnit {
  id: string;
  slug: string;
  title: string;
  category: 'apartment' | 'room';
  typeTag: string;
  priceRwf: number;
  priceDisplay: string;
  sizeSqm: number;
  capacity: number;
  description: string;
  amenities: string[];
  image: string;
  featured?: boolean;
}

export const residences: ResidenceUnit[] = [
  {
    id: "royal-haven-suite",
    slug: "royal-haven-suite",
    title: "The Royal Haven Suite",
    category: "apartment",
    typeTag: "2-Bedroom Executive Suite",
    priceRwf: 60000,
    priceDisplay: "60,000 RWF / night",
    sizeSqm: 85,
    capacity: 4,
    description: "Masterfully designed 2-bedroom executive suite with panoramic Kigali balcony views, dedicated workspace, fiber internet, and gourmet kitchen.",
    amenities: [
      "2 King Bedrooms",
      "2 Private Bathrooms",
      "High-Speed Fiber Wi-Fi",
      "Fully Equipped Kitchen",
      "Smart TV + Netflix",
      "Daily Maid Service",
      "Private Balcony",
    ],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=900",
    featured: true,
  },
  {
    id: "skyline-horizon-apartment",
    slug: "skyline-horizon-apartment",
    title: "Skyline Horizon Apartment",
    category: "apartment",
    typeTag: "2-Bedroom Luxury Residence",
    priceRwf: 60000,
    priceDisplay: "60,000 RWF / night",
    sizeSqm: 90,
    capacity: 4,
    description: "Refined Afro-chic interior featuring handcrafted local art, spacious dining lounge, full laundry setup, and 24/7 power backup.",
    amenities: [
      "2 En-Suite Bedrooms",
      "Living & Dining Room",
      "Gourmet Kitchen",
      "Washing Machine",
      "Power Backup Inverter",
      "24/7 Security Guards",
    ],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=900",
    featured: true,
  },
  {
    id: "serenity-studio-room",
    slug: "serenity-studio-room",
    title: "Serenity Studio Room",
    category: "room",
    typeTag: "Single Deluxe Room",
    priceRwf: 35000,
    priceDisplay: "35,000 RWF / night",
    sizeSqm: 35,
    capacity: 2,
    description: "Tailored for solo travelers, business professionals, or couples needing a tranquil retreat close to Kigali International Airport.",
    amenities: [
      "Queen Bed",
      "En-Suite Bath",
      "Work Desk & Chair",
      "High-Speed Wi-Fi",
      "Shared Kitchen Access",
      "Secure Parking",
    ],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=900",
    featured: false,
  },
  {
    id: "urban-solo-sanctuary",
    slug: "urban-solo-sanctuary",
    title: "Urban Solo Sanctuary",
    category: "room",
    typeTag: "Single Comfort Room",
    priceRwf: 35000,
    priceDisplay: "35,000 RWF / night",
    sizeSqm: 28,
    capacity: 1,
    description: "A cozy modern room designed for maximum comfort, quiet rest, and productivity, featuring premium linens and daily housekeeping.",
    amenities: [
      "Queen Bed",
      "Private Shower",
      "Fiber Wi-Fi",
      "Daily Cleaning",
      "Access to Garden Terrace",
      "24/7 Reception Support",
    ],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=900",
    featured: false,
  },
];
