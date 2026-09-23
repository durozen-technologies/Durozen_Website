import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import Solutions from '@/views/Solutions';

export const metadata: Metadata = {
  title: 'Solutions | Durozen',
  description:
    'Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more.',
  alternates: { canonical: '/solutions' },
  openGraph: {
    title: 'Solutions | Durozen',
    description: 'Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more.',
    url: 'https://durozen.in/solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions | Durozen',
    description: 'Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more.',
  },
};

export default function SolutionsPage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Solutions | Durozen",
  "description": "Business platforms that solve operational problems. ERP, CRM, AI Automation, BI, and more.",
  "url": "https://durozen.in/solutions"
};

  return (
    <>
      <JsonLd data={jsonLd} />
      <Solutions />
    </>
  );
}
