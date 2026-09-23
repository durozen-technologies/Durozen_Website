import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import TermsOfService from '@/views/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | Durozen',
  description:
    'Terms and conditions for using the Durozen website and our services.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service | Durozen',
    description: 'Terms and conditions for using the Durozen website and our services.',
    url: 'https://durozen.in/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Durozen',
    description: 'Terms and conditions for using the Durozen website and our services.',
  },
};

export default function TermsPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service | Durozen",
  "description": "Terms and conditions for using the Durozen website and our services.",
  "url": "https://durozen.in/terms"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <TermsOfService />
    </>
  );
}
