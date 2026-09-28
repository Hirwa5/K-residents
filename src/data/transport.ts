export interface DestinationCard {
  id: string;
  title: string;
  driveTime: string;
  description: string;
  image: string;
}

export interface TransportService {
  id: string;
  title: string;
  description: string;
  icon: 'car' | 'navigation' | 'pin';
  highlights: string[];
  ctaText: string;
  whatsappMessage: string;
}

export const destinations: DestinationCard[] = [
  {
    id: 'kgl-airport',
    title: 'Kigali Int. Airport (KGL)',
    driveTime: '5 - 7 mins drive',
    description: 'Direct shuttle service right to our front gate with zero transit stress.',
    image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'kigali-convention-centre',
    title: 'Kigali Convention Centre',
    driveTime: '15 mins drive',
    description: 'Easy access for international conference delegates and business events.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=900',
  },
  {
    id: 'downtown-kigali',
    title: 'Downtown Kigali',
    driveTime: '20 mins drive',
    description: 'Quick commute to banks, commercial hubs, government offices, and dining.',
    image: 'https://images.unsplash.com/photo-1591018195515-c4a3d8b9d3a3?auto=format&fit=crop&q=80&w=900',
  },
];

export const transportServices: TransportService[] = [
  {
    id: 'airport-shuttle',
    title: 'Airport Pickup & Dropoff',
    description: 'Located just minutes from Kigali International Airport (KGL), we provide hassle-free pickup upon arrival. Our driver will greet you at arrivals with a personalized name tag.',
    icon: 'car',
    highlights: [
      '24/7 availability synchronized with your flight schedule',
      'Air-conditioned vehicles with spacious luggage capacity',
      'Punctual drop-offs ensuring smooth departures',
    ],
    ctaText: 'Book Airport Pickup via WhatsApp',
    whatsappMessage: 'Hello, I would like to request Airport Pickup / Dropoff service for my stay at KARANGWA\'S Residences.',
  },
  {
    id: 'city-transfers',
    title: 'Private City & Tour Transfers',
    description: 'Need to attend business meetings at the Kigali Convention Centre or explore cultural attractions like the Kigali Genocide Memorial and Kimironko Market? We arrange dedicated point-to-point and full-day chauffeur transportation.',
    icon: 'pin',
    highlights: [
      'Experienced, licensed drivers fluent in English & French',
      'Custom hourly or daily chauffeur options available',
      'Safe, reliable travel anywhere across Kigali',
    ],
    ctaText: 'Request City Driver via WhatsApp',
    whatsappMessage: 'Hello, I would like to request a Private City Transfer / Chauffeur service.',
  },
];
