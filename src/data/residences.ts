export interface ResidenceUnit {
  id: string;
  slug: string;
  title: string;
  category: 'apartment' | 'room';
  typeTag: string;
  tier: string;
  priceRwf: number;
  priceDisplay: string;
  sizeSqm: number;
  capacity: number;
  description: string;
  amenities: string[];
  image: string;
  featured?: boolean;
}

export type ResidentUnit = ResidenceUnit;

export const residences: ResidenceUnit[] = [
  {
    id: "unit-1",
    slug: "unit-1",
    title: "Unit 1",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "Ground Floor · Row 1",
    priceRwf: 45000,
    priceDisplay: "45,000 RWF / night",
    sizeSqm: 50,
    capacity: 2,
    description: "Located on the ground floor with dedicated private stair entrance, this stylish 1-bedroom serviced apartment features a comfortable living lounge, fully equipped kitchen, high-speed fiber Wi-Fi, and effortless garden access.",
    amenities: [
      "Separate Staircase Entry",
      "1 Queen Bedroom",
      "Private Bathroom",
      "Living Room & TV",
      "Equipped Kitchen",
      "High-Speed Fiber Wi-Fi",
      "24/7 Security",
    ],
    image: "/images/residences/studio-bedroom-suite.jpg",
    featured: true,
  },
  {
    id: "unit-2",
    slug: "unit-2",
    title: "Unit 2",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "Ground Floor · Row 1",
    priceRwf: 45000,
    priceDisplay: "45,000 RWF / night",
    sizeSqm: 50,
    capacity: 2,
    description: "Ground floor 1-bedroom apartment with independent stair access. Offers complete privacy, modern minimalist finishes, dedicated work desk, and a peaceful ambiance for business or leisure stays.",
    amenities: [
      "Independent Stair Approach",
      "1 Queen Bedroom",
      "En-Suite Shower",
      "Cozy Lounge Area",
      "Cookware & Kitchenette",
      "Fast Fiber Wi-Fi",
      "Secure Compound Parking",
    ],
    image: "/images/residences/living-room-lounge.jpg",
    featured: true,
  },
  {
    id: "unit-3",
    slug: "unit-3",
    title: "Unit 3",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "First Floor · Row 2",
    priceRwf: 50000,
    priceDisplay: "50,000 RWF / night",
    sizeSqm: 54,
    capacity: 2,
    description: "Elevated on the second level with separate private staircase, Unit 3 provides a scenic private balcony, light-filled bedroom, designer lounge, and peaceful hillside views over Kicukiro.",
    amenities: [
      "Dedicated Private Stairs",
      "Private Balcony View",
      "1 King Bedroom",
      "Spacious Living Lounge",
      "Gourmet Kitchen",
      "Smart TV + Streaming",
      "Daily Maid Service",
    ],
    image: "/images/residences/skyline-bedroom.jpg",
    featured: true,
  },
  {
    id: "unit-4",
    slug: "unit-4",
    title: "Unit 4",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "First Floor · Row 2",
    priceRwf: 50000,
    priceDisplay: "50,000 RWF / night",
    sizeSqm: 54,
    capacity: 2,
    description: "Second-level 1-bedroom sanctuary with separate private stairs in between units. Thoughtfully furnished with Afro-chic touches, fiber internet, and full kitchen convenience for extended stays.",
    amenities: [
      "Separate Staircase Entry",
      "Scenic Private Balcony",
      "1 King Bedroom",
      "Dedicated Work Desk",
      "Fully Stocked Kitchen",
      "Ultra-Fast Wi-Fi",
      "Power Backup Inverter",
    ],
    image: "/images/residences/residence-facade.jpg",
    featured: false,
  },
  {
    id: "unit-5",
    slug: "unit-5",
    title: "Unit 5",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "Top Floor · Row 3",
    priceRwf: 55000,
    priceDisplay: "55,000 RWF / night",
    sizeSqm: 56,
    capacity: 2,
    description: "Perched on the top floor with private staircase access, Unit 5 boasts sweeping panoramic views of Kigali hills from its private terrace, premium bedding, and uncompromised quiet privacy.",
    amenities: [
      "Top-Floor Private Stairs",
      "Panoramic Terrace View",
      "1 King Bedroom Suite",
      "Open-Concept Lounge",
      "Executive Kitchenette",
      "High-Speed Fiber",
      "24/7 Concierge Support",
    ],
    image: "/images/residences/balcony-terrace-view.jpg",
    featured: true,
  },
  {
    id: "unit-6",
    slug: "unit-6",
    title: "Unit 6",
    category: "apartment",
    typeTag: "1-Bedroom Apartment",
    tier: "Top Floor · Row 3",
    priceRwf: 55000,
    priceDisplay: "55,000 RWF / night",
    sizeSqm: 56,
    capacity: 2,
    description: "Exclusive top-tier 1-bedroom residence with separate stairs. Enjoy morning coffee on the elevated balcony, cool hill breezes, high-speed Wi-Fi, and total seclusion in a secure gated compound.",
    amenities: [
      "Separate Staircase Entry",
      "Elevated Sunset Balcony",
      "1 King Bedroom",
      "Designer Lounge",
      "Modern Cooktop & Fridge",
      "Fiber Wi-Fi Covered",
      "Daily Housekeeping",
    ],
    image: "/images/residences/building-exterior.jpg",
    featured: false,
  },
];

export const residents = residences;
