import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Contact from '@/views/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Durozen',
  description: 'Start your enterprise technology conversation with Durozen.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Durozen',
    description: 'Start your enterprise technology conversation with Durozen.',
    url: 'https://www.durozen.in/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Durozen',
    description: 'Start your enterprise technology conversation with Durozen.',
  },
};

export default function ContactPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us | Durozen",
  "description": "Start your enterprise technology conversation with Durozen.",
  "url": "https://www.durozen.in/contact"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Contact />
    </>
  );
}
