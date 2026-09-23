import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: 'Durozen | Enterprise Software & IT Services',
  description:
    'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Durozen | Enterprise Software & IT Services',
    description: 'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
    url: 'https://durozen.in',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Durozen | Enterprise Software & IT Services',
    description: 'Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.',
  },
};

export default function HomePage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Durozen | Enterprise Software & IT Services",
  "description": "Engineering Digital Excellence for the Modern Enterprise. We build scalable software, cloud-native platforms, AI-powered solutions, and enterprise applications.",
  "url": "https://durozen.in"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Home />
    </>
  );
}
