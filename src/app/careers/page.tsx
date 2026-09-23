import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Careers from '@/views/Careers';

export const metadata: Metadata = {
  title: 'Careers | Durozen',
  description:
    'Join Durozen and help us build serious digital products for ambitious teams.',
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers | Durozen',
    description: 'Join Durozen and help us build serious digital products for ambitious teams.',
    url: 'https://www.durozen.in/careers',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Durozen',
    description: 'Join Durozen and help us build serious digital products for ambitious teams.',
  },
};

export default function CareersPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Careers | Durozen",
  "description": "Join Durozen and help us build serious digital products for ambitious teams.",
  "url": "https://www.durozen.in/careers"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Careers />
    </>
  );
}
