import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { qaAndAutomationData } from '@/data/services/qa-and-automation';

export const metadata: Metadata = {
  title: qaAndAutomationData.seo.title,
  description: qaAndAutomationData.seo.description,
  alternates: { canonical: `/services/${qaAndAutomationData.slug}` },
  openGraph: {
    title: qaAndAutomationData.seo.title,
    description: qaAndAutomationData.seo.description,
    url: `https://durozen.in/services/${qaAndAutomationData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: qaAndAutomationData.seo.title,
    description: qaAndAutomationData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={qaAndAutomationData} />;
}
