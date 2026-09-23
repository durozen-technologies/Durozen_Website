import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Services from '@/views/Services';

export const metadata: Metadata = {
  title: 'Services | Durozen',
  description:
    'Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services | Durozen',
    description: 'Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.',
    url: 'https://durozen.in/services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Durozen',
    description: 'Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.',
  },
};

export default function ServicesPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Services | Durozen",
  "description": "Enterprise IT services engineered for scale. Premium delivery across software, cloud, AI, product design, data, DevOps, and digital transformation.",
  "url": "https://durozen.in/services"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Services />
    </>
  );
}
