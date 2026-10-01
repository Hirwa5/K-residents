import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact & Location | Kicukiro, Kigali',
  description: 'Find us in Kicukiro, Kigali or get in touch for room reservations, airport pickup, and inquiries.',
};

export default function ContactPage() {
  return <ContactSection />;
}
