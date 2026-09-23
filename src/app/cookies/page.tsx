import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import CookiePolicy from '@/views/CookiePolicy';

export const metadata: Metadata = {
  title: 'Cookie Policy | Durozen',
  description:
    'Information on how Durozen uses cookies to ensure the best possible experience on our website.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    title: 'Cookie Policy | Durozen',
    description: 'Information on how Durozen uses cookies to ensure the best possible experience on our website.',
    url: 'https://durozen.in/cookies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Durozen',
    description: 'Information on how Durozen uses cookies to ensure the best possible experience on our website.',
  },
};

export default function CookiesPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cookie Policy | Durozen",
  "description": "Information on how Durozen uses cookies to ensure the best possible experience on our website.",
  "url": "https://durozen.in/cookies"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <CookiePolicy />
    </>
  );
}
