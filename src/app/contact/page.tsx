import type { Metadata } from 'next';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Durozen',
  description: 'Start your enterprise technology conversation with Durozen.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <Contact />;
}
