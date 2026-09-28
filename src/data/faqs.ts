export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 'faq-1',
    question: "Where is KARANGWA'S Residences located?",
    answer: "We are situated in Kicukiro District, Kigali—just 5 to 7 minutes drive from Kigali International Airport (KGL), with quick access to the Kigali Convention Centre and downtown Kigali.",
  },
  {
    id: 'faq-2',
    question: "What are the check-in and check-out times?",
    answer: "Standard check-in begins at 2:00 PM CAT, and check-out is by 11:00 AM CAT. Early check-in or late check-out can usually be accommodated depending on availability—simply notify us in advance.",
  },
  {
    id: 'faq-3',
    question: "Is airport transport included?",
    answer: "Airport pickup and dropoff services are available 24/7 upon request for a small additional fee. You can book directly via WhatsApp before your departure or arrival.",
  },
  {
    id: 'faq-4',
    question: "What amenities are provided in the apartments and rooms?",
    answer: "All guests enjoy high-speed fiber Wi-Fi, daily housekeeping, 24/7 gated security with backup power, premium bedding, and secure private parking. Full apartments also include gourmet kitchens with cooktops, ovens, microwave, and washing machines.",
  },
  {
    id: 'faq-5',
    question: "Can I pay in local currency (RWF) or USD?",
    answer: "Yes, we accept Rwandan Francs (RWF), USD, major credit cards, and local Mobile Money (MoMo / Airtel Money) for your convenience.",
  },
];
