import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { customSoftwareDevelopmentData } from '@/data/services/custom-software-development';

export const metadata: Metadata = {
  title: customSoftwareDevelopmentData.seo.title,
  description: customSoftwareDevelopmentData.seo.description,
  alternates: { canonical: `/services/${customSoftwareDevelopmentData.slug}` },
  openGraph: {
    title: customSoftwareDevelopmentData.seo.title,
    description: customSoftwareDevelopmentData.seo.description,
    url: `https://www.durozen.in/services/${customSoftwareDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: customSoftwareDevelopmentData.seo.title,
    description: customSoftwareDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={customSoftwareDevelopmentData} />;
}
