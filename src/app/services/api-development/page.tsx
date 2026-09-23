import type { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { apiDevelopmentData } from '@/data/services/api-development';

export const metadata: Metadata = {
  title: apiDevelopmentData.seo.title,
  description: apiDevelopmentData.seo.description,
  alternates: { canonical: `/services/${apiDevelopmentData.slug}` },
  openGraph: {
    title: apiDevelopmentData.seo.title,
    description: apiDevelopmentData.seo.description,
    url: `https://www.durozen.in/services/${apiDevelopmentData.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: apiDevelopmentData.seo.title,
    description: apiDevelopmentData.seo.description,
  }
};

export default function Page() {
  return <ServicePageTemplate data={apiDevelopmentData} />;
}
