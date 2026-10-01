export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  address: string;
  locationCity: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
  navLinks: Array<{
    label: string;
    href: string;
  }>;
  amenities: Array<{
    icon: string;
    label: string;
    desc?: string;
  }>;
}

export const siteConfig: SiteConfig = {
  name: "KARANGWA'S residents",
  shortName: "KARANGWA'S",
  tagline: "6 boutique 1-bedroom serviced apartments across 3 private rows in Kicukiro, Kigali.",
  description: "Boutique residential living in Kicukiro, Kigali. 6 modern 1-bedroom serviced apartments across 3 tiers, designed with separate private stairs for ultimate privacy, fiber Wi-Fi, and 24/7 guest care just 15 minutes from Kigali Airport.",
  address: "Kicukiro District, Kigali, Rwanda",
  locationCity: "Kicukiro, Kigali, Rwanda",
  phone: "+250789119348",
  phoneDisplay: "+250 789 119 348",
  whatsappNumber: "250789119348",
  whatsappUrl: "https://wa.me/250789119348",
  email: "gadhirwa5@gmail.com",
  coordinates: {
    lat: -1.973189353942871,
    lng: 30.09471893310547,
  },
  stats: [
    { number: "06", label: "1-Bed Apartments" },
    { number: "15 mIN", label: "To Kigali Airport" },
    { number: "24/7", label: "Guest Support" },
    { number: "100%", label: "Fiber Wi-Fi Covered" },
  ],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "residents", href: "/residents" },
    { label: "Gallery", href: "/gallery" },
    { label: "Transport", href: "/transport" },
    { label: "Contact", href: "/contact" },
  ],
  amenities: [
    { icon: "wifi", label: "Fiber Wi-Fi", desc: "Dedicated high-speed connectivity" },
    { icon: "shield", label: "24/7 Security", desc: "Gated compound with round-the-clock guards" },
    { icon: "coffee", label: "Equipped Kitchen", desc: "Cookware, coffee maker, microwave & stove" },
    { icon: "tv", label: "Smart TV & Netflix", desc: "Streaming entertainment ready" },
    { icon: "clock", label: "Daily Cleaning", desc: "Fresh linens and professional housekeeping" },
    { icon: "car", label: "Free Parking", desc: "Secure on-premises private parking" },
  ],
};
