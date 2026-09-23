import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Durozen',
  description:
    'Read our Privacy Policy detailing how we handle, protect, and use your personal information at Durozen.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy | Durozen',
    description: 'Read our Privacy Policy detailing how we handle, protect, and use your personal information at Durozen.',
    url: 'https://www.durozen.in/privacy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Durozen',
    description: 'Read our Privacy Policy detailing how we handle, protect, and use your personal information at Durozen.',
  },
};

export default function PrivacyPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy | Durozen",
  "description": "Read our Privacy Policy detailing how we handle, protect, and use your personal information at Durozen.",
  "url": "https://www.durozen.in/privacy"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <PrivacyPolicy />
    </>
  );
}
