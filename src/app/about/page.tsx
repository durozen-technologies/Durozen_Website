import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import About from '@/views/About';

export const metadata: Metadata = {
  title: 'About Us | Durozen',
  description:
    'A technology partner for ambitious teams building serious digital products.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Durozen',
    description: 'A technology partner for ambitious teams building serious digital products.',
    url: 'https://www.durozen.in/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Durozen',
    description: 'A technology partner for ambitious teams building serious digital products.',
  },
};

export default function AboutPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us | Durozen",
  "description": "A technology partner for ambitious teams building serious digital products.",
  "url": "https://www.durozen.in/about"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <About />
    </>
  );
}
